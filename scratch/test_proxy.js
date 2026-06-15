const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', 'functions', '.env');
if (!fs.existsSync(envPath)) {
    console.error('No env file found');
    process.exit(1);
}
const content = fs.readFileSync(envPath, 'utf8');
const env = {};
content.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
        env[match[1]] = (match[2] || '').replace(/^"|"$/g, '').trim();
    }
});

const key = env.COC_API_KEY;
const tag = env.CLAN_TAG || '#P0YVL80U';

console.log('Testing RoyaleAPI proxy with tag:', tag);
fetch(`https://cocproxy.royaleapi.dev/v1/clans/${encodeURIComponent(tag)}`, {
    headers: { 'Authorization': `Bearer ${key}` }
})
.then(async r => {
    console.log('Status:', r.status, r.statusText);
    const json = await r.json();
    console.log('Response JSON:', JSON.stringify(json, null, 2));
})
.catch(e => console.error('Error:', e));
