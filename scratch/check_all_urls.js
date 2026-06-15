const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\92d080ff-98ef-42b2-8128-a91d170d46a5\\.system_generated\\steps\\1695\\content.md', 'utf8');

const regex = /src="(https:\/\/static\.wikia\.nocookie\.net\/clashofclans\/images\/[^"]+)"/g;
const urls = [];
let match;
while ((match = regex.exec(content)) !== null) {
    const rawUrl = match[1];
    const cleanUrl = rawUrl.replace(/\s+/g, '');
    if (!urls.includes(cleanUrl)) {
        urls.push(cleanUrl);
    }
}

console.log(`Found ${urls.length} unique URLs. Checking status...`);

function checkUrl(url) {
    return new Promise((resolve) => {
        https.request(url, { method: 'HEAD' }, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', () => {
            resolve({ url, status: 'ERROR' });
        }).end();
    });
}

async function run() {
    for (const url of urls) {
        const result = await checkUrl(url);
        if (result.status === 200) {
            console.log(`[200 OK] ${url}`);
        } else {
            console.log(`[${result.status}] ${url}`);
        }
    }
}

run();
