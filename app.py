import base64
import cv2
import numpy as np
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from importlib import import_module

# Load local modules without relying on the editor's import path.
EmotionDetector = import_module("emotion_detector").EmotionDetector
MusicRecommender = import_module("music_recommender").MusicRecommender

app = Flask(__name__)
CORS(app)

# Initialize engines
detector = EmotionDetector(model_path="model.h5")
recommender = MusicRecommender()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/analyze-frame', methods=['POST'])
def analyze_frame():
    """
    Receives base64 image from user's webcam, extracts face, detects emotion,
    and returns probabilities and recommended tracks.
    """
    try:
        data = request.get_json(force=True)
        image_data = data.get('image', '')
        if ',' in image_data:
            image_data = image_data.split(',')[1]

        image_bytes = base64.b64decode(image_data)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        if frame is None:
            return jsonify({'error': 'Invalid image'}), 400

        # Run face detection
        bbox, face_roi = detector.detect_face(frame)
        face_detected = bbox is not None

        if face_detected:
            x, y, w, h = bbox
            dominant_emotion, probabilities = detector.predict_emotion(face_roi)
            face_coords = {"x": int(x), "y": int(y), "w": int(w), "h": int(h)}
        else:
            dominant_emotion = "neutral"
            probabilities = {"angry": 0.05, "happy": 0.15, "neutral": 0.70, "sad": 0.10}
            face_coords = None

        # Fetch matching dynamic music tracks
        tracks = recommender.get_tracks_for_emotion(dominant_emotion)
        top_track = recommender.get_top_track(dominant_emotion)

        return jsonify({
            'status': 'success',
            'face_detected': face_detected,
            'face_box': face_coords,
            'emotion': dominant_emotion,
            'confidence': float(probabilities.get(dominant_emotion, 0.9)),
            'probabilities': probabilities,
            'recommended_track': top_track,
            'playlist': tracks
        })

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/api/playlist/<emotion>', methods=['GET'])
def get_playlist(emotion):
    tracks = recommender.get_tracks_for_emotion(emotion)
    return jsonify({'emotion': emotion, 'tracks': tracks})

if __name__ == '__main__':
    print("\n=======================================================")
    print(" 🎵 EMOTION-BASED MUSIC RECOMMENDER READY")
    print(" Access Web App: http://127.0.0.1:5000")
    print("=======================================================\n")
    app.run(host='0.0.0.0', port=5000, debug=True)