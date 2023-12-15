document.addEventListener("DOMContentLoaded", function () {
    // Espera a que la página se cargue completamente

    // Desvanecer la capa blanca
    setTimeout(function () {
        document.getElementById("overlay").style.opacity = 0;
    }, 1000); // Después de 1 segundo (ajusta según sea necesario)
});

