// ============================================================
// StreetLourd — Firebase Configuration
// ============================================================

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js';
import { initializeFirestore } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js';

// ===================================================
// ⚠️ REPLACE THESE WITH YOUR FIREBASE PROJECT CONFIG
// ===================================================
const firebaseConfig = {
    apiKey: "AIzaSyCJvQDiM7JQ7n0si8UgI-lpVA7CgiVD8eA",
    authDomain: "victorytoclan.firebaseapp.com",
    projectId: "victorytoclan",
    storageBucket: "victorytoclan.firebasestorage.app",
    messagingSenderId: "762294306774",
    appId: "1:762294306774:web:601d43f7d499167e40c677"
};

// Initialize Firebase
let app, auth, db, storage;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = initializeFirestore(app, {
        experimentalForceLongPolling: true
    });
    storage = getStorage(app);
    console.log('✅ Firebase initialized successfully with long polling enabled');
} catch (error) {
    console.warn('⚠️ Firebase initialization failed:', error.message);
    console.warn('Please configure your Firebase project in js/config/firebase.js');
}

export { app, auth, db, storage };

/**
 * Check if Firebase is properly configured
 */
export function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== 'YOUR_API_KEY' && firebaseConfig.projectId !== 'YOUR_PROJECT_ID';
}
