const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.error('❌ service-account.json not found!');
    process.exit(1);
}

const serviceAccount = require(serviceAccountPath);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function inspectLayouts() {
    try {
        console.log('--- inspecting layouts collection ---');
        const snap = await db.collection('layouts').get();
        console.log(`total layout documents: ${snap.size}`);

        const stats = {};
        snap.forEach(doc => {
            const data = doc.data();
            const key = `category: ${data.category || 'N/A'}, level: ${data.townHallLevel || 'N/A'}, type: ${data.type || 'N/A'}`;
            stats[key] = stats[key] || [];
            stats[key].push({
                id: doc.id,
                title: data.title,
                link: data.link
            });
        });

        console.log(JSON.stringify(stats, null, 2));
        process.exit(0);
    } catch (err) {
        console.error('Error inspecting layouts:', err);
        process.exit(1);
    }
}

inspectLayouts();
