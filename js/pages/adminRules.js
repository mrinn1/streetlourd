// ============================================================
// StreetLourd — Rules Settings Page (Admin)
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { getRules, saveRules } from '../services/firestore.js';
import { isAdmin } from '../services/auth.js';
import { POINT_REWARDS as DEFAULT_REWARDS, POINT_PUNISHMENTS as DEFAULT_PUNISHMENTS } from '../utils/constants.js';

let localRules = {
    rewards: [],
    punishments: [],
    generalRules: []
};

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

export async function renderAdminRules() {
    const container = document.getElementById('page-content');

    // 1. Check Auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses pengaturan aturan.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Home</a>
                </div>
            </div>
        `;
        return;
    }

    // 2. Fetch Rules
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
            <div class="animate-spin text-4xl mb-4">⏳</div>
            <p class="text-gray-400">Memuat konfigurasi rules...</p>
        </div></div>
    `;

    try {
        const rules = await getRules();
        if (rules) {
            localRules = {
                rewards: rules.rewards || [],
                punishments: rules.punishments || [],
                generalRules: rules.generalRules || []
            };
        } else {
            localRules = {
                rewards: JSON.parse(JSON.stringify(DEFAULT_REWARDS)),
                punishments: JSON.parse(JSON.stringify(DEFAULT_PUNISHMENTS)),
                generalRules: [...DEFAULT_GENERAL_RULES]
            };
        }
    } catch (e) {
        console.error(e);
        toast.error('Gagal mengambil data rules.');
    }

    renderEditor(container);
}

