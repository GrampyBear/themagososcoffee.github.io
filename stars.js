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

    // Generate new stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;

        // Assign initial random positions only if not initialized
        if (!starsInitialized) {
            const initialTop = Math.random() * window.innerHeight + 'px';
            const initialLeft = Math.random() * window.innerWidth + 'px';
            star.style.top = initialTop;
            star.style.left = initialLeft;
        }

        star.style.animationDelay = Math.random() * 5 + 's'; // Set a random delay (adjust as needed)
        starsContainer.appendChild(star);
    }

    // Set the flag to true after the initial generation
    starsInitialized = true;
}


// Initial stars generation
generateStars();

// Generate stars in a loop
setInterval(generateStars, 5000);
