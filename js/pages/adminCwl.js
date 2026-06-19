// ============================================================
// StreetLourd — Admin CWL Lineup Management Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { modal } from '../components/modal.js';
import { getMembers, getCwlLineup, saveCwlLineup } from '../services/firestore.js';
import { getCurrentUser, isAdmin } from '../services/auth.js';

let members = [];
let cwlLineups = []; // Local cache of the 7 days' lineups
let activeDay = 1;
let selectedTags = new Set(); // Selection for the currently active day

export async function renderAdminCwl() {
    const container = document.getElementById('page-content');

    // 1. Check Auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses halaman Kelola Lineup CWL</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Home</a>
                </div>
            </div>
        `;
        return;
    }

    // Show loading skeleton
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="h-64 bg-white/5 rounded-2xl animate-pulse"></div>
            </div>
        </div>
    `;

    const user = getCurrentUser();

    // Fetch members and all day lineups in parallel
    const [allMembers, ...lineups] = await Promise.all([
        getMembers(),
        ...[1, 2, 3, 4, 5, 6, 7].map(d => getCwlLineup(d))
    ]);

    members = allMembers;
    cwlLineups = lineups;
    activeDay = 1;
    selectedTags = new Set(cwlLineups[activeDay - 1]?.tags || []);

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header & Back Button -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-on-scroll">
                    <div>
                        <a href="#/admin" class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-2">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                            Kembali ke Admin Panel
                        </a>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            🏆 Kelola Lineup CWL
                        </h1>
                        <p class="text-gray-400 text-sm">Susun formasi lineup klan untuk setiap hari selama war liga (1-7 hari)</p>
                    </div>
                </div>

                <!-- Tabs selector (Day 1 - 7) -->
                <div class="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent animate-on-scroll">
                    ${[1, 2, 3, 4, 5, 6, 7].map(day => {
                        const count = (cwlLineups[day - 1]?.tags || []).length;
                        return `
                            <button id="admin-day-tab-${day}" onclick="window.__adminChangeCwlDay(${day})" 
                                    class="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 border border-white/5
                                           ${activeDay === day 
                                             ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20 scale-[1.03]' 
                                             : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}">
                                <span>Day ${day}</span>
                                <span id="admin-day-count-${day}" class="px-1.5 py-0.5 rounded-full text-[10px] ${activeDay === day ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'}">${count}</span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <!-- Roster Builder Card -->
                <div class="grid grid-cols-1 gap-6 animate-on-scroll">
                    <div class="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6">
                        
                        <!-- Actions & Utilities Bar -->
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
                            <div>
                                <h3 class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    ⚔️ Roster Builder — Day <span id="active-day-title">${activeDay}</span>
                                </h3>
                                <p class="text-xs text-gray-400 mt-1">Gunakan checkbox untuk memilih pemain.</p>
                            </div>
                            
                            <!-- Copy Lineup Utility -->
                            <div class="flex items-center gap-2 w-full sm:w-auto">
                                <label class="text-xs text-gray-400 font-medium shrink-0">Salin Formasi:</label>
                                <select id="copy-source-day" class="admin-select text-xs py-1.5 px-3 min-w-[120px] bg-[#1a1f2e] border-white/10">
                                    <option value="">-- Pilih Hari --</option>
                                    ${[1, 2, 3, 4, 5, 6, 7].map(d => `<option value="${d}">Hari ${d}</option>`).join('')}
                                </select>
                                <button onclick="window.__copyCwlLineup()" class="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white rounded-xl text-xs font-bold transition-all shrink-0">
                                    Salin
                                </button>
                            </div>
                        </div>

                        <!-- Split Columns for Member Lists -->
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                <!-- Left Column: Roster List (Unselected / Filterable) -->
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Daftar Anggota Klan</label>
                                    <input type="text" id="admin-cwl-search" oninput="window.__filterAdminCwlMembers()" 
                                           class="admin-input text-xs py-2 px-3 mb-2 bg-[#141824]" placeholder="Cari nama anggota atau tag...">
                                    <div id="admin-cwl-members-container" class="max-h-[300px] overflow-y-auto border border-white/5 rounded-xl bg-white/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                    <div class="flex justify-between items-center mt-2">
                                        <button type="button" onclick="window.__selectCwlAll(true)" class="text-[10px] text-amber-400 hover:text-amber-300 font-medium">Pilih Semua Hasil</button>
                                        <button type="button" onclick="window.__selectCwlAll(false)" class="text-[10px] text-gray-500 hover:text-gray-400 font-medium">Kosongkan Semua</button>
                                    </div>
                                </div>

                                <!-- Right Column: Selected list & Stats -->
                                <div>
                                    <div class="flex items-center justify-between mb-1.5">
                                        <label class="block text-xs text-gray-400 font-medium">Lineup Terpilih (<span id="admin-selected-count" class="font-bold text-amber-400">0</span>)</label>
                                        <button type="button" onclick="window.__resetAdminCwlSelection()" class="text-[10px] text-red-400 hover:text-red-300 font-bold transition-colors">
                                            🔄 Reset Lineup Hari Ini
                                        </button>
                                    </div>
                                    <div class="h-[34px] mb-2 hidden md:block"></div>
                                    <div id="admin-cwl-selected-container" class="max-h-[300px] min-h-[150px] overflow-y-auto border border-amber-500/20 rounded-xl bg-amber-500/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                </div>

                            </div>

                            <!-- Save Button -->
                            <div class="pt-4 border-t border-white/10 mt-6">
                                <button onclick="window.__submitCwlLineup()" class="w-full py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20">
                                    Simpan Lineup Hari <span id="save-btn-day">${activeDay}</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Attach global window handlers
    window.__adminChangeCwlDay = (day) => {
        if (day < 1 || day > 7) return;
        activeDay = day;
        selectedTags = new Set(cwlLineups[activeDay - 1]?.tags || []);
        
        // Update tabs active states
        for (let d = 1; d <= 7; d++) {
            const tab = document.getElementById(`admin-day-tab-${d}`);
            const countSpan = document.getElementById(`admin-day-count-${d}`);
            if (tab && countSpan) {
                if (d === activeDay) {
                    tab.className = "px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 border border-white/5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20 scale-[1.03]";
                    countSpan.className = "px-1.5 py-0.5 rounded-full text-[10px] bg-black/20 text-black";
                } else {
                    tab.className = "px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 border border-white/5 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white";
                    countSpan.className = "px-1.5 py-0.5 rounded-full text-[10px] bg-white/10 text-gray-400";
                }
            }
        }

        // Update titles
        const dayTitle = document.getElementById('active-day-title');
        if (dayTitle) dayTitle.textContent = activeDay;
        const btnDay = document.getElementById('save-btn-day');
        if (btnDay) btnDay.textContent = activeDay;

        updateCwlLists();
    };

    window.__filterAdminCwlMembers = () => {
        updateCwlLists();
    };

    window.__toggleAdminCwlSelection = (tag, isSelected) => {
        if (isSelected) {
            selectedTags.add(tag);
        } else {
            selectedTags.delete(tag);
        }
        updateCwlLists();
    };

    window.__selectCwlAll = (select) => {
        const query = document.getElementById('admin-cwl-search')?.value.toLowerCase() || '';
        members.forEach(m => {
            const matches = m.name.toLowerCase().includes(query) || m.tag.toLowerCase().includes(query);
            if (matches) {
                if (select) {
                    selectedTags.add(m.tag);
                } else {
                    selectedTags.delete(m.tag);
                }
            }
        });
        updateCwlLists();
    };

    window.__resetAdminCwlSelection = () => {
        selectedTags.clear();
        updateCwlLists();
    };

    window.__copyCwlLineup = () => {
        const sourceSelect = document.getElementById('copy-source-day');
        const sourceDay = parseInt(sourceSelect?.value);
        
        if (!sourceDay || isNaN(sourceDay)) {
            toast.warning('Silakan pilih hari sumber salinan.');
            return;
        }

        if (sourceDay === activeDay) {
            toast.warning('Hari sumber tidak boleh sama dengan hari aktif.');
            return;
        }

        const sourceTags = cwlLineups[sourceDay - 1]?.tags || [];
        if (sourceTags.length === 0) {
            toast.warning(`Lineup Hari ${sourceDay} kosong. Tidak ada yang disalin.`);
            return;
        }

        selectedTags = new Set(sourceTags);
        updateCwlLists();
        toast.success(`Berhasil menyalin lineup dari Hari ${sourceDay}! Tinjau lineup dan klik Simpan untuk memperbarui.`);
    };

    window.__submitCwlLineup = () => {
        const tagsArray = Array.from(selectedTags);
        if (tagsArray.length === 0) {
            modal.confirm({
                title: 'Konfirmasi Kosongkan Lineup',
                message: `Apakah Anda yakin ingin <strong>mengosongkan</strong> lineup Hari ${activeDay}?`,
                onConfirm: async () => {
                    await submitCwlData(tagsArray);
                }
            });
            return;
        }

        modal.confirm({
            title: 'Konfirmasi Simpan Lineup',
            message: `Simpan formasi lineup Hari ${activeDay} dengan total <strong>${tagsArray.length} pemain</strong>?`,
            onConfirm: async () => {
                await submitCwlData(tagsArray);
            }
        });
    };

    // Initial List Render
    setTimeout(() => {
        updateCwlLists();
    }, 100);
}

function updateCwlLists() {
    const leftContainer = document.getElementById('admin-cwl-members-container');
    const rightContainer = document.getElementById('admin-cwl-selected-container');
    const countSpan = document.getElementById('admin-selected-count');

    if (!leftContainer || !rightContainer) return;

    const query = document.getElementById('admin-cwl-search')?.value.toLowerCase() || '';

    // Left List: Unselected Members
    const unselected = members.filter(m => !selectedTags.has(m.tag));
    leftContainer.innerHTML = unselected.map(m => {
        const matches = m.name.toLowerCase().includes(query) || m.tag.toLowerCase().includes(query);
        const displayStyle = matches ? 'flex' : 'none';
        return `
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${m.name}" data-tag="${m.tag}" style="display: ${displayStyle};">
                <input type="checkbox" value="${m.tag}" onchange="window.__toggleAdminCwlSelection('${m.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${m.name}</p>
                    <p class="text-[10px] text-gray-500">${m.tag} • TH${m.townHallLevel || '?'}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${m.totalPoints || 0} pts</span>
                </div>
            </label>
        `;
    }).join('');

    if (unselected.length === 0) {
        leftContainer.innerHTML = `<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>`;
    }

    // Right List: Selected Members
    const selected = members.filter(m => selectedTags.has(m.tag));
    rightContainer.innerHTML = selected.map(m => {
        return `
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${m.tag}" checked onchange="window.__toggleAdminCwlSelection('${m.tag}', false)" class="w-4 h-4 rounded border-amber-500/30 bg-amber-500/10 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-amber-400 font-medium truncate">${m.name}</p>
                    <p class="text-[10px] text-amber-500/60">${m.tag} • TH${m.townHallLevel || '?'}</p>
                </div>
                <div class="text-right shrink-0 font-bold text-amber-400 text-xs" style="font-family: 'Lilita One', cursive;">
                    ${m.totalPoints || 0} pts
                </div>
            </label>
        `;
    }).join('');

    if (selected.length === 0) {
        rightContainer.innerHTML = `<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>`;
    }

    if (countSpan) {
        countSpan.textContent = selected.length;
    }
}

async function submitCwlData(tagsArray) {
    try {
        await saveCwlLineup(activeDay, { tags: tagsArray });
        
        // Update local cache
        if (!cwlLineups[activeDay - 1]) {
            cwlLineups[activeDay - 1] = {};
        }
        cwlLineups[activeDay - 1].tags = tagsArray;
        cwlLineups[activeDay - 1].updatedAt = new Date().toISOString();

        // Update day count in tabs
        const tabCountSpan = document.getElementById(`admin-day-count-${activeDay}`);
        if (tabCountSpan) {
            tabCountSpan.textContent = tagsArray.length;
        }

        toast.success(`Lineup Hari ${activeDay} berhasil disimpan ke database!`);
    } catch (e) {
        toast.error('Gagal menyimpan lineup CWL.');
        console.error(e);
    }
}
