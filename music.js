const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const audio = document.querySelector('.song');
const forwardButton = document.querySelector('.forward');
const backwardButton = document.querySelector('.fa-backward-step');
const lineChild = document.querySelector('.lineChild');
const progressBar = document.querySelector('.line');
const startTime = document.querySelector('#start');
const endTime = document.querySelector('#end');

// Volume slider
const volumeSlider = document.querySelector('#volume');
const volumeIcon = document.querySelector('.volume img');

// Array of songs
const songs = [
    { title: "PERFECT NIGHT", src: "LE SSERAFIM - Perfect Night.mp3" },
    { title: "CRAZY", src: "LE SSERAFIM - crazy.mp3" },
    { title: "EASY", src: "LE SSERAFIM - easy.mp3" }
];
let currentSongIndex = 0;

// Load and initialize a song
function loadSong(index) {
    audio.src = songs[index].src;
    document.querySelector('.name').textContent = songs[index].title;
    audio.addEventListener('loadedmetadata', () => {
        endTime.textContent = formatTime(audio.duration); // Display song duration
    });
    resetProgress();
}

// Format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Play song
function playSong() {
    playButton.classList.add('none');
    pauseButton.classList.remove('none');
    audio.play();
}

// Pause song
function pauseSong() {
    playButton.classList.remove('none');
    pauseButton.classList.add('none');
    audio.pause();
}

// Forward to the next song
function forward() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Backward to the previous song
function backward() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Update the progress bar and start time every second
function updateProgress() {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        lineChild.style.width = `${progressPercent}%`; // Move lineChild

        // Update start time every second
        startTime.textContent = formatTime(Math.floor(audio.currentTime));
    }
}

// Reset progress bar and start time
function resetProgress() {
    lineChild.style.width = '0%';
    startTime.textContent = '0:00';
}

// Play the next song automatically when the current song ends
function handleSongEnd() {
    forward();
    console.log("Song ended. Moving to the next song.");
}

// Change volume based on slider value
volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value / 100; 
    audio.volume = volume;
    
    // Update volume icon based on the volume level
    if (volume === 0) {
        volumeIcon.src = 'volume-muted-icon.png';
    } else if (volume < 0.5) {
        volumeIcon.src = 'volume-low-icon.png';
    } else {
        volumeIcon.src = 'volume-high-icon.png';
    }

    // Save volume to localStorage
    localStorage.setItem('volume', volume);
});

// Save the current state (song, current time, and volume) when the page is unloaded
window.addEventListener('beforeunload', function() {
    localStorage.setItem('currentSongIndex', currentSongIndex);
    localStorage.setItem('currentTime', audio.currentTime);
});

// Load the previous state when the page loads
window.addEventListener('load', function() {
    const savedSongIndex = localStorage.getItem('currentSongIndex');
    const savedTime = localStorage.getItem('currentTime');
    const savedVolume = localStorage.getItem('volume');

    if (savedSongIndex !== null) {
        currentSongIndex = parseInt(savedSongIndex);
        loadSong(currentSongIndex);

        // Restore audio playback position
        if (savedTime !== null) {
            audio.currentTime = parseFloat(savedTime);
        }

        // Restore audio volume
        if (savedVolume !== null) {
            audio.volume = parseFloat(savedVolume);
            volumeSlider.value = savedVolume * 100;  // Update slider
            // Set volume icon
            if (savedVolume == 0) {
                volumeIcon.src = 'volume-muted-icon.png';
            } else if (savedVolume < 0.5) {
                volumeIcon.src = 'volume-low-icon.png';
            } else {
                volumeIcon.src = 'volume-high-icon.png';
            }
        }

        playSong();  // Start playing the song automatically
    }
});

// Event Listeners
playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
forwardButton.addEventListener('click', forward);
backwardButton.addEventListener('click', backward);
audio.addEventListener('timeupdate', updateProgress); // Update progress dynamically
audio.addEventListener('ended', handleSongEnd); // Play next song when current ends
progressBar.addEventListener('click', setProgress);

// Load the first song initially
loadSong(currentSongIndex);

