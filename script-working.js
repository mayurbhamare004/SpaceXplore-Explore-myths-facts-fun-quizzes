// Working Space Myths vs Facts Application with Children's Mode

// ================================
// SUPABASE CONFIGURATION
// ================================

// Initialize Supabase client
const supabaseUrl = 'https://zaozaxljfrowfsmpqbxr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphb3pheGxqZnJvd2ZzbXBxYnhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTY5NjgsImV4cCI6MjA3NTE3Mjk2OH0.rXh7fjyTIvB81ws5C3E8eIPywSagiYaeRrrXtIh_Zas';

// Check if we're in development mode (localhost)
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Authentication state
let currentUser = null;
let userProfile = null;

// Enhanced space myths and facts data with difficulty levels and question types
const spaceMythsData = [
    // BEGINNER LEVEL - Simple true/false with hints
    {
        myth: "There's no gravity in space",
        fact: "There is gravity everywhere in space! Astronauts float because they are in continuous free fall while orbiting Earth at 17,500 mph.",
        mythIcon: "🌌",
        factIcon: "🌍",
        category: "astronauts",
        keywords: ["gravity", "space", "astronauts", "float", "weightless", "orbit"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-microgravity-58.html",
        isActuallyTrue: false,
        difficulty: "beginner",
        hint: "Think about what keeps the Moon orbiting Earth - that same force exists in space!",
        questionType: "true-false"
    },
    {
        myth: "The Great Wall of China is visible from space",
        fact: "This is false! The Great Wall is not visible from space with the naked eye. Many natural features like rivers and mountains are more visible.",
        mythIcon: "🏯",
        factIcon: "🛰️",
        category: "general",
        keywords: ["great wall", "china", "visible", "space", "earth", "naked eye"],
        nasaLink: "https://www.nasa.gov/vision/space/workinginspace/great_wall.html",
        isActuallyTrue: false,
        difficulty: "beginner",
        hint: "Astronauts have confirmed this popular belief is actually incorrect!",
        questionType: "true-false"
    },
    {
        myth: "Space is completely silent",
        fact: "True! Sound needs matter to travel through, and space is mostly a vacuum. However, spacecraft have air inside where sound can travel.",
        mythIcon: "🔇",
        factIcon: "🔊",
        category: "general",
        keywords: ["sound", "silent", "vacuum", "space", "noise", "matter"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-sound-58.html",
        isActuallyTrue: true,
        difficulty: "beginner",
        hint: "Remember the famous movie tagline: 'In space, no one can hear you scream'",
        questionType: "true-false"
    },
    {
        myth: "The Sun is yellow",
        fact: "The Sun is actually white! It appears yellow from Earth because our atmosphere scatters blue light more than other colors.",
        mythIcon: "🟡",
        factIcon: "⚪",
        category: "general",
        keywords: ["sun", "yellow", "white", "color", "atmosphere", "light"],
        nasaLink: "https://www.nasa.gov/sun",
        isActuallyTrue: false,
        difficulty: "beginner",
        hint: "Look at the Sun in space photos - what color does it appear without atmosphere?",
        questionType: "true-false"
    },
    {
        myth: "Astronauts' blood boils in space",
        fact: "Blood won't boil in space suits! Modern suits maintain pressure. Even in a vacuum, blood stays liquid due to skin and blood vessel pressure.",
        mythIcon: "🩸",
        factIcon: "👨‍🚀",
        category: "astronauts",
        keywords: ["blood", "boil", "astronauts", "space suit", "pressure", "vacuum"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-spacesuit-58.html",
        isActuallyTrue: false,
        difficulty: "beginner",
        hint: "Space suits are designed to protect astronauts from the vacuum of space!",
        questionType: "true-false"
    },

    // INTERMEDIATE LEVEL - Mixed questions with moderate complexity
    {
        myth: "Mars is always closer to Earth than other planets",
        fact: "Venus is usually our closest planetary neighbor! Mars is only closest during specific alignments every 26 months.",
        mythIcon: "🔴",
        factIcon: "🪐",
        category: "planets",
        keywords: ["mars", "earth", "venus", "closest", "planets", "distance", "alignment"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-mars-58.html",
        isActuallyTrue: false,
        difficulty: "intermediate",
        questionType: "multiple-choice",
        choices: [
            "Mars is always our closest neighbor",
            "Venus is usually our closest neighbor", 
            "Jupiter is usually our closest neighbor",
            "The Moon is our closest neighbor"
        ],
        correctChoice: 1
    },
    {
        myth: "The Moon has a dark side that never sees sunlight",
        fact: "The 'dark side' gets just as much sunlight! It's called the 'far side' because we never see it from Earth due to tidal locking.",
        mythIcon: "🌑",
        factIcon: "🌕",
        category: "planets",
        keywords: ["moon", "dark side", "far side", "sunlight", "tidal locking", "earth"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-the-moon-58.html",
        isActuallyTrue: false,
        difficulty: "intermediate",
        questionType: "true-false"
    },
    {
        myth: "Saturn's rings are solid",
        fact: "Saturn's rings are made of countless ice and rock particles! They range from tiny grains to house-sized chunks, all orbiting the planet.",
        mythIcon: "💍",
        factIcon: "🪨",
        category: "planets",
        keywords: ["saturn", "rings", "solid", "ice", "rock", "particles"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-are-saturns-rings-58.html",
        isActuallyTrue: false,
        difficulty: "intermediate",
        questionType: "multiple-choice",
        choices: [
            "They are solid metal discs",
            "They are made of ice and rock particles",
            "They are optical illusions",
            "They are made of gas clouds"
        ],
        correctChoice: 1
    },
    {
        myth: "You can see stars during the day from space",
        fact: "True! Without atmosphere to scatter sunlight, astronauts can see stars even when the Sun is visible.",
        mythIcon: "☀️",
        factIcon: "⭐",
        category: "astronauts",
        keywords: ["stars", "day", "space", "astronauts", "atmosphere", "sunlight"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-are-stars-58.html",
        isActuallyTrue: true,
        difficulty: "intermediate",
        questionType: "true-false"
    },
    {
        myth: "Meteors are hot when they land",
        fact: "Most meteorites are cold when found! They're frozen in space and only the surface heats up during atmospheric entry.",
        mythIcon: "🔥",
        factIcon: "🧊",
        category: "general",
        keywords: ["meteors", "meteorites", "hot", "cold", "temperature", "atmosphere"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-meteor-58.html",
        isActuallyTrue: false,
        difficulty: "intermediate",
        questionType: "multiple-choice",
        choices: [
            "They are burning hot when they land",
            "They are room temperature when they land",
            "They are cold when they land",
            "Their temperature varies randomly"
        ],
        correctChoice: 2
    },

    // ADVANCED LEVEL - Complex scenario-based questions
    {
        myth: "Black holes suck everything in like cosmic vacuum cleaners",
        fact: "Black holes don't 'suck'! They have strong gravity, but you'd need to cross the event horizon to be trapped. You could orbit one safely from a distance.",
        mythIcon: "🌪️",
        factIcon: "🕳️",
        category: "black-holes",
        keywords: ["black holes", "vacuum", "cleaner", "sun", "earth", "orbit"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-black-hole-58.html",
        isActuallyTrue: false,
        difficulty: "advanced",
        questionType: "scenario",
        scenario: "If our Sun suddenly became a black hole with the same mass, what would happen to Earth's orbit?",
        choices: [
            "Earth would be immediately sucked into the black hole",
            "Earth would continue orbiting normally at the same distance",
            "Earth would spiral outward and escape the solar system",
            "Earth would stop moving and freeze in space"
        ],
        correctChoice: 1,
        explanation: "Gravity depends on mass and distance. Since the black hole would have the same mass as the Sun, Earth's orbit would remain unchanged."
    },
    {
        myth: "Rockets need to push against something to move in space",
        fact: "Rockets work by Newton's third law! They push exhaust out one way and get pushed the opposite way - no air needed.",
        mythIcon: "🚀",
        factIcon: "⚡",
        category: "space-travel",
        keywords: ["rockets", "push", "newton", "exhaust", "propulsion", "third law"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-rocket-58.html",
        isActuallyTrue: false,
        difficulty: "advanced",
        questionType: "scenario",
        scenario: "How do rockets accelerate in the vacuum of space?",
        choices: [
            "They push against space particles",
            "They use Newton's third law - action and reaction",
            "They need air to push against",
            "They use magnetic fields"
        ],
        correctChoice: 1,
        explanation: "Rockets work by expelling mass (exhaust) in one direction, which pushes the rocket in the opposite direction, following Newton's third law."
    },
    {
        myth: "Space is freezing cold everywhere",
        fact: "Space temperature varies wildly! Near the Sun it's extremely hot, while in deep space it approaches absolute zero (-273°C).",
        mythIcon: "🥶",
        factIcon: "🌡️",
        category: "general",
        keywords: ["space", "cold", "temperature", "hot", "sun", "absolute zero"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-temperature-58.html",
        isActuallyTrue: false,
        difficulty: "advanced",
        questionType: "scenario",
        scenario: "What determines temperature in different regions of space?",
        choices: [
            "Distance from stars and radiation sources",
            "The amount of dark matter present",
            "The speed of spacecraft traveling through it",
            "The age of the universe in that region"
        ],
        correctChoice: 0,
        explanation: "Temperature in space depends primarily on radiation from nearby stars and other energy sources. Areas near stars are hot, while deep space is extremely cold."
    },
    {
        myth: "Astronauts float because there's no air in space",
        fact: "Astronauts float due to weightlessness, not lack of air! They're in constant free fall around Earth, creating microgravity conditions.",
        mythIcon: "💨",
        factIcon: "🚀",
        category: "astronauts",
        keywords: ["astronauts", "float", "air", "weightless", "microgravity", "free fall"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-microgravity-58.html",
        isActuallyTrue: false,
        difficulty: "advanced",
        questionType: "scenario",
        scenario: "Why do astronauts float inside the International Space Station?",
        choices: [
            "There's no air to provide resistance",
            "They are in continuous free fall around Earth",
            "The space station has anti-gravity technology",
            "They are too far from Earth's gravity"
        ],
        correctChoice: 1,
        explanation: "Astronauts float because they and the space station are in continuous free fall around Earth, creating a state of weightlessness or microgravity."
    }
];

// Children's Mode Data - Simple, fun questions for kids
const childrenSpaceData = [
    {
        question: "The Sun is a big star that gives us light and warmth!",
        answer: true,
        illustration: "☀️",
        explanation: "That's right! The Sun is our closest star and it's super important for life on Earth!",
        funFact: "The Sun is so big that you could fit over 1 million Earths inside it! 🌍"
    },
    {
        question: "Astronauts can jump really high on the Moon because there's less gravity!",
        answer: true,
        illustration: "🌙",
        explanation: "Correct! The Moon has weaker gravity, so astronauts can jump 6 times higher than on Earth!",
        funFact: "If you weigh 60 pounds on Earth, you'd only weigh 10 pounds on the Moon! 🚀"
    },
    {
        question: "There are little green aliens living on Mars right now!",
        answer: false,
        illustration: "👽",
        explanation: "We haven't found any aliens on Mars yet! But scientists are still looking for tiny life forms called microbes.",
        funFact: "Mars is called the Red Planet because it's covered in rusty red dirt! 🔴"
    },
    {
        question: "Saturn has beautiful rings made of ice and rocks!",
        answer: true,
        illustration: "🪐",
        explanation: "Yes! Saturn's rings are made of billions of pieces of ice and rock floating around the planet!",
        funFact: "Saturn's rings are so thin that if you looked at them from the side, they'd almost disappear! ✨"
    },
    {
        question: "You can hear sounds in space just like on Earth!",
        answer: false,
        illustration: "🔇",
        explanation: "Space is mostly empty, so sound can't travel there! That's why space is completely silent.",
        funFact: "In movies, spaceships make loud noises, but in real space, they would be totally quiet! 🤫"
    },
    {
        question: "The Earth spins around like a spinning top!",
        answer: true,
        illustration: "🌍",
        explanation: "That's right! Earth spins once every 24 hours, which gives us day and night!",
        funFact: "Earth spins so fast that if you were at the equator, you'd be moving at 1,000 miles per hour! 💨"
    },
    {
        question: "All planets in our solar system are the same size!",
        answer: false,
        illustration: "🌌",
        explanation: "Planets come in different sizes! Jupiter is the biggest, and Mercury is the smallest.",
        funFact: "Jupiter is so big that all the other planets could fit inside it! 🪐"
    },
    {
        question: "Shooting stars are actually tiny rocks burning up in our atmosphere!",
        answer: true,
        illustration: "⭐",
        explanation: "Correct! When tiny space rocks enter Earth's atmosphere, they burn up and create beautiful streaks of light!",
        funFact: "Most shooting stars are smaller than a pebble, but they create amazing light shows! ✨"
    },
    {
        question: "The Moon is made of green cheese!",
        answer: false,
        illustration: "🧀",
        explanation: "The Moon is made of rock and dust, not cheese! This is just a funny old story people used to tell.",
        funFact: "The Moon's surface is covered in gray dust and has lots of craters from space rocks hitting it! 🌙"
    },
    {
        question: "Black holes are like giant vacuum cleaners in space!",
        answer: false,
        illustration: "🕳️",
        explanation: "Black holes don't suck things up like vacuum cleaners! They only pull in things that get very, very close.",
        funFact: "If our Sun became a black hole, Earth would keep orbiting normally because we're far away! 🌍"
    }
];

// Global state management
let currentFilter = 'all';
let searchTerm = '';
let viewedMyths = new Set();
let likedMyths = new Set();
let isLightTheme = false;

// Quiz state
let quizMode = false;
let currentDifficulty = '';
let quizData = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizTimer = 60;
let quizTimerInterval = null;
let quizStartTime = null;

// Children's mode state
let childrenMode = false;
let childrenQuizData = [];
let childrenQuizIndex = 0;
let childrenQuizScore = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 Space Myths vs Facts - Initializing...');
    
    // Initialize authentication first
    await initializeAuth();
    
    // Load saved data (will be synced with user data if logged in)
    loadViewedMyths();
    loadLikedMyths();
    loadTheme();
    
    // Generate initial content
    generateCards();
    updateProgressTracker();
    
    // Setup all event listeners
    setupEventListeners();
    setupTooltips();
    
    console.log('✅ Initialization complete!');
});

// Generate all myth/fact cards
function generateCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!cardsGrid) {
        console.error('❌ cardsGrid element not found!');
        return;
    }
    
    cardsGrid.innerHTML = '';
    
    const filteredData = getFilteredData();
    
    if (filteredData.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    } else {
        if (noResults) noResults.classList.add('hidden');
    }
    
    filteredData.forEach((data, index) => {
        const originalIndex = spaceMythsData.indexOf(data);
        const card = createCard(data, originalIndex);
        cardsGrid.appendChild(card);
    });
    
    console.log(`📋 Generated ${filteredData.length} cards`);
}

// Get filtered data based on current filters
function getFilteredData() {
    return spaceMythsData.filter(data => {
        const matchesCategory = currentFilter === 'all' || data.category === currentFilter;
        const matchesSearch = searchTerm === '' || 
            data.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
            data.myth.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.fact.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
}

// Create individual card element
function createCard(data, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', index);
    card.setAttribute('data-category', data.category);
    
    // Mark as viewed if already seen
    if (viewedMyths.has(index)) {
        card.classList.add('viewed');
    }
    
    const likeCount = getLikeCount(index);
    const isLiked = likedMyths.has(index);
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="card-label">MYTH</div>
                <button class="like-btn ${isLiked ? 'liked' : ''}" data-index="${index}">
                    ❤️ <span class="like-count">${likeCount}</span>
                </button>
                <div class="myth-icon">${data.mythIcon}</div>
                <div class="myth-text">${data.myth}</div>
                <button class="share-btn" data-index="${index}" data-type="myth">
                    🔗 Share
                </button>
            </div>
            <div class="card-back">
                <div class="card-label">FACT</div>
                <button class="like-btn ${isLiked ? 'liked' : ''}" data-index="${index}">
                    ❤️ <span class="like-count">${likeCount}</span>
                </button>
                <div class="fact-icon">${data.factIcon}</div>
                <div class="fact-text">${data.fact}</div>
                <a href="${data.nasaLink}" target="_blank" class="learn-more-link">
                    🚀 Learn More at NASA
                </a>
                <button class="share-btn" data-index="${index}" data-type="fact">
                    🔗 Share
                </button>
            </div>
        </div>
    `;
    
    // Add click event to flip card
    card.addEventListener('click', function(e) {
        // Don't flip if clicking on interactive elements
        if (e.target.closest('.like-btn') || e.target.closest('.share-btn') || e.target.closest('.learn-more-link')) {
            return;
        }
        
        flipCard(this, index);
    });
    
    return card;
}

// Flip card with enhanced animations
function flipCard(card, index) {
    card.classList.toggle('flipped');
    
    // Mark as viewed and update progress
    if (!viewedMyths.has(index)) {
        viewedMyths.add(index);
        card.classList.add('viewed');
        saveViewedMyths();
        updateProgressTracker();
        playFlipSound();
        
        // Check if all myths are viewed
        if (viewedMyths.size === spaceMythsData.length) {
            setTimeout(() => {
                showConfetti();
                showSuccessMessage('🎉 Congratulations! You\'ve explored all space myths!');
            }, 1000);
        }
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchTerm = this.value;
            generateCards();
        });
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            generateCards();
        });
    }
    
    // Category filters
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-category');
            generateCards();
        });
    });
    
    // Action buttons
    const randomBtn = document.getElementById('randomMythBtn');
    const quizBtn = document.getElementById('quizModeBtn');
    const childrenBtn = document.getElementById('childrenModeBtn');
    const submitBtn = document.getElementById('submitMythBtn');
    const resetBtn = document.getElementById('resetProgressBtn');
    const themeBtn = document.getElementById('themeToggle');
    
    if (randomBtn) randomBtn.addEventListener('click', showRandomMyth);
    if (quizBtn) quizBtn.addEventListener('click', startQuizMode);
    if (childrenBtn) childrenBtn.addEventListener('click', startChildrenMode);
    if (submitBtn) submitBtn.addEventListener('click', openSubmitModal);
    if (resetBtn) resetBtn.addEventListener('click', resetProgress);
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Modal event listeners
    const closeModal = document.getElementById('closeModal');
    const cancelSubmit = document.getElementById('cancelSubmit');
    const submitForm = document.getElementById('mythSubmissionForm');
    
    if (closeModal) closeModal.addEventListener('click', closeSubmitModal);
    if (cancelSubmit) cancelSubmit.addEventListener('click', closeSubmitModal);
    if (submitForm) submitForm.addEventListener('submit', handleMythSubmission);
    
    // Like and share event delegation
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            const btn = e.target.closest('.like-btn');
            const index = parseInt(btn.getAttribute('data-index'));
            toggleLike(index);
        }
        
        if (e.target.closest('.share-btn')) {
            const btn = e.target.closest('.share-btn');
            const index = parseInt(btn.getAttribute('data-index'));
            const type = btn.getAttribute('data-type');
            shareMyth(index, type);
        }
    });
}

// Children's Mode Functions
function startChildrenMode() {
    const childrenOverlay = document.getElementById('childrenModeOverlay');
    const childrenMainMenu = document.getElementById('childrenMainMenu');
    
    if (childrenOverlay) childrenOverlay.classList.remove('hidden');
    if (childrenMainMenu) childrenMainMenu.classList.remove('hidden');
    
    childrenMode = true;
    setupChildrenEventListeners();
}

function setupChildrenEventListeners() {
    // Main menu buttons
    const childrenQuizBtn = document.getElementById('childrenQuizBtn');
    const childrenStoryBtn = document.getElementById('childrenStoryBtn');
    const childrenGamesBtn = document.getElementById('childrenGamesBtn');
    const childrenVideosBtn = document.getElementById('childrenVideosBtn');
    const exitChildrenBtn = document.getElementById('exitChildrenModeBtn');
    
    if (childrenQuizBtn) childrenQuizBtn.addEventListener('click', startChildrenQuiz);
    if (childrenStoryBtn) childrenStoryBtn.addEventListener('click', startChildrenStory);
    if (childrenGamesBtn) childrenGamesBtn.addEventListener('click', startChildrenGames);
    if (childrenVideosBtn) childrenVideosBtn.addEventListener('click', startChildrenVideos);
    if (exitChildrenBtn) exitChildrenBtn.addEventListener('click', exitChildrenMode);
    
    // Quiz mode buttons
    const backToChildrenMenuBtn = document.getElementById('backToChildrenMenuBtn');
    const nextChildrenQuizBtn = document.getElementById('nextChildrenQuizBtn');
    
    if (backToChildrenMenuBtn) backToChildrenMenuBtn.addEventListener('click', backToChildrenMainMenu);
    if (nextChildrenQuizBtn) nextChildrenQuizBtn.addEventListener('click', nextChildrenQuestion);
}

function startChildrenQuiz() {
    hideAllChildrenScreens();
    const childrenQuizMode = document.getElementById('childrenQuizMode');
    if (childrenQuizMode) childrenQuizMode.classList.remove('hidden');
    
    // Initialize quiz
    childrenQuizData = [...childrenSpaceData].sort(() => Math.random() - 0.5).slice(0, 10);
    childrenQuizIndex = 0;
    childrenQuizScore = 0;
    
    updateMascotSpeech("Let's start with an easy question! Take your time and think carefully! 🤔");
    displayChildrenQuestion();
}

function displayChildrenQuestion() {
    if (childrenQuizIndex >= childrenQuizData.length) {
        showChildrenQuizResults();
        return;
    }
    
    const currentQuestion = childrenQuizData[childrenQuizIndex];
    const questionElement = document.getElementById('childrenQuestion');
    const illustrationElement = document.getElementById('questionIllustration');
    const currentQElement = document.getElementById('childrenCurrentQ');
    const scoreElement = document.getElementById('childrenQuizScore');
    const resultElement = document.getElementById('childrenQuizResult');
    
    if (questionElement) questionElement.textContent = currentQuestion.question;
    if (illustrationElement) illustrationElement.textContent = currentQuestion.illustration;
    if (currentQElement) currentQElement.textContent = childrenQuizIndex + 1;
    if (scoreElement) scoreElement.textContent = childrenQuizScore;
    if (resultElement) resultElement.classList.add('hidden');
    
    // Setup answer buttons
    setupChildrenAnswerButtons();
}

function setupChildrenAnswerButtons() {
    const buttonsContainer = document.getElementById('childrenQuizButtons');
    if (!buttonsContainer) return;
    
    buttonsContainer.innerHTML = `
        <button class="children-answer-btn true-btn" id="childrenTrueBtn">✅ TRUE</button>
        <button class="children-answer-btn false-btn" id="childrenFalseBtn">❌ FALSE</button>
    `;
    
    // Add event listeners
    const trueBtn = document.getElementById('childrenTrueBtn');
    const falseBtn = document.getElementById('childrenFalseBtn');
    
    if (trueBtn) trueBtn.addEventListener('click', () => answerChildrenQuestion(true));
    if (falseBtn) falseBtn.addEventListener('click', () => answerChildrenQuestion(false));
}

function answerChildrenQuestion(userAnswer) {
    const currentQuestion = childrenQuizData[childrenQuizIndex];
    const correct = userAnswer === currentQuestion.answer;
    
    if (correct) {
        childrenQuizScore++;
        showChildrenConfetti();
    }
    
    showChildrenQuestionResult(correct, currentQuestion);
}

function showChildrenQuestionResult(correct, questionData) {
    const resultElement = document.getElementById('childrenQuizResult');
    const resultAnimation = document.getElementById('resultAnimation');
    const resultText = document.getElementById('resultTextKids');
    const resultExplanation = document.getElementById('resultExplanationKids');
    const buttonsContainer = document.getElementById('childrenQuizButtons');
    
    // Hide answer buttons
    if (buttonsContainer) {
        buttonsContainer.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }
    
    if (resultElement) {
        resultElement.classList.remove('hidden', 'correct', 'incorrect');
        resultElement.classList.add(correct ? 'correct' : 'incorrect');
    }
    
    if (correct) {
        if (resultAnimation) resultAnimation.textContent = '🎉';
        if (resultText) resultText.textContent = 'Awesome! You got it right! 🌟';
        updateMascotSpeech("Great job, space explorer! You're so smart! 🎉");
    } else {
        if (resultAnimation) resultAnimation.textContent = '🤗';
        if (resultText) resultText.textContent = 'Good try! Let me explain! 💫';
        updateMascotSpeech("That's okay! Learning is fun, and now you know something new! 😊");
    }
    
    if (resultExplanation) {
        resultExplanation.innerHTML = `
            <p>${questionData.explanation}</p>
            <p style="margin-top: 1rem; font-style: italic; color: #FF69B4;">
                <strong>Fun Fact:</strong> ${questionData.funFact}
            </p>
        `;
    }
}

function nextChildrenQuestion() {
    childrenQuizIndex++;
    displayChildrenQuestion();
}

function showChildrenQuizResults() {
    const percentage = Math.round((childrenQuizScore / childrenQuizData.length) * 100);
    let message = '';
    let mascotMessage = '';
    
    if (percentage >= 80) {
        message = '🌟 Amazing! You\'re a Space Superstar! 🌟';
        mascotMessage = 'Wow! You know so much about space! You\'re incredible! 🚀';
    } else if (percentage >= 60) {
        message = '🎉 Great job! You\'re a Space Explorer! 🎉';
        mascotMessage = 'You did really well! Keep learning about space! 🌟';
    } else {
        message = '🚀 Good try! You\'re learning so much! 🚀';
        mascotMessage = 'Every question you answered taught you something new! That\'s awesome! 😊';
    }
    
    const resultText = document.getElementById('resultTextKids');
    const resultExplanation = document.getElementById('resultExplanationKids');
    const nextBtn = document.getElementById('nextChildrenQuizBtn');
    
    if (resultText) resultText.textContent = message;
    if (resultExplanation) {
        resultExplanation.innerHTML = `
            <p>You got ${childrenQuizScore} out of ${childrenQuizData.length} questions right!</p>
            <p>That's ${percentage}% correct! 🎯</p>
        `;
    }
    if (nextBtn) {
        nextBtn.textContent = 'Play Again! 🎮';
        nextBtn.removeEventListener('click', nextChildrenQuestion);
        nextBtn.addEventListener('click', startChildrenQuiz);
    }
    
    updateMascotSpeech(mascotMessage);
    
    if (percentage >= 70) {
        showChildrenConfetti();
    }
}

function hideAllChildrenScreens() {
    const screens = [
        'childrenMainMenu',
        'childrenQuizMode',
        'childrenStoryMode',
        'childrenGamesMode',
        'matchGame'
    ];
    
    screens.forEach(screenId => {
        const screen = document.getElementById(screenId);
        if (screen) screen.classList.add('hidden');
    });
}

function backToChildrenMainMenu() {
    hideAllChildrenScreens();
    const childrenMainMenu = document.getElementById('childrenMainMenu');
    if (childrenMainMenu) childrenMainMenu.classList.remove('hidden');
    
    updateMascotSpeech("Welcome back! What would you like to do next? 🚀");
}

function exitChildrenMode() {
    const childrenOverlay = document.getElementById('childrenModeOverlay');
    if (childrenOverlay) childrenOverlay.classList.add('hidden');
    
    childrenMode = false;
}

function updateMascotSpeech(message) {
    const speechBubbles = document.querySelectorAll('.speech-bubble');
    speechBubbles.forEach(bubble => {
        bubble.textContent = message;
        bubble.style.animation = 'none';
        setTimeout(() => {
            bubble.style.animation = 'fadeInUp 0.5s ease-out';
        }, 10);
    });
}

function showChildrenConfetti() {
    // Create colorful confetti for children
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#FF69B4', '#87CEEB', '#98FB98', '#FFD700', '#FF6347', '#9370DB', '#FFA500'];
    const shapes = ['⭐', '🌟', '✨', '🎉', '🎊', '💫'];
    
    // Create confetti pieces
    for (let i = 0; i < 50; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            size: Math.random() * 20 + 15,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animateChildrenConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((piece, index) => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.font = `${piece.size}px Arial`;
            ctx.textAlign = 'center';
            ctx.fillText(piece.shape, 0, 0);
            ctx.restore();
            
            // Remove confetti that's off screen
            if (piece.y > canvas.height + 50) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateChildrenConfetti);
        }
    }
    
    animateChildrenConfetti();
}

// ================================
// CHILDREN'S GAMES FUNCTIONS
// ================================

// Story Mode Data
const spaceStoryData = [
    {
        step: 0,
        illustration: "🚀",
        text: "Welcome, brave space explorer! You're about to blast off on an amazing adventure through our solar system. Are you ready to learn cool facts about space?",
        choices: [
            { text: "Yes! Let's go to space! 🚀", next: 1 },
            { text: "Tell me more about rockets first! 🤔", next: 0.5 }
        ]
    },
    {
        step: 0.5,
        illustration: "🚀",
        text: "Rockets are amazing machines! They work by shooting hot gas out the bottom, which pushes them up into space. It's like when you blow up a balloon and let it go - it flies around the room!",
        choices: [
            { text: "Cool! Now let's go to space! 🚀", next: 1 }
        ]
    },
    {
        step: 1,
        illustration: "🌍",
        text: "3... 2... 1... BLAST OFF! 🚀 You're now flying away from Earth! Look down - can you see the blue oceans and green land? Earth is the only planet we know that has life on it!",
        choices: [
            { text: "Let's visit the Moon! 🌙", next: 2 },
            { text: "I want to see the Sun! ☀️", next: 3 }
        ]
    },
    {
        step: 2,
        illustration: "🌙",
        text: "Welcome to the Moon! Notice how you're bouncing with each step? That's because the Moon has less gravity than Earth. The Moon doesn't have air or water, and it's covered in gray dust and craters!",
        choices: [
            { text: "Let's explore more planets! 🪐", next: 4 },
            { text: "Why does the Moon have craters? 🤔", next: 2.5 }
        ]
    },
    {
        step: 2.5,
        illustration: "☄️",
        text: "Great question! The Moon's craters were made by space rocks called meteorites that crashed into it millions of years ago. Since the Moon doesn't have air to protect it, these rocks hit the surface and made big holes!",
        choices: [
            { text: "Now let's visit other planets! 🪐", next: 4 }
        ]
    },
    {
        step: 3,
        illustration: "☀️",
        text: "Wow! The Sun is HUGE and super hot! It's actually a star - the closest star to Earth. The Sun gives us light and warmth, and without it, Earth would be a frozen, dark place. But don't get too close - it's 27 million degrees Fahrenheit!",
        choices: [
            { text: "Let's visit the planets now! 🪐", next: 4 }
        ]
    },
    {
        step: 4,
        illustration: "🪐",
        text: "Amazing! You've reached Saturn, the planet with beautiful rings! These rings are made of billions of pieces of ice and rock. Saturn is so light that if you had a bathtub big enough, Saturn would float in the water!",
        choices: [
            { text: "What's that red planet over there? 🔴", next: 5 },
            { text: "Tell me more about Saturn's rings! 💍", next: 4.5 }
        ]
    },
    {
        step: 4.5,
        illustration: "💍",
        text: "Saturn's rings are incredible! They're made of chunks of ice and rock, some as small as snowballs and others as big as houses! The rings are very thin - if Saturn were the size of a basketball, the rings would be thinner than a piece of paper!",
        choices: [
            { text: "Now let's check out that red planet! 🔴", next: 5 }
        ]
    },
    {
        step: 5,
        illustration: "🔴",
        text: "You've discovered Mars, the Red Planet! It looks red because it's covered in rusty dirt. Mars has the biggest volcano in our solar system - it's three times taller than Mount Everest! Scientists are looking for signs that tiny life forms might have lived there long ago.",
        choices: [
            { text: "This has been amazing! Let's go home! 🏠", next: 6 },
            { text: "Are there really aliens on Mars? 👽", next: 5.5 }
        ]
    },
    {
        step: 5.5,
        illustration: "👽",
        text: "We haven't found any little green aliens on Mars, but scientists think tiny life forms called microbes might have lived there billions of years ago when Mars had water! We're still exploring to find out more!",
        choices: [
            { text: "Time to return to Earth! 🌍", next: 6 }
        ]
    },
    {
        step: 6,
        illustration: "🏠",
        text: "What an incredible space adventure! You've learned so much about our solar system. Remember: Earth is special because it has life, the Moon has weak gravity, the Sun is a star, Saturn has rings, and Mars is red! You're now an official Space Explorer! 🎉",
        choices: [
            { text: "Start a new adventure! 🚀", next: 0 },
            { text: "Go back to the main menu! 🏠", next: -1 }
        ]
    }
];

// New Kids' Games Data
const spaceRiddlesData = [
    {
        question: "I shine at night but I'm not a star. I change my shape but I'm always there. What am I?",
        image: "🌙",
        choices: ["The Sun", "The Moon", "A Planet", "A Comet"],
        correct: 1,
        funFact: "The Moon changes shape because we see different parts of it lit up by the Sun as it orbits Earth!"
    },
    {
        question: "I'm the biggest planet with a big red spot. I have many moons that like to hop. What am I?",
        image: "🪐",
        choices: ["Saturn", "Jupiter", "Mars", "Neptune"],
        correct: 1,
        funFact: "Jupiter is so big that all the other planets could fit inside it! Its red spot is actually a giant storm!"
    },
    {
        question: "I'm red and dusty, named after war. People want to visit me more and more. What am I?",
        image: "🔴",
        choices: ["Venus", "Mercury", "Mars", "Earth"],
        correct: 2,
        funFact: "Mars is called the Red Planet because it's covered in rusty red dirt! It has the biggest volcano in our solar system!"
    },
    {
        question: "I have beautiful rings that go around and around. I'm made of gas and make no sound. What am I?",
        image: "💍",
        choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
        funFact: "Saturn's rings are made of billions of pieces of ice and rock! They're so thin they'd almost disappear if you looked from the side!"
    },
    {
        question: "I'm the hottest planet, covered in clouds. My surface is hidden, no land to be found. What am I?",
        image: "☁️",
        choices: ["Mercury", "Venus", "Mars", "Jupiter"],
        correct: 1,
        funFact: "Venus is hotter than Mercury even though it's farther from the Sun! Its thick clouds trap heat like a blanket!"
    },
    {
        question: "I'm closest to the Sun, I'm small and fast. My year is short, it goes by so fast. What am I?",
        image: "☄️",
        choices: ["Venus", "Earth", "Mercury", "Mars"],
        correct: 2,
        funFact: "Mercury zooms around the Sun in just 88 Earth days! It's the fastest planet in our solar system!"
    },
    {
        question: "I'm blue and green with water so deep. I'm the only planet where life can sleep. What am I?",
        image: "🌍",
        choices: ["Mars", "Earth", "Neptune", "Venus"],
        correct: 1,
        funFact: "Earth is the only planet we know that has life! It's called the Blue Planet because of all its water!"
    },
    {
        question: "I'm a ball of fire, hot and bright. I give you warmth and give you light. What am I?",
        image: "☀️",
        choices: ["The Moon", "A Star", "The Sun", "A Comet"],
        correct: 2,
        funFact: "The Sun is actually a star! It's so big that over 1 million Earths could fit inside it!"
    },
    {
        question: "I streak across the sky so bright. People make wishes when they see my light. What am I?",
        image: "⭐",
        choices: ["A Shooting Star", "The Moon", "A Planet", "The Sun"],
        correct: 0,
        funFact: "Shooting stars are actually tiny rocks from space that burn up when they enter Earth's atmosphere!"
    },
    {
        question: "I'm a space rock that travels around. Sometimes I crash into the ground. What am I?",
        image: "☄️",
        choices: ["A Star", "A Planet", "An Asteroid", "The Moon"],
        correct: 2,
        funFact: "Asteroids are like space rocks! Most of them live in a belt between Mars and Jupiter!"
    }
];

// Planet coloring data
const planetColoringData = {
    earth: {
        name: "Earth",
        realImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NSIgZmlsbD0iIzRFQ0RDNCIvPjxwYXRoIGQ9Ik01MCA2MEM3MCA0MCA5MCA1MCA5MCA3MEM5MCA5MCA3MCA5MCA1MCA5MFoiIGZpbGw9IiM5NkNFQjQiLz48cGF0aCBkPSJNMTIwIDQwQzE0MCAzMCAxNjAgNDAgMTYwIDYwQzE2MCA4MCA1MCA4MCA0MCA2MFoiIGZpbGw9IiM5NkNFQjQiLz48L3N2Zz4=",
        outline: "M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,190 10,150 10,100 C10,50 50,10 100,10 Z"
    },
    mars: {
        name: "Mars",
        realImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NSIgZmlsbD0iI0ZGNkI2QiIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iNzAiIHI9IjE1IiBmaWxsPSIjRkY0NTQ1Ii8+PGNpcmNsZSBjeD0iMTMwIiBjeT0iMTIwIiByPSIyMCIgZmlsbD0iI0ZGNDU0NSIvPjwvc3ZnPg==",
        outline: "M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,190 10,150 10,100 C10,50 50,10 100,10 Z"
    },
    saturn: {
        name: "Saturn",
        realImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGVsbGlwc2UgY3g9IjEwMCIgY3k9IjEwMCIgcng9IjE0MCIgcnk9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkVBQTciIHN0cm9rZS13aWR0aD0iNCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNGRkVBQTciLz48L3N2Zz4=",
        outline: "M100,40 C130,40 160,70 160,100 C160,130 130,160 100,160 C70,160 40,130 40,100 C40,70 70,40 100,40 Z"
    },
    jupiter: {
        name: "Jupiter",
        realImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NSIgZmlsbD0iI0Y3REM2RiIvPjxyZWN0IHg9IjIwIiB5PSI4MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI4IiBmaWxsPSIjRERBMEREIi8+PHJlY3QgeD0iMjAiIHk9IjEyMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI4IiBmaWxsPSIjRERBMEREIi8+PGNpcmNsZSBjeD0iMTMwIiBjeT0iODAiIHI9IjEyIiBmaWxsPSIjRkY2QjZCIi8+PC9zdmc+",
        outline: "M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,190 10,150 10,100 C10,50 50,10 100,10 Z"
    }
};

// Game state variables
let currentStoryStep = 0;

// Catch the Stars game variables
let starsGame = {
    canvas: null,
    ctx: null,
    spaceship: { x: 250, y: 350, width: 60, height: 40 },
    objects: [],
    score: 0,
    level: 1,
    lives: 3,
    gameRunning: false,
    keys: {},
    lastSpawn: 0
};

// Space Riddles game variables
let riddlesGame = {
    currentRiddle: 0,
    score: 0,
    totalRiddles: spaceRiddlesData.length,
    gameData: []
};

// Color Planet game variables
let coloringGame = {
    canvas: null,
    ctx: null,
    currentColor: '#FF6B6B',
    currentTool: 'brush',
    isDrawing: false,
    selectedPlanet: null
};

function startChildrenGames() {
    hideAllChildrenScreens();
    const childrenGamesMode = document.getElementById('childrenGamesMode');
    if (childrenGamesMode) childrenGamesMode.classList.remove('hidden');
    
    setupChildrenGamesEventListeners();
}

function setupChildrenGamesEventListeners() {
    const backToChildrenMenuFromGames = document.getElementById('backToChildrenMenuFromGames');
    const matchGameBtn = document.getElementById('matchGameBtn');
    const rocketGameBtn = document.getElementById('rocketGameBtn');
    const solarSystemBtn = document.getElementById('solarSystemBtn');
    
    if (backToChildrenMenuFromGames) {
        backToChildrenMenuFromGames.removeEventListener('click', backToChildrenMainMenu);
        backToChildrenMenuFromGames.addEventListener('click', backToChildrenMainMenu);
    }
    if (matchGameBtn) {
        matchGameBtn.removeEventListener('click', startMatchGame);
        matchGameBtn.addEventListener('click', startMatchGame);
    }
    if (rocketGameBtn) {
        rocketGameBtn.removeEventListener('click', startRocketGame);
        rocketGameBtn.addEventListener('click', startRocketGame);
    }
    if (solarSystemBtn) {
        solarSystemBtn.removeEventListener('click', startSolarSystemGame);
        solarSystemBtn.addEventListener('click', startSolarSystemGame);
    }
}

function startMatchGame() {
    hideAllChildrenScreens();
    const matchGame = document.getElementById('matchGame');
    if (matchGame) matchGame.classList.remove('hidden');
    
    initializeMatchGame();
    
    // Setup back button
    const backToGamesFromMatch = document.getElementById('backToGamesFromMatch');
    if (backToGamesFromMatch) {
        backToGamesFromMatch.removeEventListener('click', backToChildrenGames);
        backToGamesFromMatch.addEventListener('click', backToChildrenGames);
    }
}

function initializeMatchGame() {
    console.log('Initializing match game...');
    matchGameScore = 0;
    flippedCards = [];
    
    // Create card pairs
    const cards = [];
    matchGameData.forEach(item => {
        cards.push({ ...item, type: 'icon' });
        cards.push({ ...item, type: 'text' });
    });
    
    // Shuffle cards
    matchGameCards = cards.sort(() => Math.random() - 0.5);
    console.log('Match game cards:', matchGameCards);
    
    // Display cards
    const matchGrid = document.getElementById('matchGrid');
    const scoreElement = document.getElementById('matchScore');
    
    if (scoreElement) scoreElement.textContent = matchGameScore;
    
    if (matchGrid) {
        console.log('Match grid found, creating cards...');
        matchGrid.innerHTML = '';
        
        // Create a simple test first
        matchGrid.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; padding: 20px;">
                ${matchGameCards.map((card, index) => `
                    <div 
                        class="simple-match-card" 
                        data-index="${index}" 
                        data-id="${card.id}"
                        data-type="${card.type}"
                        data-content="${card.type === 'icon' ? card.content : card.match}"
                        onclick="simpleFlipCard(${index})"
                        style="
                            width: 80px;
                            height: 80px;
                            background: linear-gradient(135deg, #87CEEB, #98FB98);
                            border: 3px solid #4682B4;
                            border-radius: 15px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.5rem;
                            cursor: pointer;
                            font-family: 'Comic Sans MS', cursive;
                            font-weight: bold;
                            color: #4B0082;
                            text-align: center;
                        ">
                        ?
                    </div>
                `).join('')}
            </div>
        `;
        
        console.log('Simple cards created');
    } else {
        console.log('Match grid not found!');
    }
}

// Simple flip function that definitely works
window.simpleFlipCard = function(index) {
    console.log('Simple flip card called:', index);
    
    if (flippedCards.length >= 2) return;
    
    const card = document.querySelector(`[data-index="${index}"]`);
    if (!card || card.classList.contains('flipped')) return;
    
    const cardData = matchGameCards[index];
    const content = cardData.type === 'icon' ? cardData.content : cardData.match;
    
    console.log('Flipping card to show:', content);
    
    card.innerHTML = content;
    card.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    card.classList.add('flipped');
    
    flippedCards.push(index);
    
    if (flippedCards.length === 2) {
        setTimeout(() => {
            const [first, second] = flippedCards;
            const firstCard = matchGameCards[first];
            const secondCard = matchGameCards[second];
            
            const firstElement = document.querySelector(`[data-index="${first}"]`);
            const secondElement = document.querySelector(`[data-index="${second}"]`);
            
            if (firstCard.id === secondCard.id) {
                // Match!
                firstElement.style.background = 'linear-gradient(135deg, #98FB98, #90EE90)';
                secondElement.style.background = 'linear-gradient(135deg, #98FB98, #90EE90)';
                firstElement.classList.add('matched');
                secondElement.classList.add('matched');
                
                matchGameScore += 10;
                const scoreElement = document.getElementById('matchScore');
                if (scoreElement) scoreElement.textContent = matchGameScore;
                
                showChildrenConfetti();
            } else {
                // No match
                setTimeout(() => {
                    firstElement.innerHTML = '?';
                    secondElement.innerHTML = '?';
                    firstElement.style.background = 'linear-gradient(135deg, #87CEEB, #98FB98)';
                    secondElement.style.background = 'linear-gradient(135deg, #87CEEB, #98FB98)';
                    firstElement.classList.remove('flipped');
                    secondElement.classList.remove('flipped');
                }, 1000);
            }
            
            flippedCards = [];
        }, 1000);
    }
};

function flipMatchCard(index) {
    console.log('flipMatchCard called with index:', index);
    
    if (flippedCards.length >= 2) {
        console.log('Too many cards flipped, returning');
        return;
    }
    
    const cardElement = document.querySelector(`[data-index="${index}"]`);
    console.log('Card element found:', cardElement);
    
    if (!cardElement || cardElement.isFlipped || cardElement.classList.contains('matched')) {
        console.log('Card not available for flipping');
        return;
    }
    
    // Flip the card
    cardElement.isFlipped = true;
    cardElement.classList.add('flipped');
    
    // Show the card content
    const card = cardElement.cardData;
    console.log('Card data:', card);
    
    const content = card.type === 'icon' ? card.content : card.match;
    console.log('Setting content to:', content);
    
    cardElement.innerHTML = content;
    cardElement.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    cardElement.style.borderColor = '#FF8C00';
    
    flippedCards.push(index);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatchCards, 1000);
    }
}

function checkMatchCards() {
    const [first, second] = flippedCards;
    const firstCard = matchGameCards[first];
    const secondCard = matchGameCards[second];
    
    const firstElement = document.querySelector(`[data-index="${first}"]`);
    const secondElement = document.querySelector(`[data-index="${second}"]`);
    
    if (firstCard.id === secondCard.id) {
        // Match found!
        firstElement.classList.add('matched');
        secondElement.classList.add('matched');
        
        // Style matched cards
        firstElement.style.background = 'linear-gradient(135deg, #98FB98, #90EE90)';
        firstElement.style.borderColor = '#32CD32';
        secondElement.style.background = 'linear-gradient(135deg, #98FB98, #90EE90)';
        secondElement.style.borderColor = '#32CD32';
        
        matchGameScore += 10;
        
        const scoreElement = document.getElementById('matchScore');
        if (scoreElement) scoreElement.textContent = matchGameScore;
        
        showChildrenConfetti();
        
        // Check if game is complete
        const allMatched = document.querySelectorAll('.match-card.matched').length === matchGameCards.length;
        if (allMatched) {
            setTimeout(async () => {
                alert('🎉 Congratulations! You matched all the space objects! You\'re amazing! 🌟');
                
                // Save game progress if user is logged in
                if (currentUser) {
                    await saveGameProgress('match_planets');
                }
            }, 500);
        }
    } else {
        // No match, flip back
        setTimeout(() => {
            firstElement.classList.remove('flipped');
            secondElement.classList.remove('flipped');
            firstElement.isFlipped = false;
            secondElement.isFlipped = false;
            
            // Reset to question mark
            firstElement.innerHTML = '?';
            firstElement.style.background = 'linear-gradient(135deg, #87CEEB, #98FB98)';
            firstElement.style.borderColor = '#4682B4';
            
            secondElement.innerHTML = '?';
            secondElement.style.background = 'linear-gradient(135deg, #87CEEB, #98FB98)';
            secondElement.style.borderColor = '#4682B4';
        }, 1500);
    }
    
    flippedCards = [];
}

function backToChildrenGames() {
    hideAllChildrenScreens();
    const childrenGamesMode = document.getElementById('childrenGamesMode');
    if (childrenGamesMode) childrenGamesMode.classList.remove('hidden');
}

function startRocketGame() {
    // Simple rocket building game
    const rocketParts = ['🔥', '🚀', '⭐', '🛰️'];
    const correctOrder = ['⭐', '🛰️', '🚀', '🔥'];
    
    let userOrder = [];
    let gameComplete = false;
    
    function showRocketGame() {
        const gameHTML = `
            <div style="background: linear-gradient(135deg, #87CEEB, #98FB98); padding: 2rem; border-radius: 20px; text-align: center; font-family: 'Comic Sans MS', cursive;">
                <h2 style="color: #FF1493; margin-bottom: 1rem;">🚀 Build a Rocket! 🚀</h2>
                <p style="color: #4B0082; margin-bottom: 1rem;">Drag the parts in the right order from top to bottom!</p>
                <div style="margin: 1rem 0;">
                    <div style="font-size: 2rem; margin: 0.5rem;">⭐ Satellite</div>
                    <div style="font-size: 2rem; margin: 0.5rem;">🛰️ Command Module</div>
                    <div style="font-size: 2rem; margin: 0.5rem;">🚀 Rocket Body</div>
                    <div style="font-size: 2rem; margin: 0.5rem;">🔥 Engines</div>
                </div>
                <p style="color: #4B0082; margin: 1rem 0;">Click them in order from top to bottom!</p>
                <div id="rocketBuild" style="font-size: 3rem; margin: 1rem 0; min-height: 200px; border: 2px dashed #FF69B4; border-radius: 10px; padding: 1rem;">
                    Click parts to build your rocket!
                </div>
                <button onclick="resetRocketGame()" style="background: #FF69B4; color: white; border: none; padding: 10px 20px; border-radius: 15px; font-size: 1rem; cursor: pointer; margin: 0.5rem;">🔄 Reset</button>
                <button onclick="closeRocketGame()" style="background: #4caf50; color: white; border: none; padding: 10px 20px; border-radius: 15px; font-size: 1rem; cursor: pointer; margin: 0.5rem;">🏠 Back to Games</button>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.id = 'rocketGameOverlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: rgba(0,0,0,0.8); z-index: 3000; display: flex; 
            align-items: center; justify-content: center; padding: 1rem;
        `;
        overlay.innerHTML = gameHTML;
        document.body.appendChild(overlay);
        
        // Add click handlers for rocket parts
        const parts = overlay.querySelectorAll('div[style*="font-size: 2rem"]');
        parts.forEach((part, index) => {
            part.style.cursor = 'pointer';
            part.addEventListener('click', () => addRocketPart(rocketParts[index]));
        });
    }
    
    function addRocketPart(part) {
        if (gameComplete) return;
        
        userOrder.push(part);
        const buildArea = document.getElementById('rocketBuild');
        if (buildArea) {
            buildArea.innerHTML = userOrder.join('<br>');
            
            if (userOrder.length === correctOrder.length) {
                if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
                    buildArea.innerHTML += '<br><br>🎉 Perfect! Your rocket is ready for launch! 🚀';
                    showChildrenConfetti();
                    gameComplete = true;
                } else {
                    buildArea.innerHTML += '<br><br>🤔 Hmm, try a different order! The satellite goes on top!';
                    setTimeout(() => {
                        userOrder = [];
                        buildArea.innerHTML = 'Click parts to build your rocket!';
                    }, 2000);
                }
            }
        }
    }
    
    window.resetRocketGame = function() {
        userOrder = [];
        gameComplete = false;
        const buildArea = document.getElementById('rocketBuild');
        if (buildArea) buildArea.innerHTML = 'Click parts to build your rocket!';
    };
    
    window.closeRocketGame = function() {
        const overlay = document.getElementById('rocketGameOverlay');
        if (overlay) document.body.removeChild(overlay);
        delete window.resetRocketGame;
        delete window.closeRocketGame;
    };
    
    showRocketGame();
}

function startSolarSystemGame() {
    // Simple solar system ordering game
    const planets = ['☀️', '☿️', '♀️', '🌍', '♂️', '🪐', '🌌', '🔵', '❄️'];
    const planetNames = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    let userOrder = [];
    
    function showSolarSystemGame() {
        const gameHTML = `
            <div style="background: linear-gradient(135deg, #E6E6FA, #F0F8FF); padding: 2rem; border-radius: 20px; text-align: center; font-family: 'Comic Sans MS', cursive; max-height: 80vh; overflow-y: auto;">
                <h2 style="color: #FF1493; margin-bottom: 1rem;">🌌 Solar System Puzzle! 🌌</h2>
                <p style="color: #4B0082; margin-bottom: 1rem;">Put the planets in order from the Sun!</p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 1rem 0;">
                    ${planets.map((planet, index) => 
                        `<button onclick="addPlanet('${planet}', '${planetNames[index]}')" 
                         style="font-size: 2rem; padding: 10px; border: 2px solid #FF69B4; border-radius: 10px; background: white; cursor: pointer; margin: 5px;">
                         ${planet}<br><small style="font-size: 0.5rem;">${planetNames[index]}</small>
                        </button>`
                    ).join('')}
                </div>
                <div id="solarSystemBuild" style="font-size: 2rem; margin: 1rem 0; min-height: 100px; border: 2px dashed #9370DB; border-radius: 10px; padding: 1rem; background: #000; color: white;">
                    Click planets to add them in order!
                </div>
                <button onclick="resetSolarSystem()" style="background: #FF69B4; color: white; border: none; padding: 10px 20px; border-radius: 15px; font-size: 1rem; cursor: pointer; margin: 0.5rem;">🔄 Reset</button>
                <button onclick="closeSolarSystemGame()" style="background: #4caf50; color: white; border: none; padding: 10px 20px; border-radius: 15px; font-size: 1rem; cursor: pointer; margin: 0.5rem;">🏠 Back to Games</button>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.id = 'solarSystemGameOverlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: rgba(0,0,0,0.8); z-index: 3000; display: flex; 
            align-items: center; justify-content: center; padding: 1rem;
        `;
        overlay.innerHTML = gameHTML;
        document.body.appendChild(overlay);
    }
    
    window.addPlanet = function(planet, name) {
        userOrder.push({planet, name});
        const buildArea = document.getElementById('solarSystemBuild');
        if (buildArea) {
            buildArea.innerHTML = userOrder.map(p => p.planet).join(' ');
            
            if (userOrder.length === planets.length) {
                const correct = userOrder.every((p, i) => p.planet === planets[i]);
                if (correct) {
                    buildArea.innerHTML += '<br><br>🎉 Perfect! You know the solar system! 🌟';
                    showChildrenConfetti();
                } else {
                    buildArea.innerHTML += '<br><br>🤔 Close! Remember: Mercury is closest to the Sun!';
                    setTimeout(() => {
                        userOrder = [];
                        buildArea.innerHTML = 'Click planets to add them in order!';
                    }, 3000);
                }
            }
        }
    };
    
    window.resetSolarSystem = function() {
        userOrder = [];
        const buildArea = document.getElementById('solarSystemBuild');
        if (buildArea) buildArea.innerHTML = 'Click planets to add them in order!';
    };
    
    window.closeSolarSystemGame = function() {
        const overlay = document.getElementById('solarSystemGameOverlay');
        if (overlay) document.body.removeChild(overlay);
        delete window.addPlanet;
        delete window.resetSolarSystem;
        delete window.closeSolarSystemGame;
    };
    
    showSolarSystemGame();
}

// ================================
// CHILDREN'S STORY MODE FUNCTIONS
// ================================

function startChildrenStory() {
    hideAllChildrenScreens();
    const childrenStoryMode = document.getElementById('childrenStoryMode');
    if (childrenStoryMode) childrenStoryMode.classList.remove('hidden');
    
    currentStoryStep = 0;
    displayStoryStep();
    
    // Setup back button
    const backToChildrenMenuFromStory = document.getElementById('backToChildrenMenuFromStory');
    if (backToChildrenMenuFromStory) {
        backToChildrenMenuFromStory.removeEventListener('click', backToChildrenMainMenu);
        backToChildrenMenuFromStory.addEventListener('click', backToChildrenMainMenu);
    }
}

function displayStoryStep() {
    const storyData = spaceStoryData.find(story => story.step === currentStoryStep);
    if (!storyData) return;
    
    const illustrationElement = document.getElementById('storyIllustration');
    const textElement = document.getElementById('storyText');
    const choicesElement = document.getElementById('storyChoices');
    
    if (illustrationElement) illustrationElement.textContent = storyData.illustration;
    if (textElement) textElement.textContent = storyData.text;
    
    if (choicesElement && storyData.choices) {
        choicesElement.innerHTML = '';
        storyData.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'story-choice-btn';
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                if (choice.next === -1) {
                    backToChildrenMainMenu();
                } else {
                    currentStoryStep = choice.next;
                    displayStoryStep();
                    updateStoryProgress();
                }
            });
            choicesElement.appendChild(button);
        });
    }
    
    updateStoryProgress();
}

function updateStoryProgress() {
    const planetStops = document.querySelectorAll('.planet-stop');
    planetStops.forEach((stop, index) => {
        stop.classList.remove('active');
        if (currentStoryStep >= index * 2) {
            stop.classList.add('active');
        }
    });
}

// ================================
// CHILDREN'S VIDEOS MODE FUNCTIONS
// ================================

function startChildrenVideos() {
    hideAllChildrenScreens();
    const childrenVideosMode = document.getElementById('childrenVideosMode');
    if (childrenVideosMode) childrenVideosMode.classList.remove('hidden');
    
    setupChildrenVideosEventListeners();
}

function setupChildrenVideosEventListeners() {
    const backToChildrenMenuFromVideos = document.getElementById('backToChildrenMenuFromVideos');
    if (backToChildrenMenuFromVideos) {
        backToChildrenMenuFromVideos.removeEventListener('click', backToChildrenMainMenu);
        backToChildrenMenuFromVideos.addEventListener('click', backToChildrenMainMenu);
    }
    
    // Setup video card click handlers
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.removeEventListener('click', handleVideoClick);
        card.addEventListener('click', handleVideoClick);
    });
}

function handleVideoClick(event) {
    const videoCard = event.currentTarget;
    const videoUrl = videoCard.getAttribute('data-video-url');
    
    if (videoUrl && videoUrl !== 'YOUTUBE_LINK_1' && videoUrl !== 'YOUTUBE_LINK_2' && 
        videoUrl !== 'YOUTUBE_LINK_3' && videoUrl !== 'YOUTUBE_LINK_4' && videoUrl !== 'YOUTUBE_LINK_5') {
        // Open YouTube video in new tab
        window.open(videoUrl, '_blank');
    } else {
        // Show message if video link not set yet
        alert('🎬 Video coming soon! Ask your grown-up to add the video link.');
    }
}

// ================================
// MAIN QUIZ MODE FUNCTIONS
// ================================

function startQuizMode() {
    const quizOverlay = document.getElementById('quizOverlay');
    const difficultySelection = document.getElementById('difficultySelection');
    const quizGame = document.getElementById('quizGame');
    const quizResults = document.getElementById('quizResults');
    
    if (quizOverlay) quizOverlay.classList.remove('hidden');
    if (difficultySelection) difficultySelection.classList.remove('hidden');
    if (quizGame) quizGame.classList.add('hidden');
    if (quizResults) quizResults.classList.add('hidden');
    
    setupQuizEventListeners();
}

function setupQuizEventListeners() {
    // Difficulty selection
    const beginnerBtn = document.getElementById('beginnerBtn');
    const intermediateBtn = document.getElementById('intermediateBtn');
    const advancedBtn = document.getElementById('advancedBtn');
    
    if (beginnerBtn) beginnerBtn.addEventListener('click', () => startQuizWithDifficulty('beginner'));
    if (intermediateBtn) intermediateBtn.addEventListener('click', () => startQuizWithDifficulty('intermediate'));
    if (advancedBtn) advancedBtn.addEventListener('click', () => startQuizWithDifficulty('advanced'));
    
    // Quiz game controls
    const mythBtn = document.getElementById('mythBtn');
    const factBtn = document.getElementById('factBtn');
    const nextBtn = document.getElementById('nextQuizBtn');
    const exitBtn = document.getElementById('exitQuizBtn');
    const backToMenuBtn = document.getElementById('backToMenuBtn');
    
    if (mythBtn) mythBtn.addEventListener('click', () => answerQuiz(false));
    if (factBtn) factBtn.addEventListener('click', () => answerQuiz(true));
    if (nextBtn) nextBtn.addEventListener('click', nextQuizQuestion);
    if (exitBtn) exitBtn.addEventListener('click', exitQuizMode);
    if (backToMenuBtn) backToMenuBtn.addEventListener('click', backToQuizMenu);
    
    // Quiz results controls
    const retryBtn = document.getElementById('retryQuizBtn');
    const newDifficultyBtn = document.getElementById('newDifficultyBtn');
    const exitResultsBtn = document.getElementById('exitResultsBtn');
    
    if (retryBtn) retryBtn.addEventListener('click', () => startQuizWithDifficulty(currentDifficulty));
    if (newDifficultyBtn) newDifficultyBtn.addEventListener('click', backToQuizMenu);
    if (exitResultsBtn) exitResultsBtn.addEventListener('click', exitQuizMode);
}

function startQuizWithDifficulty(difficulty) {
    currentDifficulty = difficulty;
    quizMode = true;
    
    // Filter questions by difficulty and shuffle
    const difficultyQuestions = spaceMythsData.filter(q => q.difficulty === difficulty);
    quizData = [...difficultyQuestions].sort(() => Math.random() - 0.5).slice(0, 15);
    
    currentQuizIndex = 0;
    quizScore = 0;
    quizTimer = 60;
    quizStartTime = Date.now();
    
    // Show quiz game screen
    const difficultySelection = document.getElementById('difficultySelection');
    const quizGame = document.getElementById('quizGame');
    
    if (difficultySelection) difficultySelection.classList.add('hidden');
    if (quizGame) quizGame.classList.remove('hidden');
    
    // Update quiz title based on difficulty
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle) {
        const titles = {
            beginner: '🟢 Beginner Quiz',
            intermediate: '🟡 Intermediate Quiz', 
            advanced: '🔴 Advanced Quiz'
        };
        quizTitle.textContent = titles[difficulty];
    }
    
    // Start timer
    startQuizTimer();
    
    // Display first question
    updateQuizDisplay();
}

