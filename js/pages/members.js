// ============================================================
// VictoryToClan — Members Page
// ============================================================

import { memberCard } from '../components/card.js';
import { skeleton, emptyState } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMembers } from '../services/firestore.js';
import { debounce } from '../utils/helpers.js';
import { TOWN_HALL_DATA } from '../utils/constants.js';

let allMembers = [];
let filteredMembers = [];
let currentPage = 1;
const perPage = 12;

export async function renderMembers() {
    const container = document.getElementById('page-content');

    // Show skeleton
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="grid gap-4">${skeleton.repeat('memberCard', 6)}</div>
            </div>
        </div>
    `;

    // Fetch members
    allMembers = await getMembers();
    filteredMembers = [...allMembers];
    currentPage = 1;

    renderMembersPage(container);
}

function renderMembersPage(container) {
    const totalPages = Math.ceil(filteredMembers.length / perPage);
    const paged = filteredMembers.slice((currentPage - 1) * perPage, currentPage * perPage);

    // Get unique TH levels
    const thLevels = [...new Set(allMembers.map(m => m.townHallLevel))].sort((a, b) => b - a);

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Members
                    </h1>
                    <p class="text-gray-400">Daftar anggota clan · ${allMembers.length} members</p>
                </div>

                <!-- Filters Bar -->
                <div class="flex flex-col sm:flex-row gap-4 mb-8 animate-on-scroll">
                    <!-- Search -->
                    <div class="relative flex-1">
                        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                        <input type="text" id="member-search" placeholder="Search member..." 
                               class="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 
                                      focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all text-sm">
                    </div>

                    <!-- TH Filter -->
                    <select id="filter-th" class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm 
                                                  focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer min-w-[140px]">
                        <option value="">All Town Hall</option>
                        ${thLevels.map(th => `<option value="${th}">TH ${th}</option>`).join('')}
                    </select>

                    <!-- Role Filter -->
                    <select id="filter-role" class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm 
                                                    focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer min-w-[140px]">
                        <option value="">All Roles</option>
                        <option value="leader">Leader</option>
                        <option value="coLeader">Co-Leader</option>
                        <option value="admin">Elder</option>
                        <option value="member">Member</option>
                    </select>
                </div>

                <!-- Members List -->
                <div class="grid gap-4 mb-8 animate-on-scroll" id="members-list" data-stagger="true">
                    ${paged.length > 0 
                        ? paged.map(m => memberCard({
                            name: m.name,
                            tag: m.tag,
                            role: m.role,
                            townHallLevel: m.townHallLevel,
                            trophies: m.trophies,
                            donations: m.donations,
                            clanCapital: m.clanCapitalContributions,
                            totalPoints: m.totalPoints,
                            onClick: `location.hash='#/member/${encodeURIComponent(m.tag)}'`,
                        })).join('')
                        : emptyState('👥', 'Tidak ada member ditemukan', 'Coba ubah filter pencarian')
                    }
                </div>

                <!-- Pagination -->
                ${totalPages > 1 ? `
                <div class="flex items-center justify-center gap-2 animate-on-scroll" id="pagination">
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${currentPage === 1 ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}"
                            onclick="window.__membersPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
                        ← Prev
                    </button>
                    ${generatePageNumbers(currentPage, totalPages)}
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${currentPage === totalPages ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}"
                            onclick="window.__membersPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
                        Next →
                    </button>
                </div>
                ` : ''}
            </div>
        </div>
        ${renderFooter()}
    `;

    // Attach event listeners
    const searchInput = document.getElementById('member-search');
    const filterTH = document.getElementById('filter-th');
    const filterRole = document.getElementById('filter-role');

    const applyFilters = debounce(() => {
        const search = searchInput?.value.toLowerCase() || '';
        const th = filterTH?.value || '';
        const role = filterRole?.value || '';

        filteredMembers = allMembers.filter(m => {
            const matchSearch = !search || m.name.toLowerCase().includes(search) || m.tag.toLowerCase().includes(search);
            const matchTH = !th || m.townHallLevel == th;
            const matchRole = !role || m.role === role;
            return matchSearch && matchTH && matchRole;
        });

        currentPage = 1;
        renderMembersPage(container);
    }, 250);

    searchInput?.addEventListener('input', applyFilters);
    filterTH?.addEventListener('change', applyFilters);
    filterRole?.addEventListener('change', applyFilters);

    // Page navigation
    window.__membersPage = (page) => {
        const maxPage = Math.ceil(filteredMembers.length / perPage);
        if (page < 1 || page > maxPage) return;
        currentPage = page;
        renderMembersPage(container);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

function generatePageNumbers(current, total) {
    let pages = [];
    const maxVisible = 5;
    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = Math.min(total, start + maxVisible - 1);
    if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);

    for (let i = start; i <= end; i++) {
        pages.push(`
            <button class="w-10 h-10 rounded-xl text-sm font-medium transition-all
                           ${i === current 
                             ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold' 
                             : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}"
                    onclick="window.__membersPage(${i})">
                ${i}
            </button>
        `);
    }
    return pages.join('');
}
