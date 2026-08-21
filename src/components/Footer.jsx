import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>SAVAN</h3>
          <p>MERN Stack Developer</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Connect With Me</h4>

          <a
            href="https://github.com/savan-prog"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/savan-gupta-3a5424317/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=savangupta15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
