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
    // Clear existing stars
    while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
    }

    // Generate stars for Layer 1 (large stars)
    generateStarsInLayer(5, 'star-large', 6);

    // Generate stars for Layer 2 (medium stars)
    generateStarsInLayer(15, 'star-medium', 3);

    // Generate stars for Layer 3 (small stars)
    generateStarsInLayer(30, 'star-small', 2);
}

// Generate stars for a specific layer
function generateStarsInLayer(count, className, disappearanceDuration) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = `star ${className}`;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        starsContainer.appendChild(star);
    }

    // Apply a timeout for the fade-out effect after the initial appearance
    setTimeout(() => {
        const stars = document.querySelectorAll(`.star.${className}`);
        stars.forEach((star) => {
            star.style.opacity = 0;
        });
    }, 1000); // Adjust the timeout duration (in milliseconds) as needed
}

// Initial stars generation
generateStars();

// Generate stars in a loop
setInterval(generateStars, 5000);
