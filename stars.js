// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a star element
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    const size = getRandomNumber(1, 4);
    const duration = getRandomNumber(1, 3);

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;

    return star;
}

// Function to add stars to the body background
function addStarsToBackground() {
    const bodyElement = document.body;

    for (let i = 0; i < 30; i++) {
        const star = createStar();
        bodyElement.appendChild(star);
    }
}

// Function to handle star visibility based on time of day
function handleStarVisibility(timeOfDay) {
    const stars = document.querySelectorAll('.star');

    if (timeOfDay === 'night' || timeOfDay === 'midnight') {
        stars.forEach(star => {
            star.style.display = 'block';
        });
    } else {
        stars.forEach(star => {
            star.style.display = 'none';
        });
    }
}

// Update stars initially and set interval for updates
addStarsToBackground();
handleStarVisibility(getTimeOfDay());
setInterval(() => handleStarVisibility(getTimeOfDay()), 1000 * 60); // Check and update every minute
        
