import React from "react";
import "../assets/css/home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <p className="home-greeting">Hi, I'm</p>
          <h1>Savan</h1>
          <h2>MERN Stack Developer</h2>
          <p className="description">
            I build responsive and user-friendly web applications using React,
            Node.js, Express.js and MongoDB.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="projects-btn">
              View Projects
            </a>

            <a href="/resume.pdf" download className="resume-home-btn">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>
          <div className="social-links">
            <a href="#" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src="/images/profile-image.png" alt="Savan" />
        </div>
      </div>
    </section>
  );
};

export default Home;
