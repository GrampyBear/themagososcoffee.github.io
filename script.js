// Function to update styles dynamically based on time of day
function updateStylesBasedOnTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const navbarTitle = document.querySelector('.navbar-title');
    const pageTitle = document.querySelector('.page-title');
    const timeText = document.querySelectorAll('.time-text');
    const footerText = document.querySelector('footer');

    let textColor;

    if (hours >= 6 && hours < 12) {
        // Morning
        textColor = '#000'; // Black text for better contrast
    } else if (hours >= 12 && hours < 17) {
        // Afternoon
        textColor = '#000'; // Black text for better contrast
    } else if (hours >= 17 && hours < 20) {
        // Evening
        textColor = '#fff'; // White text for better contrast
    } else if (hours >= 20 && hours < 24) {
        // Night
        textColor = '#fff'; // White text for better contrast
    } else {
        // Midnight
        textColor = '#fff'; // White text for better contrast
    }

    // Apply the text color dynamically
    navbarTitle.style.color = textColor;
    pageTitle.style.color = textColor;

    // Loop through timeText elements and update color
    timeText.forEach((text) => {
        text.style.color = textColor;
    });

    // Apply color to footer text
    footerText.style.color = textColor;
}

// Initial call to update styles based on time
updateStylesBasedOnTime();

// Update styles every second for real-time adjustments
setInterval(updateStylesBasedOnTime, 1000);
                     
