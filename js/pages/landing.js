// ============================================================
// StreetLourd — Landing Page
// ============================================================

import { renderFooter } from '../components/footer.js';
import { rankCard } from '../components/card.js';
import { getMembers, getLandingSettings, getSettings, getNews } from '../services/firestore.js';

export async function renderLanding() {
    const [settings, generalSettings, members, news] = await Promise.all([
        getLandingSettings(),
        getSettings(),
        getMembers(),
        getNews()
    ]);
    
    const clanTag = generalSettings.clanTag || '#P0YVL80U';
    const cleanTag = clanTag.replace('#', '');
    const joinLink = `https://link.clashofclans.com/en?action=OpenClanProfile&tag=%23${cleanTag}`;
    
    const sorted = members
        .filter(m => m.role !== 'leader')
        .sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0))
        .slice(0, 3);

    return `
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero-section">
            <!-- Background Image with Parallax -->
            <div class="absolute inset-0 z-0" data-parallax="0.3">
                <img src="assets/images/hero-bg.png" alt="" class="w-full h-full object-cover scale-110" loading="eager">
                <div class="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/70 via-[#0a0e17]/50 to-[#0a0e17]"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/80 via-transparent to-[#0a0e17]/80"></div>
            </div>

            <!-- Floating Lights -->
            <div class="absolute inset-0 z-1 pointer-events-none">
                <div class="floating-light floating-light-1"></div>
                <div class="floating-light floating-light-2"></div>
                <div class="floating-light floating-light-3"></div>
            </div>

            <!-- Hero Content -->
            <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div class="animate-on-scroll">


                    <!-- Title -->
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" 
                        style="font-family: 'Lilita One', cursive;">
                        ${settings.heroTitle}
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        ${settings.heroDescription}
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#/layouts" class="group relative px-8 py-4 rounded-2xl text-lg font-bold text-black 
                                               bg-gradient-to-r from-amber-400 to-yellow-500 
                                               hover:from-amber-300 hover:to-yellow-400 
                                               shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 
                                               transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                                Base Layout
                            </span>
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
                        <a href="#/leaderboard" class="group px-8 py-4 rounded-2xl text-lg font-bold text-white 
                                                       border-2 border-white/20 hover:border-amber-400/50 
                                                       bg-white/5 hover:bg-white/10 backdrop-blur-sm
                                                       transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                🏆 View Leaderboard
                            </span>
                        </a>
                        <a href="${joinLink}" target="_blank" class="group px-8 py-4 rounded-2xl text-lg font-bold 
                                                  text-purple-300 border-2 border-purple-500/30 
                                                  hover:border-purple-400/60 bg-purple-500/10 hover:bg-purple-500/20 
                                                  backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                           style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                ⚔️ Join Clan
                            </span>
                        </a>
                    </div>
                </div>   </div>

                <!-- Scroll Indicator -->
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg class="w-6 h-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </div>
        </section>

        <!-- News Section -->
        <section class="relative py-20 px-4" id="features-section">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2" style="font-family: 'Lilita One', cursive;">
                        📰 Berita Terbaru Supercell Resmi
                    </h2>
                    <p class="text-gray-400 max-w-xl mx-auto">
                        Dapatkan informasi update game, penyeimbangan stats, dan pengumuman resmi Clash of Clans
                    </p>
                </div>

                ${news.length === 0 ? `
                    <p class="text-center text-gray-500 text-sm py-12">Belum ada berita terbaru saat ini.</p>
                ` : `
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll" data-stagger="true">
                        ${news.map((item, index) => {
                            const delay = index * 100;
                            const hasVideo = item.videoUrl;
                            const hasLink = item.externalLink;
                            
                            return `
                                <div class="animate-item group flex flex-col rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-500/30 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default" style="transition-delay: ${delay}ms;">
                                    <!-- Thumbnail -->
                                    <div class="relative h-48 overflow-hidden bg-slate-800">
                                        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400'">
                                        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/20 to-transparent"></div>
                                        
                                        <!-- Play icon overlay if video is present -->
                                        ${hasVideo ? `
                                            <a href="${item.videoUrl}" target="_blank" class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                                <div class="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-red-600/40">
                                                    <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                                </div>
                                            </a>
                                        ` : ''}
                                    </div>
                                    
                                    <!-- Body -->
                                    <div class="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 class="text-white font-bold text-lg mb-2 line-clamp-2 hover:text-amber-400 transition-colors" style="font-family: 'Lilita One', cursive;">${item.title}</h3>
                                            <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">${item.description}</p>
                                        </div>
                                        
                                        <!-- Footer / Action links -->
                                        <div class="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div class="flex gap-4">
                                                ${hasVideo ? `
                                                    <a href="${item.videoUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-bold transition-colors">
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                                        Video
                                                    </a>
                                                ` : ''}
                                                ${hasLink ? `
                                                    <a href="${item.externalLink}" target="_blank" class="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors">
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                                        Artikel
                                                    </a>
                                                ` : ''}
                                            </div>
                                            
                                            <span class="text-[10px] text-gray-500 font-medium">Official Supercell</span>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `}
            </div>
        </section>

        <!-- Top 3 Members Section -->
        <section class="relative py-20 px-4 overflow-hidden" id="top-3-members">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-500/5"></div>
            <div class="max-w-4xl mx-auto relative">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        🏆 Top 3 Members
                    </h2>
                    <p class="text-gray-400">Anggota dengan kontribusi poin tertinggi saat ini</p>
                </div>

                <!-- Top 3 Podium -->
                ${sorted.length >= 3 ? `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${rankCard({ rank: 2, ...sorted[1] })}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${rankCard({ rank: 1, ...sorted[0] })}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${rankCard({ rank: 3, ...sorted[2] })}
                    </div>
                </div>
                ` : sorted.length > 0 ? `
                <div class="grid gap-4 animate-on-scroll" data-stagger="true">
                    ${sorted.map((m, i) => rankCard({ rank: i + 1, ...m })).join('')}
                </div>
                ` : `
                <p class="text-center text-gray-500 text-sm py-6">Belum ada data kontribusi anggota.</p>
                `}
            </div>
        </section>

        <!-- CTA Section -->
        <section class="relative py-20 px-4">
            <div class="max-w-3xl mx-auto">
                <div class="relative rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-blue-500/10 
                            backdrop-blur-sm p-12 text-center overflow-hidden animate-on-scroll">
                    <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">
                            Ready to Lead?
                        </h2>
                        <p class="text-gray-400 mb-8 max-w-lg mx-auto">
                            Mulai kelola clan kamu sekarang dengan StreetLourd
                        </p>
                        <a href="#/dashboard" class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-bold text-black 
                                                    bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 
                                                    shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                           style="font-family: 'Lilita One', cursive;">
                            Enter Dashboard →
                        </a>
                    </div>
                </div>
            </div>
        </section>

        ${renderFooter()}
    `;
}
