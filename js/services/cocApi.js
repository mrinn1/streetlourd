// ============================================================
// VictoryToClan — Clash of Clans API Client
// ============================================================

import { API_BASE_URL } from '../utils/constants.js';
import { toast } from '../components/toast.js';

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache

/**
 * Cached fetch wrapper
 */
async function cachedFetch(url, cacheKey) {
    // Check cache
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < CACHE_TTL) {
                return data;
            }
        } catch (e) { /* ignore bad cache */ }
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        
        // Save to cache
        try {
            localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
        } catch (e) { /* storage full */ }

        return data;
    } catch (error) {
        console.error(`API call failed: ${url}`, error);
        throw error;
    }
}

/**
 * Get clan information
 */
export async function getClanInfo(clanTag) {
    try {
        return await cachedFetch(
            `${API_BASE_URL}/getClanInfo?tag=${encodeURIComponent(clanTag)}`,
            `coc_clan_${clanTag}`
        );
    } catch (error) {
        toast.error('Gagal mengambil data clan dari API.');
        return null;
    }
}

/**
 * Get clan members
 */
export async function getClanMembers(clanTag) {
    try {
        return await cachedFetch(
            `${API_BASE_URL}/getClanMembers?tag=${encodeURIComponent(clanTag)}`,
            `coc_members_${clanTag}`
        );
    } catch (error) {
        toast.error('Gagal mengambil data anggota dari API.');
        return null;
    }
}

/**
 * Get player info
 */
export async function getPlayerInfo(playerTag) {
    try {
        return await cachedFetch(
            `${API_BASE_URL}/getPlayerInfo?tag=${encodeURIComponent(playerTag)}`,
            `coc_player_${playerTag}`
        );
    } catch (error) {
        console.error('getPlayerInfo failed:', error);
        return null;
    }
}

/**
 * Get current war info
 */
export async function getCurrentWar(clanTag) {
    try {
        return await cachedFetch(
            `${API_BASE_URL}/getCurrentWar?tag=${encodeURIComponent(clanTag)}`,
            `coc_war_${clanTag}`
        );
    } catch (error) {
        console.error('getCurrentWar failed:', error);
        return null;
    }
}

/**
 * Get war log
 */
export async function getWarLog(clanTag) {
    try {
        return await cachedFetch(
            `${API_BASE_URL}/getWarLog?tag=${encodeURIComponent(clanTag)}`,
            `coc_warlog_${clanTag}`
        );
    } catch (error) {
        console.error('getWarLog failed:', error);
        return null;
    }
}

/**
 * Clear all cached API data
 */
export function clearApiCache() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('coc_'));
    keys.forEach(k => localStorage.removeItem(k));
    toast.info('Cache API berhasil dihapus.');
}

/**
 * Transform CoC API member data to our format
 */
export function transformMemberData(apiMember) {
    return {
        tag: apiMember.tag,
        name: apiMember.name,
        townHallLevel: apiMember.townHallLevel || 1,
        role: apiMember.role || 'member',
        trophies: apiMember.trophies || 0,
        donations: apiMember.donations || 0,
        donationsReceived: apiMember.donationsReceived || 0,
        clanCapitalContributions: apiMember.clanCapitalContributions || 0,
        expLevel: apiMember.expLevel || 1,
        league: apiMember.league?.name || 'Unranked',
    };
}
