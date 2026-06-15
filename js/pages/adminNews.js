// ============================================================
// StreetLourd — Admin Supercell News Management Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { getNews, addNews, updateNews, deleteNews } from '../services/firestore.js';
import { isAdmin, getCurrentUser } from '../services/auth.js';

let newsList = [];
let editingNewsId = null;

export async function renderAdminNews() {
    const container = document.getElementById('page-content');

    // 1. Check Auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengelola berita klan.</p>
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
             <p class="text-gray-400">Memuat data berita...</p>
         </div></div>
    `;

    try {
        newsList = await getNews();
    } catch (e) {
        console.error(e);
        toast.error('Gagal memuat berita.');
    }

    editingNewsId = null;
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
                            📰 Kelola Berita Supercell
                        </h1>
                        <p class="text-gray-400 text-sm">Tambah, edit, dan hapus Berita terbaru dari Supercell Resmi</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Add/Edit News Form -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 backdrop-blur-sm sticky top-24">
                            <h2 id="form-title" class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                ➕ Tambah Berita Baru
                            </h2>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Judul Berita</label>
                                    <input type="text" id="news-form-title" class="admin-input" placeholder="Contoh: TH18 Update Rilis Hari Ini!">
                                </div>
                                
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Deskripsi Singkat</label>
                                    <textarea id="news-form-desc" rows="4" class="admin-textarea w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50" placeholder="Jelaskan isi berita secara singkat..."></textarea>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Link Gambar / Banner</label>
                                    <input type="url" id="news-form-image" class="admin-input" placeholder="https://... atau postimg/discord url">
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Link Video (YouTube/Lainnya) <span class="text-gray-500">(Opsional)</span></label>
                                    <input type="url" id="news-form-video" class="admin-input" placeholder="https://www.youtube.com/watch?v=...">
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Link Artikel Resmi Supercell <span class="text-gray-500">(Opsional)</span></label>
                                    <input type="url" id="news-form-link" class="admin-input" placeholder="https://supercell.com/en/news/...">
                                </div>

                                <div class="flex gap-3 pt-2">
                                    <button id="cancel-btn" onclick="window.__cancelEditNews()" type="button" class="hidden flex-1 px-4 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all text-sm">
                                        Batal
                                    </button>
                                    <button id="submit-btn" onclick="window.__submitNewsForm()" type="button" class="flex-2 flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-bold transition-all text-sm shadow-lg shadow-amber-500/20">
                                        Simpan Berita
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: News List -->
                    <div class="lg:col-span-7 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                📜 Daftar Berita Saat Ini
                            </h2>
                            
                            <div id="admin-news-list" class="space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
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
    window.__submitNewsForm = () => submitNewsFormHandler();
    window.__deleteNews = (id) => deleteNewsHandler(id);
    window.__editNews = (id) => editNewsHandler(id);
    window.__cancelEditNews = cancelEditNewsHandler;

    // Render list initial
    updateAdminNewsList();
}

function updateAdminNewsList() {
    const listContainer = document.getElementById('admin-news-list');
    if (!listContainer) return;

    if (newsList.length === 0) {
        listContainer.innerHTML = `<p class="text-center text-gray-500 text-sm py-8">Belum ada berita Supercell yang ditambahkan.</p>`;
        return;
    }

    listContainer.innerHTML = newsList.map(item => {
        const hasVideo = item.videoUrl ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold text-red-400 bg-red-500/10">🎬 Video</span>' : '';
        const hasLink = item.externalLink ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold text-blue-400 bg-blue-500/10">🔗 Article</span>' : '';

        return `
            <div class="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                <img src="${item.imageUrl}" alt="" class="w-20 h-20 rounded-lg object-cover bg-slate-800 shrink-0"
                     onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'">
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">${item.title}</p>
                    <p class="text-gray-400 text-xs mt-1 line-clamp-2">${item.description || ''}</p>
                    <div class="flex flex-wrap items-center gap-2 mt-2">
                        ${hasVideo}
                        ${hasLink}
                    </div>
                </div>
                <div class="flex gap-1 shrink-0 self-center">
                    <button onclick="window.__editNews('${item.id}')" class="p-2 text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors" title="Edit Berita">
                        ✏️
                    </button>
                    <button onclick="window.__deleteNews('${item.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors" title="Hapus Berita">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function editNewsHandler(id) {
    const newsItem = newsList.find(n => n.id === id);
    if (!newsItem) return;

    editingNewsId = id;

    // Change form UI to Edit mode
    document.getElementById('form-title').innerHTML = `✏️ Edit Berita`;
    document.getElementById('submit-btn').innerHTML = 'Update Berita';
    document.getElementById('cancel-btn').classList.remove('hidden');

    // Populate inputs
    document.getElementById('news-form-title').value = newsItem.title || '';
    document.getElementById('news-form-desc').value = newsItem.description || '';
    document.getElementById('news-form-image').value = newsItem.imageUrl || '';
    document.getElementById('news-form-video').value = newsItem.videoUrl || '';
    document.getElementById('news-form-link').value = newsItem.externalLink || '';

    // Scroll form into view
    document.getElementById('form-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelEditNewsHandler() {
    editingNewsId = null;

    // Reset UI
    document.getElementById('form-title').innerHTML = '➕ Tambah Berita Baru';
    document.getElementById('submit-btn').innerHTML = 'Simpan Berita';
    document.getElementById('cancel-btn').classList.add('hidden');

    // Clear inputs
    document.getElementById('news-form-title').value = '';
    document.getElementById('news-form-desc').value = '';
    document.getElementById('news-form-image').value = '';
    document.getElementById('news-form-video').value = '';
    document.getElementById('news-form-link').value = '';
}

async function submitNewsFormHandler() {
    const title = document.getElementById('news-form-title')?.value.trim();
    const description = document.getElementById('news-form-desc')?.value.trim();
    const imageUrl = document.getElementById('news-form-image')?.value.trim();
    const videoUrl = document.getElementById('news-form-video')?.value.trim();
    const externalLink = document.getElementById('news-form-link')?.value.trim();

    if (!title || !description || !imageUrl) {
        toast.warning('Mohon lengkapi Judul, Deskripsi, dan Link Gambar.');
        return;
    }

    const payload = {
        title,
        description,
        imageUrl,
        videoUrl,
        externalLink
    };

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Menyimpan...';

    try {
        if (editingNewsId) {
            await updateNews(editingNewsId, payload);
            toast.success('Berita berhasil diperbarui!');
        } else {
            await addNews(payload);
            toast.success('Berita baru berhasil ditambahkan!');
        }

        // Reload data
        newsList = await getNews();
        cancelEditNewsHandler();
        updateAdminNewsList();
    } catch (e) {
        console.error(e);
        toast.error('Gagal menyimpan berita.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = editingNewsId ? 'Update Berita' : 'Simpan Berita';
    }
}

async function deleteNewsHandler(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus berita ini?')) return;

    try {
        await deleteNews(id);
        toast.success('Berita berhasil dihapus!');
        
        // Reload data
        newsList = await getNews();
        updateAdminNewsList();
    } catch (e) {
        console.error(e);
        toast.error('Gagal menghapus berita.');
    }
}
