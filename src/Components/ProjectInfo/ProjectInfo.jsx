import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectInfo.css";

const ProjectInfo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="project-info-container">
      <div className="outer-container">
        <div className="inner-container">
          <section className="about-project">
          <h2>DermaCheck <br /></h2>
          <p>
          Dermacheck is an AI-powered tool  that helps in detecting and classifying skin lesions by identifying whether a lesion is benign or malignant. It uses advanced deep learning models to analyze skin images and provide quick and accurate diagnostic results.
          </p>
          </section>
          <img src="/assets/TaeAugust07.jpg" alt="doctor"></img>
        </div>     
      </div>
      <div className="outer-container2">
        <div className="inner-container2">
            <section className="technologies">
            <h2>Technologies Used</h2>
            <div className="tech-list">
              <span>React</span>
              <span>Flask</span>
              <span>Resnet</span>
              <span>Inception V3</span>
              <span>GAN</span>
            </div>
          </section>
          <img src="/assets/doctor_robot.jpg" alt="ai"></img>
        </div>
      </div>
      

      <div className="outer-container">
        <div className="inner-container">
            <section className="importance">
            <h2>Why Skin Health Monitoring is Important?</h2>
            <p>
            Skin health monitoring is important because it helps in the early detection of skin cancer, including malignant and benign lesions. Early diagnosis can lead to timely treatment, improving patient outcomes and reducing health risks. Dermacheck also provides remedies and recommendations based on the analysis to assist users in managing their skin health.
            </p>
            </section>
            <img src="/assets/scan.jpg" alt="scan"></img>
        </div>
      </div>  
      
    </div>
  );
};

export default ProjectInfo;
