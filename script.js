// Agregaremos el script para mostrar la hora y el momento del día

document.addEventListener("DOMContentLoaded", function () {
    // Esta función se ejecutará cuando el DOM esté completamente cargado

    function updateClock() {
        const timeOfDayElement = document.getElementById('time-of-day');
        const currentTimeElement = document.getElementById('current-time');
        const body = document.body;
        const starsContainer = document.getElementById('stars');

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Determinar el momento del día
        let timeOfDay;
        let gradientColors;
        
        if (hours >= 4 && hours < 5) {
            timeOfDay = 'Dawn';
            gradientColors = ['#1a1c20', '#ff7f50', '#87ceeb'];
        } else if (hours >= 5 && hours < 7) {
            timeOfDay = 'Sunrise';
            gradientColors = ['#ff7f50', '#ffd700', '#87ceeb'];
        } else if (hours >= 7 && hours < 12) {
            timeOfDay = 'Morning';
            gradientColors = ['#87ceeb', '#00ced1', '#ffff00'];
        } else if (hours >= 12 && hours < 13) {
            timeOfDay = 'Noon';
            gradientColors = ['#00ced1', '#ffffff', '#ffd700'];
        } else if (hours >= 13 && hours < 17) {
            timeOfDay = 'Afternoon';
            gradientColors = ['#ffd700', '#ff4500', '#ff6347'];
        } else if (hours >= 17 && hours < 19) {
            timeOfDay = 'Sunset';
            gradientColors = ['#ff6347', '#ff8c00', '#dc143c'];
        } else if (hours >= 19 && hours < 24) {
            timeOfDay = 'Night';
            gradientColors = ['#191970', '#000080', '#000000'];
        } else if (hours >= 0 && hours < 4) {
            timeOfDay = 'Midnight';
            gradientColors = ['#000000', '#191970', '#000080'];
        }

        // Actualizar elementos en la página
        timeOfDayElement.textContent = `Time of Day:\n${timeOfDay}`;
        currentTimeElement.textContent = `Current Time:\n${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        applyGradientBackground(body, gradientColors);

        // Actualizar cada segundo
        setTimeout(updateClock, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function applyGradientBackground(element, colors) {
        const gradientStyle = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;
        element.style.transition = 'background 10s linear';
        element.style.background = gradientStyle;
    }

    // Iniciar la actualización del reloj al cargar la página
    updateClock();
});
