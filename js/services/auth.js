// ============================================================
// StreetLourd — Auth Service
// ============================================================

import { auth, db, isFirebaseConfigured } from '../config/firebase.js';
import { toast } from '../components/toast.js';

let currentUser = null;
let currentUserRole = null;
let authStateListeners = [];

/**
 * Sign in with Google popup
 */
export async function signInWithGoogle() {
    if (!isFirebaseConfigured()) {
        toast.warning('Firebase belum dikonfigurasi. Silakan setup Firebase terlebih dahulu.');
        return null;
    }

    try {
        const { GoogleAuthProvider, signInWithPopup } = await import('https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js');
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        toast.success(`Selamat datang, ${result.user.displayName}!`);
        return result.user;
    } catch (error) {
        if (error.code === 'auth/popup-closed-by-user') {
            toast.info('Login dibatalkan.');
        } else {
            toast.error(`Login gagal: ${error.message}`);
        }
        console.error('Auth error:', error);
        return null;
    }
}

/**
 * Sign out
 */
export async function signOut() {
    try {
        const { signOut: firebaseSignOut } = await import('https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js');
        await firebaseSignOut(auth);
        currentUser = null;
        currentUserRole = null;
        toast.info('Berhasil logout.');
    } catch (error) {
        toast.error('Logout gagal.');
        console.error('Sign out error:', error);
    }
}

/**
 * Initialize auth state listener
 */
export function initAuthListener(callback) {
    if (!isFirebaseConfigured()) {
        callback(null, null);
        return () => {};
    }

    const { onAuthStateChanged } = auth.constructor.prototype;
    
    // Use the auth object directly
    import('https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js').then(({ onAuthStateChanged: onAuth }) => {
        onAuth(auth, async (user) => {
            currentUser = user;
            if (user) {
                currentUserRole = await fetchUserRole(user.uid);
                // Ensure user document exists in Firestore
                await ensureUserDoc(user);
            } else {
                currentUserRole = null;
            }
            callback(user, currentUserRole);
            authStateListeners.forEach(fn => fn(user, currentUserRole));
        });
    });
}

/**
 * Add a listener for auth state changes
 */
export function onAuthChange(fn) {
    authStateListeners.push(fn);
    return () => {
        authStateListeners = authStateListeners.filter(f => f !== fn);
    };
}

/**
 * Fetch user role from Firestore
 */
async function fetchUserRole(uid) {
    try {
        const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js');
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            return userDoc.data().role || 'member';
        }
        return 'member';
    } catch (error) {
        console.warn('Error fetching user role:', error);
        return 'member';
    }
}

/**
 * Ensure user document exists in Firestore
 */
async function ensureUserDoc(user) {
    try {
        const { doc, getDoc, setDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js');
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        
        if (!userDoc.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: 'member',
                playerTag: '',
                createdAt: serverTimestamp(),
                lastLogin: serverTimestamp(),
            });
        } else {
            // Update last login
            const { updateDoc } = await import('https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js');
            await updateDoc(userRef, { lastLogin: serverTimestamp() });
        }
    } catch (error) {
        console.warn('Error ensuring user doc:', error);
    }
}

/**
 * Get current user
 */
export function getCurrentUser() {
    return currentUser;
}

/**
 * Get current user's role
 */
export function getUserRole() {
    return currentUserRole;
}

/**
 * Check if current user is admin (Leader or Co-Leader)
 */
export function isAdmin() {
    return currentUserRole === 'leader' || currentUserRole === 'coleader';
}

/**
 * Check if current user is logged in
 */
export function isLoggedIn() {
    return !!currentUser;
}