function startQuizTimer() {
    const timerElement = document.getElementById('quizTimer');
    
    quizTimerInterval = setInterval(() => {
        quizTimer--;
        
        if (timerElement) {
            timerElement.textContent = quizTimer;
            
            // Add warning class when time is running low
            if (quizTimer <= 10) {
                timerElement.parentElement.classList.add('warning');
            }
        }
        
        // Auto-submit when time runs out
        if (quizTimer <= 0) {
            clearInterval(quizTimerInterval);
            showQuizResults();
        }
    }, 1000);
}

function updateQuizDisplay() {
    if (currentQuizIndex >= quizData.length) {
        showQuizResults();
        return;
    }
    
    const currentData = quizData[currentQuizIndex];
    const quizStatement = document.getElementById('quizStatement');
    const quizHint = document.getElementById('quizHint');
    const quizButtons = document.getElementById('quizButtons');
    const currentQuestion = document.getElementById('currentQuestion');
    const quizScoreElement = document.getElementById('quizScore');
    
    // Update question counter and score
    if (currentQuestion) currentQuestion.textContent = currentQuizIndex + 1;
    if (quizScoreElement) quizScoreElement.textContent = quizScore;
    
    // Display question based on type
    if (currentData.questionType === 'scenario') {
        if (quizStatement) quizStatement.textContent = currentData.scenario;
        displayMultipleChoiceButtons(currentData);
    } else if (currentData.questionType === 'multiple-choice') {
        if (quizStatement) quizStatement.textContent = currentData.myth;
        displayMultipleChoiceButtons(currentData);
    } else {
        // True/false question
        if (quizStatement) quizStatement.textContent = currentData.myth;
        displayTrueFalseButtons();
    }
    
    // Show hint for beginner level
    if (currentDifficulty === 'beginner' && currentData.hint) {
        if (quizHint) {
            quizHint.textContent = currentData.hint;
            quizHint.classList.remove('hidden');
        }
    } else {
        if (quizHint) quizHint.classList.add('hidden');
    }
}

