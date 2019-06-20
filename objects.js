var playlist = {
  metallica: 'FadeToBlack'
};

function updatePlaylist (playlist, artistName, songTitle){
  var playlist = { [artistName]:songTitle }
  return playlist
}
