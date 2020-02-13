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
      <dir className="App-down" style="text-decoration: none;color:white">
        <dir id="arrow-down"><FaChevronCircleDown/></dir>

        </dir>
  </div>
  );
}

export default HOME;
