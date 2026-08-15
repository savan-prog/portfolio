import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const inputHandler = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const sendMail = (event) => {
    event.preventDefault();

    emailjs
      .send("service_ke3yv0m", "template_1c8k6be", contact, "gPsFXEOfU8itkENab")
      .then(() => {
        setResponse({
          type: "success",
          message: "Message sent Successfully",
        });
        setContact({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error:", error);
        setResponse({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Contact</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>

            <p>
              I'm always open to discussing new projects, opportunities and
              ideas.
            </p>

            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=savangupta15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                savangupta15@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </div>

            <div className="contact-item">
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendMail}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={contact.name}
                onChange={inputHandler}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={contact.email}
                onChange={inputHandler}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                name="subject"
                value={contact.subject}
                onChange={inputHandler}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
                rows="5"
                name="message"
                value={contact.message}
                onChange={inputHandler}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
            {response.message && (
              <p className={response.type}>{response.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