function displayTrueFalseButtons() {
    const quizButtons = document.getElementById('quizButtons');
    if (!quizButtons) return;
    
    quizButtons.innerHTML = `
        <button id="mythBtn" class="quiz-answer-btn myth-btn">❌ MYTH</button>
        <button id="factBtn" class="quiz-answer-btn fact-btn">✅ FACT</button>
    `;
    
    // Re-attach event listeners
    document.getElementById('mythBtn').addEventListener('click', () => answerQuiz(false));
    document.getElementById('factBtn').addEventListener('click', () => answerQuiz(true));
}

function displayMultipleChoiceButtons(data) {
    const quizButtons = document.getElementById('quizButtons');
    if (!quizButtons || !data.choices) return;
    
    let buttonsHTML = '';
    data.choices.forEach((choice, index) => {
        buttonsHTML += `<button class="choice-btn" data-choice="${index}">${String.fromCharCode(65 + index)}. ${choice}</button>`;
    });
    
    quizButtons.innerHTML = buttonsHTML;
    
    // Attach event listeners to choice buttons
    quizButtons.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const choiceIndex = parseInt(e.target.getAttribute('data-choice'));
            answerMultipleChoice(choiceIndex);
        });
    });
}

function answerQuiz(userAnsweredTrue) {
    const currentData = quizData[currentQuizIndex];
    const correct = userAnsweredTrue === currentData.isActuallyTrue;
    
    updateScore(correct);
    showQuizResult(correct, currentData);
}

