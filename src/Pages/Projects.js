import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Guess The Number game",
    description:
      "A fun and interactive web game where players try to guess a randomly generated number. built to demonstrate React state management and game logic.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/guess-the-number.png",
    githubLink: "https://github.com/Parth4210/guessTheNumberGame",
    websiteLink: "https://guess-the-number-game-eta-five.vercel.app/",
  },
  {
    id: 2,
    title: "Dice game",
    description:
      "A classic two-player dice game built with vanilla JavaScript. Players take turns rolling dice to accumulate points, featuring animations and win states.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/dice-game.png",
    githubLink: "https://github.com/Parth4210/DiceGame",
    websiteLink: "https://dice-game-ochre-two-97.vercel.app/",
  },
  {
    id: 3,
    title: "CampusFind",
    description:
      "CampusFind is a modern, community-driven platform designed to help students and faculty recover lost belongings and return found items effortlessly. By combining real-time location mapping with AI-driven categorization, we streamline the process of connecting owners with their lost assets.",
    tags: ["React", "API Integration", "TypeScript", "Tailwind CSS"],
    image: "/campusFind.png",
    githubLink: "https://github.com/Icey067/Lumina",
    websiteLink: "https://campusfind-7a340.web.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            variants={itemVariants}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                      <FiGithub />
                    </a>
                    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                      <FiExternalLink />
                    </a>
                  </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
