document.addEventListener('DOMContentLoaded', function () {
    const timeOfDayElement = document.getElementById('timeOfDay');
    const currentTimeElement = document.getElementById('currentTime');
    const warningPopup = document.getElementById('warning-popup');
    const starsContainer = document.getElementById('stars-container');
    const logoElement = document.getElementById('navbar-logo');
    const hasAcceptedWarning = localStorage.getItem('acceptedWarning');

    function updateTime() {
        const currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

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

    function updateColors(timeOfDayClass) {
        document.body.className = timeOfDayClass;
    }

    const isChristmas = new Date().getDate() === 24 && new Date().getMonth() === 11;

    if (isChristmas) {
        logoElement.src = 'https://github.com/GrampyBear/GrampyBear.github.io/raw/main/chucheria.png';
        logoElement.style.width = '614px'; // 20% larger than 512px
    }

    // Function to create and animate stars
    function createStars() {
        starsContainer.innerHTML = ''; // Remove existing stars
        const hours = new Date().getHours();

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

    // Display the warning popup if not acknowledged
    if (!hasAcceptedWarning) {
        warningPopup.style.display = 'flex';
    }

    // Event listeners for the warning popup buttons
    document.getElementById('accept-warning-btn').addEventListener('click', function () {
        warningPopup.style.display = 'none';
        localStorage.setItem('acceptedWarning', 'true');
    });

    document.getElementById('show-warning-again-btn').addEventListener('click', function () {
        warningPopup.style.display = 'flex';
        void warningPopup.offsetWidth;
        warningPopup.classList.add('active');
    });
});
                   
