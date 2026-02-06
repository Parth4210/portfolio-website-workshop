import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";

import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