function answerMultipleChoice(choiceIndex) {
    const currentData = quizData[currentQuizIndex];
    const correct = choiceIndex === currentData.correctChoice;
    
    updateScore(correct);
    showQuizResult(correct, currentData);
}

function updateScore(correct) {
    if (correct) {
        // Scoring system based on difficulty
        const points = {
            beginner: 1,
            intermediate: 2,
            advanced: 3
        };
        quizScore += points[currentDifficulty];
        showConfetti();
    } else {
        // Penalty for wrong answers (except beginner)
        const penalties = {
            beginner: 0,
            intermediate: -1,
            advanced: -2
        };
        quizScore += penalties[currentDifficulty];
        quizScore = Math.max(0, quizScore); // Don't go below 0
    }
}

function showQuizResult(correct, data) {
    const quizResult = document.getElementById('quizResult');
    const resultText = document.getElementById('resultText');
    const resultExplanation = document.getElementById('resultExplanation');
    const quizButtons = document.getElementById('quizButtons');
    
    // Disable all buttons
    if (quizButtons) {
        quizButtons.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
        });
    }
    
    if (quizResult) {
        quizResult.classList.remove('hidden', 'correct', 'incorrect');
        quizResult.classList.add(correct ? 'correct' : 'incorrect');
    }
    
    if (resultText) resultText.textContent = correct ? '🎉 Correct!' : '❌ Incorrect!';
    
    // Show explanation
    let explanation = data.fact;
    if (data.explanation) {
        explanation = data.explanation;
    }
    if (resultExplanation) resultExplanation.textContent = explanation;
    
    if (quizResult) quizResult.classList.remove('hidden');
}

