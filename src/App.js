import React from 'react';
import './App.css';
import Home from './Home';
import Skill from './Skills';
import About from './AboutMe';
import Contact from './Contact';
import CP from './copyright';


function App() {
  return (
    <div className="rootContainer">
      <div className="App">
        <header className="App-header">
        <Home />

        </header>
      </div>
      <div className="about-container">
        <About />
      </div>
      <div className="skill-container">
        <Skill />
      </div>
      <div className="contact-container">
        <Contact />
      </div>
      <div className="copyright-container">
      <CP/>
      </div>
    </div>
  );
}

export default App;
