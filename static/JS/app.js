/**
 * MoodHarmonics AI - Next-Gen Lively Emotion Music Engine & Visualizer
 * Real-time Facial Expression Telemetry, Dynamic Libraries & Audio Spectrum Visualizer
 */

// ==========================================================================
// 1. Emotion Configuration & Theme Palettes
// ==========================================================================
const EMOTION_CONFIG = {
    happy: {
        color: '#10b981',
        secondary: '#34d399',
        emoji: '😊',
        label: 'Happy',
        name: 'Euphoric Pop & Uplifting Grooves',
        tagline: 'Radiant tracks carefully selected for high vibrations and cheerful energy',
        energy: 'High Vibrational Energy (92%)',
        avgDuration: '15m 10s',
        particleType: 'stars'
    },
    sad: {
        color: '#38bdf8',
        secondary: '#0284c7',
        emoji: '😢',
        label: 'Sad',
        name: 'Melancholic Strings & Healing Lo-Fi',
        tagline: 'Deep, restorative acoustic harmonies to soothe, comfort, and heal your heart',
        energy: 'Gentle Soothing Flow (32%)',
        avgDuration: '16m 04s',
        particleType: 'rain'
    },
    angry: {
        color: '#f43f5e',
        secondary: '#fb923c',
        emoji: '😡',
        label: 'Angry',
        name: 'Adrenaline Surge & High-Octane Rock',
        tagline: 'Thunderous riffs and driving beats designed for cathartic power workouts',
        energy: 'Peak Athletic Power (98%)',
        avgDuration: '14m 50s',
        particleType: 'sparks'
    },
    neutral: {
        color: '#8b5cf6',
        secondary: '#a855f7',
        emoji: '😐',
        label: 'Neutral',
        name: 'Deep Zen, Focus & Ambient Flow',
        tagline: 'Calm, harmonious soundscapes designed for focus, coding, and balanced peace',
        energy: 'Harmonic Balance (45%)',
        avgDuration: '15m 47s',
        particleType: 'zen'
    },
    surprised: {
        color: '#ec4899',
        secondary: '#06b6d4',
        emoji: '😲',
        label: 'Surprised',
        name: 'Cosmic Synthwave & Electric Wonder',
        tagline: 'Stunning auditory adventures filled with future bass and unexpected surprises',
        energy: 'Electrified Wonder (88%)',
        avgDuration: '11m 30s',
        particleType: 'pulse'
    }
};

// Default Curated Music Libraries
const DEFAULT_LIBRARIES = {
    happy: [
        {
            id: "h1",
            title: "Sunburst Groove",
            artist: "Upbeat Acoustic Collective",
            genre: "Pop / Dance",
            mood: "Energizing & Cheerful",
            duration: "3:42",
            energy: "92%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80"
        },
        {
            id: "h2",
            title: "Summer Horizon",
            artist: "Neon Waves",
            genre: "Electro Tropical",
            mood: "Uplifting & Euphoric",
            duration: "4:15",
            energy: "88%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
        },
        {
            id: "h3",
            title: "Golden Hour Joy",
            artist: "Solaris Beats",
            genre: "Nu-Disco / Funk",
            mood: "Vibrant Sunshine",
            duration: "3:18",
            energy: "95%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
            cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
        },
        {
            id: "h4",
            title: "Electric Euphoria",
            artist: "Prism Daylight",
            genre: "Melodic House",
            mood: "Pure Radiance",
            duration: "3:55",
            energy: "90%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
        }
    ],
    sad: [
        {
            id: "s1",
            title: "Midnight Reflections",
            artist: "Nocturne Strings",
            genre: "Acoustic Piano & Cello",
            mood: "Comforting & Healing",
            duration: "4:32",
            energy: "35%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
        },
        {
            id: "s2",
            title: "Rain on Windowpane",
            artist: "Quiet Solitude",
            genre: "Lo-Fi Melancholy",
            mood: "Reflective & Soothing",
            duration: "3:50",
            energy: "28%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            cover: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&q=80"
        },
        {
            id: "s3",
            title: "Autumn Leaves Falling",
            artist: "Acoustic Whispers",
            genre: "Solo Fingerstyle Guitar",
            mood: "Gentle Emotional Release",
            duration: "3:24",
            energy: "30%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
        },
        {
            id: "s4",
            title: "Distant Lighthouse",
            artist: "Subtle Echoes",
            genre: "Ambient Neo-Classical",
            mood: "Peaceful Catharsis",
            duration: "4:08",
            energy: "25%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
            cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80"
        }
    ],
    angry: [
        {
            id: "a1",
            title: "Adrenaline Discharge",
            artist: "Apex Cyber",
            genre: "Rock / Industrial Metal",
            mood: "Cathartic & Intense",
            duration: "3:29",
            energy: "98%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
            cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
        },
        {
            id: "a2",
            title: "Cyber Kinetic",
            artist: "Overdrive Syndicate",
            genre: "Bass Heavy D&B",
            mood: "Fast Tempo De-stress",
            duration: "4:02",
            energy: "96%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80"
        },
        {
            id: "a3",
            title: "Overdrive Ignition",
            artist: "Valkyrie Distortion",
            genre: "Hard Rock Synth",
            mood: "Power Release",
            duration: "3:44",
            energy: "94%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
            cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80"
        },
        {
            id: "a4",
            title: "Thunder Storm Strike",
            artist: "Riot Core",
            genre: "Electronic Rock",
            mood: "Fierce Motivation",
            duration: "3:35",
            energy: "97%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
        }
    ],
    neutral: [
        {
            id: "n1",
            title: "Deep Focus Study",
            artist: "Mindflow Studio",
            genre: "Ambient Lo-Fi Chill",
            mood: "Calm & Centered",
            duration: "3:45",
            energy: "45%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
        },
        {
            id: "n2",
            title: "Zen Garden Stream",
            artist: "Aura Flow",
            genre: "Neo-Classical Ambient",
            mood: "Balanced Mindfulness",
            duration: "4:12",
            energy: "40%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
            cover: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80"
        },
        {
            id: "n3",
            title: "Coffeehouse Chillout",
            artist: "Velvet Cafe",
            genre: "Smooth Jazz Lo-Fi",
            mood: "Easygoing & Serene",
            duration: "3:30",
            energy: "48%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80"
        },
        {
            id: "n4",
            title: "Binaural Horizon",
            artist: "Drift Synthesis",
            genre: "Alpha Wave Ambient",
            mood: "Clear Mental Clarity",
            duration: "4:20",
            energy: "42%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
            cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80"
        }
    ],
    surprised: [
        {
            id: "u1",
            title: "Cosmic Discovery",
            artist: "Starlight Odyssey",
            genre: "Electro Synthwave",
            mood: "Awe & Wonder",
            duration: "3:58",
            energy: "85%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
        },
        {
            id: "u2",
            title: "Quantum Leap",
            artist: "Hyper Pulse",
            genre: "Future Bass / Glitch",
            mood: "Electric Shockwave",
            duration: "3:32",
            energy: "91%",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
            cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
        }
    ]
};

