const fs = require('fs');
const path = require('path');

// Target URL from argument (can contain {page} placeholder)
const targetUrlPattern = process.argv[2];
const startPage = parseInt(process.argv[3], 10);
const endPage = parseInt(process.argv[4], 10);
const outputFile = process.argv[5] || 'scratch/extracted_urls.txt';

if (!targetUrlPattern) {
    console.error('❌ Harap masukkan URL listing sebagai argumen!');
    console.log('Contoh 1 (Single Page):');
    console.log('   node scratch/extract_links.js "https://cocbase.net/town-hall-8-defence-layouts/page-3?level=9&type=war&sort=newest"');
    console.log('\nContoh 2 (Multi Page):');
    console.log('   node scratch/extract_links.js "https://cocbase.net/town-hall-8-defence-layouts/page-{page}?level=9&type=war&sort=newest" 1 5');
    process.exit(1);
}

// Regex to extract layout details link
const hrefRegex = /href=["']((https:\/\/cocbase\.net)?\/([^/\s"']+\d+))["']/gi;

async function fetchLinksFromUrl(url) {
    console.log(`📡 Mengambil link dari: ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(`   ⚠️ Gagal mengambil halaman (${response.status} ${response.statusText})`);
            return [];
        }
        const html = await response.text();
        const pageLinks = [];
        
        let match;
        // Reset regex state
        hrefRegex.lastIndex = 0;
        
        while ((match = hrefRegex.exec(html)) !== null) {
            let foundUrl = match[1];
            
            // Normalize relative urls
            if (foundUrl.startsWith('/')) {
                foundUrl = 'https://cocbase.net' + foundUrl;
            }

            // Clean query parameters and hash
            foundUrl = foundUrl.split('?')[0].split('#')[0];

            // Must end with a dash and number (layout detail pages)
            // and must not contain subpaths like /tag/, /category/, etc.
            const isLayoutUrl = /-[0-9]+$/.test(foundUrl) && !/\/(tag|category|page|author|wp-content|uploads)\//i.test(foundUrl);
            
            if (isLayoutUrl) {
                pageLinks.push(foundUrl);
            }
        }
        return pageLinks;
    } catch (err) {
        console.error(`   ❌ Error fetching ${url}:`, err.message);
        return [];
    }
}

async function run() {
    const allLinks = new Set();
    const isMultiPage = targetUrlPattern.includes('{page}') && !isNaN(startPage) && !isNaN(endPage);

    if (isMultiPage) {
        console.log(`🚀 Memulai scraping multi-halaman dari halaman ${startPage} sampai ${endPage}...`);
        for (let page = startPage; page <= endPage; page++) {
            const url = targetUrlPattern.replace('{page}', page);
            const links = await fetchLinksFromUrl(url);
            links.forEach(l => allLinks.add(l));
            // Add a small delay between requests to be polite
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    } else {
        const links = await fetchLinksFromUrl(targetUrlPattern);
        links.forEach(l => allLinks.add(l));
    }

    const linkArray = Array.from(allLinks);
    console.log(`\n🔍 SELESAI! Ditemukan total ${linkArray.length} link layout unik:`);
    linkArray.forEach((link, idx) => {
        console.log(`   [${idx + 1}] ${link}`);
    });

    if (linkArray.length > 0) {
        const outputDir = path.dirname(path.resolve(outputFile));
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(outputFile, linkArray.join('\n') + '\n');
        console.log(`\n💾 Berhasil menyimpan ${linkArray.length} link ke: ${outputFile}`);
        console.log(`💡 Anda sekarang bisa langsung mengimpornya dengan menjalankan:`);
        console.log(`   node scratch/import_bulk_urls.js ${outputFile}`);
    } else {
        console.log('\n⚠️ Tidak ditemukan link layout yang cocok. Silakan periksa kembali halaman target.');
    }
}

run();
