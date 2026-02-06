import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll try my best to get back to you!
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Parth Wadhwa" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="parth@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Hello..."></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      <div className="social-links">
        <a
          href="https://github.com/Parth4210"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/parth-wadhwa-aa5199284"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:parth712007@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