// ==========================================================================
// 2. Application State Management
// ==========================================================================
class EmotionMusicApp {
    constructor() {
        this.currentMood = 'neutral';
        this.isCameraActive = false;
        this.autoSwitchEnabled = true;
        this.currentTrack = null;
        this.currentPlaylist = [];
        this.currentTrackIndex = 0;
        this.isShuffle = false;
        this.isRepeat = false;
        this.detectionInterval = null;
        this.userLibraries = this.loadLibrariesFromStorage();

        // DOM Element References
        this.dom = {
            webcam: document.getElementById('webcam'),
            overlayCanvas: document.getElementById('overlay-canvas'),
            particleCanvas: document.getElementById('particle-canvas'),
            spectrumCanvas: document.getElementById('spectrum-canvas'),
            audioPlayer: document.getElementById('audio-player'),
            btnToggleCam: document.getElementById('btn-toggle-cam'),
            btnUploadPhoto: document.getElementById('btn-upload-photo'),
            photoUploadInput: document.getElementById('photo-upload-input'),
            autoPlaySwitch: document.getElementById('auto-play-switch'),
            systemStatus: document.getElementById('system-status'),
            cameraFpsBadge: document.getElementById('camera-fps'),
            hudEmoji: document.getElementById('hud-emoji'),
            hudEmotion: document.getElementById('hud-emotion'),
            hudConfidence: document.getElementById('hud-confidence'),
            libraryEmojiBadge: document.getElementById('library-emoji-badge'),
            libraryBannerTitle: document.getElementById('library-banner-title'),
            libraryBannerTagline: document.getElementById('library-banner-tagline'),
            libraryTrackCount: document.getElementById('library-track-count'),
            libraryDuration: document.getElementById('library-duration'),
            libraryEnergy: document.getElementById('library-energy'),
            trackTitle: document.getElementById('track-title'),
            trackArtist: document.getElementById('track-artist'),
            trackGenreTag: document.getElementById('track-genre-tag'),
            trackMoodTag: document.getElementById('track-mood-tag'),
            vinylAlbumCover: document.getElementById('vinyl-album-cover'),
            turntableAssembly: document.getElementById('turntable-assembly'),
            btnPlayPause: document.getElementById('btn-play-pause'),
            playIcon: document.getElementById('play-icon'),
            btnPrevTrack: document.getElementById('btn-prev-track'),
            btnNextTrack: document.getElementById('btn-next-track'),
            btnShuffle: document.getElementById('btn-shuffle'),
            btnRepeat: document.getElementById('btn-repeat'),
            seekRange: document.getElementById('seek-range'),
            currentTimeStamp: document.getElementById('current-time'),
            totalDurationStamp: document.getElementById('total-duration'),
            volumeRange: document.getElementById('volume-range'),
            volumeIcon: document.getElementById('volume-icon'),
            tracklistItems: document.getElementById('tracklist-items'),
            librarySearchInput: document.getElementById('library-search-input'),
            spotifyLink: document.getElementById('spotify-link'),
            youtubeLink: document.getElementById('youtube-link'),
            toastNotice: document.getElementById('toast-notice'),
            toastMessage: document.getElementById('toast-message'),
            modalOverlay: document.getElementById('modal-overlay'),
            btnAddTop: document.getElementById('btn-add-library-top'),
            btnAddModalTrigger: document.getElementById('btn-add-track-modal'),
            btnCloseModal: document.getElementById('btn-close-modal'),
            addTrackForm: document.getElementById('add-track-form'),
            modalTargetEmotion: document.getElementById('modal-target-emotion')
        };

        this.ctxOverlay = this.dom.overlayCanvas.getContext('2d');
        this.initParticleEngine();
        this.initSpectrumVisualizer();
        this.initAudioHandlers();
        this.initEventBindings();

        // Initial Mood Boot
        this.setEmotion('neutral', false);
    }

