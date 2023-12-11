document.addEventListener('DOMContentLoaded', function () {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const warningPopup = document.getElementById('warning-popup');
    const starsContainer = document.getElementById('stars-container');
    const logoElement = document.getElementById('navbar-logo');
    const hasAcceptedWarning = localStorage.getItem('acceptedWarning');
    const currentTime = new Date();

    // Function to update time dynamically in the navbar
    function updateTime() {
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

    // Check if it's Christmas Eve (December 24) or Christmas Day (December 25)
    const isChristmas = currentTime.getDate() === 24 && currentTime.getMonth() === 11;

    if (isChristmas) {
        changeChristmasLogo();
    } else {
        // Reset to the default logo if it's not Christmas
        resetLogo();
    }

    // Function to change the logo to the Christmas icon
    function changeChristmasLogo() {
        logoElement.src = 'https://github.com/GrampyBear/GrampyBear.github.io/raw/main/chucheria.png';
        logoElement.style.width = '614px'; // 20% larger than 512px
    }

    // Function to reset the logo to the default one
    function resetLogo() {
        logoElement.src = 'https://github.com/GrampyBear/GrampyBear.github.io/blob/main/copo-de-nieve%20(1).png';
        logoElement.style.width = '614px'; // 20% larger than 512px
    }

    // Function to toggle visibility of sections
    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section.style.visibility === 'hidden') {
            section.classList.add('fade-in'); // Add fade-in class
            section.style.visibility = 'visible';
        } else {
            section.style.visibility = 'hidden';
        }
    }

    // Accept the warning and hide the popup
    function acceptWarning() {
        warningPopup.style.display = 'none';
        localStorage.setItem('acceptedWarning', 'true');
    }

    // Show the warning popup again
    function showWarningAgain() {
        warningPopup.style.display = 'flex';
        // Force a reflow to enable the transition
        void warningPopup.offsetWidth;
        warningPopup.classList.add('active');
    }

    // Function to create and animate stars
    function createStars() {
        starsContainer.innerHTML = ''; // Remove existing stars
        const hours = currentTime.getHours();

        // Stars appear only at night and midnight
        if (hours >= 20 || (hours >= 0 && hours < 5)) {
            for (let i = 0; i < 30; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = `${Math.random() * 100}vh`;
                star.style.left = `${Math.random() * 100}vw`;
                star.style.animationDuration = `${Math.random() * 3 + 1}s`;
                starsContainer.appendChild(star);
            }
        }
    }

    // Initial call to create stars
    createStars();

    // Set an interval to continuously check and create stars
    setInterval(createStars, 60 * 60 * 1000); // Check every hour

    // Set an interval to check and create stars every minute for immediate responsiveness
    setInterval(createStars, 60 * 1000); // Check every minute

    // Initial call to display time and set initial colors
    updateTime();

    // Update time every second for real-time clock
    setInterval(updateTime, 1000);

    // Check if the user has acknowledged the warning
    if (!hasAcceptedWarning) {
        // Display the warning popup if not acknowledged
        warningPopup.style.display = 'flex';
    }

    // Event listeners for the warning popup buttons
    document.getElementById('accept-warning-btn').addEventListener('click', acceptWarning);
    document.getElementById('show-warning-again-btn').addEventListener('click', showWarningAgain);
});
            
