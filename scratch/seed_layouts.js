const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// Load environment variables for DB connection
function loadEnv() {
    const envPath = path.join(__dirname, '..', 'functions', '.env');
    if (!fs.existsSync(envPath)) {
        console.error('❌ File functions/.env tidak ditemukan!');
        process.exit(1);
    }
    const content = fs.readFileSync(envPath, 'utf8');
    const env = {};
    content.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
            let key = match[1];
            let value = match[2] || '';
            if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
                value = value.substring(1, value.length - 1);
            }
            env[key] = value;
        }
    });
    return env;
}

const env = loadEnv();

// Initialize Firebase
const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.error('❌ service-account.json tidak ditemukan!');
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath))
});

const db = admin.firestore();

// 25 Predefined layout bases with premium categories, levels, and unsplash imagery
const layoutsToSeed = [
    // --- HOME VILLAGE ---
    {
        title: "TH18 Legend League War Base (Anti 3-Star)",
        townHallLevel: 18,
        category: "home",
        type: "anti_3",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH18-Anti3-Legend",
    },
    {
        title: "TH17 Anti-Air Dragon Slayer Layout",
        townHallLevel: 17,
        category: "home",
        type: "anti_air",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH17-AntiAir-Drag",
    },
    {
        title: "TH16 Trophy & Farming Hybrid Base",
        townHallLevel: 16,
        category: "home",
        type: "hybrid",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16-Hybrid-Farm",
    },
    {
        title: "TH15 Box Wall Anti 2-Star Ring Base",
        townHallLevel: 15,
        category: "home",
        type: "anti_2",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15-Anti2-Ring",
    },
    {
        title: "TH14 Anti Ground Super-Bowler Defense",
        townHallLevel: 14,
        category: "home",
        type: "anti_ground",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14-AntiGround",
    },
    {
        title: "TH13 Heart-Shaped Fun Art Base",
        townHallLevel: 13,
        category: "home",
        type: "fun",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13-Heart-Fun",
    },
    {
        title: "TH12 Troll Base (Free Dark Elixir Bait)",
        townHallLevel: 12,
        category: "home",
        type: "troll",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12-DE-Troll",
    },
    {
        title: "TH18 Clan War CWL Defense Base",
        townHallLevel: 18,
        category: "home",
        type: "defense",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH18-CWL-Defense",
    },

    // --- BUILDER BASE ---
    {
        title: "BH10 Trophy Push Anti 2-Star Layout",
        townHallLevel: 10,
        category: "builder",
        type: "",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=BH10-Trophy-Push",
    },
    {
        title: "BH9 Stage 1 & 2 Diamond Base",
        townHallLevel: 9,
        category: "builder",
        type: "",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=BH9-Diamond-Defense",
    },

    // --- CLAN CAPITAL ---
    {
        title: "Capital Peak CH10 Finalist Layout",
        townHallLevel: 10,
        category: "capital",
        district: "capital_peak",
        type: "",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=CH10-Capital-Peak",
    },
    {
        title: "Barbarian Camp Level 5 Defense",
        townHallLevel: 5,
        category: "capital",
        district: "barbarian_camp",
        type: "",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=BC5-Barbarian-Camp",
    },
    {
        title: "Wizard Valley Level 5 Ring Base",
        townHallLevel: 5,
        category: "capital",
        district: "wizard_valley",
        type: "",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=WV5-Wizard-Valley",
    },
    {
        title: "Balloon Lagoon Level 5 Anti-Super-Dragon",
        townHallLevel: 5,
        category: "capital",
        district: "balloon_lagoon",
        type: "",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=BL5-Balloon-Lagoon",
    },
    {
        title: "Builder's Workshop Level 5 Compact Layout",
        townHallLevel: 5,
        category: "capital",
        district: "builders_workshop",
        type: "",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=BW5-Builders-Workshop",
    },
    {
        title: "Dragon Cliffs Level 5 Mountain Defense",
        townHallLevel: 5,
        category: "capital",
        district: "dragon_cliffs",
        type: "",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=DC5-Dragon-Cliffs",
    },
    {
        title: "Golem Quarry Level 5 Solid Grid Base",
        townHallLevel: 5,
        category: "capital",
        district: "golem_quarry",
        type: "",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=GQ5-Golem-Quarry",
    },
    {
        title: "Skeleton Park Level 5 Graveyard Defense",
        townHallLevel: 5,
        category: "capital",
        district: "skeleton_park",
        type: "",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=SP5-Skeleton-Park",
    },
    {
        title: "Goblin Mines Level 5 Hidden Trap Base",
        townHallLevel: 5,
        category: "capital",
        district: "goblin_mines",
        type: "",
        rating: 4,
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=GM5-Goblin-Mines",
    }
];

async function seed() {
    console.log(`🚀 Memulai pengisian (seeding) ${layoutsToSeed.length} base layouts ke Firestore...`);
    const batch = db.batch();
    
    layoutsToSeed.forEach(layout => {
        const docRef = db.collection('layouts').doc();
        batch.set(docRef, {
            ...layout,
            addedBy: "System Seeder",
            lastUpdatedBy: "System Seeder",
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
    });

    try {
        await batch.commit();
        console.log(`✅ BERHASIL! ${layoutsToSeed.length} base layout premium siap digunakan.`);
        process.exit(0);
    } catch (err) {
        console.error("❌ Gagal menyimpan data seed ke database:", err);
        process.exit(1);
    }
}

seed();
