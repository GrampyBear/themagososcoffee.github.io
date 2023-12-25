// Agregaremos el script para mostrar la hora y el momento del día

document.addEventListener("DOMContentLoaded", function () {
    // Esta función se ejecutará cuando el DOM esté completamente cargado

    function updateClock() {
        const timeOfDayElement = document.getElementById('time-of-day');
        const currentTimeElement = document.getElementById('current-time');

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Determinar el momento del día
        let timeOfDay;
        if (hours >= 5 && hours < 7) {
            timeOfDay = 'Dawn';
        } else if (hours >= 7 && hours < 12) {
            timeOfDay = 'Morning';
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'Midday';
        } else if (hours >= 17 && hours < 20) {
            timeOfDay = 'Afternoon';
        } else if (hours >= 20 && hours < 22) {
            timeOfDay = 'Dusk';
        } else if (hours >= 22 && hours <= 23) {
            timeOfDay = 'Night';
        } else if (hours >= 0 && hours < 5) {
            timeOfDay ='Midnight';
        }

        // Actualizar elementos en la página
        timeOfDayElement.textContent = `Time of Day: ${timeOfDay}`;
        currentTimeElement.textContent = `Current Time: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        // Actualizar cada segundo
        setTimeout(updateClock, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Iniciar la actualización del reloj al cargar la página
    updateClock();
});
