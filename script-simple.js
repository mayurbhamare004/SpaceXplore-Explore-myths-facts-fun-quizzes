// Simple working version of Space Myths vs Facts

// Space myths data
const spaceMythsData = [
    {
        myth: "There's no gravity in space",
        fact: "There is gravity everywhere in space! Astronauts float because they are in continuous free fall while orbiting Earth at 17,500 mph.",
        mythIcon: "🌌",
        factIcon: "🌍",
        category: "astronauts"
    },
    {
        myth: "The Great Wall of China is visible from space",
        fact: "This is false! The Great Wall is not visible from space with the naked eye. Many natural features like rivers and mountains are more visible.",
        mythIcon: "🏯",
        factIcon: "🛰️",
        category: "general"
    },
    {
        myth: "Space is completely silent",
        fact: "True! Sound needs matter to travel through, and space is mostly a vacuum. However, spacecraft have air inside where sound can travel.",
        mythIcon: "🔇",
        factIcon: "🔊",
        category: "general"
    },
    {
        myth: "The Sun is yellow",
        fact: "The Sun is actually white! It appears yellow from Earth because our atmosphere scatters blue light more than other colors.",
        mythIcon: "🟡",
        factIcon: "⚪",
        category: "general"
    },
    {
        myth: "Black holes suck everything in",
        fact: "Black holes don't 'suck'! They have strong gravity, but you'd need to cross the event horizon to be trapped. You could orbit one safely.",
        mythIcon: "🕳️",
        factIcon: "🌀",
        category: "black-holes"
    },
    {
        myth: "Mars is always closer to Earth than other planets",
        fact: "Venus is usually our closest planetary neighbor! Mars is only closest during specific alignments every 26 months.",
        mythIcon: "🔴",
        factIcon: "🪐",
        category: "planets"
    }
];

// Global variables
let viewedMyths = new Set();

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded, starting initialization...');
    generateCards();
    setupBasicEventListeners();
    console.log('Initialization complete');
});

// Generate cards
function generateCards() {
    console.log('Generating cards...');
    const cardsGrid = document.getElementById('cardsGrid');

    if (!cardsGrid) {
        console.error('cardsGrid not found!');
        return;
    }

    // Clear existing cards
    cardsGrid.innerHTML = '';

    // Create cards
    spaceMythsData.forEach((data, index) => {
        const card = createCard(data, index);
        cardsGrid.appendChild(card);
    });

    console.log(`Generated ${spaceMythsData.length} cards`);
}

// Create a single card
function createCard(data, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', index);

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="card-label">MYTH</div>
                <div class="myth-icon">${data.mythIcon}</div>
                <div class="myth-text">${data.myth}</div>
            </div>
            <div class="card-back">
                <div class="card-label">FACT</div>
                <div class="fact-icon">${data.factIcon}</div>
                <div class="fact-text">${data.fact}</div>
            </div>
        </div>
    `;

    // Add click event
    card.addEventListener('click', function () {
        console.log('Card clicked:', index);
        this.classList.toggle('flipped');

        // Mark as viewed
        if (!viewedMyths.has(index)) {
            viewedMyths.add(index);
            this.classList.add('viewed');
            updateProgress();
        }
    });

    return card;
}

// Update progress
function updateProgress() {
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');

    if (progressText) {
        progressText.textContent = `Progress: ${viewedMyths.size}/${spaceMythsData.length} myths explored`;
    }

    if (progressFill) {
        const percentage = (viewedMyths.size / spaceMythsData.length) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}

// Basic event listeners
function setupBasicEventListeners() {
    console.log('Setting up basic event listeners...');

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');
            const icon = this.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
            }
        });
    }

    // Random myth button
    const randomBtn = document.getElementById('randomMythBtn');
    if (randomBtn) {
        randomBtn.addEventListener('click', function () {
            const cards = document.querySelectorAll('.card');
            if (cards.length > 0) {
                const randomIndex = Math.floor(Math.random() * cards.length);
                const randomCard = cards[randomIndex];
                randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                randomCard.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    randomCard.style.transform = '';
                    randomCard.classList.add('flipped');
                }, 1000);
            }
        });
    }

    console.log('Basic event listeners set up');
}

// Add some basic styles if needed
const style = document.createElement('style');
style.textContent = `
    .card {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .card:hover {
        transform: scale(1.02);
    }
    .card.viewed::after {
        content: "✓";
        position: absolute;
        top: 10px;
        left: 15px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 10;
    }
`;
document.head.appendChild(style);

console.log('Simple script loaded successfully');