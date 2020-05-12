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
        <p>Software Engineer - DHL Infomation Service</p>
        <p>B.S. Computer Science - University at Buffalo (SUNY)</p>
      </header>
      <dir className="App-down">
        <dir id="arrow-down"><a id="arrow-a" href="#about"><FaChevronCircleDown/></a></dir>

        </dir>
  </div>
  );
}

export default HOME;
