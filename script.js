const audioPlayer = document.getElementById('audioPlayer');
const audioLinks = [
  // Coloca aquí los enlaces de YouTube
  'https://www.youtube.com/watch?v=DfyiWf88iHw'
];

let currentTrackIndex = 0;

function playAudio(index) {
  const link = audioLinks[index];
  const videoId = link.match(/[?&]v=([^&#]+)/)[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`;

  audioPlayer.src = embedUrl;
  audioPlayer.allow = 'autoplay';
  audioPlayer.frameborder = '0';
  audioPlayer.allowfullscreen = true;
}

playAudio(currentTrackIndex);
