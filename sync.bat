@echo off
:: Pindah ke folder project
cd /d "%~dp0"

echo [~] Menjalankan sinkronisasi data klan...
node sync.js

echo [+][%date% %time%] Sinkronisasi selesai!
timeout /t 5
