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

    if (hours >= 5 && hours < 7) {
        timeOfDay = 'Sunrise';
        updateColors('sunrise');
    } else if (hours >= 7 && hours < 11) {
        timeOfDay = 'Morning';
        updateColors('morning');
    } else if (hours >= 11 && hours < 14) {
        timeOfDay = 'Noon';
        updateColors('noon');
    } else if (hours >= 14 && hours < 17) {
        timeOfDay = 'Afternoon';
        updateColors('afternoon');
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Sunset';
        updateColors('sunset');
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        updateColors('night');
    } else {
        timeOfDay = 'Midnight';
        updateColors('midnight');
    }

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

document.addEventListener('DOMContentLoaded', function () {
    const warningPopup = document.getElementById('warning-popup');

    // Check if the user has acknowledged the warning
    const hasAcceptedWarning = localStorage.getItem('acceptedWarning');

    if (!hasAcceptedWarning) {
        // Display the warning popup if not acknowledged
        warningPopup.style.display = 'flex';
    }
});

function acceptWarning() {
    const warningPopup = document.getElementById('warning-popup');

    // Hide the warning popup
    warningPopup.style.display = 'none';

    // Set a flag to indicate that the user has accepted the warning
    localStorage.setItem('acceptedWarning', 'true');
}


// Initial call to display time and set initial colors
updateTime();

// Update time every second for real-time clock
setInterval(updateTime, 1000);
        
