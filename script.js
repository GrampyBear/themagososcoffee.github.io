// Get current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// Get time of day
function getTimeOfDay() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 7) {
        return 'sunrise';
    } else if (hours >= 7 && hours < 11) {
        return 'morning';
    } else if (hours >= 11 && hours < 14) {
        return 'noon';
    } else if (hours >= 14 && hours < 17) {
        return 'afternoon';
    } else if (hours >= 17 && hours < 20) {
        return 'sunset';
    } else if (hours >= 20 && hours < 24) {
        return 'night';
    } else {
        return 'midnight';
    }
}

// Update time and time of day
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const bodyElement = document.body;

    const currentTime = getCurrentTime();
    const timeOfDay = getTimeOfDay();

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    currentTimeElement.textContent = `Current Time: ${currentTime}`;

    // Update background gradient based on time of day
    updateBackgroundGradient(timeOfDay);
}

// Update background gradient
function updateBackgroundGradient(timeOfDay) {
    const bodyElement = document.body;
    const gradientDuration = 5; // 5 seconds for the transition

    let gradientColors;
    switch (timeOfDay) {
        case 'sunrise':
            gradientColors = ['#FF6F00', '#FFD54F'];
            break;
        case 'morning':
            gradientColors = ['#FFD54F', '#81C784'];
            break;
        case 'noon':
            gradientColors = ['#81C784', '#4CAF50'];
            break;
        case 'afternoon':
            gradientColors = ['#4CAF50', '#FFA726'];
            break;
        case 'sunset':
            gradientColors = ['#FFA726', '#FF7043'];
            break;
        case 'night':
            gradientColors = ['#0D47A1', '#263238'];
            break;
        case 'midnight':
            gradientColors = ['#000000', '#1A237E'];
            break;
        default:
            gradientColors = ['#ffffff', '#ffffff']; // Default to white gradient
    }

    const gradientString = `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`;
    bodyElement.style.background = gradientString;
    bodyElement.style.transition = `background ${gradientDuration}s ease-in-out`;
}

// Update time initially and set interval for updates
updateTime();
setInterval(updateTime, 1000); // Update every second
