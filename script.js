// Function to update time dynamically in the navbar
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Format minutes with leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let timeOfDay;

    if (hours >= 6 && hours < 12) {
        timeOfDay = 'Morning';
        updateColors('sunrise');
        removeStars(); // Remove stars for other times
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        updateColors('noon');
        removeStars();
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Evening';
        updateColors('sunset');
        removeStars();
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        updateColors('dusk');
        if (hours === 20) {
            generateStars(); // Generate stars at the beginning of the night
        }
    } else {
        timeOfDay = 'Midnight';
        updateColors('midnight');
        generateStars(); // Generate stars at midnight
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    currentTimeElement.textContent = `Current Time: ${hours}:${minutes}`;
}

// Function to generate twinkling stars
function generateStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';

    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
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


// Function to update text and background colors
function updateColors(timeOfDayClass) {
    document.body.className = timeOfDayClass;
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

// Initial call to display time and set initial colors
updateTime();

// Update time every second for real-time clock
setInterval(updateTime, 1000);
