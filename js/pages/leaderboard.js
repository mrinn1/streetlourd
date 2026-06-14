// ============================================================
// StreetLourd — Leaderboard Page
// ============================================================

import { rankCard } from '../components/card.js';
import { skeleton, emptyState } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMembers, getAllPointHistory } from '../services/firestore.js';
import { formatDateTime, parseTimestamp } from '../utils/helpers.js';

export async function renderLeaderboard() {
    const container = document.getElementById('page-content');
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${skeleton.repeat('leaderboardRow', 10)}
        </div></div>
    `;

    const members = await getMembers();
    const logs = await getAllPointHistory();
    const sorted = members
        .filter(m => m.role !== 'leader')
        .sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0))
        .slice(0, 100);

    if (sorted.length === 0) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                ${emptyState('🏆', 'Belum Ada Data', 'Leaderboard akan muncul setelah data member tersedia')}
            </div></div>${renderFooter()}
        `;
        return;
    }

    const top3 = sorted.slice(0, 3);
    const rest = sorted.slice(3);

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        🏆 Leaderboard
                    </h1>
                    <p class="text-gray-400">Top ${sorted.length} members berdasarkan total poin kontribusi</p>
                </div>

                <!-- Top 3 Podium -->
                ${top3.length >= 3 ? `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${rankCard({ rank: 2, ...top3[1] })}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${rankCard({ rank: 1, ...top3[0] })}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${rankCard({ rank: 3, ...top3[2] })}
                    </div>
                </div>
                ` : `
                <div class="grid gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${top3.map((m, i) => rankCard({ rank: i + 1, ...m })).join('')}
                </div>
                `}

                <!-- Rest of Rankings -->
                ${rest.length > 0 ? `
                <div class="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Rankings #4 - #${sorted.length}</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${rest.map((m, i) => rankCard({ rank: i + 4, ...m })).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Global Point Log Section -->
                <div class="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">📜 Riwayat Aktivitas Poin Klan</h3>
                    </div>
                    <div class="p-4 space-y-2 max-h-[500px] overflow-y-auto pr-2">
                        ${logs.length > 0 ? logs.map(l => {
                            const dateStr = formatDateTime(parseTimestamp(l.date));
                            const isPositive = (l.amount || 0) >= 0;
                            const badgeClass = isPositive 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-red-500/20 text-red-400 border border-red-500/30';
                            return `
                            <div class="animate-item flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-white font-medium">${l.memberName || 'Unknown'}</span>
                                        <span class="text-[10px] text-gray-500">${l.memberTag || ''}</span>
                                        <span class="text-xs text-gray-500">— ${l.reason || ''}</span>
                                    </div>
                                    <p class="text-[10px] text-gray-500 mt-1">Oleh: ${l.adminName || 'Admin'} • ${dateStr}</p>
                                </div>
                                <div class="shrink-0 text-right">
                                    <span class="px-3 py-1 rounded-full text-xs font-bold ${badgeClass}" style="font-family: 'Lilita One', cursive;">
                                        ${isPositive ? '+' : ''}${l.amount} Poin
                                    </span>
                                </div>
                            </div>
                            `;
                        }).join('') : `
                            <p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>
                        `}
                    </div>
                </div>

            </div>
        </div>
        ${renderFooter()}
    `;
}
