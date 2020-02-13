import React from 'react';
import './Home.css';
import darrow from './images/darrow.png'
import { FaChevronCircleDown } from 'react-icons/fa';

function HOME() {
  return (
    <div className="HOME">
      <header className="Home-header">
        <h1>
          Kevin Yong
        </h1>
        <p>Software Developer</p>
        <p>B.S. Computer Science - University at Buffalo (SUNY)</p>
      </header>
      <dir className="App-down">
        <dir id="arrow-down"><a href="#about" style="text-decoration: none;color:white"><FaChevronCircleDown/></a></dir>

        </dir>
  </div>
  );
}

export default HOME;
