import React from 'react';
import './App.css';
import './style/creative.css';

import Home from './Home';
import Skill from './Skills';
import About from './AboutMe';
import About1 from './AboutMeMob';

import Contact from './Contact';
import Portf from './Portf';
import Portf1 from './PortfMob';

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
        <div className="aboutContainer">
          <About />
        </div>
        <div className="aboutContainer1">
          <About1 />
        </div>
      </div>
      <div id="skill" className="skill-container">
        <Skill />
      </div>
      <div id="portfolio" className="port-container">
        <div className="portContainer">
          <Portf />
        </div>
        <div id="portfolio" className="portContainer1">
          <Portf1 />

        </div>
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
