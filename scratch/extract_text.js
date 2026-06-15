const fs = require('fs');
const html = fs.readFileSync('scratch/check_output.html', 'utf8');

// Find all elements with text containing "link"
const regex = /<p[^>]*>([\s\S]*?)<\/p>|<div[^>]*>([\s\S]*?)<\/div>/gi;
let match;
const found = [];
while ((match = regex.exec(html)) !== null) {
    const content = (match[1] || match[2] || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (content.toLowerCase().includes('link') && content.length < 300 && content.length > 5) {
        if (!found.includes(content)) {
            found.push(content);
        }
    }
}

console.log('Texts containing "link":');
found.forEach((t, i) => console.log(`[${i+1}] ${t}`));
