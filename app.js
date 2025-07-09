const PROGRESS_KEY = 'hkiaProgress';

const characters = [
    "Hello Kitty",
    "My Melody",
    "Cinnamoroll",
    "Kuromi",
    "Keroppi",
    ];

function getDefaultProgress() {
    const data= {};
    characters.forEach(name => {
        data[name] = {
            friendshipLevel: 0,
            giftsGivenToday: 0
        };
    });
    return data;
}

function loadProgress() {
  const raw = localStorage.getItem(PROGRESS_KEY);
  return raw ? JSON.parse(raw) : getDefaultProgress();
}
function saveProgress(data) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function createCharacterCard(name, data) {
    const card = document.createElement('div');
    card.className = 'character-card';

    const title = document.createElement('h2');
    title.textContent = `🎀 ${name}`;

    const levelLabel = document.createElement('label');
    levelLabel.textContent  = 'Friendship Level: ';
    const levelInput = document.createElement('input');
    levelInput.type = 'number';
    levelInput.value = data.friendshipLevel;
    levelInput.min = 0;

    const giftLabel = document.createElement('label');
    giftLabel.textContent = 'Gifts Today: ';
    const giftInput = document.createElement('input');
    giftInput.type = 'number';
    giftInput.value = data.giftsGivenToday;
    giftInput.min = 0;
    giftInput.max = 3;


// Save changes to localStorage

    levelInput.addEventListener('change', () => {
        data.friendshipLevel = parseInt(levelInput.value);
        saveProgress(progress);
});

giftInput.addEventListener('change', () => {
        data.giftsGivenToday = parseInt(giftInput.value);
        saveProgress(prorgess);
    });

    card.appendChild(title);
    card.appendChild(levelLabel);
    card.appendChild(levelInput);
    card.appendChild(document.createElement('br'));
    card.appendChild(giftLabel);    
    card.appendChild(giftInput);

    return card;
}


const progress = loadProgress();
const container = docuemnt.getElementById('characters');

characters.forEach(name => {
    const card = createCharacterCard(name, progress[name]);
    container.appendChild(card);
});

// Reset Button

docuemnt.getElementById('reset-btn').addEventListener('click', () => {
    if(confirm("Are you sure you want to reset all progress?)) {
        const fresh = getDefaultProgress();
        saveProgress(fresh);
        location.reload();
    }       
});


































    
