import React from 'react';
import './App.css';
import Home from './Home';
import Skill from './Skills';
import About from './AboutMe';



function App() {
  return (
    <div className="rootContainer">
      <div className="App">
        <header className="App-header">
        <Home />
        </header>
      </div>
      <div class="about-container">
      <About />
      </div>
      <div class="skill-container">
      <Skill />
      </div>
    </div>
  );
}

export default App;
