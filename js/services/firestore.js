// ============================================================
// VictoryToClan — Firestore Service
// ============================================================

import { db, isFirebaseConfigured } from '../config/firebase.js';

// Dynamic import helper
async function getFirestore() {
    return await import('https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js');
}

// ==================== MEMBERS ====================

export async function getMembers() {
    if (!isFirebaseConfigured()) return getDemoMembers();
    try {
        const { collection, getDocs, query, orderBy } = await getFirestore();
        const q = query(collection(db, 'members'), orderBy('totalPoints', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getMembers:', e); return getDemoMembers(); }
}

export async function getMember(tag) {
    if (!isFirebaseConfigured()) return getDemoMembers().find(m => m.tag === tag) || null;
    try {
        const { doc, getDoc } = await getFirestore();
        const snap = await getDoc(doc(db, 'members', tag));
        return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    } catch (e) { console.error('getMember:', e); return null; }
}

export async function saveMember(tag, data) {
    if (!isFirebaseConfigured()) return;
    const { doc, setDoc, serverTimestamp } = await getFirestore();
    await setDoc(doc(db, 'members', tag), { ...data, lastSynced: serverTimestamp() }, { merge: true });
}

export async function saveMembers(members) {
    if (!isFirebaseConfigured()) return;
    const { doc, writeBatch, serverTimestamp } = await getFirestore();
    const batch = writeBatch(db);
    members.forEach(m => {
        batch.set(doc(db, 'members', m.tag), { ...m, lastSynced: serverTimestamp() }, { merge: true });
    });
    await batch.commit();
}

// ==================== WARS ====================

export async function getWars() {
    if (!isFirebaseConfigured()) return getDemoWars();
    try {
        const { collection, getDocs, query, orderBy } = await getFirestore();
        const q = query(collection(db, 'wars'), orderBy('date', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getWars:', e); return getDemoWars(); }
}

export async function saveWar(warData) {
    if (!isFirebaseConfigured()) return;
    const { collection, addDoc, serverTimestamp } = await getFirestore();
    return await addDoc(collection(db, 'wars'), { ...warData, createdAt: serverTimestamp() });
}

// ==================== WAR HISTORY (per member) ====================

export async function getWarHistory(warId) {
    if (!isFirebaseConfigured()) return [];
    try {
        const { collection, getDocs, query, where } = await getFirestore();
        const q = query(collection(db, 'warHistory'), where('warId', '==', warId));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getWarHistory:', e); return []; }
}

export async function getMemberWarHistory(memberTag) {
    if (!isFirebaseConfigured()) return getDemoWarHistory();
    try {
        const { collection, getDocs, query, where, orderBy } = await getFirestore();
        const q = query(collection(db, 'warHistory'), where('memberTag', '==', memberTag), orderBy('date', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getMemberWarHistory:', e); return getDemoWarHistory(); }
}

export async function saveWarHistory(data) {
    if (!isFirebaseConfigured()) return;
    const { collection, addDoc } = await getFirestore();
    return await addDoc(collection(db, 'warHistory'), data);
}

// ==================== POINT HISTORY ====================

export async function getPointHistory(memberTag) {
    if (!isFirebaseConfigured()) return getDemoPointHistory();
    try {
        const { collection, getDocs, query, where, orderBy } = await getFirestore();
        const q = query(collection(db, 'pointHistory'), where('memberTag', '==', memberTag), orderBy('date', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getPointHistory:', e); return getDemoPointHistory(); }
}

export async function addPointEntry(data) {
    if (!isFirebaseConfigured()) return;
    const { collection, addDoc, serverTimestamp, doc, updateDoc, increment } = await getFirestore();
    // Add to history
    await addDoc(collection(db, 'pointHistory'), { ...data, date: serverTimestamp() });
    // Update member's total points
    const memberRef = doc(db, 'members', data.memberTag);
    await updateDoc(memberRef, { totalPoints: increment(data.amount) });
}

// ==================== PROMOTIONS ====================

export async function getPromotions(memberTag) {
    if (!isFirebaseConfigured()) return [];
    try {
        const { collection, getDocs, query, where, orderBy } = await getFirestore();
        const q = query(collection(db, 'promotions'), where('memberTag', '==', memberTag), orderBy('date', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getPromotions:', e); return []; }
}

export async function addPromotion(data) {
    if (!isFirebaseConfigured()) return;
    const { collection, addDoc, serverTimestamp } = await getFirestore();
    return await addDoc(collection(db, 'promotions'), { ...data, date: serverTimestamp() });
}

// ==================== VIOLATIONS ====================

export async function addViolation(data) {
    if (!isFirebaseConfigured()) return;
    const { collection, addDoc, serverTimestamp } = await getFirestore();
    return await addDoc(collection(db, 'violations'), { ...data, date: serverTimestamp() });
}

export async function getViolations(memberTag) {
    if (!isFirebaseConfigured()) return [];
    try {
        const { collection, getDocs, query, where, orderBy } = await getFirestore();
        const q = query(collection(db, 'violations'), where('memberTag', '==', memberTag), orderBy('date', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getViolations:', e); return []; }
}

// ==================== SETTINGS ====================

export async function getSettings() {
    if (!isFirebaseConfigured()) return { clanTag: '#2ABC123', clanName: 'Victory Clan' };
    try {
        const { doc, getDoc } = await getFirestore();
        const snap = await getDoc(doc(db, 'settings', 'general'));
        return snap.exists() ? snap.data() : { clanTag: '', clanName: '' };
    } catch (e) { console.error('getSettings:', e); return { clanTag: '', clanName: '' }; }
}

export async function saveSettings(data) {
    if (!isFirebaseConfigured()) return;
    const { doc, setDoc } = await getFirestore();
    await setDoc(doc(db, 'settings', 'general'), data, { merge: true });
}

// ==================== USER ROLES ====================

export async function updateUserRole(uid, role) {
    if (!isFirebaseConfigured()) return;
    const { doc, updateDoc } = await getFirestore();
    await updateDoc(doc(db, 'users', uid), { role });
}

export async function getAllUsers() {
    if (!isFirebaseConfigured()) return [];
    try {
        const { collection, getDocs } = await getFirestore();
        const snap = await getDocs(collection(db, 'users'));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error('getAllUsers:', e); return []; }
}

// ==================== DEMO DATA ====================

function getDemoMembers() {
    const names = ['DragonSlayer', 'WarMachine', 'ClashKing', 'QueenArcher', 'GoblinHero', 
                   'WallBreaker', 'TH17Master', 'EliteWarrior', 'SuperWitch', 'IceGolem',
                   'LavaHound', 'ElectroDragon', 'YetiSmash', 'HeadHunter', 'InfernoTower',
                   'PhoenixRise', 'RoyalGhost', 'SneakyGoblin', 'SuperBowler', 'PartyWizard'];
    
    return names.map((name, i) => ({
        tag: `#${String(2000 + i).padStart(4, '0')}ABC`,
        name,
        townHallLevel: Math.floor(Math.random() * 7) + 11,
        role: i === 0 ? 'leader' : i < 3 ? 'coLeader' : i < 7 ? 'admin' : 'member',
        trophies: Math.floor(Math.random() * 2000) + 4000,
        donations: Math.floor(Math.random() * 5000) + 500,
        donationsReceived: Math.floor(Math.random() * 3000) + 200,
        clanCapitalContributions: Math.floor(Math.random() * 100000) + 10000,
        totalPoints: Math.floor(Math.random() * 300) + 50,
        totalWars: Math.floor(Math.random() * 50) + 10,
        totalStars: Math.floor(Math.random() * 100) + 20,
        avgDestruction: Math.random() * 30 + 70,
    }));
}

function getDemoWars() {
    const opponents = ['Dark Warriors', 'Storm Legion', 'Iron Wolves', 'Shadow Riders', 'Thunder Hawks'];
    return opponents.map((opp, i) => ({
        id: `war-${i}`,
        date: new Date(Date.now() - i * 3 * 86400000).toISOString(),
        opponent: opp,
        warSize: [15, 20, 25, 30, 40][i % 5],
        result: ['win', 'win', 'loss', 'win', 'draw'][i],
        clanStars: Math.floor(Math.random() * 30) + 20,
        opponentStars: Math.floor(Math.random() * 30) + 15,
        clanDestruction: Math.random() * 20 + 80,
        opponentDestruction: Math.random() * 30 + 60,
    }));
}

function getDemoWarHistory() {
    return getDemoWars().map((w, i) => ({
        id: `wh-${i}`,
        warId: w.id,
        memberName: 'Player',
        status: 'optIn',
        attack1Stars: Math.floor(Math.random() * 3) + 1,
        attack1Destruction: Math.random() * 30 + 70,
        attack2Stars: Math.floor(Math.random() * 3) + 1,
        attack2Destruction: Math.random() * 30 + 70,
        usedAttack1: true,
        usedAttack2: Math.random() > 0.2,
        date: w.date,
    }));
}

function getDemoPointHistory() {
    const reasons = ['Ikut War', '3 Bintang', 'Donasi 1000', 'Clan Games', 'Tidak Attack'];
    return reasons.map((r, i) => ({
        id: `ph-${i}`,
        amount: i === 4 ? -20 : [10, 15, 5, 20][i],
        reason: r,
        category: i === 4 ? 'war' : 'war',
        adminName: 'Leader',
        date: new Date(Date.now() - i * 2 * 86400000).toISOString(),
    }));
}
