const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let playerX = 50; // Posición inicial en X del jugador
let playerY = 50; // Posición inicial en Y del jugador
const playerWidth = 30; // Ancho del jugador
const playerHeight = 30; // Altura del jugador

const playerName = 'Jugador 1'; // Nombre del jugador principal
let isMoving = false; // Variable para controlar el movimiento del jugador

canvas.addEventListener('mousedown', (e) => {
    isMoving = true;
});

canvas.addEventListener('mousemove', (e) => {
    if (isMoving) {
        const rect = canvas.getBoundingClientRect();
        playerX = e.clientX - rect.left - playerWidth / 2;
        playerY = e.clientY - rect.top - playerHeight / 2;
        draw();
    }
});

canvas.addEventListener('mouseup', () => {
    isMoving = false;
});

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja el jugador principal
    const playerColor = '#FF0000'; // Color del jugador principal (rojo)
    context.fillStyle = playerColor;
    context.fillRect(playerX, playerY, playerWidth, playerHeight);

    // Dibuja el nombre encima del jugador
    context.font = '12px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText(playerName, playerX + playerWidth / 2, playerY - 5);
}

draw();
  
