// Function to update time dynamically in the navbar
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const exactTimeElement = document.getElementById('exactTime');
    const body = document.body;
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Format minutes with leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let timeOfDay;

    if (hours >= 6 && hours < 12) {
        timeOfDay = 'Morning';
        body.style.background = 'linear-gradient(to bottom, #FFD700, #ffffff)';
        setTextColor(body, '#333'); // Default text color for morning
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        body.style.background = 'linear-gradient(to bottom, #87CEEB, #ffffff)';
        setTextColor(body, '#333'); // Default text color for afternoon
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Evening';
        body.style.background = 'linear-gradient(to bottom, #FF6347, #ffffff)';
        setTextColor(body, '#fff'); // White text color for evening
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        body.style.background = 'linear-gradient(to bottom, #483D8B, #ffffff)';
        setTextColor(body, '#fff'); // White text color for night
    } else {
        timeOfDay = 'Midnight';
        body.style.background = 'linear-gradient(to bottom, #191970, #ffffff)';
        setTextColor(body, '#fff'); // White text color for midnight
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    exactTimeElement.textContent = `Exact Time: ${hours}:${minutes}`;
}

// Function to set text color based on background color
function setTextColor(element, bgColor) {
    const brightness = getBrightness(bgColor);

    // Adjusting text color based on brightness
    element.style.color = brightness > 128 ? '#333' : '#fff';
}

// Function to get brightness of a color
function getBrightness(color) {
    const rgb = color.match(/\d+/g);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness;
}

// Initial call to display time
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
               
