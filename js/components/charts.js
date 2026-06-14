// ============================================================
// StreetLourd — Chart.js Wrapper Components
// ============================================================

import { CHART_COLORS } from '../utils/constants.js';

/**
 * Default chart options for dark theme
 */
const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#94a3b8',
                font: { family: 'Inter, sans-serif', size: 12 },
                padding: 16,
                usePointStyle: true,
                pointStyleWidth: 8,
            },
        },
        tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#f1f5f9',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            cornerRadius: 12,
            padding: 12,
            titleFont: { family: 'Inter, sans-serif', size: 13, weight: 'bold' },
            bodyFont: { family: 'Inter, sans-serif', size: 12 },
            displayColors: true,
            boxPadding: 4,
        },
    },
    scales: {
        x: {
            ticks: { color: '#64748b', font: { size: 11 } },
            grid: { color: 'rgba(255,255,255,0.05)' },
            border: { color: 'rgba(255,255,255,0.1)' },
        },
        y: {
            ticks: { color: '#64748b', font: { size: 11 } },
            grid: { color: 'rgba(255,255,255,0.05)' },
            border: { color: 'rgba(255,255,255,0.1)' },
        },
    },
    animation: {
        duration: 1000,
        easing: 'easeOutQuart',
    },
};

/**
 * Create a line chart
 */
export function createLineChart(canvasId, { labels, datasets, title }) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');

    // Create gradient fills
    datasets.forEach(ds => {
        if (ds.createGradient) {
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, ds.backgroundColor || 'rgba(59,130,246,0.3)');
            gradient.addColorStop(1, 'rgba(59,130,246,0)');
            ds.backgroundColor = gradient;
        }
    });

    return new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            ...defaultOptions,
            plugins: {
                ...defaultOptions.plugins,
                title: title ? { display: true, text: title, color: '#f1f5f9', font: { size: 16, family: "'Lilita One', cursive" } } : { display: false },
            },
        },
    });
}

/**
 * Create a bar chart
 */
export function createBarChart(canvasId, { labels, datasets, title, horizontal = false }) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    return new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: { labels, datasets },
        options: {
            ...defaultOptions,
            indexAxis: horizontal ? 'y' : 'x',
            plugins: {
                ...defaultOptions.plugins,
                title: title ? { display: true, text: title, color: '#f1f5f9', font: { size: 16, family: "'Lilita One', cursive" } } : { display: false },
            },
            scales: {
                ...defaultOptions.scales,
                x: { ...defaultOptions.scales.x, ...(horizontal ? {} : { beginAtZero: true }) },
                y: { ...defaultOptions.scales.y, ...(horizontal ? { beginAtZero: true } : {}) },
            },
        },
    });
}

/**
 * Create a doughnut chart
 */
export function createDoughnutChart(canvasId, { labels, data, colors, title }) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    return new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data,
                backgroundColor: colors || [CHART_COLORS.green, CHART_COLORS.red, CHART_COLORS.gold],
                borderColor: 'rgba(15,23,42,0.8)',
                borderWidth: 3,
                hoverOffset: 8,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                ...defaultOptions.plugins,
                title: title ? { display: true, text: title, color: '#f1f5f9', font: { size: 16, family: "'Lilita One', cursive" } } : { display: false },
            },
            animation: { animateRotate: true, animateScale: true, duration: 1200 },
        },
    });
}

/**
 * Create an area chart (filled line)
 */
export function createAreaChart(canvasId, { labels, datasets, title }) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');

    datasets.forEach(ds => {
        ds.fill = true;
        ds.tension = 0.4;
        if (!ds.backgroundColor) {
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, ds.borderColor?.replace('1)', '0.3)') || 'rgba(59,130,246,0.3)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            ds.backgroundColor = gradient;
        }
    });

    return new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            ...defaultOptions,
            plugins: {
                ...defaultOptions.plugins,
                title: title ? { display: true, text: title, color: '#f1f5f9', font: { size: 16, family: "'Lilita One', cursive" } } : { display: false },
            },
        },
    });
}

/**
 * Destroy a chart instance safely
 */
export function destroyChart(chart) {
    if (chart && typeof chart.destroy === 'function') {
        chart.destroy();
    }
}
