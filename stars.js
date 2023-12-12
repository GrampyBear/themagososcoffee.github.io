// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a star element
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    const size = getRandomNumber(1, 3);
    const xPos = getRandomNumber(0, window.innerWidth);
    const yPos = getRandomNumber(0, window.innerHeight);
    const animationDuration = getRandomNumber(1, 3);

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;
    star.style.animationDuration = `${animationDuration}s`;

    document.body.appendChild(star);

    // Remove the star after animation completes
    setTimeout(() => {
        document.body.removeChild(star);
    }, animationDuration * 1000);
}

// Function to create stars during the night and midnight
function createStars() {
    const timeOfDay = getTimeOfDay();

    // Check if it's night or midnight
    if (timeOfDay === 'night' || timeOfDay === 'midnight') {
        // Create up to 30 stars
        for (let i = 0; i < 30; i++) {
            createStar();
        }
    }
}

// Execute the script when the page is loaded
window.onload = createStars;
            
