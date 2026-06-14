// ============================================================
// VictoryToClan — Statistics Page
// ============================================================

import { skeleton } from '../components/skeleton.js';
import { renderFooter } from '../components/footer.js';
import { getMembers, getWars } from '../services/firestore.js';
import { CHART_COLORS } from '../utils/constants.js';

let charts = [];

export async function renderStatistics() {
    // Destroy previous charts
    charts.forEach(c => { try { c.destroy(); } catch(e) {} });
    charts = [];

    const container = document.getElementById('page-content');
    container.innerHTML = `
        <div class="pt-24 pb-8 px-4"><div class="max-w-7xl mx-auto">
            <div class="mb-8"><div class="h-8 bg-white/10 rounded w-48 mb-2 animate-pulse"></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${skeleton.repeat('chart', 4)}</div>
        </div></div>
    `;

    const [members, wars] = await Promise.all([getMembers(), getWars()]);

    container.innerHTML = `
        <div class="pt-24 pb-8 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="mb-10 animate-on-scroll">
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2" style="font-family: 'Lilita One', cursive;">📊 Statistics</h1>
                    <p class="text-gray-400">Analisis performa clan secara visual</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Donations Chart -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">🎁 Top Donators</h3>
                        <div class="h-64"><canvas id="chart-donations"></canvas></div>
                    </div>

                    <!-- War Results -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">⚔️ War Results</h3>
                        <div class="h-64"><canvas id="chart-wars"></canvas></div>
                    </div>

                    <!-- Points Distribution -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">💎 Points Distribution</h3>
                        <div class="h-64"><canvas id="chart-points"></canvas></div>
                    </div>

                    <!-- Clan Capital -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">🏰 Clan Capital Contributions</h3>
                        <div class="h-64"><canvas id="chart-capital"></canvas></div>
                    </div>

                    <!-- TH Distribution -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">🏠 Town Hall Distribution</h3>
                        <div class="h-64"><canvas id="chart-th"></canvas></div>
                    </div>

                    <!-- Member Activity -->
                    <div class="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 animate-on-scroll">
                        <h3 class="text-lg font-bold text-white mb-4" style="font-family: 'Lilita One', cursive;">🔥 Member Activity (Wars)</h3>
                        <div class="h-64"><canvas id="chart-activity"></canvas></div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
    `;

    // Wait for Chart.js to be available
    await waitForChartJs();

    // Create charts
    createDonationsChart(members);
    createWarsChart(wars);
    createPointsChart(members);
    createCapitalChart(members);
    createTHChart(members);
    createActivityChart(members);
}

function waitForChartJs() {
    return new Promise(resolve => {
        if (window.Chart) { resolve(); return; }
        const check = setInterval(() => {
            if (window.Chart) { clearInterval(check); resolve(); }
        }, 100);
        setTimeout(() => { clearInterval(check); resolve(); }, 5000);
    });
}

function createDonationsChart(members) {
    const canvas = document.getElementById('chart-donations');
    if (!canvas || !window.Chart) return;
    const top10 = [...members].sort((a, b) => (b.donations || 0) - (a.donations || 0)).slice(0, 10);
    const chart = new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: top10.map(m => m.name.substring(0, 10)),
            datasets: [{ label: 'Donations', data: top10.map(m => m.donations || 0),
                backgroundColor: CHART_COLORS.purpleAlpha, borderColor: CHART_COLORS.purple, borderWidth: 1, borderRadius: 8 }]
        },
        options: chartOptions()
    });
    charts.push(chart);
}

function createWarsChart(wars) {
    const canvas = document.getElementById('chart-wars');
    if (!canvas || !window.Chart) return;
    const wins = wars.filter(w => w.result === 'win').length;
    const losses = wars.filter(w => w.result === 'loss').length;
    const draws = wars.filter(w => w.result === 'draw').length;
    const chart = new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Victories', 'Defeats', 'Draws'],
            datasets: [{ data: [wins, losses, draws],
                backgroundColor: [CHART_COLORS.green, CHART_COLORS.red, CHART_COLORS.gold],
                borderColor: '#0a0e17', borderWidth: 3, hoverOffset: 8 }]
        },
        options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
            plugins: { legend: { labels: { color: '#94a3b8', font: { size: 12 }, padding: 16, usePointStyle: true } },
                tooltip: { backgroundColor: 'rgba(15,23,42,0.9)', titleColor: '#f1f5f9', bodyColor: '#cbd5e1', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, cornerRadius: 12, padding: 12 } },
            animation: { animateRotate: true, animateScale: true, duration: 1200 }
        }
    });
    charts.push(chart);
}