function nextQuizQuestion() {
    currentQuizIndex++;
    const quizButtons = document.getElementById('quizButtons');
    const quizResult = document.getElementById('quizResult');
    
    // Re-enable buttons
    if (quizButtons) {
        quizButtons.querySelectorAll('button').forEach(btn => {
            btn.disabled = false;
        });
    }
    
    if (quizResult) quizResult.classList.add('hidden');
    
    updateQuizDisplay();
}

async function showQuizResults() {
    // Stop timer
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    
    const quizGame = document.getElementById('quizGame');
    const quizResults = document.getElementById('quizResults');
    const finalScore = document.getElementById('finalScore');
    const scoreBreakdown = document.getElementById('scoreBreakdown');
    const performanceMessage = document.getElementById('performanceMessage');
    
    if (quizGame) quizGame.classList.add('hidden');
    if (quizResults) quizResults.classList.remove('hidden');
    
    // Calculate results
    const maxPossibleScore = {
        beginner: 15,
        intermediate: 30,
        advanced: 45
    };
    
    const percentage = Math.round((quizScore / maxPossibleScore[currentDifficulty]) * 100);
    const timeElapsed = Math.round((Date.now() - quizStartTime) / 1000);
    
    // Save quiz score to Supabase if user is logged in
    if (currentUser) {
        await saveQuizScore(currentDifficulty, quizScore, quizData.length, timeElapsed);
    }
    
    // Display final score
    if (finalScore) {
        finalScore.textContent = `${quizScore}/${maxPossibleScore[currentDifficulty]} (${percentage}%)`;
    }
    
    // Display breakdown
    if (scoreBreakdown) {
        scoreBreakdown.innerHTML = `
            <div>Questions Answered: ${currentQuizIndex}/${quizData.length}</div>
            <div>Time Taken: ${timeElapsed} seconds</div>
            <div>Difficulty: ${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)}</div>
        `;
    }
    
    // Performance message
    if (performanceMessage) {
        let message = '';
        let className = '';
        
        if (percentage >= 80) {
            message = '🌟 Excellent! You\'re a space expert!';
            className = 'excellent';
        } else if (percentage >= 60) {
            message = '👍 Good job! Keep exploring space facts!';
            className = 'good';
        } else {
            message = '📚 Keep learning! Space is full of surprises!';
            className = 'needs-improvement';
        }
        
        performanceMessage.textContent = message;
        performanceMessage.className = `performance-message ${className}`;
    }
    
    // Show confetti for good performance
    if (percentage >= 80) {
        setTimeout(showConfetti, 500);
    }
}

