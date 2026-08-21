import React from "react";
import "../assets/css/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <h2>Projects</h2>
          <p>Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {/* MERN E-commerce */}
          <div className="project-card">
            <div className="project-image">
              <img
                src="/images/e-commerce-project-image.png"
                alt="MERN E-commerce App"
              />
            </div>

            <div className="project-content">
              <h3>MERN E-commerce App</h3>

              <p>
                A full-stack e-commerce application with user authentication,
                product management, cart, orders and an admin dashboard.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>REST API</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://savan-mern-ecommerce.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/savan-prog/ecommerce-store"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* E-book Project */}
          <div className="project-card">
            <div className="project-image">
              <img src="/images/ebook-project-image.png" alt="E-book Project" />
            </div>

            <div className="project-content">
              <h3>E-book Project</h3>

              <p>
                A responsive e-book website with a clean user interface, book
                listing, categories and interactive features.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://e-book-admin-dashboard.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/savan-prog/ebook-admin-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Todo App */}
          <div className="project-card">
            <div className="project-image">
              <img src="/images/crud-project-image.png" alt="Crud App" />
            </div>

            <div className="project-content">
              <h3>React CRUD Application</h3>

              <p>
                A CRUD application built with React.js and Redux Toolkit for
                adding, editing, deleting and managing user data with search
                functionality and persistent data storage.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>Redux Toolkit</span>
                <span>JavaScript</span>
                <span>LocalStorage</span>
                <span>Bootstrap</span>
                <span>CSS</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://savan-react-crud.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/savan-prog/react-crud-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
