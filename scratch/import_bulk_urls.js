const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// Load environment variables
function loadEnv() {
    const envPath = path.join(__dirname, '..', 'functions', '.env');
    if (!fs.existsSync(envPath)) {
        console.error('❌ File functions/.env tidak ditemukan!');
        process.exit(1);
    }
    const content = fs.readFileSync(envPath, 'utf8');
    const env = {};
    content.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
            let key = match[1];
            let value = match[2] || '';
            if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
                value = value.substring(1, value.length - 1);
            }
            env[key] = value;
        }
    });
    return env;
}

const env = loadEnv();

// Initialize Firebase
const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.error('❌ service-account.json tidak ditemukan!');
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath))
});

const db = admin.firestore();

// Helper delay function
const delay = ms => new Promise(res => setTimeout(res, ms));

// Target file from argument
const filePath = process.argv[2];
if (!filePath) {
    console.error('❌ Harap masukkan path file yang berisi daftar URL!');
    console.log('Contoh: node scratch/import_bulk_urls.js scratch/urls.txt');
    process.exit(1);
}

if (!fs.existsSync(filePath)) {
    console.error(`❌ File ${filePath} tidak ditemukan!`);
    process.exit(1);
}

const urls = fs.readFileSync(filePath, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('http://') || line.startsWith('https://'));

if (urls.length === 0) {
    console.log('⚠️ Tidak ada URL valid ditemukan di dalam file.');
    process.exit(0);
}

