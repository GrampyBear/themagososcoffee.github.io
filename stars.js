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

// Generate stars dynamically
function generateStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        starsContainer.appendChild(star);
    }
}
