const fs = require('fs');

async function checkUrl(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) return { url, hasLink: false, status: res.status };
        const html = await res.text();
        const hasLink = html.includes('link.clashofclans.com');
        return { url, hasLink, status: 200 };
    } catch (e) {
        return { url, hasLink: false, status: 'ERROR: ' + e.message };
    }
}

async function run() {
    const files = ['scratch/bh4_urls.txt', 'scratch/bh5_urls.txt', 'scratch/bh6_urls.txt', 'scratch/bh8_urls.txt', 'scratch/bh10_urls.txt'];
    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        const urls = fs.readFileSync(file, 'utf8').split('\n').map(line => line.trim()).filter(line => line.startsWith('http')).slice(0, 3);
        console.log(`--- Checking first 3 URLs in ${file} ---`);
        for (const url of urls) {
            const res = await checkUrl(url);
            console.log(`   ${res.hasLink ? '✅ HAS LINK' : '❌ NO LINK'} - ${url}`);
        }
    }
}

run();
