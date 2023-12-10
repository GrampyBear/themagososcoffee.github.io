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
    let transitionDuration;

    if (hours >= 5 && hours < 7) {
        timeOfDay = 'Sunrise';
        transitionDuration = 5; // seconds
    } else if (hours >= 7 && hours < 11) {
        timeOfDay = 'Morning';
        transitionDuration = 5;
    } else if (hours >= 11 && hours < 14) {
        timeOfDay = 'Noon';
        transitionDuration = 5;
    } else if (hours >= 14 && hours < 17) {
        timeOfDay = 'Afternoon';
        transitionDuration = 5;
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Sunset';
        transitionDuration = 5;
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        transitionDuration = 5;
    } else {
        timeOfDay = 'Midnight';
        transitionDuration = 5;
    }

    document.documentElement.style.setProperty('--transition-duration', `${transitionDuration}s`);
    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    currentTimeElement.textContent = `Current Time: ${hours}:${minutes}`;
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
