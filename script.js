// Complete Space Myths vs Facts Application

// Space myths and facts data with all required information
const spaceMythsData = [
    {
        myth: "There's no gravity in space",
        fact: "There is gravity everywhere in space! Astronauts float because they are in continuous free fall while orbiting Earth at 17,500 mph.",
        mythIcon: "🌌",
        factIcon: "🌍",
        category: "astronauts",
        keywords: ["gravity", "space", "astronauts", "float", "weightless", "orbit"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-microgravity-58.html",
        isActuallyTrue: false
    },
    {
        myth: "The Great Wall of China is visible from space",
        fact: "This is false! The Great Wall is not visible from space with the naked eye. Many natural features like rivers and mountains are more visible.",
        mythIcon: "🏯",
        factIcon: "🛰️",
        category: "general",
        keywords: ["great wall", "china", "visible", "space", "earth", "naked eye"],
        nasaLink: "https://www.nasa.gov/vision/space/workinginspace/great_wall.html",
        isActuallyTrue: false
    },
    {
        myth: "Space is completely silent",
        fact: "True! Sound needs matter to travel through, and space is mostly a vacuum. However, spacecraft have air inside where sound can travel.",
        mythIcon: "🔇",
        factIcon: "🔊",
        category: "general",
        keywords: ["sound", "silent", "vacuum", "space", "noise", "matter"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-sound-58.html",
        isActuallyTrue: true
    },
    {
        myth: "The Sun is yellow",
        fact: "The Sun is actually white! It appears yellow from Earth because our atmosphere scatters blue light more than other colors.",
        mythIcon: "🟡",
        factIcon: "⚪",
        category: "general",
        keywords: ["sun", "yellow", "white", "color", "atmosphere", "light"],
        nasaLink: "https://www.nasa.gov/sun",
        isActuallyTrue: false
    },
    {
        myth: "Astronauts' blood boils in space",
        fact: "Blood won't boil in space suits! Modern suits maintain pressure. Even in a vacuum, blood stays liquid due to skin and blood vessel pressure.",
        mythIcon: "🩸",
        factIcon: "👨‍🚀",
        category: "astronauts",
        keywords: ["blood", "boil", "astronauts", "space suit", "pressure", "vacuum"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-spacesuit-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Black holes suck everything in",
        fact: "Black holes don't 'suck'! They have strong gravity, but you'd need to cross the event horizon to be trapped. You could orbit one safely.",
        mythIcon: "🕳️",
        factIcon: "🌀",
        category: "black-holes",
        keywords: ["black holes", "suck", "gravity", "event horizon", "orbit", "trapped"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-black-hole-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Meteors are hot when they land",
        fact: "Most meteorites are cold when found! They're frozen in space and only the surface heats up during atmospheric entry.",
        mythIcon: "🔥",
        factIcon: "🧊",
        category: "general",
        keywords: ["meteors", "meteorites", "hot", "cold", "temperature", "atmosphere"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-meteor-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Mars is always closer to Earth than other planets",
        fact: "Venus is usually our closest planetary neighbor! Mars is only closest during specific alignments every 26 months.",
        mythIcon: "🔴",
        factIcon: "🪐",
        category: "planets",
        keywords: ["mars", "earth", "venus", "closest", "planets", "distance", "alignment"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-mars-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Astronauts float because there's no air in space",
        fact: "Astronauts float due to weightlessness, not lack of air! They're in constant free fall around Earth, creating microgravity conditions.",
        mythIcon: "💨",
        factIcon: "🚀",
        category: "astronauts",
        keywords: ["astronauts", "float", "air", "weightless", "microgravity", "free fall"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-microgravity-58.html",
        isActuallyTrue: false
    },
    {
        myth: "The Moon has a dark side that never sees sunlight",
        fact: "The 'dark side' gets just as much sunlight! It's called the 'far side' because we never see it from Earth due to tidal locking.",
        mythIcon: "🌑",
        factIcon: "🌕",
        category: "planets",
        keywords: ["moon", "dark side", "far side", "sunlight", "tidal locking", "earth"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-the-moon-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Space is freezing cold everywhere",
        fact: "Space temperature varies wildly! Near the Sun it's extremely hot, while in deep space it approaches absolute zero (-273°C).",
        mythIcon: "🥶",
        factIcon: "🌡️",
        category: "general",
        keywords: ["space", "cold", "temperature", "hot", "sun", "absolute zero"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-temperature-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Rockets need to push against something to move in space",
        fact: "Rockets work by Newton's third law! They push exhaust out one way and get pushed the opposite way - no air needed.",
        mythIcon: "🚀",
        factIcon: "⚡",
        category: "space-travel",
        keywords: ["rockets", "push", "newton", "exhaust", "propulsion", "third law"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-rocket-58.html",
        isActuallyTrue: false
    },
    {
        myth: "You can see stars during the day from space",
        fact: "True! Without atmosphere to scatter sunlight, astronauts can see stars even when the Sun is visible.",
        mythIcon: "☀️",
        factIcon: "⭐",
        category: "astronauts",
        keywords: ["stars", "day", "space", "astronauts", "atmosphere", "sunlight"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-are-stars-58.html",
        isActuallyTrue: true
    },
    {
        myth: "Black holes are cosmic vacuum cleaners",
        fact: "Black holes only affect objects that get very close! If our Sun became a black hole, Earth would keep orbiting normally.",
        mythIcon: "🌪️",
        factIcon: "🕳️",
        category: "black-holes",
        keywords: ["black holes", "vacuum", "cleaner", "sun", "earth", "orbit"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-black-hole-58.html",
        isActuallyTrue: false
    },
    {
        myth: "Saturn's rings are solid",
        fact: "Saturn's rings are made of countless ice and rock particles! They range from tiny grains to house-sized chunks, all orbiting the planet.",
        mythIcon: "💍",
        factIcon: "🪨",
        category: "planets",
        keywords: ["saturn", "rings", "solid", "ice", "rock", "particles"],
        nasaLink: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-are-saturns-rings-58.html",
        isActuallyTrue: false
    }
];

// Global state management
let currentFilter = 'all';
let searchTerm = '';
let viewedMyths = new Set();
let likedMyths = new Set();
let isLightTheme = false;
let quizMode = false;
let quizData = [];
let currentQuizIndex = 0;
let quizScore = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Space Myths vs Facts - Initializing...');
    
    // Load saved data
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
    const submitBtn = document.getElementById('submitMythBtn');
    const resetBtn = document.getElementById('resetProgressBtn');
    const themeBtn = document.getElementById('themeToggle');
    
    if (randomBtn) randomBtn.addEventListener('click', showRandomMyth);
    if (quizBtn) quizBtn.addEventListener('click', startQuizMode);
    if (submitBtn) submitBtn.addEventListener('click', openSubmitModal);
    if (resetBtn) resetBtn.addEventListener('click', resetProgress);
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Quiz mode event listeners
    const mythBtn = document.getElementById('mythBtn');
    const factBtn = document.getElementById('factBtn');
    const nextBtn = document.getElementById('nextQuizBtn');
    const exitBtn = document.getElementById('exitQuizBtn');
    
    if (mythBtn) mythBtn.addEventListener('click', () => answerQuiz(false));
    if (factBtn) factBtn.addEventListener('click', () => answerQuiz(true));
    if (nextBtn) nextBtn.addEventListener('click', nextQuizQuestion);
    if (exitBtn) exitBtn.addEventListener('click', exitQuizMode);
    
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

function saveViewedMyths() {
    localStorage.setItem('spaceMyths_viewed', JSON.stringify([...viewedMyths]));
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

function saveLikedMyths() {
    localStorage.setItem('spaceMyths_liked', JSON.stringify([...likedMyths]));
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

// Quiz Mode Functions
function startQuizMode() {
    quizMode = true;
    quizData = [...spaceMythsData].sort(() => Math.random() - 0.5); // Shuffle
    currentQuizIndex = 0;
    quizScore = 0;
    
    const quizOverlay = document.getElementById('quizOverlay');
    const quizResult = document.getElementById('quizResult');
    
    if (quizOverlay) quizOverlay.classList.remove('hidden');
    if (quizResult) quizResult.classList.add('hidden');
    
    updateQuizDisplay();
}

function updateQuizDisplay() {
    const quizStatement = document.getElementById('quizStatement');
    const quizScoreElement = document.getElementById('quizScore');
    const quizTotal = document.getElementById('quizTotal');
    
    if (currentQuizIndex >= quizData.length) {
        showQuizResults();
        return;
    }
    
    const currentData = quizData[currentQuizIndex];
    if (quizStatement) quizStatement.textContent = currentData.myth;
    if (quizScoreElement) quizScoreElement.textContent = quizScore;
    if (quizTotal) quizTotal.textContent = quizData.length;
}

function answerQuiz(userAnsweredTrue) {
    const currentData = quizData[currentQuizIndex];
    const correct = userAnsweredTrue === currentData.isActuallyTrue;
    
    if (correct) {
        quizScore++;
        showConfetti();
    }
    
    showQuizResult(correct, currentData);
}

function showQuizResult(correct, data) {
    const quizResult = document.getElementById('quizResult');
    const resultText = document.getElementById('resultText');
    const resultExplanation = document.getElementById('resultExplanation');
    const quizButtons = document.querySelector('.quiz-buttons');
    
    if (quizResult) {
        quizResult.classList.remove('hidden', 'correct', 'incorrect');
        quizResult.classList.add(correct ? 'correct' : 'incorrect');
    }
    
    if (resultText) resultText.textContent = correct ? '🎉 Correct!' : '❌ Incorrect!';
    if (resultExplanation) resultExplanation.textContent = data.fact;
    if (quizButtons) quizButtons.style.display = 'none';
    if (quizResult) quizResult.classList.remove('hidden');
}

function nextQuizQuestion() {
    currentQuizIndex++;
    const quizButtons = document.querySelector('.quiz-buttons');
    const quizResult = document.getElementById('quizResult');
    
    if (quizButtons) quizButtons.style.display = 'flex';
    if (quizResult) quizResult.classList.add('hidden');
    
    updateQuizDisplay();
}

function showQuizResults() {
    const percentage = Math.round((quizScore / quizData.length) * 100);
    const resultText = document.getElementById('resultText');
    const resultExplanation = document.getElementById('resultExplanation');
    const quizButtons = document.querySelector('.quiz-buttons');
    const nextBtn = document.getElementById('nextQuizBtn');
    
    if (resultText) resultText.textContent = `🏆 Quiz Complete!`;
    if (resultExplanation) resultExplanation.textContent = `You scored ${quizScore}/${quizData.length} (${percentage}%)`;
    if (quizButtons) quizButtons.style.display = 'none';
    
    const quizResult = document.getElementById('quizResult');
    if (quizResult) quizResult.classList.remove('hidden');
    
    if (nextBtn) {
        nextBtn.textContent = 'Start New Quiz';
        nextBtn.onclick = startQuizMode;
    }
    
    if (percentage >= 80) {
        showConfetti();
    }
}

function exitQuizMode() {
    quizMode = false;
    const quizOverlay = document.getElementById('quizOverlay');
    if (quizOverlay) quizOverlay.classList.add('hidden');
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
            piece.vy += 0.1; // gravity
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            
            // Draw different shapes
            if (piece.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (piece.shape === 'triangle') {
                ctx.beginPath();
                ctx.moveTo(0, -piece.size / 2);
                ctx.lineTo(-piece.size / 2, piece.size / 2);
                ctx.lineTo(piece.size / 2, piece.size / 2);
                ctx.closePath();
                ctx.fill();
            } else {
                ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            }
            
            ctx.restore();
            
            // Remove confetti that's off screen
            if (piece.y > canvas.height + 10) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animateConfetti();
}

// Success message display
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 1002;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 500);
    }, 3000);
}

// Add CSS animations for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🌌 Space Myths vs Facts - Script loaded successfully!');