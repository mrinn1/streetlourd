// ============================================================
// StreetLourd — Admin Side Points Management Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { modal } from '../components/modal.js';
import { getMembers, addSidePointEntry, getAllPointHistory, deletePointEntry } from '../services/firestore.js';
import { getCurrentUser, isAdmin } from '../services/auth.js';
import { formatDateTime, parseTimestamp } from '../utils/helpers.js';

let members = [];
let selectedMemberTags = new Set();

export async function renderAdminSidePoints() {
    const container = document.getElementById('page-content');

    // 1. Check auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses halaman Kelola Side Points</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Home</a>
                </div>
            </div>
        `;
        return;
    }

    members = await getMembers();
    selectedMemberTags.clear();
    const user = getCurrentUser();

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header & Back Button -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 animate-on-scroll">
                    <div>
                        <a href="#/admin" class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-2">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                            Kembali ke Admin Panel
                        </a>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            💎 Kelola Side Points
                        </h1>
                        <p class="text-gray-400 text-sm">Kelola poin cadangan (side points) secara manual untuk anggota klan</p>
                    </div>
                </div>

                <!-- Input Side Points Card -->
                <div class="grid grid-cols-1 gap-6 animate-on-scroll">
                    <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            💎 Input Side Points
                        </h3>
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- Left Column: Roster List -->
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Daftar Anggota</label>
                                    <input type="text" id="side-member-search" oninput="window.__filterSideMembers()" 
                                           class="admin-input text-xs py-2 px-3 mb-2" placeholder="Cari nama anggota atau tag...">
                                    <div id="side-members-container" class="max-h-[220px] overflow-y-auto border border-white/5 rounded-xl bg-white/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                    <div class="flex gap-3 mt-2">
                                        <button type="button" onclick="window.__selectAllSideMembers(true)" class="text-[10px] text-blue-400 hover:text-blue-300 font-medium">Pilih Semua</button>
                                    </div>
                                </div>

                                <!-- Right Column: Selected list & Reset -->
                                <div>
                                    <div class="flex items-center justify-between mb-1.5">
                                        <label class="block text-xs text-gray-400 font-medium">Anggota Terpilih (<span id="side-selected-count" class="font-bold text-blue-400">0</span>)</label>
                                        <button type="button" onclick="window.__resetSideSelectedMembers()" class="text-[10px] text-red-400 hover:text-red-300 font-bold transition-colors">
                                            🔄 Reset / Satukan Lagi
                                        </button>
                                    </div>
                                    <div class="h-[34px] mb-2 hidden md:block"></div>
                                    <div id="side-selected-container" class="max-h-[220px] min-h-[100px] overflow-y-auto border border-blue-500/20 rounded-xl bg-blue-500/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                </div>
                            </div>

                            <!-- Target Selection -->
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5 font-medium">Target Penerima Poin</label>
                                <div class="flex flex-wrap gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01]">
                                    <label class="flex items-center gap-2 text-xs text-white cursor-pointer">
                                        <input type="radio" name="side-point-target" value="selected" checked class="w-4 h-4 text-blue-500 border-white/10 bg-white/5 focus:ring-blue-500/50">
                                        Anggota Terpilih (Daftar Kanan)
                                    </label>
                                    <label class="flex items-center gap-2 text-xs text-white cursor-pointer">
                                        <input type="radio" name="side-point-target" value="unselected" class="w-4 h-4 text-blue-500 border-white/10 bg-white/5 focus:ring-blue-500/50">
                                        Anggota Belum Terpilih (Daftar Kiri)
                                    </label>
                                </div>
                            </div>

                            <!-- Presets -->
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Preset</label>
                                <select id="side-preset" class="admin-select" onchange="window.__fillSidePreset()">
                                    <option value="">-- Pilih Preset --</option>
                                    <option value="5">+5 Side Points</option>
                                    <option value="10">+10 Side Points</option>
                                    <option value="-5">-5 Side Points</option>
                                    <option value="-10">-10 Side Points</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-1 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Side Points (Bisa bernilai negatif untuk pengurangan)</label>
                                    <input type="number" id="side-amount" class="admin-input" placeholder="e.g. 5 atau -5">
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Alasan</label>
                                <input type="text" id="side-reason" class="admin-input" placeholder="Alasan penambahan/pengurangan side points...">
                            </div>

                            <button onclick="window.__submitSidePoints()" class="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/20">
                                Submit Side Points
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Point History Log List (Side Points Logs) -->
                <div class="mt-10 animate-on-scroll">
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            📜 Log Riwayat Side Points
                        </h3>
                        
                        <div id="admin-sidepoint-logs" class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                            <!-- Loader -->
                            <div class="text-center py-8">
                                <span class="animate-spin text-2xl inline-block">⏳</span>
                                <p class="text-xs text-gray-500 mt-2">Memuat data log...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Attach global handlers
    window.__filterSideMembers = filterSideMembers;
    window.__selectAllSideMembers = selectAllSideMembers;
    window.__toggleSideMemberSelection = toggleSideMemberSelection;
    window.__resetSideSelectedMembers = resetSideSelectedMembers;
    window.__fillSidePreset = fillSidePreset;
    window.__submitSidePoints = () => submitSidePoints(user);
    window.__deleteLogEntry = (id) => deleteLogEntryHandler(id, user);

    // Initial load
    setTimeout(() => {
        loadAdminSidePointLogs(user);
        updateSideMemberLists();
    }, 100);
}

function updateSideMemberLists() {
    const leftContainer = document.getElementById('side-members-container');
    const rightContainer = document.getElementById('side-selected-container');
    const countSpan = document.getElementById('side-selected-count');
    
    if (!leftContainer || !rightContainer) return;
    
    const query = document.getElementById('side-member-search')?.value.toLowerCase() || '';

    // Left List: Unselected
    const unselected = members.filter(m => !selectedMemberTags.has(m.tag));
    leftContainer.innerHTML = unselected.map(m => {
        const matches = m.name.toLowerCase().includes(query) || m.tag.toLowerCase().includes(query);
        const displayStyle = matches ? 'flex' : 'none';
        return `
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${m.name}" data-tag="${m.tag}" style="display: ${displayStyle};">
                <input type="checkbox" value="${m.tag}" onchange="window.__toggleSideMemberSelection('${m.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${m.name}</p>
                    <p class="text-[10px] text-gray-500">${m.tag} • TH${m.townHallLevel || '?'}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${m.totalPoints || 0}</span>
                    ${m.sidePoints ? `<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${m.sidePoints} SP</span>` : ''}
                </div>
            </label>
        `;
    }).join('');
    
    if (unselected.length === 0) {
        leftContainer.innerHTML = `<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>`;
    }

    // Right List: Selected
    const selected = members.filter(m => selectedMemberTags.has(m.tag));
    rightContainer.innerHTML = selected.map(m => {
        return `
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${m.tag}" checked onchange="window.__toggleSideMemberSelection('${m.tag}', false)" class="w-4 h-4 rounded border-blue-500/30 bg-blue-500/10 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-blue-400 font-medium truncate">${m.name}</p>
                    <p class="text-[10px] text-blue-500/60">${m.tag} • TH${m.townHallLevel || '?'}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${m.totalPoints || 0}</span>
                    ${m.sidePoints ? `<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${m.sidePoints} SP</span>` : ''}
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

function filterSideMembers() {
    updateSideMemberLists();
}

function selectAllSideMembers(checked) {
    if (checked) {
        const query = document.getElementById('side-member-search')?.value.toLowerCase() || '';
        members.forEach(m => {
            if (!selectedMemberTags.has(m.tag)) {
                const matches = m.name.toLowerCase().includes(query) || m.tag.toLowerCase().includes(query);
                if (matches) {
                    selectedMemberTags.add(m.tag);
                }
            }
        });
    } else {
        selectedMemberTags.clear();
    }
    updateSideMemberLists();
}

function toggleSideMemberSelection(tag, isSelected) {
    if (isSelected) {
        selectedMemberTags.add(tag);
    } else {
        selectedMemberTags.delete(tag);
    }
    updateSideMemberLists();
}

function resetSideSelectedMembers() {
    selectedMemberTags.clear();
    const searchInput = document.getElementById('side-member-search');
    if (searchInput) {
        searchInput.value = '';
    }
    const radioSelected = document.querySelector('input[name="side-point-target"][value="selected"]');
    if (radioSelected) {
        radioSelected.checked = true;
    }
    updateSideMemberLists();
}

function fillSidePreset() {
    const preset = document.getElementById('side-preset');
    if (!preset || !preset.value) return;
    const amountInput = document.getElementById('side-amount');
    if (amountInput) amountInput.value = preset.value;
}

async function submitSidePoints(user) {
    const target = document.querySelector('input[name="side-point-target"]:checked')?.value || 'selected';
    
    let targetTags = [];
    if (target === 'selected') {
        targetTags = Array.from(selectedMemberTags);
    } else {
        targetTags = members.filter(m => !selectedMemberTags.has(m.tag)).map(m => m.tag);
    }

    const amount = parseInt(document.getElementById('side-amount')?.value);
    const reason = document.getElementById('side-reason')?.value;

    if (targetTags.length === 0) {
        toast.warning(target === 'selected' ? 'Mohon pilih minimal satu anggota di daftar kanan.' : 'Tidak ada anggota tersisa di daftar kiri.');
        return;
    }

    if (isNaN(amount) || !reason) {
        toast.warning('Mohon lengkapi semua field.');
        return;
    }

    const targetMembers = targetTags.map(tag => members.find(m => m.tag === tag)).filter(Boolean);
    const memberNames = targetMembers.map(m => m.name).join(', ');

    modal.confirm({
        title: 'Konfirmasi Kelola Side Points',
        message: `Apakah Anda yakin ingin ${amount > 0 ? 'menambah' : 'mengurangi'} <strong>${Math.abs(amount)}</strong> side points untuk <strong>${targetMembers.length} anggota</strong> (${target === 'selected' ? 'Daftar Kanan' : 'Daftar Kiri'})?<br><br>Anggota: <i>${memberNames}</i><br><br>Alasan: ${reason}`,
        onConfirm: async () => {
            try {
                for (const member of targetMembers) {
                    await addSidePointEntry({
                        memberTag: member.tag,
                        memberName: member.name,
                        amount,
                        reason,
                        category: 'side_point',
                        adminName: user?.displayName || 'Admin',
                    });
                }
                toast.success(`Side points berhasil ${amount > 0 ? 'ditambahkan' : 'dikurangi'} untuk ${targetMembers.length} anggota!`);
                // Reset form
                document.getElementById('side-amount').value = '';
                document.getElementById('side-reason').value = '';
                document.getElementById('side-preset').value = '';
                resetSideSelectedMembers();
                // Reload data
                members = await getMembers();
                updateSideMemberLists();
                loadAdminSidePointLogs(user);
            } catch (e) {
                toast.error('Gagal menyimpan side points.');
                console.error(e);
            }
        }
    });
}

async function loadAdminSidePointLogs(user) {
    const logsContainer = document.getElementById('admin-sidepoint-logs');
    if (!logsContainer) return;
    
    try {
        const logs = await getAllPointHistory();
        const sideLogs = logs.filter(l => l.category === 'side_point');
        if (sideLogs.length === 0) {
            logsContainer.innerHTML = `<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan side points.</p>`;
            return;
        }
        
        logsContainer.innerHTML = sideLogs.map(l => {
            const dateStr = formatDateTime(parseTimestamp(l.date));
            const isPositive = (l.amount || 0) >= 0;
            const badgeClass = isPositive 
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30';
                
            return `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-white font-medium">${l.memberName || 'Unknown'}</span>
                            <span class="text-[10px] text-gray-500">${l.memberTag || ''}</span>
                            <span class="text-xs text-gray-400">— ${l.reason || ''}</span>
                        </div>
                        <p class="text-[10px] text-gray-500 mt-1">Oleh: ${l.adminName || 'Admin'} • ${dateStr}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${badgeClass}" style="font-family: 'Lilita One', cursive;">
                            ${isPositive ? '+' : ''}${l.amount} Side Point
                        </span>
                        <button onclick="window.__deleteLogEntry('${l.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log">
                            🗑️
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    } catch (e) {
        console.error(e);
        logsContainer.innerHTML = `<p class="text-center text-red-400 text-sm py-6">Gagal memuat log side points.</p>`;
    }
}

async function deleteLogEntryHandler(id, user) {
    modal.confirm({
        title: 'Hapus Log Side Points',
        message: 'Apakah Anda yakin ingin menghapus log side points ini? Tindakan ini tidak mengembalikan nilai side points anggota.',
        onConfirm: async () => {
            try {
                await deletePointEntry(id);
                toast.success('Log side points berhasil dihapus!');
                loadAdminSidePointLogs(user);
            } catch (e) {
                console.error(e);
                toast.error('Gagal menghapus log.');
            }
        }
    });
}
