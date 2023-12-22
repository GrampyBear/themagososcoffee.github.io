document.addEventListener('DOMContentLoaded', function () {
    var clockContainer = document.getElementById('clock-container');
    var clockElement = document.getElementById('clock');

    function getTimeAndDayMoment() {
        var currentDate = new Date();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

        var dayMoment = getDayMoment(hours);
        var formattedTime = formatTime(hours, minutes, seconds);

        clockElement.textContent = dayMoment + ' | ' + formattedTime;

        setTimeout(getTimeAndDayMoment, 1000);
    }

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

    function formatTime(hours, minutes, seconds) {
        return (
            padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds)
        );
    }

    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }

    getTimeAndDayMoment();
});