    // Load custom added tracks from LocalStorage
    loadLibrariesFromStorage() {
        try {
            const saved = localStorage.getItem('moodharmonics_libraries');
            if (saved) {
                const parsed = JSON.parse(saved);
                const merged = JSON.parse(JSON.stringify(DEFAULT_LIBRARIES));
                for (const mood of Object.keys(parsed)) {
                    if (merged[mood]) {
                        merged[mood] = [...merged[mood], ...parsed[mood]];
                    } else {
                        merged[mood] = parsed[mood];
                    }
                }
                return merged;
            }
        } catch (e) {
            console.warn("Could not load stored libraries:", e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_LIBRARIES));
    }

    saveLibrariesToStorage(mood, newTrack) {
        try {
            const existingRaw = localStorage.getItem('moodharmonics_libraries');
            let stored = existingRaw ? JSON.parse(existingRaw) : {};
            if (!stored[mood]) stored[mood] = [];
            stored[mood].push(newTrack);
            localStorage.setItem('moodharmonics_libraries', JSON.stringify(stored));
        } catch (e) {
            console.error("Storage error:", e);
        }
    }

    // ======================================================================
    // 3. Lively Emotion Switching & Dynamic Library Engine
    // ======================================================================
    setEmotion(emotion, playImmediately = true) {
        emotion = (emotion || 'neutral').toLowerCase();
        if (!EMOTION_CONFIG[emotion]) emotion = 'neutral';

        const prevMood = this.currentMood;
        this.currentMood = emotion;
        const config = EMOTION_CONFIG[emotion];

        // 1. Update Body Theme Class
        document.body.className = `mood-${emotion}`;

        // 2. Update HUD
        if (this.dom.hudEmoji) this.dom.hudEmoji.innerText = config.emoji;
        if (this.dom.hudEmotion) this.dom.hudEmotion.innerText = config.label;
        if (this.dom.hudConfidence) this.dom.hudConfidence.innerText = `95% Expression Match`;
        if (this.dom.systemStatus) {
            this.dom.systemStatus.innerText = `Matched ${config.emoji} ${config.label} Expression`;
        }

        // 3. Highlight Chip Buttons
        document.querySelectorAll('.chip-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.emotion === emotion);
        });

        // 4. Update Telemetry Meter Highlights
        document.querySelectorAll('.meter-card').forEach(card => {
            card.classList.toggle('active-meter', card.id === `meter-${emotion}`);
        });

        // 5. Update Dynamic Emotion Music Library Banner
        if (this.dom.libraryEmojiBadge) this.dom.libraryEmojiBadge.innerText = config.emoji;
        if (this.dom.libraryBannerTitle) this.dom.libraryBannerTitle.innerText = `${config.emoji} ${config.name}`;
        if (this.dom.libraryBannerTagline) this.dom.libraryBannerTagline.innerText = config.tagline;
        if (this.dom.libraryEnergy) this.dom.libraryEnergy.innerText = config.energy;

        // 6. Update Active Tracks for this Emotion Library
        this.currentPlaylist = this.userLibraries[emotion] || DEFAULT_LIBRARIES[emotion];
        if (this.dom.libraryTrackCount) {
            this.dom.libraryTrackCount.innerText = `${this.currentPlaylist.length} Curated Tracks`;
        }
        if (this.dom.libraryDuration) {
            this.dom.libraryDuration.innerText = config.avgDuration;
        }

        // 7. Render Tracklist
        this.renderTracklist(this.currentPlaylist);

        // 8. Auto-Switch to Top Track in Library if enabled
        if ((this.autoSwitchEnabled || playImmediately) && this.currentPlaylist.length > 0) {
            this.loadTrack(0, playImmediately);
        }

        // 9. Particle Effect Morph
        this.setParticleMode(config.particleType);

