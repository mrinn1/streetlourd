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

async function inspect() {
    try {
        console.log('--- Inspecting Point History Reasons ---');
        const phSnap = await db.collection('pointHistory').get();
        const reasons = {};
        phSnap.forEach(doc => {
            const data = doc.data();
            const key = `${data.category || 'no_cat'} | ${data.reason || 'no_reason'} | ${data.amount || 0}`;
            reasons[key] = (reasons[key] || 0) + 1;
        });
        console.log(JSON.stringify(reasons, null, 2));
        
        process.exit(0);
    } catch (err) {
        console.error('Error inspecting database:', err);
        process.exit(1);
    }
}

inspect();
