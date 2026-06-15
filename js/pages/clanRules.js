// ============================================================
// StreetLourd — Clan Rules Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { POINT_REWARDS as DEFAULT_REWARDS, POINT_PUNISHMENTS as DEFAULT_PUNISHMENTS } from '../utils/constants.js';
import { getRules } from '../services/firestore.js';

const DEFAULT_GENERAL_RULES = [
    'Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat',
    'Jika status Opt-In dan tidak menyerang, poin otomatis berkurang',
    'Jika status Opt-Out atau Izin, tidak ada pengurangan poin',
    'Leader dan Co-Leader berhak menambah/mengurangi poin manual',
    'Riwayat poin dapat dilihat oleh semua anggota',
    'Promosi direkomendasikan berdasarkan akumulasi poin',
    'Setiap anggota wajib menghormati sesama anggota clan',
    'Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan'
];

export async function renderClanRules() {
    const customRules = await getRules();

    const rewards = customRules && customRules.rewards ? customRules.rewards : DEFAULT_REWARDS;
    const punishments = customRules && customRules.punishments ? customRules.punishments : DEFAULT_PUNISHMENTS;
    const generalRules = customRules && customRules.generalRules ? customRules.generalRules : DEFAULT_GENERAL_RULES;

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
                <div class="mb-12 animate-on-scroll" data-stagger="true">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xl shadow-lg">🎁</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Rewards</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${rewards.map(r => `
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 
                                        bg-gradient-to-br from-green-500/10 to-emerald-600/5 backdrop-blur-sm
                                        hover:from-green-500/20 hover:to-emerald-600/10 hover:border-green-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${r.icon || '💎'}</span>
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
                <div class="mb-12 animate-on-scroll" data-stagger="true">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-xl shadow-lg">⛔</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Punishments</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${punishments.map(p => `
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-red-500/20 
                                        bg-gradient-to-br from-red-500/10 to-rose-600/5 backdrop-blur-sm
                                        hover:from-red-500/20 hover:to-rose-600/10 hover:border-red-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${p.icon || '⚠️'}</span>
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
                <div class="mb-12 animate-on-scroll">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-xl shadow-lg">⚖️</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">General Rules</h2>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
                        ${generalRules.map((rule, i) => ruleItem(i + 1, rule)).join('')}
                    </div>
                </div>

                <!-- Role & Penalty Rules Card -->
                <div class="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-500/5 backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h3 class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        ⚠️ Ketentuan & Batas Poin Jabatan
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">
                        Ketentuan batas poin untuk kenaikan jabatan, penurunan jabatan (demote), dan pengeluaran (kick) dari klan:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Co-Leader Rules -->
                        <div class="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-purple-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    ⚜️ Co-Leader
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>• Syarat Jabatan: <strong class="text-white">1500 Poin</strong></li>
                                    <li>• Batas Demote: <strong class="text-red-400">&le; 1250 Poin</strong> (Turun ke Elder)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Elder Rules -->
                        <div class="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-blue-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    🛡️ Elder
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>• Syarat Jabatan: <strong class="text-white">1250 Poin</strong></li>
                                    <li>• Batas Demote: <strong class="text-red-400">1000 Poin</strong> (Turun ke Member)</li>
                                    <li>• Batas Kick: <strong class="text-red-500">&lt; 1000 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Member Rules -->
                        <div class="p-4 rounded-xl border border-gray-500/20 bg-gray-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-gray-300 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    ⚔️ Member
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>• Syarat Poin Awal: <strong class="text-white">500 Poin</strong></li>
                                    <li>• Batas Kick: <strong class="text-red-500">&le; 250 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
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
