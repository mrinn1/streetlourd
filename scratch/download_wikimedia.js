const fs = require('fs');
const https = require('https');
const path = require('path');

const dest = path.join(__dirname, '..', 'assets', 'audio', 'theme_war.mp3'); // We can save it as theme_war.mp3 even if it is ogg/mp3, but wait! Let's save it as theme_war.ogg or theme_war.mp3.
// Wait! Let's download a real MP3 file so the browser is guaranteed to play it on all platforms!
// Let's find a real MP3 on Wikimedia Commons.
// E.g., Pyotr Ilyich Tchaikovsky - Romeo and Juliet Overture-Fantasy is often hosted as MP3, or we can search for a CC-BY MP3 track.
// Wait, is there a direct MP3 url on Wikimedia?
// Let's check: https://upload.wikimedia.org/wikipedia/commons/d/df/Tchaikovsky_Romeo_and_Juliet_Overture_Fantasy.mp3
// Let's write a script to download it!
const url = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Tchaikovsky_Romeo_and_Juliet_Overture_Fantasy_intro.mp3';

const fileStream = fs.createWriteStream(dest);
console.log(`Downloading Tchaikovsky intro from Wikimedia to ${dest}...`);

https.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0'
    }
}, (res) => {
    if (res.statusCode !== 200) {
        console.error(`Status code: ${res.statusCode}`);
        fileStream.close();
        fs.unlinkSync(dest);
        return;
    }
    res.pipe(fileStream);
    fileStream.on('finish', () => {
        fileStream.close();
        const stats = fs.statSync(dest);
        console.log(`Successfully downloaded theme_war.mp3 (${stats.size} bytes)`);
    });
}).on('error', (err) => {
    console.error('Error:', err);
    fileStream.close();
    if (fs.existsSync(dest)) fs.unlinkSync(dest);
});