async function scrapeUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
    }
    const html = await response.text();

    // 1. Extract CoC Layout Link
    const cocLinkMatch = html.match(/href=\x22([^\x22]*link\.clashofclans\.com[^\x22]*)\x22/i) || 
                         html.match(/href='([^']*link\.clashofclans\.com[^']*)'/i);
    if (!cocLinkMatch) {
        throw new Error('Tidak ditemukan link Clash of Clans (link.clashofclans.com)');
    }
    let cocLink = cocLinkMatch[1].replace(/&amp;/g, '&');

    // 2. Extract Title
    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    let title = titleMatch ? titleMatch[1].trim() : 'Base Layout';
    title = title.replace(/\s*-\s*CocBase\.Net/gi, '')
                 .replace(/\s*With\s*Link/gi, '')
                 .trim();

    // 3. Extract Image URL (og:image)
    const ogImageMatch = html.match(/<meta property=\x22og:image\x22 content=\x22([^\x22]*)\x22/i) ||
                         html.match(/<meta name=\x22twitter:image\x22 content=\x22([^\x22]*)\x22/i);
    let imageUrl = ogImageMatch ? ogImageMatch[1].trim() : '';

    if (!imageUrl) {
        const imgMatch = html.match(/<img[^>]*src=\x22([^\x22]*uploads\/layouts[^\x22]*)\x22/i) ||
                         html.match(/<img[^>]*src=\x22([^\x22]*)\x22/i);
        imageUrl = imgMatch ? imgMatch[1].trim() : '';
    }

    // 4. Auto-detect Level and Category
    let category = 'home';
    let townHallLevel = 18;
    let type = 'war';
    let district = '';

    const titleLower = title.toLowerCase();
    const textLower = (title + ' ' + html.substring(0, 5000)).toLowerCase();

    if (titleLower.match(/\bth\s*\d+\b/) || titleLower.match(/\btown\s*hall\s*\d+\b/)) {
        category = 'home';
    } else if (titleLower.match(/\bbh\s*\d+\b/) || titleLower.match(/\bbuilder\s*hall\s*\d+\b/)) {
        category = 'builder';
        type = '';
    } else if (titleLower.match(/\bch\s*\d+\b/) || titleLower.match(/\bcapital\s*hall\s*\d+\b/) || titleLower.match(/\bcapital\s*peak\b/)) {
        category = 'capital';
        type = '';
        district = 'capital_peak';
    } else {
        if (textLower.includes('builder') || textLower.includes(' bh') || textLower.includes('bh ')) {
            category = 'builder';
            type = '';
        } else if (textLower.includes('capital') || textLower.includes(' ch') || textLower.includes('ch ') || textLower.includes('district') || textLower.includes('peak')) {
            category = 'capital';
            type = '';
            if (textLower.includes('peak') || textLower.includes('puncak')) district = 'capital_peak';
            else if (textLower.includes('barbarian') || textLower.includes('barbar')) district = 'barbarian_camp';
            else if (textLower.includes('wizard') || textLower.includes('penyihir')) district = 'wizard_valley';
            else if (textLower.includes('balloon') || textLower.includes('balon')) district = 'balloon_lagoon';
            else if (textLower.includes('workshop') || textLower.includes('bengkel')) district = 'builders_workshop';
            else if (textLower.includes('dragon') || textLower.includes('naga')) district = 'dragon_cliffs';
            else if (textLower.includes('golem') || textLower.includes('tambang')) district = 'golem_quarry';
            else if (textLower.includes('skeleton') || textLower.includes('rangka')) district = 'skeleton_park';
            else if (textLower.includes('goblin')) district = 'goblin_mines';
            else district = 'capital_peak';
        }
    }

    // Detect Level
    const levelMatch = title.match(/(?:th|town\s*hall|level|lvl|ch|bh)\s*(\d+)/i) || 
                       textLower.match(/(?:th|town\s*hall|level|lvl|ch|bh)\s*(\d+)/i);
    if (levelMatch) {
        townHallLevel = parseInt(levelMatch[1]);
    }

    // Detect Type
    if (category === 'home') {
        if (titleLower.includes('anti 2') || titleLower.includes('anti-2')) type = 'anti_2';
        else if (titleLower.includes('anti 3') || titleLower.includes('anti-3')) type = 'anti_3';
        else if (titleLower.includes('anti air') || titleLower.includes('anti-air')) type = 'anti_air';
        else if (titleLower.includes('anti ground') || titleLower.includes('anti-ground')) type = 'anti_ground';
        else if (titleLower.includes('fun')) type = 'fun';
        else if (titleLower.includes('troll')) type = 'troll';
        else if (titleLower.includes('war')) type = 'war';
        else if (titleLower.includes('farming') || titleLower.includes('trophy')) type = 'farming';
        else if (titleLower.includes('hybrid')) type = 'hybrid';
        else if (titleLower.includes('defence') || titleLower.includes('defense')) type = 'defense';
        else {
            if (textLower.includes('anti 2') || textLower.includes('anti-2')) type = 'anti_2';
            else if (textLower.includes('anti 3') || textLower.includes('anti-3')) type = 'anti_3';
            else if (textLower.includes('anti air') || textLower.includes('anti-air')) type = 'anti_air';
            else if (textLower.includes('anti ground') || textLower.includes('anti-ground')) type = 'anti_ground';
            else if (textLower.includes('fun')) type = 'fun';
            else if (textLower.includes('troll')) type = 'troll';
            else if (textLower.includes('war')) type = 'war';
            else if (textLower.includes('farming') || textLower.includes('trophy')) type = 'farming';
            else if (textLower.includes('hybrid')) type = 'hybrid';
            else if (textLower.includes('defence') || textLower.includes('defense')) type = 'defense';
        }
    }

    return {
        title,
        link: cocLink,
        imageUrl,
        category,
        townHallLevel,
        type,
        district,
        rating: 5,
        addedBy: 'Bulk Scraper',
        lastUpdatedBy: 'Bulk Scraper',
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
}

async function run() {
    console.log(`🚀 Memulai import massal ${urls.length} URLs...`);
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`\n[${i + 1}/${urls.length}] Memproses: ${url}`);
        try {
            const data = await scrapeUrl(url);
            await db.collection('layouts').add(data);
            console.log(`   ✅ BERHASIL: ${data.title} (${data.category.toUpperCase()} ${data.townHallLevel})`);
            successCount++;
        } catch (err) {
            console.error(`   ❌ GAGAL: ${err.message}`);
            failCount++;
        }
        // Jeda 1 detik agar tidak membebani server target
        if (i < urls.length - 1) {
            await delay(1000);
        }
    }

    console.log('\n==========================================');
    console.log(`🎉 IMPORT SELESAI!`);
    console.log(`   - Berhasil: ${successCount}`);
    console.log(`   - Gagal: ${failCount}`);
    console.log('==========================================');
    process.exit(0);
}

run();