function backToQuizMenu() {
    const difficultySelection = document.getElementById('difficultySelection');
    const quizGame = document.getElementById('quizGame');
    const quizResults = document.getElementById('quizResults');
    
    // Stop timer if running
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    
    if (difficultySelection) difficultySelection.classList.remove('hidden');
    if (quizGame) quizGame.classList.add('hidden');
    if (quizResults) quizResults.classList.add('hidden');
    
    // Reset quiz state
    quizMode = false;
    currentDifficulty = '';
    quizData = [];
    currentQuizIndex = 0;
    quizScore = 0;
    quizTimer = 60;
}

function exitQuizMode() {
    const quizOverlay = document.getElementById('quizOverlay');
    
    // Stop timer if running
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    
    if (quizOverlay) quizOverlay.classList.add('hidden');
    
    // Reset quiz state
    quizMode = false;
    currentDifficulty = '';
    quizData = [];
    currentQuizIndex = 0;
    quizScore = 0;
    quizTimer = 60;
}

// Progress tracking functions
function updateProgressTracker() {
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const total = spaceMythsData.length;
    const viewed = viewedMyths.size;
    const percentage = (viewed / total) * 100;
    
    if (progressText) progressText.textContent = `Progress: ${viewed}/${total} myths explored`;
    if (progressFill) progressFill.style.width = `${percentage}%`;
}

