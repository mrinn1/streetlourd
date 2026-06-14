// ============================================================
// StreetLourd — Base Layouts Page
// ============================================================

import { getLayouts } from '../services/firestore.js';
import { skeleton, emptyState } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { toast } from '../components/toast.js';

export async function renderBaseLayouts() {
    const container = document.getElementById('page-content');
    
    // Show skeleton loading
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${skeleton.repeat('statCard', 6)}
                </div>
            </div>
        </div>
    `;

    const layouts = await getLayouts();

    // Render page template
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 animate-on-scroll">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            🗺️ Base Layouts
                        </h1>
                        <p class="text-gray-400">Daftar layout base klan terverifikasi. Klik untuk menyalin langsung ke dalam game.</p>
                    </div>
                    <div class="flex items-center gap-3 w-full md:w-auto">
                        <input type="text" id="layout-search" placeholder="Cari base..." 
                               class="admin-input py-2.5 px-4 text-sm w-full md:w-64 bg-white/5 border border-white/10 rounded-xl"
                               oninput="window.__filterLayouts()">
                    </div>
                </div>

                <!-- Town Hall Filters -->
                <div class="flex flex-wrap gap-2 mb-8 animate-on-scroll" id="th-filters-container">
                    <!-- Dynamic TH buttons -->
                </div>

                <!-- Base Layouts Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-on-scroll" id="layouts-grid" data-stagger="true">
                    <!-- Dynamic base cards -->
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Initialize state
    let selectedTH = 'all';
    window.__filterLayouts = () => {
        const query = document.getElementById('layout-search')?.value.toLowerCase() || '';
        const grid = document.getElementById('layouts-grid');
        if (!grid) return;

        const filtered = layouts.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(query);
            const matchesTH = selectedTH === 'all' || parseInt(item.townHallLevel) === parseInt(selectedTH);
            return matchesSearch && matchesTH;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full py-16">
                    ${emptyState('🗺️', 'Layout Tidak Ditemukan', 'Cobalah mengubah filter atau pencarian Anda.')}
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(item => {
            const thColors = {
                15: 'from-blue-500 to-indigo-600',
                16: 'from-purple-500 to-indigo-700',
                17: 'from-amber-500 to-yellow-600'
            };
            const badgeBg = thColors[item.townHallLevel] || 'from-gray-600 to-gray-700';

            return `
                <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden 
                            hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:scale-[1.02] flex flex-col">
                    <!-- Preview Image -->
                    <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-800 shrink-0">
                        <img src="${item.imageUrl || 'assets/images/base-placeholder.png'}" 
                             alt="${item.title}" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600'">
                        <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${badgeBg} shadow-md">
                            TH ${item.townHallLevel}
                        </span>
                    </div>

                    <!-- Details -->
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div class="mb-5">
                            <h3 class="text-white font-bold text-lg leading-snug line-clamp-2">${item.title}</h3>
                            <p class="text-xs text-gray-500 mt-1.5">Diposting: ${new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>

                        <!-- CTA Actions -->
                        <div class="flex gap-2">
                            <a href="${item.link}" target="_blank" 
                               class="flex-1 py-3 px-4 rounded-xl text-center text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10">
                                ⚔️ Copy Base
                            </a>
                            <button onclick="window.__shareLayout('${item.link}')" 
                                    class="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors" 
                                    title="Salin Link">
                                🔗
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    window.__shareLayout = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            toast.success('Link layout base berhasil disalin ke clipboard!');
        }).catch(err => {
            toast.error('Gagal menyalin link.');
        });
    };

    window.__setTHFilter = (th) => {
        selectedTH = th;
        
        // Update active class on buttons
        const buttons = document.querySelectorAll('.th-filter-btn');
        buttons.forEach(btn => {
            if (btn.dataset.th === th) {
                btn.className = 'th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-black bg-amber-500 transition-all shadow-md';
            } else {
                btn.className = 'th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all';
            }
        });

        window.__filterLayouts();
    };

    // Render TH buttons based on unique TH levels in layouts
    const thLevels = Array.from(new Set(layouts.map(l => parseInt(l.townHallLevel)))).sort((a, b) => b - a);
    const filterContainer = document.getElementById('th-filters-container');
    if (filterContainer) {
        filterContainer.innerHTML = `
            <button onclick="window.__setTHFilter('all')" data-th="all"
                    class="th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-black bg-amber-500 transition-all shadow-md">
                Semua TH
            </button>
            ` + thLevels.map(th => `
                <button onclick="window.__setTHFilter('${th}')" data-th="${th}"
                        class="th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    TH ${th}
                </button>
            `).join('');
    }

    // Run initial filter
    window.__filterLayouts();
}
