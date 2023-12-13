// main-script.js

// Function to generate a random number within a given range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a star element
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Set random position and size
    star.style.left = `${getRandomNumber(0, 100)}vw`;
    star.style.top = `${getRandomNumber(0, 80)}vh`; // Adjusted top position to avoid the footer
    star.style.width = `${getRandomNumber(1, 3)}px`;
    star.style.height = `${getRandomNumber(1, 3)}px`;

    return star;
}

// Function to append stars to the body
function appendStars(numStars) {
    const body = document.body;
    for (let i = 0; i < numStars; i++) {
        const star = createStar();
        body.appendChild(star);
    }
}

// Function to make stars twinkle
function twinkleStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
        // Randomly toggle visibility
        if (Math.random() > 0.5) {
            star.style.opacity = '0';
        } else {
            star.style.opacity = '1';
        }
    });
}

// Check if it's night or midnight
function isNightOrMidnight(timeOfDay) {
    return timeOfDay === 'night' || timeOfDay === 'midnight';
}

// Clear old stars
function clearOldStars() {
    const body = document.body;
    const stars = document.querySelectorAll('.star');
    
    // Remove stars that are outside the visible area
    stars.forEach((star) => {
        const rect = star.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
            body.removeChild(star);
        }
    });
}

// Check time of day and initialize stars if it's night or midnight
function initializeStars(timeOfDay) {
    if (isNightOrMidnight(timeOfDay)) {
        const numNewStars = 10; // Adjust the number of new stars generated
        
        // Clear old stars first
        clearOldStars();

        // Append new stars
        appendStars(numNewStars);
        
        // Trigger twinkle immediately
        twinkleStars();

        setInterval(() => {
            // Clear old stars before appending new ones
            clearOldStars();
            
            // Append new stars
            appendStars(numNewStars);
            
            // Trigger twinkle
            twinkleStars();
        }, 10000); // Refresh stars every 10 seconds (adjust as needed)
    }
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// Get time of day
function getTimeOfDay() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 7) {
        return 'sunrise';
    } else if (hours >= 7 && hours < 11) {
        return 'morning';
    } else if (hours >= 11 && hours < 14) {
        return 'noon';
    } else if (hours >= 14 && hours < 17) {
        return 'afternoon';
    } else if (hours >= 17 && hours < 20) {
        return 'sunset';
    } else if (hours >= 20 && hours < 24) {
        return 'night';
    } else {
        return 'midnight';
    }
}

// Update time and time of day
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const bodyElement = document.body;

    const currentTime = getCurrentTime();
    const timeOfDay = getTimeOfDay();

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    currentTimeElement.textContent = `Current Time: ${currentTime}`;

    // Update background gradient based on time of day
    updateBackgroundGradient(timeOfDay);
}

// Update background gradient
function updateBackgroundGradient(timeOfDay) {
    const bodyElement = document.body;
    const gradientDuration = 5; // 5 seconds for the transition

    let gradientColors;
    switch (timeOfDay) {
        case 'sunrise':
            gradientColors = ['#FF6F00', '#FFD54F'];
            break;
        case 'morning':
            gradientColors = ['#FFD54F', '#81C784'];
            break;
        case 'noon':
            gradientColors = ['#81C784', '#4CAF50'];
            break;
        case 'afternoon':
            gradientColors = ['#4CAF50', '#FFA726'];
            break;
        case 'sunset':
            gradientColors = ['#FFA726', '#FF7043'];
            break;
        case 'night':
            gradientColors = ['#0D47A1', '#263238'];
            break;
        case 'midnight':
            gradientColors = ['#000000', '#1A237E'];
            break;
        default:
            gradientColors = ['#ffffff', '#ffffff']; // Default to white gradient
    }

    const gradientString = `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`;
    bodyElement.style.background = gradientString;
    bodyElement.style.transition = `background ${gradientDuration}s ease-in-out`;

    // Initialize stars based on the time of day
    initializeStars(timeOfDay);
}

// Update time initially and set interval for real-time updates
updateTime();
setInterval(updateTime, 1000); // Update every second for real-time
    
