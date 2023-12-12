// stars.js

// Get stars container
const starsContainer = document.querySelectorAll('stars-container');

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

// Generate stars dynamically for each container
function generateStars(container) {
    // Clear existing stars in the specified container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Generate random number of stars (between 10 and 15)
    const numStars = Math.floor(Math.random() * 6) + 10;

    // Generate new stars for the specified container
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px'; // Different sizes
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        star.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        container.appendChild(star);
    }
}

// Initial stars generation for each container
starContainers.forEach(container => generateStars(container));

// Generate stars in a loop for each container
setInterval(() => {
    starContainers.forEach(container => generateStars(container));
}, 5000);
