const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\92d080ff-98ef-42b2-8128-a91d170d46a5\\.system_generated\\steps\\1695\\content.md', 'utf8');

const regex = /src="(https:\/\/static\.wikia\.nocookie\.net\/clashofclans\/images\/[^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const rawUrl = match[1];
    const cleanUrl = rawUrl.replace(/\s+/g, '');
    if (cleanUrl.includes('2012')) {
        console.log('--- FOUND 2012 ---');
        console.log('Raw URL:', JSON.stringify(rawUrl));
        console.log('Cleaned URL:', cleanUrl);
    }
}
