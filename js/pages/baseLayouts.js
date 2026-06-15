// ============================================================
// StreetLourd — Base Layouts Page (Public)
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

                <!-- Category Tabs (Home Village, Builder Base, Clan Capital) -->
                <div class="flex border-b border-white/10 mb-8 animate-on-scroll">
                    <button onclick="window.__setCategoryFilter('home')" id="tab-cat-home"
                            class="px-6 py-3.5 text-sm font-bold border-b-2 border-amber-500 text-amber-400 transition-all flex items-center gap-2">
                        🏠 Desa Asal
                    </button>
                    <button onclick="window.__setCategoryFilter('builder')" id="tab-cat-builder"
                            class="px-6 py-3.5 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-white transition-all flex items-center gap-2">
                        🛠️ Desa Tukang
                    </button>
                    <button onclick="window.__setCategoryFilter('capital')" id="tab-cat-capital"
                            class="px-6 py-3.5 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-white transition-all flex items-center gap-2">
                        🏰 Clan Capital
                    </button>
                </div>

                <!-- Filters Subgrid -->
                <div class="space-y-6 mb-8 animate-on-scroll bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                    <!-- Clan Capital Districts (Only if capital is active) -->
                    <div id="district-filter-container" class="hidden">
                        <label class="block text-xs text-gray-500 mb-2 font-medium">Filter Distrik:</label>
                        <div class="flex flex-wrap gap-2 max-h-[140px] overflow-y-auto pr-2 custom-scrollbar">
                            <button onclick="window.__setDistrictFilter('all')" id="btn-dist-all"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all">
                                Semua Distrik
                            </button>
                            <button onclick="window.__setDistrictFilter('capital_peak')" id="btn-dist-capital_peak"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Puncak Ibu Kota
                            </button>
                            <button onclick="window.__setDistrictFilter('barbarian_camp')" id="btn-dist-barbarian_camp"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Perkemahan Barbar
                            </button>
                            <button onclick="window.__setDistrictFilter('wizard_valley')" id="btn-dist-wizard_valley"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Lembah Penyihir
                            </button>
                            <button onclick="window.__setDistrictFilter('balloon_lagoon')" id="btn-dist-balloon_lagoon"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Laguna Balon
                            </button>
                            <button onclick="window.__setDistrictFilter('builders_workshop')" id="btn-dist-builders_workshop"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Bengkel Tukang
                            </button>
                            <button onclick="window.__setDistrictFilter('dragon_cliffs')" id="btn-dist-dragon_cliffs"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Tebing Naga
                            </button>
                            <button onclick="window.__setDistrictFilter('golem_quarry')" id="btn-dist-golem_quarry"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Tambang Golem
                            </button>
                            <button onclick="window.__setDistrictFilter('skeleton_park')" id="btn-dist-skeleton_park"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Taman Rangka
                            </button>
                            <button onclick="window.__setDistrictFilter('goblin_mines')" id="btn-dist-goblin_mines"
                                    class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                Tambang Goblin
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Level Filters -->
                        <div>
                            <label class="block text-xs text-gray-500 mb-2 font-medium">Filter Level:</label>
                            <div class="flex flex-wrap gap-2" id="level-filters-container">
                                <!-- Populated dynamically -->
                            </div>
                        </div>
                        <!-- Type Filters (Only for home village) -->
                        <div id="type-filter-container">
                            <label class="block text-xs text-gray-500 mb-2 font-medium">Filter Tipe:</label>
                            <div class="flex flex-wrap gap-2">
                                <button onclick="window.__setTypeFilter('all')" id="btn-type-all"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all">
                                    Semua Tipe
                                </button>
                                <button onclick="window.__setTypeFilter('war')" id="btn-type-war"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    War Base
                                </button>
                                <button onclick="window.__setTypeFilter('farming')" id="btn-type-farming"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Farming / Trophy
                                </button>
                                <button onclick="window.__setTypeFilter('hybrid')" id="btn-type-hybrid"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Hybrid Base
                                </button>
                                <button onclick="window.__setTypeFilter('defense')" id="btn-type-defense"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Defense Base
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Base Layouts Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-on-scroll" id="layouts-grid" data-stagger="true">
                    <!-- Dynamic base cards -->
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Filter states
    let selectedCategory = 'home';
    let selectedDistrict = 'all';
    let selectedLevel = 'all';
    let selectedType = 'all';

    window.__filterLayouts = () => {
        const query = document.getElementById('layout-search')?.value.toLowerCase() || '';
        const grid = document.getElementById('layouts-grid');
        if (!grid) return;

        const filtered = layouts.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(query);
            const matchesCategory = (item.category || 'home') === selectedCategory;
            const matchesLevel = selectedLevel === 'all' || parseInt(item.townHallLevel) === parseInt(selectedLevel);
            
            let matchesType = true;
            if (selectedCategory === 'home') {
                matchesType = selectedType === 'all' || (item.type || 'war') === selectedType;
            }

            let matchesDistrict = true;
            if (selectedCategory === 'capital') {
                matchesDistrict = selectedDistrict === 'all' || (item.district || 'capital_peak') === selectedDistrict;
            }

            return matchesSearch && matchesCategory && matchesLevel && matchesType && matchesDistrict;
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
            const levelPrefix = item.category === 'builder' ? 'BH' : (item.category === 'capital' ? (item.district === 'capital_peak' ? 'CH' : 'Lvl') : 'TH');
            const thColors = {
                15: 'from-blue-500 to-indigo-600',
                16: 'from-purple-500 to-indigo-700',
                17: 'from-amber-500 to-yellow-600',
                18: 'from-red-500 to-rose-600'
            };
            const badgeBg = thColors[item.townHallLevel] || 'from-gray-600 to-gray-700';
            
            const typeLabels = { 
                war: '⚔️ War Base', 
                farming: '🚜 Farming', 
                hybrid: '🧬 Hybrid', 
                defense: '🛡️ Defense' 
            };
            
            const districtLabels = {
                capital_peak: 'Puncak Ibu Kota',
                barbarian_camp: 'Perkemahan Barbar',
                wizard_valley: 'Lembah Penyihir',
                balloon_lagoon: 'Laguna Balon',
                builders_workshop: 'Bengkel Tukang',
                dragon_cliffs: 'Tebing Naga',
                golem_quarry: 'Tambang Golem',
                skeleton_park: 'Taman Rangka',
                goblin_mines: 'Tambang Goblin'
            };

            let typeBadge = '';
            if (item.category === 'home') {
                typeBadge = `
                    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm shadow-md">
                        ${typeLabels[item.type || 'war'] || 'War Base'}
                    </span>
                `;
            } else if (item.category === 'capital') {
                const distName = districtLabels[item.district || 'capital_peak'] || 'Ibu Kota';
                typeBadge = `
                    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-sky-400 bg-black/60 backdrop-blur-sm shadow-md border border-sky-500/20">
                        ${distName}
                    </span>
                `;
            }

            const ratingStars = '⭐'.repeat(item.rating || 5);

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
                            ${levelPrefix} ${item.townHallLevel}
                        </span>
                        ${typeBadge}
                    </div>

                    <!-- Details -->
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div class="mb-5">
                            <div class="flex items-center justify-between gap-2 mb-2">
                                <span class="text-xs text-yellow-500 font-bold">${ratingStars}</span>
                            </div>
                            <h3 class="text-white font-bold text-lg leading-snug line-clamp-2">${item.title}</h3>
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

    window.__setCategoryFilter = (cat) => {
        selectedCategory = cat;
        selectedLevel = 'all';
        selectedDistrict = 'all';
        selectedType = 'all';

        // Update category tabs active classes
        const tabs = ['home', 'builder', 'capital'];
        tabs.forEach(t => {
            const btn = document.getElementById(`tab-cat-${t}`);
            if (btn) {
                if (t === cat) {
                    btn.className = 'px-6 py-3.5 text-sm font-bold border-b-2 border-amber-500 text-amber-400 transition-all flex items-center gap-2';
                } else {
                    btn.className = 'px-6 py-3.5 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-white transition-all flex items-center gap-2';
                }
            }
        });

        // Hide/Show Filter containers based on category
        const typeFilterContainer = document.getElementById('type-filter-container');
        const districtFilterContainer = document.getElementById('district-filter-container');

        if (cat === 'home') {
            typeFilterContainer?.classList.remove('hidden');
            districtFilterContainer?.classList.add('hidden');
        } else if (cat === 'builder') {
            typeFilterContainer?.classList.add('hidden');
            districtFilterContainer?.classList.add('hidden');
        } else if (cat === 'capital') {
            typeFilterContainer?.classList.add('hidden');
            districtFilterContainer?.classList.remove('hidden');
        }

        // Reset type buttons
        window.__setTypeFilter('all');
        // Reset district buttons
        window.__setDistrictFilter('all');

        // Update level buttons filter list
        updateLevelFilters();

        // Run filter
        window.__filterLayouts();
    };

    window.__setLevelFilter = (lvl) => {
        selectedLevel = lvl;

        // Update active class on buttons
        const buttons = document.querySelectorAll('.lvl-filter-btn');
        buttons.forEach(btn => {
            if (btn.dataset.lvl === String(lvl)) {
                btn.className = 'lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md';
            } else {
                btn.className = 'lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all';
            }
        });

        window.__filterLayouts();
    };

    window.__setTypeFilter = (type) => {
        selectedType = type;

        // Update active class on buttons
        const types = ['all', 'war', 'farming', 'hybrid', 'defense'];
        types.forEach(t => {
            const btn = document.getElementById(`btn-type-${t}`);
            if (btn) {
                if (t === type) {
                    btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md';
                } else {
                    btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all';
                }
            }
        });

        window.__filterLayouts();
    };

    window.__setDistrictFilter = (dist) => {
        selectedDistrict = dist;
        selectedLevel = 'all';

        // Update active class on buttons
        const districts = ['all', 'capital_peak', 'barbarian_camp', 'wizard_valley', 'balloon_lagoon', 'builders_workshop', 'dragon_cliffs', 'golem_quarry', 'skeleton_park', 'goblin_mines'];
        districts.forEach(d => {
            const btn = document.getElementById(`btn-dist-${d}`);
            if (btn) {
                if (d === dist) {
                    btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md';
                } else {
                    btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all';
                }
            }
        });

        // Update levels list depending on selected district
        updateLevelFilters();

        window.__filterLayouts();
    };

    function updateLevelFilters() {
        const filterContainer = document.getElementById('level-filters-container');
        if (!filterContainer) return;

        // Find levels that exist in current layouts for this category/district
        const currentCategoryLayouts = layouts.filter(l => {
            const matchesCat = (l.category || 'home') === selectedCategory;
            let matchesDist = true;
            if (selectedCategory === 'capital') {
                matchesDist = selectedDistrict === 'all' || (l.district || 'capital_peak') === selectedDistrict;
            }
            return matchesCat && matchesDist;
        });
        
        const levels = Array.from(new Set(currentCategoryLayouts.map(l => parseInt(l.townHallLevel)))).sort((a, b) => b - a);
        const levelPrefix = selectedCategory === 'builder' 
            ? 'BH' 
            : (selectedCategory === 'capital' 
                ? (selectedDistrict === 'capital_peak' ? 'CH' : (selectedDistrict === 'all' ? 'Lvl/CH' : 'Lvl')) 
                : 'TH');

        let levelButtons = `
            <button onclick="window.__setLevelFilter('all')" data-lvl="all"
                    class="lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md">
                Semua
            </button>
        `;

        levelButtons += levels.map(lvl => `
            <button onclick="window.__setLevelFilter('${lvl}')" data-lvl="${lvl}"
                    class="lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                ${levelPrefix} ${lvl}
            </button>
        `).join('');

        filterContainer.innerHTML = levelButtons;
    }

    // Initialize layout list & filters
    updateLevelFilters();
    window.__filterLayouts();
}
