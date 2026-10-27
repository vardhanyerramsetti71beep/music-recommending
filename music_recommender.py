"""
Music Recommender Engine with Rich Emotion Libraries and Dynamic Additions.
"""

class MusicRecommender:
    DEFAULT_PLAYLISTS = {
        "happy": [
            {
                "id": "h1",
                "title": "Sunburst Groove",
                "artist": "Upbeat Acoustic Collective",
                "genre": "Pop / Dance",
                "mood": "Energizing & Cheerful",
                "duration": "3:42",
                "energy": "92%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                "spotify_query": "Happy Hits",
                "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80"
            },
            {
                "id": "h2",
                "title": "Summer Horizon",
                "artist": "Neon Waves",
                "genre": "Electro Tropical",
                "mood": "Uplifting & Euphoric",
                "duration": "4:15",
                "energy": "88%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                "spotify_query": "Feel Good Indie",
                "cover": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
            },
            {
                "id": "h3",
                "title": "Golden Hour Joy",
                "artist": "Solaris Beats",
                "genre": "Nu-Disco / Funk",
                "mood": "Vibrant Sunshine",
                "duration": "3:18",
                "energy": "95%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
                "spotify_query": "Uplifting Sunshine Pop",
                "cover": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
            },
            {
                "id": "h4",
                "title": "Electric Euphoria",
                "artist": "Prism Daylight",
                "genre": "Melodic House",
                "mood": "Pure Radiance",
                "duration": "3:55",
                "energy": "90%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
                "spotify_query": "Happy Dance Party",
                "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
            }
        ],
        "sad": [
            {
                "id": "s1",
                "title": "Midnight Reflections",
                "artist": "Nocturne Strings",
                "genre": "Acoustic Piano & Cello",
                "mood": "Comforting & Healing",
                "duration": "4:32",
                "energy": "35%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                "spotify_query": "Sad Songs for Crying",
                "cover": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
            },
            {
                "id": "s2",
                "title": "Rain on Windowpane",
                "artist": "Quiet Solitude",
                "genre": "Lo-Fi Melancholy",
                "mood": "Reflective & Soothing",
                "duration": "3:50",
                "energy": "28%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
                "spotify_query": "Melancholy Instrumental",
                "cover": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&q=80"
            },
            {
                "id": "s3",
                "title": "Autumn Leaves Falling",
                "artist": "Acoustic Whispers",
                "genre": "Solo Fingerstyle Guitar",
                "mood": "Gentle Emotional Release",
                "duration": "3:24",
                "energy": "30%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
                "spotify_query": "Healing Acoustic Solitude",
                "cover": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
            },
            {
                "id": "s4",
                "title": "Distant Lighthouse",
                "artist": "Subtle Echoes",
                "genre": "Ambient Neo-Classical",
                "mood": "Peaceful Catharsis",
                "duration": "4:08",
                "energy": "25%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
                "spotify_query": "Deep Emotional Piano",
                "cover": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80"
            }
        ],
        "angry": [
            {
                "id": "a1",
                "title": "Adrenaline Discharge",
                "artist": "Apex Cyber",
                "genre": "Rock / Industrial Metal",
                "mood": "Cathartic & Intense",
                "duration": "3:29",
                "energy": "98%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                "spotify_query": "Rage Beats Metal Workout",
                "cover": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
            },
            {
                "id": "a2",
                "title": "Cyber Kinetic",
                "artist": "Overdrive Syndicate",
                "genre": "Bass Heavy D&B",
                "mood": "Fast Tempo De-stress",
                "duration": "4:02",
                "energy": "96%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
                "spotify_query": "Aggressive Phonk",
                "cover": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80"
            },
            {
                "id": "a3",
                "title": "Overdrive Ignition",
                "artist": "Valkyrie Distortion",
                "genre": "Hard Rock Synth",
                "mood": "Power Release",
                "duration": "3:44",
                "energy": "94%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
                "spotify_query": "Heavy Gym Beast Mode",
                "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80"
            },
            {
                "id": "a4",
                "title": "Thunder Storm Strike",
                "artist": "Riot Core",
                "genre": "Electronic Rock",
                "mood": "Fierce Motivation",
                "duration": "3:35",
                "energy": "97%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
                "spotify_query": "Hardstyle Adrenaline",
                "cover": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
            }
        ],
        "neutral": [
            {
                "id": "n1",
                "title": "Deep Focus Study",
                "artist": "Mindflow Studio",
                "genre": "Ambient Lo-Fi Chill",
                "mood": "Calm & Centered",
                "duration": "3:45",
                "energy": "45%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                "spotify_query": "Lofi Beats to Study to",
                "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
            },
            {
                "id": "n2",
                "title": "Zen Garden Stream",
                "artist": "Aura Flow",
                "genre": "Neo-Classical Ambient",
                "mood": "Balanced Mindfulness",
                "duration": "4:12",
                "energy": "40%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
                "spotify_query": "Peaceful Piano Focus",
                "cover": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80"
            },
            {
                "id": "n3",
                "title": "Coffeehouse Chillout",
                "artist": "Velvet Cafe",
                "genre": "Smooth Jazz Lo-Fi",
                "mood": "Easygoing & Serene",
                "duration": "3:30",
                "energy": "48%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
                "spotify_query": "Chill Vibes Instrumental",
                "cover": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80"
            },
            {
                "id": "n4",
                "title": "Binaural Horizon",
                "artist": "Drift Synthesis",
                "genre": "Alpha Wave Ambient",
                "mood": "Clear Mental Clarity",
                "duration": "4:20",
                "energy": "42%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
                "spotify_query": "Deep Meditation and Flow",
                "cover": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80"
            }
        ],
        "surprised": [
            {
                "id": "u1",
                "title": "Cosmic Discovery",
                "artist": "Starlight Odyssey",
                "genre": "Electro Synthwave",
                "mood": "Awe & Wonder",
                "duration": "3:58",
                "energy": "85%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                "spotify_query": "Synthwave Retro Wonder",
                "cover": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
            },
            {
                "id": "u2",
                "title": "Quantum Leap",
                "artist": "Hyper Pulse",
                "genre": "Future Bass / Glitch",
                "mood": "Electric Shockwave",
                "duration": "3:32",
                "energy": "91%",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
                "spotify_query": "Future Bass Bangers",
                "cover": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
            }
        ]
    }

    LIBRARY_META = {
        "happy": {
            "name": "Euphoric Pop & Uplifting Grooves",
            "tagline": "Radiant tracks carefully selected for high vibrations and cheerful energy",
            "color": "#10b981",
            "emoji": "😊",
            "energy_label": "High Vibrational Energy (90%+)",
            "ambient_sound": "sunny_birds"
        },
        "sad": {
            "name": "Melancholic Strings & Healing Lo-Fi",
            "tagline": "Deep, restorative acoustic harmonies to soothe, comfort, and heal your heart",
            "color": "#38bdf8",
            "emoji": "😢",
            "energy_label": "Gentle Soothing Flow (30%)",
            "ambient_sound": "gentle_rain"
        },
        "angry": {
            "name": "Adrenaline Surge & High-Octane Rock",
            "tagline": "Thunderous riffs and driving beats designed for cathartic power workouts",
            "color": "#f43f5e",
            "emoji": "😡",
            "energy_label": "Peak Athletic Power (98%)",
            "ambient_sound": "thunder_rumble"
        },
        "neutral": {
            "name": "Deep Zen, Focus & Ambient Flow",
            "tagline": "Calm, harmonious soundscapes designed for focus, coding, and balanced peace",
            "color": "#8b5cf6",
            "emoji": "😐",
            "energy_label": "Harmonic Balance (45%)",
            "ambient_sound": "zen_stream"
        },
        "surprised": {
            "name": "Cosmic Synthwave & Electric Wonder",
            "tagline": "Stunning auditory adventures filled with future bass and unexpected surprises",
            "color": "#ec4899",
            "emoji": "😲",
            "energy_label": "Electrified Wonder (88%)",
            "ambient_sound": "cosmic_warp"
        }
    }

    def __init__(self):
        # Initialize internal playlists with a deep copy of default tracks
        self.PLAYLISTS = {
            emotion: list(tracks) for emotion, tracks in self.DEFAULT_PLAYLISTS.items()
        }

    def get_tracks_for_emotion(self, emotion):
        emotion = str(emotion).lower()
        return self.PLAYLISTS.get(emotion, self.PLAYLISTS["neutral"])

    def get_top_track(self, emotion):
        tracks = self.get_tracks_for_emotion(emotion)
        return tracks[0] if tracks else self.DEFAULT_PLAYLISTS["neutral"][0]

    def get_library_meta(self, emotion):
        emotion = str(emotion).lower()
        return self.LIBRARY_META.get(emotion, self.LIBRARY_META["neutral"])

    def add_track_to_library(self, emotion, track_data):
        emotion = str(emotion).lower()
        if emotion not in self.PLAYLISTS:
            self.PLAYLISTS[emotion] = []
        
        # Ensure track has required fields
        new_track = {
            "id": track_data.get("id") or f"{emotion[:1]}_{len(self.PLAYLISTS[emotion]) + 1}",
            "title": track_data.get("title", "Untitled Emotion Track"),
            "artist": track_data.get("artist", "Custom Artist"),
            "genre": track_data.get("genre", "Custom Genre"),
            "mood": track_data.get("mood", f"{emotion.capitalize()} Expression"),
            "duration": track_data.get("duration", "3:30"),
            "energy": track_data.get("energy", "85%"),
            "url": track_data.get("url") or "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            "spotify_query": track_data.get("spotify_query") or f"{track_data.get('title')} {track_data.get('artist')}",
            "cover": track_data.get("cover") or "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80"
        }
        self.PLAYLISTS[emotion].append(new_track)
        return new_track

    def get_all_libraries(self):
        result = {}
        for emotion, tracks in self.PLAYLISTS.items():
            result[emotion] = {
                "meta": self.get_library_meta(emotion),
                "tracks": tracks,
                "total_tracks": len(tracks)
            }
        return result
