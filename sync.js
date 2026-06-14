const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// ==========================================
// 1. Read Environment Variables from .env
// ==========================================
function loadEnv() {
    const envPath = path.join(__dirname, 'functions', '.env');
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
            // Remove quotes if present
            if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
                value = value.substring(1, value.length - 1);
            }
            env[key] = value;
        }
    });
    return env;
}

const env = loadEnv();
const cocApiKey = env.COC_API_KEY;
let clanTag = env.CLAN_TAG || process.argv[2];

const defaultApiBase = process.env.GITHUB_ACTIONS === 'true'
    ? 'https://cocproxy.royaleapi.dev/v1'
    : 'https://api.clashofclans.com/v1';

const cocApiBase = env.COC_API_BASE || defaultApiBase;

if (!cocApiKey || cocApiKey.includes('PASTE_API_KEY')) {
    console.error('❌ COC_API_KEY belum dikonfigurasi di functions/.env!');
    process.exit(1);
}

// ==========================================
// 2. Initialize Firebase Admin SDK
// ==========================================
const serviceAccountPath = path.join(__dirname, 'service-account.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.log('\n❌ File service-account.json tidak ditemukan di root directory!');
    if (process.env.GITHUB_ACTIONS === 'true') {
        console.log('Pastikan GitHub Secret "FIREBASE_SERVICE_ACCOUNT" telah diset dengan benar.');
    } else {
        console.log('Silakan ikuti petunjuk berikut untuk mendownloadnya secara gratis:');
        console.log('1. Buka Firebase Console -> Project Settings -> Service Accounts.');
        console.log('2. Klik tombol "Generate New Private Key" (Buat Kunci Privat Baru).');
        console.log('3. Rename file .json yang terdownload menjadi "service-account.json".');
        console.log('4. Pindahkan ke folder: ' + __dirname);
    }
    console.log('');
    process.exit(1);
}

