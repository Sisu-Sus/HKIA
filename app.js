const defaultProgress = {
    quest: {}, // { questId: { status, updated } }
    characters: {}, // { charName: { friendshipLevel, giftsGiven } }
    collectible: {}, // { type: { id: status } }
    gudetamaWeekly: {}, // { "YYYY-WW": found (bool) }
    materials: {} // { materialName: amount }
};

// Basics

const PROGRESS_KEY = 'hkiaProgress';

function load() {
  const raw = localStorage.getItem(PROGRESS_KEY);
  return raw ? JSON.parse(raw) : defaultProgress;
}
function save(data) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}
