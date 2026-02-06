import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="logo">
        BP<span style={{ color: "var(--text-primary)", fontSize: "2rem" }}>.</span>
      </NavLink>
      
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
