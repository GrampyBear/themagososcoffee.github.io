// Function to manually change the time of day
function changeTimeOfDay(newTimeOfDay) {
    updateColors(newTimeOfDay);
    if (newTimeOfDay === 'midnight') {
        generateStars();
    } else {
        removeStars();
    }
}

// Disable automatic time update
clearInterval(intervalID);

// Manual time change buttons
document.getElementById('btnMorning').addEventListener('click', function () {
    changeTimeOfDay('sunrise');
});

document.getElementById('btnAfternoon').addEventListener('click', function () {
    changeTimeOfDay('noon');
});

document.getElementById('btnEvening').addEventListener('click', function () {
    changeTimeOfDay('sunset');
});

document.getElementById('btnNight').addEventListener('click', function () {
    changeTimeOfDay('dusk');
});

document.getElementById('btnMidnight').addEventListener('click', function () {
    changeTimeOfDay('midnight');
});

// Initial call to display time and set initial colors
updateTime();

// Update time every second for a real-time clock
setInterval(updateTime, 1000);
