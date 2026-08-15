import React from 'react';
import "../assets/css/education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">

            <div className="education-container">

                <div className="education-heading">
                    <h2>Education</h2>
                    <p>My educational background</p>
                </div>

                <div className="education-list">

                    <div className="education-card">
                        <div className="education-icon">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>

                        <div className="education-content">
                            <h3>Graduation</h3>
                            <h4>BCA (Bachelor of Computer Applications)</h4>
                            <p>
                                Completed graduation with a focus on building
                                a strong academic foundation.
                            </p>
                        </div>
                    </div>

                    <div className="education-card">
                        <div className="education-icon">
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>

                        <div className="education-content">
                            <h3>PGDCA</h3>
                            <h4>Post Graduate Diploma in Computer Applications</h4>
                            <p>
                                Developed knowledge of computer applications and programming
    concepts.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
  )
}

export default Education
