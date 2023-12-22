document.addEventListener('DOMContentLoaded', function () {
    // Get the clock element
    var clockElement = document.getElementById('clock');

    // Get the clock container element
    var clockContainerElement = document.getElementById('clock-container');

    // Function to get the current time and day moment
    function getTimeAndDayMoment() {
        var currentDate = new Date();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

        // Determine the day moment
        var dayMoment = getDayMoment(hours);

        // Format the current time
        var formattedTime = formatTime(hours, minutes, seconds);

        // Display the result in the clock element
        clockElement.textContent = formattedTime + ' ' + dayMoment;

        // Display the result in the clock container
        displayClockInfo(dayMoment, formattedTime);

        // Update every second
        setTimeout(getTimeAndDayMoment, 1000);
    }

    // Function to display the clock information
    function displayClockInfo(dayMoment, formattedTime) {
        // Get the clock information element
        var clockInfoElement = document.getElementById('clock-info');

        // Update the content
        clockInfoElement.innerHTML = `
            <p>Time of day: ${dayMoment}</p>
            <p>Current time: ${formattedTime}</p>
        `;
    }

    // Function to get the day moment
    function getDayMoment(hours) {
        if (hours >= 5 && hours < 7) {
            return 'Dawn';
        } else if (hours >= 7 && hours < 12) {
            return 'Morning';
        } else if (hours >= 12 && hours < 14) {
            return 'Midday';
        } else if (hours >= 14 && hours < 18) {
            return 'Afternoon';
        } else if (hours >= 18 && hours < 20) {
            return 'Dusk';
        } else if (hours >= 20 && hours < 24) {
            return 'Night';
        } else {
            return 'Midnight';
        }
    }

    // Function to format the time
    function formatTime(hours, minutes, seconds) {
        return (
            padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds)
        );
    }

    // Function to pad zero to the left if necessary
    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }

    // Start the clock
    getTimeAndDayMoment();
});
