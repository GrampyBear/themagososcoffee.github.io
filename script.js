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
            gradientColors = ['#f4e5cb', '#c7d1bd', '#9dc3c1'];
            showStars(false);
        } else if (hours >= 5 && hours < 7) {
            timeOfDay = 'Sunrise';
            gradientColors = ['#f4e5cb', '#c7d1bd', '#9dc3c1'];
            showStars(false);
        } else if (hours >= 7 && hours < 12) {
            timeOfDay = 'Morning';
            gradientColors = ['#f7d08a', '#f8d596', '#f9d5a3'];
            showStars(false);
        } else if (hours >= 12 && hours < 13) {
            timeOfDay = 'Midday';
            gradientColors = ['#a0ced9', '#87bdd8', '#6aa9cf'];
            showStars(false);
        } else if (hours >= 13 && hours < 17) {
            timeOfDay = 'Afternoon';
            gradientColors = ['#f2897b', '#f18b7f', '#f18d83'];
            showStars(false);
        } else if (hours >= 17 && hours < 19) {
            timeOfDay = 'Sunset';
            gradientColors = ['#e07a5f', '#e28571', '#e39084'];
            showStars(false);
        } else if (hours >= 19 && hours < 24) {
            timeOfDay = 'Night';
            gradientColors = ['#33334c', '#404066', '#4d4d80'];
            showStars(true);
        } else if (hours >= 0 && hours < 4) {
            timeOfDay = 'Midnight';
            gradientColors = ['#0a0a0a', '#262626', '#404040'];
            showStars(true);
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

        function showStars(show) {
        const starsContainer = document.getElementById('stars');
        starsContainer.innerHTML = ''; // Limpiar estrellas existentes

        if (show) {
            // Mostrar estrellas
            const numberOfStars = 100;
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                starsContainer.appendChild(star);
            }
        }
    }

    // Iniciar la actualización del reloj al cargar la página
    updateClock();
});
