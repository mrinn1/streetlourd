// ============================================================
// VictoryToClan — Member Detail Page
// ============================================================

import { skeleton } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMember, getMemberWarHistory, getPointHistory, getPromotions } from '../services/firestore.js';
import { formatNumber, formatDate, getRoleBadge, getTHBadge } from '../utils/helpers.js';

export async function renderMemberDetail(tag) {
    const container = document.getElementById('page-content');
    container.innerHTML = `<div class="pt-24 pb-8 px-4"><div class="max-w-5xl mx-auto">${skeleton.profile()}</div></div>`;

    const decodedTag = decodeURIComponent(tag);
    const [member, warHistory, pointHistory, promotions] = await Promise.all([
        getMember(decodedTag),
        getMemberWarHistory(decodedTag),
        getPointHistory(decodedTag),
        getPromotions(decodedTag),
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

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-on-scroll" data-stagger="true">
                    ${miniStat('⚔️', 'Wars Joined', member.totalWars || 0)}
                    ${miniStat('🗡️', 'Attacks Used', (member.totalWars || 0) * 2)}
                    ${miniStat('⭐', 'Total Stars', member.totalStars || 0)}
                    ${miniStat('💥', 'Avg Destruction', (member.avgDestruction || 0).toFixed(1) + '%')}
                    ${miniStat('🏆', 'Trophies', formatNumber(member.trophies))}
                    ${miniStat('🎁', 'Donations', formatNumber(member.donations))}
                    ${miniStat('📥', 'Received', formatNumber(member.donationsReceived))}
                    ${miniStat('🏰', 'Capital', formatNumber(member.clanCapitalContributions))}
                </div>

                <!-- Tabs -->
                <div class="mb-8 animate-on-scroll">
                    <div class="flex gap-2 border-b border-white/10 pb-0 mb-6" id="detail-tabs">
                        <button class="detail-tab active px-4 py-3 text-sm font-medium border-b-2 transition-all" data-tab="wars">
                            ⚔️ War History
                        </button>
                        <button class="detail-tab px-4 py-3 text-sm font-medium border-b-2 transition-all" data-tab="points">
                            💎 Point History
                        </button>
                        <button class="detail-tab px-4 py-3 text-sm font-medium border-b-2 transition-all" data-tab="promotions">
                            ⬆️ Promotions
                        </button>
                    </div>

                    <!-- Tab Content -->
                    <div id="tab-content">
                        ${renderWarHistoryTab(warHistory)}
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Tab switching
    const tabs = document.querySelectorAll('.detail-tab');
    const tabContent = document.getElementById('tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            switch (tab.dataset.tab) {
                case 'wars': tabContent.innerHTML = renderWarHistoryTab(warHistory); break;
                case 'points': tabContent.innerHTML = renderPointHistoryTab(pointHistory); break;
                case 'promotions': tabContent.innerHTML = renderPromotionsTab(promotions); break;
            }
        });
    });
}

function miniStat(icon, label, value) {
    return `
        <div class="animate-item rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-all">
            <p class="text-xs text-gray-500 mb-1">${icon} ${label}</p>
            <p class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">${value}</p>
        </div>
    `;
}

function renderWarHistoryTab(wars) {
    if (!wars.length) return `<div class="text-center py-12 text-gray-500"><p class="text-4xl mb-2">⚔️</p><p>Belum ada riwayat war</p></div>`;
    
    return `
        <div class="space-y-3">
            ${wars.map(w => {
                const stars1 = w.usedAttack1 ? '⭐'.repeat(w.attack1Stars || 0) + '☆'.repeat(3 - (w.attack1Stars || 0)) : '❌ Missed';
                const stars2 = w.usedAttack2 ? '⭐'.repeat(w.attack2Stars || 0) + '☆'.repeat(3 - (w.attack2Stars || 0)) : '❌ Missed';
                return `
                    <div class="rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-all">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-500">${formatDate(w.date)}</span>
                            <span class="text-xs px-2 py-0.5 rounded-full ${w.status === 'optIn' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}">${w.status}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p class="text-gray-500 text-xs mb-1">Attack 1</p>
                                <p class="text-white">${stars1}</p>
                                ${w.usedAttack1 ? `<p class="text-xs text-gray-500">${(w.attack1Destruction || 0).toFixed(0)}%</p>` : ''}
                            </div>
                            <div>
                                <p class="text-gray-500 text-xs mb-1">Attack 2</p>
                                <p class="text-white">${stars2}</p>
                                ${w.usedAttack2 ? `<p class="text-xs text-gray-500">${(w.attack2Destruction || 0).toFixed(0)}%</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderPointHistoryTab(points) {
    if (!points.length) return `<div class="text-center py-12 text-gray-500"><p class="text-4xl mb-2">💎</p><p>Belum ada riwayat poin</p></div>`;

    return `
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-500 text-xs uppercase border-b border-white/10">
                        <th class="pb-3 pr-4">Tanggal</th>
                        <th class="pb-3 pr-4">Alasan</th>
                        <th class="pb-3 pr-4">Admin</th>
                        <th class="pb-3 text-right">Points</th>
                    </tr>
                </thead>
                <tbody>
                    ${points.map(p => `
                        <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td class="py-3 pr-4 text-gray-400">${formatDate(p.date)}</td>
                            <td class="py-3 pr-4 text-white">${p.reason}</td>
                            <td class="py-3 pr-4 text-gray-500">${p.adminName || '-'}</td>
                            <td class="py-3 text-right font-bold ${p.amount > 0 ? 'text-green-400' : 'text-red-400'}">
                                ${p.amount > 0 ? '+' : ''}${p.amount}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderPromotionsTab(promotions) {
    if (!promotions.length) return `<div class="text-center py-12 text-gray-500"><p class="text-4xl mb-2">⬆️</p><p>Belum ada riwayat promosi</p></div>`;

    return `
        <div class="space-y-3">
            ${promotions.map(p => `
                <div class="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 flex items-center justify-center text-lg">⬆️</div>
                    <div class="flex-1">
                        <p class="text-white text-sm"><span class="text-gray-500">${p.fromRole}</span> → <span class="text-amber-400 font-medium">${p.toRole}</span></p>
                        <p class="text-xs text-gray-500">${p.reason || 'No reason provided'}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-gray-500">${formatDate(p.date)}</p>
                        <p class="text-xs text-gray-600">by ${p.adminName || '-'}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
