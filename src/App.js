import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import './App.css';

import About from "./routes/About.js";
import Skills from './routes/Skills.js';
import Projects from './routes/Projects.js'
import Experience from './routes/Experience.js';
import Contact from "./routes/Contact.js";
import FHub from "./routes/FHub.js"
import { Nav } from './components/Navbar';
import { useState } from "react";
import RentReady from './routes/Rent-Ready';
import YumDrop from './routes/Yum-Drop';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  darkTheme ? document.getElementById('body').style.backgroundColor = '#1a1a1a' : document.getElementById('body').style.backgroundColor = 'white';
  return (
    <Router>
      <BubblyContainer />
      <Routes>
          <Route index element={<About darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="skills" element={<Skills darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="projects" element={<Projects darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="fhub" element={<FHub darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="rent-ready" element={<RentReady darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="yum-drop" element={<YumDrop darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="experience" element={<Experience darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="contact" element={<Contact darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path="*" element={<>No Match</>} />
      </Routes>
    </Router>
  );
}

export default App;
