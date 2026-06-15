const { exec } = require('child_process');

console.log('====================================================');
console.log('StreetLourd Clash of Clans Local Sync Daemon');
console.log('Akan berjalan otomatis di background setiap 5 menit');
console.log('====================================================');

function runSync() {
    console.log(`\n[${new Date().toLocaleTimeString()}] 📡 Memulai sinkronisasi...`);
    exec('node sync.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.warn(`⚠️ Warning: ${stderr}`);
        }
        console.log(stdout.trim());
        console.log(`[${new Date().toLocaleTimeString()}] ✅ Selesai. Menunggu 5 menit berikutnya...`);
    });
}

// Jalankan pertama kali
runSync();

// Ulangi setiap 5 menit (300.000 milidetik)
setInterval(runSync, 5 * 60 * 1000);
