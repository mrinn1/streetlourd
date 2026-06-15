// ============================================================
// StreetLourd — Member Detail Page
// ============================================================

import { skeleton } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMember, getPointHistory } from '../services/firestore.js';
import { formatNumber, getRoleBadge } from '../utils/helpers.js';

export async function renderMemberDetail(tag) {
    const container = document.getElementById('page-content');
    container.innerHTML = `<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${skeleton.profile()}</div></div>`;

    const decodedTag = decodeURIComponent(tag);
    const [member, pointHistory] = await Promise.all([
        getMember(decodedTag),
        getPointHistory(decodedTag)
    ]);

    if (!member) {
        container.innerHTML = `
            <div class="pt-24 pb-8 px-4">
                <div class="max-w-5xl mx-auto text-center py-20">
                    <p class="text-6xl mb-4">🔍</p>
                    <h2 class="text-2xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">Member Not Found</h2>
                    <p class="text-gray-500 mb-6">Tag: ${decodedTag}</p>
                    <a href="#/members" class="text-amber-400 hover:text-amber-300 text-sm">← Kembali ke Members</a>
                </div>
            </div>
        `;
        return;
    }

    const thColors = {
        1:'#8B7355',2:'#CD853F',3:'#DAA520',4:'#B8860B',5:'#4169E1',6:'#FFD700',7:'#9370DB',
        8:'#DC143C',9:'#4B0082',10:'#FF4500',11:'#00CED1',12:'#1E90FF',13:'#228B22',14:'#32CD32',
        15:'#4169E1',16:'#8B008B',17:'#FFD700'
    };
    const thColor = thColors[member.townHallLevel] || '#6b7280';

    // Dynamic Promotion & Demotion Logic based on new point rules
    let promotionSectionHtml = '';
    const points = member.totalPoints || 0;

    if (member.role === 'leader') {
        promotionSectionHtml = `
            <div class="flex items-center gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div class="text-3xl">👑</div>
                <p class="text-gray-300 text-sm leading-relaxed">👑 Anggota ini adalah <strong>Leader Utama</strong> klan.</p>
            </div>
        `;
    } else if (member.role === 'coLeader') {
        const progressPercent = Math.max(0, Math.min(100, (points / 1500) * 100));
        let statusHtml = '';

        if (points < 1250) {
            statusHtml = `
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">⚠️</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${points}</strong>) di bawah batas minimal Co-Leader (1250). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Elder</strong>.</p>
                    </div>
                </div>
            `;
        } else {
            statusHtml = `
                <div class="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <span class="text-green-400 shrink-0">⚜️</span>
                    <p class="text-gray-300 text-sm leading-relaxed">✨ Anggota ini telah mencapai pangkat <strong>Co-Leader</strong> dengan poin maksimal (1500).</p>
                </div>
            `;
        }

        promotionSectionHtml = `
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Status Jabatan</p>
                        <p class="text-white font-bold text-lg">Co-Leader (Maksimal)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${points} / 1500 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${progressPercent}%">
                    </div>
                </div>
                
                <!-- Status/Rekomendasi Info -->
                ${statusHtml}
            </div>
        `;
    } else if (member.role === 'admin') { // Elder
        if (points < 1000) {
            promotionSectionHtml = `
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">⚠️</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Turun Jabatan</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${points}</strong>) di bawah batas minimal Elder (1000). Anggota ini direkomendasikan untuk diturunkan pangkatnya menjadi <strong>Member</strong>.</p>
                    </div>
                </div>
            `;
        } else {
            const threshold = 1500;
            const progressPercent = Math.max(0, Math.min(100, ((points - 1250) / 250) * 100));
            const needed = threshold - points;
            const statusText = needed <= 0 
                ? `🎉 Persyaratan poin tercapai! Poin saat ini (${points}) telah mencukupi untuk dipromosikan menjadi Co-Leader.`
                : `Dibutuhkan <strong>${needed}</strong> poin lagi untuk naik jabatan menjadi <strong>Co-Leader</strong>.`;
            
            promotionSectionHtml = `
                <div class="space-y-6">
                    <div class="flex justify-between items-end text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                            <p class="text-white font-bold text-lg">Co-Leader</p>
                        </div>
                        <div class="text-right">
                            <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                            <p class="text-amber-400 font-bold text-lg">${points} / 1500 Poin</p>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                        <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                             style="width: ${progressPercent}%">
                        </div>
                    </div>
                    
                    <!-- Status Info -->
                    <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span class="text-amber-400">💡</span>
                        <p class="text-gray-300 text-sm leading-relaxed">${statusText}</p>
                    </div>
                </div>
            `;
        }
    } else { // Regular Member
        const threshold = 1250;
        const progressPercent = Math.max(0, Math.min(100, ((points - 500) / 750) * 100));
        const needed = threshold - points;
        
        let statusHtml = '';
        if (points < 300) {
            statusHtml = `
                <div class="flex items-center gap-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div class="text-3xl shrink-0">🚨</div>
                    <div>
                        <p class="text-white font-bold text-lg mb-1" style="font-family: 'Lilita One', cursive;">Rekomendasi Kick</p>
                        <p class="text-gray-300 text-sm leading-relaxed">Poin saat ini (<strong>${points}</strong>) di bawah batas minimal Member (300). Anggota ini direkomendasikan untuk <strong>dikeluarkan (kick) dari klan</strong>.</p>
                    </div>
                </div>
            `;
        } else {
            const statusText = needed <= 0 
                ? `🎉 Persyaratan poin tercapai! Poin saat ini (${points}) telah mencukupi untuk dipromosikan menjadi Elder.`
                : `Dibutuhkan <strong>${needed}</strong> poin lagi untuk naik jabatan menjadi <strong>Elder</strong>.`;
            
            statusHtml = `
                <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span class="text-amber-400">💡</span>
                    <p class="text-gray-300 text-sm leading-relaxed">${statusText}</p>
                </div>
            `;
        }
        
        promotionSectionHtml = `
            <div class="space-y-6">
                <div class="flex justify-between items-end text-sm">
                    <div>
                        <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                        <p class="text-white font-bold text-lg">Elder (Elder/Admin)</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                        <p class="text-amber-400 font-bold text-lg">${points} / 1250 Poin</p>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                         style="width: ${progressPercent}%">
                    </div>
                </div>
                
                <!-- Status/Kick Info -->
                ${statusHtml}
            </div>
        `;
    }

    // Build Point History Log
    const pointLogHtml = buildPointLogSection(pointHistory);

    container.innerHTML = `
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
                             style="background: linear-gradient(135deg, ${thColor}, ${thColor}99); box-shadow: 0 0 25px ${thColor}40;">
                            TH${member.townHallLevel || '?'}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 class="text-2xl md:text-3xl font-bold text-white" style="font-family: 'Lilita One', cursive;">
                                    ${member.name}
                                </h1>
                                ${getRoleBadge(member.role)}
                            </div>
                            <p class="text-gray-500 text-sm mb-3">${member.tag}</p>
                            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span class="flex items-center gap-1.5">🏆 ${formatNumber(member.trophies)} trophies</span>
                                <span class="flex items-center gap-1.5">🎁 ${formatNumber(member.donations)} donated</span>
                            </div>
                        </div>
                        <div class="text-center md:text-right">
                            <p class="text-4xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                                ${formatNumber(member.totalPoints || 0)}
                            </p>
                            <p class="text-xs text-gray-500 uppercase tracking-wider">Total Points</p>
                            ${member.sidePoints ? `
                                <p class="text-xs font-bold text-blue-400 mt-1" style="font-family: 'Lilita One', cursive;">
                                    +${member.sidePoints} Side Points
                                </p>
                            ` : ''}
                        </div>
                    </div>
                </div>

                <!-- Promotion Requirements Progress Section -->
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-8 animate-on-scroll">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        ⬆️ Keterangan Naik Jabatan
                    </h2>
                    
                    ${promotionSectionHtml}
                </div>

                <!-- Point History Log Section -->
                ${pointLogHtml}

                <!-- Side Points Explanation Card -->
                <div class="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 backdrop-blur-sm p-8 mb-8 animate-on-scroll">
                    <h3 class="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        💎 Penjelasan Side Points (SP)
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-4">
                        <strong>Side Points (SP)</strong> adalah poin khusus yang mencatat kontribusi ekstra anggota setelah mencapai batas poin pangkat Co-Leader.
                    </p>
                    <ul class="space-y-3 text-xs text-gray-400">
                        <li class="flex items-start gap-2.5">
                            <span class="text-blue-400 font-bold shrink-0">📍</span>
                            <span><strong>Batas Maksimal Poin:</strong> Poin utama klan dibatasi maksimal hingga <strong>1500 poin</strong> (syarat Co-Leader).</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="text-blue-400 font-bold shrink-0">📍</span>
                            <span><strong>Akumulasi Otomatis:</strong> Setiap tambahan poin baru yang membuat total poin melebihi 1500 akan secara otomatis dialihkan menjadi <strong>Side Points</strong>.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="text-blue-400 font-bold shrink-0">📍</span>
                            <span><strong>Tujuan SP:</strong> Digunakan untuk mendokumentasikan performa, loyalitas, dan keaktifan anggota yang sudah berjabatan Co-Leader agar kontribusi mereka tetap dihargai dan terpantau oleh jajaran Leader.</span>
                        </li>
                    </ul>
                </div>

                <!-- Role & Penalty Rules Card -->
                <div class="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-500/5 backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h3 class="text-lg font-bold text-red-400 mb-3 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        ⚠️ Ketentuan & Batas Poin Jabatan
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">
                        Ketentuan batas poin untuk kenaikan jabatan, penurunan jabatan (demote), dan pengeluaran (kick) dari klan:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Co-Leader Rules -->
                        <div class="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-purple-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    ⚜️ Co-Leader
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>• Syarat Jabatan: <strong class="text-white">1500 Poin</strong></li>
                                    <li>• Batas Demote: <strong class="text-red-400">&le; 1250 Poin</strong> (Turun ke Elder)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Elder Rules -->
                        <div class="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-blue-400 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    🛡️ Elder
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>• Syarat Jabatan: <strong class="text-white">1250 Poin</strong></li>
                                    <li>• Batas Demote: <strong class="text-red-400">1000 Poin</strong> (Turun ke Member)</li>
                                    <li>• Batas Kick: <strong class="text-red-500">&lt; 1000 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Member Rules -->
                        <div class="p-4 rounded-xl border border-gray-500/20 bg-gray-500/5 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-gray-300 text-sm mb-3 flex items-center gap-1.5" style="font-family: 'Lilita One', cursive;">
                                    ⚔️ Member
                                </h4>
                                <ul class="space-y-2 text-xs text-gray-400">
                                    <li>• Syarat Poin Awal: <strong class="text-white">500 Poin</strong></li>
                                    <li>• Batas Kick: <strong class="text-red-500">&le; 250 Poin</strong> (Dikeluarkan dari klan)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;
}

function buildPointLogSection(pointHistory) {
    if (!pointHistory || pointHistory.length === 0) {
        return `
            <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                    📋 Log Poin
                </h2>
                <div class="text-center py-10">
                    <p class="text-4xl mb-3">📭</p>
                    <p class="text-gray-500 text-sm">Belum ada riwayat poin untuk anggota ini.</p>
                </div>
            </div>
        `;
    }

    const entries = pointHistory.map(entry => {
        const isPositive = entry.amount >= 0;
        let amountColor = isPositive ? 'text-green-400' : 'text-red-400';
        let bgClass = isPositive ? 'bg-green-500/5 border-green-500/10' : 'bg-red-500/5 border-red-500/10';
        let amountSuffix = ' Poin';
        let iconBg = isPositive ? 'bg-green-500/10' : 'bg-red-500/10';
        const amountPrefix = isPositive ? '+' : '';
        const iconClass = isPositive ? '▲' : '▼';
        
        if (entry.category === 'side_point') {
            amountColor = isPositive ? 'text-blue-400' : 'text-indigo-400';
            bgClass = isPositive ? 'bg-blue-500/5 border-blue-500/10' : 'bg-indigo-500/5 border-indigo-500/10';
            amountSuffix = ' SP';
            iconBg = isPositive ? 'bg-blue-500/10' : 'bg-indigo-500/10';
        }

        let dateStr = '-';
        if (entry.date) {
            const d = entry.date.toDate ? entry.date.toDate() : new Date(entry.date);
            dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + 
                      ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        }

        const categoryIcons = {
            'war': '⚔️',
            'donation': '🎁',
            'clan_games': '🎮',
            'cwl': '🏅',
            'penalty': '⛔',
            'bonus': '🌟',
            'side_point': '💎',
            'other': '📌'
        };
        const catIcon = categoryIcons[entry.category] || '📌';

        return `
            <div class="flex items-center gap-4 p-4 rounded-xl border ${bgClass} transition-all duration-200 hover:bg-white/5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${iconBg}">
                    ${catIcon}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-white text-sm font-medium truncate">${entry.reason || 'Tidak ada keterangan'}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <p class="text-gray-500 text-xs">${dateStr}</p>
                        ${entry.adminName ? `<span class="text-gray-600 text-xs">• oleh ${entry.adminName}</span>` : ''}
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <p class="${amountColor} font-bold text-lg" style="font-family: 'Lilita One', cursive;">
                        <span class="text-xs">${iconClass}</span> ${amountPrefix}${entry.amount}${amountSuffix}
                    </p>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-white flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                    📋 Log Poin
                </h2>
                <span class="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">${pointHistory.length} entri</span>
            </div>
            <div class="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar" style="max-height: 500px; overflow-y: auto;">
                ${entries}
            </div>
        </div>
    `;
}

