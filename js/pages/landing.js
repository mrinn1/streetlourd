// ============================================================
// StreetLourd — Landing Page
// ============================================================

import { renderFooter } from '../components/footer.js';

export function renderLanding() {
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
                    <!-- Badge -->
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span class="text-sm text-gray-300">Clan Management System</span>
                    </div>

                    <!-- Title -->
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" 
                        style="font-family: 'Lilita One', cursive;">
                        <span class="hero-title-gradient">Lead Your Clan</span>
                        <br>
                        <span class="hero-title-gradient-2">To Victory</span>
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#/login" class="group relative px-8 py-4 rounded-2xl text-lg font-bold text-black 
                                              bg-gradient-to-r from-amber-400 to-yellow-500 
                                              hover:from-amber-300 hover:to-yellow-400 
                                              shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 
                                              transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                           style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
                                Login
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
                        <a href="#/members" class="group px-8 py-4 rounded-2xl text-lg font-bold 
                                                  text-purple-300 border-2 border-purple-500/30 
                                                  hover:border-purple-400/60 bg-purple-500/10 hover:bg-purple-500/20 
                                                  backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                           style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                ⚔️ Join Clan
                            </span>
                        </a>
                    </div>
                </div>

                <!-- Scroll Indicator -->
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg class="w-6 h-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="relative py-20 px-4" id="features-section">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">
                        Everything You Need
                    </h2>
                    <p class="text-gray-400 max-w-xl mx-auto">
                        Kelola clan seperti pro player dengan fitur-fitur lengkap
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll" data-stagger="true">
                    ${featureCard('⚔️', 'War Tracker', 'Input dan pantau hasil war dengan tracking attack, bintang, dan destruction otomatis.', 'from-red-500/20 to-orange-500/10', 'border-red-500/20')}
                    ${featureCard('📊', 'Point System', 'Sistem poin otomatis dengan reward dan punishment yang transparan untuk semua anggota.', 'from-blue-500/20 to-cyan-500/10', 'border-blue-500/20')}
                    ${featureCard('🏆', 'Leaderboard', 'Ranking anggota berdasarkan kontribusi dengan efek emas untuk top player.', 'from-amber-500/20 to-yellow-500/10', 'border-amber-500/20')}
                    ${featureCard('👥', 'Member Profiles', 'Profil detail setiap anggota dengan riwayat war, poin, dan statistik lengkap.', 'from-purple-500/20 to-violet-500/10', 'border-purple-500/20')}
                </div>
            </div>
        </section>

        <!-- Stats Preview Section -->
        <section class="relative py-20 px-4 overflow-hidden" id="stats-preview">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-500/5"></div>
            <div class="max-w-7xl mx-auto relative">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll" data-stagger="true">
                    ${quickStat('👥', '50+', 'Active Members')}
                    ${quickStat('⚔️', '200+', 'Wars Fought')}
                    ${quickStat('⭐', '1,500+', 'Total Stars')}
                    ${quickStat('🏆', '85%', 'Win Rate')}
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="relative py-20 px-4">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">
                        How It Works
                    </h2>
                    <p class="text-gray-400">Mulai kelola clan dalam 3 langkah mudah</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll" data-stagger="true">
                    ${stepCard('1', 'Login & Connect', 'Login dengan Google dan hubungkan akun Clash of Clans kamu.', 'from-amber-500 to-yellow-600')}
                    ${stepCard('2', 'Sync Members', 'Data anggota clan akan otomatis tersinkronisasi dari CoC API.', 'from-purple-500 to-violet-600')}
                    ${stepCard('3', 'Manage & Track', 'Input war, kelola poin, dan pantau statistik clan secara real-time.', 'from-blue-500 to-cyan-600')}
                </div>
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

function featureCard(icon, title, desc, bgGradient, borderColor) {
    return `
        <div class="animate-item group rounded-2xl border ${borderColor} bg-gradient-to-br ${bgGradient} 
                    backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg cursor-default">
            <div class="text-4xl mb-4">${icon}</div>
            <h3 class="text-white font-bold text-lg mb-2" style="font-family: 'Lilita One', cursive;">${title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${desc}</p>
        </div>
    `;
}

function quickStat(icon, value, label) {
    return `
        <div class="animate-item text-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm 
                    hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl mb-2">${icon}</div>
            <p class="text-2xl md:text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">${value}</p>
            <p class="text-xs text-gray-500 uppercase tracking-wider mt-1">${label}</p>
        </div>
    `;
}

function stepCard(num, title, desc, gradient) {
    return `
        <div class="animate-item text-center">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center 
                        text-2xl font-bold text-white mx-auto mb-4 shadow-lg" 
                 style="font-family: 'Lilita One', cursive;">
                ${num}
            </div>
            <h3 class="text-white font-bold text-lg mb-2" style="font-family: 'Lilita One', cursive;">${title}</h3>
            <p class="text-gray-400 text-sm">${desc}</p>
        </div>
    `;
}
