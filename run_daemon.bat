@echo off
cd /d "%~dp0"
title StreetLourd Sync Daemon
echo [~] Memulai Daemon Sinkronisasi Otomatis (Setiap 5 menit)...
node sync_daemon.js
pause
