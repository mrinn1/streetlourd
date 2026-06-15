const fs = require('fs');
const html = fs.readFileSync('scratch/check_output_working.html', 'utf8');

// Find all hrefs
const hrefRegex = /href=["']([^"']+)["']/g;
const hrefs = [];
let match;
while ((match = hrefRegex.exec(html)) !== null) {
    hrefs.push(match[1]);
}

console.log('Total hrefs found:', hrefs.length);

// Print all hrefs containing clash, play, coc, or layout
const interestingHrefs = hrefs.filter(h => h.includes('clash') || h.includes('play') || h.includes('coc') || h.includes('layout') || h.includes('link'));
console.log('Interesting hrefs:', interestingHrefs);

// Let's search for buttons
const btnRegex = /<a[^>]*class=["'][^"']*btn[^"']*["'][^>]*>/g;
const buttons = [];
btnRegex.lastIndex = 0;
while ((match = btnRegex.exec(html)) !== null) {
    buttons.push(match[0]);
}
console.log('Buttons:', buttons);
