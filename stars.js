// stars.js

// Get stars container
const starsContainer = document.getElementById('stars-container');

// Update stars visibility
function updateStarsVisibility(timeOfDay) {
    const stars = document.querySelectorAll('.star');

    if (timeOfDay === 'night' || timeOfDay === 'midnight') {
        // Show stars
        starsContainer.style.display = 'block';

        // Add stars if not already added
        if (stars.length === 0) {
            generateStars();
        }
    } else {
        // Hide stars
        starsContainer.style.display = 'none';
    }
}
// Flag to track if stars have been initially generated
let starsInitialized = false;

// Generate stars dynamically
function generateStars() {
    // Clear existing stars
    while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
    }

    // Generate new stars with random initial positions
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        starsContainer.appendChild(star);
    }

    // After initial appearance, set permanent animation properties
    setTimeout(() => {
        starsContainer.style.animation = 'none'; // Disable animation for permanent state
        starsContainer.style.pointerEvents = 'auto'; // Enable pointer events to interact with content
    }, 5000); // Wait for 5 seconds before applying permanent state (adjust as needed)
}

// Initial stars generation
generateStars();

// Generate stars in a loop
setInterval(generateStars, 5000);
