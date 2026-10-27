// State Management
let isCameraActive = false;
let autoSwitchEnabled = true;
let currentMood = "neutral";
let videoInterval = null;
let currentTrackId = "";

const webcam = document.getElementById('webcam');
const canvas = document.getElementById('overlay-canvas');
const ctx = canvas.getContext('2d');
const audioPlayer = document.getElementById('audio-player');
const btnPlayPause = document.getElementById('btn-play-pause');
const playIcon = document.getElementById('play-icon');
const btnToggleCam = document.getElementById('btn-toggle-cam');
const autoPlaySwitch = document.getElementById('auto-play-switch');
const volumeRange = document.getElementById('volume-range');
const eqContainer = document.querySelector('.equalizer-container');

// Audio Controls
volumeRange.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

btnPlayPause.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            playIcon.classList.replace('fa-play', 'fa-pause');
            eqContainer.classList.add('equalizer-active');
        }).catch(e => console.error("Audio playback error:", e));
    } else {
        audioPlayer.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
        eqContainer.classList.remove('equalizer-active');
    }
});

autoPlaySwitch.addEventListener('change', (e) => {
    autoSwitchEnabled = e.target.checked;
});

// Camera activation
btnToggleCam.addEventListener('click', async () => {
    if (!isCameraActive) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480, facingMode: "user" }
            });
            webcam.srcObject = stream;
            webcam.onloadedmetadata = () => {
                canvas.width = webcam.videoWidth;
                canvas.height = webcam.videoHeight;
                isCameraActive = true;
                btnToggleCam.innerHTML = '<i class="fa-solid fa-stop"></i> Stop Camera';
                btnToggleCam.style.background = '#ef4444';
                document.getElementById('system-status').innerText = "Analyzing Face in Real-Time...";
                startFrameAnalysis();
            };
        } catch (err) {
            alert("Camera permission denied or camera unavailable: " + err.message);
        }
    } else {
        stopCamera();
    }
});

function stopCamera() {
    if (webcam.srcObject) {
        webcam.srcObject.getTracks().forEach(track => track.stop());
    }
    clearInterval(videoInterval);
    isCameraActive = false;
    btnToggleCam.innerHTML = '<i class="fa-solid fa-play"></i> Start Camera';
    btnToggleCam.style.background = '';
    document.getElementById('system-status').innerText = "Camera Stopped";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Continuous Frame Capture and Emotion Inference
function startFrameAnalysis() {
    const captureCanvas = document.createElement('canvas');
    const captureCtx = captureCanvas.getContext('2d');

    videoInterval = setInterval(async () => {
        if (!isCameraActive || webcam.paused || webcam.ended) return;

        captureCanvas.width = 320;
        captureCanvas.height = 240;
        captureCtx.drawImage(webcam, 0, 0, 320, 240);
        const base64Image = captureCanvas.toDataURL('image/jpeg', 0.7);

        try {
            const response = await fetch('/api/analyze-frame', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: base64Image })
            });

            const data = await response.json();
            if (data.status === 'success') {
                updateUI(data);
            }
        } catch (err) {
            console.error("Inference network error:", err);
        }
    }, 750); // Analyze every 750ms for low CPU usage & smooth performance
}

const emojiMap = { happy: '😊', sad: '😢', angry: '😡', neutral: '😐' };

function updateUI(data) {
    const emotion = data.emotion;
    const confidence = Math.round(data.confidence * 100);

    // Update HUD
    document.getElementById('hud-emoji').innerText = emojiMap[emotion] || '😐';
    document.getElementById('hud-emotion').innerText = emotion.toUpperCase();
    document.getElementById('hud-confidence').innerText = `${confidence}% Match`;
    document.getElementById('current-mood-tag').innerText = `${emotion.toUpperCase()} MOOD`;

    // Draw Face Bounding Box
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (data.face_box) {
        const scaleX = canvas.width / 320;
        const scaleY = canvas.height / 240;
        const box = data.face_box;

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 3;
        ctx.strokeRect(box.x * scaleX, box.y * scaleY, box.w * scaleX, box.h * scaleY);
    }

    // Update Probability Progress Bars
    for (const [key, val] of Object.entries(data.probabilities)) {
        const pct = Math.round(val * 100);
        const bar = document.getElementById(`bar-${key}`);
        const label = document.getElementById(`prob-${key}`);
        if (bar && label) {
            bar.style.width = `${pct}%`;
            label.innerText = `${pct}%`;
        }
    }

    // Trigger Dynamic Music Recommendation when Mood Shifts
    if (emotion !== currentMood) {
        currentMood = emotion;
        onMoodChange(data.recommended_track, data.playlist);
    }
}

function onMoodChange(track, playlist) {
    if (!track) return;

    document.getElementById('track-title').innerText = track.title;
    document.getElementById('track-artist').innerText = track.artist;
    document.getElementById('track-genre').innerText = track.genre;
    document.getElementById('track-mood').innerText = `Mood: ${track.mood}`;
    document.getElementById('album-cover').src = track.cover;

    // Render Playlist
    const playlistEl = document.getElementById('playlist-items');
    playlistEl.innerHTML = '';
    playlist.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span><strong>${item.title}</strong> - ${item.artist}</span> <i class="fa-solid fa-play"></i>`;
        li.onclick = () => switchTrack(item);
        playlistEl.appendChild(li);
    });

    if (autoSwitchEnabled && track.id !== currentTrackId) {
        switchTrack(track);
    }
}

function switchTrack(track) {
    currentTrackId = track.id;
    audioPlayer.src = track.url;
    audioPlayer.load();
    audioPlayer.play().then(() => {
        playIcon.classList.replace('fa-play', 'fa-pause');
        eqContainer.classList.add('equalizer-active');
    }).catch(e => {
        console.log("Audio play initiated (user interaction required on some browsers):", e);
    });
}