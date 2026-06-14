// ============================================================
// VictoryToClan — Utility Helpers
// ============================================================

/**
 * Format a CoC player/clan tag for display
 */
export function formatTag(tag) {
    if (!tag) return '';
    return tag.startsWith('#') ? tag : `#${tag}`;
}

/**
 * Encode a tag for URL usage
 */
export function encodeTag(tag) {
    return encodeURIComponent(formatTag(tag));
}

/**
 * Format number with commas (e.g., 1234567 -> 1,234,567)
 */
export function formatNumber(num) {
    if (num === null || num === undefined) return '0';
    return Number(num).toLocaleString('en-US');
}

/**
 * Format number compactly (e.g., 1500 -> 1.5K)
 */
export function formatCompact(num) {
    if (num === null || num === undefined) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

/**
 * Relative time display (e.g., "2 hours ago")
 */
export function timeAgo(date) {
    if (!date) return 'Unknown';
    const now = new Date();
    const past = date instanceof Date ? date : new Date(date);
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);
    const diffMonth = Math.floor(diffDay / 30);

    if (diffSec < 60) return 'Baru saja';
    if (diffMin < 60) return `${diffMin} menit lalu`;
    if (diffHr < 24) return `${diffHr} jam lalu`;
    if (diffDay < 30) return `${diffDay} hari lalu`;
    if (diffMonth < 12) return `${diffMonth} bulan lalu`;
    return past.toLocaleDateString('id-ID');
}

/**
 * Format a date to Indonesian locale
 */
export function formatDate(date) {
    if (!date) return '-';
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Format date with time
 */
export function formatDateTime(date) {
    if (!date) return '-';
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

/**
 * Debounce function
 */
export function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

/**
 * Throttle function
 */
export function throttle(fn, limit = 100) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Create element with attributes and children
 */
export function createElement(tag, attrs = {}, ...children) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        if (key === 'className') {
            el.className = value;
        } else if (key === 'style' && typeof value === 'object') {
            Object.assign(el.style, value);
        } else if (key.startsWith('on') && typeof value === 'function') {
            el.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'innerHTML') {
            el.innerHTML = value;
        } else {
            el.setAttribute(key, value);
        }
    }
    for (const child of children) {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            el.appendChild(child);
        }
    }
    return el;
}

/**
 * Get role badge HTML
 */
export function getRoleBadge(role) {
    const roles = {
        leader:   { label: 'Leader',    bg: 'from-yellow-500 to-amber-600', text: 'text-black' },
        coLeader: { label: 'Co-Leader', bg: 'from-purple-500 to-violet-600', text: 'text-white' },
        admin:    { label: 'Elder',     bg: 'from-blue-500 to-cyan-600', text: 'text-white' },
        member:   { label: 'Member',    bg: 'from-gray-500 to-gray-600', text: 'text-white' },
    };
    const r = roles[role] || roles.member;
    return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${r.bg} ${r.text}">${r.label}</span>`;
}

/**
 * Get Town Hall badge HTML
 */
export function getTHBadge(level) {
    const colors = {
        1: '#8B7355', 2: '#CD853F', 3: '#DAA520', 4: '#B8860B', 5: '#4169E1',
        6: '#FFD700', 7: '#9370DB', 8: '#DC143C', 9: '#4B0082', 10: '#FF4500',
        11: '#00CED1', 12: '#1E90FF', 13: '#228B22', 14: '#32CD32', 15: '#4169E1',
        16: '#8B008B', 17: '#FFD700',
    };
    const color = colors[level] || '#6b7280';
    return `<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold text-white" style="background: ${color}; box-shadow: 0 0 8px ${color}40;">TH${level}</span>`;
}

/**
 * Get war result badge
 */
export function getWarResultBadge(result) {
    const results = {
        win:  { label: 'VICTORY',  class: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' },
        loss: { label: 'DEFEAT',   class: 'bg-gradient-to-r from-red-500 to-rose-600 text-white' },
        draw: { label: 'DRAW',     class: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white' },
    };
    const r = results[result] || results.draw;
    return `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${r.class}">${r.label}</span>`;
}

/**
 * Calculate win rate percentage
 */
export function calcWinRate(wins, total) {
    if (!total) return 0;
    return Math.round((wins / total) * 100);
}

/**
 * Generate unique ID
 */
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

/**
 * Sleep/delay helper
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Clamp a number between min and max
 */
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

/**
 * Parse Firestore timestamp to Date
 */
export function parseTimestamp(ts) {
    if (!ts) return null;
    if (ts.toDate) return ts.toDate();
    if (ts.seconds) return new Date(ts.seconds * 1000);
    return new Date(ts);
}
