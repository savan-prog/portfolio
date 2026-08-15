import React from 'react';
import "../assets/css/skills.css";

const Skills = () => {
  return (
     <section id="skills" className="skills-section">

            <h2>Skills</h2>

            <div className="skills-grid">

                <div className="skill-card">
                    <i className="devicon-html5-plain colored"></i>
                    <span>HTML</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-css3-plain colored"></i>
                    <span>CSS</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-javascript-plain colored"></i>
                    <span>JavaScript</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-bootstrap-plain colored"></i>
                    <span>Bootstrap</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-react-original colored"></i>
                    <span>React.js</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-redux-original colored"></i>
                    <span>Redux Toolkit</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-nodejs-plain colored"></i>
                    <span>Node.js</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-express-original"></i>
                    <span>Express.js</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-mongodb-plain colored"></i>
                    <span>MongoDB</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-mongoose-original colored"></i>
                    <span>Mongoose</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-git-plain colored"></i>
                    <span>Git</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-github-original"></i>
                    <span>GitHub</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-postman-plain colored"></i>
                    <span>REST API</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-jsonwebtokens-plain"></i>
                    <span>JWT</span>
                </div>

                <div className="skill-card">
                    <i className="devicon-cloudinary-plain colored"></i>
                    <span>Cloudinary</span>
                </div>

            </div>

        </section>
  )
}

export default Skills
