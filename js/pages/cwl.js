// ============================================================
// StreetLourd — CWL Lineup Public Page
// ============================================================

import { getMembers, getCwlLineup } from '../services/firestore.js';
import { renderFooter } from '../components/footer.js';
import { TOWN_HALL_DATA } from '../utils/constants.js';
import { initScrollAnimations } from '../utils/animations.js';

let members = [];
let cwlLineups = []; // Stores lineups for Day 1 to 7
let activeDay = 1;

export async function renderCwl() {
    const container = document.getElementById('page-content');

    // Show skeletons
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-64 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-96 animate-pulse"></div>
                </div>
                <!-- Skeletons for tabs -->
                <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
                    ${Array(7).fill(0).map(() => `<div class="h-10 bg-white/5 rounded-xl w-20 animate-pulse"></div>`).join('')}
                </div>
                <!-- Skeletons for cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${Array(6).fill(0).map(() => `
                        <div class="h-24 bg-white/5 rounded-2xl border border-white/10 p-4 animate-pulse flex items-center gap-4">
                            <div class="w-12 h-12 bg-white/10 rounded-xl"></div>
                            <div class="flex-1">
                                <div class="h-4 bg-white/10 rounded w-32 mb-2"></div>
                                <div class="h-3 bg-white/10 rounded w-20"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Fetch data in parallel
    const [allMembers, ...lineups] = await Promise.all([
        getMembers(),
        ...[1, 2, 3, 4, 5, 6, 7].map(d => getCwlLineup(d))
    ]);

    members = allMembers;
    cwlLineups = lineups;
    activeDay = 1; // Default to Day 1

    renderCwlPage(container);
}

function renderCwlPage(container) {
    const activeLineup = cwlLineups[activeDay - 1] || { tags: [], updatedAt: null };
    const activeRoster = activeLineup.tags.map(tag => members.find(m => m.tag === tag)).filter(Boolean);

    // Calculate Stats
    const selectedCount = activeRoster.length;
    let avgTh = 0;
    let minTh = 0;
    let maxTh = 0;

    if (selectedCount > 0) {
        const thLevels = activeRoster.map(m => m.townHallLevel || 0).filter(Boolean);
        if (thLevels.length > 0) {
            const sum = thLevels.reduce((acc, val) => acc + val, 0);
            avgTh = sum / thLevels.length;
            minTh = Math.min(...thLevels);
            maxTh = Math.max(...thLevels);
        }
    }

    const lastUpdatedStr = activeLineup.updatedAt
        ? new Date(activeLineup.updatedAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
          })
        : null;

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 animate-on-scroll">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            🏆 Clan War League
                        </h1>
                        <p class="text-gray-400 text-sm">Susunan formasi dan lineup harian klan StreetLourd</p>
                    </div>
                    ${lastUpdatedStr ? `
                        <div class="text-xs text-gray-500 bg-white/5 border border-white/10 rounded-xl px-3 py-2 shrink-0">
                            🔄 Terakhir diperbarui: <span class="text-amber-400 font-semibold">${lastUpdatedStr}</span>
                        </div>
                    ` : ''}
                </div>

                <!-- Tabs selector (Day 1 - 7) -->
                <div class="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent animate-on-scroll">
                    ${[1, 2, 3, 4, 5, 6, 7].map(day => {
                        const isActive = activeDay === day;
                        const count = (cwlLineups[day - 1]?.tags || []).length;
                        return `
                            <button onclick="window.__changeCwlDay(${day})" 
                                    class="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2
                                           ${isActive 
                                             ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20 scale-[1.03]' 
                                             : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}">
                                <span>Day ${day}</span>
                                ${count > 0 ? `<span class="px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'}">${count}</span>` : ''}
                            </button>
                        `;
                    }).join('')}
                </div>

                <!-- Stats summary bar -->
                ${selectedCount > 0 ? `
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-on-scroll">
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Total Formasi</p>
                        <p class="text-xl font-bold text-white mt-1" style="font-family: 'Lilita One', cursive;">${selectedCount} Pemain</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Rata-rata Town Hall</p>
                        <p class="text-xl font-bold text-amber-400 mt-1" style="font-family: 'Lilita One', cursive;">TH ${avgTh.toFixed(1)}</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Town Hall Tertinggi</p>
                        <p class="text-xl font-bold text-green-400 mt-1" style="font-family: 'Lilita One', cursive;">TH ${maxTh}</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Town Hall Terendah</p>
                        <p class="text-xl font-bold text-blue-400 mt-1" style="font-family: 'Lilita One', cursive;">TH ${minTh}</p>
                    </div>
                </div>
                ` : ''}

                <!-- Lineup Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${selectedCount > 0
                        ? activeRoster.map((m, idx) => cwlPlayerCard(m, idx + 1)).join('')
                        : `
                            <div class="col-span-full text-center py-20 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
                                <span class="text-5xl block mb-4">⚔️</span>
                                <h3 class="text-lg font-bold text-white mb-1" style="font-family: 'Lilita One', cursive;">Lineup Belum Ditentukan</h3>
                                <p class="text-xs text-gray-500 max-w-sm mx-auto">Leader klan belum merilis formasi lineup pemain untuk Hari ${activeDay}. Silakan kembali lagi nanti.</p>
                            </div>
                        `
                    }
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Attach handler globally
    window.__changeCwlDay = (day) => {
        if (day < 1 || day > 7) return;
        activeDay = day;
        renderCwlPage(container);
    };

    // Trigger scroll animations
    setTimeout(() => initScrollAnimations(), 50);
}

function cwlPlayerCard(member, number) {
    const roleColors = {
        leader: 'from-amber-500 to-yellow-600',
        coLeader: 'from-purple-500 to-violet-600',
        admin: 'from-blue-500 to-cyan-600',
        member: 'from-gray-500 to-gray-600',
    };
    const roleLabels = { leader: 'Leader', coLeader: 'Co-Leader', admin: 'Elder', member: 'Member' };
    const thInfo = TOWN_HALL_DATA[member.townHallLevel] || { color: '#6b7280', emoji: '🏠' };

    return `
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-amber-500/5 animate-item flex items-center gap-4 cursor-pointer"
             onclick="location.hash='#/member/${encodeURIComponent(member.tag)}'">
            
            <!-- Index Badge / Counter -->
            <div class="w-6 h-6 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center text-xs font-bold text-gray-400 transition-colors shrink-0">
                ${number}
            </div>

            <!-- TH Badge -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                 style="background: linear-gradient(135deg, ${thInfo.color}, ${thInfo.color}99); box-shadow: 0 0 15px ${thInfo.color}40;">
                TH${member.townHallLevel || '?'}
            </div>

            <!-- Player Details -->
            <div class="flex-grow min-w-0">
                <div class="flex items-center gap-2 mb-1 min-w-0">
                    <h4 class="text-white font-bold truncate flex-1 min-w-0">${member.name}</h4>
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-gradient-to-r ${roleColors[member.role] || roleColors.member} shrink-0">
                        ${roleLabels[member.role] || 'Member'}
                    </span>
                </div>
                <p class="text-[10px] text-gray-500">${member.tag}</p>
            </div>

            <!-- Trophies/Points Display -->
            <div class="text-right shrink-0">
                <div class="text-xs font-semibold text-gray-400">🏆 ${member.trophies || 0}</div>
                <div class="text-[10px] text-amber-400 font-bold mt-1" style="font-family: 'Lilita One', cursive;">
                    ${member.totalPoints || 0} pts
                </div>
            </div>
        </div>
    `;
}
