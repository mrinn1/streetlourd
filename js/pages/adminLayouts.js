// ============================================================
// StreetLourd — Admin Base Layouts Management Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { modal } from '../components/modal.js';
import { getLayouts, addLayout, updateLayout, deleteLayout } from '../services/firestore.js';
import { isAdmin, getCurrentUser } from '../services/auth.js';

let layouts = [];
let editingLayoutId = null; // Track layout ID currently being edited

export async function renderAdminLayouts() {
    const container = document.getElementById('page-content');

    // 1. Check Auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengelola base layout klan.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Home</a>
                </div>
            </div>
        `;
        return;
    }

    // 2. Fetch Data
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
            <div class="animate-spin text-4xl mb-4">⏳</div>
            <p class="text-gray-400">Memuat data base klan...</p>
        </div></div>
    `;

    try {
        layouts = await getLayouts();
    } catch (e) {
        console.error(e);
        toast.error('Gagal memuat layouts.');
    }

    editingLayoutId = null;
    renderManager(container);
}

function renderManager(container) {
    const user = getCurrentUser();

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
                            🗺️ Kelola Base Layouts
                        </h1>
                        <p class="text-gray-400 text-sm">Tambah, edit, hapus, dan kelola database layout base klan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Add/Edit Layout Form -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 backdrop-blur-sm sticky top-24">
                            <h2 id="form-title" class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                ➕ Tambah Base Baru
                            </h2>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Kategori Base</label>
                                    <select id="layout-form-category" class="admin-select" onchange="window.__updateLevelOptions()">
                                        <option value="home">Home Village (Desa Asal)</option>
                                        <option value="builder">Builder Base (Desa Tukang)</option>
                                        <option value="capital">Clan Capital</option>
                                    </select>
                                </div>
                                <div>
                                    <label id="level-label" class="block text-xs text-gray-400 mb-1.5 font-medium">Level Town Hall</label>
                                    <select id="layout-form-th" class="admin-select">
                                        <!-- Levels populated dynamically -->
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tipe Base</label>
                                    <select id="layout-form-type" class="admin-select">
                                        <option value="war">War Base</option>
                                        <option value="farming">Farming / Trophy</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Statistik Rating</label>
                                    <select id="layout-form-rating" class="admin-select">
                                        <option value="5">⭐⭐⭐⭐⭐ (5 Bintang)</option>
                                        <option value="4">⭐⭐⭐⭐ (4 Bintang)</option>
                                        <option value="3">⭐⭐⭐ (3 Bintang)</option>
                                        <option value="2">⭐⭐ (2 Bintang)</option>
                                        <option value="1">⭐ (1 Bintang)</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Judul Base / Deskripsi</label>
                                    <input type="text" id="layout-form-title" class="admin-input" placeholder="Contoh: TH18 War Base Anti 3-Star">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tautan Salin Base (Copy Link)</label>
                                    <input type="url" id="layout-form-link" class="admin-input" placeholder="https://link.clashofclans.com/en?action=OpenLayout&id=...">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tautan Gambar Preview (Image URL)</label>
                                    <input type="url" id="layout-form-image" class="admin-input" placeholder="https://... atau upload di postimg/discord">
                                </div>
                                <div class="flex gap-3">
                                    <button onclick="window.__submitLayoutForm()" id="submit-btn" class="flex-1 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20">
                                        Simpan Layout Base
                                    </button>
                                    <button onclick="window.__cancelEdit()" id="cancel-btn" class="hidden px-4 py-3 rounded-xl text-sm font-bold text-gray-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Current Layouts List -->
                    <div class="lg:col-span-7 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                📜 Daftar Base Aktif
                            </h2>
                            <div id="admin-layouts-list" class="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                <!-- Rendered dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Bind event handlers
    window.__updateLevelOptions = updateLevelOptions;
    window.__submitLayoutForm = () => submitLayoutFormHandler(user);
    window.__deleteLayout = (id) => deleteLayoutHandler(id);
    window.__editLayout = (id) => editLayoutHandler(id);
    window.__cancelEdit = cancelEditHandler;

    // Populate level options initial load
    updateLevelOptions();
    // Render current active bases
    updateAdminLayoutsList();
}

function updateLevelOptions() {
    const category = document.getElementById('layout-form-category')?.value || 'home';
    const thSelect = document.getElementById('layout-form-th');
    const label = document.getElementById('level-label');

    if (!thSelect || !label) return;

    let options = '';
    if (category === 'home') {
        label.textContent = 'Level Town Hall (TH)';
        options = Array.from({ length: 18 }, (_, i) => 18 - i).map(th => `
            <option value="${th}">Town Hall ${th}</option>
        `).join('');
    } else if (category === 'builder') {
        label.textContent = 'Level Builder Hall (BH)';
        options = Array.from({ length: 11 }, (_, i) => 11 - i).map(bh => `
            <option value="${bh}">Builder Hall ${bh}</option>
        `).join('');
    } else if (category === 'capital') {
        label.textContent = 'Level Capital Hall (CH)';
        options = Array.from({ length: 10 }, (_, i) => 10 - i).map(ch => `
            <option value="${ch}">Capital Hall ${ch}</option>
        `).join('');
    }

    thSelect.innerHTML = options;
}

