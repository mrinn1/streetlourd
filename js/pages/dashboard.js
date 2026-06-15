// ============================================================
// StreetLourd — Dashboard Home Page
// ============================================================

import { statCard } from '../components/card.js';
import { skeleton } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMembers, getWars, getAllPointHistory } from '../services/firestore.js';
import { formatNumber, calcWinRate } from '../utils/helpers.js';
import { PROMOTION_THRESHOLDS } from '../utils/constants.js';

export async function renderDashboard() {
    const container = document.getElementById('page-content');

    // Show skeleton loading
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${skeleton.repeat('statCard', 4)}
                </div>
            </div>
        </div>
    `;

    // Fetch data
    const [members, wars, pointHistory] = await Promise.all([
        getMembers(),
        getWars(),
        getAllPointHistory()
    ]);

    // Calculate stats
    const totalMembers = members.length;
    const topDonator = [...members].sort((a, b) => (b.donations || 0) - (a.donations || 0))[0];
    const topPlayer = [...members].sort((a, b) => (b.trophies || 0) - (a.trophies || 0))[0];

    // Calculate 3-star attacks count for each member from point history
    const member3StarCounts = {};
    members.forEach(m => {
        member3StarCounts[m.tag] = 0;
    });

    if (pointHistory && Array.isArray(pointHistory)) {
        pointHistory.forEach(entry => {
            const isThreeStars = (entry.reason && (
                entry.reason.toLowerCase().includes('3 bintang') ||
                entry.reason.toLowerCase().includes('three star') ||
                entry.reason.toLowerCase().includes('three_stars') ||
                entry.reason.toLowerCase().includes('3-bintang')
            )) || (entry.category === 'war' && entry.amount === 15);

            if (isThreeStars && entry.memberTag && member3StarCounts[entry.memberTag] !== undefined) {
                member3StarCounts[entry.memberTag]++;
            }
        });
    }

    let mostActive = null;
    const sortedByThreeStars = [...members].map(m => ({
        ...m,
        threeStarCount: member3StarCounts[m.tag] || 0
    })).sort((a, b) => b.threeStarCount - a.threeStarCount);

    if (sortedByThreeStars[0] && sortedByThreeStars[0].threeStarCount > 0) {
        mostActive = sortedByThreeStars[0];
    } else {
        mostActive = [...members].sort((a, b) => (b.totalStars || 0) - (a.totalStars || 0))[0];
        if (mostActive) {
            mostActive.threeStarCount = mostActive.totalStars || 0;
        }
    }

    // Render dashboard
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-10 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Dashboard
                    </h1>
                    <p class="text-gray-400">Overview statistik dan performa clan</p>
                </div>

                <!-- Stat Cards Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-on-scroll" data-stagger="true">
                    ${statCard({ icon: '👥', label: 'Total Members', value: formatNumber(totalMembers), color: 'blue' })}
                    ${statCard({
        icon: '🎁', label: 'Top Donator',
        value: topDonator?.name || '-', color: 'purple',
        subtitle: `${formatNumber(topDonator?.donations || 0)} donated`
    })}
                    ${statCard({
        icon: '🏆', label: 'Top Player',
        value: topPlayer?.name || '-', color: 'gold', glow: true,
        subtitle: `${formatNumber(topPlayer?.trophies || 0)} trophies`
    })}
                    ${statCard({
        icon: '🔥', label: 'Most Active',
        value: mostActive?.name || '-', color: 'red',
        subtitle: `${mostActive?.threeStarCount || 0} 3-star attacks`
    })}
                </div>

                <!-- Recent Wars -->
                <div class="mb-12 animate-on-scroll" data-stagger="true">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Recent Wars</h2>
                        <a href="#/wars" class="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                            View All
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${wars.slice(0, 3).map(w => recentWarCard(w)).join('')}
                        ${wars.length === 0 ? `
                            <div class="col-span-full text-center py-12 text-gray-500">
                                <p class="text-4xl mb-2">⚔️</p>
                                <p>Belum ada data war</p>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Top Members Quick View -->
                <div class="animate-on-scroll" data-stagger="true">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Top Members</h2>
                        <a href="#/leaderboard" class="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                            Leaderboard
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${members.filter(m => m.role !== 'leader').slice(0, 3).map((m, i) => topMemberCard(m, i + 1)).join('')}
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;
}

function recentWarCard(war) {
    const resultMap = {
        win: { label: 'VICTORY', color: 'text-green-400', border: 'border-green-500/30', bg: 'from-green-500/10 to-transparent' },
        loss: { label: 'DEFEAT', color: 'text-red-400', border: 'border-red-500/30', bg: 'from-red-500/10 to-transparent' },
        draw: { label: 'DRAW', color: 'text-gray-400', border: 'border-gray-500/30', bg: 'from-gray-500/10 to-transparent' },
    };
    const r = resultMap[war.result] || resultMap.draw;
    const date = war.date ? new Date(war.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';

    return `
        <div class="animate-item rounded-2xl border ${r.border} bg-gradient-to-br ${r.bg} backdrop-blur-sm p-5 
                    hover:scale-[1.02] transition-all duration-300 cursor-pointer" onclick="location.hash='#/wars'">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-gray-500">${date}</span>
                <span class="text-xs font-bold ${r.color}">${r.label}</span>
            </div>
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">⭐ ${war.clanStars || 0}</p>
                    <p class="text-[10px] text-gray-500">${(war.clanDestruction || 0).toFixed(1)}%</p>
                </div>
                <span class="text-gray-600 text-sm font-bold">VS</span>
                <div class="text-right">
                    <p class="text-lg font-bold text-white/50" style="font-family: 'Lilita One', cursive;">⭐ ${war.opponentStars || 0}</p>
                    <p class="text-[10px] text-gray-500 truncate max-w-[100px]">${war.opponent || '?'}</p>
                </div>
            </div>
        </div>
    `;
}

function topMemberCard(member, rank) {
    const medals = ['🥇', '🥈', '🥉'];
    const colors = ['text-amber-400', 'text-gray-300', 'text-orange-400'];
    const borders = ['border-amber-500/30', 'border-gray-400/30', 'border-orange-500/30'];

    return `
        <div class="animate-item flex items-center gap-4 p-4 rounded-xl border ${borders[rank - 1]} bg-white/5 
                    hover:bg-white/10 transition-all duration-200 cursor-pointer" 
             onclick="location.hash='#/member/${encodeURIComponent(member.tag)}'">
            <span class="text-2xl">${medals[rank - 1]}</span>
            <div class="flex-1 min-w-0">
                <p class="text-white font-medium truncate">${member.name}</p>
                <p class="text-xs text-gray-500">TH${member.townHallLevel || '?'}</p>
            </div>
            <p class="${colors[rank - 1]} font-bold" style="font-family: 'Lilita One', cursive;">
                ${(member.totalPoints || 0).toLocaleString()}
            </p>
        </div>
    `;
}
