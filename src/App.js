import React from 'react';
import './App.css';
import './style/creative.css';

import Home from './Home';
import Skill from './Skills';
import About from './AboutMe';
import Contact from './Contact';
import Portf from './Portf';
import CP from './copyright';
import Taskbar from './taskbar';


function App() {
  return (
    <div className="rootContainer">
      <div id="home" className="App">
        <Taskbar />

        <header className="App-header">
        <Home />

        </header>
      </div>
      <div id="about" className="about-container">
        <About />
      </div>
      <div id="skill" className="skill-container">
        <Skill />
      </div>
      <div id="portfolio" className="port-container">
      <Portf/>
      </div>
      <div id="contact" className="contact-container">

        <Contact />
      </div>
      <div className="copyright-container">
      <CP/>
      </div>

    </div>
  );
}

export default App;
