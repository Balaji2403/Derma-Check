import React from "react";
import "./Work.css";

const Work = ({ onContinue }) => {
    return (
        <section className="work-container">
            <div className="work-content">
                <h2>How it Works</h2>
                <div className="steps">
                    <div className="step">
                        <span>1</span>
                        <h3>Upload Image</h3>
                        <p>Upload an image of a your skin to start the analysis.</p>
                    </div>
                    <div className="step">
                        <span>2</span>
                        <h3>AI Analysis</h3>
                        <p>Our Pre-Trained Model analyses the image and classifies disease class and its type (<b>Malignant</b> or <b>Benign</b>).</p>
                    </div>
                    <div className="step">
                        <span>3</span>
                        <h3>Get Result</h3>
                        <p>Receive an accurate prediction about your skin health.</p>
                    </div>
                </div>
                <button className="continue-btn" onClick={onContinue}>Continue</button>
            </div>
        </section>
    );
}

export default Work;