function renderEditor(container) {
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header & Back Button -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <a href="#/admin" class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-2">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                            Kembali ke Admin
                        </a>
                        <h1 class="text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">
                            ⚙️ Rules & Presets Settings
                        </h1>
                        <p class="text-gray-400 text-sm">Sesuaikan poin reward, punishment, dan aturan umum clan</p>
                    </div>
                    <div>
                        <button onclick="window.__saveRulesConfig()" class="px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            💾 Simpan Peraturan
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: General Rules Editor -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                ⚖️ General Rules
                            </h2>
                            <div id="general-rules-container" class="space-y-3 mb-4">
                                ${localRules.generalRules.map((rule, idx) => `
                                    <div class="flex items-center gap-2 general-rule-row">
                                        <span class="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs text-amber-400 font-bold shrink-0">${idx + 1}</span>
                                        <input type="text" class="general-rule-input admin-input text-sm" value="${rule}" placeholder="Aturan umum...">
                                        <button onclick="window.__removeGeneralRule(${idx})" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors shrink-0">
                                            🗑️
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                            <button onclick="window.__addGeneralRule()" class="w-full py-2.5 rounded-xl border border-dashed border-white/20 text-xs font-medium text-gray-400 hover:text-white hover:border-white/40 transition-colors">
                                ➕ Tambah Aturan Umum
                            </button>
                        </div>
                    </div>

                    <!-- Right: Rewards & Punishments Presets Editor -->
                    <div class="lg:col-span-7 space-y-8">
                        <!-- Rewards -->
                        <div class="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-600/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                🎁 Point Rewards Presets
                            </h2>
                            <div id="rewards-container" class="space-y-4 mb-4">
                                ${localRules.rewards.map((r, idx) => renderPresetRow(idx, r, 'reward')).join('')}
                            </div>
                            <button onclick="window.__addPreset('reward')" class="w-full py-2.5 rounded-xl border border-dashed border-green-500/20 text-xs font-medium text-green-400 hover:text-green-300 hover:border-green-500/40 transition-colors">
                                ➕ Tambah Preset Reward
                            </button>
                        </div>

                        <!-- Punishments -->
                        <div class="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-rose-600/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                ⛔ Point Punishments Presets
                            </h2>
                            <div id="punishments-container" class="space-y-4 mb-4">
                                ${localRules.punishments.map((p, idx) => renderPresetRow(idx, p, 'punishment')).join('')}
                            </div>
                            <button onclick="window.__addPreset('punishment')" class="w-full py-2.5 rounded-xl border border-dashed border-red-500/20 text-xs font-medium text-red-400 hover:text-red-300 hover:border-red-500/40 transition-colors">
                                ➕ Tambah Preset Punishment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Bind window functions
    window.__addGeneralRule = () => {
        saveCurrentInputState();
        localRules.generalRules.push('');
        renderEditor(container);
    };

    window.__removeGeneralRule = (idx) => {
        saveCurrentInputState();
        localRules.generalRules.splice(idx, 1);
        renderEditor(container);
    };

    window.__addPreset = (type) => {
        saveCurrentInputState();
        const list = type === 'reward' ? localRules.rewards : localRules.punishments;
        list.push({
            id: `${type}_${Date.now()}`,
            label: '',
            points: type === 'reward' ? 10 : -10,
            icon: type === 'reward' ? '⭐' : '❌',
            category: 'war'
        });
        renderEditor(container);
    };

    window.__removePreset = (idx, type) => {
        saveCurrentInputState();
        const list = type === 'reward' ? localRules.rewards : localRules.punishments;
        list.splice(idx, 1);
        renderEditor(container);
    };

    window.__saveRulesConfig = async () => {
        saveCurrentInputState();

        // Basic validation
        if (localRules.generalRules.some(r => !r.trim())) {
            toast.warning('Teks aturan umum tidak boleh kosong.');
            return;
        }
        const hasInvalidRewards = localRules.rewards.some(r => !r.label.trim() || isNaN(r.points));
        const hasInvalidPunishments = localRules.punishments.some(p => !p.label.trim() || isNaN(p.points));
        if (hasInvalidRewards || hasInvalidPunishments) {
            toast.warning('Semua label preset harus diisi dan poin harus berupa angka.');
            return;
        }

        try {
            await saveRules(localRules);
            toast.success('Rules & presets berhasil disimpan ke database!');
        } catch (e) {
            console.error(e);
            toast.error('Gagal menyimpan rules.');
        }
    };
}

function renderPresetRow(idx, item, type) {
    const isReward = type === 'reward';
    return `
        <div class="preset-row grid grid-cols-12 gap-3 p-4 bg-white/5 border border-white/5 rounded-xl items-center relative group" data-type="${type}">
            <div class="col-span-2">
                <label class="block text-[10px] text-gray-500 mb-1">Icon</label>
                <input type="text" class="preset-icon-input admin-input text-center text-sm px-1" value="${item.icon || ''}" placeholder="Emoji">
            </div>
            <div class="col-span-5">
                <label class="block text-[10px] text-gray-500 mb-1">Label / Nama Preset</label>
                <input type="text" class="preset-label-input admin-input text-sm" value="${item.label || ''}" placeholder="Contoh: Ikut War">
            </div>
            <div class="col-span-2">
                <label class="block text-[10px] text-gray-500 mb-1">Poin</label>
                <input type="number" class="preset-points-input admin-input text-center text-sm px-1" value="${item.points}" placeholder="Poin">
            </div>
            <div class="col-span-3 flex items-end gap-2">
                <div class="flex-1 min-w-0">
                    <label class="block text-[10px] text-gray-500 mb-1">Kategori</label>
                    <select class="preset-category-input admin-select text-xs py-2.5">
                        <option value="war" ${item.category === 'war' ? 'selected' : ''}>War</option>
                        <option value="donation" ${item.category === 'donation' ? 'selected' : ''}>Donation</option>
                        <option value="clangames" ${item.category === 'clangames' ? 'selected' : ''}>Games</option>
                        <option value="cwl" ${item.category === 'cwl' ? 'selected' : ''}>CWL</option>
                        <option value="capital" ${item.category === 'capital' ? 'selected' : ''}>Capital</option>
                        <option value="violation" ${item.category === 'violation' ? 'selected' : ''}>Violation</option>
                        <option value="activity" ${item.category === 'activity' ? 'selected' : ''}>Activity</option>
                    </select>
                </div>
                <button onclick="window.__removePreset(${idx}, '${type}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors shrink-0 mb-[1px]">
                    🗑️
                </button>
            </div>
        </div>
    `;
}

function saveCurrentInputState() {
    // 1. Save general rules inputs
    const generalInputs = document.querySelectorAll('.general-rule-input');
    localRules.generalRules = Array.from(generalInputs).map(inp => inp.value);

    // 2. Save presets inputs
    const presetRows = document.querySelectorAll('.preset-row');
    const newRewards = [];
    const newPunishments = [];

    presetRows.forEach((row, idx) => {
        const type = row.dataset.type;
        const icon = row.querySelector('.preset-icon-input')?.value || '';
        const label = row.querySelector('.preset-label-input')?.value || '';
        const points = parseInt(row.querySelector('.preset-points-input')?.value) || 0;
        const category = row.querySelector('.preset-category-input')?.value || 'war';

        const item = {
            id: `${type}_${idx}_${Date.now()}`,
            icon,
            label,
            points,
            category
        };

        if (type === 'reward') {
            newRewards.push(item);
        } else {
            newPunishments.push(item);
        }
    });

    localRules.rewards = newRewards;
    localRules.punishments = newPunishments;
}
