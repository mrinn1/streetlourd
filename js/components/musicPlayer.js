// ============================================================
// StreetLourd — Floating Background Music Player
// ============================================================

const TRACKS = [
    {
        id: 'theme_war',
        name: 'Combat Planning (War)',
        url: 'assets/audio/theme_war.mp3'
    },
    {
        id: 'theme_classic',
        name: 'Classic Clash Theme',
        url: 'assets/audio/theme_classic.mp3'
    }
];

export function initMusicPlayer() {
    // Check if player already exists
    if (document.getElementById('music-player-container')) return;

    // Load saved preferences
    let currentTrackId = localStorage.getItem('sl_music_track') || TRACKS[0].id;
    let volume = parseFloat(localStorage.getItem('sl_music_volume') ?? '0.4');
    
    // Default to true (auto-play) unless user explicitly muted/paused it
    let isPlaying = localStorage.getItem('sl_music_playing') !== 'false'; 

    // Find active track
    let activeTrack = TRACKS.find(t => t.id === currentTrackId) || TRACKS[0];

    // Create Audio instance
    const audio = new Audio(activeTrack.url);
    audio.loop = true;
    audio.volume = volume;

    // Create UI container
    const container = document.createElement('div');
    container.id = 'music-player-container';
    container.className = 'fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 sm:gap-3 bg-[#111827]/90 border border-white/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:border-amber-500/30 group';
    
    container.innerHTML = `
        <!-- Spinning Disc/Visualizer -->
        <div id="music-disc" class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg relative cursor-pointer transition-transform duration-300 hover:scale-110">
            <span class="text-xs sm:text-sm">🎵</span>
            <!-- Bouncing equalizer bars (visible only when playing) -->
            <div id="music-eq" class="absolute inset-0 flex items-end justify-center gap-[2px] p-2 bg-black/40 rounded-full opacity-0 transition-opacity duration-300">
                <span class="w-[2px] sm:w-[3px] bg-amber-400 rounded-t eq-bar eq-bar-1" style="height: 40%"></span>
                <span class="w-[2px] sm:w-[3px] bg-amber-400 rounded-t eq-bar eq-bar-2" style="height: 70%"></span>
                <span class="w-[2px] sm:w-[3px] bg-amber-400 rounded-t eq-bar eq-bar-3" style="height: 50%"></span>
            </div>
        </div>

        <!-- Info & Controls (Hidden on mobile) -->
        <div class="hidden sm:flex flex-col min-w-[80px] sm:min-w-[120px] max-w-[160px]">
            <span id="track-name" class="text-[10px] font-bold text-amber-400 uppercase tracking-wider truncate">${activeTrack.name}</span>
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
                <input id="music-volume-slider" type="range" min="0" max="1" step="0.05" value="${volume}" 
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
                    ${TRACKS.map(t => `
                        <button data-track-id="${t.id}" class="w-full text-left px-2 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between text-gray-300 hover:bg-white/5 hover:text-white ${t.id === currentTrackId ? 'text-amber-400 font-bold bg-white/5' : ''}">
                            <span class="truncate">${t.name}</span>
                            ${t.id === currentTrackId ? '<span class="text-[10px]">✔</span>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <!-- Welcome Tooltip (Autoplay Helper) -->
        <div id="music-tooltip" class="absolute -top-12 left-0 right-0 mx-auto w-max px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-[11px] font-bold shadow-lg pointer-events-none opacity-0 translate-y-2 transition-all duration-500">
            🔊 Musik Latar Siap Bermain!
            <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-yellow-600"></div>
        </div>
    `;

    document.body.appendChild(container);

    // References to DOM elements
    const disc = document.getElementById('music-disc');
    const eq = document.getElementById('music-eq');
    const playBtn = document.getElementById('music-play-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const volumeBtn = document.getElementById('music-volume-btn');
    const volumeIcon = document.getElementById('volume-icon');
    const muteIcon = document.getElementById('mute-icon');
    const volumeSlider = document.getElementById('music-volume-slider');
    const trackBtn = document.getElementById('music-track-btn');
    const trackDropdown = document.getElementById('music-track-dropdown');
    const tooltip = document.getElementById('music-tooltip');
    const trackNameLabel = document.getElementById('track-name');

    // Functions to update UI states
    function updatePlayState(playing) {
        isPlaying = playing;
        localStorage.setItem('sl_music_playing', playing);
        if (playing) {
            audio.play().catch(err => {
                console.log("Autoplay blocked by browser. Waiting for interaction.");
            });
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            disc.classList.add('animate-[spin_6s_linear_infinite]');
            eq.classList.remove('opacity-0');
            eq.classList.add('opacity-100');
        } else {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            disc.classList.remove('animate-[spin_6s_linear_infinite]');
            eq.classList.remove('opacity-100');
            eq.classList.add('opacity-0');
        }
    }

    function updateVolume(val) {
        volume = parseFloat(val);
        audio.volume = volume;
        volumeSlider.value = volume;
        localStorage.setItem('sl_music_volume', volume);

        if (volume === 0) {
            volumeIcon.classList.add('hidden');
            muteIcon.classList.remove('hidden');
        } else {
            muteIcon.classList.add('hidden');
            volumeIcon.classList.remove('hidden');
        }
    }

    // Toggle Play/Pause
    playBtn.addEventListener('click', () => {
        updatePlayState(!isPlaying);
        tooltip.classList.remove('opacity-100', 'translate-y-0');
        tooltip.classList.add('opacity-0', 'translate-y-2');
    });

    disc.addEventListener('click', () => {
        updatePlayState(!isPlaying);
        tooltip.classList.remove('opacity-100', 'translate-y-0');
        tooltip.classList.add('opacity-0', 'translate-y-2');
    });

    // Volume input events
    volumeSlider.addEventListener('input', (e) => {
        updateVolume(e.target.value);
    });

    // Mute toggle
    let previousVolume = volume || 0.4;
    volumeBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
            previousVolume = audio.volume;
            updateVolume(0);
        } else {
            updateVolume(previousVolume);
        }
    });

    // Track selection dropdown toggle
    trackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        trackDropdown.classList.toggle('hidden');
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        trackDropdown.classList.add('hidden');
    });

    // Track switching click handler
    trackDropdown.querySelectorAll('button[data-track-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = btn.getAttribute('data-track-id');
            const track = TRACKS.find(t => t.id === trackId);
            if (track) {
                // Save and switch url
                currentTrackId = trackId;
                localStorage.setItem('sl_music_track', trackId);
                
                const wasPlaying = isPlaying;
                audio.src = track.url;
                trackNameLabel.textContent = track.name;
                
                // Update active class in dropdown UI
                trackDropdown.querySelectorAll('button[data-track-id]').forEach(b => {
                    b.classList.remove('text-amber-400', 'font-bold', 'bg-white/5');
                    const checkMark = b.querySelector('span:last-child');
                    if (checkMark && checkMark.textContent === '✔') checkMark.remove();
                });
                
                btn.classList.add('text-amber-400', 'font-bold', 'bg-white/5');
                const check = document.createElement('span');
                check.className = 'text-[10px]';
                check.textContent = '✔';
                btn.appendChild(check);

                trackDropdown.classList.add('hidden');

                // Play if it was playing before
                if (wasPlaying) {
                    updatePlayState(true);
                }
            }
        });
    });

    // Setup initial volume
    updateVolume(volume);

    // Bypassing browser autoplay policy on first user interaction
    const triggerAutoplay = () => {
        if (isPlaying && audio.paused) {
            audio.play().then(() => {
                updatePlayState(true);
            }).catch(e => {
                console.log("Autoplay check:", e);
            });
        }
    };

    // Listen to user interaction to start playing
    ['click', 'scroll', 'mousemove', 'keydown', 'touchstart'].forEach(event => {
        document.addEventListener(event, triggerAutoplay, { once: true, passive: true });
    });

    // Try to play immediately
    if (isPlaying) {
        updatePlayState(true);
    }
}

// Add bouncing equalizer styles to document head
if (!document.getElementById('music-eq-styles')) {
    const style = document.createElement('style');
    style.id = 'music-eq-styles';
    style.textContent = `
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
    `;
    document.head.appendChild(style);
}