let serviceAccount;
try {
    serviceAccount = require(serviceAccountPath);
    if (!serviceAccount || Object.keys(serviceAccount).length === 0) {
        throw new Error('File service-account.json kosong atau tidak valid.');
    }
} catch (err) {
    console.error('\n❌ Gagal membaca service-account.json:', err.message);
    console.error('Kemungkinan besar kunci privat Firebase Service Account belum dikonfigurasi di GitHub Secrets repository dengan benar.');
    console.error('Silakan periksa kembali:');
    console.error('1. Buka repositori GitHub Anda -> Settings -> Secrets and variables -> Actions.');
    console.error('2. Pastikan Secret bernama "FIREBASE_SERVICE_ACCOUNT" sudah ditambahkan dan berisi isi lengkap dari berkas json service-account.');
    console.error('3. Pastikan juga Secret "COC_API_KEY" dan "CLAN_TAG" sudah dikonfigurasi.');
    console.error('');
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// ==========================================
// 3. Main Sync Logic
// ==========================================
async function sync() {
    try {
        // Ambil clanTag dari Firestore jika tidak diinput di CLI atau .env
        if (!clanTag) {
            console.log('ℹ️ Membaca Clan Tag dari database Firestore...');
            const settingsDoc = await db.collection('settings').doc('general').get();
            if (settingsDoc.exists) {
                clanTag = settingsDoc.data().clanTag;
            }
        }

        if (!clanTag) {
            console.log('❌ Clan Tag tidak ditemukan!');
            console.log('Silakan jalankan dengan argumen: node sync.js #CLAN_TAG');
            console.log('Contoh: node sync.js #2Y9L0YQQ0');
            process.exit(1);
        }

        // Pastikan tag diawali tanda #
        if (!clanTag.startsWith('#')) {
            clanTag = '#' + clanTag;
        }
        clanTag = clanTag.toUpperCase().trim();

        console.log(`⚔️ Memulai sinkronisasi untuk Clan Tag: ${clanTag}...`);

        // Fetch Clan Info
        console.log('📡 Menghubungi API Clash of Clans (Info Clan)...');
        const fullUrl = `${cocApiBase}/clans/${encodeURIComponent(clanTag)}`;
        console.log(`🔍 [DEBUG] API Base: ${cocApiBase}`);
        console.log(`🔍 [DEBUG] Clan Tag length: ${clanTag.length}, starts with #: ${clanTag.startsWith('#')}`);
        console.log(`🔍 [DEBUG] Clan Tag value: "${clanTag}"`);
        console.log(`🔍 [DEBUG] Full URL: ${fullUrl}`);
        const clanResponse = await fetch(fullUrl, {
            headers: { 'Authorization': `Bearer ${cocApiKey}` }
        });

        if (!clanResponse.ok) {
            let details = '';
            try {
                const errJson = await clanResponse.json();
                details = ` (${errJson.message || errJson.reason})`;
            } catch (e) {}
            throw new Error(`API CoC gagal merespon: ${clanResponse.status} - ${clanResponse.statusText}${details}`);
        }

        const clanData = await clanResponse.json();
        const clanName = clanData.name;
        console.log(`✅ Berhasil mengambil data klan: ${clanName}`);

        // Update Settings di Firestore
        await db.collection('settings').doc('general').set({
            clanTag: clanTag,
            clanName: clanName,
            lastUpdated: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log('💾 Nama klan dan tag berhasil disimpan di setelan database.');

        // Fetch Members List
        console.log('📡 Menghubungi API Clash of Clans (Anggota Clan)...');
        const membersResponse = await fetch(`${cocApiBase}/clans/${encodeURIComponent(clanTag)}/members`, {
            headers: { 'Authorization': `Bearer ${cocApiKey}` }
        });

        if (!membersResponse.ok) {
            let details = '';
            try {
                const errJson = await membersResponse.json();
                details = ` (${errJson.message || errJson.reason})`;
            } catch (e) {}
            throw new Error(`API CoC gagal mengambil anggota: ${membersResponse.status}${details}`);
        }

        const membersData = await membersResponse.json();
        const apiMembers = membersData.items || [];
        console.log(`✅ Berhasil mengambil ${apiMembers.length} anggota dari API.`);

        // Hapus anggota di Firestore yang sudah tidak ada di API (keluar klan)
        const firestoreMembersSnap = await db.collection('members').get();
        const firestoreTags = firestoreMembersSnap.docs.map(doc => doc.id);
        const apiTags = apiMembers.map(m => m.tag);

        if (apiMembers.length > 0) {
            const tagsToRemove = firestoreTags.filter(tag => !apiTags.includes(tag));
            if (tagsToRemove.length > 0) {
                console.log(`🧹 Menghapus ${tagsToRemove.length} anggota yang telah keluar dari klan...`);
                let deleteBatch = db.batch();
                let delCount = 0;
                for (const tag of tagsToRemove) {
                    deleteBatch.delete(db.collection('members').doc(tag));
                    delCount++;
                    if (delCount >= 400) {
                        await deleteBatch.commit();
                        deleteBatch = db.batch();
                        delCount = 0;
                    }
                }
                if (delCount > 0) {
                    await deleteBatch.commit();
                }
                console.log('✅ Anggota yang keluar berhasil dihapus dari database.');
            }
        }

        // Sync ke Firestore
        console.log('💾 Menyinkronkan anggota ke Firestore...');
        
        let batch = db.batch();
        let operationsCount = 0;
        const batchLimit = 400; // Firestore batch limit is 500

        for (const member of apiMembers) {
            // Ambil data detil tambahan (seperti Town Hall Level) dari endpoint /players
            console.log(`   - Mengambil info detil player: ${member.name} (${member.tag})`);
            const playerResponse = await fetch(`${cocApiBase}/players/${encodeURIComponent(member.tag)}`, {
                headers: { 'Authorization': `Bearer ${cocApiKey}` }
            });
            
            let townHallLevel = 1;
            if (playerResponse.ok) {
                const playerData = await playerResponse.json();
                townHallLevel = playerData.townHallLevel || 1;
            } else {
                let details = '';
                try {
                    const errJson = await playerResponse.json();
                    details = ` (${errJson.message || errJson.reason})`;
                } catch (e) {}
                console.warn(`   ⚠️ Gagal mengambil detil TH untuk ${member.name}${details}. Menggunakan TH default 1.`);
            }

            const memberRef = db.collection('members').doc(member.tag);
            const docSnap = await memberRef.get();

            const mappedRole = member.role === 'admin' ? 'admin' : (member.role === 'coLeader' ? 'coLeader' : (member.role === 'leader' ? 'leader' : 'member'));
            let totalPoints = 500;
            if (mappedRole === 'leader' || mappedRole === 'coLeader') {
                totalPoints = 1500;
            } else if (mappedRole === 'admin') {
                totalPoints = 1250;
            }

            let totalWars = 0;
            let totalStars = 0;
            let avgDestruction = 0;

            // Jika player sudah terdaftar di Firestore, pertahankan datanya
            if (docSnap.exists) {
                const existing = docSnap.data();
                totalPoints = existing.totalPoints !== undefined ? existing.totalPoints : totalPoints;
                totalWars = existing.totalWars || 0;
                totalStars = existing.totalStars || 0;
                avgDestruction = existing.avgDestruction || 0;
            }

            const dataToSet = {
                tag: member.tag,
                name: member.name,
                role: mappedRole,
                expLevel: member.expLevel || 1,
                trophies: member.trophies || 0,
                donations: member.donations || 0,
                donationsReceived: member.donationsReceived || 0,
                clanCapitalContributions: member.clanCapitalContributions || 0,
                townHallLevel: townHallLevel,
                totalPoints: totalPoints,
                totalWars: totalWars,
                totalStars: totalStars,
                avgDestruction: avgDestruction,
                lastSynced: admin.firestore.FieldValue.serverTimestamp()
            };

            batch.set(memberRef, dataToSet, { merge: true });
            operationsCount++;

            if (operationsCount >= batchLimit) {
                await batch.commit();
                batch = db.batch();
                operationsCount = 0;
            }
        }

        if (operationsCount > 0) {
            await batch.commit();
        }

        console.log('🎉 SINKRONISASI SUKSES! Seluruh data klan berhasil diperbarui.');
        process.exit(0);

    } catch (error) {
        console.error('❌ Terjadi kesalahan saat sinkronisasi:', error.message);
        console.error(error);
        process.exit(1);
    }
}

sync();
