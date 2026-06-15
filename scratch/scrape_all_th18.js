const fs = require('fs');
const path = require('path');

const targetUrlPattern = "https://cocbase.net/town-hall-18-layouts/page-{page}";
const outputFile = 'scratch/th18_urls.txt';

const hrefRegex = /href=["']((https:\/\/cocbase\.net)?\/([^/\s"']+\d+))["']/gi;

async function fetchLinksFromUrl(url) {
    console.log(`📡 Mengambil link dari: ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(`   ⚠️ Gagal mengambil halaman (${response.status} ${response.statusText})`);
            return null;
        }
        const html = await response.text();
        const pageLinks = [];
        
        let match;
        hrefRegex.lastIndex = 0;
        
        while ((match = hrefRegex.exec(html)) !== null) {
            let foundUrl = match[1];
            if (foundUrl.startsWith('/')) {
                foundUrl = 'https://cocbase.net' + foundUrl;
            }
            foundUrl = foundUrl.split('?')[0].split('#')[0];
            const isLayoutUrl = /-[0-9]+$/.test(foundUrl) && !/\/(tag|category|page|author|wp-content|uploads)\//i.test(foundUrl);
            
            if (isLayoutUrl) {
                pageLinks.push(foundUrl);
            }
        }
        return pageLinks;
    } catch (err) {
        console.error(`   ❌ Error fetching ${url}:`, err.message);
        return null;
    }
}

async function run() {
    const allLinks = new Set();
    let page = 1;
    let keepGoing = true;

    while (keepGoing) {
        const url = targetUrlPattern.replace('{page}', page);
        const links = await fetchLinksFromUrl(url);
        
        if (links === null || links.length === 0) {
            console.log(`🛑 Selesai atau halaman tidak ditemukan di halaman ${page}. Berhenti.`);
            keepGoing = false;
            break;
        }

        console.log(`   ✅ Ditemukan ${links.length} link di halaman ${page}`);
        links.forEach(l => allLinks.add(l));
        page++;
        // Delay 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    const linkArray = Array.from(allLinks);
    console.log(`\n🔍 SELESAI! Ditemukan total ${linkArray.length} link layout unik untuk TH18.`);

    if (linkArray.length > 0) {
        fs.writeFileSync(outputFile, linkArray.join('\n') + '\n');
        console.log(`💾 Berhasil menyimpan ${linkArray.length} link ke: ${outputFile}`);
    } else {
        console.log('\n⚠️ Tidak ditemukan link layout.');
    }
}

run();
