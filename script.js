const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Dibuja el jugador principal
const playerColor = '#FF0000'; // Color del jugador principal (rojo)
const playerName = 'Jugador 1'; // Nombre del jugador principal

context.fillStyle = playerColor;
context.fillRect(50, 50, 30, 30); // Dibuja un cubo en la posición (50, 50) con ancho y altura de 30 píxeles

// Dibuja el nombre encima del jugador
context.font = '12px Arial';
context.fillStyle = 'black';
context.textAlign = 'center';
context.fillText(playerName, 65, 45);

