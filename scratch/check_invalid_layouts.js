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

async function checkInvalidLayouts() {
    try {
        const snap = await db.collection('layouts').get();
        console.log(`Total layouts: ${snap.size}`);
        
        const invalidList = [];
        snap.forEach(doc => {
            const data = doc.data();
            // Checking for townHallLevel > 17 (since CoC maximum TH is 17) or townHallLevel === 18 (default fallback)
            // or categories/types that don't match standard lists.
            const isInvalidLevel = data.townHallLevel === 18 || data.townHallLevel === undefined || data.townHallLevel > 17;
            const isInvalidCategory = !['home', 'builder', 'capital'].includes(data.category);
            
            if (isInvalidLevel || isInvalidCategory) {
                invalidList.push({
                    id: doc.id,
                    title: data.title,
                    category: data.category,
                    townHallLevel: data.townHallLevel,
                    type: data.type,
                    link: data.link
                });
            }
        });

        console.log('\n--- INVALID/UNEXPECTED LAYOUTS ---');
        console.log(JSON.stringify(invalidList, null, 2));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

checkInvalidLayouts();
