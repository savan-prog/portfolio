import React, { useLayoutEffect, useState } from 'react';
import "../assets/css/navbar.css";

const Navbar = () => {
  const[theme, setTheme] = useState(localStorage.getItem('theme') || "light");

  useLayoutEffect(()=>{
    document.body.setAttribute("page-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme])
  
  return (
    <nav className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          SAVAN
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-actions">
           <a href="/SavanGupta_Resume.pdf" className="resume-btn" download>
            <i className="fa-solid fa-download"></i> Resume
          </a>

         <button
  className={`theme-toggle ${theme === "dark" ? "dark" : ""}`}
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  aria-label="Toggle theme"
>
  <span className="theme-thumb"></span>

  {theme === "light" ? (
    <i className="fa-solid fa-sun theme-icon"></i>
  ) : (
    <i className="fa-solid fa-moon theme-icon"></i>
  )}
</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
