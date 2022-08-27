const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

//song list
const songList = [
  {
    path: "Choices The Bad Cop.mp3",
    songName: "The Bad Cop - Choices",
  },
  {
    path: "PLA Volo Theme.mp3",
    songName: "Vs. Pokemon Wielder Volo",
  },
  {
    path: "PMDX Mt Thunder.mp3",
    songName: "Mount Thunder - Pokemon Mystery Dungeon DX",
  },
  {
    path: "Shadow Fight 2 Wasp Theme.wav",
    songName: "Ship Battle - Shadow Fight 2",
  }
];

let songPlaying = false;

// Functionality
function playSong() {
  songPlaying = true;
  audio.play();
  playPause.classList.add('active');
  playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

audio.onended = () => {
  pauseSong();
  // nextSong();
}

function pauseSong() {
  songPlaying = false;
  audio.pause();
  playPause.classList.remove('active');
  playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

playPause.addEventListener('click', () => {
  songPlaying ? pauseSong(): playSong(); 
  // since we had to do the condition checking, callback function was written which'll after checking status call the appropriate function
  // if there was no additional lines of code then the functions would've been directly passed as callbacks (no '()')
})

// Song Loading mechanism
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
}

function prevSong() {
  i > 0 ? i-- : i = songList.length - 1;
  loadSong(songList[i]);
  playSong();
}
prev.addEventListener('click', prevSong);

function nextSong() {
  i < songList.length - 1 ? i++ : i = 0;
  loadSong(songList[i]);
  playSong();
}
next.addEventListener('click', nextSong);

let i = 0;

// Initial Loading
loadSong(songList[i]);