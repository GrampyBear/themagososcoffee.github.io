document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const timeOfDayElement = document.getElementById('time-of-day');
        const currentTimeElement = document.getElementById('current-time');
        const body = document.body;

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let timeOfDay;
        let gradientColors;

        if (hours >= 0 && hours < 1) {
            timeOfDay = 'Deep Midnight';
            gradientColors = ['#000033', '#000066', '#000099'];
        } else if (hours >= 1 && hours < 2) {
            timeOfDay = 'Silent Dawn';
            gradientColors = ['#000066', '#000099', '#0000CC'];
        } else if (hours >= 2 && hours < 3) {
            timeOfDay = 'Night Tranquility';
            gradientColors = ['#000099', '#0000CC', '#0000FF'];
        } else if (hours >= 3 && hours < 4) {
            timeOfDay = 'Night Silence';
            gradientColors = ['#0000CC', '#0000FF', '#0000CC'];
        } else if (hours >= 4 && hours < 5) {
            timeOfDay = 'Before Sunrise';
            gradientColors = ['#0000FF', '#0000CC', '#000099'];
        } else if (hours >= 5 && hours < 6) {
            timeOfDay = 'Serene Dawn';
            gradientColors = ['#0000CC', '#000099', '#000066'];
        } else if (hours >= 6 && hours < 7) {
            timeOfDay = 'Early Morning';
            gradientColors = ['#000099', '#000066', '#003366'];
        } else if (hours >= 7 && hours < 8) {
            timeOfDay = 'Wake-up Time';
            gradientColors = ['#000066', '#003366', '#006699'];
        } else if (hours >= 8 && hours < 9) {
            timeOfDay = 'Active Morning';
            gradientColors = ['#003366', '#006699', '#0099CC'];
        } else if (hours >= 9 && hours < 10) {
            timeOfDay = 'Vibrant Late Morning';
            gradientColors = ['#006699', '#0099CC', '#00CCFF'];
        } else if (hours >= 10 && hours < 11) {
            timeOfDay = 'Energetic Morning';
            gradientColors = ['#0099CC', '#00CCFF', '#006699'];
        } else if (hours >= 11 && hours < 12) {
            timeOfDay = 'Radiant Noon';
            gradientColors = ['#00CCFF', '#006699', '#003366'];
        } else if (hours >= 12 && hours < 13) {
            timeOfDay = 'Noon Glow';
            gradientColors = ['#006699', '#003366', '#000033'];
        } else if (hours >= 13 && hours < 14) {
            timeOfDay = 'Relaxed Afternoon';
            gradientColors = ['#003366', '#000033', '#330000'];
        } else if (hours >= 14 && hours < 15) {
            timeOfDay = 'Lunchtime';
            gradientColors = ['#000033', '#330000', '#660000'];
        } else if (hours >= 15 && hours < 16) {
            timeOfDay = 'Tranquil Afternoon';
            gradientColors = ['#330000', '#660000', '#990000'];
        } else if (hours >= 16 && hours < 17) {
            timeOfDay = 'Sunny Afternoon';
            gradientColors = ['#660000', '#990000', '#CC0000'];
        } else if (hours >= 17 && hours < 18) {
            timeOfDay = 'Warm Sunset';
            gradientColors = ['#990000', '#CC0000', '#FF0000'];
        } else if (hours >= 18 && hours < 19) {
            timeOfDay = 'Golden Twilight';
            gradientColors = ['#CC0000', '#FF0000', '#CC0000'];
        } else if (hours >= 19 && hours < 20) {
            timeOfDay = 'Gentle Dusk';
            gradientColors = ['#FF0000', '#CC0000', '#990000'];
        } else if (hours >= 20 && hours < 21) {
            timeOfDay = 'Starry Night';
            gradientColors = ['#CC0000', '#990000', '#660000'];
        } else if (hours >= 21 && hours < 22) {
            timeOfDay = 'Quiet Hour';
            gradientColors = ['#990000', '#660000', '#330000'];
        } else if (hours >= 22 && hours < 23) {
            timeOfDay = 'Serene Night';
            gradientColors = ['#660000', '#330000', '#000033'];
        } else if (hours >= 23 && hours < 24) {
            timeOfDay = 'Magical Midnight';
            gradientColors = ['#330000', '#000033', '#000066'];
        }

        timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
        currentTimeElement.textContent = `Current Time: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        // Aplicar el fondo degradado con transición suave
        applyGradientBackground(body, gradientColors);

        setTimeout(updateClock, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function applyGradientBackground(element, colors) {
        const gradientStyle = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
        element.style.transition = 'background 10s linear';
        element.style.background = gradientStyle;
    }

    updateClock();
});
                              
