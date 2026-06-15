const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

const envPath = path.join(__dirname, '..', 'functions', '.env');
const content = fs.readFileSync(envPath, 'utf8');
const env = {};
content.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
        env[match[1]] = (match[2] || '').replace(/^"|"$/g, '').trim();
    }
});

const serviceAccount = require('../service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const cocApiKey = env.COC_API_KEY;
const clanTag = env.CLAN_TAG || '#P0YVL80U';

async function run() {
    console.log('Fetching Firestore members...');
    const firestoreMembersSnap = await db.collection('members').get();
    const firestoreTags = firestoreMembersSnap.docs.map(doc => doc.id);
    
    console.log('Fetching CoC API members...');
    const membersResponse = await fetch(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(clanTag)}/members`, {
        headers: { 'Authorization': `Bearer ${cocApiKey}` }
    });
    const membersData = await membersResponse.json();
    const apiMembers = membersData.items || [];
    const apiTags = apiMembers.map(m => m.tag);

    console.log('Firestore Tags count:', firestoreTags.length);
    console.log('API Tags count:', apiTags.length);

    const tagsToRemove = firestoreTags.filter(tag => !apiTags.includes(tag));
    console.log('Tags to remove:', tagsToRemove);

    const tagsToAdd = apiTags.filter(tag => !firestoreTags.includes(tag));
    console.log('Tags to add:', tagsToAdd);
}

run();
