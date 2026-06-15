const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const dir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const files = [
    {
        name: 'theme_war.mp3',
        url: 'https://static.wikia.nocookie.net/clashofclans/images/7/78/Combat_Planning_Music.mp3/revision/latest?cb=20250406085929'
    },
    {
        name: 'theme_classic.mp3',
        url: 'https://static.wikia.nocookie.net/clashofclans/images/4/40/Combat_Planning_Music_2012.mp3/revision/latest?cb=20250414051929'
    }
];

function downloadWithRedirects(fileUrl, destPath, redirectCount = 0) {
    return new Promise((resolve, reject) => {
        if (redirectCount > 5) {
            reject(new Error('Too many redirects'));
            return;
        }

        const parsedUrl = new URL(fileUrl);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.search,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': '*/*'
            }
        };

        const client = parsedUrl.protocol === 'https:' ? https : http;

        client.get(options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let redirectUrl = res.headers.location;
                if (!redirectUrl.startsWith('http')) {
                    redirectUrl = new URL(redirectUrl, fileUrl).href;
                }
                resolve(downloadWithRedirects(redirectUrl, destPath, redirectCount + 1));
                return;
            }

            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download: status code ${res.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(destPath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                resolve(true);
            });

            fileStream.on('error', (err) => {
                fileStream.close();
                if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function run() {
    for (const f of files) {
        const dest = path.join(dir, f.name);
        try {
            console.log(`Downloading ${f.name} from ${f.url}...`);
            await downloadWithRedirects(f.url, dest);
            const stats = fs.statSync(dest);
            console.log(`Successfully downloaded ${f.name} (${stats.size} bytes)`);
        } catch (err) {
            console.error(`Error downloading ${f.name}:`, err.message);
        }
    }
    console.log("All done!");
}

run();
