// ============================================================
// StreetLourd — Admin Panel Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { modal } from '../components/modal.js';
import { getMembers, getWars, addPointEntry, saveWar, saveWarHistory, addViolation, addPromotion, getAllUsers, updateUserRole, getRules, getAllPointHistory, deletePointEntry } from '../services/firestore.js';
import { getCurrentUser, getUserRole, isAdmin } from '../services/auth.js';
import { POINT_REWARDS, POINT_PUNISHMENTS, WAR_STATUS } from '../utils/constants.js';
import { formatNumber, formatDateTime, parseTimestamp } from '../utils/helpers.js';

let members = [];
let activeRules = null;

export async function renderAdmin() {
    const container = document.getElementById('page-content');

    // Check auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses Admin Panel</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Home</a>
                </div>
            </div>
        `;
        return;
    }

    members = await getMembers();
    activeRules = await getRules();
    const rewards = activeRules && activeRules.rewards ? activeRules.rewards : POINT_REWARDS;
    const user = getCurrentUser();

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 animate-on-scroll">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            ⚙️ Admin Panel
                        </h1>
                        <p class="text-gray-400 text-sm">Kelola poin, war, dan anggota clan</p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <a href="#/admin/landing" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            ✨ Edit Landing Page
                        </a>
                        <a href="#/admin/rules" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            📜 Pengaturan Rules
                        </a>
                    </div>
                </div>

                <!-- Admin Sections as Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll" data-stagger="true">
                    
                    <!-- Add/Deduct Points -->
                    <div class="animate-item rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            💎 Kelola Poin
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Pilih Member</label>
                                <select id="point-member" class="admin-select">${memberOptions()}</select>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Jenis</label>
                                <select id="point-type" class="admin-select" onchange="window.__updatePointPresets()">
                                    <option value="reward">Reward (+)</option>
                                    <option value="punishment">Punishment (-)</option>
                                    <option value="manual">Manual</option>
                                </select>
                            </div>
                            <div id="point-preset-container">
                                <label class="block text-xs text-gray-400 mb-1.5">Preset</label>
                                <select id="point-preset" class="admin-select" onchange="window.__fillPointPreset()">
                                    <option value="">-- Pilih Preset --</option>
                                    ${rewards.map(r => `<option value="${r.points}" data-reason="${r.label}">${r.points > 0 ? '+' : ''}${r.points} — ${r.label}</option>`).join('')}
                                </select>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Points</label>
                                    <input type="number" id="point-amount" class="admin-input" placeholder="e.g. 10">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Kategori</label>
                                    <select id="point-category" class="admin-select">
                                        <option value="war">War</option>
                                        <option value="donation">Donation</option>
                                        <option value="clangames">Clan Games</option>
                                        <option value="cwl">CWL</option>
                                        <option value="capital">Capital</option>
                                        <option value="violation">Violation</option>
                                        <option value="manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Alasan</label>
                                <input type="text" id="point-reason" class="admin-input" placeholder="Alasan perubahan poin...">
                            </div>
                            <button onclick="window.__submitPoints()" class="w-full py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20">
                                Submit Points
                            </button>
                        </div>
                    </div>

                    <!-- War Input -->
                    <div class="animate-item rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            ⚔️ Input War
                        </h3>
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">War Size</label>
                                    <select id="war-size" class="admin-select">
                                        ${[5,10,15,20,25,30,40,50].map(s => `<option value="${s}">${s}v${s}</option>`).join('')}
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Result</label>
                                    <select id="war-result" class="admin-select">
                                        <option value="win">Victory ✅</option>
                                        <option value="loss">Defeat ❌</option>
                                        <option value="draw">Draw ⚖️</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Opponent Name</label>
                                <input type="text" id="war-opponent" class="admin-input" placeholder="Nama clan lawan">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Our Stars</label>
                                    <input type="number" id="war-our-stars" class="admin-input" placeholder="0">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Enemy Stars</label>
                                    <input type="number" id="war-enemy-stars" class="admin-input" placeholder="0">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Our Destruction %</label>
                                    <input type="number" id="war-our-dest" class="admin-input" placeholder="0" step="0.1">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Enemy Destruction %</label>
                                    <input type="number" id="war-enemy-dest" class="admin-input" placeholder="0" step="0.1">
                                </div>
                            </div>
                            <button onclick="window.__submitWar()" class="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 transition-all shadow-lg shadow-red-500/20">
                                Save War
                            </button>
                        </div>
                    </div>

                    <!-- Violations -->
                    <div class="animate-item rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-violet-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            ⚠️ Violations & Notes
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Member</label>
                                <select id="viol-member" class="admin-select">${memberOptions()}</select>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Tipe</label>
                                <select id="viol-type" class="admin-select">
                                    <option value="warning">Warning</option>
                                    <option value="violation">Violation</option>
                                    <option value="note">Note/Catatan</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Deskripsi</label>
                                <textarea id="viol-desc" rows="3" class="admin-input" placeholder="Deskripsi pelanggaran..."></textarea>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Points Deducted</label>
                                <input type="number" id="viol-points" class="admin-input" placeholder="0" min="0">
                            </div>
                            <button onclick="window.__submitViolation()" class="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500 transition-all shadow-lg shadow-purple-500/20">
                                Submit
                            </button>
                        </div>
                    </div>

                    <!-- Role Management -->
                    <div class="animate-item rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            👑 Role Management
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Member</label>
                                <select id="role-member" class="admin-select">${memberOptions()}</select>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">New Role (Website)</label>
                                <select id="role-new" class="admin-select">
                                    <option value="member">Member</option>
                                    <option value="senior">Senior</option>
                                    <option value="coleader">Co-Leader</option>
                                    <option value="leader">Leader</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Alasan</label>
                                <input type="text" id="role-reason" class="admin-input" placeholder="Alasan promosi/demosi...">
                            </div>
                            <button onclick="window.__submitRole()" class="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/20">
                                Update Role
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Point History Log List (Admin Manage) -->
                <div class="mt-10 animate-on-scroll">
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            📜 Kelola Log Poin
                        </h3>
                        
                        <div id="admin-point-logs" class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                            <!-- Loader -->
                            <div class="text-center py-8">
                                <span class="animate-spin text-2xl inline-block">⏳</span>
                                <p class="text-xs text-gray-500 mt-2">Memuat data log poin...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        ${renderFooter()}
    `;

    // Attach global handlers
    window.__updatePointPresets = updatePointPresets;
    window.__fillPointPreset = fillPointPreset;
    window.__submitPoints = () => submitPoints(user);
    window.__submitWar = () => submitWar(user);
    window.__submitViolation = () => submitViolation(user);
    window.__submitRole = () => submitRole(user);
    window.__loadAdminPointLogs = () => loadAdminPointLogs(user);
    window.__deleteLogEntry = (id) => deleteLogEntryHandler(id, user);

    // Initial load of logs
    setTimeout(() => {
        loadAdminPointLogs(user);
    }, 100);
}

