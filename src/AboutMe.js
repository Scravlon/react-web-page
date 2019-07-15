import React from 'react';
import './AboutMe.css';
import mepic from './mepic.jpg';

function About() {
  return (
    <div className="aboutContainer">
      <div className="About">
        <h1>
          About Me
        </h1>
        <hr width="5%" color="black"/>
        <img src={mepic} width="225px" height="300px" />
        <h2>
          Education
        </h2>
        <table class="tg">
          <tr>
            <th class="tg-0pky"><strong>University at Buffalo, SUNY (Transfer)</strong></th>
            <th class="tg-dvpl"><strong>Expected Graduate: Winter 2019</strong></th>
          </tr>
          <tr>
            <td class="tg-0pky">Bachelor of Science, Computer Science</td>
            <td class="tg-dvpl">Dean's List | GPA: 3.8/4.0</td>
          </tr>
          <tr>
            <td class="tg-0pky"><strong>Inti International College Subang Malaysia</strong></td>
            <td class="tg-dvpl"><strong>Spring 2016 - Summer 2017</strong></td>
          </tr>
          <tr>
            <td class="tg-0pky">Bachelor of Science, Computer Science</td>
            <td class="tg-dvpl">Dean's List | GPA: 3.6/4.0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default About;
