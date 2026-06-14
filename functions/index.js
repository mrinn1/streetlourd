const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp();

// COC API Base URL
const COC_API_BASE = 'https://api.clashofclans.com/v1';

/**
 * Helper to retrieve Clash of Clans API Key.
 * It checks environment variables first, then Firebase functions config.
 */
function getApiKey() {
    return process.env.COC_API_KEY || 
           (functions.config().coc && functions.config().coc.key) || 
           '';
}

/**
 * Standard tag normalizer (capitalizes and prepends '#' if missing)
 */
function normalizeTag(tag) {
    if (!tag) return '';
    let formatted = tag.trim().toUpperCase();
    if (!formatted.startsWith('#')) {
        formatted = '#' + formatted;
    }
    return formatted;
}

/**
 * Standard fetch proxy handler
 */
async function callCocApi(endpoint, res) {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.error('CoC API Key is not configured.');
        return res.status(500).json({ error: 'CoC API Key is not configured on the server.' });
    }

    const url = `${COC_API_BASE}${endpoint}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            console.error(`CoC API responded with error status: ${response.status} for URL: ${url}`);
            const errorText = await response.text();
            return res.status(response.status).json({ 
                error: `Error from Clash of Clans API: ${response.statusText}`,
                details: errorText 
            });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Failed to contact Clash of Clans API:', error);
        return res.status(500).json({ error: 'Internal Server Error when fetching Clash of Clans data.', message: error.message });
    }
}

// ----------------------------------------------------
// 1. getClanInfo
// ----------------------------------------------------
exports.getClanInfo = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        const tag = req.query.tag;
        if (!tag) {
            return res.status(400).json({ error: 'Missing "tag" query parameter' });
        }
        const cleanTag = normalizeTag(tag);
        const endpoint = `/clans/${encodeURIComponent(cleanTag)}`;
        return callCocApi(endpoint, res);
    });
});

// ----------------------------------------------------
// 2. getClanMembers
// ----------------------------------------------------
exports.getClanMembers = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        const tag = req.query.tag;
        if (!tag) {
            return res.status(400).json({ error: 'Missing "tag" query parameter' });
        }
        const cleanTag = normalizeTag(tag);
        const endpoint = `/clans/${encodeURIComponent(cleanTag)}/members`;
        return callCocApi(endpoint, res);
    });
});

// ----------------------------------------------------
// 3. getPlayerInfo
// ----------------------------------------------------
exports.getPlayerInfo = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        const tag = req.query.tag;
        if (!tag) {
            return res.status(400).json({ error: 'Missing "tag" query parameter' });
        }
        const cleanTag = normalizeTag(tag);
        const endpoint = `/players/${encodeURIComponent(cleanTag)}`;
        return callCocApi(endpoint, res);
    });
});

// ----------------------------------------------------
// 4. getCurrentWar
// ----------------------------------------------------
exports.getCurrentWar = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        const tag = req.query.tag;
        if (!tag) {
            return res.status(400).json({ error: 'Missing "tag" query parameter' });
        }
        const cleanTag = normalizeTag(tag);
        const endpoint = `/clans/${encodeURIComponent(cleanTag)}/currentwar`;
        return callCocApi(endpoint, res);
    });
});

// ----------------------------------------------------
// 5. getWarLog
// ----------------------------------------------------
exports.getWarLog = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        const tag = req.query.tag;
        if (!tag) {
            return res.status(400).json({ error: 'Missing "tag" query parameter' });
        }
        const cleanTag = normalizeTag(tag);
        const endpoint = `/clans/${encodeURIComponent(cleanTag)}/warlog`;
        return callCocApi(endpoint, res);
    });
});
