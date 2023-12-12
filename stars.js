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

// Function to add stars to the sky
function addStars() {
    const bodyElement = document.body;
    const skyElement = document.createElement('div');
    skyElement.className = 'sky';

    for (let i = 0; i < 30; i++) {
        const star = createStar();
        skyElement.appendChild(star);
    }

    bodyElement.appendChild(skyElement);
}

// Function to handle star visibility based on time of day
function handleStarVisibility(timeOfDay) {
    const skyElement = document.querySelector('.sky');

    if (timeOfDay === 'night' || timeOfDay === 'midnight') {
        skyElement.style.display = 'block';
    } else {
        skyElement.style.display = 'none';
    }
}

// Update stars initially and set interval for updates
addStars();
handleStarVisibility(getTimeOfDay());
setInterval(() => handleStarVisibility(getTimeOfDay()), 1000 * 60); // Check and update every minute
    
