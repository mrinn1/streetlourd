// ============================================================
// StreetLourd — Reusable Card Components
// ============================================================

/**
 * Stat card for dashboard
 */
export function statCard({ icon, label, value, color = 'blue', subtitle = '', glow = false }) {
    const gradients = {
        gold: 'from-amber-500/20 to-yellow-600/10 border-amber-500/30',
        purple: 'from-purple-500/20 to-violet-600/10 border-purple-500/30',
        blue: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30',
        green: 'from-green-500/20 to-emerald-600/10 border-green-500/30',
        red: 'from-red-500/20 to-rose-600/10 border-red-500/30',
        cyan: 'from-cyan-500/20 to-teal-600/10 border-cyan-500/30',
    };

    const glowColors = {
        gold: 'shadow-amber-500/20',
        purple: 'shadow-purple-500/20',
        blue: 'shadow-blue-500/20',
        green: 'shadow-green-500/20',
        red: 'shadow-red-500/20',
        cyan: 'shadow-cyan-500/20',
    };

    const iconBgs = {
        gold: 'from-amber-500 to-yellow-600',
        purple: 'from-purple-500 to-violet-600',
        blue: 'from-blue-500 to-cyan-600',
        green: 'from-green-500 to-emerald-600',
        red: 'from-red-500 to-rose-600',
        cyan: 'from-cyan-500 to-teal-600',
    };

    return `
        <div class="group relative rounded-2xl border bg-gradient-to-br ${gradients[color]} 
                    p-6 transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 
                    ${glow ? `shadow-lg ${glowColors[color]}` : ''} 
                    hover:shadow-xl ${glowColors[color]} animate-item cursor-default">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${iconBgs[color]} flex items-center justify-center text-2xl shadow-lg shrink-0">
                    ${icon}
                </div>
                <div class="min-w-0">
                    <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">${label}</p>
                    <p class="text-2xl font-bold text-white mt-0.5" style="font-family: 'Lilita One', cursive;" data-counter="${value}">${value}</p>
                    ${subtitle ? `<p class="text-xs text-gray-500 mt-1">${subtitle}</p>` : ''}
                </div>
            </div>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
    `;
}

/**
 * Member card (horizontal, Supercell Store product style)
 */
export function memberCard({ name, tag, role, townHallLevel, trophies, donations, clanCapital, totalPoints, sidePoints, onClick }) {
    const roleColors = {
        leader: 'from-amber-500 to-yellow-600',
        coLeader: 'from-purple-500 to-violet-600',
        admin: 'from-blue-500 to-cyan-600',
        member: 'from-gray-500 to-gray-600',
    };
    const roleLabels = { leader: 'Leader', coLeader: 'Co-Leader', admin: 'Elder', member: 'Member' };
    const thColors = {
        1: '#8B7355', 2: '#CD853F', 3: '#DAA520', 4: '#B8860B', 5: '#4169E1', 6: '#FFD700', 7: '#9370DB',
        8: '#DC143C', 9: '#4B0082', 10: '#FF4500', 11: '#00CED1', 12: '#1E90FF', 13: '#228B22', 14: '#32CD32',
        15: '#4169E1', 16: '#8B008B', 17: '#FFD700'
    };
    const thColor = thColors[townHallLevel] || '#6b7280';

    return `
        <div class="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                    p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 
                    hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer animate-item"
             onclick="${onClick || ''}">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                     style="background: linear-gradient(135deg, ${thColor}, ${thColor}99); box-shadow: 0 0 15px ${thColor}40;">
                    TH${townHallLevel || '?'}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1 min-w-0">
                        <h3 class="text-white font-bold truncate flex-1 min-w-0">${name}</h3>
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${roleColors[role] || roleColors.member} shrink-0">
                            ${roleLabels[role] || 'Member'}
                        </span>
                    </div>
                    <p class="text-xs text-gray-500 mb-2">${tag}</p>
                    <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span class="flex items-center gap-1 shrink-0">🏆 ${(trophies || 0).toLocaleString()}</span>
                        <span class="flex items-center gap-1 shrink-0">🎁 ${(donations || 0).toLocaleString()}</span>
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <div class="text-lg font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                        ${role === 'leader' ? '👑' : (totalPoints || 0)}
                    </div>
                    <div class="text-[10px] text-gray-500 uppercase">${role === 'leader' ? 'Leader' : 'Points'}</div>
                    ${(sidePoints && role !== 'leader') ? `
                        <div class="text-[10px] text-blue-400 font-bold" style="font-family: 'Lilita One', cursive;">
                            +${sidePoints} SP
                        </div>
                    ` : ''}
                </div>
                <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `;
}

/**
 * War card for war history
 */
