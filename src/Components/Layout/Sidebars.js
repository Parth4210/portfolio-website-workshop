import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Sidebars.css";

const Sidebars = () => {
  return (
    <>
      <div className="sidebar left">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="social-list"
        >
          <li>
            <a href="https://github.com/Parth4210" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/parth__4210?igsh=MXZtcTJseDl2NHZ3Zw==" target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/parth-wadhwa-aa5199284" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
          </li>
        </motion.ul>
      </div>

      <div className="sidebar right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="email-wrapper"
        >
          <a href="mailto:parth@example.com" className="email-link">
            parth@example.com
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebars;
