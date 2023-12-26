document.addEventListener("DOMContentLoaded", function () {
    const panicButton = document.getElementById('panic-button');
    const mainContent = document.getElementById('main-content');

    panicButton.addEventListener('click', function () {
        // Alternar la visibilidad del contenido principal
        mainContent.classList.toggle('hidden');

        // Cambiar el texto del botón según la visibilidad actual
        const buttonText = mainContent.classList.contains('hidden') ? 'Show Content' : 'Hide Content';
        panicButton.textContent = buttonText;
    });

    // Resto del código...
});
