from flask import Flask, request, jsonify
import hashlib, os
from werkzeug.utils import secure_filename
from datetime import datetime
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Load MongoDB config
mongo_uri = os.getenv("MONGO_URI")
db_name = os.getenv("DB_NAME")
collection_name = os.getenv("COLLECTION_NAME")

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client[db_name]
collection = db[collection_name]

@app.route("/hash", methods=["POST"])
def hash_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    uploaded_file = request.files['file']
    filename = secure_filename(uploaded_file.filename)
    file_data = uploaded_file.read()

    file_hash = hashlib.sha256(file_data).hexdigest()

    metadata = {
        "filename": filename,
        "filesize": len(file_data),
        "sha256": file_hash,
        "mimetype": uploaded_file.mimetype,
        "timestamp": datetime.utcnow().isoformat()
    }

    # Save metadata to MongoDB
    collection.insert_one(metadata)

    return jsonify({
        "message": "File processed successfully",
        "hash": file_hash,
        "metadata": metadata
    }), 200

if __name__ == "__main__":
    app.run(port=5001)
