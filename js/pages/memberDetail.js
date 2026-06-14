// ============================================================
// StreetLourd — Member Detail Page
// ============================================================

import { skeleton } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMember } from '../services/firestore.js';
import { formatNumber, getRoleBadge } from '../utils/helpers.js';

export async function renderMemberDetail(tag) {
    const container = document.getElementById('page-content');
    container.innerHTML = `<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${skeleton.profile()}</div></div>`;

    const decodedTag = decodeURIComponent(tag);
    const member = await getMember(decodedTag);

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

    // Promotion thresholds & logic
    let nextRoleLabel = '';
    let threshold = 0;
    let progressPercent = 0;
    let statusText = '';
    let isMaxRole = false;

    const points = member.totalPoints || 0;

    if (member.role === 'member') {
        nextRoleLabel = 'Elder (Elder/Admin)';
        threshold = 100;
        progressPercent = Math.min(100, (points / threshold) * 100);
        if (points >= threshold) {
            statusText = `🎉 Persyaratan poin tercapai! Poin saat ini (${points}) telah mencukupi untuk dipromosikan menjadi ${nextRoleLabel}.`;
        } else {
            statusText = `Dibutuhkan <strong>${threshold - points}</strong> poin lagi untuk naik jabatan menjadi <strong>${nextRoleLabel}</strong>.`;
        }
    } else if (member.role === 'admin') {
        nextRoleLabel = 'Co-Leader';
        threshold = 300;
        progressPercent = Math.min(100, (points / threshold) * 100);
        if (points >= threshold) {
            statusText = `🎉 Persyaratan poin tercapai! Poin saat ini (${points}) telah mencukupi untuk dipromosikan menjadi ${nextRoleLabel}.`;
        } else {
            statusText = `Dibutuhkan <strong>${threshold - points}</strong> poin lagi untuk naik jabatan menjadi <strong>${nextRoleLabel}</strong>.`;
        }
    } else if (member.role === 'coLeader') {
        isMaxRole = true;
        statusText = '✨ Anggota ini telah mencapai pangkat <strong>Co-Leader</strong> (Jabatan kehormatan tertinggi sebelum Leader).';
    } else if (member.role === 'leader') {
        isMaxRole = true;
        statusText = '👑 Anggota ini adalah <strong>Leader Utama</strong> klan.';
    }

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
                                <span class="flex items-center gap-1.5">🏰 ${formatNumber(member.clanCapitalContributions)} capital</span>
                            </div>
                        </div>
                        <div class="text-center md:text-right">
                            <p class="text-4xl font-bold text-amber-400" style="font-family: 'Lilita One', cursive;">
                                ${formatNumber(member.totalPoints || 0)}
                            </p>
                            <p class="text-xs text-gray-500 uppercase tracking-wider">Total Points</p>
                        </div>
                    </div>
                </div>

                <!-- Promotion Requirements Progress Section -->
                <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 mb-12 animate-on-scroll">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2" style="font-family: 'Lilita One', cursive;">
                        ⬆️ Keterangan Naik Jabatan
                    </h2>
                    
                    ${isMaxRole ? `
                        <div class="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                            <div class="text-3xl">${member.role === 'leader' ? '👑' : '⚜️'}</div>
                            <p class="text-gray-300 text-sm leading-relaxed">${statusText}</p>
                        </div>
                    ` : `
                        <div class="space-y-6">
                            <div class="flex justify-between items-end text-sm">
                                <div>
                                    <p class="text-gray-500 text-xs mb-1">Target Jabatan Berikutnya</p>
                                    <p class="text-white font-bold text-lg">${nextRoleLabel}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-gray-500 text-xs mb-1">Kemajuan Poin</p>
                                    <p class="text-amber-400 font-bold text-lg">${points} / ${threshold} Poin</p>
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
                    `}
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;
}

