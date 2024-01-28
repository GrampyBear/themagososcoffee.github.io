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
            gradientColors = ['#001F3F', '#003366', '#004080'];
        } else if (hours >= 1 && hours < 2) {
            timeOfDay = 'Silent Dawn';
            gradientColors = ['#003366', '#004080', '#00509B'];
        } else if (hours >= 2 && hours < 3) {
            timeOfDay = 'Night Tranquility';
            gradientColors = ['#004080', '#00509B', '#0060B6'];
        } else if (hours >= 3 && hours < 4) {
            timeOfDay = 'Night Silence';
            gradientColors = ['#00509B', '#0060B6', '#0070D0'];
        } else if (hours >= 4 && hours < 5) {
            timeOfDay = 'Before Sunrise';
            gradientColors = ['#0060B6', '#0070D0', '#0080E5'];
        } else if (hours >= 5 && hours < 6) {
            timeOfDay = 'Serene Dawn';
            gradientColors = ['#0070D0', '#0080E5', '#0090FF'];
        } else if (hours >= 6 && hours < 7) {
            timeOfDay = 'Early Morning';
            gradientColors = ['#0080E5', '#0090FF', '#00A0FF'];
        } else if (hours >= 7 && hours < 8) {
            timeOfDay = 'Wake-up Time';
            gradientColors = ['#0090FF', '#00A0FF', '#00B0FF'];
        } else if (hours >= 8 && hours < 9) {
            timeOfDay = 'Active Morning';
            gradientColors = ['#00A0FF', '#00B0FF', '#00C0FF'];
        } else if (hours >= 9 && hours < 10) {
            timeOfDay = 'Vibrant Late Morning';
            gradientColors = ['#00B0FF', '#00C0FF', '#00D0FF'];
        } else if (hours >= 10 && hours < 11) {
            timeOfDay = 'Energetic Morning';
            gradientColors = ['#00C0FF', '#00D0FF', '#00E0FF'];
        } else if (hours >= 11 && hours < 12) {
            timeOfDay = 'Radiant Noon';
            gradientColors = ['#00D0FF', '#00E0FF', '#00F0FF'];
        } else if (hours >= 12 && hours < 13) {
            timeOfDay = 'Noon Glow';
            gradientColors = ['#00E0FF', '#00F0FF', '#00FFFF'];
        } else if (hours >= 13 && hours < 14) {
            timeOfDay = 'Relaxed Afternoon';
            gradientColors = ['#00F0FF', '#00FFFF', '#A9D0F5'];
        } else if (hours >= 14 && hours < 15) {
            timeOfDay = 'Lunchtime';
            gradientColors = ['#00FFFF', '#A9D0F5', '#F0F8FF'];
        } else if (hours >= 15 && hours < 16) {
            timeOfDay = 'Tranquil Afternoon';
            gradientColors = ['#A9D0F5', '#F0F8FF', '#FAFAD2'];
        } else if (hours >= 16 && hours < 17) {
            timeOfDay = 'Sunny Afternoon';
            gradientColors = ['#F0F8FF', '#FAFAD2', '#FFD700'];
        } else if (hours >= 17 && hours < 18) {
            timeOfDay = 'Warm Sunset';
            gradientColors = ['#FAFAD2', '#FFD700', '#FFA500'];
        } else if (hours >= 18 && hours < 19) {
            timeOfDay = 'Golden Twilight';
            gradientColors = ['#FFD700', '#FFA500', '#FF6347'];
        } else if (hours >= 19 && hours < 20) {
            timeOfDay = 'Gentle Dusk';
            gradientColors = ['#FFA500', '#FF6347', '#FF4500'];
        } else if (hours >= 20 && hours < 21) {
            timeOfDay = 'Starry Night';
            gradientColors = ['#FF6347', '#FF4500', '#8B0000'];
        } else if (hours >= 21 && hours < 22) {
            timeOfDay = 'Calm Night';
            gradientColors = ['#FF4500', '#8B0000', '#330000'];
        } else if (hours >= 22 && hours < 23) {
            timeOfDay = 'Serene Night';
            gradientColors = ['#8B0000', '#330000', '#000033'];
        } else if (hours >= 23 && hours < 24) {
            timeOfDay = 'Magical Midnight';
            gradientColors = ['#330000', '#000033', '#001F3F'];
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
                              
