function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

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

function updateBackground() {
    const body = document.body;
    const timeOfDay = getTimeOfDay();

    switch (timeOfDay) {
        case 'sunrise':
            body.style.background = 'linear-gradient(to bottom, #FF6F00, #FFD54F)';
            break;
        case 'morning':
            body.style.background = 'linear-gradient(to bottom, #FFD54F, #81C784)';
            break;
        case 'noon':
            body.style.background = 'linear-gradient(to bottom, #81C784, #4CAF50)';
            break;
        case 'afternoon':
            body.style.background = 'linear-gradient(to bottom, #4CAF50, #FFA726)';
            break;
        case 'sunset':
            body.style.background = 'linear-gradient(to bottom, #FFA726, #FF7043)';
            break;
        case 'night':
            body.style.background = 'linear-gradient(to bottom, #0D47A1, #263238)';
            break;
        case 'midnight':
            body.style.background = 'linear-gradient(to bottom, #000000, #1A237E)';
            break;
        default:
            body.style.background = 'linear-gradient(to bottom, #000000, #1A237E)';
            break;
    }
}

function updatePage() {
    updateTime();
    updateBackground();
}

// Update initially and set interval for updates
updatePage();
setInterval(updatePage, 1000 * 60); // Update every minute
        
