import React, { useState } from "react";
import "./Upload.css";

const Upload = ({ onAnalyze, onFileSelect }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      onFileSelect(file); // Pass file to parent component (Test)
    }
  };

  const handleAnalyzeClick = () => {
    if (!file) {
      alert("Please upload an image");
      return;
    }
    onAnalyze();
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <input
          type="file"
          accept="image/*"
          className="upload-input"
          onChange={handleImageChange}
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="upload-preview"
          />
        )}
        <button onClick={handleAnalyzeClick} className="upload-button">Analyze</button>
      </div>
    </div>
  );
};

export default Upload;
