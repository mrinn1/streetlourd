var H=[{id:"war_participation",label:"Ikut War",points:10,icon:"\u2694\uFE0F",category:"war"},{id:"used_both_attacks",label:"Menggunakan 2 Attack",points:10,icon:"\u{1F5E1}\uFE0F",category:"war"},{id:"three_stars",label:"3 Bintang",points:15,icon:"\u2B50",category:"war"},{id:"cwl_participation",label:"Ikut CWL",points:30,icon:"\u{1F3C6}",category:"cwl"},{id:"clan_games_complete",label:"Clan Games Selesai",points:20,icon:"\u{1F3AE}",category:"clangames"},{id:"donation_1000",label:"Donasi 1000",points:5,icon:"\u{1F381}",category:"donation"},{id:"clan_capital_active",label:"Clan Capital Aktif",points:10,icon:"\u{1F3F0}",category:"capital"}],N=[{id:"missed_attack_1",label:"Tidak Menggunakan Attack Pertama",points:-20,icon:"\u274C",category:"war"},{id:"missed_attack_2",label:"Tidak Menggunakan Attack Kedua",points:-15,icon:"\u26D4",category:"war"},{id:"missed_war_no_excuse",label:"Tidak Ikut War Tanpa Izin",points:-30,icon:"\u{1F6AB}",category:"war"},{id:"afk_too_long",label:"AFK Terlalu Lama",points:-10,icon:"\u{1F4A4}",category:"activity"},{id:"rule_violation",label:"Melanggar Aturan Clan",points:-25,icon:"\u26A0\uFE0F",category:"violation"}];var we=[{label:"Home",hash:"#/",icon:"\u{1F3E0}"},{label:"Members",hash:"#/members",icon:"\u{1F465}"},{label:"Leaderboard",hash:"#/leaderboard",icon:"\u{1F3C6}"},{label:"War History",hash:"#/wars",icon:"\u2694\uFE0F"},{label:"Statistics",hash:"#/statistics",icon:"\u{1F4CA}"},{label:"Clan Rules",hash:"#/rules",icon:"\u{1F4DC}"},{label:"Admin Panel",hash:"#/admin",icon:"\u2699\uFE0F",adminOnly:!0}];var E={gold:"rgba(245, 166, 35, 1)",purple:"rgba(168, 85, 247, 1)",blue:"rgba(59, 130, 246, 1)",green:"rgba(34, 197, 94, 1)",red:"rgba(239, 68, 68, 1)",cyan:"rgba(6, 182, 212, 1)",goldAlpha:"rgba(245, 166, 35, 0.2)",purpleAlpha:"rgba(168, 85, 247, 0.2)",blueAlpha:"rgba(59, 130, 246, 0.2)",greenAlpha:"rgba(34, 197, 94, 0.2)",redAlpha:"rgba(239, 68, 68, 0.2)",cyanAlpha:"rgba(6, 182, 212, 0.2)"};function ye(e="#/",t=null,a=null){let n=a==="leader"||a==="coleader",o=we.filter(s=>!(s.adminOnly&&!n));return`
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
                            ${o.map(s=>`
                                <a href="${s.hash}" 
                                   class="nav-link px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                          ${e===s.hash?"text-amber-400 bg-amber-500/10":"text-gray-300 hover:text-white hover:bg-white/10"}">
                                    <span class="mr-1.5">${s.icon}</span>${s.label}
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
                            ${o.map(s=>`
                                <a href="${s.hash}" 
                                   class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                                          ${e===s.hash?"text-amber-400 bg-amber-500/10":"text-gray-300 hover:text-white hover:bg-white/10"}">
                                    <span class="text-lg">${s.icon}</span>${s.label}
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
    `}function ke(){let e=document.getElementById("main-navbar");if(!e)return;let t=0;function a(){let p=window.scrollY,m=e.querySelector(".navbar-glass");m&&(p>60?m.classList.add("navbar-solid"):m.classList.remove("navbar-solid"),t=p)}window.addEventListener("scroll",a,{passive:!0}),a();let n=document.getElementById("mobile-menu-btn"),o=document.getElementById("mobile-menu"),s=document.getElementById("mobile-menu-panel"),r=document.getElementById("mobile-menu-close"),i=document.getElementById("mobile-menu-backdrop");function l(){!o||!s||(o.classList.remove("hidden"),requestAnimationFrame(()=>{s.classList.remove("translate-x-full"),s.classList.add("translate-x-0")}))}function d(){!o||!s||(s.classList.remove("translate-x-0"),s.classList.add("translate-x-full"),setTimeout(()=>o.classList.add("hidden"),300))}return n?.addEventListener("click",l),r?.addEventListener("click",d),i?.addEventListener("click",d),document.querySelectorAll(".mobile-nav-link").forEach(p=>{p.addEventListener("click",d)}),()=>{window.removeEventListener("scroll",a)}}var re=class{constructor(t="particles-canvas"){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.particles=[],this.animationId=null,this.maxParticles=60,this.colors=["rgba(245, 166, 35, 0.4)","rgba(168, 85, 247, 0.3)","rgba(59, 130, 246, 0.3)","rgba(255, 215, 0, 0.2)","rgba(147, 51, 234, 0.2)"],this.resize(),window.addEventListener("resize",()=>this.resize()))}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}createParticle(){return{x:Math.random()*this.canvas.width,y:this.canvas.height+Math.random()*100,size:Math.random()*3+1,speedY:-(Math.random()*.5+.2),speedX:(Math.random()-.5)*.3,opacity:Math.random()*.5+.1,color:this.colors[Math.floor(Math.random()*this.colors.length)],life:0,maxLife:Math.random()*300+200,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.01}}update(){for(;this.particles.length<this.maxParticles;)this.particles.push(this.createParticle());for(let t=this.particles.length-1;t>=0;t--){let a=this.particles[t];a.x+=a.speedX,a.y+=a.speedY,a.life++,a.pulse+=a.pulseSpeed;let n=a.life/a.maxLife;n<.1?a.currentOpacity=a.opacity*(n/.1):n>.8?a.currentOpacity=a.opacity*((1-n)/.2):a.currentOpacity=a.opacity,a.currentSize=a.size+Math.sin(a.pulse)*.5,(a.life>=a.maxLife||a.y<-20)&&this.particles.splice(t,1)}}draw(){if(this.ctx){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t of this.particles)this.ctx.save(),this.ctx.globalAlpha=t.currentOpacity||t.opacity,this.ctx.fillStyle=t.color,this.ctx.shadowColor=t.color,this.ctx.shadowBlur=t.currentSize*4,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.currentSize,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}}animate(){this.update(),this.draw(),this.animationId=requestAnimationFrame(()=>this.animate())}start(){this.canvas&&this.animate()}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.stop(),this.particles=[],this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}};function u(){return`
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
    `}function J({icon:e,label:t,value:a,color:n="blue",subtitle:o="",glow:s=!1}){let r={gold:"from-amber-500/20 to-yellow-600/10 border-amber-500/30",purple:"from-purple-500/20 to-violet-600/10 border-purple-500/30",blue:"from-blue-500/20 to-cyan-600/10 border-blue-500/30",green:"from-green-500/20 to-emerald-600/10 border-green-500/30",red:"from-red-500/20 to-rose-600/10 border-red-500/30",cyan:"from-cyan-500/20 to-teal-600/10 border-cyan-500/30"},i={gold:"shadow-amber-500/20",purple:"shadow-purple-500/20",blue:"shadow-blue-500/20",green:"shadow-green-500/20",red:"shadow-red-500/20",cyan:"shadow-cyan-500/20"},l={gold:"from-amber-500 to-yellow-600",purple:"from-purple-500 to-violet-600",blue:"from-blue-500 to-cyan-600",green:"from-green-500 to-emerald-600",red:"from-red-500 to-rose-600",cyan:"from-cyan-500 to-teal-600"};return`
        <div class="group relative rounded-2xl border bg-gradient-to-br ${r[n]} 
                    p-6 transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 
                    ${s?`shadow-lg ${i[n]}`:""} 
                    hover:shadow-xl ${i[n]} animate-item cursor-default">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${l[n]} flex items-center justify-center text-2xl shadow-lg shrink-0">
                    ${e}
                </div>
                <div class="min-w-0">
                    <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">${t}</p>
                    <p class="text-2xl font-bold text-white mt-0.5" style="font-family: 'Lilita One', cursive;" data-counter="${a}">${a}</p>
                    ${o?`<p class="text-xs text-gray-500 mt-1">${o}</p>`:""}
                </div>
            </div>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
    `}function Le({name:e,tag:t,role:a,townHallLevel:n,trophies:o,donations:s,clanCapital:r,totalPoints:i,sidePoints:l,onClick:d}){let p={leader:"from-amber-500 to-yellow-600",coLeader:"from-purple-500 to-violet-600",admin:"from-blue-500 to-cyan-600",member:"from-gray-500 to-gray-600"},m={leader:"Leader",coLeader:"Co-Leader",admin:"Elder",member:"Member"},y={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[n]||"#6b7280";return`
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                    p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 
                    hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer animate-item"
             onclick="${d||""}">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                     style="background: linear-gradient(135deg, ${y}, ${y}99); box-shadow: 0 0 15px ${y}40;">
                    TH${n||"?"}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1 min-w-0">
                        <h3 class="text-white font-bold truncate flex-1 min-w-0">${e}</h3>
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${p[a]||p.member} shrink-0">
                            ${m[a]||"Member"}
                        </span>
                    </div>
                    <p class="text-xs text-gray-500 mb-2">${t}</p>
                    <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span class="flex items-center gap-1 shrink-0">\u{1F3C6} ${(o||0).toLocaleString()}</span>
                        <span class="flex items-center gap-1 shrink-0">\u{1F381} ${(s||0).toLocaleString()}</span>
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <div class="text-lg font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                        ${a==="leader"?"\u{1F451}":i||0}
                    </div>
                    <div class="text-[10px] text-gray-500 uppercase">${a==="leader"?"Leader":"Points"}</div>
                    ${l&&a!=="leader"?`
                        <div class="text-[10px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">
                            +${l} SP
                        </div>
                    `:""}
                </div>
                <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `}function $e({date:e,opponent:t,warSize:a,result:n,clanStars:o,opponentStars:s,clanDestruction:r,opponentDestruction:i,onClick:l}){let d={win:{label:"VICTORY",bg:"from-green-500/20 to-emerald-600/10",border:"border-green-500/30",badge:"from-green-500 to-emerald-600"},loss:{label:"DEFEAT",bg:"from-red-500/20 to-rose-600/10",border:"border-red-500/30",badge:"from-red-500 to-rose-600"},draw:{label:"DRAW",bg:"from-gray-500/20 to-gray-600/10",border:"border-gray-500/30",badge:"from-gray-500 to-gray-600"}},p=d[n]||d.draw;return`
        <div class="group relative rounded-2xl border ${p.border} bg-gradient-to-br ${p.bg} backdrop-blur-sm 
                    p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-item"
             onclick="${l||""}">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-xs text-gray-400">${e||""}</p>
                    <p class="text-xs text-gray-500">War Size: ${a||"?"}v${a||"?"}</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.badge}">
                    ${p.label}
                </span>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">\u2B50 ${o||0}</p>
                    <p class="text-xs text-gray-400 mt-1">Our Clan</p>
                    <p class="text-xs text-gray-500">${(r||0).toFixed(1)}%</p>
                </div>
                <div class="text-gray-500 font-bold text-lg">VS</div>
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white/60" style="font-family: 'Lilita One', cursive;">\u2B50 ${s||0}</p>
                    <p class="text-xs text-gray-400 mt-1 truncate">${t||"Unknown"}</p>
                    <p class="text-xs text-gray-500">${(i||0).toFixed(1)}%</p>
                </div>
            </div>
        </div>
    `}function k({rank:e,name:t,tag:a,townHallLevel:n,totalPoints:o,sidePoints:s,totalWars:r,totalStars:i,donations:l}){let d=e<=3,m={1:{medal:"\u{1F947}",border:"border-amber-400/50",bg:"from-amber-500/20 to-yellow-600/10",glow:"shadow-amber-500/30",textColor:"text-amber-400"},2:{medal:"\u{1F948}",border:"border-gray-300/50",bg:"from-gray-300/20 to-gray-400/10",glow:"shadow-gray-300/20",textColor:"text-gray-300"},3:{medal:"\u{1F949}",border:"border-orange-500/50",bg:"from-orange-500/20 to-amber-600/10",glow:"shadow-orange-500/20",textColor:"text-orange-400"}}[e]||{medal:"",border:"border-white/10",bg:"bg-white/5",glow:"",textColor:"text-white"};return d?`
            <div class="relative rounded-2xl border ${m.border} bg-gradient-to-br ${m.bg} backdrop-blur-sm 
                        p-6 transition-all duration-300 hover:scale-[1.03] shadow-lg ${m.glow} 
                        ${e===1?"gold-shimmer":""} animate-item">
                <div class="flex items-center gap-4">
                    <div class="text-4xl">${m.medal}</div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold ${m.textColor} truncate" style="font-family: 'Lilita One', cursive;">${t}</h3>
                        <p class="text-xs text-gray-500">${a} \xB7 TH${n||"?"}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold ${m.textColor}" style="font-family: 'Lilita One', cursive;">${(o||0).toLocaleString()}</p>
                        <p class="text-[10px] text-gray-500 uppercase">Points</p>
                        ${s?`
                            <p class="text-xs font-bold text-blue-400" style="font-family: 'Lilita One', cursive;">+${s} SP</p>
                        `:""}
                    </div>
                </div>
                <div class="flex gap-4 mt-4 text-xs text-gray-400 border-t border-white/10 pt-3">
                    <span>\u{1F381} ${(l||0).toLocaleString()} Donated</span>
                </div>
            </div>
        `:`
        <div class="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 
                    hover:bg-white/10 transition-all duration-200 animate-item">
            <div class="w-8 text-center font-bold text-gray-500 text-sm">#${e}</div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                    <span class="text-white font-medium truncate">${t}</span>
                    <span class="text-[10px] text-gray-500">TH${n||"?"}</span>
                </div>
            </div>
            <div class="flex gap-4 text-xs text-gray-500 shrink-0">
                <span>\u{1F381} ${(l||0).toLocaleString()}</span>
            </div>
            <div class="text-right shrink-0">
                <span class="text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${(o||0).toLocaleString()}</span>
                ${s?`
                    <span class="text-[10px] text-blue-400 font-bold block" style="font-family: 'Lilita One', cursive;">+${s} SP</span>
                `:""}
            </div>
        </div>
    `}import{initializeApp as lt}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";import{getAuth as dt}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";import{getFirestore as ct}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";import{getStorage as mt}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";var me={apiKey:"AIzaSyCJvQDiM7JQ7n0si8UgI-lpVA7CgiVD8eA",authDomain:"victorytoclan.firebaseapp.com",projectId:"victorytoclan",storageBucket:"victorytoclan.firebasestorage.app",messagingSenderId:"762294306774",appId:"1:762294306774:web:601d43f7d499167e40c677"},oe,R,g,pt;try{oe=lt(me),R=dt(oe),g=ct(oe),pt=mt(oe),console.log("\u2705 Firebase initialized successfully")}catch(e){console.warn("\u26A0\uFE0F Firebase initialization failed:",e.message),console.warn("Please configure your Firebase project in js/config/firebase.js")}function b(){return me.apiKey!=="YOUR_API_KEY"&&me.projectId!=="YOUR_PROJECT_ID"}async function v(){return await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js")}async function h(){if(!b())return pe();try{let{collection:e,getDocs:t,query:a,orderBy:n}=await v(),o=a(e(g,"members"),n("totalPoints","desc"));return(await t(o)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("getMembers:",e),pe()}}async function Me(e){if(!b())return pe().find(t=>t.tag===e)||null;try{let{doc:t,getDoc:a}=await v(),n=await a(t(g,"members",e));return n.exists()?{id:n.id,...n.data()}:null}catch(t){return console.error("getMember:",t),null}}async function F(){if(!b())return Se();try{let{collection:e,getDocs:t,query:a,orderBy:n}=await v(),o=a(e(g,"wars"),n("date","desc"));return(await t(o)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("getWars:",e),Se()}}async function Ce(e){if(!b())return;let{collection:t,addDoc:a,serverTimestamp:n}=await v();return await a(t(g,"wars"),{...e,createdAt:n()})}async function ue(e){if(!b())return;let{collection:t,addDoc:a,serverTimestamp:n,doc:o,runTransaction:s}=await v(),r=o(g,"members",e.memberTag);await s(g,async i=>{let l=await i.get(r);if(!l.exists())throw"Document does not exist!";let d=l.data(),p=d.totalPoints!==void 0?d.totalPoints:500,m=d.sidePoints||0,P=p,y=m;if(e.amount>0){let C=1500-p;C>0?e.amount>C?(P=1500,y+=e.amount-C):P+=e.amount:y+=e.amount}else if(e.amount<0){let C=Math.abs(e.amount);if(m>=C)y-=C;else{let st=C-m;y=0,P-=st}P<0&&(P=0)}i.update(r,{totalPoints:P,sidePoints:y})}),await a(t(g,"pointHistory"),{...e,date:n()})}async function Te(e){if(!b())return;let{collection:t,addDoc:a,serverTimestamp:n,doc:o,runTransaction:s}=await v(),r=o(g,"members",e.memberTag);await s(g,async i=>{let l=await i.get(r);if(!l.exists())throw"Document does not exist!";let m=(l.data().sidePoints||0)+e.amount;m<0&&(m=0),i.update(r,{sidePoints:m})}),await a(t(g,"pointHistory"),{...e,date:n()})}async function W(){if(!b())return Pe();try{let{collection:e,getDocs:t,query:a,orderBy:n,limit:o}=await v(),s=a(e(g,"pointHistory"),n("date","desc"),o(150));return(await t(s)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){return console.error("getAllPointHistory:",e),Pe()}}async function ie(e){if(!b())return;let{doc:t,deleteDoc:a}=await v(),n=t(g,"pointHistory",e);await a(n)}async function Ee(e){if(!b())return;let{collection:t,addDoc:a,serverTimestamp:n}=await v();return await a(t(g,"promotions"),{...e,date:n()})}async function De(e){if(!b())return;let{collection:t,addDoc:a,serverTimestamp:n}=await v();return await a(t(g,"violations"),{...e,date:n()})}function pe(){return["DragonSlayer","WarMachine","ClashKing","QueenArcher","GoblinHero","WallBreaker","TH17Master","EliteWarrior","SuperWitch","IceGolem","LavaHound","ElectroDragon","YetiSmash","HeadHunter","InfernoTower","PhoenixRise","RoyalGhost","SneakyGoblin","SuperBowler","PartyWizard"].map((t,a)=>({tag:`#${String(2e3+a).padStart(4,"0")}ABC`,name:t,townHallLevel:Math.floor(Math.random()*7)+11,role:a===0?"leader":a<3?"coLeader":a<7?"admin":"member",trophies:Math.floor(Math.random()*2e3)+4e3,donations:Math.floor(Math.random()*5e3)+500,donationsReceived:Math.floor(Math.random()*3e3)+200,clanCapitalContributions:Math.floor(Math.random()*1e5)+1e4,totalPoints:Math.floor(Math.random()*300)+50,totalWars:Math.floor(Math.random()*50)+10,totalStars:Math.floor(Math.random()*100)+20,avgDestruction:Math.random()*30+70}))}function Se(){return["Dark Warriors","Storm Legion","Iron Wolves","Shadow Riders","Thunder Hawks"].map((t,a)=>({id:`war-${a}`,date:new Date(Date.now()-a*3*864e5).toISOString(),opponent:t,warSize:[15,20,25,30,40][a%5],result:["win","win","loss","win","draw"][a],clanStars:Math.floor(Math.random()*30)+20,opponentStars:Math.floor(Math.random()*30)+15,clanDestruction:Math.random()*20+80,opponentDestruction:Math.random()*30+60}))}function Pe(){return["Ikut War","3 Bintang","Donasi 1000","Clan Games","Tidak Attack"].map((t,a)=>({id:`ph-${a}`,amount:a===4?-20:[10,15,5,20][a],reason:t,category:"war",adminName:"Leader",date:new Date(Date.now()-a*2*864e5).toISOString()}))}async function U(){if(!b())return null;try{let{doc:e,getDoc:t}=await v(),a=await t(e(g,"settings","rules"));return a.exists()?a.data():null}catch(e){return console.error("getRules:",e),null}}async function Ae(e){if(!b())return;let{doc:t,setDoc:a}=await v();await a(t(g,"settings","rules"),e)}async function se(){if(!b())return{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."};try{let{doc:e,getDoc:t}=await v(),a=await t(e(g,"settings","landing"));return a.exists()?a.data():{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}catch(e){return console.error("getLandingSettings:",e),{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}}async function Be(e){if(!b())return;let{doc:t,setDoc:a}=await v();await a(t(g,"settings","landing"),e,{merge:!0})}async function Ie(){let e=await se(),a=(await h()).filter(n=>n.role!=="leader").sort((n,o)=>(o.totalPoints||0)-(n.totalPoints||0)).slice(0,3);return`
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
                        <a href="#/members" class="group px-8 py-4 rounded-2xl text-lg font-bold 
                                                  text-purple-300 border-2 border-purple-500/30 
                                                  hover:border-purple-400/60 bg-purple-500/10 hover:bg-purple-500/20 
                                                  backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                           style="font-family: 'Lilita One', cursive;">
                            <span class="flex items-center justify-center gap-2">
                                \u2694\uFE0F Join Clan
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
                    ${le("\u2694\uFE0F","War Tracker","Input dan pantau hasil war dengan tracking attack, bintang, dan destruction otomatis.","from-red-500/20 to-orange-500/10","border-red-500/20")}
                    ${le("\u{1F4CA}","Point System","Sistem poin otomatis dengan reward dan punishment yang transparan untuk semua anggota.","from-blue-500/20 to-cyan-500/10","border-blue-500/20")}
                    ${le("\u{1F3C6}","Leaderboard","Ranking anggota berdasarkan kontribusi dengan efek emas untuk top player.","from-amber-500/20 to-yellow-500/10","border-amber-500/20")}
                    ${le("\u{1F465}","Member Profiles","Profil detail setiap anggota dengan riwayat war, poin, dan statistik lengkap.","from-purple-500/20 to-violet-500/10","border-purple-500/20")}
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
                ${a.length>=3?`
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${k({rank:2,...a[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${k({rank:1,...a[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${k({rank:3,...a[2]})}
                    </div>
                </div>
                `:a.length>0?`
                <div class="grid gap-4 animate-on-scroll" data-stagger="true">
                    ${a.map((n,o)=>k({rank:o+1,...n})).join("")}
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

        ${u()}
    `}function le(e,t,a,n,o){return`
        <div class="animate-item group rounded-2xl border ${o} bg-gradient-to-br ${n} 
                    backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg cursor-default">
            <div class="text-4xl mb-4">${e}</div>
            <h3 class="text-white font-bold text-lg mb-2" style="font-family: 'Lilita One', cursive;">${t}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${a}</p>
        </div>
    `}var f={statCard(){return`
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
        `}};function z(e,t,a){return`
        <div class="flex flex-col items-center justify-center py-16 text-center animate-on-scroll">
            <div class="text-6xl mb-4 opacity-50">${e}</div>
            <h3 class="text-xl font-bold text-white/70 mb-2" style="font-family: 'Lilita One', cursive;">${t}</h3>
            <p class="text-gray-500 max-w-md">${a}</p>
        </div>
    `}function D(e){return e==null?"0":Number(e).toLocaleString("en-US")}function He(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}):"-"}function K(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function Re(e,t=300){let a;return function(...n){clearTimeout(a),a=setTimeout(()=>e.apply(this,n),t)}}function _e(e){let t={leader:{label:"Leader",bg:"from-yellow-500 to-amber-600",text:"text-black"},coLeader:{label:"Co-Leader",bg:"from-purple-500 to-violet-600",text:"text-white"},admin:{label:"Elder",bg:"from-blue-500 to-cyan-600",text:"text-white"},member:{label:"Member",bg:"from-gray-500 to-gray-600",text:"text-white"}},a=t[e]||t.member;return`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${a.bg} ${a.text}">${a.label}</span>`}function q(e){return e?e.toDate?e.toDate():e.seconds?new Date(e.seconds*1e3):new Date(e):null}async function Oe(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${f.repeat("statCard",4)}
                </div>
            </div>
        </div>
    `;let[t,a]=await Promise.all([h(),F()]),n=t.length,o=[...t].sort((i,l)=>(l.donations||0)-(i.donations||0))[0],s=[...t].sort((i,l)=>(l.trophies||0)-(i.trophies||0))[0],r=[...t].sort((i,l)=>(l.totalWars||0)-(i.totalWars||0))[0];e.innerHTML=`
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
                    ${J({icon:"\u{1F465}",label:"Total Members",value:D(n),color:"blue"})}
                    ${J({icon:"\u{1F381}",label:"Top Donator",value:o?.name||"-",color:"purple",subtitle:`${D(o?.donations||0)} donated`})}
                    ${J({icon:"\u{1F3C6}",label:"Top Player",value:s?.name||"-",color:"gold",glow:!0,subtitle:`${D(s?.trophies||0)} trophies`})}
                    ${J({icon:"\u{1F525}",label:"Most Active",value:r?.name||"-",color:"red",subtitle:`${r?.totalWars||0} wars joined`})}
                </div>

                <!-- Recent Wars -->
                <div class="mb-12 animate-on-scroll">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Recent Wars</h2>
                        <a href="#/wars" class="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                            View All
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger="true">
                        ${a.slice(0,3).map(i=>ut(i)).join("")}
                        ${a.length===0?`
                            <div class="col-span-full text-center py-12 text-gray-500">
                                <p class="text-4xl mb-2">\u2694\uFE0F</p>
                                <p>Belum ada data war</p>
                            </div>
                        `:""}
                    </div>
                </div>

                <!-- Top Members Quick View -->
                <div class="animate-on-scroll">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-bold text-white" style="font-family: 'Lilita One', cursive;">Top Members</h2>
                        <a href="#/leaderboard" class="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                            Leaderboard
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-stagger="true">
                        ${t.filter(i=>i.role!=="leader").slice(0,3).map((i,l)=>gt(i,l+1)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${u()}
    `}function ut(e){let t={win:{label:"VICTORY",color:"text-green-400",border:"border-green-500/30",bg:"from-green-500/10 to-transparent"},loss:{label:"DEFEAT",color:"text-red-400",border:"border-red-500/30",bg:"from-red-500/10 to-transparent"},draw:{label:"DRAW",color:"text-gray-400",border:"border-gray-500/30",bg:"from-gray-500/10 to-transparent"}},a=t[e.result]||t.draw,n=e.date?new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-";return`
        <div class="animate-item rounded-2xl border ${a.border} bg-gradient-to-br ${a.bg} backdrop-blur-sm p-5 
                    hover:scale-[1.02] transition-all duration-300 cursor-pointer" onclick="location.hash='#/wars'">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-gray-500">${n}</span>
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
    `}function gt(e,t){let a=["\u{1F947}","\u{1F948}","\u{1F949}"],n=["text-amber-400","text-gray-300","text-orange-400"];return`
        <div class="animate-item flex items-center gap-4 p-4 rounded-xl border ${["border-amber-500/30","border-gray-400/30","border-orange-500/30"][t-1]} bg-white/5 
                    hover:bg-white/10 transition-all duration-200 cursor-pointer" 
             onclick="location.hash='#/member/${encodeURIComponent(e.tag)}'">
            <span class="text-2xl">${a[t-1]}</span>
            <div class="flex-1 min-w-0">
                <p class="text-white font-medium truncate">${e.name}</p>
                <p class="text-xs text-gray-500">TH${e.townHallLevel||"?"}</p>
            </div>
            <p class="${n[t-1]} font-bold" style="font-family: 'Lilita One', cursive;">
                ${(e.totalPoints||0).toLocaleString()}
            </p>
        </div>
    `}function V(){let e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("animate-visible"),a.target.dataset.stagger&&a.target.querySelectorAll(".animate-item").forEach((o,s)=>{o.style.transitionDelay=`${Math.min(s,8)*100}ms`,o.classList.add("animate-visible")}))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".animate-on-scroll").forEach(t=>{e.observe(t)}),e}function je(){let e=document.querySelectorAll("[data-parallax]");if(!e.length)return;let t=!1;function a(){t||(requestAnimationFrame(()=>{let n=window.scrollY;e.forEach(o=>{let s=parseFloat(o.dataset.parallax)||.5;o.style.transform=`translateY(${n*s}px)`}),t=!1}),t=!0)}return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)}async function L(e,t){e.style.opacity="0",e.style.transform="translateY(10px)",await new Promise(a=>setTimeout(a,200)),await t(),window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="translateY(0)"}),setTimeout(()=>V(),100)}var X=[],Q=[],w=1,de=12;async function Ne(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="grid gap-4">${f.repeat("memberCard",6)}</div>
            </div>
        </div>
    `,X=await h(),Q=[...X],w=1,ge(e)}function ge(e){let t=Math.ceil(Q.length/de),a=Q.slice((w-1)*de,w*de),n=[...new Set(X.map(l=>l.townHallLevel))].sort((l,d)=>d-l);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Members
                    </h1>
                    <p class="text-gray-400">Daftar anggota clan \xB7 ${X.length} members</p>
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
                            ${n.map(l=>`<option value="${l}">TH ${l}</option>`).join("")}
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
                    ${a.length>0?a.map(l=>Le({name:l.name,tag:l.tag,role:l.role,townHallLevel:l.townHallLevel,trophies:l.trophies,donations:l.donations,clanCapital:l.clanCapitalContributions,totalPoints:l.totalPoints,sidePoints:l.sidePoints,onClick:`location.hash='#/member/${encodeURIComponent(l.tag)}'`})).join(""):z("\u{1F465}","Tidak ada member ditemukan","Coba ubah filter pencarian")}
                </div>

                <!-- Pagination -->
                ${t>1?`
                <div class="flex items-center justify-center gap-2 animate-on-scroll" id="pagination">
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${w===1?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${w-1})" ${w===1?"disabled":""}>
                        \u2190 Prev
                    </button>
                    ${bt(w,t)}
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${w===t?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${w+1})" ${w===t?"disabled":""}>
                        Next \u2192
                    </button>
                </div>
                `:""}
            </div>
        </div>
        ${u()}
    `;let o=document.getElementById("member-search"),s=document.getElementById("filter-th"),r=document.getElementById("filter-role"),i=Re(()=>{let l=o?.value.toLowerCase()||"",d=s?.value||"",p=r?.value||"";Q=X.filter(m=>{let P=!l||m.name.toLowerCase().includes(l)||m.tag.toLowerCase().includes(l),y=!d||m.townHallLevel==d,C=!p||m.role===p;return P&&y&&C}),w=1,ge(e)},250);o?.addEventListener("input",i),s?.addEventListener("change",i),r?.addEventListener("change",i),window.__membersPage=l=>{let d=Math.ceil(Q.length/de);l<1||l>d||(w=l,ge(e),window.scrollTo({top:0,behavior:"smooth"}))},setTimeout(()=>V(),50)}function bt(e,t){let a=[],o=Math.max(1,e-Math.floor(2.5)),s=Math.min(t,o+5-1);s-o<4&&(o=Math.max(1,s-5+1));for(let r=o;r<=s;r++)a.push(`
            <button class="w-10 h-10 rounded-xl text-sm font-medium transition-all
                           ${r===e?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}"
                    onclick="window.__membersPage(${r})">
                ${r}
            </button>
        `);return a.join("")}async function Fe(e){let t=document.getElementById("page-content");t.innerHTML=`<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${f.profile()}</div></div>`;let a=decodeURIComponent(e),n=await Me(a);if(!n){t.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-5xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F50D}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Member Not Found</h2>
                    <p class="text-gray-500 mb-6">Tag: ${a}</p>
                    <a href="#/members" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Members</a>
                </div>
            </div>
        `;return}let s={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[n.townHallLevel]||"#6b7280",r="",i=n.totalPoints||0;if(n.role==="leader")r=`
            <div class="flex items-center gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div class="text-3xl">\u{1F451}</div>
                <p class="text-gray-300 text-sm leading-relaxed">\u{1F451} Anggota ini adalah <strong>Leader Utama</strong> klan.</p>
            </div>
        `;else if(n.role==="coLeader"){let l=Math.max(0,Math.min(100,i/1500*100)),d="";i<1250?d=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${i}</strong>) di bawah batas minimal Co-Leader (1250). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Elder</strong>.</p>
                    </div>
                </div>
            `:d=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <span class="text-green-400 shrink-0">\u269C\uFE0F</span>
                    <p class="text-gray-300 text-sm leading-relaxed">\u2728 Anggota ini telah mencapai pangkat <strong>Co-Leader</strong> dengan poin maksimal (1500).</p>
                </div>
            `,r=`
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Status Jabatan</p>
                        <p class="text-white font-bold text-lg">Co-Leader (Maksimal)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${i} / 1500 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${l}%">
                    </div>
                </div>
                
                <!-- Status/Rekomendasi Info -->
                ${d}
            </div>
        `}else if(n.role==="admin")if(i<1e3)r=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${i}</strong>) di bawah batas minimal Elder (1000). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Member</strong>.</p>
                    </div>
                </div>
            `;else{let d=Math.max(0,Math.min(100,(i-1250)/250*100)),p=1500-i,m=p<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${i}) telah mencukupi untuk dipromosikan menjadi Co-Leader.`:`Dibutuhkan <strong>${p}</strong> poin lagi untuk naik jabatan menjadi <strong>Co-Leader</strong>.`;r=`
                <div class="space-y-6">
                    <div class="flex justify-between items-end text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                            <p class="text-white font-bold text-lg">Co-Leader</p>
                        </div>
                        <div class="text-right">
                            <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                            <p class="text-amber-400 font-bold text-lg">${i} / 1500 Poin</p>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                        <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                             style="width: ${d}%">
                        </div>
                    </div>
                    
                    <!-- Status Info -->
                    <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span class="text-amber-400">\u{1F4A1}</span>
                        <p class="text-gray-300 text-sm leading-relaxed">${m}</p>
                    </div>
                </div>
            `}else{let d=Math.max(0,Math.min(100,(i-500)/750*100)),p=1250-i,m="";i<300?m=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u{1F6A8}</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Kick</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${i}</strong>) di bawah batas minimal Member (300). Anggota ini direkomendasikan untuk <strong>dikeluarkan (kick) dari klan</strong>.</p>
                    </div>
                </div>
            `:m=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span class="text-amber-400">\u{1F4A1}</span>
                    <p class="text-gray-300 text-sm leading-relaxed">${p<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${i}) telah mencukupi untuk dipromosikan menjadi Elder.`:`Dibutuhkan <strong>${p}</strong> poin lagi untuk naik jabatan menjadi <strong>Elder</strong>.`}</p>
                </div>
            `,r=`
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                        <p class="text-white font-bold text-lg">Elder (Elder/Admin)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${i} / 1250 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${d}%">
                    </div>
                </div>
                
                <!-- Status/Kick Info -->
                ${m}
            </div>
        `}t.innerHTML=`
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
                             style="background: linear-gradient(135deg, ${s}, ${s}99); box-shadow: 0 0 25px ${s}40;">
                            TH${n.townHallLevel||"?"}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 class="text-2xl md:text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    ${n.name}
                                </h1>
                                ${_e(n.role)}
                            </div>
                            <p class="text-gray-500 text-sm mb-3">${n.tag}</p>
                            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span class="flex items-center gap-1.5">\u{1F3C6} ${D(n.trophies)} trophies</span>
                                <span class="flex items-center gap-1.5">\u{1F381} ${D(n.donations)} donated</span>
                            </div>
                        </div>
                        <div class="text-center md:text-right">
                            <p class="text-4xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                                ${D(n.totalPoints||0)}
                            </p>
                            <p class="text-xs text-gray-500 uppercase tracking-wider">Total Points</p>
                            ${n.sidePoints?`
                                <p class="text-xs font-bold text-blue-400 mt-1" style="font-family: 'Lilita One', cursive;">
                                    +${n.sidePoints} Side Points
                                </p>
                            `:""}
                        </div>
                    </div>
                </div>

                <!-- Promotion Requirements Progress Section -->
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u2B06\uFE0F Keterangan Naik Jabatan
                    </h2>
                    
                    ${r}
                </div>
            </div>
        </div>
        ${u()}
    `}async function We(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${f.repeat("leaderboardRow",10)}
        </div></div>
    `;let t=await h(),a=await W(),n=t.filter(r=>r.role!=="leader").sort((r,i)=>(i.totalPoints||0)-(r.totalPoints||0)).slice(0,100);if(n.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                ${z("\u{1F3C6}","Belum Ada Data","Leaderboard akan muncul setelah data member tersedia")}
            </div></div>${u()}
        `;return}let o=n.slice(0,3),s=n.slice(3);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        \u{1F3C6} Leaderboard
                    </h1>
                    <p class="text-gray-400">Top ${n.length} members berdasarkan total poin kontribusi</p>
                </div>

                <!-- Top 3 Podium -->
                ${o.length>=3?`
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${k({rank:2,...o[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${k({rank:1,...o[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${k({rank:3,...o[2]})}
                    </div>
                </div>
                `:`
                <div class="grid gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${o.map((r,i)=>k({rank:i+1,...r})).join("")}
                </div>
                `}

                <!-- Rest of Rankings -->
                ${s.length>0?`
                <div class="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Rankings #4 - #${n.length}</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${s.map((r,i)=>k({rank:i+4,...r})).join("")}
                    </div>
                </div>
                `:""}

                <!-- Global Point Log Section -->
                <div class="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">\u{1F4DC} Riwayat Aktivitas Poin Klan</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${a.length>0?a.map(r=>{let i=K(q(r.date)),l=(r.amount||0)>=0,d=l?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30";return`
                            <div class="animate-item flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-white font-medium">${r.memberName||"Unknown"}</span>
                                        <span class="text-[10px] text-gray-500">${r.memberTag||""}</span>
                                        <span class="text-xs text-gray-500">\u2014 ${r.reason||""}</span>
                                    </div>
                                    <p class="text-[10px] text-gray-500 mt-1">Oleh: ${r.adminName||"Admin"} \u2022 ${i}</p>
                                </div>
                                <div class="shrink-0 text-right">
                                    <span class="px-3 py-1 rounded-full text-xs font-bold ${d}" style="font-family: 'Lilita One', cursive;">
                                        ${l?"+":""}${r.amount} Poin
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
        ${u()}
    `}async function Ue(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${f.repeat("warCard",5)}
        </div></div>
    `;let t=await F();if(t.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u2694\uFE0F War History</h1>
                ${z("\u2694\uFE0F","Belum Ada Data War","Data war akan muncul setelah admin menginput hasil war")}
            </div></div>${u()}
        `;return}let a=t.length,n=t.filter(i=>i.result==="win").length,o=t.filter(i=>i.result==="loss").length,s=t.filter(i=>i.result==="draw").length,r=a?Math.round(n/a*100):0;e.innerHTML=`
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
                        <p class="text-2xl font-bold text-green-400" style="font-family: 'Lilita One', cursive;">${n}</p>
                        <p class="text-xs text-gray-500">Victories</p>
                    </div>
                    <div class="animate-item rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-red-400" style="font-family: 'Lilita One', cursive;">${o}</p>
                        <p class="text-xs text-gray-500">Defeats</p>
                    </div>
                    <div class="animate-item rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">${r}%</p>
                        <p class="text-xs text-gray-500">Win Rate</p>
                    </div>
                </div>

                <!-- Timeline -->
                <div class="relative animate-on-scroll">
                    <!-- Timeline Line -->
                    <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-transparent"></div>

                    <div class="space-y-6" data-stagger="true">
                        ${t.map((i,l)=>{let d=He(i.date);return`
                                <div class="animate-item relative flex gap-6 md:gap-8">
                                    <!-- Timeline Dot -->
                                    <div class="relative z-10 shrink-0">
                                        <div class="w-3 h-3 mt-7 rounded-full ${{win:"bg-green-500",loss:"bg-red-500",draw:"bg-gray-500"}[i.result]||"bg-gray-500"} ring-4 ring-[#0a0e17]"></div>
                                    </div>
                                    <!-- War Card -->
                                    <div class="flex-1 pb-2">
                                        ${$e({date:d,opponent:i.opponent,warSize:i.warSize,result:i.result,clanStars:i.clanStars,opponentStars:i.opponentStars,clanDestruction:i.clanDestruction,opponentDestruction:i.opponentDestruction})}
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${u()}
    `}var G=[];async function ze(){G.forEach(n=>{try{n.destroy()}catch{}}),G=[];let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-7xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${f.repeat("chart",4)}</div>
        </div></div>
    `;let[t,a]=await Promise.all([h(),F()]);e.innerHTML=`
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
        ${u()}
    `,await xt(),ht(t),vt(a),ft(t),wt(t)}function xt(){return new Promise(e=>{if(window.Chart){e();return}let t=setInterval(()=>{window.Chart&&(clearInterval(t),e())},100);setTimeout(()=>{clearInterval(t),e()},5e3)})}function ht(e){let t=document.getElementById("chart-donations");if(!t||!window.Chart)return;let a=[...e].sort((o,s)=>(s.donations||0)-(o.donations||0)).slice(0,10),n=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(o=>o.name.substring(0,10)),datasets:[{label:"Donations",data:a.map(o=>o.donations||0),backgroundColor:E.purpleAlpha,borderColor:E.purple,borderWidth:1,borderRadius:8}]},options:Ke()});G.push(n)}function vt(e){let t=document.getElementById("chart-wars");if(!t||!window.Chart)return;let a=e.filter(r=>r.result==="win").length,n=e.filter(r=>r.result==="loss").length,o=e.filter(r=>r.result==="draw").length,s=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:["Victories","Defeats","Draws"],datasets:[{data:[a,n,o],backgroundColor:[E.green,E.red,E.gold],borderColor:"#0a0e17",borderWidth:3,hoverOffset:8}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"65%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:12},padding:16,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},animation:{animateRotate:!0,animateScale:!0,duration:1200}}});G.push(s)}function ft(e){let t=document.getElementById("chart-points");if(!t||!window.Chart)return;let a=[...e].sort((o,s)=>(s.totalPoints||0)-(o.totalPoints||0)).slice(0,10),n=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(o=>o.name.substring(0,10)),datasets:[{label:"Points",data:a.map(o=>o.totalPoints||0),backgroundColor:E.goldAlpha,borderColor:E.gold,borderWidth:1,borderRadius:8}]},options:{...Ke(),indexAxis:"y"}});G.push(n)}function wt(e){let t=document.getElementById("chart-th");if(!t||!window.Chart)return;let a={};e.forEach(i=>{let l=i.townHallLevel||0;a[l]=(a[l]||0)+1});let n=Object.keys(a).sort((i,l)=>i-l).map(i=>`TH${i}`),o=Object.keys(a).sort((i,l)=>i-l).map(i=>a[i]),s=o.map((i,l)=>`hsl(${l*30+200}, 70%, 55%)`),r=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:n,datasets:[{data:o,backgroundColor:s,borderColor:"#0a0e17",borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"55%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:11},padding:12,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",cornerRadius:12,padding:12}}}});G.push(r)}function Ke(){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},scales:{x:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}},y:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}}},animation:{duration:1e3,easing:"easeOutQuart"}}}var yt=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function qe(){let e=await U(),t=e&&e.rewards?e.rewards:H,a=e&&e.punishments?e.punishments:N,n=e&&e.generalRules?e.generalRules:yt;return`
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
                        ${t.map(o=>`
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 
                                        bg-gradient-to-br from-green-500/10 to-emerald-600/5 backdrop-blur-sm
                                        hover:from-green-500/20 hover:to-emerald-600/10 hover:border-green-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${o.icon||"\u{1F48E}"}</span>
                                <div class="flex-1">
                                    <p class="text-white font-medium">${o.label}</p>
                                    <p class="text-xs text-gray-500 capitalize">${o.category}</p>
                                </div>
                                <span class="text-lg font-bold text-green-400" style="font-family: 'Lilita One', cursive;">
                                    +${o.points}
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
                        ${a.map(o=>`
                            <div class="animate-item group flex items-center gap-4 p-5 rounded-2xl border border-red-500/20 
                                        bg-gradient-to-br from-red-500/10 to-rose-600/5 backdrop-blur-sm
                                        hover:from-red-500/20 hover:to-rose-600/10 hover:border-red-500/40
                                        transition-all duration-300 hover:scale-[1.02]">
                                <span class="text-3xl">${o.icon||"\u26A0\uFE0F"}</span>
                                <div class="flex-1">
                                    <p class="text-white font-medium">${o.label}</p>
                                    <p class="text-xs text-gray-500 capitalize">${o.category}</p>
                                </div>
                                <span class="text-lg font-bold text-red-400" style="font-family: 'Lilita One', cursive;">
                                    ${o.points}
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
                        ${n.map((o,s)=>kt(s+1,o)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${u()}
    `}function kt(e,t){return`
        <div class="flex items-start gap-4 group">
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/20 
                         flex items-center justify-center text-sm font-bold text-amber-400 shrink-0 
                         group-hover:from-amber-500/30 transition-all">${e}</span>
            <p class="text-gray-300 text-sm leading-relaxed pt-1">${t}</p>
        </div>
    `}var be=class{constructor(){this.container=null,this.toasts=[],this.init()}init(){this.container||(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="fixed top-20 right-4 z-[9999] flex flex-col gap-3 pointer-events-none",this.container.style.maxWidth="380px",this.container.style.width="100%",document.body.appendChild(this.container))}show(t,a="info",n=4e3){this.init();let o={success:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',error:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',warning:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>',info:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'},s={success:"border-green-500/50 bg-green-500/10",error:"border-red-500/50 bg-red-500/10",warning:"border-amber-500/50 bg-amber-500/10",info:"border-blue-500/50 bg-blue-500/10"},r={success:"text-green-400",error:"text-red-400",warning:"text-amber-400",info:"text-blue-400"},i=document.createElement("div");return i.className=`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ${s[a]} backdrop-blur-xl text-white shadow-2xl toast-enter`,i.innerHTML=`
            <div class="${r[a]}">${o[a]}</div>
            <p class="text-sm font-medium flex-1">${t}</p>
            <button class="text-white/50 hover:text-white transition-colors shrink-0" onclick="this.closest('.toast-enter, .toast-visible').classList.add('toast-exit'); setTimeout(() => this.closest('.toast-enter, .toast-visible, .toast-exit')?.remove(), 300);">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,this.container.appendChild(i),requestAnimationFrame(()=>{i.classList.remove("toast-enter"),i.classList.add("toast-visible")}),n>0&&setTimeout(()=>{i.parentNode&&(i.classList.add("toast-exit"),setTimeout(()=>i.remove(),300))},n),i}success(t,a){return this.show(t,"success",a)}error(t,a){return this.show(t,"error",a)}warning(t,a){return this.show(t,"warning",a)}info(t,a){return this.show(t,"info",a)}},c=new be;var xe=class{constructor(){this.activeModal=null}show({title:t,content:a,size:n="md",showClose:o=!0,actions:s=[],onClose:r=null}){this.close();let i={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-6xl"},l=document.createElement("div");return l.className="fixed inset-0 z-[9998] flex items-center justify-center p-4",l.id="modal-backdrop",l.innerHTML=`
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop-bg" onclick="window.__modalManager?.close()"></div>
            <div class="relative w-full ${i[n]} modal-content-enter">
                <div class="relative rounded-2xl border border-white/10 bg-[#1a1f2e]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                    ${t?`
                    <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
                        <h3 class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">${t}</h3>
                        ${o?`
                        <button onclick="window.__modalManager?.close()" class="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>`:""}
                    </div>`:""}
                    <div class="px-6 py-5 text-gray-300 max-h-[70vh] overflow-y-auto modal-body">
                        ${a}
                    </div>
                    ${s.length>0?`
                    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                        ${s.map((d,p)=>`
                            <button id="modal-action-${p}" class="${d.class||"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all"}">
                                ${d.label}
                            </button>
                        `).join("")}
                    </div>`:""}
                </div>
            </div>
        `,document.body.appendChild(l),document.body.style.overflow="hidden",s.forEach((d,p)=>{let m=l.querySelector(`#modal-action-${p}`);m&&d.onClick&&m.addEventListener("click",()=>d.onClick(l))}),requestAnimationFrame(()=>{let d=l.querySelector(".modal-content-enter");d&&d.classList.add("modal-content-visible")}),this.activeModal=l,this.onClose=r,this._escHandler=d=>{d.key==="Escape"&&this.close()},document.addEventListener("keydown",this._escHandler),l}confirm({title:t,message:a,confirmLabel:n="Confirm",cancelLabel:o="Cancel",onConfirm:s,onCancel:r,danger:i=!1}){return this.show({title:t||"Konfirmasi",content:`<p class="text-gray-300">${a}</p>`,size:"sm",actions:[{label:o,class:"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all",onClick:()=>{this.close(),r&&r()}},{label:n,class:`px-4 py-2 rounded-xl text-sm font-bold text-white transition-all ${i?"bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700":"bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"}`,onClick:()=>{this.close(),s&&s()}}]})}close(){if(this.activeModal){let t=this.activeModal.querySelector(".modal-content-visible");t&&(t.classList.remove("modal-content-visible"),t.classList.add("modal-content-exit"));let a=this.activeModal;setTimeout(()=>{a.remove(),document.body.style.overflow=""},200),this.activeModal=null}this._escHandler&&document.removeEventListener("keydown",this._escHandler),this.onClose&&(this.onClose(),this.onClose=null)}},_=new xe;window.__modalManager=_;var A=null,B=null,Lt=[];async function Ve(){if(!b())return c.warning("Firebase belum dikonfigurasi. Silakan setup Firebase terlebih dahulu."),null;try{let{GoogleAuthProvider:e,signInWithPopup:t}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js"),a=new e,n=await t(R,a);return c.success(`Selamat datang, ${n.user.displayName}!`),n.user}catch(e){return e.code==="auth/popup-closed-by-user"?c.info("Login dibatalkan."):c.error(`Login gagal: ${e.message}`),console.error("Auth error:",e),null}}async function he(){try{let{signOut:e}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js");await e(R),A=null,B=null,c.info("Berhasil logout.")}catch(e){c.error("Logout gagal."),console.error("Sign out error:",e)}}function Ge(e){if(!b())return e(null,null),()=>{};let{onAuthStateChanged:t}=R.constructor.prototype;import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js").then(({onAuthStateChanged:a})=>{a(R,async n=>{if(A=n,n){try{await n.reload(),A=R.currentUser}catch(o){console.warn("Failed to reload auth profile:",o)}B=await $t(A.uid),await St(A)}else B=null;e(A,B),Lt.forEach(o=>o(A,B))})})}async function $t(e){try{let{doc:t,getDoc:a}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),n=await a(t(g,"users",e));return n.exists()&&n.data().role||"member"}catch(t){return console.warn("Error fetching user role:",t),"member"}}async function St(e){try{let{doc:t,getDoc:a,setDoc:n,serverTimestamp:o}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),s=t(g,"users",e.uid);if(!(await a(s)).exists())await n(s,{uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL,role:"member",playerTag:"",createdAt:o(),lastLogin:o()});else{let{updateDoc:i}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js");await i(s,{displayName:e.displayName,photoURL:e.photoURL,lastLogin:o()})}}catch(t){console.warn("Error ensuring user doc:",t)}}function O(){return A}function Ye(){return B}function I(){return B==="leader"||B==="coleader"}var T=[],M=null,$=new Set;async function Qe(){let e=document.getElementById("page-content");if(!I()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses Admin Panel</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}T=await h(),M=await U(),$.clear();let t=M&&M.rewards?M.rewards:H,a=O();e.innerHTML=`
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
                                    ${t.map(n=>`<option value="${n.points}" data-reason="${n.label}">${n.points>0?"+":""}${n.points} \u2014 ${n.label}</option>`).join("")}
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
                                        ${[5,10,15,20,25,30,40,50].map(n=>`<option value="${n}">${n}v${n}</option>`).join("")}
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
                                <select id="viol-member" class="admin-select">${Je()}</select>
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
                                <select id="role-member" class="admin-select">${Je()}</select>
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
        ${u()}
    `,window.__updatePointPresets=Tt,window.__fillPointPreset=Et,window.__submitPoints=()=>Dt(a),window.__submitWar=()=>At(a),window.__submitViolation=()=>Bt(a),window.__submitRole=()=>It(a),window.__loadAdminPointLogs=()=>ce(a),window.__deleteLogEntry=n=>Ht(n,a),window.__filterPointMembers=Pt,window.__selectAllPointMembers=Mt,window.__toggleMemberSelection=Ct,window.__resetSelectedMembers=Xe,setTimeout(()=>{ce(a),Z()},100)}function Je(){return T.map(e=>`<option value="${e.tag}">${e.name} (${e.tag})</option>`).join("")}function Z(){let e=document.getElementById("point-members-container"),t=document.getElementById("point-selected-container"),a=document.getElementById("selected-count");if(!e||!t)return;let n=document.getElementById("point-member-search")?.value.toLowerCase()||"",o=T.filter(r=>!$.has(r.tag));e.innerHTML=o.map(r=>{let l=r.name.toLowerCase().includes(n)||r.tag.toLowerCase().includes(n)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${r.name}" data-tag="${r.tag}" style="display: ${l};">
                <input type="checkbox" value="${r.tag}" onchange="window.__toggleMemberSelection('${r.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${r.name}</p>
                    <p class="text-[10px] text-gray-500">${r.tag} \u2022 TH${r.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${r.totalPoints||0}</span>
                    ${r.sidePoints?`<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${r.sidePoints} SP</span>`:""}
                </div>
            </label>
        `}).join(""),o.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let s=T.filter(r=>$.has(r.tag));t.innerHTML=s.map(r=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${r.tag}" checked onchange="window.__toggleMemberSelection('${r.tag}', false)" class="w-4 h-4 rounded border-amber-500/30 bg-amber-500/10 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-amber-400 font-medium truncate">${r.name}</p>
                    <p class="text-[10px] text-amber-500/60">${r.tag} \u2022 TH${r.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${r.totalPoints||0}</span>
                    ${r.sidePoints?`<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${r.sidePoints} SP</span>`:""}
                </div>
            </label>
        `).join(""),s.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=s.length)}function Pt(){Z()}function Mt(e){if(e){let t=document.getElementById("point-member-search")?.value.toLowerCase()||"";T.forEach(a=>{$.has(a.tag)||(a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))&&$.add(a.tag)})}else $.clear();Z()}function Ct(e,t){t?$.add(e):$.delete(e),Z()}function Xe(){$.clear();let e=document.getElementById("point-member-search");e&&(e.value="");let t=document.querySelector('input[name="point-target"][value="selected"]');t&&(t.checked=!0),Z()}function Tt(){let e=document.getElementById("point-type")?.value,t=document.getElementById("point-preset-container"),a=document.getElementById("point-preset");if(a)if(e==="manual")t.style.display="none";else{t.style.display="block";let n=M&&M.rewards?M.rewards:H,o=M&&M.punishments?M.punishments:N,s=e==="reward"?n:o;a.innerHTML='<option value="">-- Pilih Preset --</option>'+s.map(r=>`<option value="${r.points}" data-reason="${r.label}">${r.points>0?"+":""}${r.points} \u2014 ${r.label}</option>`).join("")}}function Et(){let t=document.getElementById("point-preset")?.selectedOptions[0];if(!t||!t.value)return;let a=document.getElementById("point-amount"),n=document.getElementById("point-reason");a&&(a.value=t.value),n&&(n.value=t.dataset.reason||"")}async function Dt(e){let t=document.querySelector('input[name="point-target"]:checked')?.value||"selected",a=[];t==="selected"?a=Array.from($):a=T.filter(l=>!$.has(l.tag)).map(l=>l.tag);let n=parseInt(document.getElementById("point-amount")?.value),o=document.getElementById("point-reason")?.value,s=document.getElementById("point-category")?.value;if(a.length===0){c.warning(t==="selected"?"Mohon pilih minimal satu anggota di daftar kanan.":"Tidak ada anggota tersisa di daftar kiri.");return}if(isNaN(n)||!o){c.warning("Mohon lengkapi semua field.");return}let r=a.map(l=>T.find(d=>d.tag===l)).filter(Boolean),i=r.map(l=>l.name).join(", ");_.confirm({title:"Konfirmasi Kelola Poin",message:`${n>0?"Tambah":"Kurangi"} <strong>${Math.abs(n)}</strong> poin untuk <strong>${r.length} anggota</strong> (${t==="selected"?"Daftar Kanan":"Daftar Kiri"})?<br><br>Anggota: <i>${i}</i><br><br>Alasan: ${o}`,onConfirm:async()=>{try{for(let l of r)await ue({memberTag:l.tag,memberName:l.name,amount:n,reason:o,category:s,adminName:e?.displayName||"Admin"});c.success(`Poin berhasil ${n>0?"ditambahkan":"dikurangi"} untuk ${r.length} anggota!`),document.getElementById("point-amount").value="",document.getElementById("point-reason").value="",Xe(),ce(e)}catch(l){c.error("Gagal menyimpan poin."),console.error(l)}}})}async function At(e){let t=parseInt(document.getElementById("war-size")?.value),a=document.getElementById("war-result")?.value,n=document.getElementById("war-opponent")?.value,o=parseInt(document.getElementById("war-our-stars")?.value)||0,s=parseInt(document.getElementById("war-enemy-stars")?.value)||0,r=parseFloat(document.getElementById("war-our-dest")?.value)||0,i=parseFloat(document.getElementById("war-enemy-dest")?.value)||0;if(!n){c.warning("Mohon isi nama lawan.");return}try{await Ce({date:new Date().toISOString(),opponent:n,warSize:t,result:a,clanStars:o,opponentStars:s,clanDestruction:r,opponentDestruction:i,addedBy:e?.displayName||"Admin"}),c.success("Data war berhasil disimpan!"),document.getElementById("war-opponent").value="",document.getElementById("war-our-stars").value="",document.getElementById("war-enemy-stars").value="",document.getElementById("war-our-dest").value="",document.getElementById("war-enemy-dest").value=""}catch(l){c.error("Gagal menyimpan data war."),console.error(l)}}async function Bt(e){let t=document.getElementById("viol-member")?.value,a=document.getElementById("viol-type")?.value,n=document.getElementById("viol-desc")?.value,o=parseInt(document.getElementById("viol-points")?.value)||0;if(!t||!n){c.warning("Mohon lengkapi semua field.");return}let s=T.find(r=>r.tag===t);try{await De({memberTag:t,memberName:s?.name||"Unknown",type:a,description:n,pointsDeducted:o,adminName:e?.displayName||"Admin"}),o>0&&await ue({memberTag:t,memberName:s?.name||"Unknown",amount:-o,reason:`[${a}] ${n}`,category:"violation",adminName:e?.displayName||"Admin"}),c.success("Violation berhasil dicatat!"),document.getElementById("viol-desc").value="",document.getElementById("viol-points").value=""}catch(r){c.error("Gagal menyimpan violation."),console.error(r)}}async function It(e){let t=document.getElementById("role-member")?.value,a=document.getElementById("role-new")?.value,n=document.getElementById("role-reason")?.value,o=T.find(s=>s.tag===t);if(!t||!a){c.warning("Mohon pilih member dan role.");return}try{await Ee({memberTag:t,memberName:o?.name||"Unknown",fromRole:o?.role||"member",toRole:a,reason:n||"Role updated",adminName:e?.displayName||"Admin"}),c.success(`Role ${o?.name} berhasil diubah ke ${a}!`),document.getElementById("role-reason").value=""}catch(s){c.error("Gagal mengubah role."),console.error(s)}}async function ce(e){let t=document.getElementById("admin-point-logs");if(t)try{let a=await W();if(a.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>';return}t.innerHTML=a.map(n=>{let o=K(q(n.date)),s=(n.amount||0)>=0,r="",i=" Poin";return n.category==="side_point"?(r=s?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",i=" Side Point"):r=s?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30",`
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-white font-medium">${n.memberName||"Unknown"}</span>
                            <span class="text-[10px] text-gray-500">${n.memberTag||""}</span>
                            <span class="text-xs text-gray-400">\u2014 ${n.reason||""}</span>
                        </div>
                        <p class="text-[10px] text-gray-500 mt-1">Oleh: ${n.adminName||"Admin"} \u2022 ${o}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${r}" style="font-family: 'Lilita One', cursive;">
                            ${s?"+":""}${n.amount}${i}
                        </span>
                        <button onclick="window.__deleteLogEntry('${n.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log Poin">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log poin.</p>'}}async function Ht(e,t){_.confirm({title:"Hapus Log Poin",message:"Apakah Anda yakin ingin menghapus log poin ini?",onConfirm:async()=>{try{await ie(e),c.success("Log poin berhasil dihapus!"),ce(t)}catch(a){console.error(a),c.error("Gagal menghapus log poin.")}}})}var x={rewards:[],punishments:[],generalRules:[]},Rt=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function et(){let e=document.getElementById("page-content");if(!I()){e.innerHTML=`
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
    `;try{let t=await U();t?x={rewards:t.rewards||[],punishments:t.punishments||[],generalRules:t.generalRules||[]}:x={rewards:JSON.parse(JSON.stringify(H)),punishments:JSON.parse(JSON.stringify(N)),generalRules:[...Rt]}}catch(t){console.error(t),c.error("Gagal mengambil data rules.")}te(e)}function te(e){e.innerHTML=`
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
                                ${x.generalRules.map((t,a)=>`
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
                                ${x.rewards.map((t,a)=>Ze(a,t,"reward")).join("")}
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
                                ${x.punishments.map((t,a)=>Ze(a,t,"punishment")).join("")}
                            </div>
                            <button onclick="window.__addPreset('punishment')" class="w-full py-2.5 rounded-xl border border-dashed border-red-500/20 text-xs font-medium text-red-400 hover:text-red-300 hover:border-red-500/40 transition-colors">
                                \u2795 Tambah Preset Punishment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${u()}
    `,window.__addGeneralRule=()=>{ee(),x.generalRules.push(""),te(e)},window.__removeGeneralRule=t=>{ee(),x.generalRules.splice(t,1),te(e)},window.__addPreset=t=>{ee(),(t==="reward"?x.rewards:x.punishments).push({id:`${t}_${Date.now()}`,label:"",points:t==="reward"?10:-10,icon:t==="reward"?"\u2B50":"\u274C",category:"war"}),te(e)},window.__removePreset=(t,a)=>{ee(),(a==="reward"?x.rewards:x.punishments).splice(t,1),te(e)},window.__saveRulesConfig=async()=>{if(ee(),x.generalRules.some(n=>!n.trim())){c.warning("Teks aturan umum tidak boleh kosong.");return}let t=x.rewards.some(n=>!n.label.trim()||isNaN(n.points)),a=x.punishments.some(n=>!n.label.trim()||isNaN(n.points));if(t||a){c.warning("Semua label preset harus diisi dan poin harus berupa angka.");return}try{await Ae(x),c.success("Rules & presets berhasil disimpan ke database!")}catch(n){console.error(n),c.error("Gagal menyimpan rules.")}}}function Ze(e,t,a){let n=a==="reward";return`
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
    `}function ee(){let e=document.querySelectorAll(".general-rule-input");x.generalRules=Array.from(e).map(o=>o.value);let t=document.querySelectorAll(".preset-row"),a=[],n=[];t.forEach((o,s)=>{let r=o.dataset.type,i=o.querySelector(".preset-icon-input")?.value||"",l=o.querySelector(".preset-label-input")?.value||"",d=parseInt(o.querySelector(".preset-points-input")?.value)||0,p=o.querySelector(".preset-category-input")?.value||"war",m={id:`${r}_${s}_${Date.now()}`,icon:i,label:l,points:d,category:p};r==="reward"?a.push(m):n.push(m)}),x.rewards=a,x.punishments=n}var ae={heroTitle:"",heroDescription:""};async function tt(){let e=document.getElementById("page-content");if(!I()){e.innerHTML=`
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
    `;try{ae=await se()}catch(t){console.error(t),c.error("Gagal mengambil data landing page.")}_t(e)}function _t(e){e.innerHTML=`
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
                                              placeholder="Masukkan judul hero...">${ae.heroTitle||""}</textarea>
                                    <div class="mt-2 text-xs text-gray-500 space-y-1">
                                        <p>\u{1F4A1} Gunakan kelas gradient untuk efek warna premium:</p>
                                        <p class="font-mono text-amber-400">&lt;span class="hero-title-gradient"&gt;Teks Anda&lt;/span&gt;</p>
                                        <p class="font-mono text-yellow-400">&lt;span class="hero-title-gradient-2"&gt;Teks Anda&lt;/span&gt;</p>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Description / Subtitle</label>
                                    <textarea id="hero-desc-input" rows="4" class="admin-input text-sm leading-relaxed" 
                                              placeholder="Masukkan deskripsi hero...">${ae.heroDescription||""}</textarea>
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
                                    ${ae.heroTitle||""}
                                </h1>

                                <!-- Dynamic Preview Description -->
                                <p id="preview-desc" class="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                                    ${ae.heroDescription||""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${u()}
    `;let t=document.getElementById("hero-title-input"),a=document.getElementById("hero-desc-input"),n=document.getElementById("preview-title"),o=document.getElementById("preview-desc");t&&n&&t.addEventListener("input",()=>{n.innerHTML=t.value||'<span class="text-gray-600">[Judul Kosong]</span>'}),a&&o&&a.addEventListener("input",()=>{o.textContent=a.value||"[Deskripsi Kosong]"}),window.__saveLandingConfig=async()=>{let s=t?.value.trim(),r=a?.value.trim();if(!s||!r){c.warning("Teks judul dan deskripsi tidak boleh kosong.");return}try{await Be({heroTitle:s,heroDescription:r}),c.success("Landing page settings berhasil disimpan!")}catch(i){console.error(i),c.error("Gagal menyimpan landing page settings.")}}}var j=[],S=new Set;async function at(){let e=document.getElementById("page-content");if(!I()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses halaman Kelola Side Points</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}j=await h(),S.clear();let t=O();e.innerHTML=`
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
        ${u()}
    `,window.__filterSideMembers=Ot,window.__selectAllSideMembers=jt,window.__toggleSideMemberSelection=Nt,window.__resetSideSelectedMembers=nt,window.__fillSidePreset=Ft,window.__submitSidePoints=()=>Wt(t),window.__deleteLogEntry=a=>Ut(a,t),setTimeout(()=>{ve(t),Y()},100)}function Y(){let e=document.getElementById("side-members-container"),t=document.getElementById("side-selected-container"),a=document.getElementById("side-selected-count");if(!e||!t)return;let n=document.getElementById("side-member-search")?.value.toLowerCase()||"",o=j.filter(r=>!S.has(r.tag));e.innerHTML=o.map(r=>{let l=r.name.toLowerCase().includes(n)||r.tag.toLowerCase().includes(n)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${r.name}" data-tag="${r.tag}" style="display: ${l};">
                <input type="checkbox" value="${r.tag}" onchange="window.__toggleSideMemberSelection('${r.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${r.name}</p>
                    <p class="text-[10px] text-gray-500">${r.tag} \u2022 TH${r.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${r.totalPoints||0}</span>
                    ${r.sidePoints?`<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${r.sidePoints} SP</span>`:""}
                </div>
            </label>
        `}).join(""),o.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let s=j.filter(r=>S.has(r.tag));t.innerHTML=s.map(r=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${r.tag}" checked onchange="window.__toggleSideMemberSelection('${r.tag}', false)" class="w-4 h-4 rounded border-blue-500/30 bg-blue-500/10 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-blue-400 font-medium truncate">${r.name}</p>
                    <p class="text-[10px] text-blue-500/60">${r.tag} \u2022 TH${r.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${r.totalPoints||0}</span>
                    ${r.sidePoints?`<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${r.sidePoints} SP</span>`:""}
                </div>
            </label>
        `).join(""),s.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=s.length)}function Ot(){Y()}function jt(e){if(e){let t=document.getElementById("side-member-search")?.value.toLowerCase()||"";j.forEach(a=>{S.has(a.tag)||(a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))&&S.add(a.tag)})}else S.clear();Y()}function Nt(e,t){t?S.add(e):S.delete(e),Y()}function nt(){S.clear();let e=document.getElementById("side-member-search");e&&(e.value="");let t=document.querySelector('input[name="side-point-target"][value="selected"]');t&&(t.checked=!0),Y()}function Ft(){let e=document.getElementById("side-preset");if(!e||!e.value)return;let t=document.getElementById("side-amount");t&&(t.value=e.value)}async function Wt(e){let t=document.querySelector('input[name="side-point-target"]:checked')?.value||"selected",a=[];t==="selected"?a=Array.from(S):a=j.filter(i=>!S.has(i.tag)).map(i=>i.tag);let n=parseInt(document.getElementById("side-amount")?.value),o=document.getElementById("side-reason")?.value;if(a.length===0){c.warning(t==="selected"?"Mohon pilih minimal satu anggota di daftar kanan.":"Tidak ada anggota tersisa di daftar kiri.");return}if(isNaN(n)||!o){c.warning("Mohon lengkapi semua field.");return}let s=a.map(i=>j.find(l=>l.tag===i)).filter(Boolean),r=s.map(i=>i.name).join(", ");_.confirm({title:"Konfirmasi Kelola Side Points",message:`Apakah Anda yakin ingin ${n>0?"menambah":"mengurangi"} <strong>${Math.abs(n)}</strong> side points untuk <strong>${s.length} anggota</strong> (${t==="selected"?"Daftar Kanan":"Daftar Kiri"})?<br><br>Anggota: <i>${r}</i><br><br>Alasan: ${o}`,onConfirm:async()=>{try{for(let i of s)await Te({memberTag:i.tag,memberName:i.name,amount:n,reason:o,category:"side_point",adminName:e?.displayName||"Admin"});c.success(`Side points berhasil ${n>0?"ditambahkan":"dikurangi"} untuk ${s.length} anggota!`),document.getElementById("side-amount").value="",document.getElementById("side-reason").value="",document.getElementById("side-preset").value="",nt(),j=await h(),Y(),ve(e)}catch(i){c.error("Gagal menyimpan side points."),console.error(i)}}})}async function ve(e){let t=document.getElementById("admin-sidepoint-logs");if(t)try{let n=(await W()).filter(o=>o.category==="side_point");if(n.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan side points.</p>';return}t.innerHTML=n.map(o=>{let s=K(q(o.date)),r=(o.amount||0)>=0,i=r?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30";return`
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-white font-medium">${o.memberName||"Unknown"}</span>
                            <span class="text-[10px] text-gray-500">${o.memberTag||""}</span>
                            <span class="text-xs text-gray-400">\u2014 ${o.reason||""}</span>
                        </div>
                        <p class="text-[10px] text-gray-500 mt-1">Oleh: ${o.adminName||"Admin"} \u2022 ${s}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${i}" style="font-family: 'Lilita One', cursive;">
                            ${r?"+":""}${o.amount} Side Point
                        </span>
                        <button onclick="window.__deleteLogEntry('${o.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log side points.</p>'}}async function Ut(e,t){_.confirm({title:"Hapus Log Side Points",message:"Apakah Anda yakin ingin menghapus log side points ini? Tindakan ini tidak mengembalikan nilai side points anggota.",onConfirm:async()=>{try{await ie(e),c.success("Log side points berhasil dihapus!"),ve(t)}catch(a){console.error(a),c.error("Gagal menghapus log.")}}})}var rt=null,ot="",zt={"/":{render:qt,title:"Home"},"/dashboard":{render:Vt,title:"Dashboard"},"/members":{render:Gt,title:"Members"},"/leaderboard":{render:Jt,title:"Leaderboard"},"/wars":{render:Qt,title:"War History"},"/statistics":{render:Xt,title:"Statistics"},"/rules":{render:Zt,title:"Clan Rules"},"/admin":{render:ea,title:"Admin Panel"},"/admin/rules":{render:ta,title:"Rules Settings"},"/admin/landing":{render:aa,title:"Landing Settings"},"/admin/sidepoints":{render:na,title:"Manage Side Points"},"/login":{render:ra,title:"Login"}};document.addEventListener("DOMContentLoaded",()=>{Kt()});async function Kt(){rt=new re("particles-canvas"),rt.start(),Ge((e,t)=>{ne(),e&&fe()==="/login"&&(window.location.hash="#/dashboard")}),it(),window.addEventListener("hashchange",it),console.log("\u2694\uFE0F StreetLourd initialized!")}function fe(){return window.location.hash.slice(1)||"/"}function it(){let e=fe();if(e.startsWith("/member/")){let a=e.replace("/member/","");ot="/member/:tag",document.title="Member Detail \u2014 StreetLourd",Yt(a),ne();return}let t=zt[e];t?(ot=e,document.title=`${t.title} \u2014 StreetLourd`,t.render()):window.location.hash="#/",ne()}function ne(){let e=document.getElementById("navbar-container");if(!e)return;let t=O(),a=Ye(),n=fe(),o="#"+n;n.startsWith("/member/")&&(o="#/members"),e.innerHTML=ye(o,t,a),ke();let s=document.getElementById("logout-btn"),r=document.getElementById("mobile-logout-btn");s&&s.addEventListener("click",async()=>{await he(),window.location.hash="#/",ne()}),r&&r.addEventListener("click",async()=>{await he(),window.location.hash="#/",ne()})}async function qt(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await Ie(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>{V(),je()},100)}async function Vt(){let e=document.getElementById("page-content");await L(e,()=>Oe())}async function Gt(){let e=document.getElementById("page-content");await L(e,()=>Ne())}async function Yt(e){let t=document.getElementById("page-content");await L(t,()=>Fe(e))}async function Jt(){let e=document.getElementById("page-content");await L(e,()=>We())}async function Qt(){let e=document.getElementById("page-content");await L(e,()=>Ue())}async function Xt(){let e=document.getElementById("page-content");await L(e,()=>ze())}async function Zt(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await qe(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>V(),100)}async function ea(){let e=document.getElementById("page-content");await L(e,()=>Qe())}async function ta(){let e=document.getElementById("page-content");await L(e,()=>et())}async function aa(){let e=document.getElementById("page-content");await L(e,()=>tt())}async function na(){let e=document.getElementById("page-content");await L(e,()=>at())}function ra(){let e=O(),t=document.getElementById("page-content");if(e){window.location.hash="#/dashboard";return}t.innerHTML=`
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
    `,document.getElementById("google-login-btn")?.addEventListener("click",async()=>{let a=document.getElementById("google-login-btn");a.disabled=!0,a.innerHTML='<span class="animate-spin">\u23F3</span> Logging in...',await Ve(),a.disabled=!1,a.innerHTML="Sign in with Google"})}
