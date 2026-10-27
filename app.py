import base64
import os
import cv2
import numpy as np
from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
from importlib import import_module

# Load local modules
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

@app.route('/static/css/<path:filename>')
def serve_css_fallback(filename):
    return send_from_directory(os.path.join(app.root_path, 'static', 'CSS'), filename)

@app.route('/static/js/<path:filename>')
def serve_js_fallback(filename):
    return send_from_directory(os.path.join(app.root_path, 'static', 'JS'), filename)

@app.route('/api/analyze-frame', methods=['POST'])
def analyze_frame():
    """
    Receives base64 image from user's webcam, extracts face, detects emotion,
    and returns probabilities and recommended tracks for the emotion library.
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
            return jsonify({'error': 'Invalid image data'}), 400

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

        # Fetch matching dynamic music library tracks
        tracks = recommender.get_tracks_for_emotion(dominant_emotion)
        top_track = recommender.get_top_track(dominant_emotion)
        library_meta = recommender.get_library_meta(dominant_emotion)

        return jsonify({
            'status': 'success',
            'face_detected': face_detected,
            'face_box': face_coords,
            'emotion': dominant_emotion,
            'confidence': float(probabilities.get(dominant_emotion, 0.9)),
            'probabilities': probabilities,
            'recommended_track': top_track,
            'playlist': tracks,
            'library_meta': library_meta,
            'total_tracks': len(tracks)
        })

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/api/playlist/<emotion>', methods=['GET'])
def get_playlist(emotion):
    tracks = recommender.get_tracks_for_emotion(emotion)
    library_meta = recommender.get_library_meta(emotion)
    return jsonify({
        'emotion': emotion,
        'tracks': tracks,
        'library_meta': library_meta,
        'total_tracks': len(tracks)
    })

@app.route('/api/libraries', methods=['GET'])
def get_all_libraries():
    """Returns all libraries categorized by emotion."""
    return jsonify({
        'status': 'success',
        'libraries': recommender.get_all_libraries()
    })

@app.route('/api/add-track', methods=['POST'])
def add_track():
    """
    Adds a new song to the emotion's library according to the facial expression.
    """
    try:
        data = request.get_json(force=True)
        emotion = data.get('emotion', 'neutral').lower()
        track_info = data.get('track', {})

        if not track_info.get('title'):
            return jsonify({'status': 'error', 'message': 'Track title is required'}), 400

        added = recommender.add_track_to_library(emotion, track_info)
        updated_playlist = recommender.get_tracks_for_emotion(emotion)

        return jsonify({
            'status': 'success',
            'message': f'Track successfully added to {emotion} library!',
            'added_track': added,
            'playlist': updated_playlist
        })
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    print("\n=======================================================")
    print(" 🎵 EMOTION-BASED MUSIC RECOMMENDER READY")
    print(" Access Web App: http://127.0.0.1:5000")
    print("=======================================================\n")
    app.run(host='0.0.0.0', port=5000, debug=True)
