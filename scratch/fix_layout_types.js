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

function detectTypeAndCategory(title, currentCategory) {
    const titleLower = title.toLowerCase();
    
    // Default fallback values
    let category = currentCategory || 'home';
    let type = 'war';
    let district = '';

    // 1. Detect Category
    if (titleLower.match(/\bbh\s*\d+\b/) || titleLower.match(/\bbuilder\s*hall\s*\d+\b/)) {
        category = 'builder';
        type = '';
    } else if (titleLower.match(/\bch\s*\d+\b/) || titleLower.match(/\bcapital\s*hall\s*\d+\b/) || titleLower.match(/\bcapital\s*peak\b/)) {
        category = 'capital';
        type = '';
        district = 'capital_peak';
    } else if (titleLower.match(/\bth\s*\d+\b/) || titleLower.match(/\btown\s*hall\s*\d+\b/)) {
        category = 'home';
    }

    // Assign Capital Peak district details if needed
    if (category === 'capital') {
        if (titleLower.includes('peak') || titleLower.includes('puncak')) district = 'capital_peak';
        else if (titleLower.includes('barbarian') || titleLower.includes('barbar')) district = 'barbarian_camp';
        else if (titleLower.includes('wizard') || titleLower.includes('penyihir')) district = 'wizard_valley';
        else if (titleLower.includes('balloon') || titleLower.includes('balon')) district = 'balloon_lagoon';
        else if (titleLower.includes('workshop') || titleLower.includes('bengkel')) district = 'builders_workshop';
        else if (titleLower.includes('dragon') || titleLower.includes('naga')) district = 'dragon_cliffs';
        else if (titleLower.includes('golem') || titleLower.includes('tambang')) district = 'golem_quarry';
        else if (titleLower.includes('skeleton') || titleLower.includes('rangka')) district = 'skeleton_park';
        else if (titleLower.includes('goblin')) district = 'goblin_mines';
        else district = 'capital_peak';
    }

    // 2. Detect Type (only for home village)
    if (category === 'home') {
        // Precise keyword matching using word boundaries and specific matches
        if (titleLower.match(/\banti[- ]?2\b/) || titleLower.match(/\banti[- ]?two\b/)) {
            type = 'anti_2';
        } else if (titleLower.match(/\banti[- ]?3\b/) || titleLower.match(/\banti[- ]?three\b/)) {
            type = 'anti_3';
        } else if (titleLower.match(/\btroll\b/)) {
            type = 'troll';
        } else if (titleLower.match(/\b(fun|funny|art)\b/)) {
            type = 'fun';
        } else if (titleLower.match(/\bhybrid\b/)) {
            type = 'hybrid';
        } else if (titleLower.match(/\b(anti[- ]?air|dragonloon|balloon|lavaloon|dragon|drag)\b/)) {
            type = 'anti_air';
        } else if (titleLower.match(/\b(anti[- ]?ground|hog|valkyrie|witch|giant)\b/)) {
            type = 'anti_ground';
        } else if (titleLower.match(/\bwar\b/)) {
            type = 'war';
        } else if (titleLower.match(/\b(farming|farm|loot)\b/)) {
            type = 'farming';
        } else if (titleLower.match(/\b(defense|defence|defend|protect|shield|defender)\b/)) {
            type = 'defense';
        } else {
            type = 'war'; // standard default fallback
        }
    }

    return { category, type, district };
}

async function fixLayouts() {
    try {
        console.log('📡 Fetching all layout documents from Firestore...');
        const snap = await db.collection('layouts').get();
        console.log(`🔍 Found ${snap.size} layout documents.`);

        let updatedCount = 0;
        let batch = db.batch();
        let ops = 0;

        for (const doc of snap.docs) {
            const data = doc.data();
            const title = data.title || '';
            const currentCat = data.category || 'home';
            
            const detected = detectTypeAndCategory(title, currentCat);

            // Only update if there is a change
            if (data.category !== detected.category || data.type !== detected.type || data.district !== detected.district) {
                console.log(`✏️ Updating layout [${doc.id}]:`);
                console.log(`   Title: "${title}"`);
                console.log(`   Old -> Category: ${data.category}, Type: ${data.type}, District: ${data.district}`);
                console.log(`   New -> Category: ${detected.category}, Type: ${detected.type}, District: ${detected.district}`);
                
                batch.update(doc.ref, {
                    category: detected.category,
                    type: detected.type,
                    district: detected.district
                });
                
                updatedCount++;
                ops++;

                if (ops >= 400) {
                    await batch.commit();
                    batch = db.batch();
                    ops = 0;
                }
            }
        }

        if (ops > 0) {
            await batch.commit();
        }

        console.log(`\n🎉 SUCCESS! Updated ${updatedCount} layouts with corrected types/categories.`);
        process.exit(0);
    } catch (err) {
        console.error('❌ Error updating layouts:', err);
        process.exit(1);
    }
}

fixLayouts();
