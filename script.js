// Function to update time dynamically in the navbar
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const exactTimeElement = document.getElementById('exactTime');
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Format minutes with leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let timeOfDay;

    if (hours >= 6 && hours < 12) {
        timeOfDay = 'Morning';
        updateColors('#FFD700'); // Update text and background colors
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        updateColors('#87CEEB');
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Evening';
        updateColors('#FF6347');
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        updateColors('#483D8B');
    } else {
        timeOfDay = 'Midnight';
        updateColors('#191970');
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    exactTimeElement.textContent = `Exact Time: ${hours}:${minutes}`;
}

// Function to update text and background colors
function updateColors(gradientColor) {
    document.body.style.background = `linear-gradient(to bottom, ${gradientColor}, #ffffff)`;
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

// Initial call to display time and set initial colors
updateTime();

// Update time every second for real-time clock
setInterval(updateTime, 1000);

// Function to handle color transition on page load
function handlePageLoadTransition() {
    document.body.style.transition = 'background 1s ease-in-out';
    // Triggering the transition by updating the background after a slight delay
    setTimeout(() => {
        updateTime();
    }, 50);
}

// Initial call to handle color transition on page load
handlePageLoadTransition();
                     
