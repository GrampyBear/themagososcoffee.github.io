const audioPlayer = document.getElementById('audioPlayer');
const audioLinks = [
  // Coloca aquí los enlaces de YouTube, Spotify y SoundCloud
  // Ejemplo: 'https://www.youtube.com/watch?v=VIDEO_ID'
  'https://open.spotify.com/playlist/0XiqJVlqDDwRtodG24Xn0P?si=7kPjz6z1T-KKyLFPeCDO3g&utm_source=copy-link'
];

let currentTrackIndex = 0;

function playAudio(index) {
  const link = audioLinks[index];
  if (link.includes('youtube.com') || link.includes('youtu.be')) {
    // Si es un enlace de YouTube
    const videoId = link.match(/[?&]v=([^&#]+)/)[1];
    audioPlayer.src = `https://www.youtube.com/embed/${videoId}`;
  } else {
    // Para otros enlaces (Spotify, SoundCloud, etc.)
    audioPlayer.src = link;
  }
  audioPlayer.play();
}

function changeTrack(direction) {
  currentTrackIndex += direction;
  if (currentTrackIndex < 0) {
    currentTrackIndex = audioLinks.length - 1;
  } else if (currentTrackIndex >= audioLinks.length) {
    currentTrackIndex = 0;
  }
  playAudio(currentTrackIndex);
}

playAudio(currentTrackIndex);

audioPlayer.addEventListener('ended', () => {
  changeTrack(1); // Reproduce la siguiente canción al finalizar la actual
});
