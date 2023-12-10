// Function to update time dynamically in the navbar
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Format minutes with a leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let timeOfDay;

    if (hours >= 6 && hours < 12) {
        timeOfDay = 'sunrise';
        updateColors(timeOfDay);
        removeStars();
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'noon';
        updateColors(timeOfDay);
        removeStars();
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'sunset';
        updateColors(timeOfDay);
        removeStars();
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'dusk';
        updateColors(timeOfDay);
        if (hours === 20) {
            generateStars();
        }
    } else {
        timeOfDay = 'midnight';
        updateColors(timeOfDay);
        generateStars();
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}`;
    currentTimeElement.textContent = `Current Time: ${hours}:${minutes}`;
}

// Function to update text and background colors
function updateColors(gradientColor) {
    document.body.className = gradientColor;
    const textElements = document.querySelectorAll('.dynamic-text-color');

    // Choose appropriate text color based on background brightness
    const brightness = getBrightness(gradientColor);
    const textColor = brightness < 128 ? '#fff' : '#333';

    textElements.forEach((element) => {
        element.style.color = textColor;
    });
}

// Function to get brightness from a hex color
function getBrightness(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Function to toggle visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Function to generate twinkling stars
function generateStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';

    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);

    // Hide other elements while stars are present
    const contentContainer = document.querySelector('.content-container');
    const sectionContainer = document.querySelector('.section-container');

    if (contentContainer) {
        contentContainer.style.display = 'none';
    }

    if (sectionContainer) {
        sectionContainer.style.display = 'none';
    }
}

// Function to remove stars and show other elements
function removeStars() {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        starsContainer.remove();

        // Show other elements
        const contentContainer = document.querySelector('.content-container');
        const sectionContainer = document.querySelector('.section-container');

        if (contentContainer) {
            contentContainer.style.display = 'block';
        }

        if (sectionContainer) {
            sectionContainer.style.display = 'block';
        }
    }
}

// Initial call to display time and set initial colors
updateTime();

// Update time every second for a real-time clock
setInterval(updateTime, 1000);
