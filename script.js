// Add these global variables to track manual time changes
let manualTimeChangeInProgress = false;
let manualTimeChangeTimeout;

// Function to handle manual time change
function manualTimeChange() {
    // Check if a manual time change is already in progress
    if (manualTimeChangeInProgress) {
        clearTimeout(manualTimeChangeTimeout);
        manualTimeChangeInProgress = false;
    }

    // Prompt user to select a time of day
    const selectedTime = prompt("Enter time of day (morning, afternoon, evening, night, midnight):");

    // Validate user input and update time accordingly
    if (selectedTime) {
        const timeLowerCase = selectedTime.toLowerCase();
        const validTimes = ['morning', 'afternoon', 'evening', 'night', 'midnight'];

        if (validTimes.includes(timeLowerCase)) {
            updateColors(timeLowerCase);
        } else {
            alert("Invalid time input. Please enter morning, afternoon, evening, night, or midnight.");
        }
    }
}

// Modify updateTime function to consider manual changes
function updateTime() {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Format minutes with leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let timeOfDay;

    if (manualTimeChangeInProgress) {
        // Display "Manual" during manual time changes
        timeOfDay = 'Manual';
    } else {
        // Rest of the existing logic for automatic time changes
        if (hours >= 6 && hours < 12) {
            timeOfDay = 'Morning';
            updateColors('sunrise');
            removeStars();
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'Afternoon';
            updateColors('noon');
            removeStars();
        } else if (hours >= 17 && hours < 20) {
            timeOfDay = 'Evening';
            updateColors('sunset');
            removeStars();
        } else if (hours >= 20 && hours < 24) {
            timeOfDay = 'Night';
            updateColors('dusk');
            if (hours === 20) {
                generateStars();
            }
        } else {
            timeOfDay = 'Midnight';
            updateColors('midnight');
            generateStars();
        }
    }

    timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
    currentTimeElement.textContent = `Current Time: ${hours}:${minutes}`;
}

// Disable automatic time updates
clearInterval();

// Initial call to display time and set initial colors
updateTime();

// Update time every second for a real-time clock, only if manual change is not in progress
setInterval(() => {
    if (!manualTimeChangeInProgress) {
        updateTime();
    }
}, 1000);
                   
