var va=Object.defineProperty;var wa=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var ya=(e,t)=>{for(var a in t)va(e,a,{get:t[a],enumerable:!0})};var It={};ya(It,{addRipple:()=>Pa,animateCounter:()=>Ta,initParallax:()=>Ye,initScrollAnimations:()=>q,pageTransition:()=>_,typeWriter:()=>Sa});function q(){let e=new IntersectionObserver(t=>{t.forEach(a=>{if(a.isIntersecting){a.target.classList.add("animate-visible");let n=[];a.target.dataset.stagger&&n.push(a.target),a.target.querySelectorAll('[data-stagger="true"]').forEach(o=>{n.push(o)}),n.forEach(o=>{o.querySelectorAll(".animate-item").forEach((i,s)=>{i.style.transitionDelay=`${Math.min(s,8)*100}ms`,i.classList.add("animate-visible")})})}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".animate-on-scroll").forEach(t=>{e.observe(t)}),e}function Ye(){let e=document.querySelectorAll("[data-parallax]");if(!e.length)return;let t=!1;function a(){t||(requestAnimationFrame(()=>{let n=window.scrollY;e.forEach(o=>{let r=parseFloat(o.dataset.parallax)||.5;o.style.transform=`translateY(${n*r}px)`}),t=!1}),t=!0)}return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)}async function _(e,t){e.style.opacity="0",e.style.transform="translateY(10px)",await new Promise(a=>setTimeout(a,200)),await t(),window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="translateY(0)"}),setTimeout(()=>q(),100)}function Sa(e,t,a=50){let n=0;return e.textContent="",new Promise(o=>{function r(){n<t.length?(e.textContent+=t.charAt(n),n++,setTimeout(r,a)):o()}r()})}function Ta(e,t,a=1500){let o=performance.now();function r(i){let s=i-o,l=Math.min(s/a,1),d=1-Math.pow(1-l,3),c=Math.round(0+(t-0)*d);e.textContent=c.toLocaleString("en-US"),l<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}function Pa(e){e.addEventListener("click",function(t){let a=document.createElement("span"),n=this.getBoundingClientRect(),o=Math.max(n.width,n.height);a.style.width=a.style.height=o+"px",a.style.left=t.clientX-n.left-o/2+"px",a.style.top=t.clientY-n.top-o/2+"px",a.classList.add("ripple-effect"),this.appendChild(a),setTimeout(()=>a.remove(),600)})}var fe=wa(()=>{});var Z=[{id:"war_participation",label:"Ikut War",points:10,icon:"\u2694\uFE0F",category:"war"},{id:"used_both_attacks",label:"Menggunakan 2 Attack",points:10,icon:"\u{1F5E1}\uFE0F",category:"war"},{id:"three_stars",label:"3 Bintang",points:15,icon:"\u2B50",category:"war"},{id:"cwl_participation",label:"Ikut CWL",points:30,icon:"\u{1F3C6}",category:"cwl"},{id:"clan_games_complete",label:"Clan Games Selesai",points:20,icon:"\u{1F3AE}",category:"clangames"},{id:"donation_1000",label:"Donasi 1000",points:5,icon:"\u{1F381}",category:"donation"},{id:"clan_capital_active",label:"Clan Capital Aktif",points:10,icon:"\u{1F3F0}",category:"capital"}],oe=[{id:"missed_attack_1",label:"Tidak Menggunakan Attack Pertama",points:-20,icon:"\u274C",category:"war"},{id:"missed_attack_2",label:"Tidak Menggunakan Attack Kedua",points:-15,icon:"\u26D4",category:"war"},{id:"missed_war_no_excuse",label:"Tidak Ikut War Tanpa Izin",points:-30,icon:"\u{1F6AB}",category:"war"},{id:"afk_too_long",label:"AFK Terlalu Lama",points:-10,icon:"\u{1F4A4}",category:"activity"},{id:"rule_violation",label:"Melanggar Aturan Clan",points:-25,icon:"\u26A0\uFE0F",category:"violation"}],dt={1:{name:"TH 1",color:"#8B7355",emoji:"\u{1F3E0}"},2:{name:"TH 2",color:"#CD853F",emoji:"\u{1F3E0}"},3:{name:"TH 3",color:"#DAA520",emoji:"\u{1F3E0}"},4:{name:"TH 4",color:"#B8860B",emoji:"\u{1F3E1}"},5:{name:"TH 5",color:"#4169E1",emoji:"\u{1F3E1}"},6:{name:"TH 6",color:"#FFD700",emoji:"\u{1F3E1}"},7:{name:"TH 7",color:"#9370DB",emoji:"\u{1F3D8}\uFE0F"},8:{name:"TH 8",color:"#DC143C",emoji:"\u{1F3D8}\uFE0F"},9:{name:"TH 9",color:"#4B0082",emoji:"\u{1F3F0}"},10:{name:"TH 10",color:"#FF4500",emoji:"\u{1F3F0}"},11:{name:"TH 11",color:"#00CED1",emoji:"\u{1F3F0}"},12:{name:"TH 12",color:"#1E90FF",emoji:"\u{1F3EF}"},13:{name:"TH 13",color:"#228B22",emoji:"\u{1F3EF}"},14:{name:"TH 14",color:"#32CD32",emoji:"\u{1F3EF}"},15:{name:"TH 15",color:"#4169E1",emoji:"\u{1F5FC}"},16:{name:"TH 16",color:"#8B008B",emoji:"\u{1F5FC}"},17:{name:"TH 17",color:"#FFD700",emoji:"\u{1F5FC}"}};var ct=[{label:"Home",hash:"#/",icon:"\u{1F3E0}"},{label:"Members",hash:"#/members",icon:"\u{1F465}"},{label:"Leaderboard",hash:"#/leaderboard",icon:"\u{1F3C6}"},{label:"War History",hash:"#/wars",icon:"\u2694\uFE0F"},{label:"CWL Lineup",hash:"#/cwl",icon:"\u{1F3C6}"},{label:"Statistics",hash:"#/statistics",icon:"\u{1F4CA}"},{label:"Base Layouts",hash:"#/layouts",icon:"\u{1F5FA}\uFE0F"},{label:"Clan Rules",hash:"#/rules",icon:"\u{1F4DC}"},{label:"Admin Panel",hash:"#/admin",icon:"\u2699\uFE0F",adminOnly:!0}];var z={gold:"rgba(245, 166, 35, 1)",purple:"rgba(168, 85, 247, 1)",blue:"rgba(59, 130, 246, 1)",green:"rgba(34, 197, 94, 1)",red:"rgba(239, 68, 68, 1)",cyan:"rgba(6, 182, 212, 1)",goldAlpha:"rgba(245, 166, 35, 0.2)",purpleAlpha:"rgba(168, 85, 247, 0.2)",blueAlpha:"rgba(59, 130, 246, 0.2)",greenAlpha:"rgba(34, 197, 94, 0.2)",redAlpha:"rgba(239, 68, 68, 0.2)",cyanAlpha:"rgba(6, 182, 212, 0.2)"};function mt(e="#/",t=null,a=null){let n=a==="leader"||a==="coleader",o=ct.filter(r=>!(r.adminOnly&&!n));return`
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
                            ${o.map(r=>`
                                <a href="${r.hash}" 
                                   class="nav-link px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                          ${e===r.hash?"text-amber-400 bg-amber-500/10":"text-gray-300 hover:text-white hover:bg-white/10"}">
                                    <span class="mr-1.5">${r.icon}</span>${r.label}
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
                                <!-- Login button hidden -->
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
                            ${o.map(r=>`
                                <a href="${r.hash}" 
                                   class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                                          ${e===r.hash?"text-amber-400 bg-amber-500/10":"text-gray-300 hover:text-white hover:bg-white/10"}">
                                    <span class="text-lg">${r.icon}</span>${r.label}
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
    `}function ut(){let e=document.getElementById("main-navbar");if(!e)return;let t=0;function a(){let c=window.scrollY,m=e.querySelector(".navbar-glass");m&&(c>60?m.classList.add("navbar-solid"):m.classList.remove("navbar-solid"),t=c)}window.addEventListener("scroll",a,{passive:!0}),a();let n=document.getElementById("mobile-menu-btn"),o=document.getElementById("mobile-menu"),r=document.getElementById("mobile-menu-panel"),i=document.getElementById("mobile-menu-close"),s=document.getElementById("mobile-menu-backdrop");function l(){!o||!r||(o.classList.remove("hidden"),requestAnimationFrame(()=>{r.classList.remove("translate-x-full"),r.classList.add("translate-x-0")}))}function d(){!o||!r||(r.classList.remove("translate-x-0"),r.classList.add("translate-x-full"),setTimeout(()=>o.classList.add("hidden"),300))}return n?.addEventListener("click",l),i?.addEventListener("click",d),s?.addEventListener("click",d),document.querySelectorAll(".mobile-nav-link").forEach(c=>{c.addEventListener("click",d)}),()=>{window.removeEventListener("scroll",a)}}var Me=class{constructor(t="particles-canvas"){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.particles=[],this.animationId=null,this.maxParticles=60,this.colors=["rgba(245, 166, 35, 0.4)","rgba(168, 85, 247, 0.3)","rgba(59, 130, 246, 0.3)","rgba(255, 215, 0, 0.2)","rgba(147, 51, 234, 0.2)"],this.resize(),window.addEventListener("resize",()=>this.resize()))}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}createParticle(){return{x:Math.random()*this.canvas.width,y:this.canvas.height+Math.random()*100,size:Math.random()*3+1,speedY:-(Math.random()*.5+.2),speedX:(Math.random()-.5)*.3,opacity:Math.random()*.5+.1,color:this.colors[Math.floor(Math.random()*this.colors.length)],life:0,maxLife:Math.random()*300+200,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.01}}update(){for(;this.particles.length<this.maxParticles;)this.particles.push(this.createParticle());for(let t=this.particles.length-1;t>=0;t--){let a=this.particles[t];a.x+=a.speedX,a.y+=a.speedY,a.life++,a.pulse+=a.pulseSpeed;let n=a.life/a.maxLife;n<.1?a.currentOpacity=a.opacity*(n/.1):n>.8?a.currentOpacity=a.opacity*((1-n)/.2):a.currentOpacity=a.opacity,a.currentSize=a.size+Math.sin(a.pulse)*.5,(a.life>=a.maxLife||a.y<-20)&&this.particles.splice(t,1)}}draw(){if(this.ctx){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t of this.particles)this.ctx.save(),this.ctx.globalAlpha=t.currentOpacity||t.opacity,this.ctx.fillStyle=t.color,this.ctx.shadowColor=t.color,this.ctx.shadowBlur=t.currentSize*4,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.currentSize,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}}animate(){this.update(),this.draw(),this.animationId=requestAnimationFrame(()=>this.animate())}start(){this.canvas&&this.animate()}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.stop(),this.particles=[],this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}};function h(){return`
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
    `}function he({icon:e,label:t,value:a,color:n="blue",subtitle:o="",glow:r=!1}){let i={gold:"from-amber-500/20 to-yellow-600/10 border-amber-500/30",purple:"from-purple-500/20 to-violet-600/10 border-purple-500/30",blue:"from-blue-500/20 to-cyan-600/10 border-blue-500/30",green:"from-green-500/20 to-emerald-600/10 border-green-500/30",red:"from-red-500/20 to-rose-600/10 border-red-500/30",cyan:"from-cyan-500/20 to-teal-600/10 border-cyan-500/30"},s={gold:"shadow-amber-500/20",purple:"shadow-purple-500/20",blue:"shadow-blue-500/20",green:"shadow-green-500/20",red:"shadow-red-500/20",cyan:"shadow-cyan-500/20"},l={gold:"from-amber-500 to-yellow-600",purple:"from-purple-500 to-violet-600",blue:"from-blue-500 to-cyan-600",green:"from-green-500 to-emerald-600",red:"from-red-500 to-rose-600",cyan:"from-cyan-500 to-teal-600"};return`
        <div class="group relative rounded-2xl border bg-gradient-to-br ${i[n]} 
                    p-6 transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 
                    ${r?`shadow-lg ${s[n]}`:""} 
                    hover:shadow-xl ${s[n]} animate-item cursor-default">
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
    `}function pt({name:e,tag:t,role:a,townHallLevel:n,trophies:o,donations:r,clanCapital:i,totalPoints:s,sidePoints:l,onClick:d}){let c={leader:"from-amber-500 to-yellow-600",coLeader:"from-purple-500 to-violet-600",admin:"from-blue-500 to-cyan-600",member:"from-gray-500 to-gray-600"},m={leader:"Leader",coLeader:"Co-Leader",admin:"Elder",member:"Member"},p={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[n]||"#6b7280";return`
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                    p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 
                    hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer animate-item"
             onclick="${d||""}">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                     style="background: linear-gradient(135deg, ${p}, ${p}99); box-shadow: 0 0 15px ${p}40;">
                    TH${n||"?"}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1 min-w-0">
                        <h3 class="text-white font-bold truncate flex-1 min-w-0">${e}</h3>
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${c[a]||c.member} shrink-0">
                            ${m[a]||"Member"}
                        </span>
                    </div>
                    <p class="text-xs text-gray-500 mb-2">${t}</p>
                    <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span class="flex items-center gap-1 shrink-0">\u{1F3C6} ${(o||0).toLocaleString()}</span>
                        <span class="flex items-center gap-1 shrink-0">\u{1F381} ${(r||0).toLocaleString()}</span>
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <div class="text-lg font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                        ${a==="leader"?"\u{1F451}":s||0}
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
    `}function gt({date:e,opponent:t,warSize:a,result:n,clanStars:o,opponentStars:r,clanDestruction:i,opponentDestruction:s,noAttackMembers:l,onClick:d}){let c={win:{label:"VICTORY",bg:"from-green-500/20 to-emerald-600/10",border:"border-green-500/30",badge:"from-green-500 to-emerald-600"},loss:{label:"DEFEAT",bg:"from-red-500/20 to-rose-600/10",border:"border-red-500/30",badge:"from-red-500 to-rose-600"},draw:{label:"DRAW",bg:"from-gray-500/20 to-gray-600/10",border:"border-gray-500/30",badge:"from-gray-500 to-gray-600"}},m=c[n]||c.draw;return`
        <div class="group relative rounded-2xl border ${m.border} bg-gradient-to-br ${m.bg} backdrop-blur-sm 
                    p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-item"
             onclick="${d||""}">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-xs text-gray-400">${e||""}</p>
                    <p class="text-xs text-gray-500">War Size: ${a||"?"}v${a||"?"}</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${m.badge}">
                    ${m.label}
                </span>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">\u2B50 ${o||0}</p>
                    <p class="text-xs text-gray-400 mt-1">Our Clan</p>
                    <p class="text-xs text-gray-500">${(i||0).toFixed(1)}%</p>
                </div>
                <div class="text-gray-500 font-bold text-lg">VS</div>
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white/60" style="font-family: 'Lilita One', cursive;">\u2B50 ${r||0}</p>
                    <p class="text-xs text-gray-400 mt-1 truncate">${t||"Unknown"}</p>
                    <p class="text-xs text-gray-500">${(s||0).toFixed(1)}%</p>
                </div>
            </div>
            ${l&&l.length>0?`
                <div class="mt-4 pt-3 border-t border-white/10 text-xs text-red-400">
                    \u26A0\uFE0F <strong>No Attack:</strong> ${l.map(g=>g.name).join(", ")}
                </div>
            `:""}
        </div>
    `}function H({rank:e,name:t,tag:a,townHallLevel:n,totalPoints:o,sidePoints:r,totalWars:i,totalStars:s,donations:l}){let d=e<=3,m={1:{medal:"\u{1F947}",border:"border-amber-400/50",bg:"from-amber-500/20 to-yellow-600/10",glow:"shadow-amber-500/30",textColor:"text-amber-400"},2:{medal:"\u{1F948}",border:"border-gray-300/50",bg:"from-gray-300/20 to-gray-400/10",glow:"shadow-gray-300/20",textColor:"text-gray-300"},3:{medal:"\u{1F949}",border:"border-orange-500/50",bg:"from-orange-500/20 to-amber-600/10",glow:"shadow-orange-500/20",textColor:"text-orange-400"}}[e]||{medal:"",border:"border-white/10",bg:"bg-white/5",glow:"",textColor:"text-white"};return d?`
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
                        ${r?`
                            <p class="text-xs font-bold text-blue-400" style="font-family: 'Lilita One', cursive;">+${r} SP</p>
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
                ${r?`
                    <span class="text-[10px] text-blue-400 font-bold block" style="font-family: 'Lilita One', cursive;">+${r} SP</span>
                `:""}
            </div>
        </div>
    `}import{initializeApp as ka}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";import{getAuth as La}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";import{initializeFirestore as $a}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";import{getStorage as Ba}from"https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";var Ve={apiKey:"AIzaSyCJvQDiM7JQ7n0si8UgI-lpVA7CgiVD8eA",authDomain:"victorytoclan.firebaseapp.com",projectId:"victorytoclan",storageBucket:"victorytoclan.firebasestorage.app",messagingSenderId:"762294306774",appId:"1:762294306774:web:601d43f7d499167e40c677"},Ee,ee,x,_a;try{Ee=ka(Ve),ee=La(Ee),x=$a(Ee,{experimentalAutoDetectLongPolling:!0}),_a=Ba(Ee),console.log("\u2705 Firebase initialized successfully with long polling enabled")}catch(e){console.warn("\u26A0\uFE0F Firebase initialization failed:",e.message),console.warn("Please configure your Firebase project in js/config/firebase.js")}function v(){return Ve.apiKey!=="YOUR_API_KEY"&&Ve.projectId!=="YOUR_PROJECT_ID"}async function y(){return await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js")}async function $(){if(!v())return Ae();try{let{collection:e,getDocs:t,query:a,orderBy:n}=await y(),o=a(e(x,"members"),n("totalPoints","desc"));return(await t(o)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){return console.error("getMembers:",e),Ae()}}async function ft(e){if(!v())return Ae().find(t=>t.tag===e)||null;try{let{doc:t,getDoc:a}=await y(),n=await a(t(x,"members",e));return n.exists()?{id:n.id,...n.data()}:null}catch(t){return console.error("getMember:",t),null}}async function ie(){if(!v())return bt();try{let{collection:e,getDocs:t,query:a,orderBy:n}=await y(),o=a(e(x,"wars"),n("date","desc"));return(await t(o)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){return console.error("getWars:",e),bt()}}async function vt(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n}=await y();return await a(t(x,"wars"),{...e,createdAt:n()})}async function wt(e){if(!v())return Ie();try{let{collection:t,getDocs:a,query:n,where:o}=await y(),r=n(t(x,"pointHistory"),o("memberTag","==",e)),s=(await a(r)).docs.map(l=>({id:l.id,...l.data()}));return s.sort((l,d)=>{let c=l.date?l.date.toDate?l.date.toDate():new Date(l.date):0;return(d.date?d.date.toDate?d.date.toDate():new Date(d.date):0)-c}),s}catch(t){return console.error("getPointHistory:",t),Ie()}}async function Je(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n,doc:o,runTransaction:r}=await y(),i=o(x,"members",e.memberTag);await r(x,async s=>{let l=await s.get(i);if(!l.exists())throw"Document does not exist!";let d=l.data(),c=d.totalPoints!==void 0?d.totalPoints:500,m=d.sidePoints||0,g=c+m+e.amount,p=g,w=0;g>1500&&(p=1500,w=g-1500),p<0&&(p=0),s.update(i,{totalPoints:p,sidePoints:w})}),await a(t(x,"pointHistory"),{...e,date:n()})}async function yt(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n,doc:o,runTransaction:r}=await y(),i=o(x,"members",e.memberTag);await r(x,async s=>{let l=await s.get(i);if(!l.exists())throw"Document does not exist!";let d=l.data(),c=d.totalPoints!==void 0?d.totalPoints:500,m=d.sidePoints||0,g=c+m+e.amount,p=g,w=0;g>1500&&(p=1500,w=g-1500),p<0&&(p=0),s.update(i,{totalPoints:p,sidePoints:w})}),await a(t(x,"pointHistory"),{...e,date:n()})}async function G(){if(!v())return Ie();try{let{collection:e,getDocs:t,query:a,orderBy:n,limit:o}=await y(),r=a(e(x,"pointHistory"),n("date","desc"),o(150));return(await t(r)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("getAllPointHistory:",e),Ie()}}async function De(e){if(!v())return;let{doc:t,deleteDoc:a}=await y(),n=t(x,"pointHistory",e);await a(n)}async function kt(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n}=await y();return await a(t(x,"promotions"),{...e,date:n()})}async function Lt(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n}=await y();return await a(t(x,"violations"),{...e,date:n()})}async function $t(){if(!v())return{clanTag:"#2ABC123",clanName:"StreetLourd"};try{let{doc:e,getDoc:t}=await y(),a=await t(e(x,"settings","general"));return a.exists()?a.data():{clanTag:"",clanName:""}}catch(e){return console.error("getSettings:",e),{clanTag:"",clanName:""}}}function Ae(){return["DragonSlayer","WarMachine","ClashKing","QueenArcher","GoblinHero","WallBreaker","TH17Master","EliteWarrior","SuperWitch","IceGolem","LavaHound","ElectroDragon","YetiSmash","HeadHunter","InfernoTower","PhoenixRise","RoyalGhost","SneakyGoblin","SuperBowler","PartyWizard"].map((t,a)=>({tag:`#${String(2e3+a).padStart(4,"0")}ABC`,name:t,townHallLevel:Math.floor(Math.random()*7)+11,role:a===0?"leader":a<3?"coLeader":a<7?"admin":"member",trophies:Math.floor(Math.random()*2e3)+4e3,donations:Math.floor(Math.random()*5e3)+500,donationsReceived:Math.floor(Math.random()*3e3)+200,clanCapitalContributions:Math.floor(Math.random()*1e5)+1e4,totalPoints:Math.floor(Math.random()*300)+50,totalWars:Math.floor(Math.random()*50)+10,totalStars:Math.floor(Math.random()*100)+20,avgDestruction:Math.random()*30+70}))}function bt(){return["Dark Warriors","Storm Legion","Iron Wolves","Shadow Riders","Thunder Hawks"].map((t,a)=>({id:`war-${a}`,date:new Date(Date.now()-a*3*864e5).toISOString(),opponent:t,warSize:[15,20,25,30,40][a%5],result:["win","win","loss","win","draw"][a],clanStars:Math.floor(Math.random()*30)+20,opponentStars:Math.floor(Math.random()*30)+15,clanDestruction:Math.random()*20+80,opponentDestruction:Math.random()*30+60}))}function Ie(){return["Ikut War","3 Bintang","Donasi 1000","Clan Games","Tidak Attack"].map((t,a)=>({id:`ph-${a}`,amount:a===4?-20:[10,15,5,20][a],reason:t,category:"war",adminName:"Leader",date:new Date(Date.now()-a*2*864e5).toISOString()}))}async function He(e){if(!v())return Ca(e);try{let{doc:t,getDoc:a}=await y(),n=await a(t(x,"settings",`cwl_day_${e}`));return n.exists()?n.data():{tags:[],updatedAt:null}}catch(t){return console.error(`getCwlLineup for day ${e}:`,t),{tags:[],updatedAt:null}}}async function Bt(e,t){if(!v())return;let{doc:a,setDoc:n,serverTimestamp:o}=await y();await n(a(x,"settings",`cwl_day_${e}`),{...t,updatedAt:o()})}function Ca(e){let a=[...Ae()].sort((r,i)=>i.trophies-r.trophies),n=(e-1)%5,o=[];for(let r=0;r<15;r++){let i=(r+n)%a.length;o.push(a[i].tag)}return{tags:o,updatedAt:new Date(Date.now()-(8-e)*36e5).toISOString()}}async function re(){if(!v())return null;try{let{doc:e,getDoc:t}=await y(),a=await t(e(x,"settings","rules"));return a.exists()?a.data():null}catch(e){return console.error("getRules:",e),null}}async function _t(e){if(!v())return;let{doc:t,setDoc:a}=await y();await a(t(x,"settings","rules"),e)}async function Re(){if(!v())return{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."};try{let{doc:e,getDoc:t}=await y(),a=await t(e(x,"settings","landing"));return a.exists()?a.data():{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}catch(e){return console.error("getLandingSettings:",e),{heroTitle:`<span class="hero-title-gradient">Lead Your Clan</span>
<br>
<span class="hero-title-gradient-2">To Victory</span>`,heroDescription:"Pantau kontribusi anggota, statistik war, sistem poin, dan rekomendasi kenaikan pangkat secara otomatis."}}}async function Ct(e){if(!v())return;let{doc:t,setDoc:a}=await y();await a(t(x,"settings","landing"),e,{merge:!0})}async function se(){if(!v())return xt();try{let{collection:e,getDocs:t,query:a,orderBy:n}=await y(),o=a(e(x,"layouts"),n("createdAt","desc"));return(await t(o)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){console.error("getLayouts:",e);try{let{collection:t,getDocs:a}=await y(),o=(await a(t(x,"layouts"))).docs.map(r=>({id:r.id,...r.data()}));return o.sort((r,i)=>{let s=r.createdAt?r.createdAt.toDate?r.createdAt.toDate():new Date(r.createdAt):0;return(i.createdAt?i.createdAt.toDate?i.createdAt.toDate():new Date(i.createdAt):0)-s}),o}catch(t){return console.error("getLayouts fallback failed:",t),xt()}}}async function St(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n}=await y();return await a(t(x,"layouts"),{...e,createdAt:n()})}async function Tt(e,t){if(!v())return;let{doc:a,updateDoc:n}=await y();await n(a(x,"layouts",e),t)}async function Pt(e){if(!v())return;let{doc:t,deleteDoc:a}=await y();await a(t(x,"layouts",e))}function xt(){return[{id:"demo-1",title:"TH18 Legend League War Base",townHallLevel:18,category:"home",type:"war",rating:5,imageUrl:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH18-War-Demo",createdAt:new Date().toISOString()},{id:"demo-2",title:"TH16 Hybrid farming layout",townHallLevel:16,category:"home",type:"hybrid",rating:4,imageUrl:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH16-Hybrid-Demo",createdAt:new Date().toISOString()},{id:"demo-2b",title:"TH18 Anti 3-Star War Base",townHallLevel:18,category:"home",type:"anti_3",rating:5,imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH18-Anti3-Demo",createdAt:new Date().toISOString()},{id:"demo-2c",title:"TH15 Heart Shape Fun Base",townHallLevel:15,category:"home",type:"fun",rating:5,imageUrl:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH15-Fun-Demo",createdAt:new Date().toISOString()},{id:"demo-3",title:"BH10 Trophy Push Base",townHallLevel:10,category:"builder",type:"",rating:4,imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=BH10-Demo",createdAt:new Date().toISOString()},{id:"demo-4",title:"Capital Peak Level 10 Base",townHallLevel:10,category:"capital",district:"capital_peak",type:"",rating:5,imageUrl:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=CH10-Demo",createdAt:new Date().toISOString()},{id:"demo-5",title:"Barbarian Camp Level 5 Base",townHallLevel:5,category:"capital",district:"barbarian_camp",type:"",rating:4,imageUrl:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",link:"https://link.clashofclans.com/en?action=OpenLayout&id=BC5-Demo",createdAt:new Date().toISOString()}]}async function le(){if(!v())return ht();try{let{collection:e,getDocs:t,query:a,orderBy:n}=await y(),o=a(e(x,"news"),n("createdAt","desc"));return(await t(o)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){console.error("getNews:",e);try{let{collection:t,getDocs:a}=await y(),o=(await a(t(x,"news"))).docs.map(r=>({id:r.id,...r.data()}));return o.sort((r,i)=>{let s=r.createdAt?r.createdAt.toDate?r.createdAt.toDate():new Date(r.createdAt):0;return(i.createdAt?i.createdAt.toDate?i.createdAt.toDate():new Date(i.createdAt):0)-s}),o}catch(t){return console.error("getNews fallback failed:",t),ht()}}}async function Mt(e){if(!v())return;let{collection:t,addDoc:a,serverTimestamp:n}=await y();return await a(t(x,"news"),{...e,createdAt:n()})}async function Et(e,t){if(!v())return;let{doc:a,updateDoc:n}=await y();await n(a(x,"news",e),t)}async function At(e){if(!v())return;let{doc:t,deleteDoc:a}=await y();await a(t(x,"news",e))}function ht(){return[{id:"demo-news-1",title:"Clash of Clans Town Hall 18 Update Resmi!",description:"Ketahui fitur-fitur terbaru, pertahanan baru, dan pasukan baru yang hadir di Town Hall 18!",imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",externalLink:"https://supercell.com/en/games/clashofclans/",createdAt:new Date().toISOString()},{id:"demo-news-2",title:"Keseimbangan Game (Game Balancing Update)",description:"Penyesuaian statistik hero equipment, spell, dan kekuatan def dari pertahanan udara.",imageUrl:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",videoUrl:"",externalLink:"https://supercell.com/en/games/clashofclans/",createdAt:new Date(Date.now()-864e5).toISOString()}]}var ve=[],R=1,je=3;async function Dt(){let[e,t,a,n]=await Promise.all([Re(),$t(),$(),le()]);ve=n||[],R=1,setTimeout(()=>{Ht()},50);let i=`https://link.clashofclans.com/en?action=OpenClanProfile&tag=%23${(t.clanTag||"#P0YVL80U").replace("#","")}`,s=a.filter(l=>l.role!=="leader").sort((l,d)=>(d.totalPoints||0)-(l.totalPoints||0)).slice(0,3);return`
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
                        ${e.heroTitle}
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        ${e.heroDescription}
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

        <!-- News Section -->
        <section class="relative py-20 px-4" id="features-section">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u{1F4F0} Berita Terbaru Supercell Resmi
                    </h2>
                    <p class="text-gray-400 max-w-xl mx-auto">
                        Dapatkan informasi update game, penyeimbangan stats, dan pengumuman resmi Clash of Clans
                    </p>
                </div>

                <div id="news-grid-container" class="min-h-[300px]">
                    <div class="flex items-center justify-center py-20">
                        <div class="animate-spin text-4xl">\u23F3</div>
                    </div>
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
                ${s.length>=3?`
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll" data-stagger="true">
                    <!-- 2nd Place -->
                    <div class="md:mt-8 order-2 md:order-1">
                        ${H({rank:2,...s[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${H({rank:1,...s[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${H({rank:3,...s[2]})}
                    </div>
                </div>
                `:s.length>0?`
                <div class="grid gap-4 animate-on-scroll" data-stagger="true">
                    ${s.map((l,d)=>H({rank:d+1,...l})).join("")}
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

        ${h()}
    `}function Ht(){let e=document.getElementById("news-grid-container");if(!e)return;if(ve.length===0){e.innerHTML='<p class="text-center text-gray-500 text-sm py-12">Belum ada berita terbaru saat ini.</p>';return}let t=Math.ceil(ve.length/je),n=ve.slice((R-1)*je,R*je).map((r,i)=>{let s=i*100,l=r.videoUrl,d=r.externalLink;return`
            <div class="animate-item group flex flex-col rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-500/30 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default" style="transition-delay: ${s}ms;">
                <!-- Thumbnail -->
                <div class="relative h-48 overflow-hidden bg-slate-800">
                    <img src="${r.imageUrl}" alt="${r.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400'">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/20 to-transparent"></div>
                    
                    <!-- Play icon overlay if video is present -->
                    ${l?`
                        <a href="${r.videoUrl}" target="_blank" class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                            <div class="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-red-600/40">
                                <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </a>
                    `:""}
                </div>
                
                <!-- Body -->
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-white font-bold text-lg mb-2 line-clamp-2 hover:text-amber-400 transition-colors" style="font-family: 'Lilita One', cursive;">${r.title}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">${r.description}</p>
                    </div>
                    
                    <!-- Footer / Action links -->
                    <div class="flex items-center justify-between pt-4 border-t border-white/5">
                        <div class="flex gap-4">
                            ${l?`
                                <a href="${r.videoUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-bold transition-colors">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    Video
                                </a>
                            `:""}
                            ${d?`
                                <a href="${r.externalLink}" target="_blank" class="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                    Artikel
                                </a>
                            `:""}
                        </div>
                        
                        <span class="text-[10px] text-gray-500 font-medium">${r.source||"Official Supercell"}</span>
                    </div>
                </div>
            </div>
        `}).join(""),o=t>1?`
        <div class="flex items-center justify-center gap-2 mt-10 animate-on-scroll">
            <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                           ${R===1?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                    onclick="window.__newsPage(${R-1})" ${R===1?"disabled":""}>
                &larr; Prev
            </button>
            ${Ma(R,t)}
            <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                           ${R===t?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                    onclick="window.__newsPage(${R+1})" ${R===t?"disabled":""}>
                Next &rarr;
            </button>
        </div>
    `:"";e.innerHTML=`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll" data-stagger="true">
            ${n}
        </div>
        ${o}
    `,Promise.resolve().then(()=>(fe(),It)).then(r=>{r&&r.initScrollAnimations&&setTimeout(()=>r.initScrollAnimations(),50)})}function Ma(e,t){let a=[],o=Math.max(1,e-Math.floor(2.5)),r=Math.min(t,o+5-1);r-o<4&&(o=Math.max(1,r-5+1));for(let i=o;i<=r;i++)a.push(`
            <button class="w-10 h-10 rounded-xl text-sm font-medium transition-all
                           ${i===e?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}"
                    onclick="window.__newsPage(${i})">
                ${i}
            </button>
        `);return a.join("")}window.__newsPage=e=>{let t=Math.ceil(ve.length/je);if(e<1||e>t)return;R=e,Ht();let a=document.getElementById("features-section");a&&a.scrollIntoView({behavior:"smooth",block:"start"})};var T={statCard(){return`
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
        `}};function V(e,t,a){return`
        <div class="flex flex-col items-center justify-center py-16 text-center animate-on-scroll">
            <div class="text-6xl mb-4 opacity-50">${e}</div>
            <h3 class="text-xl font-bold text-white/70 mb-2" style="font-family: 'Lilita One', cursive;">${t}</h3>
            <p class="text-gray-500 max-w-md">${a}</p>
        </div>
    `}function J(e){return e==null?"0":Number(e).toLocaleString("en-US")}function Rt(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}):"-"}function de(e){return e?(e instanceof Date?e:new Date(e)).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function jt(e,t=300){let a;return function(...n){clearTimeout(a),a=setTimeout(()=>e.apply(this,n),t)}}function Ot(e){let t={leader:{label:"Leader",bg:"from-yellow-500 to-amber-600",text:"text-black"},coLeader:{label:"Co-Leader",bg:"from-purple-500 to-violet-600",text:"text-white"},admin:{label:"Elder",bg:"from-blue-500 to-cyan-600",text:"text-white"},member:{label:"Member",bg:"from-gray-500 to-gray-600",text:"text-white"}},a=t[e]||t.member;return`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${a.bg} ${a.text}">${a.label}</span>`}function ce(e){return e?e.toDate?e.toDate():e.seconds?new Date(e.seconds*1e3):new Date(e):null}async function Nt(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${T.repeat("statCard",4)}
                </div>
            </div>
        </div>
    `;let[t,a,n]=await Promise.all([$(),ie(),G()]),o=t.length,r=[...t].sort((c,m)=>(m.donations||0)-(c.donations||0))[0],i=[...t].sort((c,m)=>(m.trophies||0)-(c.trophies||0))[0],s={};t.forEach(c=>{s[c.tag]=0}),n&&Array.isArray(n)&&n.forEach(c=>{(c.reason&&(c.reason.toLowerCase().includes("3 bintang")||c.reason.toLowerCase().includes("three star")||c.reason.toLowerCase().includes("three_stars")||c.reason.toLowerCase().includes("3-bintang"))||c.category==="war"&&c.amount===15)&&c.memberTag&&s[c.memberTag]!==void 0&&s[c.memberTag]++});let l=null,d=[...t].map(c=>({...c,threeStarCount:s[c.tag]||0})).sort((c,m)=>m.threeStarCount-c.threeStarCount);d[0]&&d[0].threeStarCount>0?l=d[0]:(l=[...t].sort((c,m)=>(m.totalStars||0)-(c.totalStars||0))[0],l&&(l.threeStarCount=l.totalStars||0)),e.innerHTML=`
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
                    ${he({icon:"\u{1F465}",label:"Total Members",value:J(o),color:"blue"})}
                    ${he({icon:"\u{1F381}",label:"Top Donator",value:r?.name||"-",color:"purple",subtitle:`${J(r?.donations||0)} donated`})}
                    ${he({icon:"\u{1F3C6}",label:"Top Player",value:i?.name||"-",color:"gold",glow:!0,subtitle:`${J(i?.trophies||0)} trophies`})}
                    ${he({icon:"\u{1F525}",label:"Most Active",value:l?.name||"-",color:"red",subtitle:`${l?.threeStarCount||0} 3-star attacks`})}
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
                        ${a.slice(0,3).map(c=>Ea(c)).join("")}
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
                        ${t.filter(c=>c.role!=="leader").slice(0,3).map((c,m)=>Aa(c,m+1)).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `}function Ea(e){let t={win:{label:"VICTORY",color:"text-green-400",border:"border-green-500/30",bg:"from-green-500/10 to-transparent"},loss:{label:"DEFEAT",color:"text-red-400",border:"border-red-500/30",bg:"from-red-500/10 to-transparent"},draw:{label:"DRAW",color:"text-gray-400",border:"border-gray-500/30",bg:"from-gray-500/10 to-transparent"}},a=t[e.result]||t.draw,n=e.date?new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-";return`
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
    `}function Aa(e,t){let a=["\u{1F947}","\u{1F948}","\u{1F949}"],n=["text-amber-400","text-gray-300","text-orange-400"];return`
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
    `}fe();var ye=[],we=[],A=1,Oe=12;async function Ft(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="grid gap-4">${T.repeat("memberCard",6)}</div>
            </div>
        </div>
    `,ye=await $(),we=[...ye],A=1,Qe(e)}function Qe(e){let t=Math.ceil(we.length/Oe),a=we.slice((A-1)*Oe,A*Oe),n=[...new Set(ye.map(l=>l.townHallLevel))].sort((l,d)=>d-l);e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="mb-8 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                        Members
                    </h1>
                    <p class="text-gray-400">Daftar anggota clan \xB7 ${ye.length} members</p>
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
                    ${a.length>0?a.map(l=>pt({name:l.name,tag:l.tag,role:l.role,townHallLevel:l.townHallLevel,trophies:l.trophies,donations:l.donations,clanCapital:l.clanCapitalContributions,totalPoints:l.totalPoints,sidePoints:l.sidePoints,onClick:`location.hash='#/member/${encodeURIComponent(l.tag)}'`})).join(""):V("\u{1F465}","Tidak ada member ditemukan","Coba ubah filter pencarian")}
                </div>

                <!-- Pagination -->
                ${t>1?`
                <div class="flex items-center justify-center gap-2 animate-on-scroll" id="pagination">
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${A===1?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${A-1})" ${A===1?"disabled":""}>
                        \u2190 Prev
                    </button>
                    ${Ia(A,t)}
                    <button class="px-4 py-2 rounded-xl text-sm font-medium transition-all
                                   ${A===t?"bg-white/5 text-gray-600 cursor-not-allowed":"bg-white/10 text-white hover:bg-white/20"}"
                            onclick="window.__membersPage(${A+1})" ${A===t?"disabled":""}>
                        Next \u2192
                    </button>
                </div>
                `:""}
            </div>
        </div>
        ${h()}
    `;let o=document.getElementById("member-search"),r=document.getElementById("filter-th"),i=document.getElementById("filter-role"),s=jt(()=>{let l=o?.value.toLowerCase()||"",d=r?.value||"",c=i?.value||"";we=ye.filter(m=>{let g=!l||m.name.toLowerCase().includes(l)||m.tag.toLowerCase().includes(l),p=!d||m.townHallLevel==d,w=!c||m.role===c;return g&&p&&w}),A=1,Qe(e)},250);o?.addEventListener("input",s),r?.addEventListener("change",s),i?.addEventListener("change",s),window.__membersPage=l=>{let d=Math.ceil(we.length/Oe);l<1||l>d||(A=l,Qe(e),window.scrollTo({top:0,behavior:"smooth"}))},setTimeout(()=>q(),50)}function Ia(e,t){let a=[],o=Math.max(1,e-Math.floor(2.5)),r=Math.min(t,o+5-1);r-o<4&&(o=Math.max(1,r-5+1));for(let i=o;i<=r;i++)a.push(`
            <button class="w-10 h-10 rounded-xl text-sm font-medium transition-all
                           ${i===e?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}"
                    onclick="window.__membersPage(${i})">
                ${i}
            </button>
        `);return a.join("")}async function Wt(e){let t=document.getElementById("page-content");t.innerHTML=`<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${T.profile()}</div></div>`;let a=decodeURIComponent(e),[n,o]=await Promise.all([ft(a),wt(a)]);if(!n){t.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-5xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F50D}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Member Not Found</h2>
                    <p class="text-gray-500 mb-6">Tag: ${a}</p>
                    <a href="#/members" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Members</a>
                </div>
            </div>
        `;return}let i={1:"#8B7355",2:"#CD853F",3:"#DAA520",4:"#B8860B",5:"#4169E1",6:"#FFD700",7:"#9370DB",8:"#DC143C",9:"#4B0082",10:"#FF4500",11:"#00CED1",12:"#1E90FF",13:"#228B22",14:"#32CD32",15:"#4169E1",16:"#8B008B",17:"#FFD700"}[n.townHallLevel]||"#6b7280",s="",l=n.totalPoints||0;if(n.role==="leader")s=`
            <div class="flex items-center gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div class="text-3xl">\u{1F451}</div>
                <p class="text-gray-300 text-sm leading-relaxed">\u{1F451} Anggota ini adalah <strong>Leader Utama</strong> klan.</p>
            </div>
        `;else if(n.role==="coLeader"){let c=Math.max(0,Math.min(100,l/1500*100)),m="";l<1250?m=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${l}</strong>) di bawah batas minimal Co-Leader (1250). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Elder</strong>.</p>
                    </div>
                </div>
            `:m=`
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
                        <p class="text-amber-400 font-bold text-lg">${l} / 1500 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${c}%">
                    </div>
                </div>
                
                <!-- Status/Rekomendasi Info -->
                ${m}
            </div>
        `}else if(n.role==="admin")if(l<1e3)s=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u26A0\uFE0F</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${l}</strong>) di bawah batas minimal Elder (1000). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Member</strong>.</p>
                    </div>
                </div>
            `;else{let m=Math.max(0,Math.min(100,(l-1250)/250*100)),g=1500-l,p=g<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${l}) telah mencukupi untuk dipromosikan menjadi Co-Leader.`:`Dibutuhkan <strong>${g}</strong> poin lagi untuk naik jabatan menjadi <strong>Co-Leader</strong>.`;s=`
                <div class="space-y-6">
                    <div class="flex justify-between items-end text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                            <p class="text-white font-bold text-lg">Co-Leader</p>
                        </div>
                        <div class="text-right">
                            <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                            <p class="text-amber-400 font-bold text-lg">${l} / 1500 Poin</p>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                        <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                             style="width: ${m}%">
                        </div>
                    </div>
                    
                    <!-- Status Info -->
                    <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span class="text-amber-400">\u{1F4A1}</span>
                        <p class="text-gray-300 text-sm leading-relaxed">${p}</p>
                    </div>
                </div>
            `}else{let m=Math.max(0,Math.min(100,(l-500)/750*100)),g=1250-l,p="";l<300?p=`
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">\u{1F6A8}</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Kick</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${l}</strong>) di bawah batas minimal Member (300). Anggota ini direkomendasikan untuk <strong>dikeluarkan (kick) dari klan</strong>.</p>
                    </div>
                </div>
            `:p=`
                <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span class="text-amber-400">\u{1F4A1}</span>
                    <p class="text-gray-300 text-sm leading-relaxed">${g<=0?`\u{1F389} Persyaratan poin tercapai! Poin saat ini (${l}) telah mencukupi untuk dipromosikan menjadi Elder.`:`Dibutuhkan <strong>${g}</strong> poin lagi untuk naik jabatan menjadi <strong>Elder</strong>.`}</p>
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
                        <p class="text-amber-400 font-bold text-lg">${l} / 1250 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${m}%">
                    </div>
                </div>
                
                <!-- Status/Kick Info -->
                ${p}
            </div>
        `}let d=Da(o);t.innerHTML=`
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
                            TH${n.townHallLevel||"?"}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 class="text-2xl md:text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    ${n.name}
                                </h1>
                                ${Ot(n.role)}
                            </div>
                            <p class="text-gray-500 text-sm mb-3">${n.tag}</p>
                            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span class="flex items-center gap-1.5">\u{1F3C6} ${J(n.trophies)} trophies</span>
                                <span class="flex items-center gap-1.5">\u{1F381} ${J(n.donations)} donated</span>
                            </div>
                        </div>
                        <div class="text-center md:text-right">
                            <p class="text-4xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                                ${J(n.totalPoints||0)}
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
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-8 animate-on-scroll">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u2B06\uFE0F Keterangan Naik Jabatan
                    </h2>
                    
                    ${s}
                </div>

                <!-- Point History Log Section -->
                ${d}

                <!-- Side Points Explanation Card -->
                <div class="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 backdrop-blur-sm p-8 mb-8 animate-on-scroll">
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

                <!-- Role & Penalty Rules Card -->
                <div class="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-500/5 backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h3 class="text-lg font-bold text-red-400 mb-3 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u26A0\uFE0F Ketentuan & Batas Poin Jabatan
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">
                        Ketentuan batas poin untuk kenaikan jabatan, penurunan jabatan (demote), dan pengeluaran (kick) dari klan:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Co-Leader Rules -->
                        <div class="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-purple-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    \u269C\uFE0F Co-Leader
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>\u2022 Syarat Jabatan: <strong class="text-white">1500 Poin</strong></li>
                                    <li>\u2022 Batas Demote: <strong class="text-red-400">&le; 1250 Poin</strong> (Turun ke Elder)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Elder Rules -->
                        <div class="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-blue-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    \u{1F6E1}\uFE0F Elder
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>\u2022 Syarat Jabatan: <strong class="text-white">1250 Poin</strong></li>
                                    <li>\u2022 Batas Demote: <strong class="text-red-400">1000 Poin</strong> (Turun ke Member)</li>
                                    <li>\u2022 Batas Kick: <strong class="text-red-500">&lt; 1000 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Member Rules -->
                        <div class="p-4 rounded-xl border border-gray-500/20 bg-gray-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-gray-300 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    \u2694\uFE0F Member
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>\u2022 Syarat Poin Awal: <strong class="text-white">500 Poin</strong></li>
                                    <li>\u2022 Batas Kick: <strong class="text-red-500">&le; 250 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `}function Da(e){if(!e||e.length===0)return`
            <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                    \u{1F4CB} Log Poin
                </h2>
                <div class="text-center py-10">
                    <p class="text-4xl mb-3">\u{1F4ED}</p>
                    <p class="text-gray-500 text-sm">Belum ada riwayat poin untuk anggota ini.</p>
                </div>
            </div>
        `;let t=e.map(a=>{let n=a.amount>=0,o=n?"text-green-400":"text-red-400",r=n?"bg-green-500/5 border-green-500/10":"bg-red-500/5 border-red-500/10",i=" Poin",s=n?"bg-green-500/10":"bg-red-500/10",l=n?"+":"",d=n?"\u25B2":"\u25BC";a.category==="side_point"&&(o=n?"text-blue-400":"text-indigo-400",r=n?"bg-blue-500/5 border-blue-500/10":"bg-indigo-500/5 border-indigo-500/10",i=" SP",s=n?"bg-blue-500/10":"bg-indigo-500/10");let c="-";if(a.date){let p=a.date.toDate?a.date.toDate():new Date(a.date);c=p.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})+" "+p.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}let g={war:"\u2694\uFE0F",donation:"\u{1F381}",clan_games:"\u{1F3AE}",cwl:"\u{1F3C5}",penalty:"\u26D4",bonus:"\u{1F31F}",side_point:"\u{1F48E}",other:"\u{1F4CC}"}[a.category]||"\u{1F4CC}";return`
            <div class="flex items-center gap-4 p-4 rounded-xl border ${r} transition-all duration-200 hover:bg-white/5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${s}">
                    ${g}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-white text-sm font-medium truncate">${a.reason||"Tidak ada keterangan"}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <p class="text-gray-500 text-xs">${c}</p>
                        ${a.adminName?`<span class="text-gray-600 text-xs">\u2022 oleh ${a.adminName}</span>`:""}
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <p class="${o} font-bold text-lg" style="font-family: 'Lilita One', cursive;">
                        <span class="text-xs">${d}</span> ${l}${a.amount}${i}
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
    `}async function Ut(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${T.repeat("leaderboardRow",10)}
        </div></div>
    `;let t=await $(),a=await G(),n=t.filter(i=>i.role!=="leader").sort((i,s)=>(s.totalPoints||0)-(i.totalPoints||0)).slice(0,100);if(n.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                ${V("\u{1F3C6}","Belum Ada Data","Leaderboard akan muncul setelah data member tersedia")}
            </div></div>${h()}
        `;return}let o=n.slice(0,3),r=n.slice(3);e.innerHTML=`
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
                        ${H({rank:2,...o[1]})}
                    </div>
                    <!-- 1st Place -->
                    <div class="order-1 md:order-2">
                        ${H({rank:1,...o[0]})}
                    </div>
                    <!-- 3rd Place -->
                    <div class="md:mt-12 order-3">
                        ${H({rank:3,...o[2]})}
                    </div>
                </div>
                `:`
                <div class="grid gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${o.map((i,s)=>H({rank:s+1,...i})).join("")}
                </div>
                `}

                <!-- Rest of Rankings -->
                ${r.length>0?`
                <div class="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Rankings #4 - #${n.length}</h3>
                    </div>
                    <div class="p-4 space-y-2">
                        ${r.map((i,s)=>H({rank:s+4,...i})).join("")}
                    </div>
                </div>
                `:""}

                <!-- Global Point Log Section -->
                <div class="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-on-scroll" data-stagger="true">
                    <div class="px-6 py-4 border-b border-white/5">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">\u{1F4DC} Riwayat Aktivitas Poin Klan</h3>
                    </div>
                    <div class="p-4 space-y-2 max-h-[500px] overflow-y-auto pr-2">
                        ${a.length>0?a.map(i=>{let s=de(ce(i.date)),l=(i.amount||0)>=0,d=l?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30";return`
                            <div class="animate-item flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-white font-medium">${i.memberName||"Unknown"}</span>
                                        <span class="text-[10px] text-gray-500">${i.memberTag||""}</span>
                                        <span class="text-xs text-gray-500">\u2014 ${i.reason||""}</span>
                                    </div>
                                    <p class="text-[10px] text-gray-500 mt-1">Oleh: ${i.adminName||"Admin"} \u2022 ${s}</p>
                                </div>
                                <div class="shrink-0 text-right">
                                    <span class="px-3 py-1 rounded-full text-xs font-bold ${d}" style="font-family: 'Lilita One', cursive;">
                                        ${l?"+":""}${i.amount} Poin
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
        ${h()}
    `}async function qt(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            ${T.repeat("warCard",5)}
        </div></div>
    `;let t=await ie();if(t.length===0){e.innerHTML=`
            <div class="pt-24 pb-8 px-4"><div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">\u2694\uFE0F War History</h1>
                ${V("\u2694\uFE0F","Belum Ada Data War","Data war akan muncul setelah admin menginput hasil war")}
            </div></div>${h()}
        `;return}let a=t.length,n=t.filter(s=>s.result==="win").length,o=t.filter(s=>s.result==="loss").length,r=t.filter(s=>s.result==="draw").length,i=a?Math.round(n/a*100):0;e.innerHTML=`
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
                        <p class="text-2xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">${i}%</p>
                        <p class="text-xs text-gray-500">Win Rate</p>
                    </div>
                </div>

                <!-- Timeline -->
                <div class="relative max-h-[600px] overflow-y-auto pr-2 animate-on-scroll" data-stagger="true">
                    <!-- Timeline Line -->
                    <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-transparent"></div>

                    <div class="space-y-6">
                        ${t.map((s,l)=>{let d=Rt(s.date);return`
                                <div class="animate-item relative flex gap-6 md:gap-8">
                                    <!-- Timeline Dot -->
                                    <div class="relative z-10 shrink-0">
                                        <div class="w-3 h-3 mt-7 rounded-full ${{win:"bg-green-500",loss:"bg-red-500",draw:"bg-gray-500"}[s.result]||"bg-gray-500"} ring-4 ring-[#0a0e17]"></div>
                                    </div>
                                    <!-- War Card -->
                                    <div class="flex-1 pb-2">
                                        ${gt({date:d,opponent:s.opponent,warSize:s.warSize,result:s.result,clanStars:s.clanStars,opponentStars:s.opponentStars,clanDestruction:s.clanDestruction,opponentDestruction:s.opponentDestruction,noAttackMembers:s.noAttackMembers})}
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `}var me=[];async function Kt(){me.forEach(n=>{try{n.destroy()}catch{}}),me=[];let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4"><div class="max-w-7xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${T.repeat("chart",4)}</div>
        </div></div>
    `;let[t,a]=await Promise.all([$(),ie()]);e.innerHTML=`
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
        ${h()}
    `,await Ha(),Ra(t),ja(a),Oa(t),Na(t)}function Ha(){return new Promise(e=>{if(window.Chart){e();return}let t=setInterval(()=>{window.Chart&&(clearInterval(t),e())},100);setTimeout(()=>{clearInterval(t),e()},5e3)})}function Ra(e){let t=document.getElementById("chart-donations");if(!t||!window.Chart)return;let a=[...e].sort((o,r)=>(r.donations||0)-(o.donations||0)).slice(0,10),n=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(o=>o.name.substring(0,10)),datasets:[{label:"Donations",data:a.map(o=>o.donations||0),backgroundColor:z.purpleAlpha,borderColor:z.purple,borderWidth:1,borderRadius:8}]},options:zt()});me.push(n)}function ja(e){let t=document.getElementById("chart-wars");if(!t||!window.Chart)return;let a=e.filter(i=>i.result==="win").length,n=e.filter(i=>i.result==="loss").length,o=e.filter(i=>i.result==="draw").length,r=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:["Victories","Defeats","Draws"],datasets:[{data:[a,n,o],backgroundColor:[z.green,z.red,z.gold],borderColor:"#0a0e17",borderWidth:3,hoverOffset:8}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"65%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:12},padding:16,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},animation:{animateRotate:!0,animateScale:!0,duration:1200}}});me.push(r)}function Oa(e){let t=document.getElementById("chart-points");if(!t||!window.Chart)return;let a=[...e].sort((o,r)=>(r.totalPoints||0)-(o.totalPoints||0)).slice(0,10),n=new Chart(t.getContext("2d"),{type:"bar",data:{labels:a.map(o=>o.name.substring(0,10)),datasets:[{label:"Points",data:a.map(o=>o.totalPoints||0),backgroundColor:z.goldAlpha,borderColor:z.gold,borderWidth:1,borderRadius:8}]},options:{...zt(),indexAxis:"y"}});me.push(n)}function Na(e){let t=document.getElementById("chart-th");if(!t||!window.Chart)return;let a={};e.forEach(s=>{let l=s.townHallLevel||0;a[l]=(a[l]||0)+1});let n=Object.keys(a).sort((s,l)=>s-l).map(s=>`TH${s}`),o=Object.keys(a).sort((s,l)=>s-l).map(s=>a[s]),r=o.map((s,l)=>`hsl(${l*30+200}, 70%, 55%)`),i=new Chart(t.getContext("2d"),{type:"doughnut",data:{labels:n,datasets:[{data:o,backgroundColor:r,borderColor:"#0a0e17",borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"55%",plugins:{legend:{labels:{color:"#94a3b8",font:{size:11},padding:12,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",cornerRadius:12,padding:12}}}});me.push(i)}function zt(){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15,23,42,0.9)",titleColor:"#f1f5f9",bodyColor:"#cbd5e1",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,cornerRadius:12,padding:12}},scales:{x:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}},y:{ticks:{color:"#64748b",font:{size:10}},grid:{color:"rgba(255,255,255,0.05)"},border:{color:"rgba(255,255,255,0.1)"}}},animation:{duration:1e3,easing:"easeOutQuart"}}}var Fa=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function Gt(){let e=await re(),t=e&&e.rewards?e.rewards:Z,a=e&&e.punishments?e.punishments:oe,n=e&&e.generalRules?e.generalRules:Fa;return`
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
                <div class="mb-12 animate-on-scroll">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-xl shadow-lg">\u2696\uFE0F</div>
                        <h2 class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">General Rules</h2>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
                        ${n.map((o,r)=>Wa(r+1,o)).join("")}
                    </div>
                </div>

                <!-- Role & Penalty Rules Card -->
                <div class="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-500/5 backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h3 class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        \u26A0\uFE0F Ketentuan & Batas Poin Jabatan
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">
                        Ketentuan batas poin untuk kenaikan jabatan, penurunan jabatan (demote), dan pengeluaran (kick) dari klan:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Co-Leader Rules -->
                        <div class="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-purple-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    \u269C\uFE0F Co-Leader
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>\u2022 Syarat Jabatan: <strong class="text-white">1500 Poin</strong></li>
                                    <li>\u2022 Batas Demote: <strong class="text-red-400">&le; 1250 Poin</strong> (Turun ke Elder)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Elder Rules -->
                        <div class="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-blue-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    \u{1F6E1}\uFE0F Elder
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>\u2022 Syarat Jabatan: <strong class="text-white">1250 Poin</strong></li>
                                    <li>\u2022 Batas Demote: <strong class="text-red-400">1000 Poin</strong> (Turun ke Member)</li>
                                    <li>\u2022 Batas Kick: <strong class="text-red-500">&lt; 1000 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Member Rules -->
                        <div class="p-4 rounded-xl border border-gray-500/20 bg-gray-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-gray-300 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    \u2694\uFE0F Member
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>\u2022 Syarat Poin Awal: <strong class="text-white">500 Poin</strong></li>
                                    <li>\u2022 Batas Kick: <strong class="text-red-500">&le; 250 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `}function Wa(e,t){return`
        <div class="flex items-start gap-4 group">
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/20 
                         flex items-center justify-center text-sm font-bold text-amber-400 shrink-0 
                         group-hover:from-amber-500/30 transition-all">${e}</span>
            <p class="text-gray-300 text-sm leading-relaxed pt-1">${t}</p>
        </div>
    `}var Xe=class{constructor(){this.container=null,this.toasts=[],this.init()}init(){this.container||(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="fixed top-20 right-4 z-[9999] flex flex-col gap-3 pointer-events-none",this.container.style.maxWidth="380px",this.container.style.width="100%",document.body.appendChild(this.container))}show(t,a="info",n=4e3){this.init();let o={success:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',error:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',warning:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>',info:'<svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'},r={success:"border-green-500/50 bg-green-500/10",error:"border-red-500/50 bg-red-500/10",warning:"border-amber-500/50 bg-amber-500/10",info:"border-blue-500/50 bg-blue-500/10"},i={success:"text-green-400",error:"text-red-400",warning:"text-amber-400",info:"text-blue-400"},s=document.createElement("div");return s.className=`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ${r[a]} backdrop-blur-xl text-white shadow-2xl toast-enter`,s.innerHTML=`
            <div class="${i[a]}">${o[a]}</div>
            <p class="text-sm font-medium flex-1">${t}</p>
            <button class="text-white/50 hover:text-white transition-colors shrink-0" onclick="this.closest('.toast-enter, .toast-visible').classList.add('toast-exit'); setTimeout(() => this.closest('.toast-enter, .toast-visible, .toast-exit')?.remove(), 300);">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,this.container.appendChild(s),requestAnimationFrame(()=>{s.classList.remove("toast-enter"),s.classList.add("toast-visible")}),n>0&&setTimeout(()=>{s.parentNode&&(s.classList.add("toast-exit"),setTimeout(()=>s.remove(),300))},n),s}success(t,a){return this.show(t,"success",a)}error(t,a){return this.show(t,"error",a)}warning(t,a){return this.show(t,"warning",a)}info(t,a){return this.show(t,"info",a)}},u=new Xe;var Ze=class{constructor(){this.activeModal=null}show({title:t,content:a,size:n="md",showClose:o=!0,actions:r=[],onClose:i=null}){this.close();let s={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-6xl"},l=document.createElement("div");return l.className="fixed inset-0 z-[9998] flex items-center justify-center p-4",l.id="modal-backdrop",l.innerHTML=`
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop-bg" onclick="window.__modalManager?.close()"></div>
            <div class="relative w-full ${s[n]} modal-content-enter">
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
                    ${r.length>0?`
                    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                        ${r.map((d,c)=>`
                            <button id="modal-action-${c}" class="${d.class||"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all"}">
                                ${d.label}
                            </button>
                        `).join("")}
                    </div>`:""}
                </div>
            </div>
        `,document.body.appendChild(l),document.body.style.overflow="hidden",r.forEach((d,c)=>{let m=l.querySelector(`#modal-action-${c}`);m&&d.onClick&&m.addEventListener("click",()=>d.onClick(l))}),requestAnimationFrame(()=>{let d=l.querySelector(".modal-content-enter");d&&d.classList.add("modal-content-visible")}),this.activeModal=l,this.onClose=i,this._escHandler=d=>{d.key==="Escape"&&this.close()},document.addEventListener("keydown",this._escHandler),l}confirm({title:t,message:a,confirmLabel:n="Confirm",cancelLabel:o="Cancel",onConfirm:r,onCancel:i,danger:s=!1}){return this.show({title:t||"Konfirmasi",content:`<p class="text-gray-300">${a}</p>`,size:"sm",actions:[{label:o,class:"px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all",onClick:()=>{this.close(),i&&i()}},{label:n,class:`px-4 py-2 rounded-xl text-sm font-bold text-white transition-all ${s?"bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700":"bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"}`,onClick:()=>{this.close(),r&&r()}}]})}close(){if(this.activeModal){let t=this.activeModal.querySelector(".modal-content-visible");t&&(t.classList.remove("modal-content-visible"),t.classList.add("modal-content-exit"));let a=this.activeModal;setTimeout(()=>{a.remove(),document.body.style.overflow=""},200),this.activeModal=null}this._escHandler&&document.removeEventListener("keydown",this._escHandler),this.onClose&&(this.onClose(),this.onClose=null)}},I=new Ze;window.__modalManager=I;var Y=null,Q=null,Ua=[];async function Vt(){if(!v())return u.warning("Firebase belum dikonfigurasi. Silakan setup Firebase terlebih dahulu."),null;try{let{GoogleAuthProvider:e,signInWithPopup:t}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js"),a=new e,n=await t(ee,a);return u.success(`Selamat datang, ${n.user.displayName}!`),n.user}catch(e){return e.code==="auth/popup-closed-by-user"?u.info("Login dibatalkan."):u.error(`Login gagal: ${e.message}`),console.error("Auth error:",e),null}}async function et(){try{let{signOut:e}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js");await e(ee),Y=null,Q=null,u.info("Berhasil logout.")}catch(e){u.error("Logout gagal."),console.error("Sign out error:",e)}}function Jt(e){if(!v())return e(null,null),()=>{};let{onAuthStateChanged:t}=ee.constructor.prototype;import("https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js").then(({onAuthStateChanged:a})=>{a(ee,async n=>{if(Y=n,n){try{await n.reload(),Y=ee.currentUser}catch(o){console.warn("Failed to reload auth profile:",o)}Q=await qa(Y.uid),await Ka(Y)}else Q=null;e(Y,Q),Ua.forEach(o=>o(Y,Q))})})}async function qa(e){try{let{doc:t,getDoc:a}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),n=await a(t(x,"users",e));return n.exists()&&n.data().role||"member"}catch(t){return console.warn("Error fetching user role:",t),"member"}}async function Ka(e){try{let{doc:t,getDoc:a,setDoc:n,serverTimestamp:o}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"),r=t(x,"users",e.uid);if(!(await a(r)).exists())await n(r,{uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL,role:"member",playerTag:"",createdAt:o(),lastLogin:o()});else{let{updateDoc:s}=await import("https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js");await s(r,{displayName:e.displayName,photoURL:e.photoURL,lastLogin:o()})}}catch(t){console.warn("Error ensuring user doc:",t)}}function E(){return Y}function Yt(){return Q}function P(){return Q==="leader"||Q==="coleader"}var O=[],U=null,j=new Set,te=new Set;async function Xt(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses Admin Panel</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}O=await $(),U=await re(),j.clear(),te.clear();let t=U&&U.rewards?U.rewards:Z,a=E();e.innerHTML=`
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
                        <a href="#/admin/cwl" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            \u{1F3C6} Kelola Lineup CWL
                        </a>
                        <a href="#/admin/layouts" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            \u{1F5FA}\uFE0F Kelola Base Layouts
                        </a>
                        <a href="#/admin/news" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-sm shadow-lg">
                            \u{1F4F0} Kelola Berita Supercell
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
                            <div>
                                <label class="block text-xs text-gray-400 mb-1.5 font-medium">Anggota Tidak Attack (No Attack)</label>
                                <input type="text" id="war-no-attack-search" oninput="window.__filterWarNoAttackMembers()" 
                                       class="admin-input text-xs py-2 px-3 mb-2" placeholder="Cari nama anggota atau tag...">
                                <div id="war-no-attack-container" class="max-h-[150px] overflow-y-auto border border-white/5 rounded-xl bg-white/[0.02] p-2 space-y-1">
                                    <!-- Rendered dynamically -->
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
                                <select id="viol-member" class="admin-select">${Qt()}</select>
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
                                <select id="role-member" class="admin-select">${Qt()}</select>
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
        ${h()}
    `,window.__updatePointPresets=Qa,window.__fillPointPreset=Xa,window.__submitPoints=()=>Za(a),window.__submitWar=()=>en(a),window.__submitViolation=()=>tn(a),window.__submitRole=()=>an(a),window.__loadAdminPointLogs=()=>Ne(a),window.__deleteLogEntry=n=>nn(n,a),window.__filterPointMembers=za,window.__selectAllPointMembers=Ga,window.__toggleMemberSelection=Va,window.__resetSelectedMembers=Zt,window.__filterWarNoAttackMembers=Ja,window.__toggleWarNoAttackMember=Ya,setTimeout(()=>{Ne(a),ke(),tt()},100)}function Qt(){return O.map(e=>`<option value="${e.tag}">${e.name} (${e.tag})</option>`).join("")}function ke(){let e=document.getElementById("point-members-container"),t=document.getElementById("point-selected-container"),a=document.getElementById("selected-count");if(!e||!t)return;let n=document.getElementById("point-member-search")?.value.toLowerCase()||"",o=O.filter(i=>!j.has(i.tag));e.innerHTML=o.map(i=>{let l=i.name.toLowerCase().includes(n)||i.tag.toLowerCase().includes(n)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${i.name}" data-tag="${i.tag}" style="display: ${l};">
                <input type="checkbox" value="${i.tag}" onchange="window.__toggleMemberSelection('${i.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${i.name}</p>
                    <p class="text-[10px] text-gray-500">${i.tag} \u2022 TH${i.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${i.totalPoints||0}</span>
                    ${i.sidePoints?`<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${i.sidePoints} SP</span>`:""}
                </div>
            </label>
        `}).join(""),o.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let r=O.filter(i=>j.has(i.tag));t.innerHTML=r.map(i=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${i.tag}" checked onchange="window.__toggleMemberSelection('${i.tag}', false)" class="w-4 h-4 rounded border-amber-500/30 bg-amber-500/10 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-amber-400 font-medium truncate">${i.name}</p>
                    <p class="text-[10px] text-amber-500/60">${i.tag} \u2022 TH${i.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${i.totalPoints||0}</span>
                    ${i.sidePoints?`<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${i.sidePoints} SP</span>`:""}
                </div>
            </label>
        `).join(""),r.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=r.length)}function za(){ke()}function Ga(e){if(e){let t=document.getElementById("point-member-search")?.value.toLowerCase()||"";O.forEach(a=>{j.has(a.tag)||(a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))&&j.add(a.tag)})}else j.clear();ke()}function Va(e,t){t?j.add(e):j.delete(e),ke()}function Zt(){j.clear();let e=document.getElementById("point-member-search");e&&(e.value="");let t=document.querySelector('input[name="point-target"][value="selected"]');t&&(t.checked=!0),ke()}function tt(){let e=document.getElementById("war-no-attack-container");if(!e)return;let t=document.getElementById("war-no-attack-search")?.value.toLowerCase()||"";e.innerHTML=O.map(a=>{let o=a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t)?"flex":"none",r=te.has(a.tag)?"checked":"";return`
            <label class="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" style="display: ${o};">
                <input type="checkbox" value="${a.tag}" ${r} onchange="window.__toggleWarNoAttackMember('${a.tag}')" class="w-4 h-4 rounded border-white/10 bg-white/5 text-red-500 focus:ring-red-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${a.name}</p>
                    <p class="text-[10px] text-gray-500">${a.tag}</p>
                </div>
            </label>
        `}).join("")}function Ja(){tt()}function Ya(e){te.has(e)?te.delete(e):te.add(e)}function Qa(){let e=document.getElementById("point-type")?.value,t=document.getElementById("point-preset-container"),a=document.getElementById("point-preset");if(a)if(e==="manual")t.style.display="none";else{t.style.display="block";let n=U&&U.rewards?U.rewards:Z,o=U&&U.punishments?U.punishments:oe,r=e==="reward"?n:o;a.innerHTML='<option value="">-- Pilih Preset --</option>'+r.map(i=>`<option value="${i.points}" data-reason="${i.label}">${i.points>0?"+":""}${i.points} \u2014 ${i.label}</option>`).join("")}}function Xa(){let t=document.getElementById("point-preset")?.selectedOptions[0];if(!t||!t.value)return;let a=document.getElementById("point-amount"),n=document.getElementById("point-reason");a&&(a.value=t.value),n&&(n.value=t.dataset.reason||"")}async function Za(e){let t=document.querySelector('input[name="point-target"]:checked')?.value||"selected",a=[];t==="selected"?a=Array.from(j):a=O.filter(l=>!j.has(l.tag)).map(l=>l.tag);let n=parseInt(document.getElementById("point-amount")?.value),o=document.getElementById("point-reason")?.value,r=document.getElementById("point-category")?.value;if(a.length===0){u.warning(t==="selected"?"Mohon pilih minimal satu anggota di daftar kanan.":"Tidak ada anggota tersisa di daftar kiri.");return}if(isNaN(n)||!o){u.warning("Mohon lengkapi semua field.");return}let i=a.map(l=>O.find(d=>d.tag===l)).filter(Boolean);if(n>0){let l=i.filter(d=>(d.totalPoints||0)+n>1500);if(l.length>0){let d=l.map(c=>c.name).join(", ");u.warning(`Gagal: Penambahan poin akan membuat poin ${d} melebihi batas maksimal 1500. Silakan gunakan menu Kelola Side Points.`);return}}let s=i.map(l=>l.name).join(", ");I.confirm({title:"Konfirmasi Kelola Poin",message:`${n>0?"Tambah":"Kurangi"} <strong>${Math.abs(n)}</strong> poin untuk <strong>${i.length} anggota</strong> (${t==="selected"?"Daftar Kanan":"Daftar Kiri"})?<br><br>Anggota: <i>${s}</i><br><br>Alasan: ${o}`,onConfirm:async()=>{try{for(let l of i)await Je({memberTag:l.tag,memberName:l.name,amount:n,reason:o,category:r,adminName:e?.displayName||"Admin"});u.success(`Poin berhasil ${n>0?"ditambahkan":"dikurangi"} untuk ${i.length} anggota!`),document.getElementById("point-amount").value="",document.getElementById("point-reason").value="",Zt(),Ne(e)}catch(l){u.error("Gagal menyimpan poin."),console.error(l)}}})}async function en(e){let t=parseInt(document.getElementById("war-size")?.value),a=document.getElementById("war-result")?.value,n=document.getElementById("war-opponent")?.value,o=parseInt(document.getElementById("war-our-stars")?.value)||0,r=parseInt(document.getElementById("war-enemy-stars")?.value)||0,i=parseFloat(document.getElementById("war-our-dest")?.value)||0,s=parseFloat(document.getElementById("war-enemy-dest")?.value)||0;if(!n){u.warning("Mohon isi nama lawan.");return}let l=Array.from(te).map(d=>{let c=O.find(m=>m.tag===d);return c?{tag:c.tag,name:c.name}:null}).filter(Boolean);try{await vt({date:new Date().toISOString(),opponent:n,warSize:t,result:a,clanStars:o,opponentStars:r,clanDestruction:i,opponentDestruction:s,noAttackMembers:l,addedBy:e?.displayName||"Admin"}),u.success("Data war berhasil disimpan!"),document.getElementById("war-opponent").value="",document.getElementById("war-our-stars").value="",document.getElementById("war-enemy-stars").value="",document.getElementById("war-our-dest").value="",document.getElementById("war-enemy-dest").value="";let d=document.getElementById("war-no-attack-search");d&&(d.value=""),te.clear(),tt()}catch(d){u.error("Gagal menyimpan data war."),console.error(d)}}async function tn(e){let t=document.getElementById("viol-member")?.value,a=document.getElementById("viol-type")?.value,n=document.getElementById("viol-desc")?.value,o=parseInt(document.getElementById("viol-points")?.value)||0;if(!t||!n){u.warning("Mohon lengkapi semua field.");return}let r=O.find(i=>i.tag===t);try{await Lt({memberTag:t,memberName:r?.name||"Unknown",type:a,description:n,pointsDeducted:o,adminName:e?.displayName||"Admin"}),o>0&&await Je({memberTag:t,memberName:r?.name||"Unknown",amount:-o,reason:`[${a}] ${n}`,category:"violation",adminName:e?.displayName||"Admin"}),u.success("Violation berhasil dicatat!"),document.getElementById("viol-desc").value="",document.getElementById("viol-points").value=""}catch(i){u.error("Gagal menyimpan violation."),console.error(i)}}async function an(e){let t=document.getElementById("role-member")?.value,a=document.getElementById("role-new")?.value,n=document.getElementById("role-reason")?.value,o=O.find(r=>r.tag===t);if(!t||!a){u.warning("Mohon pilih member dan role.");return}try{await kt({memberTag:t,memberName:o?.name||"Unknown",fromRole:o?.role||"member",toRole:a,reason:n||"Role updated",adminName:e?.displayName||"Admin"}),u.success(`Role ${o?.name} berhasil diubah ke ${a}!`),document.getElementById("role-reason").value=""}catch(r){u.error("Gagal mengubah role."),console.error(r)}}async function Ne(e){let t=document.getElementById("admin-point-logs");if(t)try{let a=await G();if(a.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan poin.</p>';return}t.innerHTML=a.map(n=>{let o=de(ce(n.date)),r=(n.amount||0)>=0,i="",s=" Poin";return n.category==="side_point"?(i=r?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",s=" Side Point"):i=r?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-red-500/20 text-red-400 border border-red-500/30",`
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
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${i}" style="font-family: 'Lilita One', cursive;">
                            ${r?"+":""}${n.amount}${s}
                        </span>
                        <button onclick="window.__deleteLogEntry('${n.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log Poin">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log poin.</p>'}}async function nn(e,t){I.confirm({title:"Hapus Log Poin",message:"Apakah Anda yakin ingin menghapus log poin ini?",onConfirm:async()=>{try{await De(e),u.success("Log poin berhasil dihapus!"),Ne(t)}catch(a){console.error(a),u.error("Gagal menghapus log poin.")}}})}var B={rewards:[],punishments:[],generalRules:[]},on=["Semua perubahan poin memiliki alasan, nama admin, dan tanggal yang tercatat","Jika status Opt-In dan tidak menyerang, poin otomatis berkurang","Jika status Opt-Out atau Izin, tidak ada pengurangan poin","Leader dan Co-Leader berhak menambah/mengurangi poin manual","Riwayat poin dapat dilihat oleh semua anggota","Promosi direkomendasikan berdasarkan akumulasi poin","Setiap anggota wajib menghormati sesama anggota clan","Donasi yang aktif dan Clan Capital yang rajin akan mendapat poin tambahan"];async function ta(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
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
    `;try{let t=await re();t?B={rewards:t.rewards||[],punishments:t.punishments||[],generalRules:t.generalRules||[]}:B={rewards:JSON.parse(JSON.stringify(Z)),punishments:JSON.parse(JSON.stringify(oe)),generalRules:[...on]}}catch(t){console.error(t),u.error("Gagal mengambil data rules.")}$e(e)}function $e(e){e.innerHTML=`
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
                                ${B.generalRules.map((t,a)=>`
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
                                ${B.rewards.map((t,a)=>ea(a,t,"reward")).join("")}
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
                                ${B.punishments.map((t,a)=>ea(a,t,"punishment")).join("")}
                            </div>
                            <button onclick="window.__addPreset('punishment')" class="w-full py-2.5 rounded-xl border border-dashed border-red-500/20 text-xs font-medium text-red-400 hover:text-red-300 hover:border-red-500/40 transition-colors">
                                \u2795 Tambah Preset Punishment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `,window.__addGeneralRule=()=>{Le(),B.generalRules.push(""),$e(e)},window.__removeGeneralRule=t=>{Le(),B.generalRules.splice(t,1),$e(e)},window.__addPreset=t=>{Le(),(t==="reward"?B.rewards:B.punishments).push({id:`${t}_${Date.now()}`,label:"",points:t==="reward"?10:-10,icon:t==="reward"?"\u2B50":"\u274C",category:"war"}),$e(e)},window.__removePreset=(t,a)=>{Le(),(a==="reward"?B.rewards:B.punishments).splice(t,1),$e(e)},window.__saveRulesConfig=async()=>{if(Le(),B.generalRules.some(n=>!n.trim())){u.warning("Teks aturan umum tidak boleh kosong.");return}let t=B.rewards.some(n=>!n.label.trim()||isNaN(n.points)),a=B.punishments.some(n=>!n.label.trim()||isNaN(n.points));if(t||a){u.warning("Semua label preset harus diisi dan poin harus berupa angka.");return}try{await _t(B),u.success("Rules & presets berhasil disimpan ke database!")}catch(n){console.error(n),u.error("Gagal menyimpan rules.")}}}function ea(e,t,a){let n=a==="reward";return`
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
    `}function Le(){let e=document.querySelectorAll(".general-rule-input");B.generalRules=Array.from(e).map(o=>o.value);let t=document.querySelectorAll(".preset-row"),a=[],n=[];t.forEach((o,r)=>{let i=o.dataset.type,s=o.querySelector(".preset-icon-input")?.value||"",l=o.querySelector(".preset-label-input")?.value||"",d=parseInt(o.querySelector(".preset-points-input")?.value)||0,c=o.querySelector(".preset-category-input")?.value||"war",m={id:`${i}_${r}_${Date.now()}`,icon:s,label:l,points:d,category:c};i==="reward"?a.push(m):n.push(m)}),B.rewards=a,B.punishments=n}var Be={heroTitle:"",heroDescription:""};async function aa(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
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
    `;try{Be=await Re()}catch(t){console.error(t),u.error("Gagal mengambil data landing page.")}rn(e)}function rn(e){e.innerHTML=`
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
                                              placeholder="Masukkan judul hero...">${Be.heroTitle||""}</textarea>
                                    <div class="mt-2 text-xs text-gray-500 space-y-1">
                                        <p>\u{1F4A1} Gunakan kelas gradient untuk efek warna premium:</p>
                                        <p class="font-mono text-amber-400">&lt;span class="hero-title-gradient"&gt;Teks Anda&lt;/span&gt;</p>
                                        <p class="font-mono text-yellow-400">&lt;span class="hero-title-gradient-2"&gt;Teks Anda&lt;/span&gt;</p>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Hero Description / Subtitle</label>
                                    <textarea id="hero-desc-input" rows="4" class="admin-input text-sm leading-relaxed" 
                                              placeholder="Masukkan deskripsi hero...">${Be.heroDescription||""}</textarea>
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
                                    ${Be.heroTitle||""}
                                </h1>

                                <!-- Dynamic Preview Description -->
                                <p id="preview-desc" class="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                                    ${Be.heroDescription||""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `;let t=document.getElementById("hero-title-input"),a=document.getElementById("hero-desc-input"),n=document.getElementById("preview-title"),o=document.getElementById("preview-desc");t&&n&&t.addEventListener("input",()=>{n.innerHTML=t.value||'<span class="text-gray-600">[Judul Kosong]</span>'}),a&&o&&a.addEventListener("input",()=>{o.textContent=a.value||"[Deskripsi Kosong]"}),window.__saveLandingConfig=async()=>{let r=t?.value.trim(),i=a?.value.trim();if(!r||!i){u.warning("Teks judul dan deskripsi tidak boleh kosong.");return}try{await Ct({heroTitle:r,heroDescription:i}),u.success("Landing page settings berhasil disimpan!")}catch(s){console.error(s),u.error("Gagal menyimpan landing page settings.")}}}var ae=[],N=new Set;async function na(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses halaman Kelola Side Points</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}ae=await $(),N.clear();let t=E();e.innerHTML=`
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
        ${h()}
    `,window.__filterSideMembers=sn,window.__selectAllSideMembers=ln,window.__toggleSideMemberSelection=dn,window.__resetSideSelectedMembers=oa,window.__fillSidePreset=cn,window.__submitSidePoints=()=>mn(t),window.__deleteLogEntry=a=>un(a,t),setTimeout(()=>{at(t),ue()},100)}function ue(){let e=document.getElementById("side-members-container"),t=document.getElementById("side-selected-container"),a=document.getElementById("side-selected-count");if(!e||!t)return;let n=document.getElementById("side-member-search")?.value.toLowerCase()||"",o=ae.filter(i=>!N.has(i.tag));e.innerHTML=o.map(i=>{let l=i.name.toLowerCase().includes(n)||i.tag.toLowerCase().includes(n)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${i.name}" data-tag="${i.tag}" style="display: ${l};">
                <input type="checkbox" value="${i.tag}" onchange="window.__toggleSideMemberSelection('${i.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${i.name}</p>
                    <p class="text-[10px] text-gray-500">${i.tag} \u2022 TH${i.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${i.totalPoints||0}</span>
                    ${i.sidePoints?`<span class="block text-[9px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">+${i.sidePoints} SP</span>`:""}
                </div>
            </label>
        `}).join(""),o.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let r=ae.filter(i=>N.has(i.tag));t.innerHTML=r.map(i=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${i.tag}" checked onchange="window.__toggleSideMemberSelection('${i.tag}', false)" class="w-4 h-4 rounded border-blue-500/30 bg-blue-500/10 text-blue-500 focus:ring-blue-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-blue-400 font-medium truncate">${i.name}</p>
                    <p class="text-[10px] text-blue-500/60">${i.tag} \u2022 TH${i.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${i.totalPoints||0}</span>
                    ${i.sidePoints?`<span class="block text-[9px] text-blue-400/80 font-bold" style="font-family: 'Lilita One', cursive;">+${i.sidePoints} SP</span>`:""}
                </div>
            </label>
        `).join(""),r.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=r.length)}function sn(){ue()}function ln(e){if(e){let t=document.getElementById("side-member-search")?.value.toLowerCase()||"";ae.forEach(a=>{N.has(a.tag)||(a.name.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))&&N.add(a.tag)})}else N.clear();ue()}function dn(e,t){t?N.add(e):N.delete(e),ue()}function oa(){N.clear();let e=document.getElementById("side-member-search");e&&(e.value="");let t=document.querySelector('input[name="side-point-target"][value="selected"]');t&&(t.checked=!0),ue()}function cn(){let e=document.getElementById("side-preset");if(!e||!e.value)return;let t=document.getElementById("side-amount");t&&(t.value=e.value)}async function mn(e){let t=document.querySelector('input[name="side-point-target"]:checked')?.value||"selected",a=[];t==="selected"?a=Array.from(N):a=ae.filter(s=>!N.has(s.tag)).map(s=>s.tag);let n=parseInt(document.getElementById("side-amount")?.value),o=document.getElementById("side-reason")?.value;if(a.length===0){u.warning(t==="selected"?"Mohon pilih minimal satu anggota di daftar kanan.":"Tidak ada anggota tersisa di daftar kiri.");return}if(isNaN(n)||!o){u.warning("Mohon lengkapi semua field.");return}let r=a.map(s=>ae.find(l=>l.tag===s)).filter(Boolean),i=r.map(s=>s.name).join(", ");I.confirm({title:"Konfirmasi Kelola Side Points",message:`Apakah Anda yakin ingin ${n>0?"menambah":"mengurangi"} <strong>${Math.abs(n)}</strong> side points untuk <strong>${r.length} anggota</strong> (${t==="selected"?"Daftar Kanan":"Daftar Kiri"})?<br><br>Anggota: <i>${i}</i><br><br>Alasan: ${o}`,onConfirm:async()=>{try{for(let s of r)await yt({memberTag:s.tag,memberName:s.name,amount:n,reason:o,category:"side_point",adminName:e?.displayName||"Admin"});u.success(`Side points berhasil ${n>0?"ditambahkan":"dikurangi"} untuk ${r.length} anggota!`),document.getElementById("side-amount").value="",document.getElementById("side-reason").value="",document.getElementById("side-preset").value="",oa(),ae=await $(),ue(),at(e)}catch(s){u.error("Gagal menyimpan side points."),console.error(s)}}})}async function at(e){let t=document.getElementById("admin-sidepoint-logs");if(t)try{let n=(await G()).filter(o=>o.category==="side_point");if(n.length===0){t.innerHTML='<p class="text-center text-gray-500 text-sm py-6">Belum ada riwayat perubahan side points.</p>';return}t.innerHTML=n.map(o=>{let r=de(ce(o.date)),i=(o.amount||0)>=0,s=i?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30";return`
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
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${s}" style="font-family: 'Lilita One', cursive;">
                            ${i?"+":""}${o.amount} Side Point
                        </span>
                        <button onclick="window.__deleteLogEntry('${o.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors shrink-0" title="Hapus Log">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>
            `}).join("")}catch(a){console.error(a),t.innerHTML='<p class="text-center text-red-400 text-sm py-6">Gagal memuat log side points.</p>'}}async function un(e,t){I.confirm({title:"Hapus Log Side Points",message:"Apakah Anda yakin ingin menghapus log side points ini? Tindakan ini tidak mengembalikan nilai side points anggota.",onConfirm:async()=>{try{await De(e),u.success("Log side points berhasil dihapus!"),at(t)}catch(a){console.error(a),u.error("Gagal menghapus log.")}}})}async function ia(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-72 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${T.repeat("statCard",6)}
                </div>
            </div>
        </div>
    `;let t=await se();e.innerHTML=`
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

                <!-- Category Tabs (Home Village, Builder Base, Clan Capital) -->
                <div class="flex border-b border-white/10 mb-8 animate-on-scroll">
                    <button onclick="window.__setCategoryFilter('home')" id="tab-cat-home"
                            class="px-6 py-3.5 text-sm font-bold border-b-2 border-amber-500 text-amber-400 transition-all flex items-center gap-2">
                        \u{1F3E0} Desa Asal
                    </button>
                    <button onclick="window.__setCategoryFilter('builder')" id="tab-cat-builder"
                            class="px-6 py-3.5 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-white transition-all flex items-center gap-2">
                        \u{1F6E0}\uFE0F Desa Tukang
                    </button>
                    <button onclick="window.__setCategoryFilter('capital')" id="tab-cat-capital"
                            class="px-6 py-3.5 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-white transition-all flex items-center gap-2">
                        \u{1F3F0} Clan Capital
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

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                    Farming Base
                                </button>
                                <button onclick="window.__setTypeFilter('trophy')" id="btn-type-trophy"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Trophy Base
                                </button>
                                <button onclick="window.__setTypeFilter('hybrid')" id="btn-type-hybrid"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Hybrid Base
                                </button>
                                <button onclick="window.__setTypeFilter('defense')" id="btn-type-defense"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Defense Base
                                </button>
                                <button onclick="window.__setTypeFilter('anti_2')" id="btn-type-anti_2"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Anti 2 Stars Base
                                </button>
                                <button onclick="window.__setTypeFilter('anti_3')" id="btn-type-anti_3"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Anti 3 Stars Base
                                </button>
                                <button onclick="window.__setTypeFilter('anti_air')" id="btn-type-anti_air"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Anti Air Base
                                </button>
                                <button onclick="window.__setTypeFilter('anti_ground')" id="btn-type-anti_ground"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Anti Ground Base
                                </button>
                                <button onclick="window.__setTypeFilter('fun')" id="btn-type-fun"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Fun Base
                                </button>
                                <button onclick="window.__setTypeFilter('progress')" id="btn-type-progress"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Progress Base
                                </button>
                                <button onclick="window.__setTypeFilter('troll')" id="btn-type-troll"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    Troll Base
                                </button>
                            </div>
                        </div>
                        <!-- Rating Filters -->
                        <div>
                            <label class="block text-xs text-gray-500 mb-2 font-medium">Filter Rating:</label>
                            <div class="flex flex-wrap gap-2">
                                <button onclick="window.__setRatingFilter('all')" id="btn-rating-all"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md">
                                    Semua Rating
                                </button>
                                <button onclick="window.__setRatingFilter('5')" id="btn-rating-5"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    \u2B50\u2B50\u2B50\u2B50\u2B50
                                </button>
                                <button onclick="window.__setRatingFilter('4')" id="btn-rating-4"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    \u2B50\u2B50\u2B50\u2B50+
                                </button>
                                <button onclick="window.__setRatingFilter('3')" id="btn-rating-3"
                                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    \u2B50\u2B50\u2B50+
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Base Layouts Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-on-scroll" id="layouts-grid" data-stagger="true">
                    <!-- Dynamic base cards -->
                </div>
                <!-- Pagination Controls -->
                <div id="pagination-container" class="flex justify-center items-center gap-2 mb-12 animate-on-scroll">
                    <!-- Rendered dynamically -->
                </div>
            </div>
        </div>
        ${h()}
    `;let a="home",n="all",o="all",r="all",i="all",s=1,l=9;window.__filterLayouts=()=>{let c=document.getElementById("layout-search")?.value.toLowerCase()||"",m=document.getElementById("layouts-grid");if(!m)return;let g=t.filter(b=>{let W=b.title.toLowerCase().includes(c),C=(b.category||"home")===a,S=o==="all"||parseInt(b.townHallLevel)===parseInt(o),M=!0;a==="home"&&(M=r==="all"||(b.type||"war")===r);let X=!0;a==="capital"&&(X=n==="all"||(b.district||"capital_peak")===n);let f=i==="all"||parseInt(b.rating||5)>=parseInt(i);return W&&C&&S&&M&&X&&f}),p=document.getElementById("pagination-container");if(g.length===0){m.innerHTML=`
                <div class="col-span-full py-16">
                    ${V("\u{1F5FA}\uFE0F","Layout Tidak Ditemukan","Cobalah mengubah filter atau pencarian Anda.")}
                </div>
            `,p&&(p.innerHTML="");return}let w=Math.ceil(g.length/l);s>w&&(s=w),s<1&&(s=1);let L=(s-1)*l,D=g.slice(L,L+l);if(m.innerHTML=D.map(b=>{let W=b.category==="builder"?"BH":b.category==="capital"?b.district==="capital_peak"?"CH":"Lvl":"TH",S={15:"from-blue-500 to-indigo-600",16:"from-purple-500 to-indigo-700",17:"from-amber-500 to-yellow-600",18:"from-red-500 to-rose-600"}[b.townHallLevel]||"from-gray-600 to-gray-700",M={war:"\u2694\uFE0F War Base",farming:"\u{1F69C} Farming Base",trophy:"\u{1F3C6} Trophy Base",hybrid:"\u{1F9EC} Hybrid Base",defense:"\u{1F6E1}\uFE0F Defense Base",anti_2:"\u{1F6E1}\uFE0F Anti 2 Stars Base",anti_3:"\u{1F6E1}\uFE0F Anti 3 Stars Base",anti_air:"\u{1F388} Anti Air Base",anti_ground:"\u{1F30B} Anti Ground Base",fun:"\u{1F3A8} Fun Base",progress:"\u{1F4C8} Progress Base",troll:"\u{1F61C} Troll Base"},X={capital_peak:"Puncak Ibu Kota",barbarian_camp:"Perkemahan Barbar",wizard_valley:"Lembah Penyihir",balloon_lagoon:"Laguna Balon",builders_workshop:"Bengkel Tukang",dragon_cliffs:"Tebing Naga",golem_quarry:"Tambang Golem",skeleton_park:"Taman Rangka",goblin_mines:"Tambang Goblin"},f="";b.category==="home"?f=`
                    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm shadow-md">
                        ${M[b.type||"war"]||"War Base"}
                    </span>
                `:b.category==="capital"&&(f=`
                    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-sky-400 bg-black/60 backdrop-blur-sm shadow-md border border-sky-500/20">
                        ${X[b.district||"capital_peak"]||"Ibu Kota"}
                    </span>
                `);let Te="\u2B50".repeat(b.rating||5);return`
                <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden 
                            hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:scale-[1.02] flex flex-col">
                    <!-- Preview Image -->
                    <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-800 shrink-0">
                        <img src="${b.imageUrl||"assets/images/base-placeholder.png"}" 
                             alt="${b.title}" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600'">
                        <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${S} shadow-md">
                            ${W} ${b.townHallLevel}
                        </span>
                        ${f}
                    </div>

                    <!-- Details -->
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div class="mb-5">
                            <div class="flex items-center justify-between gap-2 mb-2">
                                <span class="text-xs text-yellow-500 font-bold">${Te}</span>
                            </div>
                            <h3 class="text-white font-bold text-lg leading-snug line-clamp-2">${b.title}</h3>
                        </div>

                        <!-- CTA Actions -->
                        <div class="flex gap-2">
                            <a href="${b.link}" target="_blank" 
                               class="flex-1 py-3 px-4 rounded-xl text-center text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10">
                                \u2694\uFE0F Copy Base
                            </a>
                            <button onclick="window.__shareLayout('${b.link}')" 
                                    class="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors" 
                                    title="Salin Link">
                                \u{1F517}
                            </button>
                        </div>
                    </div>
                </div>
            `}).join(""),p)if(w<=1)p.innerHTML="";else{let b="";b+=`
                    <button onclick="window.__setPage(${s-1})" ${s===1?"disabled":""} 
                            class="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                        \u2190 Prev
                    </button>
                `;let W=5,C=Math.max(1,s-Math.floor(W/2)),S=Math.min(w,C+W-1);S-C+1<W&&(C=Math.max(1,S-W+1)),C>1&&(b+=`
                        <button onclick="window.__setPage(1)" 
                                class="w-9 h-9 rounded-xl text-xs font-bold transition-all border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10">
                            1
                        </button>
                    `,C>2&&(b+='<span class="text-gray-500 text-xs px-1">...</span>'));for(let M=C;M<=S;M++)b+=`
                        <button onclick="window.__setPage(${M})" 
                                class="w-9 h-9 rounded-xl text-xs font-bold transition-all ${M===s?"bg-amber-500 text-black shadow-md shadow-amber-500/20":"border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"}">
                            ${M}
                        </button>
                    `;S<w&&(S<w-1&&(b+='<span class="text-gray-500 text-xs px-1">...</span>'),b+=`
                        <button onclick="window.__setPage(${w})" 
                                class="w-9 h-9 rounded-xl text-xs font-bold transition-all border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10">
                            ${w}
                        </button>
                    `),b+=`
                    <button onclick="window.__setPage(${s+1})" ${s===w?"disabled":""} 
                            class="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                        Next \u2192
                    </button>
                `,p.innerHTML=b}},window.__shareLayout=c=>{navigator.clipboard.writeText(c).then(()=>{u.success("Link layout base berhasil disalin ke clipboard!")}).catch(m=>{u.error("Gagal menyalin link.")})},window.__setCategoryFilter=c=>{a=c,o="all",n="all",r="all",i="all",["home","builder","capital"].forEach(w=>{let L=document.getElementById(`tab-cat-${w}`);L&&(w===c?L.className="px-6 py-3.5 text-sm font-bold border-b-2 border-amber-500 text-amber-400 transition-all flex items-center gap-2":L.className="px-6 py-3.5 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-white transition-all flex items-center gap-2")});let g=document.getElementById("type-filter-container"),p=document.getElementById("district-filter-container");c==="home"?(g?.classList.remove("hidden"),p?.classList.add("hidden")):c==="builder"?(g?.classList.add("hidden"),p?.classList.add("hidden")):c==="capital"&&(g?.classList.add("hidden"),p?.classList.remove("hidden")),window.__setTypeFilter("all"),window.__setDistrictFilter("all"),window.__setRatingFilter("all"),d(),window.__filterLayouts()},window.__setLevelFilter=c=>{o=c,s=1,document.querySelectorAll(".lvl-filter-btn").forEach(g=>{g.dataset.lvl===String(c)?g.className="lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md":g.className="lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"}),window.__filterLayouts()},window.__setTypeFilter=c=>{r=c,s=1,["all","war","farming","trophy","hybrid","defense","anti_2","anti_3","anti_air","anti_ground","fun","progress","troll"].forEach(g=>{let p=document.getElementById(`btn-type-${g}`);p&&(g===c?p.className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md":p.className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all")}),window.__filterLayouts()},window.__setDistrictFilter=c=>{n=c,o="all",s=1,["all","capital_peak","barbarian_camp","wizard_valley","balloon_lagoon","builders_workshop","dragon_cliffs","golem_quarry","skeleton_park","goblin_mines"].forEach(g=>{let p=document.getElementById(`btn-dist-${g}`);p&&(g===c?p.className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md":p.className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all")}),d(),window.__filterLayouts()},window.__setRatingFilter=c=>{i=c,s=1,["all","5","4","3"].forEach(g=>{let p=document.getElementById(`btn-rating-${g}`);p&&(g===c?p.className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md":p.className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all")}),window.__filterLayouts()};function d(){let c=document.getElementById("level-filters-container");if(!c)return;let m=t.filter(L=>{let D=(L.category||"home")===a,b=!0;return a==="capital"&&(b=n==="all"||(L.district||"capital_peak")===n),D&&b}),g=Array.from(new Set(m.map(L=>parseInt(L.townHallLevel)))).sort((L,D)=>D-L),p=a==="builder"?"BH":a==="capital"?n==="capital_peak"?"CH":n==="all"?"Lvl/CH":"Lvl":"TH",w=`
            <button onclick="window.__setLevelFilter('all')" data-lvl="all"
                    class="lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-amber-500 transition-all shadow-md">
                Semua
            </button>
        `;w+=g.map(L=>`
            <button onclick="window.__setLevelFilter('${L}')" data-lvl="${L}"
                    class="lvl-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                ${p} ${L}
            </button>
        `).join(""),c.innerHTML=w}window.__setPage=c=>{s=c,window.__filterLayouts(),document.getElementById("layouts-grid")?.scrollIntoView({behavior:"smooth",block:"start"})},d(),window.__filterLayouts()}var pe=[],ge=null;async function ra(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
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
    `;try{pe=await se()}catch(t){console.error(t),u.error("Gagal memuat layouts.")}ge=null,pn(e)}function pn(e){let t=E();e.innerHTML=`
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
                        <p class="text-gray-400 text-sm">Tambah, edit, hapus, dan kelola database layout base klan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Add/Edit Layout Form -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 backdrop-blur-sm sticky top-24">
                            <h2 id="form-title" class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u2795 Tambah Base Baru
                            </h2>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Kategori Base</label>
                                    <select id="layout-form-category" class="admin-select" onchange="window.__onCategoryChange()">
                                        <option value="home">Home Village (Desa Asal)</option>
                                        <option value="builder">Builder Base (Desa Tukang)</option>
                                        <option value="capital">Clan Capital</option>
                                    </select>
                                </div>
                                
                                <!-- Capital District Select (only for capital) -->
                                <div id="district-select-container" class="hidden">
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Distrik Clan Capital</label>
                                    <select id="layout-form-district" class="admin-select" onchange="window.__updateLevelOptions()">
                                        <option value="capital_peak">Puncak Ibu Kota (Capital Peak)</option>
                                        <option value="barbarian_camp">Perkemahan Barbar (Barbarian Camp)</option>
                                        <option value="wizard_valley">Lembah Penyihir (Wizard Valley)</option>
                                        <option value="balloon_lagoon">Laguna Balon (Balloon Lagoon)</option>
                                        <option value="builders_workshop">Bengkel Tukang (Builder's Workshop)</option>
                                        <option value="dragon_cliffs">Tebing Naga (Dragon Cliffs)</option>
                                        <option value="golem_quarry">Tambang Golem (Golem Quarry)</option>
                                        <option value="skeleton_park">Taman Rangka (Skeleton Park)</option>
                                        <option value="goblin_mines">Tambang Goblin (Goblin Mines)</option>
                                    </select>
                                </div>

                                <!-- Level Select -->
                                <div>
                                    <label id="level-label" class="block text-xs text-gray-400 mb-1.5 font-medium">Level Town Hall</label>
                                    <select id="layout-form-th" class="admin-select">
                                        <!-- Levels populated dynamically -->
                                    </select>
                                </div>

                                <!-- Type Select (only for home) -->
                                <div id="type-select-container">
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tipe Base</label>
                                    <select id="layout-form-type" class="admin-select">
                                        <option value="war">War Base</option>
                                        <option value="farming">Farming Base</option>
                                        <option value="trophy">Trophy Base</option>
                                        <option value="hybrid">Hybrid Base</option>
                                        <option value="defense">Defense Base</option>
                                        <option value="anti_2">Anti 2 Stars Base</option>
                                        <option value="anti_3">Anti 3 Stars Base</option>
                                        <option value="anti_air">Anti Air Base</option>
                                        <option value="anti_ground">Anti Ground Base</option>
                                        <option value="fun">Fun Base</option>
                                        <option value="progress">Progress Base</option>
                                        <option value="troll">Troll Base</option>
                                    </select>
                                </div>

                                <!-- Rating Select -->
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Statistik Rating</label>
                                    <select id="layout-form-rating" class="admin-select">
                                        <option value="5">\u2B50\u2B50\u2B50\u2B50\u2B50 (5 Bintang)</option>
                                        <option value="4">\u2B50\u2B50\u2B50\u2B50 (4 Bintang)</option>
                                        <option value="3">\u2B50\u2B50\u2B50 (3 Bintang)</option>
                                        <option value="2">\u2B50\u2B50 (2 Bintang)</option>
                                        <option value="1">\u2B50 (1 Bintang)</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Judul Base / Deskripsi</label>
                                    <input type="text" id="layout-form-title" class="admin-input" placeholder="Contoh: TH18 War Base Anti 3-Star">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tautan Salin Base (Copy Link)</label>
                                    <input type="url" id="layout-form-link" class="admin-input" placeholder="https://link.clashofclans.com/en?action=OpenLayout&id=...">
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Tautan Gambar Preview (Image URL)</label>
                                    <input type="url" id="layout-form-image" class="admin-input" placeholder="https://... atau upload di postimg/discord">
                                </div>
                                <div class="flex gap-3">
                                    <button onclick="window.__submitLayoutForm()" id="submit-btn" class="flex-1 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20">
                                        Simpan Layout Base
                                    </button>
                                    <button onclick="window.__cancelEdit()" id="cancel-btn" class="hidden px-4 py-3 rounded-xl text-sm font-bold text-gray-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Current Layouts List -->
                    <div class="lg:col-span-7 space-y-6">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
                                <h2 class="text-xl font-bold text-white flex items-center gap-2 mb-0" style="font-family: 'Lilita One', cursive;">
                                    \u{1F4DC} Daftar Base Aktif
                                </h2>
                                <div class="flex flex-wrap gap-2 w-full xl:w-auto">
                                    <input type="text" id="layout-filter-search" oninput="window.__filterAdminLayouts()" 
                                           class="admin-input text-xs py-2 px-3 w-full sm:w-[180px]" placeholder="Cari judul base...">
                                    <select id="layout-filter-category" onchange="window.__onFilterCategoryChange()" class="admin-select text-xs py-2 px-3 w-full sm:w-auto">
                                        <option value="">Semua Kategori</option>
                                        <option value="home">Desa Asal (Home)</option>
                                        <option value="builder">Desa Tukang (Builder)</option>
                                        <option value="capital">Clan Capital</option>
                                    </select>
                                    <select id="layout-filter-level" onchange="window.__filterAdminLayouts()" class="admin-select text-xs py-2 px-3 w-full sm:w-auto" disabled>
                                        <option value="">Semua Level</option>
                                    </select>
                                </div>
                            </div>
                            <div id="admin-layouts-list" class="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                <!-- Rendered dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `,window.__onCategoryChange=Fe,window.__updateLevelOptions=nt,window.__submitLayoutForm=()=>xn(t),window.__deleteLayout=a=>hn(a),window.__editLayout=a=>bn(a),window.__cancelEdit=ot,window.__onFilterCategoryChange=gn,window.__filterAdminLayouts=sa,Fe(),We()}function gn(){let e=document.getElementById("layout-filter-category")?.value,t=document.getElementById("layout-filter-level");if(t){if(!e)t.innerHTML='<option value="">Semua Level</option>',t.value="",t.disabled=!0;else{t.disabled=!1;let a=18,n="TH";e==="builder"?(a=11,n="BH"):e==="capital"&&(a=10,n="CH");let o='<option value="">Semua Level</option>';for(let r=a;r>=1;r--)o+=`<option value="${r}">${n} ${r}</option>`;t.innerHTML=o}sa()}}function sa(){We()}function Fe(){let e=document.getElementById("layout-form-category")?.value||"home",t=document.getElementById("type-select-container"),a=document.getElementById("district-select-container");!t||!a||(e==="home"?(t.classList.remove("hidden"),a.classList.add("hidden")):e==="builder"?(t.classList.add("hidden"),a.classList.add("hidden")):e==="capital"&&(t.classList.add("hidden"),a.classList.remove("hidden")),nt())}function nt(){let e=document.getElementById("layout-form-category")?.value||"home",t=document.getElementById("layout-form-district")?.value||"capital_peak",a=document.getElementById("layout-form-th"),n=document.getElementById("level-label");if(!a||!n)return;let o="";e==="home"?(n.textContent="Level Town Hall (TH)",o=Array.from({length:18},(r,i)=>18-i).map(r=>`
            <option value="${r}">Town Hall ${r}</option>
        `).join("")):e==="builder"?(n.textContent="Level Builder Hall (BH)",o=Array.from({length:11},(r,i)=>11-i).map(r=>`
            <option value="${r}">Builder Hall ${r}</option>
        `).join("")):e==="capital"&&(t==="capital_peak"?(n.textContent="Level Capital Hall (CH)",o=Array.from({length:10},(r,i)=>10-i).map(r=>`
                <option value="${r}">Capital Hall ${r}</option>
            `).join("")):(n.textContent="Level Distrik (1 - 5)",o=Array.from({length:5},(r,i)=>5-i).map(r=>`
                <option value="${r}">Level ${r}</option>
            `).join(""))),a.innerHTML=o}function We(){let e=document.getElementById("admin-layouts-list");if(!e)return;if(pe.length===0){e.innerHTML='<p class="text-center text-gray-500 text-sm py-8">Belum ada layout base klan.</p>';return}let t=document.getElementById("layout-filter-search")?.value.toLowerCase()||"",a=document.getElementById("layout-filter-category")?.value||"",n=document.getElementById("layout-filter-level")?.value||"",o=pe;if(a&&(o=o.filter(d=>d.category===a)),n&&(o=o.filter(d=>d.townHallLevel===parseInt(n,10))),t&&(o=o.filter(d=>d.title.toLowerCase().includes(t))),o.length===0){e.innerHTML='<p class="text-center text-gray-500 text-sm py-8">Tidak ada layout base yang cocok dengan filter.</p>';return}let r={home:"Desa Asal",builder:"Desa Tukang",capital:"Clan Capital"},i={capital_peak:"Puncak Ibu Kota",barbarian_camp:"Perkemahan Barbar",wizard_valley:"Lembah Penyihir",balloon_lagoon:"Laguna Balon",builders_workshop:"Bengkel Tukang",dragon_cliffs:"Tebing Naga",golem_quarry:"Tambang Golem",skeleton_park:"Taman Rangka",goblin_mines:"Tambang Goblin"},s={war:"War Base",farming:"Farming Base",trophy:"Trophy Base",hybrid:"Hybrid Base",defense:"Defense Base",anti_2:"Anti 2 Stars Base",anti_3:"Anti 3 Stars Base",anti_air:"Anti Air Base",anti_ground:"Anti Ground Base",fun:"Fun Base",progress:"Progress Base",troll:"Troll Base"},l={home:"bg-emerald-500/20 text-emerald-400",builder:"bg-orange-500/20 text-orange-400",capital:"bg-sky-500/20 text-sky-400"};e.innerHTML=o.map(d=>{let c="\u2B50".repeat(d.rating||5),m=r[d.category||"home"],g="";d.category==="home"?g=`<span class="px-2 py-0.5 rounded text-[10px] font-bold text-gray-300 bg-white/10">${s[d.type||"war"]||"War"}</span>`:d.category==="capital"&&(g=`<span class="px-2 py-0.5 rounded text-[10px] font-bold text-sky-400 bg-sky-500/10">${i[d.district||"capital_peak"]||"Ibu Kota"}</span>`);let p=d.category==="builder"?"BH":d.category==="capital"?d.district==="capital_peak"?"CH":"Lvl":"TH";return`
            <div class="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                <img src="${d.imageUrl}" alt="" class="w-16 h-16 rounded-lg object-cover bg-slate-800 shrink-0"
                     onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'">
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">${d.title}</p>
                    <div class="flex flex-wrap items-center gap-2 mt-1.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${l[d.category||"home"]}">${m}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-blue-500">${p} ${d.townHallLevel}</span>
                        ${g}
                        <span class="text-[10px] text-yellow-500">${c}</span>
                    </div>
                </div>
                <div class="flex gap-1 shrink-0">
                    <button onclick="window.__editLayout('${d.id}')" class="p-2 text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors" title="Edit Base">
                        \u270F\uFE0F
                    </button>
                    <a href="${d.link}" target="_blank" class="p-2 text-sky-400 hover:text-sky-300 hover:bg-white/5 rounded-lg transition-colors" title="Uji Coba Link">
                        \u{1F441}\uFE0F
                    </a>
                    <button onclick="window.__deleteLayout('${d.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors" title="Hapus Base">
                        \u{1F5D1}\uFE0F
                    </button>
                </div>
            </div>
        `}).join("")}function bn(e){let t=pe.find(a=>a.id===e);t&&(ge=e,document.getElementById("form-title").innerHTML=`\u270F\uFE0F Edit Base: ${t.title}`,document.getElementById("submit-btn").innerHTML="Update Layout Base",document.getElementById("cancel-btn").classList.remove("hidden"),document.getElementById("layout-form-category").value=t.category||"home",Fe(),t.category==="capital"&&(document.getElementById("layout-form-district").value=t.district||"capital_peak",nt()),document.getElementById("layout-form-th").value=t.townHallLevel,t.category==="home"&&(document.getElementById("layout-form-type").value=t.type||"war"),document.getElementById("layout-form-rating").value=t.rating||"5",document.getElementById("layout-form-title").value=t.title||"",document.getElementById("layout-form-link").value=t.link||"",document.getElementById("layout-form-image").value=t.imageUrl||"",document.getElementById("form-title").scrollIntoView({behavior:"smooth",block:"center"}))}function ot(){ge=null,document.getElementById("form-title").innerHTML="\u2795 Tambah Base Baru",document.getElementById("submit-btn").innerHTML="Simpan Layout Base",document.getElementById("cancel-btn").classList.add("hidden"),document.getElementById("layout-form-title").value="",document.getElementById("layout-form-link").value="",document.getElementById("layout-form-image").value="",document.getElementById("layout-form-category").value="home",Fe()}async function xn(e){let t=document.getElementById("layout-form-category").value,a=parseInt(document.getElementById("layout-form-th").value),n=parseInt(document.getElementById("layout-form-rating").value),o=document.getElementById("layout-form-title").value.trim(),r=document.getElementById("layout-form-link").value.trim(),i=document.getElementById("layout-form-image").value.trim();if(!o||!r||!i){u.warning("Mohon isi seluruh kolom input.");return}if(!r.startsWith("http://")&&!r.startsWith("https://")){u.warning("Tautan Salin Base harus berupa URL valid.");return}let s={title:o,townHallLevel:a,category:t,rating:n,link:r,imageUrl:i,lastUpdatedBy:e?.displayName||"Admin"};t==="home"?(s.type=document.getElementById("layout-form-type").value,s.district=""):t==="capital"?(s.type="",s.district=document.getElementById("layout-form-district").value):(s.type="",s.district="");try{ge?(await Tt(ge,s),u.success("Layout base berhasil diperbarui!"),ot()):(await St({...s,addedBy:e?.displayName||"Admin"}),u.success("Layout base baru berhasil disimpan!"),document.getElementById("layout-form-title").value="",document.getElementById("layout-form-link").value="",document.getElementById("layout-form-image").value=""),pe=await se(),We()}catch(l){console.error(l),u.error("Gagal memproses layout.")}}async function hn(e){I.confirm({title:"Hapus Layout Base",message:"Apakah Anda yakin ingin menghapus layout base ini dari daftar?",onConfirm:async()=>{try{await Pt(e),u.success("Layout base berhasil dihapus!"),ge===e&&ot(),pe=await se(),We()}catch(t){console.error(t),u.error("Gagal menghapus layout.")}}})}var xe=[],be=null;async function la(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengelola berita klan.</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}e.innerHTML=`
         <div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto text-center py-20">
             <div class="animate-spin text-4xl mb-4">\u23F3</div>
             <p class="text-gray-400">Memuat data berita...</p>
         </div></div>
    `;try{xe=await le()}catch(t){console.error(t),u.error("Gagal memuat berita.")}be=null,fn(e)}function fn(e){let t=E();e.innerHTML=`
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
                            \u{1F4F0} Kelola Berita Supercell
                        </h1>
                        <p class="text-gray-400 text-sm">Tambah, edit, dan hapus Berita terbaru dari Supercell Resmi</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left: Add/Edit News Form -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 backdrop-blur-sm sticky top-24">
                            <h2 id="form-title" class="text-xl font-bold text-white mb-4 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                                \u2795 Tambah Berita Baru
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

                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Sumber / Label Berita</label>
                                    <input type="text" id="news-form-source" class="admin-input" placeholder="Contoh: Official Supercell, Info klan, dll.">
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
                                \u{1F4DC} Daftar Berita Saat Ini
                            </h2>
                            
                            <div id="admin-news-list" class="space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                                <!-- Rendered dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `,window.__submitNewsForm=()=>wn(),window.__deleteNews=a=>yn(a),window.__editNews=a=>vn(a),window.__cancelEditNews=da,it()}function it(){let e=document.getElementById("admin-news-list");if(e){if(xe.length===0){e.innerHTML='<p class="text-center text-gray-500 text-sm py-8">Belum ada berita Supercell yang ditambahkan.</p>';return}e.innerHTML=xe.map(t=>{let a=t.source||"Official Supercell",n=t.videoUrl?'<span class="px-2 py-0.5 rounded text-[10px] font-bold text-red-400 bg-red-500/10">\u{1F3AC} Video</span>':"",o=t.externalLink?'<span class="px-2 py-0.5 rounded text-[10px] font-bold text-blue-400 bg-blue-500/10">\u{1F517} Article</span>':"";return`
            <div class="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
                <img src="${t.imageUrl}" alt="" class="w-20 h-20 rounded-lg object-cover bg-slate-800 shrink-0"
                     onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'">
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">${t.title}</p>
                    <p class="text-gray-400 text-xs mt-1 line-clamp-2">${t.description||""}</p>
                    <div class="flex flex-wrap items-center gap-2 mt-2">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold text-gray-400 bg-white/5">${a}</span>
                        ${n}
                        ${o}
                    </div>
                </div>
                <div class="flex gap-1 shrink-0 self-center">
                    <button onclick="window.__editNews('${t.id}')" class="p-2 text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors" title="Edit Berita">
                        \u270F\uFE0F
                    </button>
                    <button onclick="window.__deleteNews('${t.id}')" class="p-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors" title="Hapus Berita">
                        \u{1F5D1}\uFE0F
                    </button>
                </div>
            </div>
        `}).join("")}}function vn(e){let t=xe.find(a=>a.id===e);t&&(be=e,document.getElementById("form-title").innerHTML="\u270F\uFE0F Edit Berita",document.getElementById("submit-btn").innerHTML="Update Berita",document.getElementById("cancel-btn").classList.remove("hidden"),document.getElementById("news-form-title").value=t.title||"",document.getElementById("news-form-desc").value=t.description||"",document.getElementById("news-form-image").value=t.imageUrl||"",document.getElementById("news-form-video").value=t.videoUrl||"",document.getElementById("news-form-link").value=t.externalLink||"",document.getElementById("news-form-source").value=t.source||"Official Supercell",document.getElementById("form-title").scrollIntoView({behavior:"smooth",block:"center"}))}function da(){be=null,document.getElementById("form-title").innerHTML="\u2795 Tambah Berita Baru",document.getElementById("submit-btn").innerHTML="Simpan Berita",document.getElementById("cancel-btn").classList.add("hidden"),document.getElementById("news-form-title").value="",document.getElementById("news-form-desc").value="",document.getElementById("news-form-image").value="",document.getElementById("news-form-video").value="",document.getElementById("news-form-link").value="",document.getElementById("news-form-source").value=""}async function wn(){let e=document.getElementById("news-form-title")?.value.trim(),t=document.getElementById("news-form-desc")?.value.trim(),a=document.getElementById("news-form-image")?.value.trim(),n=document.getElementById("news-form-video")?.value.trim(),o=document.getElementById("news-form-link")?.value.trim(),r=document.getElementById("news-form-source")?.value.trim()||"Official Supercell";if(!e||!t||!a){u.warning("Mohon lengkapi Judul, Deskripsi, dan Link Gambar.");return}let i={title:e,description:t,imageUrl:a,videoUrl:n,externalLink:o,source:r},s=document.getElementById("submit-btn");s.disabled=!0,s.innerHTML="Menyimpan...";try{be?(await Et(be,i),u.success("Berita berhasil diperbarui!")):(await Mt(i),u.success("Berita baru berhasil ditambahkan!")),xe=await le(),da(),it()}catch(l){console.error(l),u.error("Gagal menyimpan berita.")}finally{s.disabled=!1,s.innerHTML=be?"Update Berita":"Simpan Berita"}}async function yn(e){if(confirm("Apakah Anda yakin ingin menghapus berita ini?"))try{await At(e),u.success("Berita berhasil dihapus!"),xe=await le(),it()}catch(t){console.error(t),u.error("Gagal menghapus berita.")}}fe();var ca=[],rt=[],_e=1;async function ma(){let e=document.getElementById("page-content");e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <div class="h-8 bg-white/10 rounded w-64 mb-2 animate-pulse"></div>
                    <div class="h-4 bg-white/10 rounded w-96 animate-pulse"></div>
                </div>
                <!-- Skeletons for tabs -->
                <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
                    ${Array(7).fill(0).map(()=>'<div class="h-10 bg-white/5 rounded-xl w-20 animate-pulse"></div>').join("")}
                </div>
                <!-- Skeletons for cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${Array(6).fill(0).map(()=>`
                        <div class="h-24 bg-white/5 rounded-2xl border border-white/10 p-4 animate-pulse flex items-center gap-4">
                            <div class="w-12 h-12 bg-white/10 rounded-xl"></div>
                            <div class="flex-1">
                                <div class="h-4 bg-white/10 rounded w-32 mb-2"></div>
                                <div class="h-3 bg-white/10 rounded w-20"></div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `;let[t,...a]=await Promise.all([$(),...[1,2,3,4,5,6,7].map(n=>He(n))]);ca=t,rt=a,_e=1,ua(e)}function ua(e){let t=rt[_e-1]||{tags:[],updatedAt:null},a=t.tags.map(l=>ca.find(d=>d.tag===l)).filter(Boolean),n=a.length,o=0,r=0,i=0;if(n>0){let l=a.map(d=>d.townHallLevel||0).filter(Boolean);l.length>0&&(o=l.reduce((c,m)=>c+m,0)/l.length,r=Math.min(...l),i=Math.max(...l))}let s=t.updatedAt?new Date(t.updatedAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 animate-on-scroll">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            \u{1F3C6} Clan War League
                        </h1>
                        <p class="text-gray-400 text-sm">Susunan formasi dan lineup harian klan StreetLourd</p>
                    </div>
                    ${s?`
                        <div class="text-xs text-gray-500 bg-white/5 border border-white/10 rounded-xl px-3 py-2 shrink-0">
                            \u{1F504} Terakhir diperbarui: <span class="text-amber-400 font-semibold">${s}</span>
                        </div>
                    `:""}
                </div>

                <!-- Tabs selector (Day 1 - 7) -->
                <div class="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent animate-on-scroll">
                    ${[1,2,3,4,5,6,7].map(l=>{let d=_e===l,c=(rt[l-1]?.tags||[]).length;return`
                            <button onclick="window.__changeCwlDay(${l})" 
                                    class="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2
                                           ${d?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20 scale-[1.03]":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"}">
                                <span>Day ${l}</span>
                                ${c>0?`<span class="px-1.5 py-0.5 rounded-full text-[10px] ${d?"bg-black/20 text-black":"bg-white/10 text-gray-400"}">${c}</span>`:""}
                            </button>
                        `}).join("")}
                </div>

                <!-- Stats summary bar -->
                ${n>0?`
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-on-scroll">
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Total Formasi</p>
                        <p class="text-xl font-bold text-white mt-1" style="font-family: 'Lilita One', cursive;">${n} Pemain</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Rata-rata Town Hall</p>
                        <p class="text-xl font-bold text-amber-400 mt-1" style="font-family: 'Lilita One', cursive;">TH ${o.toFixed(1)}</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Town Hall Tertinggi</p>
                        <p class="text-xl font-bold text-green-400 mt-1" style="font-family: 'Lilita One', cursive;">TH ${i}</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider">Town Hall Terendah</p>
                        <p class="text-xl font-bold text-blue-400 mt-1" style="font-family: 'Lilita One', cursive;">TH ${r}</p>
                    </div>
                </div>
                `:""}

                <!-- Lineup Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 animate-on-scroll" data-stagger="true">
                    ${n>0?a.map((l,d)=>kn(l,d+1)).join(""):`
                            <div class="col-span-full text-center py-20 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
                                <span class="text-5xl block mb-4">\u2694\uFE0F</span>
                                <h3 class="text-lg font-bold text-white mb-1" style="font-family: 'Lilita One', cursive;">Lineup Belum Ditentukan</h3>
                                <p class="text-xs text-gray-500 max-w-sm mx-auto">Leader klan belum merilis formasi lineup pemain untuk Hari ${_e}. Silakan kembali lagi nanti.</p>
                            </div>
                        `}
                </div>
            </div>
        </div>
        ${h()}
    `,window.__changeCwlDay=l=>{l<1||l>7||(_e=l,ua(e))},setTimeout(()=>q(),50)}function kn(e,t){let a={leader:"from-amber-500 to-yellow-600",coLeader:"from-purple-500 to-violet-600",admin:"from-blue-500 to-cyan-600",member:"from-gray-500 to-gray-600"},n={leader:"Leader",coLeader:"Co-Leader",admin:"Elder",member:"Member"},o=dt[e.townHallLevel]||{color:"#6b7280",emoji:"\u{1F3E0}"};return`
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-amber-500/5 animate-item flex items-center gap-4 cursor-pointer"
             onclick="location.hash='#/member/${encodeURIComponent(e.tag)}'">
            
            <!-- Index Badge / Counter -->
            <div class="w-6 h-6 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center text-xs font-bold text-gray-400 transition-colors shrink-0">
                ${t}
            </div>

            <!-- TH Badge -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                 style="background: linear-gradient(135deg, ${o.color}, ${o.color}99); box-shadow: 0 0 15px ${o.color}40;">
                TH${e.townHallLevel||"?"}
            </div>

            <!-- Player Details -->
            <div class="flex-grow min-w-0">
                <div class="flex items-center gap-2 mb-1 min-w-0">
                    <h4 class="text-white font-bold truncate flex-1 min-w-0">${e.name}</h4>
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-gradient-to-r ${a[e.role]||a.member} shrink-0">
                        ${n[e.role]||"Member"}
                    </span>
                </div>
                <p class="text-[10px] text-gray-500">${e.tag}</p>
            </div>

            <!-- Trophies/Points Display -->
            <div class="text-right shrink-0">
                <div class="text-xs font-semibold text-gray-400">\u{1F3C6} ${e.trophies||0}</div>
                <div class="text-[10px] text-amber-400 font-bold mt-1" style="font-family: 'Lilita One', cursive;">
                    ${e.totalPoints||0} pts
                </div>
            </div>
        </div>
    `}var Ue=[],K=[],k=1,F=new Set;async function ga(){let e=document.getElementById("page-content");if(!P()){e.innerHTML=`
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-3xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">\u{1F512}</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Access Denied</h2>
                    <p class="text-gray-500 mb-6">Hanya Leader dan Co-Leader yang dapat mengakses halaman Kelola Lineup CWL</p>
                    <a href="#/" class="text-amber-400 hover:text-amber-300 text-sm">\u2190 Kembali ke Home</a>
                </div>
            </div>
        `;return}e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
                <div class="h-64 bg-white/5 rounded-2xl animate-pulse"></div>
            </div>
        </div>
    `;let t=E(),[a,...n]=await Promise.all([$(),...[1,2,3,4,5,6,7].map(o=>He(o))]);Ue=a,K=n,k=1,F=new Set(K[k-1]?.tags||[]),e.innerHTML=`
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-5xl mx-auto">
                <!-- Header & Back Button -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-on-scroll">
                    <div>
                        <a href="#/admin" class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-2">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                            Kembali ke Admin Panel
                        </a>
                        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">
                            \u{1F3C6} Kelola Lineup CWL
                        </h1>
                        <p class="text-gray-400 text-sm">Susun formasi lineup klan untuk setiap hari selama war liga (1-7 hari)</p>
                    </div>
                </div>

                <!-- Tabs selector (Day 1 - 7) -->
                <div class="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent animate-on-scroll">
                    ${[1,2,3,4,5,6,7].map(o=>{let r=(K[o-1]?.tags||[]).length;return`
                            <button id="admin-day-tab-${o}" onclick="window.__adminChangeCwlDay(${o})" 
                                    class="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 border border-white/5
                                           ${k===o?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20 scale-[1.03]":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}">
                                <span>Day ${o}</span>
                                <span id="admin-day-count-${o}" class="px-1.5 py-0.5 rounded-full text-[10px] ${k===o?"bg-black/20 text-black":"bg-white/10 text-gray-400"}">${r}</span>
                            </button>
                        `}).join("")}
                </div>

                <!-- Roster Builder Card -->
                <div class="grid grid-cols-1 gap-6 animate-on-scroll">
                    <div class="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6">
                        
                        <!-- Actions & Utilities Bar -->
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
                            <div>
                                <h3 class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    \u2694\uFE0F Roster Builder \u2014 Day <span id="active-day-title">${k}</span>
                                </h3>
                                <p class="text-xs text-gray-400 mt-1">Gunakan checkbox untuk memilih pemain.</p>
                            </div>
                            
                            <!-- Copy Lineup Utility -->
                            <div class="flex items-center gap-2 w-full sm:w-auto">
                                <label class="text-xs text-gray-400 font-medium shrink-0">Salin Formasi:</label>
                                <select id="copy-source-day" class="admin-select text-xs py-1.5 px-3 min-w-[120px] bg-[#1a1f2e] border-white/10">
                                    <option value="">-- Pilih Hari --</option>
                                    ${[1,2,3,4,5,6,7].map(o=>`<option value="${o}">Hari ${o}</option>`).join("")}
                                </select>
                                <button onclick="window.__copyCwlLineup()" class="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white rounded-xl text-xs font-bold transition-all shrink-0">
                                    Salin
                                </button>
                            </div>
                        </div>

                        <!-- Split Columns for Member Lists -->
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                <!-- Left Column: Roster List (Unselected / Filterable) -->
                                <div>
                                    <label class="block text-xs text-gray-400 mb-1.5 font-medium">Daftar Anggota Klan</label>
                                    <input type="text" id="admin-cwl-search" oninput="window.__filterAdminCwlMembers()" 
                                           class="admin-input text-xs py-2 px-3 mb-2 bg-[#141824]" placeholder="Cari nama anggota atau tag...">
                                    <div id="admin-cwl-members-container" class="max-h-[300px] overflow-y-auto border border-white/5 rounded-xl bg-white/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                    <div class="flex justify-between items-center mt-2">
                                        <button type="button" onclick="window.__selectCwlAll(true)" class="text-[10px] text-amber-400 hover:text-amber-300 font-medium">Pilih Semua Hasil</button>
                                        <button type="button" onclick="window.__selectCwlAll(false)" class="text-[10px] text-gray-500 hover:text-gray-400 font-medium">Kosongkan Semua</button>
                                    </div>
                                </div>

                                <!-- Right Column: Selected list & Stats -->
                                <div>
                                    <div class="flex items-center justify-between mb-1.5">
                                        <label class="block text-xs text-gray-400 font-medium">Lineup Terpilih (<span id="admin-selected-count" class="font-bold text-amber-400">0</span>)</label>
                                        <button type="button" onclick="window.__resetAdminCwlSelection()" class="text-[10px] text-red-400 hover:text-red-300 font-bold transition-colors">
                                            \u{1F504} Reset Lineup Hari Ini
                                        </button>
                                    </div>
                                    <div class="h-[34px] mb-2 hidden md:block"></div>
                                    <div id="admin-cwl-selected-container" class="max-h-[300px] min-h-[150px] overflow-y-auto border border-amber-500/20 rounded-xl bg-amber-500/[0.02] p-2 space-y-1">
                                        <!-- Rendered dynamically -->
                                    </div>
                                </div>

                            </div>

                            <!-- Save Button -->
                            <div class="pt-4 border-t border-white/10 mt-6">
                                <button onclick="window.__submitCwlLineup()" class="w-full py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20">
                                    Simpan Lineup Hari <span id="save-btn-day">${k}</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${h()}
    `,window.__adminChangeCwlDay=o=>{if(o<1||o>7)return;k=o,F=new Set(K[k-1]?.tags||[]);for(let s=1;s<=7;s++){let l=document.getElementById(`admin-day-tab-${s}`),d=document.getElementById(`admin-day-count-${s}`);l&&d&&(s===k?(l.className="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 border border-white/5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20 scale-[1.03]",d.className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/20 text-black"):(l.className="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 border border-white/5 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white",d.className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/10 text-gray-400"))}let r=document.getElementById("active-day-title");r&&(r.textContent=k);let i=document.getElementById("save-btn-day");i&&(i.textContent=k),ne()},window.__filterAdminCwlMembers=()=>{ne()},window.__toggleAdminCwlSelection=(o,r)=>{r?F.add(o):F.delete(o),ne()},window.__selectCwlAll=o=>{let r=document.getElementById("admin-cwl-search")?.value.toLowerCase()||"";Ue.forEach(i=>{(i.name.toLowerCase().includes(r)||i.tag.toLowerCase().includes(r))&&(o?F.add(i.tag):F.delete(i.tag))}),ne()},window.__resetAdminCwlSelection=()=>{F.clear(),ne()},window.__copyCwlLineup=()=>{let o=document.getElementById("copy-source-day"),r=parseInt(o?.value);if(!r||isNaN(r)){u.warning("Silakan pilih hari sumber salinan.");return}if(r===k){u.warning("Hari sumber tidak boleh sama dengan hari aktif.");return}let i=K[r-1]?.tags||[];if(i.length===0){u.warning(`Lineup Hari ${r} kosong. Tidak ada yang disalin.`);return}F=new Set(i),ne(),u.success(`Berhasil menyalin lineup dari Hari ${r}! Tinjau lineup dan klik Simpan untuk memperbarui.`)},window.__submitCwlLineup=()=>{let o=Array.from(F);if(o.length===0){I.confirm({title:"Konfirmasi Kosongkan Lineup",message:`Apakah Anda yakin ingin <strong>mengosongkan</strong> lineup Hari ${k}?`,onConfirm:async()=>{await pa(o)}});return}I.confirm({title:"Konfirmasi Simpan Lineup",message:`Simpan formasi lineup Hari ${k} dengan total <strong>${o.length} pemain</strong>?`,onConfirm:async()=>{await pa(o)}})},setTimeout(()=>{ne()},100)}function ne(){let e=document.getElementById("admin-cwl-members-container"),t=document.getElementById("admin-cwl-selected-container"),a=document.getElementById("admin-selected-count");if(!e||!t)return;let n=document.getElementById("admin-cwl-search")?.value.toLowerCase()||"",o=Ue.filter(i=>!F.has(i.tag));e.innerHTML=o.map(i=>{let l=i.name.toLowerCase().includes(n)||i.tag.toLowerCase().includes(n)?"flex":"none";return`
            <label class="point-member-row flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors" 
                   data-name="${i.name}" data-tag="${i.tag}" style="display: ${l};">
                <input type="checkbox" value="${i.tag}" onchange="window.__toggleAdminCwlSelection('${i.tag}', true)" class="w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-white font-medium truncate">${i.name}</p>
                    <p class="text-[10px] text-gray-500">${i.tag} \u2022 TH${i.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${i.totalPoints||0} pts</span>
                </div>
            </label>
        `}).join(""),o.length===0&&(e.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Semua anggota terpilih</p>');let r=Ue.filter(i=>F.has(i.tag));t.innerHTML=r.map(i=>`
            <label class="point-selected-row flex items-center gap-3 p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/15 cursor-pointer transition-colors">
                <input type="checkbox" value="${i.tag}" checked onchange="window.__toggleAdminCwlSelection('${i.tag}', false)" class="w-4 h-4 rounded border-amber-500/30 bg-amber-500/10 text-amber-500 focus:ring-amber-500/50">
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-amber-400 font-medium truncate">${i.name}</p>
                    <p class="text-[10px] text-amber-500/60">${i.tag} \u2022 TH${i.townHallLevel||"?"}</p>
                </div>
                <div class="text-right shrink-0 font-bold text-amber-400 text-xs" style="font-family: 'Lilita One', cursive;">
                    ${i.totalPoints||0} pts
                </div>
            </label>
        `).join(""),r.length===0&&(t.innerHTML='<p class="text-center text-gray-500 text-xs py-8">Belum ada yang dipilih</p>'),a&&(a.textContent=r.length)}async function pa(e){try{await Bt(k,{tags:e}),K[k-1]||(K[k-1]={}),K[k-1].tags=e,K[k-1].updatedAt=new Date().toISOString();let t=document.getElementById(`admin-day-count-${k}`);t&&(t.textContent=e.length),u.success(`Lineup Hari ${k} berhasil disimpan ke database!`)}catch(t){u.error("Gagal menyimpan lineup CWL."),console.error(t)}}fe();var Ce=[{id:"theme_war",name:"Combat Planning (War)",url:"assets/audio/theme_war.mp3"},{id:"theme_classic",name:"Classic Clash Theme",url:"assets/audio/theme_classic.mp3"}];function ba(){if(document.getElementById("music-player-container"))return;let e=localStorage.getItem("sl_music_track")||Ce[0].id,t=parseFloat(localStorage.getItem("sl_music_volume")??"0.4"),a=localStorage.getItem("sl_music_playing")!=="false",n=Ce.find(f=>f.id===e)||Ce[0],o=new Audio(n.url);o.loop=!0,o.volume=t;let r=document.createElement("div");r.id="music-player-container",r.className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 sm:gap-3 bg-[#111827]/90 border border-white/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:border-amber-500/30 group",r.innerHTML=`
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
            <span id="track-name" class="text-[10px] font-bold text-amber-400 uppercase tracking-wider truncate">${n.name}</span>
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
                    ${Ce.map(f=>`
                        <button data-track-id="${f.id}" class="w-full text-left px-2 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between text-gray-300 hover:bg-white/5 hover:text-white ${f.id===e?"text-amber-400 font-bold bg-white/5":""}">
                            <span class="truncate">${f.name}</span>
                            ${f.id===e?'<span class="text-[10px]">\u2714</span>':""}
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
    `,document.body.appendChild(r);let i=document.getElementById("music-disc"),s=document.getElementById("music-eq"),l=document.getElementById("music-play-btn"),d=document.getElementById("play-icon"),c=document.getElementById("pause-icon"),m=document.getElementById("music-volume-btn"),g=document.getElementById("volume-icon"),p=document.getElementById("mute-icon"),w=document.getElementById("music-volume-slider"),L=document.getElementById("music-track-btn"),D=document.getElementById("music-track-dropdown"),b=document.getElementById("music-tooltip"),W=document.getElementById("track-name");function C(f){a=f,localStorage.setItem("sl_music_playing",f),f?(o.play().catch(Te=>{console.log("Autoplay blocked by browser. Waiting for interaction.")}),d.classList.add("hidden"),c.classList.remove("hidden"),i.classList.add("animate-[spin_6s_linear_infinite]"),s.classList.remove("opacity-0"),s.classList.add("opacity-100")):(o.pause(),d.classList.remove("hidden"),c.classList.add("hidden"),i.classList.remove("animate-[spin_6s_linear_infinite]"),s.classList.remove("opacity-100"),s.classList.add("opacity-0"))}function S(f){t=parseFloat(f),o.volume=t,w.value=t,localStorage.setItem("sl_music_volume",t),t===0?(g.classList.add("hidden"),p.classList.remove("hidden")):(p.classList.add("hidden"),g.classList.remove("hidden"))}l.addEventListener("click",()=>{C(!a),b.classList.remove("opacity-100","translate-y-0"),b.classList.add("opacity-0","translate-y-2")}),i.addEventListener("click",()=>{C(!a),b.classList.remove("opacity-100","translate-y-0"),b.classList.add("opacity-0","translate-y-2")}),w.addEventListener("input",f=>{S(f.target.value)});let M=t||.4;m.addEventListener("click",()=>{o.volume>0?(M=o.volume,S(0)):S(M)}),L.addEventListener("click",f=>{f.stopPropagation(),D.classList.toggle("hidden")}),document.addEventListener("click",()=>{D.classList.add("hidden")}),D.querySelectorAll("button[data-track-id]").forEach(f=>{f.addEventListener("click",Te=>{Te.stopPropagation();let Pe=f.getAttribute("data-track-id"),qe=Ce.find(Ke=>Ke.id===Pe);if(qe){e=Pe,localStorage.setItem("sl_music_track",Pe);let Ke=a;o.src=qe.url,W.textContent=qe.name,D.querySelectorAll("button[data-track-id]").forEach(lt=>{lt.classList.remove("text-amber-400","font-bold","bg-white/5");let Ge=lt.querySelector("span:last-child");Ge&&Ge.textContent==="\u2714"&&Ge.remove()}),f.classList.add("text-amber-400","font-bold","bg-white/5");let ze=document.createElement("span");ze.className="text-[10px]",ze.textContent="\u2714",f.appendChild(ze),D.classList.add("hidden"),Ke&&C(!0)}})}),S(t);let X=()=>{a&&o.paused&&o.play().then(()=>{C(!0)}).catch(f=>{console.log("Autoplay check:",f)})};["click","scroll","mousemove","keydown","touchstart"].forEach(f=>{document.addEventListener(f,X,{once:!0,passive:!0})}),a&&C(!0)}if(!document.getElementById("music-eq-styles")){let e=document.createElement("style");e.id="music-eq-styles",e.textContent=`
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
    `,document.head.appendChild(e)}var xa=null,ha="",Ln={"/":{render:Bn,title:"Home"},"/dashboard":{render:_n,title:"Dashboard"},"/members":{render:Cn,title:"Members"},"/leaderboard":{render:Tn,title:"Leaderboard"},"/wars":{render:Pn,title:"War History"},"/statistics":{render:Mn,title:"Statistics"},"/layouts":{render:Rn,title:"Base Layouts"},"/rules":{render:En,title:"Clan Rules"},"/admin":{render:An,title:"Admin Panel"},"/admin/rules":{render:In,title:"Rules Settings"},"/admin/landing":{render:Dn,title:"Landing Settings"},"/admin/sidepoints":{render:Hn,title:"Manage Side Points"},"/admin/layouts":{render:jn,title:"Manage Base Layouts"},"/admin/news":{render:On,title:"Manage News"},"/cwl":{render:Nn,title:"CWL Lineup"},"/admin/cwl":{render:Fn,title:"Manage CWL Lineup"},"/login":{render:Wn,title:"Login"}};document.addEventListener("DOMContentLoaded",()=>{$n()});async function $n(){xa=new Me("particles-canvas"),xa.start(),ba(),Jt((e,t)=>{Se(),e&&st()==="/login"&&(window.location.hash="#/dashboard")}),fa(),window.addEventListener("hashchange",fa),console.log("\u2694\uFE0F StreetLourd initialized!")}function st(){return window.location.hash.slice(1)||"/"}function fa(){let e=st();if(e.startsWith("/member/")){let a=e.replace("/member/","");ha="/member/:tag",document.title="Member Detail \u2014 StreetLourd",Sn(a),Se();return}let t=Ln[e];t?(ha=e,document.title=`${t.title} \u2014 StreetLourd`,t.render()):window.location.hash="#/",Se()}function Se(){let e=document.getElementById("navbar-container");if(!e)return;let t=E(),a=Yt(),n=st(),o="#"+n;n.startsWith("/member/")&&(o="#/members"),e.innerHTML=mt(o,t,a),ut();let r=document.getElementById("logout-btn"),i=document.getElementById("mobile-logout-btn");r&&r.addEventListener("click",async()=>{await et(),window.location.hash="#/",Se()}),i&&i.addEventListener("click",async()=>{await et(),window.location.hash="#/",Se()})}async function Bn(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await Dt(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>{q(),Ye()},100)}async function _n(){let e=document.getElementById("page-content");await _(e,()=>Nt())}async function Cn(){let e=document.getElementById("page-content");await _(e,()=>Ft())}async function Sn(e){let t=document.getElementById("page-content");await _(t,()=>Wt(e))}async function Tn(){let e=document.getElementById("page-content");await _(e,()=>Ut())}async function Pn(){let e=document.getElementById("page-content");await _(e,()=>qt())}async function Mn(){let e=document.getElementById("page-content");await _(e,()=>Kt())}async function En(){let e=document.getElementById("page-content");e.style.opacity="0",e.innerHTML=await Gt(),requestAnimationFrame(()=>{e.style.transition="opacity 0.5s ease",e.style.opacity="1"}),setTimeout(()=>q(),100)}async function An(){let e=document.getElementById("page-content");await _(e,()=>Xt())}async function In(){let e=document.getElementById("page-content");await _(e,()=>ta())}async function Dn(){let e=document.getElementById("page-content");await _(e,()=>aa())}async function Hn(){let e=document.getElementById("page-content");await _(e,()=>na())}async function Rn(){let e=document.getElementById("page-content");await _(e,()=>ia())}async function jn(){let e=document.getElementById("page-content");await _(e,()=>ra())}async function On(){let e=document.getElementById("page-content");await _(e,()=>la())}async function Nn(){let e=document.getElementById("page-content");await _(e,()=>ma())}async function Fn(){let e=document.getElementById("page-content");await _(e,()=>ga())}function Wn(){let e=E(),t=document.getElementById("page-content");if(e){window.location.hash="#/dashboard";return}t.innerHTML=`
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
    `,document.getElementById("google-login-btn")?.addEventListener("click",async()=>{let a=document.getElementById("google-login-btn");a.disabled=!0,a.innerHTML='<span class="animate-spin">\u23F3</span> Logging in...',await Vt(),a.disabled=!1,a.innerHTML="Sign in with Google"})}
