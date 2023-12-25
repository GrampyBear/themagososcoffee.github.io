// Agregaremos el script para mostrar la hora y el momento del día

document.addEventListener("DOMContentLoaded", function () {
    // Esta función se ejecutará cuando el DOM esté completamente cargado

    function updateClock() {
        const timeOfDayElement = document.getElementById('time-of-day');
        const currentTimeElement = document.getElementById('current-time');
        const body = document.body;

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Determinar el momento del día
        let timeOfDay;
        let gradientColors;
        
        if (hours >= 5 && hours < 7) {
            timeOfDay = 'Dawn';
            gradientColors = ['#FFA07A', '#FFE4B5', '#B0E0E6'];
        } else if (hours >= 7 && hours < 12) {
            timeOfDay = 'Morning';
            gradientColors = ['#FFD700', '#FFA500', '#FF8C00'];
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'Midday';
            gradientColors = ['#00CED1', '#20B2AA', '#5F9EA0'];
        } else if (hours >= 17 && hours < 20) {
            timeOfDay = 'Afternoon';
            gradientColors = ['#FF4500', '#FF6347', '#FF7F50'];
        } else if (hours >= 20 && hours < 22) {
            timeOfDay = 'Dusk';
            gradientColors = ['#FF69B4', '#FFB6C1', '#DB7093'];
        } else if (hours >= 22 && hours <= 23) {
            timeOfDay = 'Night';
            gradientColors = ['#000080', '#191970', '#00008B'];
        } else if (hours >= 0 && hours < 5) {
            timeOfDay = 'Midnight';
            gradientColors = ['#2F4F4F', '#696969', '#808080'];
        }

        // Actualizar elementos en la página
        timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
        currentTimeElement.textContent = `Current Time: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        applyGradientBackground(body, gradientColors);

        // Actualizar cada segundo
        setTimeout(updateClock, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function applyGradientBackground(element, colors) {
        const gradientStyle = `linear-gradient(to right, ${colors.join(', ')})`;
        element.style.transition = 'background 10s ease-in-out';
        element.style.background = gradientStyle;
    }

    // Iniciar la actualización del reloj al cargar la página
    updateClock();
});
