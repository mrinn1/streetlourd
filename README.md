# ⚔️ VictoryToClan — Clash of Clans Clan Management System

VictoryToClan adalah website manajemen clan Clash of Clans (CoC) premium dengan tampilan moderen, interaktif, dan terinspirasi dari website resmi **Supercell Store**. Website ini dibangun sebagai Single Page Application (SPA) yang ringan, dapat di-host di GitHub Pages secara gratis, dan menggunakan Firebase sebagai backend (Auth & Firestore).

---

## 🎨 Fitur Utama

- **Supercell Store Visual Style**: Hero banner besar, glassmorphic layout, micro-animations, gold-shimmer ranking, dark mode solid.
- **Floating Particles**: Efek partikel melayang yang halus di latar belakang menggunakan HTML5 Canvas.
- **Firebase Auth (Google Sign-In)**: Login aman bagi anggota clan.
- **Role-Based Access Control**: Pembagian akses level admin (Leader / Co-Leader) untuk mengelola data clan dan input manual.
- **Dynamic Point System**: Sistem reward dan punishment point untuk memacu kontribusi anggota (Ikut War, Donasi, Clan Games, Keaktifan, Pelanggaran Aturan).
- **Coc API Sync**: Sinkronisasi data anggota langsung dari Clash of Clans API (menggunakan Firebase Cloud Functions sebagai proxy CORS).
- **Clan Leaderboard**: Ranking kontribusi anggota teratas dengan visual podium khusus untuk Top 3.
- **War Tracker**: Rekam jejak perang clan lengkap dengan attack tracker, bintang, dan destruction percentage.
- **Interactive Charts**: Grafik data performa clan (donasi, perolehan point, histori war) menggunakan Chart.js.

---

## 📂 Struktur Folder

```
VictoryToClan/
├── index.html                    # Main SPA entry point (Tailwind v4 Play CDN)
├── css/
│   └── styles.css                # Visual effects, animations, transitions, scrollbars
├── js/
│   ├── app.js                    # SPA Router & initialization
│   ├── config/
│   │   └── firebase.js           # Firebase configuration
│   ├── services/
│   │   ├── auth.js               # Google login & User Roles management
│   │   ├── firestore.js          # Firestore CRUD logs & records
│   │   └── cocApi.js             # Clash of Clans API Proxy client
│   ├── pages/
│   │   ├── landing.js            # Landing page (Hero, features summary)
│   │   ├── dashboard.js          # Dashboard overview & key counters
│   │   ├── members.js            # Searchable Members list with TH badges
│   │   ├── memberDetail.js       # Player profiles, history, points logs
│   │   ├── leaderboard.js        # Clan leaderboard podium & list
│   │   ├── warHistory.js         # War timelines & results
│   │   ├── statistics.js         # Chart.js analytical dashboards
│   │   ├── clanRules.js          # View clan rewards & punishments list
│   │   └── admin.js              # Point adjustments, war entry, user role edits
│   ├── components/
│   │   ├── navbar.js             # Responsive top navbar with user profile
│   │   ├── footer.js             # Supercell-style dark footer
│   │   ├── card.js               # Reusable dashboard, member, war, rank cards
│   │   ├── modal.js              # Reusable confirmation dialogs
│   │   ├── toast.js              # Toast notification system
│   │   ├── skeleton.js           # Loading placeholders
│   │   ├── particles.js          # Canvas particles system
│   │   └── charts.js             # Chart.js initialization configurations
│   └── utils/
│       ├── helpers.js            # General formatting helpers
│       ├── constants.js          # Town Hall, Points systems, roles definitions
│       └── animations.js         # Intersection Observer scroll and page transitions
├── assets/
│   └── images/
│       └── hero-bg.png           # Hero banner cinematic illustration
├── functions/                    # Firebase Cloud Functions (CORS proxy for CoC API)
│   ├── index.js                  # Functions entry point
│   └── package.json              # Functions dependencies list
├── firebase.json                 # Firebase deployment settings
├── firestore.rules               # Firestore security configurations
└── firestore.indexes.json        # Firestore compound indexes configurations
```

---

## 🚀 Cara Menjalankan Project Secara Lokal

### Prasyarat
- **Node.js** (v18 ke atas) terinstall di komputer Anda.
- Firebase CLI terinstall global (`npm install -g firebase-tools`).

