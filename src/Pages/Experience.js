import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experienceData = [
  {
    id: 1,
    company: "No experience as of yet, you can check out my Projects page to see what I've built!",
  },
];

const Experience = () => {
  return (
    <motion.div
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Where I've Worked</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <motion.div
            className="experience-card"
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="company">{item.company}</h3>
            <h4 className="role">{item.role}</h4>
            <p className="date">{item.date}</p>
            <p className="description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