function updateAdminLayoutsList() {
    const listContainer = document.getElementById('admin-layouts-list');
    if (!listContainer) return;

    if (layouts.length === 0) {
        listContainer.innerHTML = `<p class="text-center text-gray-500 text-sm py-8">Belum ada layout base klan.</p>`;
        return;
    }

    const categoryLabels = { home: 'Desa Asal', builder: 'Desa Tukang', capital: 'Capital' };
    const typeLabels = { war: 'War', farming: 'Farming' };
    const categoryColors = { home: 'bg-emerald-500/20 text-emerald-400', builder: 'bg-orange-500/20 text-orange-400', capital: 'bg-sky-500/20 text-sky-400' };

    listContainer.innerHTML = layouts.map(item => {
        const ratingStars = '⭐'.repeat(item.rating || 5);
        const catLabel = categoryLabels[item.category || 'home'];
        const typeLabel = typeLabels[item.type || 'war'];
        const levelPrefix = item.category === 'builder' ? 'BH' : (item.category === 'capital' ? 'CH' : 'TH');

        return `
            <div class="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                <img src="${item.imageUrl}" alt="" class="w-16 h-16 rounded-lg object-cover bg-slate-800 shrink-0"
                     onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'">
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">${item.title}</p>
                    <div class="flex flex-wrap items-center gap-2 mt-1.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${categoryColors[item.category || 'home']}">${catLabel}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-blue-500">${levelPrefix} ${item.townHallLevel}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold text-gray-300 bg-white/10">${typeLabel}</span>
                        <span class="text-[10px] text-yellow-500">${ratingStars}</span>
                    </div>
                </div>
                <div class="flex gap-1 shrink-0">
                    <button onclick="window.__editLayout('${item.id}')" class="p-2 text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors" title="Edit Base">
                        ✏️
                    </button>
                    <a href="${item.link}" target="_blank" class="p-2 text-sky-400 hover:text-sky-300 hover:bg-white/5 rounded-lg transition-colors" title="Uji Coba Link">
                        👁️
                    </a>
                    <button onclick="window.__deleteLayout('${item.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors" title="Hapus Base">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function editLayoutHandler(id) {
    const layout = layouts.find(l => l.id === id);
    if (!layout) return;

    editingLayoutId = id;

    // Change form UI to Edit mode
    document.getElementById('form-title').innerHTML = `✏️ Edit Base: ${layout.title}`;
    document.getElementById('submit-btn').innerHTML = 'Update Layout Base';
    document.getElementById('cancel-btn').classList.remove('hidden');

    // Populate inputs
    document.getElementById('layout-form-category').value = layout.category || 'home';
    updateLevelOptions(); // update TH/BH/CH levels based on category
    document.getElementById('layout-form-th').value = layout.townHallLevel;
    document.getElementById('layout-form-type').value = layout.type || 'war';
    document.getElementById('layout-form-rating').value = layout.rating || '5';
    document.getElementById('layout-form-title').value = layout.title || '';
    document.getElementById('layout-form-link').value = layout.link || '';
    document.getElementById('layout-form-image').value = layout.imageUrl || '';

    // Scroll form into view nicely
    document.getElementById('form-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelEditHandler() {
    editingLayoutId = null;

    // Reset UI
    document.getElementById('form-title').innerHTML = '➕ Tambah Base Baru';
    document.getElementById('submit-btn').innerHTML = 'Simpan Layout Base';
    document.getElementById('cancel-btn').classList.add('hidden');

    // Clear inputs
    document.getElementById('layout-form-title').value = '';
    document.getElementById('layout-form-link').value = '';
    document.getElementById('layout-form-image').value = '';
    document.getElementById('layout-form-category').value = 'home';
    updateLevelOptions();
}

async function submitLayoutFormHandler(user) {
    const category = document.getElementById('layout-form-category').value;
    const thLevel = parseInt(document.getElementById('layout-form-th').value);
    const type = document.getElementById('layout-form-type').value;
    const rating = parseInt(document.getElementById('layout-form-rating').value);
    const title = document.getElementById('layout-form-title').value.trim();
    const link = document.getElementById('layout-form-link').value.trim();
    const imageUrl = document.getElementById('layout-form-image').value.trim();

    if (!title || !link || !imageUrl) {
        toast.warning('Mohon isi seluruh kolom input.');
        return;
    }

    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        toast.warning('Tautan Salin Base harus berupa URL valid.');
        return;
    }

    const payload = {
        title,
        townHallLevel: thLevel,
        category,
        type,
        rating,
        link,
        imageUrl,
        lastUpdatedBy: user?.displayName || 'Admin'
    };

    try {
        if (editingLayoutId) {
            // Edit Mode
            await updateLayout(editingLayoutId, payload);
            toast.success('Layout base berhasil diperbarui!');
            cancelEditHandler();
        } else {
            // Add Mode
            await addLayout({
                ...payload,
                addedBy: user?.displayName || 'Admin'
            });
            toast.success('Layout base baru berhasil disimpan!');
            
            // Clear inputs
            document.getElementById('layout-form-title').value = '';
            document.getElementById('layout-form-link').value = '';
            document.getElementById('layout-form-image').value = '';
        }
        
        // Reload layouts
        layouts = await getLayouts();
        updateAdminLayoutsList();
    } catch (e) {
        console.error(e);
        toast.error('Gagal memproses layout.');
    }
}

async function deleteLayoutHandler(id) {
    modal.confirm({
        title: 'Hapus Layout Base',
        message: 'Apakah Anda yakin ingin menghapus layout base ini dari daftar?',
        onConfirm: async () => {
            try {
                await deleteLayout(id);
                toast.success('Layout base berhasil dihapus!');
                
                // If the deleted layout was being edited, cancel edit
                if (editingLayoutId === id) {
                    cancelEditHandler();
                }

                // Reload layouts and redraw
                layouts = await getLayouts();
                updateAdminLayoutsList();
            } catch (e) {
                console.error(e);
                toast.error('Gagal menghapus layout.');
            }
        }
    });
}
