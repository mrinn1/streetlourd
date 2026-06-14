// ============================================================
// VictoryToClan — Clan Rules Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { POINT_REWARDS, POINT_PUNISHMENTS } from '../utils/constants.js';

export function renderClanRules() {
    return `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        📜 Clan Rules & Point System
                    </h1>
                    <p class="text-gray-400 max-w-xl mx-auto">Sistem poin untuk mengukur kontribusi setiap anggota secara adil dan transparan</p>
                </div>

                <!-- Rewards Section -->
                <div class="mb-12 animate-on-scroll">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xl shadow-lg">✅</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Rewards</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-stagger="true">
                        ${POINT_REWARDS.map(r => `
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 
                                        bg-gradient-to-br from-green-500/10 to-emerald-600/5 backdrop-blur-sm
                                        hover:from-green-500/20 hover:to-emerald-600/10 hover:border-green-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${r.icon}</span>
                                <div class="flex-1">
                                    <p class="text-white font-medium">${r.label}</p>
                                    <p class="text-xs text-gray-500 capitalize">${r.category}</p>
                                </div>
                                <span class="text-lg font-bold text-green-400" style="font-family: 'Lilita One', cursive;">
                                    +${r.points}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Punishments Section -->
                <div class="mb-12 animate-on-scroll">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-xl shadow-lg">⛔</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Punishments</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-stagger="true">
                        ${POINT_PUNISHMENTS.map(p => `
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-red-500/20 
                                        bg-gradient-to-br from-red-500/10 to-rose-600/5 backdrop-blur-sm
                                        hover:from-red-500/20 hover:to-rose-600/10 hover:border-red-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${p.icon}</span>
                                <div class="flex-1">
                                    <p class="text-white font-medium">${p.label}</p>
                                    <p class="text-xs text-gray-500 capitalize">${p.category}</p>
                                </div>
                                <span class="text-lg font-bold text-red-400" style="font-family: 'Lilita One', cursive;">
                                    ${p.points}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- General Rules -->
                <div class="animate-on-scroll">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-xl shadow-lg">⚖️</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">General Rules</h2>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
                        ${ruleItem('1', 'Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat')}
                        ${ruleItem('2', 'Jika status Opt-In dan tidak menyerang, poin otomatis berkurang')}
                        ${ruleItem('3', 'Jika status Opt-Out atau Izin, tidak ada pengurangan poin')}
                        ${ruleItem('4', 'Leader dan Co-Leader berhak menambah/mengurangi poin manual')}
                        ${ruleItem('5', 'Riwayat poin dapat dilihat oleh semua anggota')}
                        ${ruleItem('6', 'Promosi direkomendasikan berdasarkan akumulasi poin')}
                        ${ruleItem('7', 'Setiap anggota wajib menghormati sesama anggota clan')}
                        ${ruleItem('8', 'Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan')}
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;
}

function ruleItem(num, text) {
    return `
        <div class="flex items-start gap-4 group">
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/20 
                         flex items-center justify-center text-sm font-bold text-amber-400 shrink-0 
                         group-hover:from-amber-500/30 transition-all">${num}</span>
            <p class="text-gray-300 text-sm leading-relaxed pt-1">${text}</p>
        </div>
    `;
}
