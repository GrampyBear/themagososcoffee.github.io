const audioPlayer = document.getElementById('audioPlayer');
const audioLinks = [
  // Coloca aquí los enlaces de YouTube
  // Ejemplo: 'https://www.youtube.com/watch?v=VIDEO_ID'
  'https://www.youtube.com/watch?v=DfyiWf88iHw'
];

let currentTrackIndex = 0;

function playAudio(index) {
  const link = audioLinks[index];
  const videoId = link.match(/[?&]v=([^&#]+)/)[1];
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1`;

  const iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  iframe.style.display = 'none';
  audioPlayer.innerHTML = '';
  audioPlayer.appendChild(iframe);
}

playAudio(currentTrackIndex);
