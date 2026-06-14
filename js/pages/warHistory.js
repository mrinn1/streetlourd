// ============================================================
// StreetLourd — War History Page
// ============================================================

import { warCard } from '../components/card.js';
import { skeleton, emptyState } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getWars } from '../services/firestore.js';
import { formatDate } from '../utils/helpers.js';

export async function renderWarHistory() {
    const container = document.getElementById('page-content');
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${skeleton.repeat('warCard', 5)}
        </div></div>
    `;

    const wars = await getWars();

    if (wars.length === 0) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">⚔️ War History</h1>
                ${emptyState('⚔️', 'Belum Ada Data War', 'Data war akan muncul setelah admin menginput hasil war')}
            </div></div>${renderFooter()}
        `;
        return;
    }

    // Calculate war stats
    const totalWars = wars.length;
    const wins = wars.filter(w => w.result === 'win').length;
    const losses = wars.filter(w => w.result === 'loss').length;
    const draws = wars.filter(w => w.result === 'draw').length;
    const winRate = totalWars ? Math.round((wins / totalWars) * 100) : 0;

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        ⚔️ War History
                    </h1>
                    <p class="text-gray-400">Timeline pertempuran clan</p>
                </div>

                <!-- War Stats Bar -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    <div class="animate-item rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                        <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">${totalWars}</p>
                        <p class="text-xs text-gray-500">Total Wars</p>
                    </div>
                    <div class="animate-item rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-green-400" style="font-family: 'Lilita One', cursive;">${wins}</p>
                        <p class="text-xs text-gray-500">Victories</p>
                    </div>
                    <div class="animate-item rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-red-400" style="font-family: 'Lilita One', cursive;">${losses}</p>
                        <p class="text-xs text-gray-500">Defeats</p>
                    </div>
                    <div class="animate-item rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">${winRate}%</p>
                        <p class="text-xs text-gray-500">Win Rate</p>
                    </div>
                </div>

                <!-- Timeline -->
                <div class="relative animate-on-scroll" data-stagger="true">
                    <!-- Timeline Line -->
                    <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-transparent"></div>

                    <div class="space-y-6">
                        ${wars.map((w, i) => {
                            const dateStr = formatDate(w.date);
                            const resultColors = {
                                win: 'bg-green-500',
                                loss: 'bg-red-500',
                                draw: 'bg-gray-500',
                            };
                            return `
                                <div class="animate-item relative flex gap-6 md:gap-8">
                                    <!-- Timeline Dot -->
                                    <div class="relative z-10 shrink-0">
                                        <div class="w-3 h-3 mt-7 rounded-full ${resultColors[w.result] || 'bg-gray-500'} ring-4 ring-[#0a0e17]"></div>
                                    </div>
                                    <!-- War Card -->
                                    <div class="flex-1 pb-2">
                                        ${warCard({
                                            date: dateStr,
                                            opponent: w.opponent,
                                            warSize: w.warSize,
                                            result: w.result,
                                            clanStars: w.clanStars,
                                            opponentStars: w.opponentStars,
                                            clanDestruction: w.clanDestruction,
                                            opponentDestruction: w.opponentDestruction,
                                        })}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;
}