### 1. Clone & Jalankan Static Server
Karena ini adalah SPA berbasis ES Modules, halaman `index.html` harus dijalankan melalui server lokal (tidak bisa langsung double click file di browser).
Anda dapat menggunakan server bawaan XAMPP di `htdocs` atau menggunakan utility CLI:

```bash
# Menggunakan serve (CLI static server)
npx serve .
```
Lalu buka alamat `http://localhost:3000` di browser Anda.

### 2. Hubungkan ke Firebase Project Anda
1. Buat project Firebase baru di [Firebase Console](https://console.firebase.google.com/).
2. Aktifkan **Authentication** dengan provider **Google Sign-In**.
3. Buat database **Firestore** (pilih mode produksi atau pengujian).
4. Daftarkan aplikasi web baru di project Firebase Anda, lalu salin objek konfigurasi Firebase-nya.
5. Buka file [js/config/firebase.js](file:///c:/xampp/htdocs/VIctoryToClan/js/config/firebase.js) dan ganti nilai konstanta `firebaseConfig` dengan config Anda:
   ```javascript
   const firebaseConfig = {
       apiKey: "API_KEY_ANDA",
       authDomain: "PROJECT_ID_ANDA.firebaseapp.com",
       projectId: "PROJECT_ID_ANDA",
       storageBucket: "PROJECT_ID_ANDA.firebasestorage.app",
       messagingSenderId: "SENDER_ID_ANDA",
       appId: "APP_ID_ANDA"
   };
   ```

### 3. Mengatur Clash of Clans API & Cloud Functions
Karena Clash of Clans API membatasi request langsung dari browser (CORS policy), kita menggunakan **Firebase Cloud Functions** sebagai proxy.
1. Daftarkan akun Anda dan buat API Key di [developer.clashofclans.com](https://developer.clashofclans.com).
   - *Catatan*: Saat mendaftarkan API Key, masukkan alamat IP public server Anda (atau `0.0.0.0` jika Anda ingin key tersebut dapat diakses dari mana saja).
2. Ubah target `API_BASE_URL` di [js/utils/constants.js](file:///c:/xampp/htdocs/VIctoryToClan/js/utils/constants.js) baris 81 agar merujuk ke URL Cloud Functions Anda:
   ```javascript
   export const API_BASE_URL = 'https://us-central1-PROJECT_ID_ANDA.cloudfunctions.net';
   ```
3. Set API Key Clash of Clans di konfigurasi Cloud Functions:
   ```bash
   # Masuk ke folder functions
   cd functions
   # Install dependencies fungsi
   npm install
   # Set API Key ke environment config Firebase
   firebase functions:config:set coc.key="API_KEY_CLASH_OF_CLANS_ANDA"
   ```

---

## 📦 Panduan Deployment ke Production

### 1. Deploy Firebase Backend (Rules, Indexes & Cloud Functions)
Kembali ke root directory `VictoryToClan` dan jalankan perintah:

```bash
# Login ke akun Firebase Anda
firebase login

# Pilih project Firebase aktif Anda
firebase use --add

# Deploy Rules & Indexes Firestore
firebase deploy --only firestore

# Deploy Cloud Functions Proxy
firebase deploy --only functions
```

### 2. Deploy Frontend ke GitHub Pages
Karena website ini merupakan static web SPA, Anda dapat meng-host-nya secara gratis di GitHub Pages:
1. Buat repository baru di GitHub.
2. Commit dan Push seluruh source code Anda ke repository tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit VictoryToClan"
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Buka tab **Settings** di repository GitHub Anda → masuk ke menu **Pages**.
4. Di bagian **Build and deployment**, pilih Source: **Deploy from a branch**.
5. Pilih branch **main** dan folder `/ (root)`, lalu klik **Save**.
6. Dalam beberapa menit, website Anda akan live di `https://USERNAME.github.io/REPO_NAME/`.

---

## ⚙️ Cara Setup Admin Awal
1. Buka website Anda yang sudah berjalan.
2. Klik tombol **Login** dan masuk menggunakan akun Google Anda.
3. Setelah login pertama kali, akun Anda akan terdaftar sebagai user baru di Firestore.
4. Buka Firebase Console → Masuk ke **Firestore Database** → Cari dokumen user Anda di dalam collection `users`.
5. Ubah field `role` akun Anda dari `'member'` menjadi `'leader'`.
6. Refresh halaman website Anda. Sekarang Anda akan melihat menu **Admin Panel** di navbar untuk mengelola point, menambahkan data war, dan melakukan sinkronisasi data anggota langsung dari CoC API!
