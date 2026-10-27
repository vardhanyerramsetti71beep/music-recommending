class MusicRecommender:
    PLAYLISTS = {
        "happy": [
            {
                "id": "h1",
                "title": "Sunburst Groove",
                "artist": "Upbeat Acoustic Collective",
                "genre": "Pop / Dance",
                "mood": "Energizing & Cheerful",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                "spotify_query": "Happy Hits",
                "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80"
            },
            {
                "id": "h2",
                "title": "Summer Horizon",
                "artist": "Neon Waves",
                "genre": "Electro Tropical",
                "mood": "Uplifting & Euphoric",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                "spotify_query": "Feel Good Indie",
                "cover": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80"
            }
        ],
        "sad": [
            {
                "id": "s1",
                "title": "Midnight Reflections",
                "artist": "Nocturne Strings",
                "genre": "Acoustic Piano & Cello",
                "mood": "Comforting & Healing",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                "spotify_query": "Sad Songs for Crying",
                "cover": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80"
            },
            {
                "id": "s2",
                "title": "Rain on Windowpane",
                "artist": "Quiet Solitude",
                "genre": "Lo-Fi Melancholy",
                "mood": "Reflective & Soothing",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
                "spotify_query": "Melancholy Instrumental",
                "cover": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=300&q=80"
            }
        ],
        "angry": [
            {
                "id": "a1",
                "title": "Adrenaline Discharge",
                "artist": "Apex Cyber",
                "genre": "Rock / Industrial Metal",
                "mood": "Cathartic & Intense",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                "spotify_query": "Rage Beats Metal Workout",
                "cover": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80"
            },
            {
                "id": "a2",
                "title": "Cyber Kinetic",
                "artist": "Overdrive Syndicate",
                "genre": "Bass Heavy D&B",
                "mood": "Fast Tempo De-stress",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
                "spotify_query": "Aggressive Phonk",
                "cover": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80"
            }
        ],
        "neutral": [
            {
                "id": "n1",
                "title": "Deep Focus Study",
                "artist": "Mindflow Studio",
                "genre": "Ambient Lo-Fi Chill",
                "mood": "Calm & Centered",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                "spotify_query": "Lofi Beats to Study to",
                "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80"
            },
            {
                "id": "n2",
                "title": "Zen Garden Stream",
                "artist": "Aura Flow",
                "genre": "Neo-Classical Ambient",
                "mood": "Balanced Mindfulness",
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
                "spotify_query": "Peaceful Piano Focus",
                "cover": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&q=80"
            }
        ]
    }

    def get_tracks_for_emotion(self, emotion):
        emotion = emotion.lower()
        return self.PLAYLISTS.get(emotion, self.PLAYLISTS["neutral"])

    def get_top_track(self, emotion):
        tracks = self.get_tracks_for_emotion(emotion)
        return tracks[0]