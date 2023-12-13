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
    star.style.top = `${getRandomNumber(0, 100)}vh`;
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

// Check time of day and initialize stars if it's night or midnight
function initializeStars(timeOfDay) {
    if (isNightOrMidnight(timeOfDay)) {
        const numStars = 100; // Adjust the number of stars as needed
        appendStars(numStars);
        setInterval(twinkleStars, 1000); // Twinkle stars every second
    }
}

// Function to fetch time of day from the main script
function getTimeOfDay() {
    return document.getElementById('timeOfDay').textContent.split(': ')[1].toLowerCase();
}

// Initialize stars based on the time of day
initializeStars(getTimeOfDay());

// Periodically check the time of day and adjust stars
setInterval(() => {
    const newTimeOfDay = getTimeOfDay();
    const stars = document.querySelectorAll('.star');

    if (isNightOrMidnight(newTimeOfDay)) {
        // Stars should be active during the night or midnight
        stars.forEach((star) => {
            star.style.display = 'block';
        });
    } else {
        // Stars should be hidden during other times of the day
        stars.forEach((star) => {
            star.style.display = 'none';
        });
    }
}, 60000); // Check every minute (adjust as needed)
