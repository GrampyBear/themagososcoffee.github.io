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
    let backgroundColor;

    if (hours >= 5 && hours < 7) {
        timeOfDay = 'Sunrise';
        backgroundColor = 'linear-gradient(to bottom, #ffcc00, #ff9900)';
    } else if (hours >= 7 && hours < 11) {
        timeOfDay = 'Morning';
        backgroundColor = 'linear-gradient(to bottom, #66ccff, #3399ff)';
    } else if (hours >= 11 && hours < 14) {
        timeOfDay = 'Noon';
        backgroundColor = 'linear-gradient(to bottom, #ffff66, #ffcc00)';
    } else if (hours >= 14 && hours < 17) {
        timeOfDay = 'Afternoon';
        backgroundColor = 'linear-gradient(to bottom, #ff9900, #cc6600)';
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Sunset';
        backgroundColor = 'linear-gradient(to bottom, #ff3300, #990000)';
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        backgroundColor = 'linear-gradient(to bottom, #000033, #000066)';
    } else {
        timeOfDay = 'Midnight';
        backgroundColor = 'linear-gradient(to bottom, #000000, #000033)';
    }

    document.body.style.background = backgroundColor;
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
