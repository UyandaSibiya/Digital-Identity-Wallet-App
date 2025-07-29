import React, { useState } from 'react';
import axios from 'axios';

function UploadFile() {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("http://localhost:5001/hash", formData);
            setResponse(res.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload & Hash</button>

            {response && (
                <div>
                    <p><strong>Hash:</strong> {response.hash}</p>
                    <pre>{JSON.stringify(response.metadata, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default UploadFile;
