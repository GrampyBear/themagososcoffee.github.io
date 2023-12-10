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
        setColors('#FFD700', '#ffffff'); // Set colors for morning
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        setColors('#87CEEB', '#ffffff'); // Set colors for afternoon
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Evening';
        setColors('#FF6347', '#ffffff'); // Set colors for evening
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        setColors('#483D8B', '#ffffff'); // Set colors for night
    } else {
        timeOfDay = 'Midnight';
        setColors('#191970', '#ffffff'); // Set colors for midnight
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    exactTimeElement.textContent = `Exact Time: ${hours}:${minutes}`;
}

// Function to set text and background colors
function setColors(textColor, backgroundColor) {
    document.body.style.background = `linear-gradient(to bottom, ${backgroundColor})`;
    document.body.style.color = textColor;
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