function memberOptions() {
    return members.map(m => `<option value="${m.tag}">${m.name} (${m.tag})</option>`).join('');
}

function updatePointPresets() {
    const type = document.getElementById('point-type')?.value;
    const presetContainer = document.getElementById('point-preset-container');
    const preset = document.getElementById('point-preset');
    if (!preset) return;

    if (type === 'manual') {
        presetContainer.style.display = 'none';
    } else {
        presetContainer.style.display = 'block';
        const rewards = activeRules && activeRules.rewards ? activeRules.rewards : POINT_REWARDS;
        const punishments = activeRules && activeRules.punishments ? activeRules.punishments : POINT_PUNISHMENTS;
        const items = type === 'reward' ? rewards : punishments;
        preset.innerHTML = `<option value="">-- Pilih Preset --</option>` +
            items.map(r => `<option value="${r.points}" data-reason="${r.label}">${r.points > 0 ? '+' : ''}${r.points} — ${r.label}</option>`).join('');
    }
}

function fillPointPreset() {
    const preset = document.getElementById('point-preset');
    const option = preset?.selectedOptions[0];
    if (!option || !option.value) return;
    const amountInput = document.getElementById('point-amount');
    const reasonInput = document.getElementById('point-reason');
    if (amountInput) amountInput.value = option.value;
    if (reasonInput) reasonInput.value = option.dataset.reason || '';
}

async function submitPoints(user) {
    const memberTag = document.getElementById('point-member')?.value;
    const amount = parseInt(document.getElementById('point-amount')?.value);
    const reason = document.getElementById('point-reason')?.value;
    const category = document.getElementById('point-category')?.value;

    if (!memberTag || isNaN(amount) || !reason) {
        toast.warning('Mohon lengkapi semua field.');
        return;
    }

    const member = members.find(m => m.tag === memberTag);

    modal.confirm({
        title: 'Konfirmasi',
        message: `${amount > 0 ? 'Tambah' : 'Kurangi'} <strong>${Math.abs(amount)}</strong> poin untuk <strong>${member?.name}</strong>?<br><br>Alasan: ${reason}`,
        onConfirm: async () => {
            try {
                await addPointEntry({
                    memberTag,
                    memberName: member?.name || 'Unknown',
                    amount,
                    reason,
                    category,
                    adminName: user?.displayName || 'Admin',
                });
                toast.success(`Poin berhasil ${amount > 0 ? 'ditambahkan' : 'dikurangi'}!`);
                // Reset form
                document.getElementById('point-amount').value = '';
                document.getElementById('point-reason').value = '';
            } catch (e) {
                toast.error('Gagal menyimpan poin.');
                console.error(e);
            }
        }
    });
}

