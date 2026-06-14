// ============================================================
// VictoryToClan — Constants & Configuration
// ============================================================

// --- Point System Rules ---
export const POINT_REWARDS = [
    { id: 'war_participation', label: 'Ikut War', points: 10, icon: '⚔️', category: 'war' },
    { id: 'used_both_attacks', label: 'Menggunakan 2 Attack', points: 10, icon: '🗡️', category: 'war' },
    { id: 'three_stars', label: '3 Bintang', points: 15, icon: '⭐', category: 'war' },
    { id: 'cwl_participation', label: 'Ikut CWL', points: 30, icon: '🏆', category: 'cwl' },
    { id: 'clan_games_complete', label: 'Clan Games Selesai', points: 20, icon: '🎮', category: 'clangames' },
    { id: 'donation_1000', label: 'Donasi 1000', points: 5, icon: '🎁', category: 'donation' },
    { id: 'clan_capital_active', label: 'Clan Capital Aktif', points: 10, icon: '🏰', category: 'capital' },
];

export const POINT_PUNISHMENTS = [
    { id: 'missed_attack_1', label: 'Tidak Menggunakan Attack Pertama', points: -20, icon: '❌', category: 'war' },
    { id: 'missed_attack_2', label: 'Tidak Menggunakan Attack Kedua', points: -15, icon: '⛔', category: 'war' },
    { id: 'missed_war_no_excuse', label: 'Tidak Ikut War Tanpa Izin', points: -30, icon: '🚫', category: 'war' },
    { id: 'afk_too_long', label: 'AFK Terlalu Lama', points: -10, icon: '💤', category: 'activity' },
    { id: 'rule_violation', label: 'Melanggar Aturan Clan', points: -25, icon: '⚠️', category: 'violation' },
];

// --- Town Hall Data ---
export const TOWN_HALL_DATA = {
    1:  { name: 'TH 1',  color: '#8B7355', emoji: '🏠' },
    2:  { name: 'TH 2',  color: '#CD853F', emoji: '🏠' },
    3:  { name: 'TH 3',  color: '#DAA520', emoji: '🏠' },
    4:  { name: 'TH 4',  color: '#B8860B', emoji: '🏡' },
    5:  { name: 'TH 5',  color: '#4169E1', emoji: '🏡' },
    6:  { name: 'TH 6',  color: '#FFD700', emoji: '🏡' },
    7:  { name: 'TH 7',  color: '#9370DB', emoji: '🏘️' },
    8:  { name: 'TH 8',  color: '#DC143C', emoji: '🏘️' },
    9:  { name: 'TH 9',  color: '#4B0082', emoji: '🏰' },
    10: { name: 'TH 10', color: '#FF4500', emoji: '🏰' },
    11: { name: 'TH 11', color: '#00CED1', emoji: '🏰' },
    12: { name: 'TH 12', color: '#1E90FF', emoji: '🏯' },
    13: { name: 'TH 13', color: '#228B22', emoji: '🏯' },
    14: { name: 'TH 14', color: '#32CD32', emoji: '🏯' },
    15: { name: 'TH 15', color: '#4169E1', emoji: '🗼' },
    16: { name: 'TH 16', color: '#8B008B', emoji: '🗼' },
    17: { name: 'TH 17', color: '#FFD700', emoji: '🗼' },
};

// --- Role Hierarchy ---
export const ROLES = {
    leader:   { label: 'Leader',    color: '#f5a623', icon: '👑', level: 4 },
    coLeader: { label: 'Co-Leader', color: '#a855f7', icon: '⚜️', level: 3 },
    admin:    { label: 'Elder',     color: '#3b82f6', icon: '🛡️', level: 2 },
    member:   { label: 'Member',    color: '#6b7280', icon: '⚔️', level: 1 },
};

// Map CoC API role strings to our role keys
export const COC_ROLE_MAP = {
    'leader':   'leader',
    'coLeader': 'coLeader',
    'admin':    'admin',
    'member':   'member',
};

// --- Website User Roles ---
export const WEBSITE_ROLES = {
    leader:   { label: 'Leader',    canAdmin: true },
    coleader: { label: 'Co-Leader', canAdmin: true },
    senior:   { label: 'Senior',    canAdmin: false },
    member:   { label: 'Member',    canAdmin: false },
};

// --- Navigation Links ---
export const NAV_LINKS = [
    { label: 'Home',        hash: '#/',             icon: '🏠' },
    { label: 'Members',     hash: '#/members',      icon: '👥' },
    { label: 'Leaderboard', hash: '#/leaderboard',  icon: '🏆' },
    { label: 'War History', hash: '#/wars',         icon: '⚔️' },
    { label: 'Statistics',  hash: '#/statistics',   icon: '📊' },
    { label: 'Clan Rules',  hash: '#/rules',        icon: '📜' },
    { label: 'Admin Panel', hash: '#/admin',        icon: '⚙️', adminOnly: true },
];

// --- API Config ---
export const API_BASE_URL = 'https://us-central1-victorytoclan.cloudfunctions.net';

// --- Chart Colors ---
export const CHART_COLORS = {
    gold:    'rgba(245, 166, 35, 1)',
    purple:  'rgba(168, 85, 247, 1)',
    blue:    'rgba(59, 130, 246, 1)',
    green:   'rgba(34, 197, 94, 1)',
    red:     'rgba(239, 68, 68, 1)',
    cyan:    'rgba(6, 182, 212, 1)',
    goldAlpha:   'rgba(245, 166, 35, 0.2)',
    purpleAlpha: 'rgba(168, 85, 247, 0.2)',
    blueAlpha:   'rgba(59, 130, 246, 0.2)',
    greenAlpha:  'rgba(34, 197, 94, 0.2)',
    redAlpha:    'rgba(239, 68, 68, 0.2)',
    cyanAlpha:   'rgba(6, 182, 212, 0.2)',
};

// --- War Status ---
export const WAR_STATUS = {
    optIn:    { label: 'Opt-In',  color: '#22c55e' },
    optOut:   { label: 'Opt-Out', color: '#6b7280' },
    excused:  { label: 'Izin',    color: '#f5a623' },
};

// --- Promotion Thresholds ---
export const PROMOTION_THRESHOLDS = {
    member_to_senior: 100,
    senior_to_coleader: 300,
};
