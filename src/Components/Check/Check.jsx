import React, { useState, useEffect } from "react";
import Upload from "../Upload/Upload.jsx";
import axios from "axios";
import "./Check.css";
import Work from "../Works/Work.jsx";

const Check = () => {
  const [analyze, setAnalyze] = useState(false);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [showWork, setShowWork] = useState(true); // Controls visibility of Work.jsx

  // Disable scrolling when component is active
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    return () => {
      document.body.style.overflow = "auto"; // Enable scrolling when component unmounts
    };
  }, []);

  const handleFileChange = (file) => {
    setImage(file);
  };

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setAnalyze(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="test-container">
      {showWork && <Work onContinue={() => setShowWork(false)} />} {/* Show Work only if `showWork` is true */}

      {!showWork && (
        <>
          <div className={`upload-section ${analyze ? "move-left" : ""}`}>
            <Upload onAnalyze={handleAnalyze} onFileSelect={handleFileChange} />
          </div>

          {analyze && (
            <div className="result-section">
              <h2>Analysis Results</h2>
              {result ? (
                <div>
                  <p><strong>Class:</strong> {result.class}</p>
                  <p><strong>Type:</strong> {result.type}</p>
                  <p><strong>Confidence:</strong> {result.confidence.toFixed(2)}</p>
                </div>
              ) : (
                <p>Loading results...</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Check;