async function submitWar(user) {
    const warSize = parseInt(document.getElementById('war-size')?.value);
    const result = document.getElementById('war-result')?.value;
    const opponent = document.getElementById('war-opponent')?.value;
    const clanStars = parseInt(document.getElementById('war-our-stars')?.value) || 0;
    const opponentStars = parseInt(document.getElementById('war-enemy-stars')?.value) || 0;
    const clanDest = parseFloat(document.getElementById('war-our-dest')?.value) || 0;
    const opponentDest = parseFloat(document.getElementById('war-enemy-dest')?.value) || 0;

    if (!opponent) {
        toast.warning('Mohon isi nama lawan.');
        return;
    }

    try {
        await saveWar({
            date: new Date().toISOString(),
            opponent,
            warSize,
            result,
            clanStars,
            opponentStars,
            clanDestruction: clanDest,
            opponentDestruction: opponentDest,
            addedBy: user?.displayName || 'Admin',
        });
        toast.success('Data war berhasil disimpan!');
        document.getElementById('war-opponent').value = '';
        document.getElementById('war-our-stars').value = '';
        document.getElementById('war-enemy-stars').value = '';
        document.getElementById('war-our-dest').value = '';
        document.getElementById('war-enemy-dest').value = '';
    } catch (e) {
        toast.error('Gagal menyimpan data war.');
        console.error(e);
    }
}

async function submitViolation(user) {
    const memberTag = document.getElementById('viol-member')?.value;
    const type = document.getElementById('viol-type')?.value;
    const desc = document.getElementById('viol-desc')?.value;
    const points = parseInt(document.getElementById('viol-points')?.value) || 0;

    if (!memberTag || !desc) {
        toast.warning('Mohon lengkapi semua field.');
        return;
    }

    const member = members.find(m => m.tag === memberTag);

    try {
        await addViolation({
            memberTag,
            memberName: member?.name || 'Unknown',
            type,
            description: desc,
            pointsDeducted: points,
            adminName: user?.displayName || 'Admin',
        });
        if (points > 0) {
            await addPointEntry({
                memberTag,
                memberName: member?.name || 'Unknown',
                amount: -points,
                reason: `[${type}] ${desc}`,
                category: 'violation',
                adminName: user?.displayName || 'Admin',
            });
        }
        toast.success('Violation berhasil dicatat!');
        document.getElementById('viol-desc').value = '';
        document.getElementById('viol-points').value = '';
    } catch (e) {
        toast.error('Gagal menyimpan violation.');
        console.error(e);
    }
}

async function submitRole(user) {
    const memberTag = document.getElementById('role-member')?.value;
    const newRole = document.getElementById('role-new')?.value;
    const reason = document.getElementById('role-reason')?.value;
    const member = members.find(m => m.tag === memberTag);

    if (!memberTag || !newRole) {
        toast.warning('Mohon pilih member dan role.');
        return;
    }

    try {
        await addPromotion({
            memberTag,
            memberName: member?.name || 'Unknown',
            fromRole: member?.role || 'member',
            toRole: newRole,
            reason: reason || 'Role updated',
            adminName: user?.displayName || 'Admin',
        });
        toast.success(`Role ${member?.name} berhasil diubah ke ${newRole}!`);
        document.getElementById('role-reason').value = '';
    } catch (e) {
        toast.error('Gagal mengubah role.');
        console.error(e);
    }
}

async function loadAdminPointLogs(user) {
    const logsContainer = document.getElementById('admin-point-logs');
    if (!logsContainer) return;
    
    try {
        const logs = await getAllPointHistory();
        if (logs.length === 0) {
            logsContainer.innerHTML = `<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>`;
            return;
        }
        
        logsContainer.innerHTML = logs.map(l => {
            const dateStr = formatDateTime(parseTimestamp(l.date));
            const isPositive = (l.amount || 0) >= 0;
            const badgeClass = isPositive 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30';
                
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
                            ${isPositive ? '+' : ''}${l.amount} Poin
                        </span>
                        <button onclick="window.__deleteLogEntry('${l.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log Poin">
                            🗑️
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    } catch (e) {
        console.error(e);
        logsContainer.innerHTML = `<p class="text-center text-red-400 text-sm py-6">Gagal memuat log poin.</p>`;
    }
}

async function deleteLogEntryHandler(id, user) {
    modal.confirm({
        title: 'Hapus Log Poin',
        message: 'Apakah Anda yakin ingin menghapus log poin ini?',
        onConfirm: async () => {
            try {
                await deletePointEntry(id);
                toast.success('Log poin berhasil dihapus!');
                // Reload logs
                loadAdminPointLogs(user);
            } catch (e) {
                console.error(e);
                toast.error('Gagal menghapus log poin.');
            }
        }
    });
}