async function saveViewedMyths() {
    localStorage.setItem('spaceMyths_viewed', JSON.stringify([...viewedMyths]));
    
    // Sync with Supabase if user is logged in
    if (currentUser && userProfile) {
        await updateUserProfile({
            viewed_myths: Array.from(viewedMyths)
        });
    }
}

function loadViewedMyths() {
    const saved = localStorage.getItem('spaceMyths_viewed');
    if (saved) {
        viewedMyths = new Set(JSON.parse(saved));
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset your progress? This will mark all myths as unviewed.')) {
        viewedMyths.clear();
        likedMyths.clear();
        localStorage.removeItem('spaceMyths_viewed');
        localStorage.removeItem('spaceMyths_liked');
        updateProgressTracker();
        generateCards();
        showSuccessMessage('Progress reset successfully!');
    }
}

// Like functionality
function toggleLike(index) {
    if (likedMyths.has(index)) {
        likedMyths.delete(index);
    } else {
        likedMyths.add(index);
    }
    saveLikedMyths();
    updateLikeButtons(index);
}

function getLikeCount(index) {
    // Simulate like counts with some base numbers
    const baseCounts = [23, 45, 67, 34, 56, 78, 12, 89, 43, 65, 32, 54, 76, 21, 87];
    const baseCount = baseCounts[index % baseCounts.length];
    return likedMyths.has(index) ? baseCount + 1 : baseCount;
}

function updateLikeButtons(index) {
    const likeButtons = document.querySelectorAll(`[data-index="${index}"].like-btn`);
    const isLiked = likedMyths.has(index);
    const likeCount = getLikeCount(index);
    
    likeButtons.forEach(btn => {
        btn.classList.toggle('liked', isLiked);
        const countSpan = btn.querySelector('.like-count');
        if (countSpan) countSpan.textContent = likeCount;
    });
}

async function saveLikedMyths() {
    localStorage.setItem('spaceMyths_liked', JSON.stringify([...likedMyths]));
    
    // Sync with Supabase if user is logged in
    if (currentUser && userProfile) {
        await updateUserProfile({
            liked_myths: Array.from(likedMyths)
        });
    }
}

function loadLikedMyths() {
    const saved = localStorage.getItem('spaceMyths_liked');
    if (saved) {
        likedMyths = new Set(JSON.parse(saved));
    }
}

// Theme toggle functionality
function toggleTheme() {
    isLightTheme = !isLightTheme;
    document.body.classList.toggle('light-theme', isLightTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = isLightTheme ? '☀️' : '🌙';
    }
    
    localStorage.setItem('spaceMyths_theme', isLightTheme ? 'light' : 'dark');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('spaceMyths_theme');
    if (savedTheme === 'light') {
        isLightTheme = true;
        document.body.classList.add('light-theme');
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
}

// Random myth functionality
function showRandomMyth() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    const randomData = filteredData[Math.floor(Math.random() * filteredData.length)];
    const cards = document.querySelectorAll('.card');
    
    // Find the card that matches our random selection
    let targetCard = null;
    cards.forEach(card => {
        const cardIndex = parseInt(card.getAttribute('data-index'));
        if (cardIndex === spaceMythsData.indexOf(randomData)) {
            targetCard = card;
        }
    });
    
    if (!targetCard) return;
    
    // Reset all cards to myth side
    cards.forEach(card => {
        card.classList.remove('flipped', 'highlighted');
    });
    
    // Scroll to and highlight the random card
    setTimeout(() => {
        targetCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        targetCard.classList.add('highlighted');
        
        // Auto-flip after highlight
        setTimeout(() => {
            targetCard.classList.add('flipped');
            targetCard.classList.remove('highlighted');
        }, 2000);
    }, 300);
}

