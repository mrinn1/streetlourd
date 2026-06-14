// ============================================================
// StreetLourd — Admin Base Layouts Management Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { modal } from '../components/modal.js';
import { getLayouts, addLayout, deleteLayout } from '../services/firestore.js';
import { isAdmin, getCurrentUser } from '../services/auth.js';

let layouts = [];

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
                        <p class="text-gray-400 text-sm">Tambah, hapus, dan kelola database layout base klan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Add New Layout Form -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                ➕ Tambah Base Baru
                            </h2>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Judul Base / Deskripsi</label>
                                    <input type="text" id="layout-form-title" class="admin-input" placeholder="Contoh: TH16 War Base Anti 3-Star">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Level Town Hall</label>
                                    <select id="layout-form-th" class="admin-select">
                                        ${Array.from({ length: 17 }, (_, i) => 17 - i).map(th => `
                                            <option value="${th}">Town Hall ${th}</option>
                                        `).join('')}
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tautan Salin Base (Copy Link)</label>
                                    <input type="url" id="layout-form-link" class="admin-input" placeholder="https://link.clashofclans.com/en?action=OpenLayout&id=...">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tautan Gambar Preview (Image URL)</label>
                                    <input type="url" id="layout-form-image" class="admin-input" placeholder="https://... atau upload di postimg/discord">
                                </div>
                                <button onclick="window.__submitNewLayout()" class="w-full py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20">
                                    Simpan Layout Base
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Current Layouts List -->
                    <div class="lg:col-span-7 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                📜 Daftar Base Aktif
                            </h2>
                            <div id="admin-layouts-list" class="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
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
    window.__submitNewLayout = () => submitNewLayoutHandler(user, container);
    window.__deleteLayout = (id) => deleteLayoutHandler(id, user, container);

    // Initial load of layouts list
    updateAdminLayoutsList();
}

function updateAdminLayoutsList() {
    const listContainer = document.getElementById('admin-layouts-list');
    if (!listContainer) return;

    if (layouts.length === 0) {
        listContainer.innerHTML = `<p class="text-center text-gray-500 text-sm py-8">Belum ada layout base klan.</p>`;
        return;
    }

    listContainer.innerHTML = layouts.map(item => `
        <div class="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
            <img src="${item.imageUrl}" alt="" class="w-14 h-14 rounded-lg object-cover bg-slate-800 shrink-0"
                 onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'">
            <div class="flex-1 min-w-0">
                <p class="text-white font-medium text-sm truncate">${item.title}</p>
                <div class="flex items-center gap-2 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-blue-500">TH ${item.townHallLevel}</span>
                    <span class="text-[10px] text-gray-500">Oleh Admin</span>
                </div>
            </div>
            <div class="flex gap-2 shrink-0">
                <a href="${item.link}" target="_blank" class="p-2 text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors" title="Uji Coba Link">
                    👁️
                </a>
                <button onclick="window.__deleteLayout('${item.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors" title="Hapus Base">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');
}

async function submitNewLayoutHandler(user, container) {
    const title = document.getElementById('layout-form-title')?.value.trim();
    const thLevel = parseInt(document.getElementById('layout-form-th')?.value);
    const link = document.getElementById('layout-form-link')?.value.trim();
    const imageUrl = document.getElementById('layout-form-image')?.value.trim();

    if (!title || !link || !imageUrl) {
        toast.warning('Mohon isi seluruh kolom input.');
        return;
    }

    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        toast.warning('Tautan Salin Base harus berupa URL valid.');
        return;
    }

    try {
        await addLayout({
            title,
            townHallLevel: thLevel,
            link,
            imageUrl,
            addedBy: user?.displayName || 'Admin'
        });
        toast.success('Layout base berhasil ditambahkan!');
        
        // Reload data and redraw
        layouts = await getLayouts();
        document.getElementById('layout-form-title').value = '';
        document.getElementById('layout-form-link').value = '';
        document.getElementById('layout-form-image').value = '';
        updateAdminLayoutsList();
    } catch (e) {
        console.error(e);
        toast.error('Gagal menambahkan layout.');
    }
}

async function deleteLayoutHandler(id, user, container) {
    modal.confirm({
        title: 'Hapus Layout Base',
        message: 'Apakah Anda yakin ingin menghapus layout base ini dari daftar?',
        onConfirm: async () => {
            try {
                await deleteLayout(id);
                toast.success('Layout base berhasil dihapus!');
                
                // Reload data and redraw
                layouts = await getLayouts();
                updateAdminLayoutsList();
            } catch (e) {
                console.error(e);
                toast.error('Gagal menghapus layout.');
            }
        }
    });
}
