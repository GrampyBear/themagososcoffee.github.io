// stars.js

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
    star.style.top = `${getRandomNumber(0, 87)}vh`; // Adjusted top position
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

// Clear old stars
function clearOldStars() {
    const body = document.body;
    const stars = document.querySelectorAll('.star');

    // Remove stars that are outside the visible area or exceeding the limit
    stars.forEach((star, index) => {
        const rect = star.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight || index > 100) {
            body.removeChild(star);
        }
    });
}

// Check if it's night or midnight
function isNightOrMidnight(timeOfDay) {
    return timeOfDay === 'night' || timeOfDay === 'midnight';
}

// Check if it's currently midnight
function isMidnight() {
    const now = new Date();
    const hours = now.getHours();
    return hours === 0; // Midnight is at 0 hours
}

// Check if it's currently sunrise
function isSunrise(timeOfDay) {
    return timeOfDay === 'sunrise';
}

// Function to initialize stars based on the time of day
function initializeStars(timeOfDay) {
    const body = document.body;

    if (isNightOrMidnight(timeOfDay)) {
        const numNewStars = 10; // Adjust the number of new stars generated

        // Clear old stars first
        clearOldStars();

        // Append new stars, considering the limit
        const currentStars = document.querySelectorAll('.star').length;
        const starsToAdd = Math.min(numNewStars, 100 - currentStars);
        appendStars(starsToAdd);

        // Trigger twinkle immediately
        twinkleStars();

        setInterval(() => {
            // Clear old stars before appending new ones
            clearOldStars();

            // Append new stars, considering the limit
            const currentStars = document.querySelectorAll('.star').length;
            const starsToAdd = Math.min(numNewStars, 100 - currentStars);
            appendStars(starsToAdd);

            // Trigger twinkle
            twinkleStars();
        }, 10000); // Refresh stars every 10 seconds (adjust as needed)
    } else {
        // If it's not night, midnight, or sunrise, hide all stars
        const stars = document.querySelectorAll('.star');
        stars.forEach((star) => {
            body.removeChild(star);
        });
    }
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

// Update time and initialize stars
function updateTimeAndInitializeStars() {
    const timeOfDay = getTimeOfDay();
    initializeStars(timeOfDay);
}

// Update time initially and set interval for real-time updates
updateTimeAndInitializeStars();
setInterval(updateTimeAndInitializeStars, 1000); // Update every second for real-time
    
