// stars.js

function createStar(x, y, size, opacity) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = opacity;
    return star;
}

function createConstellation(points) {
    const constellation = document.createElement('div');
    constellation.classList.add('constellation');

    for (const point of points) {
        const star = createStar(point[0], point[1], 2, 1);
        constellation.appendChild(star);
    }

    return constellation;
}

function createStarsAndConstellations() {
    const nightSky = document.getElementById('night-sky');
    
    // Crear estrellas titilantes
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.5 + 0.5;

        const star = createStar(x, y, size, opacity);
        nightSky.appendChild(star);
    }

    // Crear constelaciones
    const bigDipperPoints = [
        [100, 300],
        [150, 200],
        [200, 100],
        [250, 200],
        [300, 300],
        [400, 400],
        [500, 300],
    ];

    const littleDipperPoints = [
        [600, 300],
        [650, 250],
        [700, 200],
        [750, 250],
        [800, 300],
    ];

    const constellations = [
        createConstellation(bigDipperPoints),
        createConstellation(littleDipperPoints),
        // Agrega más constelaciones según sea necesario
    ];

    for (const constellation of constellations) {
        nightSky.appendChild(constellation);
    }
}

createStarsAndConstellations();
