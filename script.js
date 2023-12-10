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
        document.body.style.background = 'linear-gradient(to bottom, #FFD700, #ffffff)';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        document.body.style.background = 'linear-gradient(to bottom, #87CEEB, #ffffff)';
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = 'Evening';
        document.body.style.background = 'linear-gradient(to bottom, #FF6347, #ffffff)';
    } else if (hours >= 20 && hours < 24) {
        timeOfDay = 'Night';
        document.body.style.background = 'linear-gradient(to bottom, #483D8B, #ffffff)';
    } else {
        timeOfDay = 'Midnight';
        document.body.style.background = 'linear-gradient(to bottom, #191970, #ffffff)';
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    exactTimeElement.textContent = `Exact Time: ${hours}:${minutes}`;
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
handle
