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
            gradientColors = ['#f4e5cb', '#9dc3c1'];
        } else if (hours >= 7 && hours < 12) {
            timeOfDay = 'Morning';
            gradientColors = ['#f7d08a', '#f8d596', '#f9d5a3'];
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'Midday';
            gradientColors = ['#a0ced9', '#87bdd8', '#6aa9cf'];
        } else if (hours >= 17 && hours < 20) {
            timeOfDay = 'Afternoon';
            gradientColors = ['#f2897b', '#f18b7f', '#f18d83'];
        } else if (hours >= 20 && hours < 22) {
            timeOfDay = 'Dusk';
            gradientColors = ['#e07a5f', '#e28571', '#e39084'];
        } else if (hours >= 22 && hours <= 23) {
            timeOfDay = 'Night';
            gradientColors = ['#33334c', '#404066', '#4d4d80'];
            createStars();
        } else if (hours >= 0 && hours < 5) {
            timeOfDay = 'Midnight';
            gradientColors = ['#0a0a0a', '#262626', '#404040'];
            createStars();
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

        function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
        document.body.appendChild(starsContainer);

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            starsContainer.appendChild(star);
        }
    }

    // Iniciar la actualización del reloj al cargar la página
    updateClock();
});
