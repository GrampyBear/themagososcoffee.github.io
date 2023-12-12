// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a twinkling star
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    const size = getRandomNumber(1, 3);
    const x = getRandomNumber(0, window.innerWidth);
    const y = getRandomNumber(0, window.innerHeight);

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    document.body.appendChild(star);

    // Twinkle effect: Stars will appear and disappear randomly
    setTimeout(() => {
        star.style.opacity = 1;
    }, getRandomNumber(1000, 3000));

    setTimeout(() => {
        star.style.opacity = 0;
    }, getRandomNumber(1000, 3000));

    // Remove the star from the DOM after the twinkling effect
    setTimeout(() => {
        document.body.removeChild(star);
    }, getRandomNumber(4000, 6000));
}

// Function to create stars during night and midnight
function createStars() {
    const timeOfDay = getTimeOfDay();
    const isNightOrMidnight = timeOfDay === 'night' || timeOfDay === 'midnight';

    if (isNightOrMidnight) {
        for (let i = 0; i < 30; i++) {
            createStar();
        }
    }
}

// Call the createStars function initially
createStars();

// Call the createStars function every second for real-time updates
setInterval(createStars, 1000);