// Share functionality
function shareMyth(index, type) {
    const data = spaceMythsData[index];
    const text = type === 'myth' ? data.myth : data.fact;
    const shareText = `🚀 Space ${type.toUpperCase()}: ${text}\n\nExplore more space facts at: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Space Myths vs Facts',
            text: shareText,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showTooltip('Copied to clipboard!', event.target);
        }).catch(() => {
            // Fallback to Twitter share
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
            window.open(twitterUrl, '_blank');
        });
    }
}

// Myth submission functionality
function openSubmitModal() {
    const submitModal = document.getElementById('submitModal');
    if (submitModal) submitModal.classList.remove('hidden');
}

function closeSubmitModal() {
    const submitModal = document.getElementById('submitModal');
    const form = document.getElementById('mythSubmissionForm');
    
    if (submitModal) submitModal.classList.add('hidden');
    if (form) form.reset();
}

function handleMythSubmission(e) {
    e.preventDefault();
    
    const mythText = document.getElementById('mythText')?.value;
    const factText = document.getElementById('factText')?.value;
    const category = document.getElementById('categorySelect')?.value;
    const submitterName = document.getElementById('submitterName')?.value || 'Anonymous';
    
    if (mythText && factText && category) {
        // In a real app, this would be sent to a server
        console.log('New myth submitted:', { mythText, factText, category, submitterName });
        showSuccessMessage('Thank you! Your myth has been submitted for review.');
        closeSubmitModal();
    }
}

// Tooltip functionality
function setupTooltips() {
    document.addEventListener('mouseenter', function(e) {
        if (e.target.closest('.card') && !e.target.closest('.card').classList.contains('flipped')) {
            showTooltip('Click to reveal the scientific fact!', e.target.closest('.card'));
        }
    }, true);
    
    document.addEventListener('mouseleave', function(e) {
        if (e.target.closest('.card')) {
            hideTooltip();
        }
    }, true);
}

function showTooltip(text, element) {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;
    
    tooltip.textContent = text;
    tooltip.classList.remove('hidden');
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) tooltip.classList.add('hidden');
}

// Utility functions
function showSuccessMessage(message) {
    // Create a temporary success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #4caf50, #8bc34a);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
        animation: slideInRight 0.3s ease-out;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 3000);
}

// Sound effects
function playFlipSound() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        
        const audioContext = new AudioContextClass();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Silently fail if Web Audio API is not supported
    }
}

// Confetti animation
function showConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#ff6b35', '#f7931e', '#64b5f6', '#42a5f5', '#4caf50', '#f093fb', '#e91e63', '#9c27b0'];
    const shapes = ['circle', 'square', 'triangle'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * 4 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 + 3,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 15,
            shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((piece, index) => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            
            if (piece.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, piece.size, 0, Math.PI * 2);
                ctx.fill();
            } else if (piece.shape === 'square') {
                ctx.fillRect(-piece.size/2, -piece.size/2, piece.size, piece.size);
            } else if (piece.shape === 'triangle') {
                ctx.beginPath();
                ctx.moveTo(0, -piece.size);
                ctx.lineTo(-piece.size, piece.size);
                ctx.lineTo(piece.size, piece.size);
                ctx.closePath();
                ctx.fill();
            }
            
            ctx.restore();
            
            // Remove confetti that's off screen
            if (piece.y > canvas.height + 10) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// ================================
// SUPABASE AUTHENTICATION FUNCTIONS
// ================================

// Initialize authentication
async function initializeAuth() {
    console.log('Initializing authentication...');
    
    // Handle email confirmation redirects
    handleEmailConfirmation();
    
    // Check for existing session
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        await handleAuthStateChange(session);
    }
    
    // Listen for auth state changes
    supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('Auth state changed:', event, session);
        await handleAuthStateChange(session);
        
        // Handle specific auth events
        if (event === 'SIGNED_IN') {
            showSuccessMessage('🚀 Welcome back, Space Explorer!');
        } else if (event === 'SIGNED_OUT') {
            showSuccessMessage('👋 See you later, Space Explorer!');
        }
    });
    
    setupAuthEventListeners();
}

// Handle email confirmation when user returns from email link
function handleEmailConfirmation() {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');
    const type = urlParams.get('type');
    
    if (type === 'signup' && accessToken) {
        // User is returning from email confirmation
        showSuccessMessage('✅ Email confirmed! Welcome to the Space Crew!');
        
        // Clean up URL parameters
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
    } else if (type === 'recovery' && accessToken) {
        // User is returning from password reset
        showPasswordResetSuccess();
    }
}

// Show password reset success and allow new password entry
function showPasswordResetSuccess() {
    alert('🔑 Password reset confirmed! You can now sign in with your new password.');
    showSignInModal();
}

// Handle authentication state changes
async function handleAuthStateChange(session) {
    if (session) {
        currentUser = session.user;
        await loadUserProfile();
        showSignedInState();
        await syncUserData();
    } else {
        currentUser = null;
        userProfile = null;
        showSignedOutState();
    }
}

// Load user profile from database
async function loadUserProfile() {
    if (!currentUser) return;
    
    try {
        const { data, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', currentUser.id)
            .single();
        
        if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
            console.error('Error loading user profile:', error);
            return;
        }
        
        if (data) {
            userProfile = data;
        } else {
            // Create new user profile
            await createUserProfile();
        }
        
        updateUserUI();
    } catch (error) {
        console.error('Error in loadUserProfile:', error);
    }
}

// Create new user profile
async function createUserProfile() {
    if (!currentUser) return;
    
    const newProfile = {
        user_id: currentUser.id,
        email: currentUser.email,
        display_name: currentUser.user_metadata?.display_name || 'Space Explorer',
        viewed_myths: [],
        liked_myths: [],
        quiz_scores: [],
        total_quizzes: 0,
        best_score: 0,
        games_played: 0,
        theme_preference: 'dark',
        created_at: new Date().toISOString()
    };
    
    try {
        const { data, error } = await supabase
            .from('user_profiles')
            .insert([newProfile])
            .select()
            .single();
        
        if (error) {
            console.error('Error creating user profile:', error);
            return;
        }
        
        userProfile = data;
        console.log('User profile created:', userProfile);
    } catch (error) {
        console.error('Error in createUserProfile:', error);
    }
}

// Sync user data with Supabase
async function syncUserData() {
    if (!currentUser || !userProfile) return;
    
    try {
        // Sync viewed myths
        const localViewedMyths = Array.from(viewedMyths);
        const serverViewedMyths = userProfile.viewed_myths || [];
        const mergedViewedMyths = [...new Set([...localViewedMyths, ...serverViewedMyths])];
        
        // Sync liked myths
        const localLikedMyths = Array.from(likedMyths);
        const serverLikedMyths = userProfile.liked_myths || [];
        const mergedLikedMyths = [...new Set([...localLikedMyths, ...serverLikedMyths])];
        
        // Update local state
        viewedMyths = new Set(mergedViewedMyths);
        likedMyths = new Set(mergedLikedMyths);
        
        // Update server
        await updateUserProfile({
            viewed_myths: mergedViewedMyths,
            liked_myths: mergedLikedMyths
        });
        
        // Update UI
        updateProgressTracker();
        generateCards();
        
        console.log('User data synced successfully');
    } catch (error) {
        console.error('Error syncing user data:', error);
    }
}

// Update user profile in database
async function updateUserProfile(updates) {
    if (!currentUser || !userProfile) return;
    
    try {
        const { data, error } = await supabase
            .from('user_profiles')
            .update(updates)
            .eq('user_id', currentUser.id)
            .select()
            .single();
        
        if (error) {
            console.error('Error updating user profile:', error);
            return;
        }
        
        userProfile = { ...userProfile, ...data };
        updateUserUI();
    } catch (error) {
        console.error('Error in updateUserProfile:', error);
    }
}

// Save quiz score
async function saveQuizScore(difficulty, score, totalQuestions, timeElapsed) {
    if (!currentUser || !userProfile) return;
    
    const quizResult = {
        difficulty,
        score,
        total_questions: totalQuestions,
        time_elapsed: timeElapsed,
        date: new Date().toISOString()
    };
    
    const updatedQuizScores = [...(userProfile.quiz_scores || []), quizResult];
    const newBestScore = Math.max(userProfile.best_score || 0, score);
    const newTotalQuizzes = (userProfile.total_quizzes || 0) + 1;
    
    await updateUserProfile({
        quiz_scores: updatedQuizScores,
        best_score: newBestScore,
        total_quizzes: newTotalQuizzes
    });
}

// Save game progress
async function saveGameProgress(gameType) {
    if (!currentUser || !userProfile) return;
    
    const newGamesPlayed = (userProfile.games_played || 0) + 1;
    
    await updateUserProfile({
        games_played: newGamesPlayed
    });
}

// Show signed in state
function showSignedInState() {
    const signedOutState = document.getElementById('signedOutState');
    const signedInState = document.getElementById('signedInState');
    
    if (signedOutState) signedOutState.classList.add('hidden');
    if (signedInState) signedInState.classList.remove('hidden');
}

// Show signed out state
function showSignedOutState() {
    const signedOutState = document.getElementById('signedOutState');
    const signedInState = document.getElementById('signedInState');
    
    if (signedOutState) signedOutState.classList.remove('hidden');
    if (signedInState) signedInState.classList.add('hidden');
}

// Update user UI elements
function updateUserUI() {
    if (!currentUser || !userProfile) return;
    
    const userEmail = document.getElementById('userEmail');
    const userProgress = document.getElementById('userProgress');
    const userScore = document.getElementById('userScore');
    
    if (userEmail) userEmail.textContent = currentUser.email;
    if (userProgress) userProgress.textContent = `Progress: ${viewedMyths.size}/${spaceMythsData.length}`;
    if (userScore) userScore.textContent = `Best Score: ${userProfile.best_score || 0}`;
}

// Setup authentication event listeners
function setupAuthEventListeners() {
    // Sign in/up buttons
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    
    if (signInBtn) signInBtn.addEventListener('click', showSignInModal);
    if (signUpBtn) signUpBtn.addEventListener('click', showSignUpModal);
    
    // Modal close buttons
    const closeSignInModal = document.getElementById('closeSignInModal');
    const closeSignUpModal = document.getElementById('closeSignUpModal');
    const closeProfileModal = document.getElementById('closeProfileModal');
    const closeResetModal = document.getElementById('closeResetModal');
    
    if (closeSignInModal) closeSignInModal.addEventListener('click', hideSignInModal);
    if (closeSignUpModal) closeSignUpModal.addEventListener('click', hideSignUpModal);
    if (closeProfileModal) closeProfileModal.addEventListener('click', hideProfileModal);
    if (closeResetModal) closeResetModal.addEventListener('click', hideResetModal);
    
    // Form submissions
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    
    if (signInForm) signInForm.addEventListener('submit', handleSignIn);
    if (signUpForm) signUpForm.addEventListener('submit', handleSignUp);
    if (resetPasswordForm) resetPasswordForm.addEventListener('submit', handlePasswordReset);
    
    // Modal switches
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    const backToSignIn = document.getElementById('backToSignIn');
    
    if (switchToSignUp) switchToSignUp.addEventListener('click', () => {
        hideSignInModal();
        showSignUpModal();
    });
    if (switchToSignIn) switchToSignIn.addEventListener('click', () => {
        hideSignUpModal();
        showSignInModal();
    });
    if (forgotPasswordBtn) forgotPasswordBtn.addEventListener('click', () => {
        hideSignInModal();
        showResetModal();
    });
    if (backToSignIn) backToSignIn.addEventListener('click', () => {
        hideResetModal();
        showSignInModal();
    });
    
    // User menu
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    const profileBtn = document.getElementById('profileBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    
    if (userMenuBtn) userMenuBtn.addEventListener('click', toggleUserDropdown);
    if (profileBtn) profileBtn.addEventListener('click', showProfileModal);
    if (settingsBtn) settingsBtn.addEventListener('click', () => alert('Settings coming soon!'));
    if (signOutBtn) signOutBtn.addEventListener('click', handleSignOut);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (userDropdown && !e.target.closest('.user-profile')) {
            userDropdown.classList.add('hidden');
        }
    });
}

// Modal functions
function showSignInModal() {
    const modal = document.getElementById('signInModal');
    if (modal) modal.classList.remove('hidden');
}

function hideSignInModal() {
    const modal = document.getElementById('signInModal');
    if (modal) modal.classList.add('hidden');
}

function showSignUpModal() {
    const modal = document.getElementById('signUpModal');
    if (modal) modal.classList.remove('hidden');
}

function hideSignUpModal() {
    const modal = document.getElementById('signUpModal');
    if (modal) modal.classList.add('hidden');
}

function showProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.classList.remove('hidden');
    updateProfileModal();
    
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.add('hidden');
}

function hideProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.classList.add('hidden');
}

function showResetModal() {
    const modal = document.getElementById('resetPasswordModal');
    if (modal) modal.classList.remove('hidden');
}

function hideResetModal() {
    const modal = document.getElementById('resetPasswordModal');
    if (modal) modal.classList.add('hidden');
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Authentication handlers
async function handleSignIn(e) {
    e.preventDefault();
    
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) {
            alert(`Sign in failed: ${error.message}`);
            return;
        }
        
        hideSignInModal();
        showSuccessMessage('🚀 Welcome back, Space Explorer!');
    } catch (error) {
        console.error('Sign in error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}

async function handleSignUp(e) {
    e.preventDefault();
    
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const displayName = document.getElementById('displayName').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    try {
        // For localhost development, we'll configure options to handle email confirmation
        const signUpOptions = {
            email,
            password,
            options: {
                data: {
                    display_name: displayName || 'Space Explorer'
                },
                // Configure redirect URL for localhost
                emailRedirectTo: window.location.origin
            }
        };
        
        const { data, error } = await supabase.auth.signUp(signUpOptions);
        
        if (error) {
            alert(`Sign up failed: ${error.message}`);
            return;
        }
        
        hideSignUpModal();
        
        // Check if email confirmation is required
        if (data.user && !data.user.email_confirmed_at) {
            showSuccessMessage('⭐ Welcome to the Space Crew! Please check your email to verify your account.');
        } else {
            showSuccessMessage('⭐ Welcome to the Space Crew! You can start exploring right away!');
        }
    } catch (error) {
        console.error('Sign up error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}

async function handlePasswordReset(e) {
    e.preventDefault();
    
    const email = document.getElementById('resetEmail').value;
    
    try {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        
        if (error) {
            alert(`Password reset failed: ${error.message}`);
            return;
        }
        
        hideResetModal();
        showSuccessMessage('🔑 Password reset link sent to your email!');
    } catch (error) {
        console.error('Password reset error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}

async function handleSignOut() {
    try {
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            console.error('Sign out error:', error);
            return;
        }
        
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) dropdown.classList.add('hidden');
        
        showSuccessMessage('👋 See you later, Space Explorer!');
    } catch (error) {
        console.error('Sign out error:', error);
    }
}

// Update profile modal
function updateProfileModal() {
    if (!userProfile) return;
    
    const profileProgress = document.getElementById('profileProgress');
    const profileBestScore = document.getElementById('profileBestScore');
    const profileTotalQuizzes = document.getElementById('profileTotalQuizzes');
    const profileGamesPlayed = document.getElementById('profileGamesPlayed');
    
    if (profileProgress) profileProgress.textContent = `${viewedMyths.size}/${spaceMythsData.length}`;
    if (profileBestScore) profileBestScore.textContent = userProfile.best_score || 0;
    if (profileTotalQuizzes) profileTotalQuizzes.textContent = userProfile.total_quizzes || 0;
    if (profileGamesPlayed) profileGamesPlayed.textContent = userProfile.games_played || 0;
    
    updateAchievements();
}

// Update achievements
function updateAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    if (!achievementsList || !userProfile) return;
    
    const achievements = [
        {
            id: 'first_myth',
            icon: '🌟',
            title: 'First Discovery',
            description: 'Explored your first space myth',
            unlocked: viewedMyths.size >= 1
        },
        {
            id: 'myth_explorer',
            icon: '🔍',
            title: 'Myth Explorer',
            description: 'Explored 5 space myths',
            unlocked: viewedMyths.size >= 5
        },
        {
            id: 'space_expert',
            icon: '🚀',
            title: 'Space Expert',
            description: 'Explored all space myths',
            unlocked: viewedMyths.size >= spaceMythsData.length
        },
        {
            id: 'quiz_master',
            icon: '🧠',
            title: 'Quiz Master',
            description: 'Completed 10 quizzes',
            unlocked: (userProfile.total_quizzes || 0) >= 10
        },
        {
            id: 'high_scorer',
            icon: '🏆',
            title: 'High Scorer',
            description: 'Achieved a quiz score of 30+',
            unlocked: (userProfile.best_score || 0) >= 30
        },
        {
            id: 'game_player',
            icon: '🎮',
            title: 'Game Player',
            description: 'Played 5 games',
            unlocked: (userProfile.games_played || 0) >= 5
        }
    ];
    
    achievementsList.innerHTML = achievements.map(achievement => `
        <div class="achievement-item ${achievement.unlocked ? 'unlocked' : ''}">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-desc">${achievement.description}</div>
            </div>
        </div>
    `).join('');
}