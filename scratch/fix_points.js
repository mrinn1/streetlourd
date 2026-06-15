const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// 1. Read Env variables for database credentials
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

// 2. Init Firebase Admin SDK
const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.log('❌ File service-account.json tidak ditemukan!');
    process.exit(1);
}

const serviceAccount = require(serviceAccountPath);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function run() {
    console.log('🔄 Memulai pemindaian anggota untuk menyeimbangkan poin...');
    const membersSnap = await db.collection('members').get();
    
    let fixCount = 0;
    const batch = db.batch();

    for (const doc of membersSnap.docs) {
        const data = doc.data();
        const tag = doc.id;
        const name = data.name || 'Unknown';
        const currentPoints = data.totalPoints !== undefined ? data.totalPoints : 500;
        const currentSidePoints = data.sidePoints || 0;

        if (currentSidePoints > 0 && currentPoints < 1500) {
            const total = currentPoints + currentSidePoints;
            let newPoints = total;
            let newSidePoints = 0;

            if (total > 1500) {
                newPoints = 1500;
                newSidePoints = total - 1500;
            }

            console.log(`⚡ Menyeimbangkan poin untuk ${name} (${tag}):`);
            console.log(`   Sebelum: Poin=${currentPoints}, Side Points=${currentSidePoints}`);
            console.log(`   Sesudah: Poin=${newPoints}, Side Points=${newSidePoints}`);

            batch.update(db.collection('members').doc(tag), {
                totalPoints: newPoints,
                sidePoints: newSidePoints
            });
            fixCount++;
        }
    }

    if (fixCount > 0) {
        await batch.commit();
        console.log(`\n✅ Sukses menyeimbangkan poin untuk ${fixCount} anggota!`);
    } else {
        console.log('\n✨ Semua poin anggota sudah dalam kondisi seimbang.');
    }
    process.exit(0);
}

run().catch(err => {
    console.error('❌ Terjadi kesalahan:', err);
    process.exit(1);
});
