// JavaScript for Canta Brasil Karaoke

// Function to show specific sections
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Navbar toggle for small screens
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Placeholder for music selection
function loadSongs() {
    const songList = document.getElementById('song-list');
    const songs = ['Song 1', 'Song 2', 'Song 3'];
    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.textContent = song;
        songItem.addEventListener('click', () => {
            showKaraokePlayer(song);
        });
        songList.appendChild(songItem);
    });
}

function showKaraokePlayer(song) {
    document.getElementById('karaoke-player').style.display = 'block';
    document.getElementById('current-song-title').textContent = song;
    // Load and play the song (Placeholder)
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = 'path/to/song.mp3';
    audioPlayer.play();
}

// Load songs on page load
document.addEventListener('DOMContentLoaded', loadSongs);

// Chat toggle
const chatToggle = document.getElementById('toggle-chat');
chatToggle.addEventListener('click', () => {
    const chatWidget = document.getElementById('chat-widget');
    chatWidget.classList.toggle('minimized');
});
