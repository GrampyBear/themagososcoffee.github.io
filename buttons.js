document.addEventListener("DOMContentLoaded", function () {
    const panicButton = document.getElementById('panic-button');
    const contentToToggle = document.querySelectorAll('.content-to-toggle'); // Agrega la clase 'content-to-toggle' a los elementos que deseas ocultar/mostrar

    let isPanicMode = false;

    panicButton.addEventListener('click', function () {
        isPanicMode = !isPanicMode;

        contentToToggle.forEach(element => {
            element.style.display = isPanicMode ? 'none' : 'block';
        });

        // También puedes cambiar el color de fondo, etc., según tus preferencias
        document.body.style.backgroundColor = isPanicMode ? '#000' : '#fff';
    });
});
