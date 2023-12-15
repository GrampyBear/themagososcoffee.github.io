// Function to perform actions based on time of day
function performActionsBasedOnTimeOfDay(timeOfDay) {
    // Reset any previous actions
    resetPreviousActions();

    // Perform actions based on time of day
    switch (timeOfDay) {
        case 'sunrise':
            // Do something for sunrise
            break;
        case 'morning':
            // Do something for morning
            break;
        case 'noon':
            // Do something for noon
            break;
        case 'afternoon':
            // Do something for afternoon
            break;
        case 'sunset':
            // Do something for sunset
            break;
        case 'night':
            // Do something for night
            break;
        case 'midnight':
            // Do something for midnight
            break;
        default:
            // Default action if timeOfDay is not recognized
            break;
    }
}

// Function to reset any previous actions
function resetPreviousActions() {
    // Reset or disable any actions from previous time of day
    // You can add specific code here to undo or disable previous actions
}

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

    const currentTime = getCurrentTime();
    const timeOfDay = getTimeOfDay();

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    currentTimeElement.textContent = `Current Time: ${currentTime}`;

    // Perform actions based on time of day
    performActionsBasedOnTimeOfDay(timeOfDay);
}

setTimeout(updateTime, 60000);

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    updateTime();
});