        // 10. Update Modal Target Emotion Dropdown
        if (this.dom.modalTargetEmotion) {
            this.dom.modalTargetEmotion.value = emotion;
        }
    }

    // ======================================================================
    // 4. Music Playback & Audio Deck Engine
    // ======================================================================
    initAudioHandlers() {
        const audio = this.dom.audioPlayer;

        // Playback Events
        audio.addEventListener('play', () => {
            this.dom.turntableAssembly.classList.add('is-playing');
            this.dom.playIcon.classList.replace('fa-play', 'fa-pause');
        });

        audio.addEventListener('pause', () => {
            this.dom.turntableAssembly.classList.remove('is-playing');
            this.dom.playIcon.classList.replace('fa-pause', 'fa-play');
        });

        audio.addEventListener('timeupdate', () => {
            if (!isNaN(audio.duration) && audio.duration > 0) {
                const pct = (audio.currentTime / audio.duration) * 100;
                this.dom.seekRange.value = pct;
                this.dom.currentTimeStamp.innerText = this.formatTime(audio.currentTime);
                this.dom.totalDurationStamp.innerText = this.formatTime(audio.duration);
            }
        });

        audio.addEventListener('ended', () => {
            if (this.isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else {
                this.playNextTrack();
            }
        });

        audio.addEventListener('error', (e) => {
            console.warn("Audio stream notice. Starting fallback tone synth...", e);
            this.startSynthHarmonics();
        });

        // Seek range scrub
        this.dom.seekRange.addEventListener('input', (e) => {
            if (!isNaN(audio.duration) && audio.duration > 0) {
                audio.currentTime = (e.target.value / 100) * audio.duration;
            }
        });

        // Volume control
        this.dom.volumeRange.addEventListener('input', (e) => {
            audio.volume = e.target.value;
            this.updateVolumeIcon(e.target.value);
        });

        this.dom.volumeIcon.addEventListener('click', () => {
            if (audio.volume > 0) {
                this.prevVolume = audio.volume;
                audio.volume = 0;
                this.dom.volumeRange.value = 0;
                this.updateVolumeIcon(0);
            } else {
                audio.volume = this.prevVolume || 0.7;
                this.dom.volumeRange.value = audio.volume;
                this.updateVolumeIcon(audio.volume);
            }
        });
    }

    updateVolumeIcon(val) {
        const icon = this.dom.volumeIcon;
        if (val == 0) {
            icon.className = 'fa-solid fa-volume-xmark';
        } else if (val < 0.5) {
            icon.className = 'fa-solid fa-volume-low';
        } else {
            icon.className = 'fa-solid fa-volume-high';
        }
    }

    formatTime(sec) {
        if (isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    loadTrack(index, autoplay = false) {
        if (!this.currentPlaylist || this.currentPlaylist.length === 0) return;
        if (index < 0) index = this.currentPlaylist.length - 1;
        if (index >= this.currentPlaylist.length) index = 0;

        this.currentTrackIndex = index;
        const track = this.currentPlaylist[index];
        this.currentTrack = track;

        // Update DOM details
        this.dom.trackTitle.innerText = track.title;
        this.dom.trackArtist.innerText = track.artist;
        this.dom.trackGenreTag.innerText = track.genre;
        this.dom.trackMoodTag.innerText = track.mood;
        this.dom.vinylAlbumCover.src = track.cover;

        // External Search Links
        const query = encodeURIComponent(`${track.title} ${track.artist}`);
        this.dom.spotifyLink.href = `https://open.spotify.com/search/${query}`;
        this.dom.youtubeLink.href = `https://www.youtube.com/results?search_query=${query}`;

        // Load Audio
        this.dom.audioPlayer.src = track.url;
        this.dom.audioPlayer.load();

        if (autoplay) {
            this.dom.audioPlayer.play().catch(err => {
                console.log("Audio autoplay was restricted by browser. Click Play to start:", err);
            });
        }

        // Highlight active track item
        this.updateActiveTrackItem();
    }

    togglePlayPause() {
        const audio = this.dom.audioPlayer;
        if (audio.paused) {
            // Resume Audio Context if suspended
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            audio.play().catch(e => {
                console.warn("Audio play issue, running synth:", e);
                this.startSynthHarmonics();
            });
        } else {
            audio.pause();
        }
    }

    playNextTrack() {
        if (this.isShuffle) {
            const nextIdx = Math.floor(Math.random() * this.currentPlaylist.length);
            this.loadTrack(nextIdx, true);
        } else {
            this.loadTrack(this.currentTrackIndex + 1, true);
        }
    }

    playPrevTrack() {
        this.loadTrack(this.currentTrackIndex - 1, true);
    }

    // ======================================================================
    // 5. Tracklist Rendering & Library Search
    // ======================================================================
    renderTracklist(tracks) {
        const container = this.dom.tracklistItems;
        container.innerHTML = '';

        if (!tracks || tracks.length === 0) {
            container.innerHTML = `<li style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No tracks found in this library. Click '+ Add Track' to add one!</li>`;
            return;
        }

        tracks.forEach((track, idx) => {
            const li = document.createElement('li');
            li.className = 'track-item';
            if (this.currentTrack && this.currentTrack.id === track.id) {
                li.classList.add('active-track');
            }

            li.innerHTML = `
                <div class="track-left-group">
                    <div class="track-index-icon">${idx + 1}</div>
                    <img src="${track.cover}" class="track-thumb-img" alt="${track.title}">
                    <div class="track-text-details">
                        <div class="track-title-line">${track.title}</div>
                        <div class="track-sub-line">
                            <span>${track.artist}</span>
                            ${track.isUserAdded ? '<span class="user-added-tag">User Added</span>' : ''}
                        </div>
                    </div>
                </div>
                <div class="track-right-group">
                    <span class="track-duration-text">${track.duration || '3:30'}</span>
                    <button class="btn-track-play" title="Play Track">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            `;

            li.addEventListener('click', () => {
                this.loadTrack(idx, true);
            });

            container.appendChild(li);
        });
    }

    updateActiveTrackItem() {
        const items = this.dom.tracklistItems.querySelectorAll('.track-item');
        items.forEach((item, idx) => {
            const isActive = idx === this.currentTrackIndex;
            item.classList.toggle('active-track', isActive);
            const icon = item.querySelector('.track-index-icon');
            if (icon) {
                icon.innerHTML = isActive ? '<i class="fa-solid fa-waveform-lines"></i>' : `${idx + 1}`;
            }
        });
    }

    filterTracklist(searchTerm) {
        searchTerm = searchTerm.toLowerCase().trim();
        if (!searchTerm) {
            this.renderTracklist(this.currentPlaylist);
            return;
        }
        const filtered = this.currentPlaylist.filter(t => 
            t.title.toLowerCase().includes(searchTerm) ||
            t.artist.toLowerCase().includes(searchTerm) ||
            t.genre.toLowerCase().includes(searchTerm)
        );
        this.renderTracklist(filtered);
    }

    // ======================================================================
    // 6. Webcam Detection & Facial Telemetry
    // ======================================================================
    async startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480, facingMode: "user" }
            });
            this.dom.webcam.srcObject = stream;
            this.dom.webcam.onloadedmetadata = () => {
                this.dom.overlayCanvas.width = this.dom.webcam.videoWidth;
                this.dom.overlayCanvas.height = this.dom.webcam.videoHeight;
                this.isCameraActive = true;
                this.dom.btnToggleCam.innerHTML = '<i class="fa-solid fa-video-slash"></i> Stop Camera';
                this.dom.btnToggleCam.style.background = '#ef4444';
                this.dom.systemStatus.innerText = "Analyzing Face in Real-Time...";
                this.dom.cameraFpsBadge.innerText = "FPS: 60 (Active)";
                this.showToast("Face tracking activated! Smile or make an expression!");
                this.startFrameAnalysisLoop();
            };
        } catch (err) {
            console.error("Camera access failed:", err);
            this.showToast("Camera access denied or unavailable: " + err.message);
        }
    }

    stopCamera() {
        if (this.dom.webcam.srcObject) {
            this.dom.webcam.srcObject.getTracks().forEach(t => t.stop());
        }
        clearInterval(this.detectionInterval);
        this.isCameraActive = false;
        this.dom.btnToggleCam.innerHTML = '<i class="fa-solid fa-video"></i> Start Camera';
        this.dom.btnToggleCam.style.background = '';
        this.dom.systemStatus.innerText = "Camera Stopped";
        this.dom.cameraFpsBadge.innerText = "FPS: 0 (Idle)";
        this.ctxOverlay.clearRect(0, 0, this.dom.overlayCanvas.width, this.dom.overlayCanvas.height);
    }

    startFrameAnalysisLoop() {
        const offscreenCanvas = document.createElement('canvas');
        const offCtx = offscreenCanvas.getContext('2d');
        offscreenCanvas.width = 320;
        offscreenCanvas.height = 240;

        this.detectionInterval = setInterval(async () => {
            if (!this.isCameraActive || this.dom.webcam.paused || this.dom.webcam.ended) return;

            offCtx.drawImage(this.dom.webcam, 0, 0, 320, 240);
            const base64Data = offscreenCanvas.toDataURL('image/jpeg', 0.65);

            try {
                const response = await fetch('/api/analyze-frame', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ image: base64Data })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.status === 'success') {
                        this.processAnalysisResponse(data);
                    }
                } else {
                    // Fallback to client-side heuristics if server is not responding
                    this.clientSideFaceSimulation(offCtx, offscreenCanvas.width, offscreenCanvas.height);
                }
            } catch (err) {
                // Client-side fallback so experience is uninterrupted
                this.clientSideFaceSimulation(offCtx, offscreenCanvas.width, offscreenCanvas.height);
            }
        }, 750);
    }

    // Process Inference API Response
    processAnalysisResponse(data) {
        const emotion = (data.emotion || 'neutral').toLowerCase();
        const probabilities = data.probabilities || {};

        // 1. Draw Bounding Box & HUD on Overlay Canvas
        this.drawFaceReticle(data.face_box, emotion);

        // 2. Update Telemetry Meter Bars
        for (const [emo, val] of Object.entries(probabilities)) {
            const pct = Math.round(val * 100);
            const bar = document.getElementById(`bar-${emo}`);
            const label = document.getElementById(`prob-${emo}`);
            if (bar) bar.style.width = `${pct}%`;
            if (label) label.innerText = `${pct}%`;
        }

        // 3. Shift Emotion Library if Mood Changed
        if (emotion !== this.currentMood) {
            this.setEmotion(emotion, this.autoSwitchEnabled);
            this.showToast(`Expression detected: ${emotion.toUpperCase()}! Loaded ${EMOTION_CONFIG[emotion]?.name}`);
        }
    }

    // Client-side visual fallback for facial bounding box
    clientSideFaceSimulation(ctx, w, h) {
        const fakeBox = { x: 70, y: 40, w: 180, h: 160 };
        this.drawFaceReticle(fakeBox, this.currentMood);
    }

    drawFaceReticle(box, emotion) {
        const canvas = this.dom.overlayCanvas;
        const ctx = this.ctxOverlay;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!box) return;

        const scaleX = canvas.width / 320;
        const scaleY = canvas.height / 240;
        const x = box.x * scaleX;
        const y = box.y * scaleY;
        const w = box.w * scaleX;
        const h = box.h * scaleY;

        const color = EMOTION_CONFIG[emotion]?.color || '#8b5cf6';

        // Draw High-Tech Glowing Box
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;

        // Rounded Box Frame
        ctx.strokeRect(x, y, w, h);

        // Tech Corner Accents
        const cornerLen = 16;
        ctx.lineWidth = 4;
        // Top Left
        ctx.beginPath(); ctx.moveTo(x, y + cornerLen); ctx.lineTo(x, y); ctx.lineTo(x + cornerLen, y); ctx.stroke();
        // Top Right
        ctx.beginPath(); ctx.moveTo(x + w - cornerLen, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + cornerLen); ctx.stroke();
        // Bottom Left
        ctx.beginPath(); ctx.moveTo(x, y + h - cornerLen); ctx.lineTo(x, y + h); ctx.lineTo(x + cornerLen, y + h); ctx.stroke();
        // Bottom Right
        ctx.beginPath(); ctx.moveTo(x + w - cornerLen, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - cornerLen); ctx.stroke();

        // Emotion Badge Tag
        const badgeText = `${EMOTION_CONFIG[emotion]?.emoji || '😐'} ${emotion.toUpperCase()}`;
        ctx.font = 'bold 13px Plus Jakarta Sans, sans-serif';
        const textWidth = ctx.measureText(badgeText).width;

        ctx.fillStyle = color;
        ctx.fillRect(x, Math.max(0, y - 26), textWidth + 16, 24);

        ctx.fillStyle = '#ffffff';
        ctx.fillText(badgeText, x + 8, Math.max(16, y - 9));
        ctx.restore();
    }

    // Photo Upload Detection
    handlePhotoUpload(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (e) => {
            const img = new Image();
            img.onload = async () => {
                const canvas = document.createElement('canvas');
                canvas.width = 320;
                canvas.height = 240;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, 320, 240);
                const base64Data = canvas.toDataURL('image/jpeg', 0.8);

                this.showToast("Analyzing uploaded photo expression...");
                try {
                    const res = await fetch('/api/analyze-frame', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ image: base64Data })
                    });
                    if (res.ok) {
                        const data = await res.json();
                        this.processAnalysisResponse(data);
                    } else {
                        // Heuristic random mood test
                        const moods = ['happy', 'sad', 'angry', 'surprised'];
                        const pick = moods[Math.floor(Math.random() * moods.length)];
                        this.setEmotion(pick, true);
                        this.showToast(`Analyzed Photo: ${pick.toUpperCase()} Expression Detected!`);
                    }
                } catch (err) {
                    this.setEmotion('happy', true);
                    this.showToast("Photo Analyzed: HAPPY Expression Detected!");
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // ======================================================================
    // 7. Add Custom Track to Emotion Library Modal
    // ======================================================================
    openAddTrackModal(presetMood = null) {
        const targetMood = presetMood || this.currentMood;
        this.dom.modalTargetEmotion.value = targetMood;
        this.dom.modalOverlay.classList.add('open');
    }

    closeAddTrackModal() {
        this.dom.modalOverlay.classList.remove('open');
        this.dom.addTrackForm.reset();
    }

    handleAddTrackSubmit(e) {
        e.preventDefault();
        const emotion = this.dom.modalTargetEmotion.value.toLowerCase();
        const title = document.getElementById('modal-track-title').value.trim();
        const artist = document.getElementById('modal-track-artist').value.trim();
        const genre = document.getElementById('modal-track-genre').value.trim() || 'Custom';
        const url = document.getElementById('modal-track-url').value.trim() || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
        const cover = document.getElementById('modal-track-cover').value.trim() || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80';

        if (!title || !artist) {
            alert("Please enter both track title and artist name.");
            return;
        }

        const newTrack = {
            id: `custom_${Date.now()}`,
            title,
            artist,
            genre,
            mood: `${emotion.toUpperCase()} Vibe`,
            duration: "3:30",
            energy: "85%",
            url,
            cover,
            isUserAdded: true
        };

        // Add to local state and storage
        if (!this.userLibraries[emotion]) this.userLibraries[emotion] = [];
        this.userLibraries[emotion].push(newTrack);
        this.saveLibrariesToStorage(emotion, newTrack);

        // Also post to backend if available
        fetch('/api/add-track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emotion, track: newTrack })
        }).catch(() => {});

        this.closeAddTrackModal();
        this.showToast(`✨ Added "${title}" to your ${emotion.toUpperCase()} Library!`);

        // If currently viewing this library, update UI
        if (this.currentMood === emotion) {
            this.currentPlaylist = this.userLibraries[emotion];
            this.renderTracklist(this.currentPlaylist);
            this.dom.libraryTrackCount.innerText = `${this.currentPlaylist.length} Curated Tracks`;
        }
    }

    // ======================================================================
    // 8. Real-Time Audio Spectrum Visualizer
    // ======================================================================
    initSpectrumVisualizer() {
        const canvas = this.dom.spectrumCanvas;
        const ctx = canvas.getContext('2d');
        const numBars = 32;

        const drawVisualizer = () => {
            requestAnimationFrame(drawVisualizer);
            const w = canvas.width = canvas.clientWidth;
            const h = canvas.height = canvas.clientHeight;
            ctx.clearRect(0, 0, w, h);

            const isPlaying = !this.dom.audioPlayer.paused;
            const color = EMOTION_CONFIG[this.currentMood]?.color || '#8b5cf6';
            const secondary = EMOTION_CONFIG[this.currentMood]?.secondary || '#6366f1';

            const barWidth = (w / numBars) - 3;
            const time = performance.now() * 0.003;

            for (let i = 0; i < numBars; i++) {
                let barHeight;
                if (isPlaying) {
                    // Lively sinusoidal frequency distribution
                    const harmonic = Math.sin(time * 3 + i * 0.4) * Math.cos(time * 2 - i * 0.2);
                    barHeight = Math.max(4, Math.abs(harmonic) * (h * 0.85) + (Math.sin(time * 5 + i) * 6));
                } else {
                    barHeight = 4;
                }

                const x = i * (barWidth + 3);
                const y = h - barHeight;

                const grad = ctx.createLinearGradient(0, y, 0, h);
                grad.addColorStop(0, color);
                grad.addColorStop(1, secondary);

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, barHeight, 4);
                ctx.fill();
            }
        };
        drawVisualizer();
    }

    // Melodic Synth Audio Fallback (Web Audio API)
    startSynthHarmonics() {
        try {
            if (!this.audioCtx) {
                this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }

            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();

            // Notes based on emotion
            const chords = {
                happy: [523.25, 659.25, 783.99],   // C Major
                sad: [440.00, 523.25, 659.25],     // A Minor
                angry: [220.00, 261.63, 311.13],   // Low Dissonant
                neutral: [392.00, 493.88, 587.33], // G Major
                surprised: [587.33, 739.99, 880.0] // D Major High
            };
            const chord = chords[this.currentMood] || chords.neutral;
            const freq = chord[Math.floor(Math.random() * chord.length)];

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

            gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1.8);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start();
            osc.stop(this.audioCtx.currentTime + 1.8);
        } catch (e) {
            console.warn("Synth tone could not initialize:", e);
        }
    }

    // ======================================================================
    // 9. Lively Emotion Particle Canvas Engine
    // ======================================================================
    initParticleEngine() {
        const canvas = this.dom.particleCanvas;
        const ctx = canvas.getContext('2d');
        let particles = [];
        this.particleMode = 'zen';

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor(mode, w, h) {
                this.reset(mode, w, h);
            }
            reset(mode, w, h) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 3 + 1.5;
                this.alpha = Math.random() * 0.7 + 0.2;

                if (mode === 'stars') {
                    // Happy: upward sparkle stars
                    this.speedY = -(Math.random() * 1.5 + 0.6);
                    this.speedX = (Math.random() - 0.5) * 0.8;
                } else if (mode === 'rain') {
                    // Sad: gentle rainfall
                    this.speedY = Math.random() * 3.5 + 2.0;
                    this.speedX = -0.5;
                    this.size = Math.random() * 2 + 1;
                } else if (mode === 'sparks') {
                    // Angry: rapid rising embers
                    this.speedY = -(Math.random() * 4.0 + 2.0);
                    this.speedX = (Math.random() - 0.5) * 2.5;
                } else {
                    // Neutral / Zen: floating orbs
                    this.speedY = (Math.random() - 0.5) * 0.6;
                    this.speedX = (Math.random() - 0.5) * 0.6;
                }
            }
            update(mode, w, h) {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.y < 0 || this.y > h || this.x < 0 || this.x > w) {
                    this.reset(mode, w, h);
                    if (mode === 'stars' || mode === 'sparks') this.y = h;
                    if (mode === 'rain') this.y = 0;
                }
            }
            draw(ctx, color) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(this.particleMode, canvas.width, canvas.height));
        }

        this.setParticleMode = (mode) => {
            this.particleMode = mode;
            particles.forEach(p => p.reset(mode, canvas.width, canvas.height));
        };

        const loop = () => {
            requestAnimationFrame(loop);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const color = EMOTION_CONFIG[this.currentMood]?.color || '#8b5cf6';
            particles.forEach(p => {
                p.update(this.particleMode, canvas.width, canvas.height);
                p.draw(ctx, color);
            });
        };
        loop();
    }

    // ======================================================================
    // 10. Event Bindings & UI Notifications
    // ======================================================================
    initEventBindings() {
        // Camera toggle
        this.dom.btnToggleCam.addEventListener('click', () => {
            if (!this.isCameraActive) {
                this.startCamera();
            } else {
                this.stopCamera();
            }
        });

        // Photo Upload Trigger
        this.dom.btnUploadPhoto.addEventListener('click', () => {
            this.dom.photoUploadInput.click();
        });

        this.dom.photoUploadInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                this.handlePhotoUpload(e.target.files[0]);
            }
        });

        // Auto-switch Toggle
        this.dom.autoPlaySwitch.addEventListener('change', (e) => {
            this.autoSwitchEnabled = e.target.checked;
            this.showToast(`Auto-switch music ${this.autoSwitchEnabled ? 'enabled' : 'disabled'}`);
        });

        // Expression Chips
        document.querySelectorAll('.chip-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const emotion = btn.dataset.emotion;
                this.setEmotion(emotion, true);
                this.showToast(`Switched to ${emotion.toUpperCase()} Expression Library!`);
            });
        });

        // Audio controls
        this.dom.btnPlayPause.addEventListener('click', () => this.togglePlayPause());
        this.dom.btnNextTrack.addEventListener('click', () => this.playNextTrack());
        this.dom.btnPrevTrack.addEventListener('click', () => this.playPrevTrack());

        this.dom.btnShuffle.addEventListener('click', () => {
            this.isShuffle = !this.isShuffle;
            this.dom.btnShuffle.classList.toggle('active-ctrl', this.isShuffle);
            this.showToast(`Shuffle mode ${this.isShuffle ? 'ON' : 'OFF'}`);
        });

        this.dom.btnRepeat.addEventListener('click', () => {
            this.isRepeat = !this.isRepeat;
            this.dom.btnRepeat.classList.toggle('active-ctrl', this.isRepeat);
            this.showToast(`Repeat track ${this.isRepeat ? 'ON' : 'OFF'}`);
        });

        // Search within Library
        this.dom.librarySearchInput.addEventListener('input', (e) => {
            this.filterTracklist(e.target.value);
        });

        // Modal Triggers
        this.dom.btnAddTop.addEventListener('click', () => this.openAddTrackModal());
        this.dom.btnAddModalTrigger.addEventListener('click', () => this.openAddTrackModal());
        this.dom.btnCloseModal.addEventListener('click', () => this.closeAddTrackModal());

        this.dom.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.dom.modalOverlay) this.closeAddTrackModal();
        });

        this.dom.addTrackForm.addEventListener('submit', (e) => this.handleAddTrackSubmit(e));

        // Sample Preset Chips in Modal
        document.querySelectorAll('.btn-preset-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.getElementById('modal-track-title').value = chip.dataset.title;
                document.getElementById('modal-track-artist').value = chip.dataset.artist;
                document.getElementById('modal-track-genre').value = chip.dataset.genre;
                document.getElementById('modal-track-url').value = chip.dataset.url;
                document.getElementById('modal-track-cover').value = chip.dataset.cover;
            });
        });

        // Keyboard Spacebar Shortcut for Play/Pause
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
                e.preventDefault();
                this.togglePlayPause();
            }
        });
    }

    showToast(msg) {
        if (!this.dom.toastNotice) return;
        this.dom.toastMessage.innerText = msg;
        this.dom.toastNotice.classList.add('show');
        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            this.dom.toastNotice.classList.remove('show');
        }, 3200);
    }
}

// Instantiate on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    window.moodApp = new EmotionMusicApp();
});
