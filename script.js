// script.js

// Función para cambiar el color de fondo al hacer clic en una sección
function cambiarColorFondo(id, color) {
    const seccion = document.getElementById(id);
    seccion.style.backgroundColor = color;
}

// Asignar eventos de clic a las secciones
document.getElementById('sobrepeso').addEventListener('click', function () {
    cambiarColorFondo('sobrepeso', '#ffcc00');
});

document.getElementById('gainer-feeder').addEventListener('click', function () {
    cambiarColorFondo('gainer-feeder', '#ff6633');
});

document.getElementById('furries').addEventListener('click', function () {
    cambiarColorFondo('furries', '#33cc99');
});
