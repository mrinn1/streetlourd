const fs = require('fs');
const html = fs.readFileSync('scratch/check_output.html', 'utf8');

const regex = /<a[^>]*>([\s\S]*?)<\/a>/gi;
let match;
console.log('All link texts:');
while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
        console.log(`- "${text}"`);
    }
}
