// ============================================================
// StreetLourd — Landing Page Settings Page (Admin)
// ============================================================

import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';
import { getLandingSettings, saveLandingSettings } from '../services/firestore.js';
import { isAdmin } from '../services/auth.js';

let localSettings = {
    heroTitle: '',
    heroDescription: ''
};

export async function renderAdminLanding() {
    const container = document.getElementById('page-content');

    // 1. Check Auth
    if (!isAdmin()) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔒</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses pengaturan landing page.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Home</a>
                </div>
            </div>
        `;
        return;
    }

    // 2. Fetch Settings
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
            <div class="animate-spin text-4xl mb-4">⏳</div>
            <p class="text-gray-400">Memuat konfigurasi landing page...</p>
        </div></div>
    `;

    try {
        localSettings = await getLandingSettings();
    } catch (e) {
        console.error(e);
        toast.error('Gagal mengambil data landing page.');
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
                            ✨ Landing Page Settings
                        </h1>
                        <p class="text-gray-400 text-sm">Kustomisasi teks dan judul pada halaman utama (Hero Section)</p>
                    </div>
                    <div>
                        <button onclick="window.__saveLandingConfig()" class="px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            💾 Simpan Perubahan
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Form Editor -->
                    <div class="lg:col-span-6 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                ✍️ Edit Konten Hero
                            </h2>
                            
                            <div class="space-y-5">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Title (HTML Diperbolehkan)</label>
                                    <textarea id="hero-title-input" rows="4" class="admin-input font-mono text-sm leading-relaxed" 
                                              placeholder="Masukkan judul hero...">${localSettings.heroTitle || ''}</textarea>
                                    <div class="mt-2 text-xs text-gray-500 space-y-1">
                                        <p>💡 Gunakan kelas gradient untuk efek warna premium:</p>
                                        <p class="font-mono text-amber-400">&lt;span class="hero-title-gradient"&gt;Teks Anda&lt;/span&gt;</p>
                                        <p class="font-mono text-yellow-400">&lt;span class="hero-title-gradient-2"&gt;Teks Anda&lt;/span&gt;</p>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Description / Subtitle</label>
                                    <textarea id="hero-desc-input" rows="4" class="admin-input text-sm leading-relaxed" 
                                              placeholder="Masukkan deskripsi hero...">${localSettings.heroDescription || ''}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Live Preview -->
                    <div class="lg:col-span-6 space-y-6">
                        <div class="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6 backdrop-blur-sm relative overflow-hidden flex flex-col justify-center min-h-[350px]">
                            <!-- Glass card accent -->
                            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                            
                            <!-- Preview Badge -->
                            <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 uppercase tracking-wider">
                                Live Preview
                            </div>

                            <div class="text-center relative z-10">

                                <!-- Dynamic Preview Title -->
                                <h1 id="preview-title" class="text-3xl md:text-4xl font-bold mb-4 leading-tight" style="font-family: 'Lilita One', cursive;">
                                    ${localSettings.heroTitle || ''}
                                </h1>

                                <!-- Dynamic Preview Description -->
                                <p id="preview-desc" class="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                                    ${localSettings.heroDescription || ''}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Hook up real-time live preview update
    const titleInput = document.getElementById('hero-title-input');
    const descInput = document.getElementById('hero-desc-input');
    const previewTitle = document.getElementById('preview-title');
    const previewDesc = document.getElementById('preview-desc');

    if (titleInput && previewTitle) {
        titleInput.addEventListener('input', () => {
            previewTitle.innerHTML = titleInput.value || '<span class="text-gray-600">[Judul Kosong]</span>';
        });
    }

    if (descInput && previewDesc) {
        descInput.addEventListener('input', () => {
            previewDesc.textContent = descInput.value || '[Deskripsi Kosong]';
        });
    }

    // Bind save function
    window.__saveLandingConfig = async () => {
        const titleVal = titleInput?.value.trim();
        const descVal = descInput?.value.trim();

        if (!titleVal || !descVal) {
            toast.warning('Teks judul dan deskripsi tidak boleh kosong.');
            return;
        }

        try {
            await saveLandingSettings({
                heroTitle: titleVal,
                heroDescription: descVal
            });
            toast.success('Landing page settings berhasil disimpan!');
        } catch (e) {
            console.error(e);
            toast.error('Gagal menyimpan landing page settings.');
        }
    };
}