export function warCard({ date, opponent, warSize, result, clanStars, opponentStars, clanDestruction, opponentDestruction, noAttackMembers, onClick }) {
    const resultStyles = {
        win: { label: 'VICTORY', bg: 'from-green-500/20 to-emerald-600/10', border: 'border-green-500/30', badge: 'from-green-500 to-emerald-600' },
        loss: { label: 'DEFEAT', bg: 'from-red-500/20 to-rose-600/10', border: 'border-red-500/30', badge: 'from-red-500 to-rose-600' },
        draw: { label: 'DRAW', bg: 'from-gray-500/20 to-gray-600/10', border: 'border-gray-500/30', badge: 'from-gray-500 to-gray-600' },
    };
    const r = resultStyles[result] || resultStyles.draw;

    return `
        <div class="group relative rounded-2xl border ${r.border} bg-gradient-to-br ${r.bg} backdrop-blur-sm 
                    p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-item"
             onclick="${onClick || ''}">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-xs text-gray-400">${date || ''}</p>
                    <p class="text-xs text-gray-500">War Size: ${warSize || '?'}v${warSize || '?'}</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${r.badge}">
                    ${r.label}
                </span>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white" style="font-family: 'Lilita One', cursive;">⭐ ${clanStars || 0}</p>
                    <p class="text-xs text-gray-400 mt-1">Our Clan</p>
                    <p class="text-xs text-gray-500">${(clanDestruction || 0).toFixed(1)}%</p>
                </div>
                <div class="text-gray-500 font-bold text-lg">VS</div>
                <div class="flex-1 text-center">
                    <p class="text-2xl font-bold text-white/60" style="font-family: 'Lilita One', cursive;">⭐ ${opponentStars || 0}</p>
                    <p class="text-xs text-gray-400 mt-1 truncate">${opponent || 'Unknown'}</p>
                    <p class="text-xs text-gray-500">${(opponentDestruction || 0).toFixed(1)}%</p>
                </div>
            </div>
            ${(noAttackMembers && noAttackMembers.length > 0) ? `
                <div class="mt-4 pt-3 border-t border-white/10 text-xs text-red-400">
                    ⚠️ <strong>No Attack:</strong> ${noAttackMembers.map(m => m.name).join(', ')}
                </div>
            ` : ''}
        </div>
    `;
}

/**
 * Rank card for leaderboard (top 3 special styling)
 */
export function rankCard({ rank, name, tag, townHallLevel, totalPoints, sidePoints, totalWars, totalStars, donations }) {
    const isTop3 = rank <= 3;
    const rankStyles = {
        1: { medal: '🥇', border: 'border-amber-400/50', bg: 'from-amber-500/20 to-yellow-600/10', glow: 'shadow-amber-500/30', textColor: 'text-amber-400' },
        2: { medal: '🥈', border: 'border-gray-300/50', bg: 'from-gray-300/20 to-gray-400/10', glow: 'shadow-gray-300/20', textColor: 'text-gray-300' },
        3: { medal: '🥉', border: 'border-orange-500/50', bg: 'from-orange-500/20 to-amber-600/10', glow: 'shadow-orange-500/20', textColor: 'text-orange-400' },
    };
    const style = rankStyles[rank] || { medal: '', border: 'border-white/10', bg: 'bg-white/5', glow: '', textColor: 'text-white' };

    if (isTop3) {
        return `
            <div class="relative rounded-2xl border ${style.border} bg-gradient-to-br ${style.bg} backdrop-blur-sm 
                        p-6 transition-all duration-300 hover:scale-[1.03] shadow-lg ${style.glow} 
                        ${rank === 1 ? 'gold-shimmer' : ''} animate-item">
                <div class="flex items-center gap-4">
                    <div class="text-4xl">${style.medal}</div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold ${style.textColor} truncate" style="font-family: 'Lilita One', cursive;">${name}</h3>
                        <p class="text-xs text-gray-500">${tag} · TH${townHallLevel || '?'}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold ${style.textColor}" style="font-family: 'Lilita One', cursive;">${(totalPoints || 0).toLocaleString()}</p>
                        <p class="text-[10px] text-gray-500 uppercase">Points</p>
                        ${sidePoints ? `
                            <p class="text-xs font-bold text-blue-400" style="font-family: 'Lilita One', cursive;">+${sidePoints} SP</p>
                        ` : ''}
                    </div>
                </div>
                <div class="flex gap-4 mt-4 text-xs text-gray-400 border-t border-white/10 pt-3">
                    <span>🎁 ${(donations || 0).toLocaleString()} Donated</span>
                </div>
            </div>
        `;
    }

    return `
        <div class="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 
                    hover:bg-white/10 transition-all duration-200 animate-item">
            <div class="w-8 text-center font-bold text-gray-500 text-sm">#${rank}</div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                    <span class="text-white font-medium truncate">${name}</span>
                    <span class="text-[10px] text-gray-500">TH${townHallLevel || '?'}</span>
                </div>
            </div>
            <div class="flex gap-4 text-xs text-gray-500 shrink-0">
                <span>🎁 ${(donations || 0).toLocaleString()}</span>
            </div>
            <div class="text-right shrink-0">
                <span class="text-amber-400 font-bold" style="font-family: 'Lilita One', cursive;">${(totalPoints || 0).toLocaleString()}</span>
                ${sidePoints ? `
                    <span class="text-[10px] text-blue-400 font-bold block" style="font-family: 'Lilita One', cursive;">+${sidePoints} SP</span>
                ` : ''}
            </div>
        </div>
    `;
}