function createPointsChart(members) {
    const canvas = document.getElementById('chart-points');
    if (!canvas || !window.Chart) return;
    const top10 = [...members].sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0)).slice(0, 10);
    const chart = new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: top10.map(m => m.name.substring(0, 10)),
            datasets: [{ label: 'Points', data: top10.map(m => m.totalPoints || 0),
                backgroundColor: CHART_COLORS.goldAlpha, borderColor: CHART_COLORS.gold, borderWidth: 1, borderRadius: 8 }]
        },
        options: { ...chartOptions(), indexAxis: 'y' }
    });
    charts.push(chart);
}

function createCapitalChart(members) {
    const canvas = document.getElementById('chart-capital');
    if (!canvas || !window.Chart) return;
    const top10 = [...members].sort((a, b) => (b.clanCapitalContributions || 0) - (a.clanCapitalContributions || 0)).slice(0, 10);
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(6,182,212,0.4)');
    gradient.addColorStop(1, 'rgba(6,182,212,0)');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: top10.map(m => m.name.substring(0, 10)),
            datasets: [{ label: 'Capital', data: top10.map(m => m.clanCapitalContributions || 0),
                backgroundColor: gradient, borderColor: CHART_COLORS.cyan, borderWidth: 2, fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: CHART_COLORS.cyan }]
        },
        options: chartOptions()
    });
    charts.push(chart);
}

function createTHChart(members) {
    const canvas = document.getElementById('chart-th');
    if (!canvas || !window.Chart) return;
    const thCounts = {};
    members.forEach(m => { const th = m.townHallLevel || 0; thCounts[th] = (thCounts[th] || 0) + 1; });
    const labels = Object.keys(thCounts).sort((a, b) => a - b).map(th => `TH${th}`);
    const data = Object.keys(thCounts).sort((a, b) => a - b).map(th => thCounts[th]);
    const colors = data.map((_, i) => `hsl(${(i * 30) + 200}, 70%, 55%)`);
    const chart = new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: { labels, datasets: [{ data, backgroundColor: colors, borderColor: '#0a0e17', borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '55%',
            plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 }, padding: 12, usePointStyle: true } },
                tooltip: { backgroundColor: 'rgba(15,23,42,0.9)', titleColor: '#f1f5f9', bodyColor: '#cbd5e1', cornerRadius: 12, padding: 12 } } }
    });
    charts.push(chart);
}

function createActivityChart(members) {
    const canvas = document.getElementById('chart-activity');
    if (!canvas || !window.Chart) return;
    const top10 = [...members].sort((a, b) => (b.totalWars || 0) - (a.totalWars || 0)).slice(0, 10);
    const chart = new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: top10.map(m => m.name.substring(0, 10)),
            datasets: [{ label: 'Wars Participated', data: top10.map(m => m.totalWars || 0),
                backgroundColor: CHART_COLORS.blueAlpha, borderColor: CHART_COLORS.blue, borderWidth: 1, borderRadius: 8 }]
        },
        options: chartOptions()
    });
    charts.push(chart);
}

function chartOptions() {
    return {
        responsive: true, maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: 'rgba(15,23,42,0.9)', titleColor: '#f1f5f9', bodyColor: '#cbd5e1', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, cornerRadius: 12, padding: 12 }
        },
        scales: {
            x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' }, border: { color: 'rgba(255,255,255,0.1)' } },
            y: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' }, border: { color: 'rgba(255,255,255,0.1)' } }
        },
        animation: { duration: 1000, easing: 'easeOutQuart' }
    };
}
