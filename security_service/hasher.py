from flask import Flask, request, jsonify
import hashlib

app = Flask(__name__)

@app.route('/hash', methods=['POST'])
def hash_document():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Read file content and calculate hash
    content = file.read()
    sha256_hash = hashlib.sha256(content).hexdigest()

    return jsonify({
        'filename': file.filename,
        'sha256': sha256_hash
    }), 200

if __name__ == '__main__':
    app.run(port=5001, debug=True)
