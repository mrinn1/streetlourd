const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.error('No service account found');
    process.exit(1);
}
const serviceAccount = require(serviceAccountPath);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function run() {
    const snap = await db.collection('members').get();
    console.log('--- FIRESTORE MEMBERS ---');
    console.log('Total in Firestore:', snap.size);
    snap.docs.forEach(doc => {
        console.log(`- ${doc.id}: ${doc.data().name} (${doc.data().role})`);
    });
}

run();
