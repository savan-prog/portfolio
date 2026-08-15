import React from "react";
import "../assets/css/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm a MERN Stack Developer</h3>

            <p>
              I'm passionate about building responsive and user-friendly web
              applications. I enjoy creating complete web solutions using React,
              Node.js, Express.js and MongoDB.
            </p>

            <p>
              Currently, I'm focused on strengthening my full-stack development
              skills and building real-world projects to grow as a developer.
            </p>
          </div>

          <div className="about-info">
            <div className="info-box">
              <h4>Education</h4>
              <p>Graduation</p>
              <p>PGDCA</p>
            </div>

            <div className="info-box">
              <h4>Focus</h4>
              <p>MERN Stack</p>
              <p>Real-World Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
