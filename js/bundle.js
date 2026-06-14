var N=[{id:"war_participation",label:"Ikut War",points:10,icon:"\u2694\uFE0F",category:"war"},{id:"used_both_attacks",label:"Menggunakan 2 Attack",points:10,icon:"\u{1F5E1}\uFE0F",category:"war"},{id:"three_stars",label:"3 Bintang",points:15,icon:"\u2B50",category:"war"},{id:"cwl_participation",label:"Ikut CWL",points:30,icon:"\u{1F3C6}",category:"cwl"},{id:"clan_games_complete",label:"Clan Games Selesai",points:20,icon:"\u{1F3AE}",category:"clangames"},{id:"donation_1000",label:"Donasi 1000",points:5,icon:"\u{1F381}",category:"donation"},{id:"clan_capital_active",label:"Clan Capital Aktif",points:10,icon:"\u{1F3F0}",category:"capital"}],U=[{id:"missed_attack_1",label:"Tidak Menggunakan Attack Pertama",points:-20,icon:"\u274C",category:"war"},{id:"missed_attack_2",label:"Tidak Menggunakan Attack Kedua",points:-15,icon:"\u26D4",category:"war"},{id:"missed_war_no_excuse",label:"Tidak Ikut War Tanpa Izin",points:-30,icon:"\u{1F6AB}",category:"war"},{id:"afk_too_long",label:"AFK Terlalu Lama",points:-10,icon:"\u{1F4A4}",category:"activity"},{id:"rule_violation",label:"Melanggar Aturan Clan",points:-25,icon:"\u26A0\uFE0F",category:"violation"}];var Oe=[{label:"Home",hash:"#/",icon:"\u{1F3E0}"},{label:"Members",hash:"#/members",icon:"\u{1F465}"},{label:"Leaderboard",hash:"#/leaderboard",icon:"\u{1F3C6}"},{label:"War History",hash:"#/wars",icon:"\u2694\uFE0F"},{label:"Statistics",hash:"#/statistics",icon:"\u{1F4CA}"},{label:"Base Layouts",hash:"#/layouts",icon:"\u{1F5FA}\uFE0F"},{label:"Clan Rules",hash:"#/rules",icon:"\u{1F4DC}"},{label:"Admin Panel",hash:"#/admin",icon:"\u2699\uFE0F",adminOnly:!0}];var I={gold:"rgba(245, 166, 35, 1)",purple:"rgba(168, 85, 247, 1)",blue:"rgba(59, 130, 246, 1)",green:"rgba(34, 197, 94, 1)",red:"rgba(239, 68, 68, 1)",cyan:"rgba(6, 182, 212, 1)",goldAlpha:"rgba(245, 166, 35, 0.2)",purpleAlpha:"rgba(168, 85, 247, 0.2)",blueAlpha:"rgba(59, 130, 246, 0.2)",greenAlpha:"rgba(34, 197, 94, 0.2)",redAlpha:"rgba(239, 68, 68, 0.2)",cyanAlpha:"rgba(6, 182, 212, 0.2)"};function je(e="#/",t=null,a=null){let o=a==="leader"||a==="coleader",r=Oe.filter(i=>!(i.adminOnly&&!o));return`
        <nav id="main-navbar" class="fixed top-0 left-0 right-0 z-[9990] transition-all duration-500">
            <div class="navbar-glass">
                <div class="max-w-7xl mx-auto px-4 sm:px-6">
                    <div class="flex items-center justify-between h-16 md:h-18">
                        <!-- Logo -->
                        <a href="#/" class="flex items-center gap-3 group shrink-0">
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
                                <span class="text-lg">\u2694\uFE0F</span>
                            </div>
                            <span class="text-white font-bold text-lg hidden sm:block tracking-tight" style="font-family: 'Lilita One', cursive;">
                                Street<span class="text-amber-400">Lourd</span>
                            </span>
                        </a>

                        <!-- Desktop Nav Links -->
                        <div class="hidden lg:flex items-center gap-1">
                            ${r.map(i=>`
                                <a href="${i.hash}" 
                                   class="nav-link px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                          ${e===i.hash?"text-amber-400 bg-amber-500/10":"text-gray-300 hover:text-white hover:bg-white/10"}">
                                    <span class="mr-1.5">${i.icon}</span>${i.label}
                                </a>
                            `).join("")}
                        </div>

                        <!-- Right Side: Login / User -->
                        <div class="flex items-center gap-3">
                            ${t?`
                                <div class="flex items-center gap-3">
                                    <div class="hidden sm:block text-right">
                                        <p class="text-sm text-white font-medium truncate max-w-[120px]">${t.displayName||"User"}</p>
                                        <p class="text-[10px] text-amber-400 uppercase">${a||"member"}</p>
                                    </div>
                                    <button id="user-menu-btn" class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors">
                                        ${t.photoURL?`<img src="${t.photoURL}" alt="" class="w-full h-full object-cover">`:(t.displayName||"U").charAt(0).toUpperCase()}
                                    </button>
                                    <button id="logout-btn" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="Logout">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                                    </button>
                                </div>
                            `:`
                                <a href="#/login" class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold 
                                                         bg-gradient-to-r from-amber-500 to-yellow-600 text-black 
                                                         hover:from-amber-400 hover:to-yellow-500 transition-all 
                                                         shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
                                    Login
                                </a>
                            `}

                            <!-- Mobile Menu Toggle -->
                            <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu" class="fixed inset-0 z-[9989] hidden lg:hidden">
                <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" id="mobile-menu-backdrop"></div>
                <div class="absolute right-0 top-0 bottom-0 w-72 bg-[#0f1420]/98 backdrop-blur-xl border-l border-white/10 
                            transform translate-x-full transition-transform duration-300" id="mobile-menu-panel">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-8">
                            <span class="text-white font-bold text-lg" style="font-family: 'Lilita One', cursive;">Menu</span>
                            <button id="mobile-menu-close" class="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-col gap-2">
                            ${r.map(i=>`
                                <a href="${i.hash}" 
                                   class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                                          ${e===i.hash?"text-amber-400 bg-amber-500/10":"text-gray-300 hover:text-white hover:bg-white/10"}">
                                    <span class="text-lg">${i.icon}</span>${i.label}
                                </a>
                            `).join("")}
                            ${t?`
                                <hr class="border-white/10 my-3">
                                <button id="mobile-logout-btn" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all w-full text-left">
                                    <span class="text-lg">\u{1F6AA}</span>Logout
                                </button>
                            `:""}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `}function Ne(){let e=document.getElementById("main-navbar");if(!e)return;let t=0;function a(){let d=window.scrollY,u=e.querySelector(".navbar-glass");u&&(d>60?u.classList.add("navbar-solid"):u.classList.remove("navbar-solid"),t=d)}window.addEventListener("scroll",a,{passive:!0}),a();let o=document.getElementById("mobile-menu-btn"),r=document.getElementById("mobile-menu"),i=document.getElementById("mobile-menu-panel"),n=document.getElementById("mobile-menu-close"),l=document.getElementById("mobile-menu-backdrop");function s(){!r||!i||(r.classList.remove("hidden"),requestAnimationFrame(()=>{i.classList.remove("translate-x-full"),i.classList.add("translate-x-0")}))}function c(){!r||!i||(i.classList.remove("translate-x-0"),i.classList.add("translate-x-full"),setTimeout(()=>r.classList.add("hidden"),300))}return o?.addEventListener("click",s),n?.addEventListener("click",c),l?.addEventListener("click",c),document.querySelectorAll(".mobile-nav-link").forEach(d=>{d.addEventListener("click",c)}),()=>{window.removeEventListener("scroll",a)}}var ue=class{constructor(t="particles-canvas"){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.particles=[],this.animationId=null,this.maxParticles=60,this.colors=["rgba(245, 166, 35, 0.4)","rgba(168, 85, 247, 0.3)","rgba(59, 130, 246, 0.3)","rgba(255, 215, 0, 0.2)","rgba(147, 51, 234, 0.2)"],this.resize(),window.addEventListener("resize",()=>this.resize()))}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}createParticle(){return{x:Math.random()*this.canvas.width,y:this.canvas.height+Math.random()*100,size:Math.random()*3+1,speedY:-(Math.random()*.5+.2),speedX:(Math.random()-.5)*.3,opacity:Math.random()*.5+.1,color:this.colors[Math.floor(Math.random()*this.colors.length)],life:0,maxLife:Math.random()*300+200,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.01}}update(){for(;this.particles.length<this.maxParticles;)this.particles.push(this.createParticle());for(let t=this.particles.length-1;t>=0;t--){let a=this.particles[t];a.x+=a.speedX,a.y+=a.speedY,a.life++,a.pulse+=a.pulseSpeed;let o=a.life/a.maxLife;o<.1?a.currentOpacity=a.opacity*(o/.1):o>.8?a.currentOpacity=a.opacity*((1-o)/.2):a.currentOpacity=a.opacity,a.currentSize=a.size+Math.sin(a.pulse)*.5,(a.life>=a.maxLife||a.y<-20)&&this.particles.splice(t,1)}}draw(){if(this.ctx){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t of this.particles)this.ctx.save(),this.ctx.globalAlpha=t.currentOpacity||t.opacity,this.ctx.fillStyle=t.color,this.ctx.shadowColor=t.color,this.ctx.shadowBlur=t.currentSize*4,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.currentSize,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}}animate(){this.update(),this.draw(),this.animationId=requestAnimationFrame(()=>this.animate())}start(){this.canvas&&this.animate()}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.stop(),this.particles=[],this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}};function p(){return`
        <footer class="relative border-t border-white/5 bg-gradient-to-b from-[#0a0e17] to-[#050810] mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <!-- Brand -->
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg">
                                <span class="text-xl">\u2694\uFE0F</span>
                            </div>
                            <span class="text-white font-bold text-xl" style="font-family: 'Lilita One', cursive;">
                                Street<span class="text-amber-400">Lourd</span>
                            </span>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            Sistem manajemen clan Clash of Clans yang membantu leader memantau kontribusi anggota, 
                            statistik war, dan sistem poin secara otomatis.
                        </p>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="#/" class="text-gray-500 hover:text-amber-400 text-sm transition-colors">Home</a></li>
                            <li><a href="#/members" class="text-gray-500 hover:text-amber-400 text-sm transition-colors">Members</a></li>
                            <li><a href="#/leaderboard" class="text-gray-500 hover:text-amber-400 text-sm transition-colors">Leaderboard</a></li>
                            <li><a href="#/wars" class="text-gray-500 hover:text-amber-400 text-sm transition-colors">War History</a></li>
                            <li><a href="#/statistics" class="text-gray-500 hover:text-amber-400 text-sm transition-colors">Statistics</a></li>
                            <li><a href="#/rules" class="text-gray-500 hover:text-amber-400 text-sm transition-colors">Clan Rules</a></li>
                        </ul>
                    </div>

                    <!-- Resources -->
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul class="space-y-2">
                            <li>
                                <a href="https://clashofclans.com" target="_blank" rel="noopener" class="text-gray-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-1">
                                    Clash of Clans Official
                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://developer.clashofclans.com" target="_blank" rel="noopener" class="text-gray-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-1">
                                    CoC API Developer
                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Divider -->
                <div class="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-gray-600 text-xs text-center md:text-left">
                        \xA9 ${new Date().getFullYear()} StreetLourd. Not affiliated with Supercell. 
                        Clash of Clans is a trademark of Supercell Oy.
                    </p>
                    <p class="text-gray-700 text-xs">
                        Supercell developer by Mr.Rinn
                    </p>
                </div>
            </div>
        </footer>
    `}function ee({icon:e,label:t,value:a,color:o="blue",subtitle:r="",glow:i=!1}){let n={gold:"from-amber-500/20 to-yellow-600/10 border-amber-500/30",purple:"from-purple-500/20 to-violet-600/10 border-purple-500/30",blue:"from-blue-500/20 to-cyan-600/10 border-blue-500/30",green:"from-green-500/20 to-emerald-600/10 border-green-500/30",red:"from-red-500/20 to-rose-600/10 border-red-500/30",cyan:"from-cyan-500/20 to-teal-600/10 border-cyan-500/30"},l={gold:"shadow-amber-500/20",purple:"shadow-purple-500/20",blue:"shadow-blue-500/20",green:"shadow-green-500/20",red:"shadow-red-500/20",cyan:"shadow-cyan-500/20"},s={gold:"from-amber-500 to-yellow-600",purple:"from-purple-500 to-violet-600",blue:"from-blue-500 to-cyan-600",green:"from-green-500 to-emerald-600",red:"from-red-500 to-rose-600",cyan:"from-cyan-500 to-teal-600"};return`
        <div class="group relative rounded-2xl border bg-gradient-to-br ${n[o]} 
                    p-6 transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 
                    ${i?`shadow-lg ${l[o]}`:""} 
                    hover:shadow-xl ${l[o]} animate-item cursor-default">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${s[o]} flex items-center justify-center text-2xl shadow-lg shrink-0">
                    ${e}
                </div>
                <div class="min-w-0">
                    <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">${t}</p>
                    <p class="text-2xl font-bold text-white mt-0.5" style="font-family: 'Lilita One', cursive;" data-counter="${a}">${a}</p>
                    ${r?`<p class="text-xs text-gray-500 mt-1">${r}</p>`:""}
                </div>
            </div>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
    `}function Fe({name:e,tag:t,role:a,townHallLevel:o,trophies:r,donations:i,clanCapital:n,totalPoints:l,sidePoints:s,onClick:c}){let d={leader:"from-amber-500 to-yellow-600",coLeader:"from-purple-500 to-violet-600",admin:"from-blue-500 to-cyan-600",member:"from-gray-500 to-gray-600"},u={leader:"Leader",coLeader:"Co-Leader",admin:"Elder",member:"Member"},b={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[o]||"#6b7280";return`
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                    p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 
                    hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer animate-item"
             onclick="${c||""}">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                     style="background: linear-gradient(135deg, ${b}, ${b}99); box-shadow: 0 0 15px ${b}40;">
                    TH${o||"?"}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1 min-w-0">
                        <h3 class="text-white font-bold truncate flex-1 min-w-0">${e}</h3>
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${d[a]||d.member} shrink-0">
                            ${u[a]||"Member"}
                        </span>
                    </div>
                    <p class="text-xs text-gray-500 mb-2">${t}</p>
                    <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span class="flex items-center gap-1 shrink-0">\u{1F3C6} ${(r||0).toLocaleString()}</span>
                        <span class="flex items-center gap-1 shrink-0">\u{1F381} ${(i||0).toLocaleString()}</span>
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <div class="text-lg font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                        ${a==="leader"?"\u{1F451}":l||0}
                    </div>
                    <div class="text-[10px] text-gray-500 uppercase">${a==="leader"?"Leader":"Points"}</div>
                    ${s&&a!=="leader"?`
                        <div class="text-[10px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">
                            +${s} SP
                        </div>
                    `:""}
                </div>
                <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `}function We({date:e,opponent:t,warSize:a,result:o,clanStars:r,opponentStars:i,clanDestruction:n,opponentDestruction:l,onClick:s}){let c={win:{label:"VICTORY",bg:"from-green-500/20 to-emerald-600/10",border:"border-green-500/30",badge:"from-green-500 to-emerald-600"},loss:{label:"DEFEAT",bg:"from-red-500/20 to-rose-600/10",border:"border-red-500/30",badge:"from-red-500 to-rose-600"},draw:{label:"DRAW",bg:"from-gray-500/20 to-gray-600/10",border:"border-gray-500/30",badge:"from-gray-500 to-gray-600"}},d=c[o]||c.draw;return`
        <div class="group relative rounded-2xl border ${d.border} bg-gradient-to-br ${d.bg} backdrop-blur-sm 
                    p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-item"
             onclick="${s||""}">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-xs text-gray-400">${e||""}</p>
                    <p class="text-xs text-gray-500">War Size: ${a||"?"}v${a||"?"}</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${d.badge}">
                    ${d.label}
                </span>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">\u2B50 ${r||0}</p>
                    <p class="text-xs text-gray-400 mt-1">Our Clan</p>
                    <p class="text-xs text-gray-500">${(n||0).toFixed(1)}%</p>
                </div>
                <div class="text-gray-500 font-bold text-lg">VS</div>
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white/60" style="font-family: 'Lilita One', cursive;">\u2B50 ${i||0}</p>
                    <p class="text-xs text-gray-400 mt-1 truncate">${t||"Unknown"}</p>
                    <p class="text-xs text-gray-500">${(l||0).toFixed(1)}%</p>
                </div>
            </div>
        </div>
    `}function C({rank:e,name:t,tag:a,townHallLevel:o,totalPoints:r,sidePoints:i,totalWars:n,totalStars:l,donations:s}){let c=e<=3,u={1:{medal:"\u{1F947}",border:"border-amber-400/50",bg:"from-amber-500/20 to-yellow-600/10",glow:"shadow-amber-500/30",textColor:"text-amber-400"},2:{medal:"\u{1F948}",border:"border-gray-300/50",bg:"from-gray-300/20 to-gray-400/10",glow:"shadow-gray-300/20",textColor:"text-gray-300"},3:{medal:"\u{1F949}",border:"border-orange-500/50",bg:"from-orange-500/20 to-amber-600/10",glow:"shadow-orange-500/20",textColor:"text-orange-400"}}[e]||{medal:"",border:"border-white/10",bg:"bg-white/5",glow:"",textColor:"text-white"};return c?`
            <div class="relative rounded-2xl border ${u.border} bg-gradient-to-br ${u.bg} backdrop-blur-sm 
                        p-6 transition-all duration-300 hover:scale-[1.03] shadow-lg ${u.glow} 
                        ${e===1?"gold-shimmer":""} animate-item">
                <div class="flex items-center gap-4">
                    <div class="text-4xl">${u.medal}</div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold ${u.textColor} truncate" style="font-family: 'Lilita One', cursive;">${t}</h3>
                        <p class="text-xs text-gray-500">${a} \xB7 TH${o||"?"}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold ${u.textColor}" style="font-family: 'Lilita One', cursive;">${(r||0).toLocaleString()}</p>
                        <p class="text-[10px] text-gray-500 uppercase">Points</p>
                        ${i?`
                            <p class="text-xs font-bold text-blue-400" style="font-family: 'Lilita One', cursive;">+${i} SP</p>
                        `:""}
                    </div>
                </div>
                <div class="flex gap-4 mt-4 text-xs text-gray-400 border-t border-white/10 pt-3">
                    <span>\u{1F381} ${(s||0).toLocaleString()} Donated</span>
                </div>
            </div>
        `:`
        <div class="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 
                    hover:bg-white/10 transition-all duration-200 animate-item">
            <div class="w-8 text-center font-bold text-gray-500 text-sm">#${e}</div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                    <span class="text-white font-medium truncate">${t}</span>
                    <span class="text-[10px] text-gray-500">TH${o||"?"}</span>
                </div>
            </div>
            <div class="flex gap-4 text-xs text-gray-500 shrink-0">
                <span>\u{1F381} ${(s||0).toLocaleString()}</span>
            </div>
            <div class="text-right shrink-0">
                <span class="text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${(r||0).toLocaleString()}</span>
                ${i?`
                    <span class="text-[10px] text-blue-400 font-bold block" style="font-family: 'Lilita One', cursive;">+${i} SP</span>
                `:""}
            </div>
        </div>
    `}import{initializeApp as Ht}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";import{getAuth as _t}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";import{getFirestore as Rt}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";import{getStorage as Ot}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";var Se={apiKey:"AIzaSyCJvQDiM7JQ7n0si8UgI-lpVA7CgiVD8eA",authDomain:"victorytoclan.firebaseapp.com",projectId:"victorytoclan",storageBucket:"victorytoclan.firebasestorage.app",messagingSenderId:"762294306774",appId:"1:762294306774:web:601d43f7d499167e40c677"},pe,F,g,jt;try{pe=Ht(Se),F=_t(pe),g=Rt(pe),jt=Ot(pe),console.log("\u2705 Firebase initialized successfully")}catch(e){console.warn("\u26A0\uFE0F Firebase initialization failed:",e.message),console.warn("Please configure your Firebase project in js/config/firebase.js")}function h(){return Se.apiKey!=="YOUR_API_KEY"&&Se.projectId!=="YOUR_PROJECT_ID"}async function f(){return await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js")}async function y(){if(!h())return Ce();try{let{collection:e,getDocs:t,query:a,orderBy:o}=await f(),r=a(e(g,"members"),o("totalPoints","desc"));return(await t(r)).docs.map(n=>({id:n.id,...n.data()}))}catch(e){return console.error("getMembers:",e),Ce()}}async function ze(e){if(!h())return Ce().find(t=>t.tag===e)||null;try{let{doc:t,getDoc:a}=await f(),o=await a(t(g,"members",e));return o.exists()?{id:o.id,...o.data()}:null}catch(t){return console.error("getMember:",t),null}}async function z(){if(!h())return qe();try{let{collection:e,getDocs:t,query:a,orderBy:o}=await f(),r=a(e(g,"wars"),o("date","desc"));return(await t(r)).docs.map(n=>({id:n.id,...n.data()}))}catch(e){return console.error("getWars:",e),qe()}}async function Ke(e){if(!h())return;let{collection:t,addDoc:a,serverTimestamp:o}=await f();return await a(t(g,"wars"),{...e,createdAt:o()})}async function Ve(e){if(!h())return ge();try{let{collection:t,getDocs:a,query:o,where:r}=await f(),i=o(t(g,"pointHistory"),r("memberTag","==",e)),l=(await a(i)).docs.map(s=>({id:s.id,...s.data()}));return l.sort((s,c)=>{let d=s.date?s.date.toDate?s.date.toDate():new Date(s.date):0;return(c.date?c.date.toDate?c.date.toDate():new Date(c.date):0)-d}),l}catch(t){return console.error("getPointHistory:",t),ge()}}async function Pe(e){if(!h())return;let{collection:t,addDoc:a,serverTimestamp:o,doc:r,runTransaction:i}=await f(),n=r(g,"members",e.memberTag);await i(g,async l=>{let s=await l.get(n);if(!s.exists())throw"Document does not exist!";let c=s.data(),d=c.totalPoints!==void 0?c.totalPoints:500,u=c.sidePoints||0,v=d+u+e.amount,b=v,S=0;v>1500&&(b=1500,S=v-1500),b<0&&(b=0),l.update(n,{totalPoints:b,sidePoints:S})}),await a(t(g,"pointHistory"),{...e,date:o()})}async function Ge(e){if(!h())return;let{collection:t,addDoc:a,serverTimestamp:o,doc:r,runTransaction:i}=await f(),n=r(g,"members",e.memberTag);await i(g,async l=>{let s=await l.get(n);if(!s.exists())throw"Document does not exist!";let c=s.data(),d=c.totalPoints!==void 0?c.totalPoints:500,u=c.sidePoints||0,v=d+u+e.amount,b=v,S=0;v>1500&&(b=1500,S=v-1500),b<0&&(b=0),l.update(n,{totalPoints:b,sidePoints:S})}),await a(t(g,"pointHistory"),{...e,date:o()})}async function H(){if(!h())return ge();try{let{collection:e,getDocs:t,query:a,orderBy:o,limit:r}=await f(),i=a(e(g,"pointHistory"),o("date","desc"),r(150));return(await t(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return console.error("getAllPointHistory:",e),ge()}}async function be(e){if(!h())return;let{doc:t,deleteDoc:a}=await f(),o=t(g,"pointHistory",e);await a(o)}async function Ye(e){if(!h())return;let{collection:t,addDoc:a,serverTimestamp:o}=await f();return await a(t(g,"promotions"),{...e,date:o()})}async function Je(e){if(!h())return;let{collection:t,addDoc:a,serverTimestamp:o}=await f();return await a(t(g,"violations"),{...e,date:o()})}async function Qe(){if(!h())return{clanTag:"#2ABC123",clanName:"StreetLourd"};try{let{doc:e,getDoc:t}=await f(),a=await t(e(g,"settings","general"));return a.exists()?a.data():{clanTag:"",clanName:""}}catch(e){return console.error("getSettings:",e),{clanTag:"",clanName:""}}}function Ce(){return["DragonSlayer","WarMachine","ClashKing","QueenArcher","GoblinHero","WallBreaker","TH17Master","EliteWarrior","SuperWitch","IceGolem","LavaHound","ElectroDragon","YetiSmash","HeadHunter","InfernoTower","PhoenixRise","RoyalGhost","SneakyGoblin","SuperBowler","PartyWizard"].map((t,a)=>({tag:`#${String(2e3+a).padStart(4,"0")}ABC`,name:t,townHallLevel:Math.floor(Math.random()*7)+11,role:a===0?"leader":a<3?"coLeader":a<7?"admin":"member",trophies:Math.floor(Math.random()*2e3)+4e3,donations:Math.floor(Math.random()*5e3)+500,donationsReceived:Math.floor(Math.random()*3e3)+200,clanCapitalContributions:Math.floor(Math.random()*1e5)+1e4,totalPoints:Math.floor(Math.random()*300)+50,totalWars:Math.floor(Math.random()*50)+10,totalStars:Math.floor(Math.random()*100)+20,avgDestruction:Math.random()*30+70}))}function qe(){return["Dark Warriors","Storm Legion","Iron Wolves","Shadow Riders","Thunder Hawks"].map((t,a)=>({id:`war-${a}`,date:new Date(Date.now()-a*3*864e5).toISOString(),opponent:t,warSize:[15,20,25,30,40][a%5],result:["win","win","loss","win","draw"][a],clanStars:Math.floor(Math.random()*30)+20,opponentStars:Math.floor(Math.random()*30)+15,clanDestruction:Math.random()*20+80,opponentDestruction:Math.random()*30+60}))}function ge(){return["Ikut War","3 Bintang","Donasi 1000","Clan Games","Tidak Attack"].map((t,a)=>({id:`ph-${a}`,amount:a===4?-20:[10,15,5,20][a],reason:t,category:"war",adminName:"Leader",date:new Date(Date.now()-a*2*864e5).toISOString()}))}async function K(){if(!h())return null;try{let{doc:e,getDoc:t}=await f(),a=await t(e(g,"settings","rules"));return a.exists()?a.data():null}catch(e){return console.error("getRules:",e),null}}async function Xe(e){if(!h())return;let{doc:t,setDoc:a}=await f();await a(t(g,"settings","rules"),e)}async function xe(){if(!h())return{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."};try{let{doc:e,getDoc:t}=await f(),a=await t(e(g,"settings","landing"));return a.exists()?a.data():{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}catch(e){return console.error("getLandingSettings:",e),{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}}async function Ze(e){if(!h())return;let{doc:t,setDoc:a}=await f();await a(t(g,"settings","landing"),e,{merge:!0})}async function V(){if(!h())return Ue();try{let{collection:e,getDocs:t,query:a,orderBy:o}=await f(),r=a(e(g,"layouts"),o("createdAt","desc"));return(await t(r)).docs.map(n=>({id:n.id,...n.data()}))}catch(e){console.error("getLayouts:",e);try{let{collection:t,getDocs:a}=await f(),r=(await a(t(g,"layouts"))).docs.map(i=>({id:i.id,...i.data()}));return r.sort((i,n)=>{let l=i.createdAt?i.createdAt.toDate?i.createdAt.toDate():new Date(i.createdAt):0;return(n.createdAt?n.createdAt.toDate?n.createdAt.toDate():new Date(n.createdAt):0)-l}),r}catch(t){return console.error("getLayouts fallback failed:",t),Ue()}}}async function et(e){if(!h())return;let{collection:t,addDoc:a,serverTimestamp:o}=await f();return await a(t(g,"layouts"),{...e,createdAt:o()})}async function tt(e){if(!h())return;let{doc:t,deleteDoc:a}=await f();await a(t(g,"layouts",e))}function Ue(){return[{id:"demo-1",title:"TH17 Legend League War Base",townHallLevel:17,imageUrl:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH17-War-Demo",createdAt:new Date().toISOString()},{id:"demo-2",title:"TH16 Anti-3 Stars War Base",townHallLevel:16,imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH16-War-Demo",createdAt:new Date().toISOString()},{id:"demo-3",title:"TH15 Hybrid Farming Base",townHallLevel:15,imageUrl:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH15-Hybrid-Demo",createdAt:new Date().toISOString()}]}async function at(){let[e,t,a]=await Promise.all([xe(),Qe(),y()]),i=`https://link.clashofclans.com/en?action=OpenClanProfile&tag=%23${(t.clanTag||"#P0YVL80U").replace("#","")}`,n=a.filter(l=>l.role!=="leader").sort((l,s)=>(s.totalPoints||0)-(l.totalPoints||0)).slice(0,3);return`
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
                        ${e.heroTitle}
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        ${e.heroDescription}
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
                                \u{1F3C6} View Leaderboard
                            </span>
                        </a>
                        <a href="${i}" target="_blank" class="group px-8 py-4 rounded-2xl text-lg font-bold 
                                                  text-purple-300 border-2 border-purple-500/30 
                                                  hover:border-purple-400/60 bg-purple-500/10 hover:bg-purple-500/20 
                                                  backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                           style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                \u2694\uFE0F Join Clan
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
                    ${he("\u2694\uFE0F","War Tracker","Input dan pantau hasil war dengan tracking attack, bintang, dan destruction otomatis.","from-red-500/20 to-orange-500/10","border-red-500/20")}
                    ${he("\u{1F4CA}","Point System","Sistem poin otomatis dengan reward dan punishment yang transparan untuk semua anggota.","from-blue-500/20 to-cyan-500/10","border-blue-500/20")}
                    ${he("\u{1F3C6}","Leaderboard","Ranking anggota berdasarkan kontribusi dengan efek emas untuk top player.","from-amber-500/20 to-yellow-500/10","border-amber-500/20")}
                    ${he("\u{1F465}","Member Profiles","Profil detail setiap anggota dengan riwayat war, poin, dan statistik lengkap.","from-purple-500/20 to-violet-500/10","border-purple-500/20")}
                </div>
            </div>
        </section>

        <!-- Top 3 Members Section -->
        <section class="relative py-20 px-4 overflow-hidden" id="top-3-members">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-500/5"></div>
            <div class="max-w-4xl mx-auto relative">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        \u{1F3C6} Top 3 Members
                    </h2>
                    <p class="text-gray-400">Anggota dengan kontribusi poin tertinggi saat ini</p>
                </div>

                <!-- Top 3 Podium -->
                ${n.length>=3?`
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${C({rank:2,...n[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${C({rank:1,...n[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${C({rank:3,...n[2]})}
                    </div>
                </div>
                `:n.length>0?`
                <div class="grid gap-4 animate-on-scroll" data-stagger="true">
                    ${n.map((l,s)=>C({rank:s+1,...l})).join("")}
                </div>
                `:`
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
                            Enter Dashboard \u2192
                        </a>
                    </div>
                </div>
            </div>
        </section>

        ${p()}
    `}function he(e,t,a,o,r){return`
        <div class="animate-item group rounded-2xl border ${r} bg-gradient-to-br ${o} 
                    backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg cursor-default">
            <div class="text-4xl mb-4">${e}</div>
            <h3 class="text-white font-bold text-lg mb-2" style="font-family: 'Lilita One', cursive;">${t}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${a}</p>
        </div>
    `}var k={statCard(){return`
            <div class="rounded-2xl border border-white/5 bg-white/5 p-6 animate-pulse">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-white/10"></div>
                    <div class="flex-1">
                        <div class="h-4 bg-white/10 rounded w-20 mb-2"></div>
                        <div class="h-7 bg-white/10 rounded w-16"></div>
                    </div>
                </div>
            </div>
        `},memberCard(){return`
            <div class="rounded-2xl border border-white/5 bg-white/5 p-5 animate-pulse">
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-xl bg-white/10"></div>
                    <div class="flex-1">
                        <div class="h-5 bg-white/10 rounded w-32 mb-2"></div>
                        <div class="h-3 bg-white/10 rounded w-24 mb-3"></div>
                        <div class="flex gap-4">
                            <div class="h-3 bg-white/10 rounded w-16"></div>
                            <div class="h-3 bg-white/10 rounded w-16"></div>
                            <div class="h-3 bg-white/10 rounded w-16"></div>
                        </div>
                    </div>
                    <div class="h-6 w-16 bg-white/10 rounded-full"></div>
                </div>
            </div>
        `},leaderboardRow(){return`
            <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 animate-pulse">
                <div class="w-8 h-8 rounded-full bg-white/10"></div>
                <div class="w-10 h-10 rounded-xl bg-white/10"></div>
                <div class="flex-1">
                    <div class="h-4 bg-white/10 rounded w-28 mb-2"></div>
                    <div class="h-3 bg-white/10 rounded w-20"></div>
                </div>
                <div class="h-6 bg-white/10 rounded w-14"></div>
            </div>
        `},warCard(){return`
            <div class="rounded-2xl border border-white/5 bg-white/5 p-6 animate-pulse">
                <div class="flex items-center justify-between mb-4">
                    <div class="h-5 bg-white/10 rounded w-32"></div>
                    <div class="h-6 w-20 bg-white/10 rounded-full"></div>
                </div>
                <div class="flex items-center gap-8 mb-4">
                    <div class="flex-1 text-center">
                        <div class="h-8 bg-white/10 rounded w-16 mx-auto mb-2"></div>
                        <div class="h-3 bg-white/10 rounded w-24 mx-auto"></div>
                    </div>
                    <div class="h-6 bg-white/10 rounded w-8"></div>
                    <div class="flex-1 text-center">
                        <div class="h-8 bg-white/10 rounded w-16 mx-auto mb-2"></div>
                        <div class="h-3 bg-white/10 rounded w-24 mx-auto"></div>
                    </div>
                </div>
            </div>
        `},chart(){return`
            <div class="rounded-2xl border border-white/5 bg-white/5 p-6 animate-pulse">
                <div class="h-5 bg-white/10 rounded w-32 mb-6"></div>
                <div class="h-64 bg-white/5 rounded-xl flex items-end gap-2 p-4">
                    ${Array.from({length:8},()=>`<div class="flex-1 bg-white/10 rounded-t" style="height:${Math.random()*60+20}%"></div>`).join("")}
                </div>
            </div>
        `},profile(){return`
            <div class="animate-pulse">
                <div class="rounded-2xl border border-white/5 bg-white/5 p-8 mb-6">
                    <div class="flex items-center gap-6">
                        <div class="w-20 h-20 rounded-2xl bg-white/10"></div>
                        <div class="flex-1">
                            <div class="h-7 bg-white/10 rounded w-40 mb-3"></div>
                            <div class="h-4 bg-white/10 rounded w-28 mb-2"></div>
                            <div class="h-5 w-20 bg-white/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    ${Array(8).fill(0).map(()=>`
                        <div class="rounded-xl border border-white/5 bg-white/5 p-4">
                            <div class="h-3 bg-white/10 rounded w-16 mb-2"></div>
                            <div class="h-6 bg-white/10 rounded w-12"></div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `},repeat(e,t){let a=this[e];return a?Array(t).fill(0).map(()=>a.call(this)).join(""):""},page(){return`
            <div class="max-w-7xl mx-auto px-4 py-8 animate-pulse">
                <div class="h-8 bg-white/10 rounded w-48 mb-2"></div>
                <div class="h-4 bg-white/10 rounded w-72 mb-8"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.repeat("memberCard",6)}
                </div>
            </div>
        `}};function _(e,t,a){return`
        <div class="flex flex-col items-center justify-center py-16 text-center animate-on-scroll">
            <div class="text-6xl mb-4 opacity-50">${e}</div>
            <h3 class="text-xl font-bold text-white/70 mb-2" style="font-family: 'Lilita One', cursive;">${t}</h3>
            <p class="text-gray-500 max-w-md">${a}</p>
        </div>
    `}function R(e){return e==null?"0":Number(e).toLocaleString("en-US")}function ot(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}):"-"}function G(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function nt(e,t=300){let a;return function(...o){clearTimeout(a),a=setTimeout(()=>e.apply(this,o),t)}}function rt(e){let t={leader:{label:"Leader",bg:"from-yellow-500 to-amber-600",text:"text-black"},coLeader:{label:"Co-Leader",bg:"from-purple-500 to-violet-600",text:"text-white"},admin:{label:"Elder",bg:"from-blue-500 to-cyan-600",text:"text-white"},member:{label:"Member",bg:"from-gray-500 to-gray-600",text:"text-white"}},a=t[e]||t.member;return`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${a.bg} ${a.text}">${a.label}</span>`}function Y(e){return e?e.toDate?e.toDate():e.seconds?new Date(e.seconds*1e3):new Date(e):null}async function it(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${k.repeat("statCard",4)}
                </div>
            </div>
        </div>
    `;let[t,a,o]=await Promise.all([y(),z(),H()]),r=t.length,i=[...t].sort((d,u)=>(u.donations||0)-(d.donations||0))[0],n=[...t].sort((d,u)=>(u.trophies||0)-(d.trophies||0))[0],l={};t.forEach(d=>{l[d.tag]=0}),o&&Array.isArray(o)&&o.forEach(d=>{(d.reason&&(d.reason.toLowerCase().includes("3 bintang")||d.reason.toLowerCase().includes("three star")||d.reason.toLowerCase().includes("three_stars")||d.reason.toLowerCase().includes("3-bintang"))||d.category==="war"&&d.amount===15)&&d.memberTag&&l[d.memberTag]!==void 0&&l[d.memberTag]++});let s=null,c=[...t].map(d=>({...d,threeStarCount:l[d.tag]||0})).sort((d,u)=>u.threeStarCount-d.threeStarCount);c[0]&&c[0].threeStarCount>0?s=c[0]:(s=[...t].sort((d,u)=>(u.totalStars||0)-(d.totalStars||0))[0],s&&(s.threeStarCount=s.totalStars||0)),e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-10 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Dashboard
                    </h1>
                    <p class="text-gray-400">Overview statistik dan performa clan</p>
                </div>

                <!-- Stat Cards Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-on-scroll" data-stagger="true">
                    ${ee({icon:"\u{1F465}",label:"Total Members",value:R(r),color:"blue"})}
                    ${ee({icon:"\u{1F381}",label:"Top Donator",value:i?.name||"-",color:"purple",subtitle:`${R(i?.donations||0)} donated`})}
                    ${ee({icon:"\u{1F3C6}",label:"Top Player",value:n?.name||"-",color:"gold",glow:!0,subtitle:`${R(n?.trophies||0)} trophies`})}
                    ${ee({icon:"\u{1F525}",label:"Most Active",value:s?.name||"-",color:"red",subtitle:`${s?.threeStarCount||0} 3-star attacks`})}
                </div>

                <!-- Recent Wars -->
                <div class="mb-12 animate-on-scroll" data-stagger="true">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Recent Wars</h2>
                        <a href="#/wars" class="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                            View All
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${a.slice(0,3).map(d=>Nt(d)).join("")}
                        ${a.length===0?`
                            <div class="col-span-full text-center py-12 text-gray-500">
                                <p class="text-4xl mb-2">\u2694\uFE0F</p>
                                <p>Belum ada data war</p>
                            </div>
                        `:""}
                    </div>
                </div>

                <!-- Top Members Quick View -->
                <div class="animate-on-scroll" data-stagger="true">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Top Members</h2>
                        <a href="#/leaderboard" class="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                            Leaderboard
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${t.filter(d=>d.role!=="leader").slice(0,3).map((d,u)=>Ft(d,u+1)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `}function Nt(e){let t={win:{label:"VICTORY",color:"text-green-400",border:"border-green-500/30",bg:"from-green-500/10 to-transparent"},loss:{label:"DEFEAT",color:"text-red-400",border:"border-red-500/30",bg:"from-red-500/10 to-transparent"},draw:{label:"DRAW",color:"text-gray-400",border:"border-gray-500/30",bg:"from-gray-500/10 to-transparent"}},a=t[e.result]||t.draw,o=e.date?new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-";return`
        <div class="animate-item rounded-2xl border ${a.border} bg-gradient-to-br ${a.bg} backdrop-blur-sm p-5 
                    hover:scale-[1.02] transition-all duration-300 cursor-pointer" onclick="location.hash='#/wars'">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-gray-500">${o}</span>
                <span class="text-xs font-bold ${a.color}">${a.label}</span>
            </div>
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">\u2B50 ${e.clanStars||0}</p>
                    <p class="text-[10px] text-gray-500">${(e.clanDestruction||0).toFixed(1)}%</p>
                </div>
                <span class="text-gray-600 text-sm font-bold">VS</span>
                <div class="text-right">
                    <p class="text-lg font-bold text-white/50" style="font-family: 'Lilita One', cursive;">\u2B50 ${e.opponentStars||0}</p>
                    <p class="text-[10px] text-gray-500 truncate max-w-[100px]">${e.opponent||"?"}</p>
                </div>
            </div>
        </div>
    `}function Ft(e,t){let a=["\u{1F947}","\u{1F948}","\u{1F949}"],o=["text-amber-400","text-gray-300","text-orange-400"];return`
        <div class="animate-item flex items-center gap-4 p-4 rounded-xl border ${["border-amber-500/30","border-gray-400/30","border-orange-500/30"][t-1]} bg-white/5 
                    hover:bg-white/10 transition-all duration-200 cursor-pointer" 
             onclick="location.hash='#/member/${encodeURIComponent(e.tag)}'">
            <span class="text-2xl">${a[t-1]}</span>
            <div class="flex-1 min-w-0">
                <p class="text-white font-medium truncate">${e.name}</p>
                <p class="text-xs text-gray-500">TH${e.townHallLevel||"?"}</p>
            </div>
            <p class="${o[t-1]} font-bold" style="font-family: 'Lilita One', cursive;">
                ${(e.totalPoints||0).toLocaleString()}
            </p>
        </div>
    `}function W(){let e=new IntersectionObserver(t=>{t.forEach(a=>{if(a.isIntersecting){a.target.classList.add("animate-visible");let o=[];a.target.dataset.stagger&&o.push(a.target),a.target.querySelectorAll('[data-stagger="true"]').forEach(r=>{o.push(r)}),o.forEach(r=>{r.querySelectorAll(".animate-item").forEach((n,l)=>{n.style.transitionDelay=`${Math.min(l,8)*100}ms`,n.classList.add("animate-visible")})})}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".animate-on-scroll").forEach(t=>{e.observe(t)}),e}function st(){let e=document.querySelectorAll("[data-parallax]");if(!e.length)return;let t=!1;function a(){t||(requestAnimationFrame(()=>{let o=window.scrollY;e.forEach(r=>{let i=parseFloat(r.dataset.parallax)||.5;r.style.transform=`translateY(${o*i}px)`}),t=!1}),t=!0)}return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)}async function L(e,t){e.style.opacity="0",e.style.transform="translateY(10px)",await new Promise(a=>setTimeout(a,200)),await t(),window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="translateY(0)"}),setTimeout(()=>W(),100)}var ae=[],te=[],$=1,ve=12;async function lt(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="grid gap-4">${k.repeat("memberCard",6)}</div>
            </div>
        </div>
    `,ae=await y(),te=[...ae],$=1,Te(e)}function Te(e){let t=Math.ceil(te.length/ve),a=te.slice(($-1)*ve,$*ve),o=[...new Set(ae.map(s=>s.townHallLevel))].sort((s,c)=>c-s);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Members
                    </h1>
                    <p class="text-gray-400">Daftar anggota clan \xB7 ${ae.length} members</p>
                </div>

                <!-- Filters Bar -->
                <div class="flex flex-col md:flex-row gap-4 mb-8 animate-on-scroll">
                    <!-- Search -->
                    <div class="relative flex-1">
                        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                        <input type="text" id="member-search" placeholder="Search member..." 
                               class="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 
                                      focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all text-sm">
                    </div>

                    <!-- Selects container (grid on mobile, flex on desktop) -->
                    <div class="grid grid-cols-2 md:flex gap-4">
                        <!-- TH Filter -->
                        <select id="filter-th" class="w-full md:w-auto px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm 
                                                      focus:outline-none focus:border-amber-500/50 cursor-pointer md:min-w-[140px] pr-8">
                            <option value="">All Town Hall</option>
                            ${o.map(s=>`<option value="${s}">TH ${s}</option>`).join("")}
                        </select>

                        <!-- Role Filter -->
                        <select id="filter-role" class="w-full md:w-auto px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm 
                                                        focus:outline-none focus:border-amber-500/50 cursor-pointer md:min-w-[140px] pr-8">
                            <option value="">All Roles</option>
                            <option value="leader">Leader</option>
                            <option value="coLeader">Co-Leader</option>
                            <option value="admin">Elder</option>
                            <option value="member">Member</option>
                        </select>
                    </div>
                </div>

                <!-- Members List -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 animate-on-scroll" id="members-list" data-stagger="true">
                    ${a.length>0?a.map(s=>Fe({name:s.name,tag:s.tag,role:s.role,townHallLevel:s.townHallLevel,trophies:s.trophies,donations:s.donations,clanCapital:s.clanCapitalContributions,totalPoints:s.totalPoints,sidePoints:s.sidePoints,onClick:`location.hash='#/member/${encodeURIComponent(s.tag)}'`})).join(""):_("\u{1F465}","Tidak ada member ditemukan","Coba ubah filter pencarian")}
                </div>

                <!-- Pagination -->
                ${t>1?`
                <div class="flex items-center justify-center gap-2 animate-on-scroll" id="pagination">
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${$===1?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${$-1})" ${$===1?"disabled":""}>
                        \u2190 Prev
                    </button>
                    ${Wt($,t)}
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${$===t?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${$+1})" ${$===t?"disabled":""}>
                        Next \u2192
                    </button>
                </div>
                `:""}
            </div>
        </div>
        ${p()}
    `;let r=document.getElementById("member-search"),i=document.getElementById("filter-th"),n=document.getElementById("filter-role"),l=nt(()=>{let s=r?.value.toLowerCase()||"",c=i?.value||"",d=n?.value||"";te=ae.filter(u=>{let v=!s||u.name.toLowerCase().includes(s)||u.tag.toLowerCase().includes(s),b=!c||u.townHallLevel==c,S=!d||u.role===d;return v&&b&&S}),$=1,Te(e)},250);r?.addEventListener("input",l),i?.addEventListener("change",l),n?.addEventListener("change",l),window.__membersPage=s=>{let c=Math.ceil(te.length/ve);s<1||s>c||($=s,Te(e),window.scrollTo({top:0,behavior:"smooth"}))},setTimeout(()=>W(),50)}function Wt(e,t){let a=[],r=Math.max(1,e-Math.floor(2.5)),i=Math.min(t,r+5-1);i-r<4&&(r=Math.max(1,i-5+1));for(let n=r;n<=i;n++)a.push(`
            <button class="w-10 h-10 rounded-xl text-sm font-medium transition-all
                           ${n===e?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}"
                    onclick="window.__membersPage(${n})">
                ${n}
            </button>
        `);return a.join("")}async function dt(e){let t=document.getElementById("page-content");t.innerHTML=`<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${k.profile()}</div></div>`;let a=decodeURIComponent(e),[o,r]=await Promise.all([ze(a),Ve(a)]);if(!o){t.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-5xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F50D}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Member Not Found</h2>
                    <p class="text-gray-500 mb-6">Tag: ${a}</p>
                    <a href="#/members" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Members</a>
                </div>
            </div>
        `;return}let n={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[o.townHallLevel]||"#6b7280",l="",s=o.totalPoints||0;if(o.role==="leader")l=`
            <div class="flex items-center gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div class="text-3xl">\u{1F451}</div>
                <p class="text-gray-300 text-sm leading-relaxed">\u{1F451} Anggota ini adalah <strong>Leader Utama</strong> klan.</p>
            </div>
        `;else if(o.role==="coLeader"){let d=Math.max(0,Math.min(100,s/1500*100)),u="";s<1250?u=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${s}</strong>) di bawah batas minimal Co-Leader (1250). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Elder</strong>.</p>
                    </div>
                </div>
            `:u=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <span class="text-green-400 shrink-0">\u269C\uFE0F</span>
                    <p class="text-gray-300 text-sm leading-relaxed">\u2728 Anggota ini telah mencapai pangkat <strong>Co-Leader</strong> dengan poin maksimal (1500).</p>
                </div>
            `,l=`
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Status Jabatan</p>
                        <p class="text-white font-bold text-lg">Co-Leader (Maksimal)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${s} / 1500 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${d}%">
                    </div>
                </div>
                
                <!-- Status/Rekomendasi Info -->
                ${u}
            </div>
        `}else if(o.role==="admin")if(s<1e3)l=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${s}</strong>) di bawah batas minimal Elder (1000). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Member</strong>.</p>
                    </div>
                </div>
            `;else{let u=Math.max(0,Math.min(100,(s-1250)/250*100)),v=1500-s,b=v<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${s}) telah mencukupi untuk dipromosikan menjadi Co-Leader.`:`Dibutuhkan <strong>${v}</strong> poin lagi untuk naik jabatan menjadi <strong>Co-Leader</strong>.`;l=`
                <div class="space-y-6">
                    <div class="flex justify-between items-end text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                            <p class="text-white font-bold text-lg">Co-Leader</p>
                        </div>
                        <div class="text-right">
                            <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                            <p class="text-amber-400 font-bold text-lg">${s} / 1500 Poin</p>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                        <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                             style="width: ${u}%">
                        </div>
                    </div>
                    
                    <!-- Status Info -->
                    <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span class="text-amber-400">\u{1F4A1}</span>
                        <p class="text-gray-300 text-sm leading-relaxed">${b}</p>
                    </div>
                </div>
            `}else{let u=Math.max(0,Math.min(100,(s-500)/750*100)),v=1250-s,b="";s<300?b=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u{1F6A8}</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Kick</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${s}</strong>) di bawah batas minimal Member (300). Anggota ini direkomendasikan untuk <strong>dikeluarkan (kick) dari klan</strong>.</p>
                    </div>
                </div>
            `:b=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span class="text-amber-400">\u{1F4A1}</span>
                    <p class="text-gray-300 text-sm leading-relaxed">${v<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${s}) telah mencukupi untuk dipromosikan menjadi Elder.`:`Dibutuhkan <strong>${v}</strong> poin lagi untuk naik jabatan menjadi <strong>Elder</strong>.`}</p>
                </div>
            `,l=`
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                        <p class="text-white font-bold text-lg">Elder (Elder/Admin)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${s} / 1250 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${u}%">
                    </div>
                </div>
                
                <!-- Status/Kick Info -->
                ${b}
            </div>
        `}let c=qt(r);t.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Back Button -->
                <a href="#/members" class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-6">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Kembali
                </a>

                <!-- Profile Hero Card -->
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-8 animate-on-scroll">
                    <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shrink-0"
                             style="background: linear-gradient(135deg, ${n}, ${n}99); box-shadow: 0 0 25px ${n}40;">
                            TH${o.townHallLevel||"?"}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 class="text-2xl md:text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    ${o.name}
                                </h1>
                                ${rt(o.role)}
                            </div>
                            <p class="text-gray-500 text-sm mb-3">${o.tag}</p>
                            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span class="flex items-center gap-1.5">\u{1F3C6} ${R(o.trophies)} trophies</span>
                                <span class="flex items-center gap-1.5">\u{1F381} ${R(o.donations)} donated</span>
                            </div>
                        </div>
                        <div class="text-center md:text-right">
                            <p class="text-4xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                                ${R(o.totalPoints||0)}
                            </p>
                            <p class="text-xs text-gray-500 uppercase tracking-wider">Total Points</p>
                            ${o.sidePoints?`
                                <p class="text-xs font-bold text-blue-400 mt-1" style="font-family: 'Lilita One', cursive;">
                                    +${o.sidePoints} Side Points
                                </p>
                            `:""}
                        </div>
                    </div>
                </div>

                <!-- Promotion Requirements Progress Section -->
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-8 animate-on-scroll">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u2B06\uFE0F Keterangan Naik Jabatan
                    </h2>
                    
                    ${l}
                </div>

                <!-- Point History Log Section -->
                ${c}

                <!-- Side Points Explanation Card -->
                <div class="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h3 class="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u{1F48E} Penjelasan Side Points (SP)
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-4">
                        <strong>Side Points (SP)</strong> adalah poin khusus yang mencatat kontribusi ekstra anggota setelah mencapai batas poin pangkat Co-Leader.
                    </p>
                    <ul class="space-y-3 text-xs text-gray-400">
                        <li class="flex items-start gap-2.5">
                            <span class="text-blue-400 font-bold shrink-0">\u{1F4CD}</span>
                            <span><strong>Batas Maksimal Poin:</strong> Poin utama klan dibatasi maksimal hingga <strong>1500 poin</strong> (syarat Co-Leader).</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="text-blue-400 font-bold shrink-0">\u{1F4CD}</span>
                            <span><strong>Akumulasi Otomatis:</strong> Setiap tambahan poin baru yang membuat total poin melebihi 1500 akan secara otomatis dialihkan menjadi <strong>Side Points</strong>.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="text-blue-400 font-bold shrink-0">\u{1F4CD}</span>
                            <span><strong>Tujuan SP:</strong> Digunakan untuk mendokumentasikan performa, loyalitas, dan keaktifan anggota yang sudah berjabatan Co-Leader agar kontribusi mereka tetap dihargai dan terpantau oleh jajaran Leader.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        ${p()}
    `}function qt(e){if(!e||e.length===0)return`
            <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                    \u{1F4CB} Log Poin
                </h2>
                <div class="text-center py-10">
                    <p class="text-4xl mb-3">\u{1F4ED}</p>
                    <p class="text-gray-500 text-sm">Belum ada riwayat poin untuk anggota ini.</p>
                </div>
            </div>
        `;let t=e.map(a=>{let o=a.amount>=0,r=o?"text-green-400":"text-red-400",i=o?"bg-green-500/5 border-green-500/10":"bg-red-500/5 border-red-500/10",n=" Poin",l=o?"bg-green-500/10":"bg-red-500/10",s=o?"+":"",c=o?"\u25B2":"\u25BC";a.category==="side_point"&&(r=o?"text-blue-400":"text-indigo-400",i=o?"bg-blue-500/5 border-blue-500/10":"bg-indigo-500/5 border-indigo-500/10",n=" SP",l=o?"bg-blue-500/10":"bg-indigo-500/10");let d="-";if(a.date){let b=a.date.toDate?a.date.toDate():new Date(a.date);d=b.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})+" "+b.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}let v={war:"\u2694\uFE0F",donation:"\u{1F381}",clan_games:"\u{1F3AE}",cwl:"\u{1F3C5}",penalty:"\u26D4",bonus:"\u{1F31F}",side_point:"\u{1F48E}",other:"\u{1F4CC}"}[a.category]||"\u{1F4CC}";return`
            <div class="flex items-center gap-4 p-4 rounded-xl border ${i} transition-all duration-200 hover:bg-white/5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${l}">
                    ${v}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-white text-sm font-medium truncate">${a.reason||"Tidak ada keterangan"}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <p class="text-gray-500 text-xs">${d}</p>
                        ${a.adminName?`<span class="text-gray-600 text-xs">\u2022 oleh ${a.adminName}</span>`:""}
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <p class="${r} font-bold text-lg" style="font-family: 'Lilita One', cursive;">
                        <span class="text-xs">${c}</span> ${s}${a.amount}${n}
                    </p>
                </div>
            </div>
        `}).join("");return`
        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-white flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                    \u{1F4CB} Log Poin
                </h2>
                <span class="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">${e.length} entri</span>
            </div>
            <div class="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar" style="max-height: 500px; overflow-y: auto;">
                ${t}
            </div>
        </div>
    `}async function ct(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${k.repeat("leaderboardRow",10)}
        </div></div>
    `;let t=await y(),a=await H(),o=t.filter(n=>n.role!=="leader").sort((n,l)=>(l.totalPoints||0)-(n.totalPoints||0)).slice(0,100);if(o.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                ${_("\u{1F3C6}","Belum Ada Data","Leaderboard akan muncul setelah data member tersedia")}
            </div></div>${p()}
        `;return}let r=o.slice(0,3),i=o.slice(3);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        \u{1F3C6} Leaderboard
                    </h1>
                    <p class="text-gray-400">Top ${o.length} members berdasarkan total poin kontribusi</p>
                </div>

                <!-- Top 3 Podium -->
                ${r.length>=3?`
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${C({rank:2,...r[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${C({rank:1,...r[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${C({rank:3,...r[2]})}
                    </div>
                </div>
                `:`
                <div class="grid gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${r.map((n,l)=>C({rank:l+1,...n})).join("")}
                </div>
                `}

                <!-- Rest of Rankings -->
                ${i.length>0?`
                <div class="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Rankings #4 - #${o.length}</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${i.map((n,l)=>C({rank:l+4,...n})).join("")}
                    </div>
                </div>
                `:""}

                <!-- Global Point Log Section -->
                <div class="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">\u{1F4DC} Riwayat Aktivitas Poin Klan</h3>
                    </div>
                    <div class="p-4 space-y-2 max-h-[500px] overflow-y-auto pr-2">
                        ${a.length>0?a.map(n=>{let l=G(Y(n.date)),s=(n.amount||0)>=0,c=s?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30";return`
                            <div class="animate-item flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-white font-medium">${n.memberName||"Unknown"}</span>
                                        <span class="text-[10px] text-gray-500">${n.memberTag||""}</span>
                                        <span class="text-xs text-gray-500">\u2014 ${n.reason||""}</span>
                                    </div>
                                    <p class="text-[10px] text-gray-500 mt-1">Oleh: ${n.adminName||"Admin"} \u2022 ${l}</p>
                                </div>
                                <div class="shrink-0 text-right">
                                    <span class="px-3 py-1 rounded-full text-xs font-bold ${c}" style="font-family: 'Lilita One', cursive;">
                                        ${s?"+":""}${n.amount} Poin
                                    </span>
                                </div>
                            </div>
                            `}).join(""):`
                            <p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>
                        `}
                    </div>
                </div>

            </div>
        </div>
        ${p()}
    `}async function mt(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${k.repeat("warCard",5)}
        </div></div>
    `;let t=await z();if(t.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u2694\uFE0F War History</h1>
                ${_("\u2694\uFE0F","Belum Ada Data War","Data war akan muncul setelah admin menginput hasil war")}
            </div></div>${p()}
        `;return}let a=t.length,o=t.filter(l=>l.result==="win").length,r=t.filter(l=>l.result==="loss").length,i=t.filter(l=>l.result==="draw").length,n=a?Math.round(o/a*100):0;e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        \u2694\uFE0F War History
                    </h1>
                    <p class="text-gray-400">Timeline pertempuran clan</p>
                </div>

                <!-- War Stats Bar -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    <div class="animate-item rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                        <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">${a}</p>
                        <p class="text-xs text-gray-500">Total Wars</p>
                    </div>
                    <div class="animate-item rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-green-400" style="font-family: 'Lilita One', cursive;">${o}</p>
                        <p class="text-xs text-gray-500">Victories</p>
                    </div>
                    <div class="animate-item rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-red-400" style="font-family: 'Lilita One', cursive;">${r}</p>
                        <p class="text-xs text-gray-500">Defeats</p>
                    </div>
                    <div class="animate-item rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">${n}%</p>
                        <p class="text-xs text-gray-500">Win Rate</p>
                    </div>
                </div>

                <!-- Timeline -->
                <div class="relative max-h-[600px] overflow-y-auto pr-2 animate-on-scroll" data-stagger="true">
                    <!-- Timeline Line -->
                    <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-transparent"></div>

                    <div class="space-y-6">
                        ${t.map((l,s)=>{let c=ot(l.date);return`
                                <div class="animate-item relative flex gap-6 md:gap-8">
                                    <!-- Timeline Dot -->
                                    <div class="relative z-10 shrink-0">
                                        <div class="w-3 h-3 mt-7 rounded-full ${{win:"bg-green-500",loss:"bg-red-500",draw:"bg-gray-500"}[l.result]||"bg-gray-500"} ring-4 ring-[#0a0e17]"></div>
                                    </div>
                                    <!-- War Card -->
                                    <div class="flex-1 pb-2">
                                        ${We({date:c,opponent:l.opponent,warSize:l.warSize,result:l.result,clanStars:l.clanStars,opponentStars:l.opponentStars,clanDestruction:l.clanDestruction,opponentDestruction:l.opponentDestruction})}
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `}var J=[];async function ut(){J.forEach(o=>{try{o.destroy()}catch{}}),J=[];let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-7xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${k.repeat("chart",4)}</div>
        </div></div>
    `;let[t,a]=await Promise.all([y(),z()]);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-10 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">\u{1F4CA} Statistics</h1>
                    <p class="text-gray-400">Analisis performa clan secara visual</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Donations Chart -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u{1F381} Top Donators</h3>
                        <div class="h-64"><canvas id="chart-donations"></canvas></div>
                    </div>

                    <!-- War Results -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u2694\uFE0F War Results</h3>
                        <div class="h-64"><canvas id="chart-wars"></canvas></div>
                    </div>

                    <!-- Points Distribution -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u{1F48E} Points Distribution</h3>
                        <div class="h-64"><canvas id="chart-points"></canvas></div>
                    </div>

                    <!-- TH Distribution -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u{1F3E0} Town Hall Distribution</h3>
                        <div class="h-64"><canvas id="chart-th"></canvas></div>
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `,await Ut(),zt(t),Kt(a),Vt(t),Gt(t)}function Ut(){return new Promise(e=>{if(window.Chart){e();return}let t=setInterval(()=>{window.Chart&&(clearInterval(t),e())},100);setTimeout(()=>{clearInterval(t),e()},5e3)})}function zt(e){let t=document.getElementById("chart-donations");if(!t||!window.Chart)return;let a=[...e].sort((r,i)=>(i.donations||0)-(r.donations||0)).slice(0,10),o=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(r=>r.name.substring(0,10)),datasets:[{label:"Donations",data:a.map(r=>r.donations||0),backgroundColor:I.purpleAlpha,borderColor:I.purple,borderWidth:1,borderRadius:8}]},options:pt()});J.push(o)}function Kt(e){let t=document.getElementById("chart-wars");if(!t||!window.Chart)return;let a=e.filter(n=>n.result==="win").length,o=e.filter(n=>n.result==="loss").length,r=e.filter(n=>n.result==="draw").length,i=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:["Victories","Defeats","Draws"],datasets:[{data:[a,o,r],backgroundColor:[I.green,I.red,I.gold],borderColor:"#0a0e17",borderWidth:3,hoverOffset:8}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"65%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:12},padding:16,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},animation:{animateRotate:!0,animateScale:!0,duration:1200}}});J.push(i)}function Vt(e){let t=document.getElementById("chart-points");if(!t||!window.Chart)return;let a=[...e].sort((r,i)=>(i.totalPoints||0)-(r.totalPoints||0)).slice(0,10),o=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(r=>r.name.substring(0,10)),datasets:[{label:"Points",data:a.map(r=>r.totalPoints||0),backgroundColor:I.goldAlpha,borderColor:I.gold,borderWidth:1,borderRadius:8}]},options:{...pt(),indexAxis:"y"}});J.push(o)}function Gt(e){let t=document.getElementById("chart-th");if(!t||!window.Chart)return;let a={};e.forEach(l=>{let s=l.townHallLevel||0;a[s]=(a[s]||0)+1});let o=Object.keys(a).sort((l,s)=>l-s).map(l=>`TH${l}`),r=Object.keys(a).sort((l,s)=>l-s).map(l=>a[l]),i=r.map((l,s)=>`hsl(${s*30+200}, 70%, 55%)`),n=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:o,datasets:[{data:r,backgroundColor:i,borderColor:"#0a0e17",borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"55%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:11},padding:12,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",cornerRadius:12,padding:12}}}});J.push(n)}function pt(){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},scales:{x:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}},y:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}}},animation:{duration:1e3,easing:"easeOutQuart"}}}var Yt=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function gt(){let e=await K(),t=e&&e.rewards?e.rewards:N,a=e&&e.punishments?e.punishments:U,o=e&&e.generalRules?e.generalRules:Yt;return`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        \u{1F4DC} Clan Rules & Point System
                    </h1>
                    <p class="text-gray-400 max-w-xl mx-auto">Sistem poin untuk mengukur kontribusi setiap anggota secara adil dan transparan</p>
                </div>

                <!-- Rewards Section -->
                <div class="mb-12 animate-on-scroll" data-stagger="true">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xl shadow-lg">\u{1F381}</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Rewards</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${t.map(r=>`
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 
                                        bg-gradient-to-br from-green-500/10 to-emerald-600/5 backdrop-blur-sm
                                        hover:from-green-500/20 hover:to-emerald-600/10 hover:border-green-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${r.icon||"\u{1F48E}"}</span>
                                <div class="flex-1">
                                    <p class="text-white font-medium">${r.label}</p>
                                    <p class="text-xs text-gray-500 capitalize">${r.category}</p>
                                </div>
                                <span class="text-lg font-bold text-green-400" style="font-family: 'Lilita One', cursive;">
                                    +${r.points}
                                </span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Punishments Section -->
                <div class="mb-12 animate-on-scroll" data-stagger="true">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-xl shadow-lg">\u26D4</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Punishments</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${a.map(r=>`
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-red-500/20 
                                        bg-gradient-to-br from-red-500/10 to-rose-600/5 backdrop-blur-sm
                                        hover:from-red-500/20 hover:to-rose-600/10 hover:border-red-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${r.icon||"\u26A0\uFE0F"}</span>
                                <div class="flex-1">
                                    <p class="text-white font-medium">${r.label}</p>
                                    <p class="text-xs text-gray-500 capitalize">${r.category}</p>
                                </div>
                                <span class="text-lg font-bold text-red-400" style="font-family: 'Lilita One', cursive;">
                                    ${r.points}
                                </span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- General Rules -->
                <div class="animate-on-scroll">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-xl shadow-lg">\u2696\uFE0F</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">General Rules</h2>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
                        ${o.map((r,i)=>Jt(i+1,r)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `}function Jt(e,t){return`
        <div class="flex items-start gap-4 group">
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/20 
                         flex items-center justify-center text-sm font-bold text-amber-400 shrink-0 
                         group-hover:from-amber-500/30 transition-all">${e}</span>
            <p class="text-gray-300 text-sm leading-relaxed pt-1">${t}</p>
        </div>
    `}var Me=class{constructor(){this.container=null,this.toasts=[],this.init()}init(){this.container||(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="fixed top-20 right-4 z-[9999] flex flex-col gap-3 pointer-events-none",this.container.style.maxWidth="380px",this.container.style.width="100%",document.body.appendChild(this.container))}show(t,a="info",o=4e3){this.init();let r={success:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',error:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',warning:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>',info:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'},i={success:"border-green-500/50 bg-green-500/10",error:"border-red-500/50 bg-red-500/10",warning:"border-amber-500/50 bg-amber-500/10",info:"border-blue-500/50 bg-blue-500/10"},n={success:"text-green-400",error:"text-red-400",warning:"text-amber-400",info:"text-blue-400"},l=document.createElement("div");return l.className=`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ${i[a]} backdrop-blur-xl text-white shadow-2xl toast-enter`,l.innerHTML=`
            <div class="${n[a]}">${r[a]}</div>
            <p class="text-sm font-medium flex-1">${t}</p>
            <button class="text-white/50 hover:text-white transition-colors shrink-0" onclick="this.closest('.toast-enter, .toast-visible').classList.add('toast-exit'); setTimeout(() => this.closest('.toast-enter, .toast-visible, .toast-exit')?.remove(), 300);">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,this.container.appendChild(l),requestAnimationFrame(()=>{l.classList.remove("toast-enter"),l.classList.add("toast-visible")}),o>0&&setTimeout(()=>{l.parentNode&&(l.classList.add("toast-exit"),setTimeout(()=>l.remove(),300))},o),l}success(t,a){return this.show(t,"success",a)}error(t,a){return this.show(t,"error",a)}warning(t,a){return this.show(t,"warning",a)}info(t,a){return this.show(t,"info",a)}},m=new Me;var Be=class{constructor(){this.activeModal=null}show({title:t,content:a,size:o="md",showClose:r=!0,actions:i=[],onClose:n=null}){this.close();let l={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-6xl"},s=document.createElement("div");return s.className="fixed inset-0 z-[9998] flex items-center justify-center p-4",s.id="modal-backdrop",s.innerHTML=`
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop-bg" onclick="window.__modalManager?.close()"></div>
            <div class="relative w-full ${l[o]} modal-content-enter">
                <div class="relative rounded-2xl border border-white/10 bg-[#1a1f2e]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                    ${t?`
                    <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
                        <h3 class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">${t}</h3>
                        ${r?`
                        <button onclick="window.__modalManager?.close()" class="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>`:""}
                    </div>`:""}
                    <div class="px-6 py-5 text-gray-300 max-h-[70vh] overflow-y-auto modal-body">
                        ${a}
                    </div>
                    ${i.length>0?`
                    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                        ${i.map((c,d)=>`
                            <button id="modal-action-${d}" class="${c.class||"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all"}">
                                ${c.label}
                            </button>
                        `).join("")}
                    </div>`:""}
                </div>
            </div>
        `,document.body.appendChild(s),document.body.style.overflow="hidden",i.forEach((c,d)=>{let u=s.querySelector(`#modal-action-${d}`);u&&c.onClick&&u.addEventListener("click",()=>c.onClick(s))}),requestAnimationFrame(()=>{let c=s.querySelector(".modal-content-enter");c&&c.classList.add("modal-content-visible")}),this.activeModal=s,this.onClose=n,this._escHandler=c=>{c.key==="Escape"&&this.close()},document.addEventListener("keydown",this._escHandler),s}confirm({title:t,message:a,confirmLabel:o="Confirm",cancelLabel:r="Cancel",onConfirm:i,onCancel:n,danger:l=!1}){return this.show({title:t||"Konfirmasi",content:`<p class="text-gray-300">${a}</p>`,size:"sm",actions:[{label:r,class:"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all",onClick:()=>{this.close(),n&&n()}},{label:o,class:`px-4 py-2 rounded-xl text-sm font-bold text-white transition-all ${l?"bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700":"bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"}`,onClick:()=>{this.close(),i&&i()}}]})}close(){if(this.activeModal){let t=this.activeModal.querySelector(".modal-content-visible");t&&(t.classList.remove("modal-content-visible"),t.classList.add("modal-content-exit"));let a=this.activeModal;setTimeout(()=>{a.remove(),document.body.style.overflow=""},200),this.activeModal=null}this._escHandler&&document.removeEventListener("keydown",this._escHandler),this.onClose&&(this.onClose(),this.onClose=null)}},D=new Be;window.__modalManager=D;var O=null,j=null,Qt=[];async function bt(){if(!h())return m.warning("Firebase belum dikonfigurasi. Silakan setup Firebase terlebih dahulu."),null;try{let{GoogleAuthProvider:e,signInWithPopup:t}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js"),a=new e,o=await t(F,a);return m.success(`Selamat datang, ${o.user.displayName}!`),o.user}catch(e){return e.code==="auth/popup-closed-by-user"?m.info("Login dibatalkan."):m.error(`Login gagal: ${e.message}`),console.error("Auth error:",e),null}}async function De(){try{let{signOut:e}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js");await e(F),O=null,j=null,m.info("Berhasil logout.")}catch(e){m.error("Logout gagal."),console.error("Sign out error:",e)}}function xt(e){if(!h())return e(null,null),()=>{};let{onAuthStateChanged:t}=F.constructor.prototype;import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js").then(({onAuthStateChanged:a})=>{a(F,async o=>{if(O=o,o){try{await o.reload(),O=F.currentUser}catch(r){console.warn("Failed to reload auth profile:",r)}j=await Xt(O.uid),await Zt(O)}else j=null;e(O,j),Qt.forEach(r=>r(O,j))})})}async function Xt(e){try{let{doc:t,getDoc:a}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),o=await a(t(g,"users",e));return o.exists()&&o.data().role||"member"}catch(t){return console.warn("Error fetching user role:",t),"member"}}async function Zt(e){try{let{doc:t,getDoc:a,setDoc:o,serverTimestamp:r}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),i=t(g,"users",e.uid);if(!(await a(i)).exists())await o(i,{uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL,role:"member",playerTag:"",createdAt:r(),lastLogin:r()});else{let{updateDoc:l}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js");await l(i,{displayName:e.displayName,photoURL:e.photoURL,lastLogin:r()})}}catch(t){console.warn("Error ensuring user doc:",t)}}function E(){return O}function ht(){return j}function M(){return j==="leader"||j==="coleader"}var A=[],B=null,P=new Set;async function ft(){let e=document.getElementById("page-content");if(!M()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses Admin Panel</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}A=await y(),B=await K(),P.clear();let t=B&&B.rewards?B.rewards:N,a=E();e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 animate-on-scroll">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            \u2699\uFE0F Admin Panel
                        </h1>
                        <p class="text-gray-400 text-sm">Kelola poin, war, dan anggota clan</p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <a href="#/admin/landing" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            \u2728 Edit Landing Page
                        </a>
                        <a href="#/admin/sidepoints" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            \u{1F48E} Kelola Side Points
                        </a>
                        <a href="#/admin/layouts" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            \u{1F5FA}\uFE0F Kelola Base Layouts
                        </a>
                        <a href="#/admin/rules" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            \u{1F4DC} Pengaturan Rules
                        </a>
                    </div>
                </div>

                <!-- Admin Sections as Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll" data-stagger="true">
                    
                    <!-- Add/Deduct Points -->
                    <div class="animate-item md:col-span-2 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            \u{1F48E} Kelola Poin
                        </h3>
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- Left Column: Roster List -->
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Daftar Anggota</label>
                                    <input type="text" id="point-member-search" oninput="window.__filterPointMembers()" 
                                           class="admin-input text-xs py-2 px-3 mb-2" placeholder="Cari nama anggota atau tag...">
                                    <div id="point-members-container" class="max-h-[220px] overflow-y-auto border border-white/5 rounded-xl bg-white/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                    <div class="flex gap-3 mt-2">
                                        <button type="button" onclick="window.__selectAllPointMembers(true)" class="text-[10px] text-amber-400 hover:text-amber-300 font-medium">Pilih Semua</button>
                                    </div>
                                </div>

                                <!-- Right Column: Selected list & Reset -->
                                <div>
                                    <div class="flex items-center justify-between mb-1.5">
                                        <label class="block text-xs text-gray-400 font-medium">Anggota Terpilih (<span id="selected-count" class="font-bold text-amber-400">0</span>)</label>
                                        <button type="button" onclick="window.__resetSelectedMembers()" class="text-[10px] text-red-400 hover:text-red-300 font-bold transition-colors">
                                            \u{1F504} Reset / Satukan Lagi
                                        </button>
                                    </div>
                                    <div class="h-[34px] mb-2 hidden md:block"></div>
                                    <div id="point-selected-container" class="max-h-[220px] min-h-[100px] overflow-y-auto border border-amber-500/20 rounded-xl bg-amber-500/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                </div>
                            </div>
                            <!-- Target Selection -->
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5 font-medium">Target Penerima Poin</label>
                                <div class="flex flex-wrap gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01]">
                                    <label class="flex items-center gap-2 text-xs text-white cursor-pointer">
                                        <input type="radio" name="point-target" value="selected" checked class="w-4 h-4 text-amber-500 border-white/10 bg-white/5 focus:ring-amber-500/50">
                                        Anggota Terpilih (Daftar Kanan)
                                    </label>
                                    <label class="flex items-center gap-2 text-xs text-white cursor-pointer">
                                        <input type="radio" name="point-target" value="unselected" class="w-4 h-4 text-amber-500 border-white/10 bg-white/5 focus:ring-amber-500/50">
                                        Anggota Belum Terpilih (Daftar Kiri)
                                    </label>
                                </div>
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
                                    ${t.map(o=>`<option value="${o.points}" data-reason="${o.label}">${o.points>0?"+":""}${o.points} \u2014 ${o.label}</option>`).join("")}
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
                            \u2694\uFE0F Input War
                        </h3>
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">War Size</label>
                                    <select id="war-size" class="admin-select">
                                        ${[5,10,15,20,25,30,40,50].map(o=>`<option value="${o}">${o}v${o}</option>`).join("")}
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5">Result</label>
                                    <select id="war-result" class="admin-select">
                                        <option value="win">Victory \u2705</option>
                                        <option value="loss">Defeat \u274C</option>
                                        <option value="draw">Draw \u2696\uFE0F</option>
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
                            \u26A0\uFE0F Violations & Notes
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Member</label>
                                <select id="viol-member" class="admin-select">${vt()}</select>
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
                            \u{1F451} Role Management
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Member</label>
                                <select id="role-member" class="admin-select">${vt()}</select>
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
                            \u{1F4DC} Kelola Log Poin
                        </h3>
                        
                        <div id="admin-point-logs" class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                            <!-- Loader -->
                            <div class="text-center py-8">
                                <span class="animate-spin text-2xl inline-block">\u23F3</span>
                                <p class="text-xs text-gray-500 mt-2">Memuat data log poin...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        ${p()}
    `,window.__updatePointPresets=oa,window.__fillPointPreset=na,window.__submitPoints=()=>ra(a),window.__submitWar=()=>ia(a),window.__submitViolation=()=>sa(a),window.__submitRole=()=>la(a),window.__loadAdminPointLogs=()=>fe(a),window.__deleteLogEntry=o=>da(o,a),window.__filterPointMembers=ea,window.__selectAllPointMembers=ta,window.__toggleMemberSelection=aa,window.__resetSelectedMembers=wt,setTimeout(()=>{fe(a),oe()},100)}function vt(){return A.map(e=>`<option value="${e.tag}">${e.name} (${e.tag})</option>`).join("")}function oe(){let e=document.getElementById("point-members-container"),t=document.getElementById("point-selected-container"),a=document.getElementById("selected-count");if(!e||!t)return;let o=document.getElementById("point-member-search")?.value.toLowerCase()||"",r=A.filter(n=>!P.has(n.tag));e.innerHTML=r.map(n=>{let s=n.name.toLowerCase().includes(o)||n.tag.toLowerCase().includes(o)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${n.name}" data-tag="${n.tag}" style="display: ${s};">
                <input type="checkbox" value="${n.tag}" onchange="window.__toggleMemberSelection('${n.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${n.name}</p>
                    <p class="text-[10px] text-gray-500">${n.tag} \u2022 TH${n.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${n.totalPoints||0}</span>
                    ${n.sidePoints?`<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${n.sidePoints} SP</span>`:""}
                </div>
            </label>
        `}).join(""),r.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let i=A.filter(n=>P.has(n.tag));t.innerHTML=i.map(n=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${n.tag}" checked onchange="window.__toggleMemberSelection('${n.tag}', false)" class="w-4 h-4 rounded border-amber-500/30 bg-amber-500/10 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-amber-400 font-medium truncate">${n.name}</p>
                    <p class="text-[10px] text-amber-500/60">${n.tag} \u2022 TH${n.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${n.totalPoints||0}</span>
                    ${n.sidePoints?`<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${n.sidePoints} SP</span>`:""}
                </div>
            </label>
        `).join(""),i.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=i.length)}function ea(){oe()}function ta(e){if(e){let t=document.getElementById("point-member-search")?.value.toLowerCase()||"";A.forEach(a=>{P.has(a.tag)||(a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))&&P.add(a.tag)})}else P.clear();oe()}function aa(e,t){t?P.add(e):P.delete(e),oe()}function wt(){P.clear();let e=document.getElementById("point-member-search");e&&(e.value="");let t=document.querySelector('input[name="point-target"][value="selected"]');t&&(t.checked=!0),oe()}function oa(){let e=document.getElementById("point-type")?.value,t=document.getElementById("point-preset-container"),a=document.getElementById("point-preset");if(a)if(e==="manual")t.style.display="none";else{t.style.display="block";let o=B&&B.rewards?B.rewards:N,r=B&&B.punishments?B.punishments:U,i=e==="reward"?o:r;a.innerHTML='<option value="">-- Pilih Preset --</option>'+i.map(n=>`<option value="${n.points}" data-reason="${n.label}">${n.points>0?"+":""}${n.points} \u2014 ${n.label}</option>`).join("")}}function na(){let t=document.getElementById("point-preset")?.selectedOptions[0];if(!t||!t.value)return;let a=document.getElementById("point-amount"),o=document.getElementById("point-reason");a&&(a.value=t.value),o&&(o.value=t.dataset.reason||"")}async function ra(e){let t=document.querySelector('input[name="point-target"]:checked')?.value||"selected",a=[];t==="selected"?a=Array.from(P):a=A.filter(s=>!P.has(s.tag)).map(s=>s.tag);let o=parseInt(document.getElementById("point-amount")?.value),r=document.getElementById("point-reason")?.value,i=document.getElementById("point-category")?.value;if(a.length===0){m.warning(t==="selected"?"Mohon pilih minimal satu anggota di daftar kanan.":"Tidak ada anggota tersisa di daftar kiri.");return}if(isNaN(o)||!r){m.warning("Mohon lengkapi semua field.");return}let n=a.map(s=>A.find(c=>c.tag===s)).filter(Boolean);if(o>0){let s=n.filter(c=>(c.totalPoints||0)+o>1500);if(s.length>0){let c=s.map(d=>d.name).join(", ");m.warning(`Gagal: Penambahan poin akan membuat poin ${c} melebihi batas maksimal 1500. Silakan gunakan menu Kelola Side Points.`);return}}let l=n.map(s=>s.name).join(", ");D.confirm({title:"Konfirmasi Kelola Poin",message:`${o>0?"Tambah":"Kurangi"} <strong>${Math.abs(o)}</strong> poin untuk <strong>${n.length} anggota</strong> (${t==="selected"?"Daftar Kanan":"Daftar Kiri"})?<br><br>Anggota: <i>${l}</i><br><br>Alasan: ${r}`,onConfirm:async()=>{try{for(let s of n)await Pe({memberTag:s.tag,memberName:s.name,amount:o,reason:r,category:i,adminName:e?.displayName||"Admin"});m.success(`Poin berhasil ${o>0?"ditambahkan":"dikurangi"} untuk ${n.length} anggota!`),document.getElementById("point-amount").value="",document.getElementById("point-reason").value="",wt(),fe(e)}catch(s){m.error("Gagal menyimpan poin."),console.error(s)}}})}async function ia(e){let t=parseInt(document.getElementById("war-size")?.value),a=document.getElementById("war-result")?.value,o=document.getElementById("war-opponent")?.value,r=parseInt(document.getElementById("war-our-stars")?.value)||0,i=parseInt(document.getElementById("war-enemy-stars")?.value)||0,n=parseFloat(document.getElementById("war-our-dest")?.value)||0,l=parseFloat(document.getElementById("war-enemy-dest")?.value)||0;if(!o){m.warning("Mohon isi nama lawan.");return}try{await Ke({date:new Date().toISOString(),opponent:o,warSize:t,result:a,clanStars:r,opponentStars:i,clanDestruction:n,opponentDestruction:l,addedBy:e?.displayName||"Admin"}),m.success("Data war berhasil disimpan!"),document.getElementById("war-opponent").value="",document.getElementById("war-our-stars").value="",document.getElementById("war-enemy-stars").value="",document.getElementById("war-our-dest").value="",document.getElementById("war-enemy-dest").value=""}catch(s){m.error("Gagal menyimpan data war."),console.error(s)}}async function sa(e){let t=document.getElementById("viol-member")?.value,a=document.getElementById("viol-type")?.value,o=document.getElementById("viol-desc")?.value,r=parseInt(document.getElementById("viol-points")?.value)||0;if(!t||!o){m.warning("Mohon lengkapi semua field.");return}let i=A.find(n=>n.tag===t);try{await Je({memberTag:t,memberName:i?.name||"Unknown",type:a,description:o,pointsDeducted:r,adminName:e?.displayName||"Admin"}),r>0&&await Pe({memberTag:t,memberName:i?.name||"Unknown",amount:-r,reason:`[${a}] ${o}`,category:"violation",adminName:e?.displayName||"Admin"}),m.success("Violation berhasil dicatat!"),document.getElementById("viol-desc").value="",document.getElementById("viol-points").value=""}catch(n){m.error("Gagal menyimpan violation."),console.error(n)}}async function la(e){let t=document.getElementById("role-member")?.value,a=document.getElementById("role-new")?.value,o=document.getElementById("role-reason")?.value,r=A.find(i=>i.tag===t);if(!t||!a){m.warning("Mohon pilih member dan role.");return}try{await Ye({memberTag:t,memberName:r?.name||"Unknown",fromRole:r?.role||"member",toRole:a,reason:o||"Role updated",adminName:e?.displayName||"Admin"}),m.success(`Role ${r?.name} berhasil diubah ke ${a}!`),document.getElementById("role-reason").value=""}catch(i){m.error("Gagal mengubah role."),console.error(i)}}async function fe(e){let t=document.getElementById("admin-point-logs");if(t)try{let a=await H();if(a.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>';return}t.innerHTML=a.map(o=>{let r=G(Y(o.date)),i=(o.amount||0)>=0,n="",l=" Poin";return o.category==="side_point"?(n=i?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",l=" Side Point"):n=i?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30",`
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-white font-medium">${o.memberName||"Unknown"}</span>
                            <span class="text-[10px] text-gray-500">${o.memberTag||""}</span>
                            <span class="text-xs text-gray-400">\u2014 ${o.reason||""}</span>
                        </div>
                        <p class="text-[10px] text-gray-500 mt-1">Oleh: ${o.adminName||"Admin"} \u2022 ${r}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${n}" style="font-family: 'Lilita One', cursive;">
                            ${i?"+":""}${o.amount}${l}
                        </span>
                        <button onclick="window.__deleteLogEntry('${o.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log Poin">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log poin.</p>'}}async function da(e,t){D.confirm({title:"Hapus Log Poin",message:"Apakah Anda yakin ingin menghapus log poin ini?",onConfirm:async()=>{try{await be(e),m.success("Log poin berhasil dihapus!"),fe(t)}catch(a){console.error(a),m.error("Gagal menghapus log poin.")}}})}var w={rewards:[],punishments:[],generalRules:[]},ca=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function kt(){let e=document.getElementById("page-content");if(!M()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses pengaturan aturan.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
            <div class="animate-spin text-4xl mb-4">\u23F3</div>
            <p class="text-gray-400">Memuat konfigurasi rules...</p>
        </div></div>
    `;try{let t=await K();t?w={rewards:t.rewards||[],punishments:t.punishments||[],generalRules:t.generalRules||[]}:w={rewards:JSON.parse(JSON.stringify(N)),punishments:JSON.parse(JSON.stringify(U)),generalRules:[...ca]}}catch(t){console.error(t),m.error("Gagal mengambil data rules.")}re(e)}function re(e){e.innerHTML=`
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
                            \u2699\uFE0F Rules & Presets Settings
                        </h1>
                        <p class="text-gray-400 text-sm">Sesuaikan poin reward, punishment, dan aturan umum clan</p>
                    </div>
                    <div>
                        <button onclick="window.__saveRulesConfig()" class="px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            \u{1F4BE} Simpan Peraturan
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: General Rules Editor -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u2696\uFE0F General Rules
                            </h2>
                            <div id="general-rules-container" class="space-y-3 mb-4">
                                ${w.generalRules.map((t,a)=>`
                                    <div class="flex items-center gap-2 general-rule-row">
                                        <span class="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs text-amber-400 font-bold shrink-0">${a+1}</span>
                                        <input type="text" class="general-rule-input admin-input text-sm" value="${t}" placeholder="Aturan umum...">
                                        <button onclick="window.__removeGeneralRule(${a})" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors shrink-0">
                                            \u{1F5D1}\uFE0F
                                        </button>
                                    </div>
                                `).join("")}
                            </div>
                            <button onclick="window.__addGeneralRule()" class="w-full py-2.5 rounded-xl border border-dashed border-white/20 text-xs font-medium text-gray-400 hover:text-white hover:border-white/40 transition-colors">
                                \u2795 Tambah Aturan Umum
                            </button>
                        </div>
                    </div>

                    <!-- Right: Rewards & Punishments Presets Editor -->
                    <div class="lg:col-span-7 space-y-8">
                        <!-- Rewards -->
                        <div class="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-600/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u{1F381} Point Rewards Presets
                            </h2>
                            <div id="rewards-container" class="space-y-4 mb-4">
                                ${w.rewards.map((t,a)=>yt(a,t,"reward")).join("")}
                            </div>
                            <button onclick="window.__addPreset('reward')" class="w-full py-2.5 rounded-xl border border-dashed border-green-500/20 text-xs font-medium text-green-400 hover:text-green-300 hover:border-green-500/40 transition-colors">
                                \u2795 Tambah Preset Reward
                            </button>
                        </div>

                        <!-- Punishments -->
                        <div class="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-rose-600/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u26D4 Point Punishments Presets
                            </h2>
                            <div id="punishments-container" class="space-y-4 mb-4">
                                ${w.punishments.map((t,a)=>yt(a,t,"punishment")).join("")}
                            </div>
                            <button onclick="window.__addPreset('punishment')" class="w-full py-2.5 rounded-xl border border-dashed border-red-500/20 text-xs font-medium text-red-400 hover:text-red-300 hover:border-red-500/40 transition-colors">
                                \u2795 Tambah Preset Punishment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `,window.__addGeneralRule=()=>{ne(),w.generalRules.push(""),re(e)},window.__removeGeneralRule=t=>{ne(),w.generalRules.splice(t,1),re(e)},window.__addPreset=t=>{ne(),(t==="reward"?w.rewards:w.punishments).push({id:`${t}_${Date.now()}`,label:"",points:t==="reward"?10:-10,icon:t==="reward"?"\u2B50":"\u274C",category:"war"}),re(e)},window.__removePreset=(t,a)=>{ne(),(a==="reward"?w.rewards:w.punishments).splice(t,1),re(e)},window.__saveRulesConfig=async()=>{if(ne(),w.generalRules.some(o=>!o.trim())){m.warning("Teks aturan umum tidak boleh kosong.");return}let t=w.rewards.some(o=>!o.label.trim()||isNaN(o.points)),a=w.punishments.some(o=>!o.label.trim()||isNaN(o.points));if(t||a){m.warning("Semua label preset harus diisi dan poin harus berupa angka.");return}try{await Xe(w),m.success("Rules & presets berhasil disimpan ke database!")}catch(o){console.error(o),m.error("Gagal menyimpan rules.")}}}function yt(e,t,a){let o=a==="reward";return`
        <div class="preset-row grid grid-cols-12 gap-3 p-4 bg-white/5 border border-white/5 rounded-xl items-center relative group" data-type="${a}">
            <div class="col-span-2">
                <label class="block text-[10px] text-gray-500 mb-1">Icon</label>
                <input type="text" class="preset-icon-input admin-input text-center text-sm px-1" value="${t.icon||""}" placeholder="Emoji">
            </div>
            <div class="col-span-5">
                <label class="block text-[10px] text-gray-500 mb-1">Label / Nama Preset</label>
                <input type="text" class="preset-label-input admin-input text-sm" value="${t.label||""}" placeholder="Contoh: Ikut War">
            </div>
            <div class="col-span-2">
                <label class="block text-[10px] text-gray-500 mb-1">Poin</label>
                <input type="number" class="preset-points-input admin-input text-center text-sm px-1" value="${t.points}" placeholder="Poin">
            </div>
            <div class="col-span-3 flex items-end gap-2">
                <div class="flex-1 min-w-0">
                    <label class="block text-[10px] text-gray-500 mb-1">Kategori</label>
                    <select class="preset-category-input admin-select text-xs py-2.5">
                        <option value="war" ${t.category==="war"?"selected":""}>War</option>
                        <option value="donation" ${t.category==="donation"?"selected":""}>Donation</option>
                        <option value="clangames" ${t.category==="clangames"?"selected":""}>Games</option>
                        <option value="cwl" ${t.category==="cwl"?"selected":""}>CWL</option>
                        <option value="capital" ${t.category==="capital"?"selected":""}>Capital</option>
                        <option value="violation" ${t.category==="violation"?"selected":""}>Violation</option>
                        <option value="activity" ${t.category==="activity"?"selected":""}>Activity</option>
                    </select>
                </div>
                <button onclick="window.__removePreset(${e}, '${a}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors shrink-0 mb-[1px]">
                    \u{1F5D1}\uFE0F
                </button>
            </div>
        </div>
    `}function ne(){let e=document.querySelectorAll(".general-rule-input");w.generalRules=Array.from(e).map(r=>r.value);let t=document.querySelectorAll(".preset-row"),a=[],o=[];t.forEach((r,i)=>{let n=r.dataset.type,l=r.querySelector(".preset-icon-input")?.value||"",s=r.querySelector(".preset-label-input")?.value||"",c=parseInt(r.querySelector(".preset-points-input")?.value)||0,d=r.querySelector(".preset-category-input")?.value||"war",u={id:`${n}_${i}_${Date.now()}`,icon:l,label:s,points:c,category:d};n==="reward"?a.push(u):o.push(u)}),w.rewards=a,w.punishments=o}var ie={heroTitle:"",heroDescription:""};async function Lt(){let e=document.getElementById("page-content");if(!M()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses pengaturan landing page.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
            <div class="animate-spin text-4xl mb-4">\u23F3</div>
            <p class="text-gray-400">Memuat konfigurasi landing page...</p>
        </div></div>
    `;try{ie=await xe()}catch(t){console.error(t),m.error("Gagal mengambil data landing page.")}ma(e)}function ma(e){e.innerHTML=`
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
                            \u2728 Landing Page Settings
                        </h1>
                        <p class="text-gray-400 text-sm">Kustomisasi teks dan judul pada halaman utama (Hero Section)</p>
                    </div>
                    <div>
                        <button onclick="window.__saveLandingConfig()" class="px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            \u{1F4BE} Simpan Perubahan
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Form Editor -->
                    <div class="lg:col-span-6 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u270D\uFE0F Edit Konten Hero
                            </h2>
                            
                            <div class="space-y-5">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Title (HTML Diperbolehkan)</label>
                                    <textarea id="hero-title-input" rows="4" class="admin-input font-mono text-sm leading-relaxed" 
                                              placeholder="Masukkan judul hero...">${ie.heroTitle||""}</textarea>
                                    <div class="mt-2 text-xs text-gray-500 space-y-1">
                                        <p>\u{1F4A1} Gunakan kelas gradient untuk efek warna premium:</p>
                                        <p class="font-mono text-amber-400">&lt;span class="hero-title-gradient"&gt;Teks Anda&lt;/span&gt;</p>
                                        <p class="font-mono text-yellow-400">&lt;span class="hero-title-gradient-2"&gt;Teks Anda&lt;/span&gt;</p>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Description / Subtitle</label>
                                    <textarea id="hero-desc-input" rows="4" class="admin-input text-sm leading-relaxed" 
                                              placeholder="Masukkan deskripsi hero...">${ie.heroDescription||""}</textarea>
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
                                <!-- Badge -->
                                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 scale-90">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                    <span class="text-xs text-gray-300">Clan Management System</span>
                                </div>

                                <!-- Dynamic Preview Title -->
                                <h1 id="preview-title" class="text-3xl md:text-4xl font-bold mb-4 leading-tight" style="font-family: 'Lilita One', cursive;">
                                    ${ie.heroTitle||""}
                                </h1>

                                <!-- Dynamic Preview Description -->
                                <p id="preview-desc" class="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                                    ${ie.heroDescription||""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `;let t=document.getElementById("hero-title-input"),a=document.getElementById("hero-desc-input"),o=document.getElementById("preview-title"),r=document.getElementById("preview-desc");t&&o&&t.addEventListener("input",()=>{o.innerHTML=t.value||'<span class="text-gray-600">[Judul Kosong]</span>'}),a&&r&&a.addEventListener("input",()=>{r.textContent=a.value||"[Deskripsi Kosong]"}),window.__saveLandingConfig=async()=>{let i=t?.value.trim(),n=a?.value.trim();if(!i||!n){m.warning("Teks judul dan deskripsi tidak boleh kosong.");return}try{await Ze({heroTitle:i,heroDescription:n}),m.success("Landing page settings berhasil disimpan!")}catch(l){console.error(l),m.error("Gagal menyimpan landing page settings.")}}}var q=[],T=new Set;async function $t(){let e=document.getElementById("page-content");if(!M()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses halaman Kelola Side Points</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}q=await y(),T.clear();let t=E();e.innerHTML=`
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
                            \u{1F48E} Kelola Side Points
                        </h1>
                        <p class="text-gray-400 text-sm">Kelola poin cadangan (side points) secara manual untuk anggota klan</p>
                    </div>
                </div>

                <!-- Input Side Points Card -->
                <div class="grid grid-cols-1 gap-6 animate-on-scroll">
                    <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            \u{1F48E} Input Side Points
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
                                            \u{1F504} Reset / Satukan Lagi
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
                            \u{1F4DC} Log Riwayat Side Points
                        </h3>
                        
                        <div id="admin-sidepoint-logs" class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                            <!-- Loader -->
                            <div class="text-center py-8">
                                <span class="animate-spin text-2xl inline-block">\u23F3</span>
                                <p class="text-xs text-gray-500 mt-2">Memuat data log...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `,window.__filterSideMembers=ua,window.__selectAllSideMembers=pa,window.__toggleSideMemberSelection=ga,window.__resetSideSelectedMembers=St,window.__fillSidePreset=ba,window.__submitSidePoints=()=>xa(t),window.__deleteLogEntry=a=>ha(a,t),setTimeout(()=>{Ee(t),Q()},100)}function Q(){let e=document.getElementById("side-members-container"),t=document.getElementById("side-selected-container"),a=document.getElementById("side-selected-count");if(!e||!t)return;let o=document.getElementById("side-member-search")?.value.toLowerCase()||"",r=q.filter(n=>!T.has(n.tag));e.innerHTML=r.map(n=>{let s=n.name.toLowerCase().includes(o)||n.tag.toLowerCase().includes(o)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${n.name}" data-tag="${n.tag}" style="display: ${s};">
                <input type="checkbox" value="${n.tag}" onchange="window.__toggleSideMemberSelection('${n.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${n.name}</p>
                    <p class="text-[10px] text-gray-500">${n.tag} \u2022 TH${n.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${n.totalPoints||0}</span>
                    ${n.sidePoints?`<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${n.sidePoints} SP</span>`:""}
                </div>
            </label>
        `}).join(""),r.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let i=q.filter(n=>T.has(n.tag));t.innerHTML=i.map(n=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${n.tag}" checked onchange="window.__toggleSideMemberSelection('${n.tag}', false)" class="w-4 h-4 rounded border-blue-500/30 bg-blue-500/10 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-blue-400 font-medium truncate">${n.name}</p>
                    <p class="text-[10px] text-blue-500/60">${n.tag} \u2022 TH${n.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${n.totalPoints||0}</span>
                    ${n.sidePoints?`<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${n.sidePoints} SP</span>`:""}
                </div>
            </label>
        `).join(""),i.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=i.length)}function ua(){Q()}function pa(e){if(e){let t=document.getElementById("side-member-search")?.value.toLowerCase()||"";q.forEach(a=>{T.has(a.tag)||(a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))&&T.add(a.tag)})}else T.clear();Q()}function ga(e,t){t?T.add(e):T.delete(e),Q()}function St(){T.clear();let e=document.getElementById("side-member-search");e&&(e.value="");let t=document.querySelector('input[name="side-point-target"][value="selected"]');t&&(t.checked=!0),Q()}function ba(){let e=document.getElementById("side-preset");if(!e||!e.value)return;let t=document.getElementById("side-amount");t&&(t.value=e.value)}async function xa(e){let t=document.querySelector('input[name="side-point-target"]:checked')?.value||"selected",a=[];t==="selected"?a=Array.from(T):a=q.filter(l=>!T.has(l.tag)).map(l=>l.tag);let o=parseInt(document.getElementById("side-amount")?.value),r=document.getElementById("side-reason")?.value;if(a.length===0){m.warning(t==="selected"?"Mohon pilih minimal satu anggota di daftar kanan.":"Tidak ada anggota tersisa di daftar kiri.");return}if(isNaN(o)||!r){m.warning("Mohon lengkapi semua field.");return}let i=a.map(l=>q.find(s=>s.tag===l)).filter(Boolean),n=i.map(l=>l.name).join(", ");D.confirm({title:"Konfirmasi Kelola Side Points",message:`Apakah Anda yakin ingin ${o>0?"menambah":"mengurangi"} <strong>${Math.abs(o)}</strong> side points untuk <strong>${i.length} anggota</strong> (${t==="selected"?"Daftar Kanan":"Daftar Kiri"})?<br><br>Anggota: <i>${n}</i><br><br>Alasan: ${r}`,onConfirm:async()=>{try{for(let l of i)await Ge({memberTag:l.tag,memberName:l.name,amount:o,reason:r,category:"side_point",adminName:e?.displayName||"Admin"});m.success(`Side points berhasil ${o>0?"ditambahkan":"dikurangi"} untuk ${i.length} anggota!`),document.getElementById("side-amount").value="",document.getElementById("side-reason").value="",document.getElementById("side-preset").value="",St(),q=await y(),Q(),Ee(e)}catch(l){m.error("Gagal menyimpan side points."),console.error(l)}}})}async function Ee(e){let t=document.getElementById("admin-sidepoint-logs");if(t)try{let o=(await H()).filter(r=>r.category==="side_point");if(o.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan side points.</p>';return}t.innerHTML=o.map(r=>{let i=G(Y(r.date)),n=(r.amount||0)>=0,l=n?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30";return`
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-white font-medium">${r.memberName||"Unknown"}</span>
                            <span class="text-[10px] text-gray-500">${r.memberTag||""}</span>
                            <span class="text-xs text-gray-400">\u2014 ${r.reason||""}</span>
                        </div>
                        <p class="text-[10px] text-gray-500 mt-1">Oleh: ${r.adminName||"Admin"} \u2022 ${i}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${l}" style="font-family: 'Lilita One', cursive;">
                            ${n?"+":""}${r.amount} Side Point
                        </span>
                        <button onclick="window.__deleteLogEntry('${r.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log side points.</p>'}}async function ha(e,t){D.confirm({title:"Hapus Log Side Points",message:"Apakah Anda yakin ingin menghapus log side points ini? Tindakan ini tidak mengembalikan nilai side points anggota.",onConfirm:async()=>{try{await be(e),m.success("Log side points berhasil dihapus!"),Ee(t)}catch(a){console.error(a),m.error("Gagal menghapus log.")}}})}async function Ct(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${k.repeat("statCard",6)}
                </div>
            </div>
        </div>
    `;let t=await V();e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 animate-on-scroll">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            \u{1F5FA}\uFE0F Base Layouts
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
        ${p()}
    `;let a="all";window.__filterLayouts=()=>{let i=document.getElementById("layout-search")?.value.toLowerCase()||"",n=document.getElementById("layouts-grid");if(!n)return;let l=t.filter(s=>{let c=s.title.toLowerCase().includes(i),d=a==="all"||parseInt(s.townHallLevel)===parseInt(a);return c&&d});if(l.length===0){n.innerHTML=`
                <div class="col-span-full py-16">
                    ${_("\u{1F5FA}\uFE0F","Layout Tidak Ditemukan","Cobalah mengubah filter atau pencarian Anda.")}
                </div>
            `;return}n.innerHTML=l.map(s=>{let d={15:"from-blue-500 to-indigo-600",16:"from-purple-500 to-indigo-700",17:"from-amber-500 to-yellow-600"}[s.townHallLevel]||"from-gray-600 to-gray-700";return`
                <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden 
                            hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:scale-[1.02] flex flex-col">
                    <!-- Preview Image -->
                    <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-800 shrink-0">
                        <img src="${s.imageUrl||"assets/images/base-placeholder.png"}" 
                             alt="${s.title}" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600'">
                        <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${d} shadow-md">
                            TH ${s.townHallLevel}
                        </span>
                    </div>

                    <!-- Details -->
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div class="mb-5">
                            <h3 class="text-white font-bold text-lg leading-snug line-clamp-2">${s.title}</h3>
                            <p class="text-xs text-gray-500 mt-1.5">Diposting: ${new Date(s.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}</p>
                        </div>

                        <!-- CTA Actions -->
                        <div class="flex gap-2">
                            <a href="${s.link}" target="_blank" 
                               class="flex-1 py-3 px-4 rounded-xl text-center text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10">
                                \u2694\uFE0F Copy Base
                            </a>
                            <button onclick="window.__shareLayout('${s.link}')" 
                                    class="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors" 
                                    title="Salin Link">
                                \u{1F517}
                            </button>
                        </div>
                    </div>
                </div>
            `}).join("")},window.__shareLayout=i=>{navigator.clipboard.writeText(i).then(()=>{m.success("Link layout base berhasil disalin ke clipboard!")}).catch(n=>{m.error("Gagal menyalin link.")})},window.__setTHFilter=i=>{a=i,document.querySelectorAll(".th-filter-btn").forEach(l=>{l.dataset.th===i?l.className="th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-black bg-amber-500 transition-all shadow-md":l.className="th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"}),window.__filterLayouts()};let o=Array.from(new Set(t.map(i=>parseInt(i.townHallLevel)))).sort((i,n)=>n-i),r=document.getElementById("th-filters-container");r&&(r.innerHTML=`
            <button onclick="window.__setTHFilter('all')" data-th="all"
                    class="th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-black bg-amber-500 transition-all shadow-md">
                Semua TH
            </button>
            `+o.map(i=>`
                <button onclick="window.__setTHFilter('${i}')" data-th="${i}"
                        class="th-filter-btn px-4 py-2 rounded-xl text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    TH ${i}
                </button>
            `).join("")),window.__filterLayouts()}var se=[];async function Pt(){let e=document.getElementById("page-content");if(!M()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengelola base layout klan.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
            <div class="animate-spin text-4xl mb-4">\u23F3</div>
            <p class="text-gray-400">Memuat data base klan...</p>
        </div></div>
    `;try{se=await V()}catch(t){console.error(t),m.error("Gagal memuat layouts.")}va(e)}function va(e){let t=E();e.innerHTML=`
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
                            \u{1F5FA}\uFE0F Kelola Base Layouts
                        </h1>
                        <p class="text-gray-400 text-sm">Tambah, hapus, dan kelola database layout base klan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Add New Layout Form -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 backdrop-blur-sm">
                            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u2795 Tambah Base Baru
                            </h2>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Judul Base / Deskripsi</label>
                                    <input type="text" id="layout-form-title" class="admin-input" placeholder="Contoh: TH16 War Base Anti 3-Star">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Level Town Hall</label>
                                    <select id="layout-form-th" class="admin-select">
                                        ${Array.from({length:17},(a,o)=>17-o).map(a=>`
                                            <option value="${a}">Town Hall ${a}</option>
                                        `).join("")}
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
                                \u{1F4DC} Daftar Base Aktif
                            </h2>
                            <div id="admin-layouts-list" class="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                <!-- Rendered dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `,window.__submitNewLayout=()=>fa(t,e),window.__deleteLayout=a=>wa(a,t,e),Ae()}function Ae(){let e=document.getElementById("admin-layouts-list");if(e){if(se.length===0){e.innerHTML='<p class="text-center text-gray-500 text-sm py-8">Belum ada layout base klan.</p>';return}e.innerHTML=se.map(t=>`
        <div class="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
            <img src="${t.imageUrl}" alt="" class="w-14 h-14 rounded-lg object-cover bg-slate-800 shrink-0"
                 onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'">
            <div class="flex-1 min-w-0">
                <p class="text-white font-medium text-sm truncate">${t.title}</p>
                <div class="flex items-center gap-2 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-blue-500">TH ${t.townHallLevel}</span>
                    <span class="text-[10px] text-gray-500">Oleh Admin</span>
                </div>
            </div>
            <div class="flex gap-2 shrink-0">
                <a href="${t.link}" target="_blank" class="p-2 text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors" title="Uji Coba Link">
                    \u{1F441}\uFE0F
                </a>
                <button onclick="window.__deleteLayout('${t.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors" title="Hapus Base">
                    \u{1F5D1}\uFE0F
                </button>
            </div>
        </div>
    `).join("")}}async function fa(e,t){let a=document.getElementById("layout-form-title")?.value.trim(),o=parseInt(document.getElementById("layout-form-th")?.value),r=document.getElementById("layout-form-link")?.value.trim(),i=document.getElementById("layout-form-image")?.value.trim();if(!a||!r||!i){m.warning("Mohon isi seluruh kolom input.");return}if(!r.startsWith("http://")&&!r.startsWith("https://")){m.warning("Tautan Salin Base harus berupa URL valid.");return}try{await et({title:a,townHallLevel:o,link:r,imageUrl:i,addedBy:e?.displayName||"Admin"}),m.success("Layout base berhasil ditambahkan!"),se=await V(),document.getElementById("layout-form-title").value="",document.getElementById("layout-form-link").value="",document.getElementById("layout-form-image").value="",Ae()}catch(n){console.error(n),m.error("Gagal menambahkan layout.")}}async function wa(e,t,a){D.confirm({title:"Hapus Layout Base",message:"Apakah Anda yakin ingin menghapus layout base ini dari daftar?",onConfirm:async()=>{try{await tt(e),m.success("Layout base berhasil dihapus!"),se=await V(),Ae()}catch(o){console.error(o),m.error("Gagal menghapus layout.")}}})}var le=[{id:"theme_war",name:"Combat Planning (War)",url:"assets/audio/theme_war.mp3"},{id:"theme_classic",name:"Classic Clash Theme",url:"assets/audio/theme_classic.mp3"}];function Tt(){if(document.getElementById("music-player-container"))return;let e=localStorage.getItem("sl_music_track")||le[0].id,t=parseFloat(localStorage.getItem("sl_music_volume")??"0.4"),a=localStorage.getItem("sl_music_playing")!=="false",o=le.find(x=>x.id===e)||le[0],r=new Audio(o.url);r.loop=!0,r.volume=t;let i=document.createElement("div");i.id="music-player-container",i.className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 sm:gap-3 bg-[#111827]/90 border border-white/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:border-amber-500/30 group",i.innerHTML=`
        <!-- Spinning Disc/Visualizer -->
        <div id="music-disc" class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg relative cursor-pointer transition-transform duration-300 hover:scale-110">
            <span class="text-xs sm:text-sm">\u{1F3B5}</span>
            <!-- Bouncing equalizer bars (visible only when playing) -->
            <div id="music-eq" class="absolute inset-0 flex items-end justify-center gap-[2px] p-2 bg-black/40 rounded-full opacity-0 transition-opacity duration-300">
                <span class="w-[2px] sm:w-[3px] bg-amber-400 rounded-t eq-bar eq-bar-1" style="height: 40%"></span>
                <span class="w-[2px] sm:w-[3px] bg-amber-400 rounded-t eq-bar eq-bar-2" style="height: 70%"></span>
                <span class="w-[2px] sm:w-[3px] bg-amber-400 rounded-t eq-bar eq-bar-3" style="height: 50%"></span>
            </div>
        </div>

        <!-- Info & Controls (Hidden on mobile) -->
        <div class="hidden sm:flex flex-col min-w-[80px] sm:min-w-[120px] max-w-[160px]">
            <span id="track-name" class="text-[10px] font-bold text-amber-400 uppercase tracking-wider truncate">${o.name}</span>
            <span class="text-[10px] text-gray-400 truncate">Background Music</span>
        </div>

        <!-- Controls Section -->
        <div class="flex items-center gap-1.5 sm:gap-2 sm:border-l sm:border-white/10 sm:pl-3">
            <!-- Play/Pause -->
            <button id="music-play-btn" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-105">
                <svg id="play-icon" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                </svg>
                <svg id="pause-icon" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-200 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/>
                </svg>
            </button>

            <!-- Volume Control Container (Slides out on hover - Desktop Only) -->
            <div class="hidden md:flex items-center gap-1.5 relative overflow-hidden w-6 hover:w-24 transition-all duration-300 ease-out group/volume h-8">
                <!-- Volume Icon -->
                <button id="music-volume-btn" class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white shrink-0">
                    <svg id="volume-icon" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                    </svg>
                    <svg id="mute-icon" class="w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zm12.364-5.464L15.464 12m0 0l2.364 2.364m-2.364-2.364l2.364-2.364m-2.364 2.364l-2.364 2.364"/>
                    </svg>
                </button>
                <!-- Volume Input Slider -->
                <input id="music-volume-slider" type="range" min="0" max="1" step="0.05" value="${t}" 
                       class="w-14 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none shrink-0">
            </div>

            <!-- Track Switcher -->
            <div class="relative">
                <button id="music-track-btn" class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors" title="Change Track">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                </button>
                <!-- Track Dropdown Menu -->
                <div id="music-track-dropdown" class="absolute bottom-12 left-0 sm:left-auto sm:right-0 hidden bg-[#1a1f2e] border border-white/10 rounded-xl shadow-xl p-2 w-48 text-left transition-all duration-300 z-[60]">
                    <p class="text-[9px] font-bold text-gray-500 uppercase tracking-wider px-2 py-1 border-b border-white/5 mb-1">Pilih Musik Latar</p>
                    ${le.map(x=>`
                        <button data-track-id="${x.id}" class="w-full text-left px-2 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between text-gray-300 hover:bg-white/5 hover:text-white ${x.id===e?"text-amber-400 font-bold bg-white/5":""}">
                            <span class="truncate">${x.name}</span>
                            ${x.id===e?'<span class="text-[10px]">\u2714</span>':""}
                        </button>
                    `).join("")}
                </div>
            </div>
        </div>
        
        <!-- Welcome Tooltip (Autoplay Helper) -->
        <div id="music-tooltip" class="absolute -top-12 left-0 right-0 mx-auto w-max px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-[11px] font-bold shadow-lg pointer-events-none opacity-0 translate-y-2 transition-all duration-500">
            \u{1F50A} Musik Latar Siap Bermain!
            <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-yellow-600"></div>
        </div>
    `,document.body.appendChild(i);let n=document.getElementById("music-disc"),l=document.getElementById("music-eq"),s=document.getElementById("music-play-btn"),c=document.getElementById("play-icon"),d=document.getElementById("pause-icon"),u=document.getElementById("music-volume-btn"),v=document.getElementById("volume-icon"),b=document.getElementById("mute-icon"),S=document.getElementById("music-volume-slider"),Et=document.getElementById("music-track-btn"),X=document.getElementById("music-track-dropdown"),ce=document.getElementById("music-tooltip"),At=document.getElementById("track-name");function Z(x){a=x,localStorage.setItem("sl_music_playing",x),x?(r.play().catch(_e=>{console.log("Autoplay blocked by browser. Waiting for interaction.")}),c.classList.add("hidden"),d.classList.remove("hidden"),n.classList.add("animate-[spin_6s_linear_infinite]"),l.classList.remove("opacity-0"),l.classList.add("opacity-100")):(r.pause(),c.classList.remove("hidden"),d.classList.add("hidden"),n.classList.remove("animate-[spin_6s_linear_infinite]"),l.classList.remove("opacity-100"),l.classList.add("opacity-0"))}function me(x){t=parseFloat(x),r.volume=t,S.value=t,localStorage.setItem("sl_music_volume",t),t===0?(v.classList.add("hidden"),b.classList.remove("hidden")):(b.classList.add("hidden"),v.classList.remove("hidden"))}s.addEventListener("click",()=>{Z(!a),ce.classList.remove("opacity-100","translate-y-0"),ce.classList.add("opacity-0","translate-y-2")}),n.addEventListener("click",()=>{Z(!a),ce.classList.remove("opacity-100","translate-y-0"),ce.classList.add("opacity-0","translate-y-2")}),S.addEventListener("input",x=>{me(x.target.value)});let He=t||.4;u.addEventListener("click",()=>{r.volume>0?(He=r.volume,me(0)):me(He)}),Et.addEventListener("click",x=>{x.stopPropagation(),X.classList.toggle("hidden")}),document.addEventListener("click",()=>{X.classList.add("hidden")}),X.querySelectorAll("button[data-track-id]").forEach(x=>{x.addEventListener("click",_e=>{_e.stopPropagation();let we=x.getAttribute("data-track-id"),ye=le.find(ke=>ke.id===we);if(ye){e=we,localStorage.setItem("sl_music_track",we);let ke=a;r.src=ye.url,At.textContent=ye.name,X.querySelectorAll("button[data-track-id]").forEach(Re=>{Re.classList.remove("text-amber-400","font-bold","bg-white/5");let $e=Re.querySelector("span:last-child");$e&&$e.textContent==="\u2714"&&$e.remove()}),x.classList.add("text-amber-400","font-bold","bg-white/5");let Le=document.createElement("span");Le.className="text-[10px]",Le.textContent="\u2714",x.appendChild(Le),X.classList.add("hidden"),ke&&Z(!0)}})}),me(t);let It=()=>{a&&r.paused&&r.play().then(()=>{Z(!0)}).catch(x=>{console.log("Autoplay check:",x)})};["click","scroll","mousemove","keydown","touchstart"].forEach(x=>{document.addEventListener(x,It,{once:!0,passive:!0})}),a&&Z(!0)}if(!document.getElementById("music-eq-styles")){let e=document.createElement("style");e.id="music-eq-styles",e.textContent=`
        .eq-bar {
            animation: bounce 0.8s ease-in-out infinite alternate;
            transform-origin: bottom;
        }
        .eq-bar-1 { animation-delay: 0.1s; }
        .eq-bar-2 { animation-delay: 0.3s; }
        .eq-bar-3 { animation-delay: 0.5s; }
        @keyframes bounce {
            0% { transform: scaleY(0.3); }
            100% { transform: scaleY(1); }
        }
    `,document.head.appendChild(e)}var Mt=null,Bt="",ya={"/":{render:La,title:"Home"},"/dashboard":{render:$a,title:"Dashboard"},"/members":{render:Sa,title:"Members"},"/leaderboard":{render:Pa,title:"Leaderboard"},"/wars":{render:Ta,title:"War History"},"/statistics":{render:Ma,title:"Statistics"},"/layouts":{render:Ha,title:"Base Layouts"},"/rules":{render:Ba,title:"Clan Rules"},"/admin":{render:Da,title:"Admin Panel"},"/admin/rules":{render:Ea,title:"Rules Settings"},"/admin/landing":{render:Aa,title:"Landing Settings"},"/admin/sidepoints":{render:Ia,title:"Manage Side Points"},"/admin/layouts":{render:_a,title:"Manage Base Layouts"},"/login":{render:Ra,title:"Login"}};document.addEventListener("DOMContentLoaded",()=>{ka()});async function ka(){Mt=new ue("particles-canvas"),Mt.start(),Tt(),xt((e,t)=>{de(),e&&Ie()==="/login"&&(window.location.hash="#/dashboard")}),Dt(),window.addEventListener("hashchange",Dt),console.log("\u2694\uFE0F StreetLourd initialized!")}function Ie(){return window.location.hash.slice(1)||"/"}function Dt(){let e=Ie();if(e.startsWith("/member/")){let a=e.replace("/member/","");Bt="/member/:tag",document.title="Member Detail \u2014 StreetLourd",Ca(a),de();return}let t=ya[e];t?(Bt=e,document.title=`${t.title} \u2014 StreetLourd`,t.render()):window.location.hash="#/",de()}function de(){let e=document.getElementById("navbar-container");if(!e)return;let t=E(),a=ht(),o=Ie(),r="#"+o;o.startsWith("/member/")&&(r="#/members"),e.innerHTML=je(r,t,a),Ne();let i=document.getElementById("logout-btn"),n=document.getElementById("mobile-logout-btn");i&&i.addEventListener("click",async()=>{await De(),window.location.hash="#/",de()}),n&&n.addEventListener("click",async()=>{await De(),window.location.hash="#/",de()})}async function La(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await at(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>{W(),st()},100)}async function $a(){let e=document.getElementById("page-content");await L(e,()=>it())}async function Sa(){let e=document.getElementById("page-content");await L(e,()=>lt())}async function Ca(e){let t=document.getElementById("page-content");await L(t,()=>dt(e))}async function Pa(){let e=document.getElementById("page-content");await L(e,()=>ct())}async function Ta(){let e=document.getElementById("page-content");await L(e,()=>mt())}async function Ma(){let e=document.getElementById("page-content");await L(e,()=>ut())}async function Ba(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await gt(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>W(),100)}async function Da(){let e=document.getElementById("page-content");await L(e,()=>ft())}async function Ea(){let e=document.getElementById("page-content");await L(e,()=>kt())}async function Aa(){let e=document.getElementById("page-content");await L(e,()=>Lt())}async function Ia(){let e=document.getElementById("page-content");await L(e,()=>$t())}async function Ha(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await Ct(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>W(),100)}async function _a(){let e=document.getElementById("page-content");await L(e,()=>Pt())}function Ra(){let e=E(),t=document.getElementById("page-content");if(e){window.location.hash="#/dashboard";return}t.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-md mx-auto text-center py-20">
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-10">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-amber-500/30">
                        \u2694\uFE0F
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        Login to StreetLourd
                    </h2>
                    <p class="text-gray-400 text-sm mb-8">Login dengan akun Google untuk mengakses semua fitur</p>
                    <button id="google-login-btn" class="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold 
                                                          bg-white text-gray-800 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        Sign in with Google
                    </button>
                    <p class="text-xs text-gray-600 mt-6">
                        Data Anda aman dan terenkripsi
                    </p>
                </div>
            </div>
        </div>
    `,document.getElementById("google-login-btn")?.addEventListener("click",async()=>{let a=document.getElementById("google-login-btn");a.disabled=!0,a.innerHTML='<span class="animate-spin">\u23F3</span> Logging in...',await bt(),a.disabled=!1,a.innerHTML="Sign in with Google"})}
