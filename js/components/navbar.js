// ============================================================
// VictoryToClan — Navigation Bar Component
// ============================================================

import { NAV_LINKS } from '../utils/constants.js';

/**
 * Render the sticky top navbar
 */
export function renderNavbar(currentHash = '#/', user = null, userRole = null) {
    const isAdmin = userRole === 'leader' || userRole === 'coleader';

    const navLinks = NAV_LINKS.filter(link => {
        if (link.adminOnly && !isAdmin) return false;
        return true;
    });

    return `
        <nav id="main-navbar" class="fixed top-0 left-0 right-0 z-[9990] transition-all duration-500">
            <div class="navbar-glass">
                <div class="max-w-7xl mx-auto px-4 sm:px-6">
                    <div class="flex items-center justify-between h-16 md:h-18">
                        <!-- Logo -->
                        <a href="#/" class="flex items-center gap-3 group shrink-0">
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
                                <span class="text-lg">⚔️</span>
                            </div>
                            <span class="text-white font-bold text-lg hidden sm:block tracking-tight" style="font-family: 'Lilita One', cursive;">
                                Victory<span class="text-amber-400">To</span>Clan
                            </span>
                        </a>

                        <!-- Desktop Nav Links -->
                        <div class="hidden lg:flex items-center gap-1">
                            ${navLinks.map(link => `
                                <a href="${link.hash}" 
                                   class="nav-link px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                          ${currentHash === link.hash 
                                            ? 'text-amber-400 bg-amber-500/10' 
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'}">
                                    <span class="mr-1.5">${link.icon}</span>${link.label}
                                </a>
                            `).join('')}
                        </div>

                        <!-- Right Side: Login / User -->
                        <div class="flex items-center gap-3">
                            ${user ? `
                                <div class="flex items-center gap-3">
                                    <div class="hidden sm:block text-right">
                                        <p class="text-sm text-white font-medium truncate max-w-[120px]">${user.displayName || 'User'}</p>
                                        <p class="text-[10px] text-amber-400 uppercase">${userRole || 'member'}</p>
                                    </div>
                                    <button id="user-menu-btn" class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors">
                                        ${user.photoURL 
                                            ? `<img src="${user.photoURL}" alt="" class="w-full h-full object-cover">` 
                                            : (user.displayName || 'U').charAt(0).toUpperCase()}
                                    </button>
                                    <button id="logout-btn" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="Logout">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                                    </button>
                                </div>
                            ` : `
                                <a href="#/login" class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold 
                                                         bg-gradient-to-r from-amber-500 to-yellow-600 text-black 
                                                         hover:from-amber-400 hover:to-yellow-500 transition-all 
                                                         shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
                                    Login
                                </a>
                            `}

                            <!-- Mobile Menu Toggle -->
                            <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu" class="fixed inset-0 z-[9989] hidden lg:hidden">
                <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" id="mobile-menu-backdrop"></div>
                <div class="absolute right-0 top-0 bottom-0 w-72 bg-[#0f1420]/98 backdrop-blur-xl border-l border-white/10 
                            transform translate-x-full transition-transform duration-300" id="mobile-menu-panel">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-8">
                            <span class="text-white font-bold text-lg" style="font-family: 'Lilita One', cursive;">Menu</span>
                            <button id="mobile-menu-close" class="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-col gap-2">
                            ${navLinks.map(link => `
                                <a href="${link.hash}" 
                                   class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                                          ${currentHash === link.hash 
                                            ? 'text-amber-400 bg-amber-500/10' 
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'}">
                                    <span class="text-lg">${link.icon}</span>${link.label}
                                </a>
                            `).join('')}
                            ${user ? `
                                <hr class="border-white/10 my-3">
                                <button id="mobile-logout-btn" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all w-full text-left">
                                    <span class="text-lg">🚪</span>Logout
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

/**
 * Initialize navbar scroll effects and mobile menu
 */
export function initNavbar() {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;

    // Scroll effect: transparent -> solid
    let lastScroll = 0;
    function handleScroll() {
        const scrollY = window.scrollY;
        const glass = navbar.querySelector('.navbar-glass');
        if (!glass) return;

        if (scrollY > 60) {
            glass.classList.add('navbar-solid');
        } else {
            glass.classList.remove('navbar-solid');
        }

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const menuPanel = document.getElementById('mobile-menu-panel');
    const menuClose = document.getElementById('mobile-menu-close');
    const menuBackdrop = document.getElementById('mobile-menu-backdrop');

    function openMenu() {
        if (!menu || !menuPanel) return;
        menu.classList.remove('hidden');
        requestAnimationFrame(() => {
            menuPanel.classList.remove('translate-x-full');
            menuPanel.classList.add('translate-x-0');
        });
    }

    function closeMenu() {
        if (!menu || !menuPanel) return;
        menuPanel.classList.remove('translate-x-0');
        menuPanel.classList.add('translate-x-full');
        setTimeout(() => menu.classList.add('hidden'), 300);
    }

    menuBtn?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);
    menuBackdrop?.addEventListener('click', closeMenu);

    // Close mobile menu on nav link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}
