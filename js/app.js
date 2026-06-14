// ============================================================
// StreetLourd — Main App Router & Initialization
// ============================================================

import { renderNavbar, initNavbar } from './components/navbar.js';
import { ParticleSystem } from './components/particles.js';
import { renderLanding } from './pages/landing.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderMembers } from './pages/members.js';
import { renderMemberDetail } from './pages/memberDetail.js';
import { renderLeaderboard } from './pages/leaderboard.js';
import { renderWarHistory } from './pages/warHistory.js';
import { renderStatistics } from './pages/statistics.js';
import { renderClanRules } from './pages/clanRules.js';
import { renderAdmin } from './pages/admin.js';
import { renderAdminRules } from './pages/adminRules.js';
import { renderAdminLanding } from './pages/adminLanding.js';
import { renderAdminSidePoints } from './pages/adminSidePoints.js';
import { initAuthListener, signInWithGoogle, signOut, getCurrentUser, getUserRole } from './services/auth.js';
import { initScrollAnimations, initParallax, pageTransition } from './utils/animations.js';
import { toast } from './components/toast.js';
import { initMusicPlayer } from './components/musicPlayer.js';

// ---- App State ----
let particles = null;
let currentRoute = '';

// ---- Route Definitions ----
const routes = {
    '/':            { render: renderLandingPage, title: 'Home' },
    '/dashboard':   { render: renderDashboardPage, title: 'Dashboard' },
    '/members':     { render: renderMembersPage, title: 'Members' },
    '/leaderboard': { render: renderLeaderboardPage, title: 'Leaderboard' },
    '/wars':        { render: renderWarsPage, title: 'War History' },
    '/statistics':  { render: renderStatisticsPage, title: 'Statistics' },
    '/rules':       { render: renderRulesPage, title: 'Clan Rules' },
    '/admin':       { render: renderAdminPage, title: 'Admin Panel' },
    '/admin/rules': { render: renderAdminRulesPage, title: 'Rules Settings' },
    '/admin/landing': { render: renderAdminLandingPage, title: 'Landing Settings' },
    '/admin/sidepoints': { render: renderAdminSidePointsPage, title: 'Manage Side Points' },
    '/login':       { render: renderLoginPage, title: 'Login' },
};

// ---- Initialize App ----
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    // Start particle system
    particles = new ParticleSystem('particles-canvas');
    particles.start();

    // Initialize background music player
    initMusicPlayer();

    // Init auth listener
    initAuthListener((user, role) => {
        updateNavbar();
        // If on login page and just logged in, redirect to dashboard
        if (user && getHash() === '/login') {
            window.location.hash = '#/dashboard';
        }
    });

    // Initial route
    handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    console.log('⚔️ StreetLourd initialized!');
}

// ---- Routing ----
function getHash() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
}

function handleRoute() {
    const hash = getHash();
    
    // Check for member detail route: /member/:tag
    if (hash.startsWith('/member/')) {
        const tag = hash.replace('/member/', '');
        currentRoute = '/member/:tag';
        document.title = `Member Detail — StreetLourd`;
        renderMemberDetailPage(tag);
        updateNavbar();
        return;
    }

    const route = routes[hash];
    if (route) {
        currentRoute = hash;
        document.title = `${route.title} — StreetLourd`;
        route.render();
    } else {
        // 404 — redirect to home
        window.location.hash = '#/';
    }
    updateNavbar();
}

// ---- Update Navbar ----
function updateNavbar() {
    const navContainer = document.getElementById('navbar-container');
    if (!navContainer) return;
    
    const user = getCurrentUser();
    const role = getUserRole();
    const hash = getHash();

    // Map hash to nav link hash
    let activeHash = '#' + hash;
    if (hash.startsWith('/member/')) activeHash = '#/members';

    navContainer.innerHTML = renderNavbar(activeHash, user, role);
    initNavbar();

    // Attach logout handlers
    const logoutBtn = document.getElementById('logout-btn');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            await signOut();
            window.location.hash = '#/';
            updateNavbar();
        });
    }
    if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', async () => {
            await signOut();
            window.location.hash = '#/';
            updateNavbar();
        });
    }
}

// ---- Page Renderers ----

async function renderLandingPage() {
    const pageContent = document.getElementById('page-content');
    pageContent.style.opacity = '0';
    pageContent.innerHTML = await renderLanding();
    requestAnimationFrame(() => {
        pageContent.style.transition = 'opacity 0.5s ease';
        pageContent.style.opacity = '1';
    });
    setTimeout(() => {
        initScrollAnimations();
        initParallax();
    }, 100);
}

async function renderDashboardPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderDashboard());
}

async function renderMembersPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderMembers());
}

async function renderMemberDetailPage(tag) {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderMemberDetail(tag));
}

async function renderLeaderboardPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderLeaderboard());
}

async function renderWarsPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderWarHistory());
}

async function renderStatisticsPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderStatistics());
}

async function renderRulesPage() {
    const pageContent = document.getElementById('page-content');
    pageContent.style.opacity = '0';
    pageContent.innerHTML = await renderClanRules();
    requestAnimationFrame(() => {
        pageContent.style.transition = 'opacity 0.5s ease';
        pageContent.style.opacity = '1';
    });
    setTimeout(() => initScrollAnimations(), 100);
}

async function renderAdminPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderAdmin());
}

async function renderAdminRulesPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderAdminRules());
}

async function renderAdminLandingPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderAdminLanding());
}

async function renderAdminSidePointsPage() {
    const pageContent = document.getElementById('page-content');
    await pageTransition(pageContent, () => renderAdminSidePoints());
}

function renderLoginPage() {
    const user = getCurrentUser();
    const pageContent = document.getElementById('page-content');

    if (user) {
        window.location.hash = '#/dashboard';
        return;
    }

    pageContent.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-md mx-auto text-center py-20">
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-10">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-amber-500/30">
                        ⚔️
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        Login to StreetLourd
                    </h2>
                    <p class="text-gray-400 text-sm mb-8">Login dengan akun Google untuk mengakses semua fitur</p>
                    <button id="google-login-btn" class="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold 
                                                          bg-white text-gray-800 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        Sign in with Google
                    </button>
                    <p class="text-xs text-gray-600 mt-6">
                        Data Anda aman dan terenkripsi
                    </p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('google-login-btn')?.addEventListener('click', async () => {
        const btn = document.getElementById('google-login-btn');
        btn.disabled = true;
        btn.innerHTML = '<span class="animate-spin">⏳</span> Logging in...';
        await signInWithGoogle();
        btn.disabled = false;
        btn.innerHTML = 'Sign in with Google';
    });
}
