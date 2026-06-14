var S=[{id:"war_participation",label:"Ikut War",points:10,icon:"\u2694\uFE0F",category:"war"},{id:"used_both_attacks",label:"Menggunakan 2 Attack",points:10,icon:"\u{1F5E1}\uFE0F",category:"war"},{id:"three_stars",label:"3 Bintang",points:15,icon:"\u2B50",category:"war"},{id:"cwl_participation",label:"Ikut CWL",points:30,icon:"\u{1F3C6}",category:"cwl"},{id:"clan_games_complete",label:"Clan Games Selesai",points:20,icon:"\u{1F3AE}",category:"clangames"},{id:"donation_1000",label:"Donasi 1000",points:5,icon:"\u{1F381}",category:"donation"},{id:"clan_capital_active",label:"Clan Capital Aktif",points:10,icon:"\u{1F3F0}",category:"capital"}],E=[{id:"missed_attack_1",label:"Tidak Menggunakan Attack Pertama",points:-20,icon:"\u274C",category:"war"},{id:"missed_attack_2",label:"Tidak Menggunakan Attack Kedua",points:-15,icon:"\u26D4",category:"war"},{id:"missed_war_no_excuse",label:"Tidak Ikut War Tanpa Izin",points:-30,icon:"\u{1F6AB}",category:"war"},{id:"afk_too_long",label:"AFK Terlalu Lama",points:-10,icon:"\u{1F4A4}",category:"activity"},{id:"rule_violation",label:"Melanggar Aturan Clan",points:-25,icon:"\u26A0\uFE0F",category:"violation"}];var pe=[{label:"Home",hash:"#/",icon:"\u{1F3E0}"},{label:"Members",hash:"#/members",icon:"\u{1F465}"},{label:"Leaderboard",hash:"#/leaderboard",icon:"\u{1F3C6}"},{label:"War History",hash:"#/wars",icon:"\u2694\uFE0F"},{label:"Statistics",hash:"#/statistics",icon:"\u{1F4CA}"},{label:"Clan Rules",hash:"#/rules",icon:"\u{1F4DC}"},{label:"Admin Panel",hash:"#/admin",icon:"\u2699\uFE0F",adminOnly:!0}];var $={gold:"rgba(245, 166, 35, 1)",purple:"rgba(168, 85, 247, 1)",blue:"rgba(59, 130, 246, 1)",green:"rgba(34, 197, 94, 1)",red:"rgba(239, 68, 68, 1)",cyan:"rgba(6, 182, 212, 1)",goldAlpha:"rgba(245, 166, 35, 0.2)",purpleAlpha:"rgba(168, 85, 247, 0.2)",blueAlpha:"rgba(59, 130, 246, 0.2)",greenAlpha:"rgba(34, 197, 94, 0.2)",redAlpha:"rgba(239, 68, 68, 0.2)",cyanAlpha:"rgba(6, 182, 212, 0.2)"};function ue(e="#/",t=null,a=null){let r=a==="leader"||a==="coleader",o=pe.filter(i=>!(i.adminOnly&&!r));return`
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
                            ${o.map(i=>`
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
                            ${o.map(i=>`
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
    `}function ge(){let e=document.getElementById("main-navbar");if(!e)return;let t=0;function a(){let c=window.scrollY,u=e.querySelector(".navbar-glass");u&&(c>60?u.classList.add("navbar-solid"):u.classList.remove("navbar-solid"),t=c)}window.addEventListener("scroll",a,{passive:!0}),a();let r=document.getElementById("mobile-menu-btn"),o=document.getElementById("mobile-menu"),i=document.getElementById("mobile-menu-panel"),s=document.getElementById("mobile-menu-close"),n=document.getElementById("mobile-menu-backdrop");function l(){!o||!i||(o.classList.remove("hidden"),requestAnimationFrame(()=>{i.classList.remove("translate-x-full"),i.classList.add("translate-x-0")}))}function d(){!o||!i||(i.classList.remove("translate-x-0"),i.classList.add("translate-x-full"),setTimeout(()=>o.classList.add("hidden"),300))}return r?.addEventListener("click",l),s?.addEventListener("click",d),n?.addEventListener("click",d),document.querySelectorAll(".mobile-nav-link").forEach(c=>{c.addEventListener("click",d)}),()=>{window.removeEventListener("scroll",a)}}var G=class{constructor(t="particles-canvas"){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.particles=[],this.animationId=null,this.maxParticles=60,this.colors=["rgba(245, 166, 35, 0.4)","rgba(168, 85, 247, 0.3)","rgba(59, 130, 246, 0.3)","rgba(255, 215, 0, 0.2)","rgba(147, 51, 234, 0.2)"],this.resize(),window.addEventListener("resize",()=>this.resize()))}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}createParticle(){return{x:Math.random()*this.canvas.width,y:this.canvas.height+Math.random()*100,size:Math.random()*3+1,speedY:-(Math.random()*.5+.2),speedX:(Math.random()-.5)*.3,opacity:Math.random()*.5+.1,color:this.colors[Math.floor(Math.random()*this.colors.length)],life:0,maxLife:Math.random()*300+200,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.01}}update(){for(;this.particles.length<this.maxParticles;)this.particles.push(this.createParticle());for(let t=this.particles.length-1;t>=0;t--){let a=this.particles[t];a.x+=a.speedX,a.y+=a.speedY,a.life++,a.pulse+=a.pulseSpeed;let r=a.life/a.maxLife;r<.1?a.currentOpacity=a.opacity*(r/.1):r>.8?a.currentOpacity=a.opacity*((1-r)/.2):a.currentOpacity=a.opacity,a.currentSize=a.size+Math.sin(a.pulse)*.5,(a.life>=a.maxLife||a.y<-20)&&this.particles.splice(t,1)}}draw(){if(this.ctx){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t of this.particles)this.ctx.save(),this.ctx.globalAlpha=t.currentOpacity||t.opacity,this.ctx.fillStyle=t.color,this.ctx.shadowColor=t.color,this.ctx.shadowBlur=t.currentSize*4,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.currentSize,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}}animate(){this.update(),this.draw(),this.animationId=requestAnimationFrame(()=>this.animate())}start(){this.canvas&&this.animate()}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.stop(),this.particles=[],this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}};function p(){return`
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
    `}function j({icon:e,label:t,value:a,color:r="blue",subtitle:o="",glow:i=!1}){let s={gold:"from-amber-500/20 to-yellow-600/10 border-amber-500/30",purple:"from-purple-500/20 to-violet-600/10 border-purple-500/30",blue:"from-blue-500/20 to-cyan-600/10 border-blue-500/30",green:"from-green-500/20 to-emerald-600/10 border-green-500/30",red:"from-red-500/20 to-rose-600/10 border-red-500/30",cyan:"from-cyan-500/20 to-teal-600/10 border-cyan-500/30"},n={gold:"shadow-amber-500/20",purple:"shadow-purple-500/20",blue:"shadow-blue-500/20",green:"shadow-green-500/20",red:"shadow-red-500/20",cyan:"shadow-cyan-500/20"},l={gold:"from-amber-500 to-yellow-600",purple:"from-purple-500 to-violet-600",blue:"from-blue-500 to-cyan-600",green:"from-green-500 to-emerald-600",red:"from-red-500 to-rose-600",cyan:"from-cyan-500 to-teal-600"};return`
        <div class="group relative rounded-2xl border bg-gradient-to-br ${s[r]} 
                    p-6 transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 
                    ${i?`shadow-lg ${n[r]}`:""} 
                    hover:shadow-xl ${n[r]} animate-item cursor-default">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${l[r]} flex items-center justify-center text-2xl shadow-lg shrink-0">
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
    `}function be({name:e,tag:t,role:a,townHallLevel:r,trophies:o,donations:i,clanCapital:s,totalPoints:n,onClick:l}){let d={leader:"from-amber-500 to-yellow-600",coLeader:"from-purple-500 to-violet-600",admin:"from-blue-500 to-cyan-600",member:"from-gray-500 to-gray-600"},c={leader:"Leader",coLeader:"Co-Leader",admin:"Elder",member:"Member"},D={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[r]||"#6b7280";return`
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                    p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 
                    hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer animate-item"
             onclick="${l||""}">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                     style="background: linear-gradient(135deg, ${D}, ${D}99); box-shadow: 0 0 15px ${D}40;">
                    TH${r||"?"}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1 min-w-0">
                        <h3 class="text-white font-bold truncate flex-1 min-w-0">${e}</h3>
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${d[a]||d.member} shrink-0">
                            ${c[a]||"Member"}
                        </span>
                    </div>
                    <p class="text-xs text-gray-500 mb-2">${t}</p>
                    <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span class="flex items-center gap-1 shrink-0">\u{1F3C6} ${(o||0).toLocaleString()}</span>
                        <span class="flex items-center gap-1 shrink-0">\u{1F381} ${(i||0).toLocaleString()}</span>
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <div class="text-lg font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                        ${a==="leader"?"\u{1F451}":n||0}
                    </div>
                    <div class="text-[10px] text-gray-500 uppercase">${a==="leader"?"Leader":"Points"}</div>
                </div>
                <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `}function xe({date:e,opponent:t,warSize:a,result:r,clanStars:o,opponentStars:i,clanDestruction:s,opponentDestruction:n,onClick:l}){let d={win:{label:"VICTORY",bg:"from-green-500/20 to-emerald-600/10",border:"border-green-500/30",badge:"from-green-500 to-emerald-600"},loss:{label:"DEFEAT",bg:"from-red-500/20 to-rose-600/10",border:"border-red-500/30",badge:"from-red-500 to-rose-600"},draw:{label:"DRAW",bg:"from-gray-500/20 to-gray-600/10",border:"border-gray-500/30",badge:"from-gray-500 to-gray-600"}},c=d[r]||d.draw;return`
        <div class="group relative rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} backdrop-blur-sm 
                    p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-item"
             onclick="${l||""}">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-xs text-gray-400">${e||""}</p>
                    <p class="text-xs text-gray-500">War Size: ${a||"?"}v${a||"?"}</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${c.badge}">
                    ${c.label}
                </span>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">\u2B50 ${o||0}</p>
                    <p class="text-xs text-gray-400 mt-1">Our Clan</p>
                    <p class="text-xs text-gray-500">${(s||0).toFixed(1)}%</p>
                </div>
                <div class="text-gray-500 font-bold text-lg">VS</div>
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white/60" style="font-family: 'Lilita One', cursive;">\u2B50 ${i||0}</p>
                    <p class="text-xs text-gray-400 mt-1 truncate">${t||"Unknown"}</p>
                    <p class="text-xs text-gray-500">${(n||0).toFixed(1)}%</p>
                </div>
            </div>
        </div>
    `}function y({rank:e,name:t,tag:a,townHallLevel:r,totalPoints:o,totalWars:i,totalStars:s,donations:n}){let l=e<=3,c={1:{medal:"\u{1F947}",border:"border-amber-400/50",bg:"from-amber-500/20 to-yellow-600/10",glow:"shadow-amber-500/30",textColor:"text-amber-400"},2:{medal:"\u{1F948}",border:"border-gray-300/50",bg:"from-gray-300/20 to-gray-400/10",glow:"shadow-gray-300/20",textColor:"text-gray-300"},3:{medal:"\u{1F949}",border:"border-orange-500/50",bg:"from-orange-500/20 to-amber-600/10",glow:"shadow-orange-500/20",textColor:"text-orange-400"}}[e]||{medal:"",border:"border-white/10",bg:"bg-white/5",glow:"",textColor:"text-white"};return l?`
            <div class="relative rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} backdrop-blur-sm 
                        p-6 transition-all duration-300 hover:scale-[1.03] shadow-lg ${c.glow} 
                        ${e===1?"gold-shimmer":""} animate-item">
                <div class="flex items-center gap-4">
                    <div class="text-4xl">${c.medal}</div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold ${c.textColor} truncate" style="font-family: 'Lilita One', cursive;">${t}</h3>
                        <p class="text-xs text-gray-500">${a} \xB7 TH${r||"?"}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold ${c.textColor}" style="font-family: 'Lilita One', cursive;">${(o||0).toLocaleString()}</p>
                        <p class="text-[10px] text-gray-500 uppercase">Points</p>
                    </div>
                </div>
                <div class="flex gap-4 mt-4 text-xs text-gray-400 border-t border-white/10 pt-3">
                    <span>\u{1F381} ${(n||0).toLocaleString()} Donated</span>
                </div>
            </div>
        `:`
        <div class="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 
                    hover:bg-white/10 transition-all duration-200 animate-item">
            <div class="w-8 text-center font-bold text-gray-500 text-sm">#${e}</div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                    <span class="text-white font-medium truncate">${t}</span>
                    <span class="text-[10px] text-gray-500">TH${r||"?"}</span>
                </div>
            </div>
            <div class="flex gap-4 text-xs text-gray-500 shrink-0">
                <span>\u{1F381} ${(n||0).toLocaleString()}</span>
            </div>
            <div class="text-right shrink-0">
                <span class="text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${(o||0).toLocaleString()}</span>
            </div>
        </div>
    `}import{initializeApp as Qe}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";import{getAuth as Xe}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";import{getFirestore as Ze}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";import{getStorage as et}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";var ae={apiKey:"AIzaSyCJvQDiM7JQ7n0si8UgI-lpVA7CgiVD8eA",authDomain:"victorytoclan.firebaseapp.com",projectId:"victorytoclan",storageBucket:"victorytoclan.firebasestorage.app",messagingSenderId:"762294306774",appId:"1:762294306774:web:601d43f7d499167e40c677"},K,P,g,tt;try{K=Qe(ae),P=Xe(K),g=Ze(K),tt=et(K),console.log("\u2705 Firebase initialized successfully")}catch(e){console.warn("\u26A0\uFE0F Firebase initialization failed:",e.message),console.warn("Please configure your Firebase project in js/config/firebase.js")}function x(){return ae.apiKey!=="YOUR_API_KEY"&&ae.projectId!=="YOUR_PROJECT_ID"}async function h(){return await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js")}async function v(){if(!x())return re();try{let{collection:e,getDocs:t,query:a,orderBy:r}=await h(),o=a(e(g,"members"),r("totalPoints","desc"));return(await t(o)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("getMembers:",e),re()}}async function fe(e){if(!x())return re().find(t=>t.tag===e)||null;try{let{doc:t,getDoc:a}=await h(),r=await a(t(g,"members",e));return r.exists()?{id:r.id,...r.data()}:null}catch(t){return console.error("getMember:",t),null}}async function A(){if(!x())return he();try{let{collection:e,getDocs:t,query:a,orderBy:r}=await h(),o=a(e(g,"wars"),r("date","desc"));return(await t(o)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("getWars:",e),he()}}async function we(e){if(!x())return;let{collection:t,addDoc:a,serverTimestamp:r}=await h();return await a(t(g,"wars"),{...e,createdAt:r()})}async function oe(e){if(!x())return;let{collection:t,addDoc:a,serverTimestamp:r,doc:o,runTransaction:i}=await h(),s=o(g,"members",e.memberTag);await i(g,async n=>{let l=await n.get(s);if(!l.exists())throw"Document does not exist!";let d=(l.data().totalPoints||0)+e.amount;d>1500&&(d=1500),n.update(s,{totalPoints:d})}),await a(t(g,"pointHistory"),{...e,date:r()})}async function Y(){if(!x())return ve();try{let{collection:e,getDocs:t,query:a,orderBy:r,limit:o}=await h(),i=a(e(g,"pointHistory"),r("date","desc"),o(150));return(await t(i)).docs.map(n=>({id:n.id,...n.data()}))}catch(e){return console.error("getAllPointHistory:",e),ve()}}async function ye(e){if(!x())return;let{doc:t,deleteDoc:a}=await h(),r=t(g,"pointHistory",e);await a(r)}async function ke(e){if(!x())return;let{collection:t,addDoc:a,serverTimestamp:r}=await h();return await a(t(g,"promotions"),{...e,date:r()})}async function Le(e){if(!x())return;let{collection:t,addDoc:a,serverTimestamp:r}=await h();return await a(t(g,"violations"),{...e,date:r()})}function re(){return["DragonSlayer","WarMachine","ClashKing","QueenArcher","GoblinHero","WallBreaker","TH17Master","EliteWarrior","SuperWitch","IceGolem","LavaHound","ElectroDragon","YetiSmash","HeadHunter","InfernoTower","PhoenixRise","RoyalGhost","SneakyGoblin","SuperBowler","PartyWizard"].map((t,a)=>({tag:`#${String(2e3+a).padStart(4,"0")}ABC`,name:t,townHallLevel:Math.floor(Math.random()*7)+11,role:a===0?"leader":a<3?"coLeader":a<7?"admin":"member",trophies:Math.floor(Math.random()*2e3)+4e3,donations:Math.floor(Math.random()*5e3)+500,donationsReceived:Math.floor(Math.random()*3e3)+200,clanCapitalContributions:Math.floor(Math.random()*1e5)+1e4,totalPoints:Math.floor(Math.random()*300)+50,totalWars:Math.floor(Math.random()*50)+10,totalStars:Math.floor(Math.random()*100)+20,avgDestruction:Math.random()*30+70}))}function he(){return["Dark Warriors","Storm Legion","Iron Wolves","Shadow Riders","Thunder Hawks"].map((t,a)=>({id:`war-${a}`,date:new Date(Date.now()-a*3*864e5).toISOString(),opponent:t,warSize:[15,20,25,30,40][a%5],result:["win","win","loss","win","draw"][a],clanStars:Math.floor(Math.random()*30)+20,opponentStars:Math.floor(Math.random()*30)+15,clanDestruction:Math.random()*20+80,opponentDestruction:Math.random()*30+60}))}function ve(){return["Ikut War","3 Bintang","Donasi 1000","Clan Games","Tidak Attack"].map((t,a)=>({id:`ph-${a}`,amount:a===4?-20:[10,15,5,20][a],reason:t,category:"war",adminName:"Leader",date:new Date(Date.now()-a*2*864e5).toISOString()}))}async function B(){if(!x())return null;try{let{doc:e,getDoc:t}=await h(),a=await t(e(g,"settings","rules"));return a.exists()?a.data():null}catch(e){return console.error("getRules:",e),null}}async function $e(e){if(!x())return;let{doc:t,setDoc:a}=await h();await a(t(g,"settings","rules"),e)}async function J(){if(!x())return{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."};try{let{doc:e,getDoc:t}=await h(),a=await t(e(g,"settings","landing"));return a.exists()?a.data():{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}catch(e){return console.error("getLandingSettings:",e),{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}}async function Ce(e){if(!x())return;let{doc:t,setDoc:a}=await h();await a(t(g,"settings","landing"),e,{merge:!0})}async function Me(){let e=await J(),a=(await v()).filter(r=>r.role!=="leader").sort((r,o)=>(o.totalPoints||0)-(r.totalPoints||0)).slice(0,3);return`
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
                    ${Q("\u2694\uFE0F","War Tracker","Input dan pantau hasil war dengan tracking attack, bintang, dan destruction otomatis.","from-red-500/20 to-orange-500/10","border-red-500/20")}
                    ${Q("\u{1F4CA}","Point System","Sistem poin otomatis dengan reward dan punishment yang transparan untuk semua anggota.","from-blue-500/20 to-cyan-500/10","border-blue-500/20")}
                    ${Q("\u{1F3C6}","Leaderboard","Ranking anggota berdasarkan kontribusi dengan efek emas untuk top player.","from-amber-500/20 to-yellow-500/10","border-amber-500/20")}
                    ${Q("\u{1F465}","Member Profiles","Profil detail setiap anggota dengan riwayat war, poin, dan statistik lengkap.","from-purple-500/20 to-violet-500/10","border-purple-500/20")}
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
                        ${y({rank:2,...a[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${y({rank:1,...a[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${y({rank:3,...a[2]})}
                    </div>
                </div>
                `:a.length>0?`
                <div class="grid gap-4 animate-on-scroll" data-stagger="true">
                    ${a.map((r,o)=>y({rank:o+1,...r})).join("")}
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
    `}function Q(e,t,a,r,o){return`
        <div class="animate-item group rounded-2xl border ${o} bg-gradient-to-br ${r} 
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
        `}};function R(e,t,a){return`
        <div class="flex flex-col items-center justify-center py-16 text-center animate-on-scroll">
            <div class="text-6xl mb-4 opacity-50">${e}</div>
            <h3 class="text-xl font-bold text-white/70 mb-2" style="font-family: 'Lilita One', cursive;">${t}</h3>
            <p class="text-gray-500 max-w-md">${a}</p>
        </div>
    `}function C(e){return e==null?"0":Number(e).toLocaleString("en-US")}function Te(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}):"-"}function X(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function Se(e,t=300){let a;return function(...r){clearTimeout(a),a=setTimeout(()=>e.apply(this,r),t)}}function Pe(e){let t={leader:{label:"Leader",bg:"from-yellow-500 to-amber-600",text:"text-black"},coLeader:{label:"Co-Leader",bg:"from-purple-500 to-violet-600",text:"text-white"},admin:{label:"Elder",bg:"from-blue-500 to-cyan-600",text:"text-white"},member:{label:"Member",bg:"from-gray-500 to-gray-600",text:"text-white"}},a=t[e]||t.member;return`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${a.bg} ${a.text}">${a.label}</span>`}function Z(e){return e?e.toDate?e.toDate():e.seconds?new Date(e.seconds*1e3):new Date(e):null}async function De(){let e=document.getElementById("page-content");e.innerHTML=`
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
    `;let[t,a]=await Promise.all([v(),A()]),r=t.length,o=[...t].sort((n,l)=>(l.donations||0)-(n.donations||0))[0],i=[...t].sort((n,l)=>(l.trophies||0)-(n.trophies||0))[0],s=[...t].sort((n,l)=>(l.totalWars||0)-(n.totalWars||0))[0];e.innerHTML=`
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
                    ${j({icon:"\u{1F465}",label:"Total Members",value:C(r),color:"blue"})}
                    ${j({icon:"\u{1F381}",label:"Top Donator",value:o?.name||"-",color:"purple",subtitle:`${C(o?.donations||0)} donated`})}
                    ${j({icon:"\u{1F3C6}",label:"Top Player",value:i?.name||"-",color:"gold",glow:!0,subtitle:`${C(i?.trophies||0)} trophies`})}
                    ${j({icon:"\u{1F525}",label:"Most Active",value:s?.name||"-",color:"red",subtitle:`${s?.totalWars||0} wars joined`})}
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
                        ${a.slice(0,3).map(n=>at(n)).join("")}
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
                        ${t.filter(n=>n.role!=="leader").slice(0,3).map((n,l)=>rt(n,l+1)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `}function at(e){let t={win:{label:"VICTORY",color:"text-green-400",border:"border-green-500/30",bg:"from-green-500/10 to-transparent"},loss:{label:"DEFEAT",color:"text-red-400",border:"border-red-500/30",bg:"from-red-500/10 to-transparent"},draw:{label:"DRAW",color:"text-gray-400",border:"border-gray-500/30",bg:"from-gray-500/10 to-transparent"}},a=t[e.result]||t.draw,r=e.date?new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-";return`
        <div class="animate-item rounded-2xl border ${a.border} bg-gradient-to-br ${a.bg} backdrop-blur-sm p-5 
                    hover:scale-[1.02] transition-all duration-300 cursor-pointer" onclick="location.hash='#/wars'">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-gray-500">${r}</span>
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
    `}function rt(e,t){let a=["\u{1F947}","\u{1F948}","\u{1F949}"],r=["text-amber-400","text-gray-300","text-orange-400"];return`
        <div class="animate-item flex items-center gap-4 p-4 rounded-xl border ${["border-amber-500/30","border-gray-400/30","border-orange-500/30"][t-1]} bg-white/5 
                    hover:bg-white/10 transition-all duration-200 cursor-pointer" 
             onclick="location.hash='#/member/${encodeURIComponent(e.tag)}'">
            <span class="text-2xl">${a[t-1]}</span>
            <div class="flex-1 min-w-0">
                <p class="text-white font-medium truncate">${e.name}</p>
                <p class="text-xs text-gray-500">TH${e.townHallLevel||"?"}</p>
            </div>
            <p class="${r[t-1]} font-bold" style="font-family: 'Lilita One', cursive;">
                ${(e.totalPoints||0).toLocaleString()}
            </p>
        </div>
    `}function I(){let e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("animate-visible"),a.target.dataset.stagger&&a.target.querySelectorAll(".animate-item").forEach((o,i)=>{o.style.transitionDelay=`${Math.min(i,8)*100}ms`,o.classList.add("animate-visible")}))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".animate-on-scroll").forEach(t=>{e.observe(t)}),e}function Ee(){let e=document.querySelectorAll("[data-parallax]");if(!e.length)return;let t=!1;function a(){t||(requestAnimationFrame(()=>{let r=window.scrollY;e.forEach(o=>{let i=parseFloat(o.dataset.parallax)||.5;o.style.transform=`translateY(${r*i}px)`}),t=!1}),t=!0)}return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)}async function k(e,t){e.style.opacity="0",e.style.transform="translateY(10px)",await new Promise(a=>setTimeout(a,200)),await t(),window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="translateY(0)"}),setTimeout(()=>I(),100)}var W=[],_=[],w=1,ee=12;async function Ae(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="grid gap-4">${f.repeat("memberCard",6)}</div>
            </div>
        </div>
    `,W=await v(),_=[...W],w=1,ne(e)}function ne(e){let t=Math.ceil(_.length/ee),a=_.slice((w-1)*ee,w*ee),r=[...new Set(W.map(l=>l.townHallLevel))].sort((l,d)=>d-l);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Members
                    </h1>
                    <p class="text-gray-400">Daftar anggota clan \xB7 ${W.length} members</p>
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
                            ${r.map(l=>`<option value="${l}">TH ${l}</option>`).join("")}
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
                    ${a.length>0?a.map(l=>be({name:l.name,tag:l.tag,role:l.role,townHallLevel:l.townHallLevel,trophies:l.trophies,donations:l.donations,clanCapital:l.clanCapitalContributions,totalPoints:l.totalPoints,onClick:`location.hash='#/member/${encodeURIComponent(l.tag)}'`})).join(""):R("\u{1F465}","Tidak ada member ditemukan","Coba ubah filter pencarian")}
                </div>

                <!-- Pagination -->
                ${t>1?`
                <div class="flex items-center justify-center gap-2 animate-on-scroll" id="pagination">
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${w===1?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${w-1})" ${w===1?"disabled":""}>
                        \u2190 Prev
                    </button>
                    ${ot(w,t)}
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${w===t?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${w+1})" ${w===t?"disabled":""}>
                        Next \u2192
                    </button>
                </div>
                `:""}
            </div>
        </div>
        ${p()}
    `;let o=document.getElementById("member-search"),i=document.getElementById("filter-th"),s=document.getElementById("filter-role"),n=Se(()=>{let l=o?.value.toLowerCase()||"",d=i?.value||"",c=s?.value||"";_=W.filter(u=>{let D=!l||u.name.toLowerCase().includes(l)||u.tag.toLowerCase().includes(l),Ye=!d||u.townHallLevel==d,Je=!c||u.role===c;return D&&Ye&&Je}),w=1,ne(e)},250);o?.addEventListener("input",n),i?.addEventListener("change",n),s?.addEventListener("change",n),window.__membersPage=l=>{let d=Math.ceil(_.length/ee);l<1||l>d||(w=l,ne(e),window.scrollTo({top:0,behavior:"smooth"}))},setTimeout(()=>I(),50)}function ot(e,t){let a=[],o=Math.max(1,e-Math.floor(2.5)),i=Math.min(t,o+5-1);i-o<4&&(o=Math.max(1,i-5+1));for(let s=o;s<=i;s++)a.push(`
            <button class="w-10 h-10 rounded-xl text-sm font-medium transition-all
                           ${s===e?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}"
                    onclick="window.__membersPage(${s})">
                ${s}
            </button>
        `);return a.join("")}async function Be(e){let t=document.getElementById("page-content");t.innerHTML=`<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${f.profile()}</div></div>`;let a=decodeURIComponent(e),r=await fe(a);if(!r){t.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-5xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F50D}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Member Not Found</h2>
                    <p class="text-gray-500 mb-6">Tag: ${a}</p>
                    <a href="#/members" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Members</a>
                </div>
            </div>
        `;return}let i={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[r.townHallLevel]||"#6b7280",s="",n=r.totalPoints||0;if(r.role==="leader")s=`
            <div class="flex items-center gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div class="text-3xl">\u{1F451}</div>
                <p class="text-gray-300 text-sm leading-relaxed">\u{1F451} Anggota ini adalah <strong>Leader Utama</strong> klan.</p>
            </div>
        `;else if(r.role==="coLeader"){let l=Math.max(0,Math.min(100,n/1500*100)),d="";n<1250?d=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${n}</strong>) di bawah batas minimal Co-Leader (1250). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Elder</strong>.</p>
                    </div>
                </div>
            `:d=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <span class="text-green-400 shrink-0">\u269C\uFE0F</span>
                    <p class="text-gray-300 text-sm leading-relaxed">\u2728 Anggota ini telah mencapai pangkat <strong>Co-Leader</strong> dengan poin maksimal (1500).</p>
                </div>
            `,s=`
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Status Jabatan</p>
                        <p class="text-white font-bold text-lg">Co-Leader (Maksimal)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${n} / 1500 Poin</p>
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
        `}else if(r.role==="admin")if(n<1e3)s=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${n}</strong>) di bawah batas minimal Elder (1000). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Member</strong>.</p>
                    </div>
                </div>
            `;else{let d=Math.max(0,Math.min(100,(n-1250)/250*100)),c=1500-n,u=c<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${n}) telah mencukupi untuk dipromosikan menjadi Co-Leader.`:`Dibutuhkan <strong>${c}</strong> poin lagi untuk naik jabatan menjadi <strong>Co-Leader</strong>.`;s=`
                <div class="space-y-6">
                    <div class="flex justify-between items-end text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                            <p class="text-white font-bold text-lg">Co-Leader</p>
                        </div>
                        <div class="text-right">
                            <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                            <p class="text-amber-400 font-bold text-lg">${n} / 1500 Poin</p>
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
                        <p class="text-gray-300 text-sm leading-relaxed">${u}</p>
                    </div>
                </div>
            `}else{let d=Math.max(0,Math.min(100,(n-500)/750*100)),c=1250-n,u="";n<300?u=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u{1F6A8}</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Kick</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${n}</strong>) di bawah batas minimal Member (300). Anggota ini direkomendasikan untuk <strong>dikeluarkan (kick) dari klan</strong>.</p>
                    </div>
                </div>
            `:u=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span class="text-amber-400">\u{1F4A1}</span>
                    <p class="text-gray-300 text-sm leading-relaxed">${c<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${n}) telah mencukupi untuk dipromosikan menjadi Elder.`:`Dibutuhkan <strong>${c}</strong> poin lagi untuk naik jabatan menjadi <strong>Elder</strong>.`}</p>
                </div>
            `,s=`
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                        <p class="text-white font-bold text-lg">Elder (Elder/Admin)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${n} / 1250 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${d}%">
                    </div>
                </div>
                
                <!-- Status/Kick Info -->
                ${u}
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
                             style="background: linear-gradient(135deg, ${i}, ${i}99); box-shadow: 0 0 25px ${i}40;">
                            TH${r.townHallLevel||"?"}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 class="text-2xl md:text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    ${r.name}
                                </h1>
                                ${Pe(r.role)}
                            </div>
                            <p class="text-gray-500 text-sm mb-3">${r.tag}</p>
                            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span class="flex items-center gap-1.5">\u{1F3C6} ${C(r.trophies)} trophies</span>
                                <span class="flex items-center gap-1.5">\u{1F381} ${C(r.donations)} donated</span>
                            </div>
                        </div>
                        <div class="text-center md:text-right">
                            <p class="text-4xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                                ${C(r.totalPoints||0)}
                            </p>
                            <p class="text-xs text-gray-500 uppercase tracking-wider">Total Points</p>
                        </div>
                    </div>
                </div>

                <!-- Promotion Requirements Progress Section -->
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u2B06\uFE0F Keterangan Naik Jabatan
                    </h2>
                    
                    ${s}
                </div>
            </div>
        </div>
        ${p()}
    `}async function Re(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${f.repeat("leaderboardRow",10)}
        </div></div>
    `;let t=await v(),a=await Y(),r=t.filter(s=>s.role!=="leader").sort((s,n)=>(n.totalPoints||0)-(s.totalPoints||0)).slice(0,100);if(r.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                ${R("\u{1F3C6}","Belum Ada Data","Leaderboard akan muncul setelah data member tersedia")}
            </div></div>${p()}
        `;return}let o=r.slice(0,3),i=r.slice(3);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12 animate-on-scroll">
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-3" style="font-family: 'Lilita One', cursive;">
                        \u{1F3C6} Leaderboard
                    </h1>
                    <p class="text-gray-400">Top ${r.length} members berdasarkan total poin kontribusi</p>
                </div>

                <!-- Top 3 Podium -->
                ${o.length>=3?`
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${y({rank:2,...o[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${y({rank:1,...o[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${y({rank:3,...o[2]})}
                    </div>
                </div>
                `:`
                <div class="grid gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${o.map((s,n)=>y({rank:n+1,...s})).join("")}
                </div>
                `}

                <!-- Rest of Rankings -->
                ${i.length>0?`
                <div class="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Rankings #4 - #${r.length}</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${i.map((s,n)=>y({rank:n+4,...s})).join("")}
                    </div>
                </div>
                `:""}

                <!-- Global Point Log Section -->
                <div class="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">\u{1F4DC} Riwayat Aktivitas Poin Klan</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${a.length>0?a.map(s=>{let n=X(Z(s.date)),l=(s.amount||0)>=0,d=l?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30";return`
                            <div class="animate-item flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-white font-medium">${s.memberName||"Unknown"}</span>
                                        <span class="text-[10px] text-gray-500">${s.memberTag||""}</span>
                                        <span class="text-xs text-gray-500">\u2014 ${s.reason||""}</span>
                                    </div>
                                    <p class="text-[10px] text-gray-500 mt-1">Oleh: ${s.adminName||"Admin"} \u2022 ${n}</p>
                                </div>
                                <div class="shrink-0 text-right">
                                    <span class="px-3 py-1 rounded-full text-xs font-bold ${d}" style="font-family: 'Lilita One', cursive;">
                                        ${l?"+":""}${s.amount} Poin
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
    `}async function Ie(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${f.repeat("warCard",5)}
        </div></div>
    `;let t=await A();if(t.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u2694\uFE0F War History</h1>
                ${R("\u2694\uFE0F","Belum Ada Data War","Data war akan muncul setelah admin menginput hasil war")}
            </div></div>${p()}
        `;return}let a=t.length,r=t.filter(n=>n.result==="win").length,o=t.filter(n=>n.result==="loss").length,i=t.filter(n=>n.result==="draw").length,s=a?Math.round(r/a*100):0;e.innerHTML=`
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
                        <p class="text-2xl font-bold text-green-400" style="font-family: 'Lilita One', cursive;">${r}</p>
                        <p class="text-xs text-gray-500">Victories</p>
                    </div>
                    <div class="animate-item rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-red-400" style="font-family: 'Lilita One', cursive;">${o}</p>
                        <p class="text-xs text-gray-500">Defeats</p>
                    </div>
                    <div class="animate-item rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-center">
                        <p class="text-2xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">${s}%</p>
                        <p class="text-xs text-gray-500">Win Rate</p>
                    </div>
                </div>

                <!-- Timeline -->
                <div class="relative animate-on-scroll">
                    <!-- Timeline Line -->
                    <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-transparent"></div>

                    <div class="space-y-6" data-stagger="true">
                        ${t.map((n,l)=>{let d=Te(n.date);return`
                                <div class="animate-item relative flex gap-6 md:gap-8">
                                    <!-- Timeline Dot -->
                                    <div class="relative z-10 shrink-0">
                                        <div class="w-3 h-3 mt-7 rounded-full ${{win:"bg-green-500",loss:"bg-red-500",draw:"bg-gray-500"}[n.result]||"bg-gray-500"} ring-4 ring-[#0a0e17]"></div>
                                    </div>
                                    <!-- War Card -->
                                    <div class="flex-1 pb-2">
                                        ${xe({date:d,opponent:n.opponent,warSize:n.warSize,result:n.result,clanStars:n.clanStars,opponentStars:n.opponentStars,clanDestruction:n.clanDestruction,opponentDestruction:n.opponentDestruction})}
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `}var H=[];async function He(){H.forEach(r=>{try{r.destroy()}catch{}}),H=[];let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-7xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${f.repeat("chart",4)}</div>
        </div></div>
    `;let[t,a]=await Promise.all([v(),A()]);e.innerHTML=`
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
    `,await nt(),it(t),st(a),lt(t),dt(t)}function nt(){return new Promise(e=>{if(window.Chart){e();return}let t=setInterval(()=>{window.Chart&&(clearInterval(t),e())},100);setTimeout(()=>{clearInterval(t),e()},5e3)})}function it(e){let t=document.getElementById("chart-donations");if(!t||!window.Chart)return;let a=[...e].sort((o,i)=>(i.donations||0)-(o.donations||0)).slice(0,10),r=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(o=>o.name.substring(0,10)),datasets:[{label:"Donations",data:a.map(o=>o.donations||0),backgroundColor:$.purpleAlpha,borderColor:$.purple,borderWidth:1,borderRadius:8}]},options:Oe()});H.push(r)}function st(e){let t=document.getElementById("chart-wars");if(!t||!window.Chart)return;let a=e.filter(s=>s.result==="win").length,r=e.filter(s=>s.result==="loss").length,o=e.filter(s=>s.result==="draw").length,i=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:["Victories","Defeats","Draws"],datasets:[{data:[a,r,o],backgroundColor:[$.green,$.red,$.gold],borderColor:"#0a0e17",borderWidth:3,hoverOffset:8}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"65%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:12},padding:16,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},animation:{animateRotate:!0,animateScale:!0,duration:1200}}});H.push(i)}function lt(e){let t=document.getElementById("chart-points");if(!t||!window.Chart)return;let a=[...e].sort((o,i)=>(i.totalPoints||0)-(o.totalPoints||0)).slice(0,10),r=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(o=>o.name.substring(0,10)),datasets:[{label:"Points",data:a.map(o=>o.totalPoints||0),backgroundColor:$.goldAlpha,borderColor:$.gold,borderWidth:1,borderRadius:8}]},options:{...Oe(),indexAxis:"y"}});H.push(r)}function dt(e){let t=document.getElementById("chart-th");if(!t||!window.Chart)return;let a={};e.forEach(n=>{let l=n.townHallLevel||0;a[l]=(a[l]||0)+1});let r=Object.keys(a).sort((n,l)=>n-l).map(n=>`TH${n}`),o=Object.keys(a).sort((n,l)=>n-l).map(n=>a[n]),i=o.map((n,l)=>`hsl(${l*30+200}, 70%, 55%)`),s=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:r,datasets:[{data:o,backgroundColor:i,borderColor:"#0a0e17",borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"55%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:11},padding:12,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",cornerRadius:12,padding:12}}}});H.push(s)}function Oe(){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},scales:{x:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}},y:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}}},animation:{duration:1e3,easing:"easeOutQuart"}}}var ct=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function je(){let e=await B(),t=e&&e.rewards?e.rewards:S,a=e&&e.punishments?e.punishments:E,r=e&&e.generalRules?e.generalRules:ct;return`
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
                        ${r.map((o,i)=>mt(i+1,o)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `}function mt(e,t){return`
        <div class="flex items-start gap-4 group">
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/20 
                         flex items-center justify-center text-sm font-bold text-amber-400 shrink-0 
                         group-hover:from-amber-500/30 transition-all">${e}</span>
            <p class="text-gray-300 text-sm leading-relaxed pt-1">${t}</p>
        </div>
    `}var ie=class{constructor(){this.container=null,this.toasts=[],this.init()}init(){this.container||(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="fixed top-20 right-4 z-[9999] flex flex-col gap-3 pointer-events-none",this.container.style.maxWidth="380px",this.container.style.width="100%",document.body.appendChild(this.container))}show(t,a="info",r=4e3){this.init();let o={success:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',error:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',warning:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>',info:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'},i={success:"border-green-500/50 bg-green-500/10",error:"border-red-500/50 bg-red-500/10",warning:"border-amber-500/50 bg-amber-500/10",info:"border-blue-500/50 bg-blue-500/10"},s={success:"text-green-400",error:"text-red-400",warning:"text-amber-400",info:"text-blue-400"},n=document.createElement("div");return n.className=`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ${i[a]} backdrop-blur-xl text-white shadow-2xl toast-enter`,n.innerHTML=`
            <div class="${s[a]}">${o[a]}</div>
            <p class="text-sm font-medium flex-1">${t}</p>
            <button class="text-white/50 hover:text-white transition-colors shrink-0" onclick="this.closest('.toast-enter, .toast-visible').classList.add('toast-exit'); setTimeout(() => this.closest('.toast-enter, .toast-visible, .toast-exit')?.remove(), 300);">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,this.container.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("toast-enter"),n.classList.add("toast-visible")}),r>0&&setTimeout(()=>{n.parentNode&&(n.classList.add("toast-exit"),setTimeout(()=>n.remove(),300))},r),n}success(t,a){return this.show(t,"success",a)}error(t,a){return this.show(t,"error",a)}warning(t,a){return this.show(t,"warning",a)}info(t,a){return this.show(t,"info",a)}},m=new ie;var se=class{constructor(){this.activeModal=null}show({title:t,content:a,size:r="md",showClose:o=!0,actions:i=[],onClose:s=null}){this.close();let n={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-6xl"},l=document.createElement("div");return l.className="fixed inset-0 z-[9998] flex items-center justify-center p-4",l.id="modal-backdrop",l.innerHTML=`
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop-bg" onclick="window.__modalManager?.close()"></div>
            <div class="relative w-full ${n[r]} modal-content-enter">
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
                    ${i.length>0?`
                    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                        ${i.map((d,c)=>`
                            <button id="modal-action-${c}" class="${d.class||"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all"}">
                                ${d.label}
                            </button>
                        `).join("")}
                    </div>`:""}
                </div>
            </div>
        `,document.body.appendChild(l),document.body.style.overflow="hidden",i.forEach((d,c)=>{let u=l.querySelector(`#modal-action-${c}`);u&&d.onClick&&u.addEventListener("click",()=>d.onClick(l))}),requestAnimationFrame(()=>{let d=l.querySelector(".modal-content-enter");d&&d.classList.add("modal-content-visible")}),this.activeModal=l,this.onClose=s,this._escHandler=d=>{d.key==="Escape"&&this.close()},document.addEventListener("keydown",this._escHandler),l}confirm({title:t,message:a,confirmLabel:r="Confirm",cancelLabel:o="Cancel",onConfirm:i,onCancel:s,danger:n=!1}){return this.show({title:t||"Konfirmasi",content:`<p class="text-gray-300">${a}</p>`,size:"sm",actions:[{label:o,class:"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all",onClick:()=>{this.close(),s&&s()}},{label:r,class:`px-4 py-2 rounded-xl text-sm font-bold text-white transition-all ${n?"bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700":"bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"}`,onClick:()=>{this.close(),i&&i()}}]})}close(){if(this.activeModal){let t=this.activeModal.querySelector(".modal-content-visible");t&&(t.classList.remove("modal-content-visible"),t.classList.add("modal-content-exit"));let a=this.activeModal;setTimeout(()=>{a.remove(),document.body.style.overflow=""},200),this.activeModal=null}this._escHandler&&document.removeEventListener("keydown",this._escHandler),this.onClose&&(this.onClose(),this.onClose=null)}},te=new se;window.__modalManager=te;var M=null,T=null,pt=[];async function _e(){if(!x())return m.warning("Firebase belum dikonfigurasi. Silakan setup Firebase terlebih dahulu."),null;try{let{GoogleAuthProvider:e,signInWithPopup:t}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js"),a=new e,r=await t(P,a);return m.success(`Selamat datang, ${r.user.displayName}!`),r.user}catch(e){return e.code==="auth/popup-closed-by-user"?m.info("Login dibatalkan."):m.error(`Login gagal: ${e.message}`),console.error("Auth error:",e),null}}async function le(){try{let{signOut:e}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js");await e(P),M=null,T=null,m.info("Berhasil logout.")}catch(e){m.error("Logout gagal."),console.error("Sign out error:",e)}}function We(e){if(!x())return e(null,null),()=>{};let{onAuthStateChanged:t}=P.constructor.prototype;import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js").then(({onAuthStateChanged:a})=>{a(P,async r=>{if(M=r,r){try{await r.reload(),M=P.currentUser}catch(o){console.warn("Failed to reload auth profile:",o)}T=await ut(M.uid),await gt(M)}else T=null;e(M,T),pt.forEach(o=>o(M,T))})})}async function ut(e){try{let{doc:t,getDoc:a}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),r=await a(t(g,"users",e));return r.exists()&&r.data().role||"member"}catch(t){return console.warn("Error fetching user role:",t),"member"}}async function gt(e){try{let{doc:t,getDoc:a,setDoc:r,serverTimestamp:o}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),i=t(g,"users",e.uid);if(!(await a(i)).exists())await r(i,{uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL,role:"member",playerTag:"",createdAt:o(),lastLogin:o()});else{let{updateDoc:n}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js");await n(i,{displayName:e.displayName,photoURL:e.photoURL,lastLogin:o()})}}catch(t){console.warn("Error ensuring user doc:",t)}}function F(){return M}function Fe(){return T}function O(){return T==="leader"||T==="coleader"}var N=[],L=null;async function Ne(){let e=document.getElementById("page-content");if(!O()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses Admin Panel</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}N=await v(),L=await B();let t=L&&L.rewards?L.rewards:S,a=F();e.innerHTML=`
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
                        <a href="#/admin/rules" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 text-sm">
                            \u{1F4DC} Pengaturan Rules
                        </a>
                    </div>
                </div>

                <!-- Admin Sections as Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll" data-stagger="true">
                    
                    <!-- Add/Deduct Points -->
                    <div class="animate-item rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                            \u{1F48E} Kelola Poin
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5">Pilih Member</label>
                                <select id="point-member" class="admin-select">${de()}</select>
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
                                    ${t.map(r=>`<option value="${r.points}" data-reason="${r.label}">${r.points>0?"+":""}${r.points} \u2014 ${r.label}</option>`).join("")}
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
                                        ${[5,10,15,20,25,30,40,50].map(r=>`<option value="${r}">${r}v${r}</option>`).join("")}
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
                                <select id="viol-member" class="admin-select">${de()}</select>
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
                                <select id="role-member" class="admin-select">${de()}</select>
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
    `,window.__updatePointPresets=bt,window.__fillPointPreset=xt,window.__submitPoints=()=>ht(a),window.__submitWar=()=>vt(a),window.__submitViolation=()=>ft(a),window.__submitRole=()=>wt(a),window.__loadAdminPointLogs=()=>ce(a),window.__deleteLogEntry=r=>yt(r,a),setTimeout(()=>{ce(a)},100)}function de(){return N.map(e=>`<option value="${e.tag}">${e.name} (${e.tag})</option>`).join("")}function bt(){let e=document.getElementById("point-type")?.value,t=document.getElementById("point-preset-container"),a=document.getElementById("point-preset");if(a)if(e==="manual")t.style.display="none";else{t.style.display="block";let r=L&&L.rewards?L.rewards:S,o=L&&L.punishments?L.punishments:E,i=e==="reward"?r:o;a.innerHTML='<option value="">-- Pilih Preset --</option>'+i.map(s=>`<option value="${s.points}" data-reason="${s.label}">${s.points>0?"+":""}${s.points} \u2014 ${s.label}</option>`).join("")}}function xt(){let t=document.getElementById("point-preset")?.selectedOptions[0];if(!t||!t.value)return;let a=document.getElementById("point-amount"),r=document.getElementById("point-reason");a&&(a.value=t.value),r&&(r.value=t.dataset.reason||"")}async function ht(e){let t=document.getElementById("point-member")?.value,a=parseInt(document.getElementById("point-amount")?.value),r=document.getElementById("point-reason")?.value,o=document.getElementById("point-category")?.value;if(!t||isNaN(a)||!r){m.warning("Mohon lengkapi semua field.");return}let i=N.find(s=>s.tag===t);te.confirm({title:"Konfirmasi",message:`${a>0?"Tambah":"Kurangi"} <strong>${Math.abs(a)}</strong> poin untuk <strong>${i?.name}</strong>?<br><br>Alasan: ${r}`,onConfirm:async()=>{try{await oe({memberTag:t,memberName:i?.name||"Unknown",amount:a,reason:r,category:o,adminName:e?.displayName||"Admin"}),m.success(`Poin berhasil ${a>0?"ditambahkan":"dikurangi"}!`),document.getElementById("point-amount").value="",document.getElementById("point-reason").value=""}catch(s){m.error("Gagal menyimpan poin."),console.error(s)}}})}async function vt(e){let t=parseInt(document.getElementById("war-size")?.value),a=document.getElementById("war-result")?.value,r=document.getElementById("war-opponent")?.value,o=parseInt(document.getElementById("war-our-stars")?.value)||0,i=parseInt(document.getElementById("war-enemy-stars")?.value)||0,s=parseFloat(document.getElementById("war-our-dest")?.value)||0,n=parseFloat(document.getElementById("war-enemy-dest")?.value)||0;if(!r){m.warning("Mohon isi nama lawan.");return}try{await we({date:new Date().toISOString(),opponent:r,warSize:t,result:a,clanStars:o,opponentStars:i,clanDestruction:s,opponentDestruction:n,addedBy:e?.displayName||"Admin"}),m.success("Data war berhasil disimpan!"),document.getElementById("war-opponent").value="",document.getElementById("war-our-stars").value="",document.getElementById("war-enemy-stars").value="",document.getElementById("war-our-dest").value="",document.getElementById("war-enemy-dest").value=""}catch(l){m.error("Gagal menyimpan data war."),console.error(l)}}async function ft(e){let t=document.getElementById("viol-member")?.value,a=document.getElementById("viol-type")?.value,r=document.getElementById("viol-desc")?.value,o=parseInt(document.getElementById("viol-points")?.value)||0;if(!t||!r){m.warning("Mohon lengkapi semua field.");return}let i=N.find(s=>s.tag===t);try{await Le({memberTag:t,memberName:i?.name||"Unknown",type:a,description:r,pointsDeducted:o,adminName:e?.displayName||"Admin"}),o>0&&await oe({memberTag:t,memberName:i?.name||"Unknown",amount:-o,reason:`[${a}] ${r}`,category:"violation",adminName:e?.displayName||"Admin"}),m.success("Violation berhasil dicatat!"),document.getElementById("viol-desc").value="",document.getElementById("viol-points").value=""}catch(s){m.error("Gagal menyimpan violation."),console.error(s)}}async function wt(e){let t=document.getElementById("role-member")?.value,a=document.getElementById("role-new")?.value,r=document.getElementById("role-reason")?.value,o=N.find(i=>i.tag===t);if(!t||!a){m.warning("Mohon pilih member dan role.");return}try{await ke({memberTag:t,memberName:o?.name||"Unknown",fromRole:o?.role||"member",toRole:a,reason:r||"Role updated",adminName:e?.displayName||"Admin"}),m.success(`Role ${o?.name} berhasil diubah ke ${a}!`),document.getElementById("role-reason").value=""}catch(i){m.error("Gagal mengubah role."),console.error(i)}}async function ce(e){let t=document.getElementById("admin-point-logs");if(t)try{let a=await Y();if(a.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>';return}t.innerHTML=a.map(r=>{let o=X(Z(r.date)),i=(r.amount||0)>=0,s=i?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30";return`
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-white font-medium">${r.memberName||"Unknown"}</span>
                            <span class="text-[10px] text-gray-500">${r.memberTag||""}</span>
                            <span class="text-xs text-gray-400">\u2014 ${r.reason||""}</span>
                        </div>
                        <p class="text-[10px] text-gray-500 mt-1">Oleh: ${r.adminName||"Admin"} \u2022 ${o}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${s}" style="font-family: 'Lilita One', cursive;">
                            ${i?"+":""}${r.amount} Poin
                        </span>
                        <button onclick="window.__deleteLogEntry('${r.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log Poin">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log poin.</p>'}}async function yt(e,t){te.confirm({title:"Hapus Log Poin",message:"Apakah Anda yakin ingin menghapus log poin ini?",onConfirm:async()=>{try{await ye(e),m.success("Log poin berhasil dihapus!"),ce(t)}catch(a){console.error(a),m.error("Gagal menghapus log poin.")}}})}var b={rewards:[],punishments:[],generalRules:[]},kt=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function ze(){let e=document.getElementById("page-content");if(!O()){e.innerHTML=`
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
    `;try{let t=await B();t?b={rewards:t.rewards||[],punishments:t.punishments||[],generalRules:t.generalRules||[]}:b={rewards:JSON.parse(JSON.stringify(S)),punishments:JSON.parse(JSON.stringify(E)),generalRules:[...kt]}}catch(t){console.error(t),m.error("Gagal mengambil data rules.")}z(e)}function z(e){e.innerHTML=`
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
                                ${b.generalRules.map((t,a)=>`
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
                                ${b.rewards.map((t,a)=>Ue(a,t,"reward")).join("")}
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
                                ${b.punishments.map((t,a)=>Ue(a,t,"punishment")).join("")}
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
    `,window.__addGeneralRule=()=>{U(),b.generalRules.push(""),z(e)},window.__removeGeneralRule=t=>{U(),b.generalRules.splice(t,1),z(e)},window.__addPreset=t=>{U(),(t==="reward"?b.rewards:b.punishments).push({id:`${t}_${Date.now()}`,label:"",points:t==="reward"?10:-10,icon:t==="reward"?"\u2B50":"\u274C",category:"war"}),z(e)},window.__removePreset=(t,a)=>{U(),(a==="reward"?b.rewards:b.punishments).splice(t,1),z(e)},window.__saveRulesConfig=async()=>{if(U(),b.generalRules.some(r=>!r.trim())){m.warning("Teks aturan umum tidak boleh kosong.");return}let t=b.rewards.some(r=>!r.label.trim()||isNaN(r.points)),a=b.punishments.some(r=>!r.label.trim()||isNaN(r.points));if(t||a){m.warning("Semua label preset harus diisi dan poin harus berupa angka.");return}try{await $e(b),m.success("Rules & presets berhasil disimpan ke database!")}catch(r){console.error(r),m.error("Gagal menyimpan rules.")}}}function Ue(e,t,a){let r=a==="reward";return`
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
    `}function U(){let e=document.querySelectorAll(".general-rule-input");b.generalRules=Array.from(e).map(o=>o.value);let t=document.querySelectorAll(".preset-row"),a=[],r=[];t.forEach((o,i)=>{let s=o.dataset.type,n=o.querySelector(".preset-icon-input")?.value||"",l=o.querySelector(".preset-label-input")?.value||"",d=parseInt(o.querySelector(".preset-points-input")?.value)||0,c=o.querySelector(".preset-category-input")?.value||"war",u={id:`${s}_${i}_${Date.now()}`,icon:n,label:l,points:d,category:c};s==="reward"?a.push(u):r.push(u)}),b.rewards=a,b.punishments=r}var V={heroTitle:"",heroDescription:""};async function Ve(){let e=document.getElementById("page-content");if(!O()){e.innerHTML=`
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
    `;try{V=await J()}catch(t){console.error(t),m.error("Gagal mengambil data landing page.")}Lt(e)}function Lt(e){e.innerHTML=`
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
                                              placeholder="Masukkan judul hero...">${V.heroTitle||""}</textarea>
                                    <div class="mt-2 text-xs text-gray-500 space-y-1">
                                        <p>\u{1F4A1} Gunakan kelas gradient untuk efek warna premium:</p>
                                        <p class="font-mono text-amber-400">&lt;span class="hero-title-gradient"&gt;Teks Anda&lt;/span&gt;</p>
                                        <p class="font-mono text-yellow-400">&lt;span class="hero-title-gradient-2"&gt;Teks Anda&lt;/span&gt;</p>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Description / Subtitle</label>
                                    <textarea id="hero-desc-input" rows="4" class="admin-input text-sm leading-relaxed" 
                                              placeholder="Masukkan deskripsi hero...">${V.heroDescription||""}</textarea>
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
                                    ${V.heroTitle||""}
                                </h1>

                                <!-- Dynamic Preview Description -->
                                <p id="preview-desc" class="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                                    ${V.heroDescription||""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${p()}
    `;let t=document.getElementById("hero-title-input"),a=document.getElementById("hero-desc-input"),r=document.getElementById("preview-title"),o=document.getElementById("preview-desc");t&&r&&t.addEventListener("input",()=>{r.innerHTML=t.value||'<span class="text-gray-600">[Judul Kosong]</span>'}),a&&o&&a.addEventListener("input",()=>{o.textContent=a.value||"[Deskripsi Kosong]"}),window.__saveLandingConfig=async()=>{let i=t?.value.trim(),s=a?.value.trim();if(!i||!s){m.warning("Teks judul dan deskripsi tidak boleh kosong.");return}try{await Ce({heroTitle:i,heroDescription:s}),m.success("Landing page settings berhasil disimpan!")}catch(n){console.error(n),m.error("Gagal menyimpan landing page settings.")}}}var qe=null,Ge="",$t={"/":{render:Mt,title:"Home"},"/dashboard":{render:Tt,title:"Dashboard"},"/members":{render:St,title:"Members"},"/leaderboard":{render:Dt,title:"Leaderboard"},"/wars":{render:Et,title:"War History"},"/statistics":{render:At,title:"Statistics"},"/rules":{render:Bt,title:"Clan Rules"},"/admin":{render:Rt,title:"Admin Panel"},"/admin/rules":{render:It,title:"Rules Settings"},"/admin/landing":{render:Ht,title:"Landing Settings"},"/login":{render:Ot,title:"Login"}};document.addEventListener("DOMContentLoaded",()=>{Ct()});async function Ct(){qe=new G("particles-canvas"),qe.start(),We((e,t)=>{q(),e&&me()==="/login"&&(window.location.hash="#/dashboard")}),Ke(),window.addEventListener("hashchange",Ke),console.log("\u2694\uFE0F StreetLourd initialized!")}function me(){return window.location.hash.slice(1)||"/"}function Ke(){let e=me();if(e.startsWith("/member/")){let a=e.replace("/member/","");Ge="/member/:tag",document.title="Member Detail \u2014 StreetLourd",Pt(a),q();return}let t=$t[e];t?(Ge=e,document.title=`${t.title} \u2014 StreetLourd`,t.render()):window.location.hash="#/",q()}function q(){let e=document.getElementById("navbar-container");if(!e)return;let t=F(),a=Fe(),r=me(),o="#"+r;r.startsWith("/member/")&&(o="#/members"),e.innerHTML=ue(o,t,a),ge();let i=document.getElementById("logout-btn"),s=document.getElementById("mobile-logout-btn");i&&i.addEventListener("click",async()=>{await le(),window.location.hash="#/",q()}),s&&s.addEventListener("click",async()=>{await le(),window.location.hash="#/",q()})}async function Mt(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await Me(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>{I(),Ee()},100)}async function Tt(){let e=document.getElementById("page-content");await k(e,()=>De())}async function St(){let e=document.getElementById("page-content");await k(e,()=>Ae())}async function Pt(e){let t=document.getElementById("page-content");await k(t,()=>Be(e))}async function Dt(){let e=document.getElementById("page-content");await k(e,()=>Re())}async function Et(){let e=document.getElementById("page-content");await k(e,()=>Ie())}async function At(){let e=document.getElementById("page-content");await k(e,()=>He())}async function Bt(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await je(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>I(),100)}async function Rt(){let e=document.getElementById("page-content");await k(e,()=>Ne())}async function It(){let e=document.getElementById("page-content");await k(e,()=>ze())}async function Ht(){let e=document.getElementById("page-content");await k(e,()=>Ve())}function Ot(){let e=F(),t=document.getElementById("page-content");if(e){window.location.hash="#/dashboard";return}t.innerHTML=`
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
    `,document.getElementById("google-login-btn")?.addEventListener("click",async()=>{let a=document.getElementById("google-login-btn");a.disabled=!0,a.innerHTML='<span class="animate-spin">\u23F3</span> Logging in...',await _e(),a.disabled=!1,a.innerHTML="Sign in with Google"})}
