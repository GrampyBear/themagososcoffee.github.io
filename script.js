function showMessage() {
  alert("Disclaimer!\n\nHey hello! This page contains information and content that may not be suitable for all audiences, rated +18. As a creator, I am not responsible for any discomfort you may feel. These are my personal preferences, and they harm no one. I hope you enjoy your stay!");
}

document.querySelector(".header .extra").addEventListener("click", showMessage);

const phrases = ["Este es un mundo de gordos", "La grasa es bella", "No te avergüences de tu cuerpo", "El amor no tiene talla"];

const randomPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];

document.querySelector(".phrases").innerHTML = randomPhrase();

setInterval(randomPhrase, 5000);
