import React from 'react';
import './AboutMe.css';
import mepic from './images/mepic.jpg';
import resume from './docs/kevin-resume.pdf';

import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

function About() {
  return (
        <React.Fragment>
    <div className="aboutContainer">
      <div className="About">
  <table >
    <tbody>
      <tr>
        <th className="leftDiv">
          <div>
            <h2>About Me</h2>
            <p>Android Developer</p>
            <img src={mepic} alt="me" width="250px" height="290px" />
            <p>
              <a href="https://twitter.com/Scravlon">
                <FaTwitter/>
              </a>&nbsp;
              <a href="https://github.com/Scravlon">
                <FaGithubSquare/>
              </a>&nbsp;
              <a href="https://www.linkedin.com/in/kevin-yong-34363270/">
                <FaLinkedinIn/>
              </a>&nbsp;
              <a href="https://play.google.com/store/apps/developer?id=Scravlon">
                <FaGooglePlay/>
              </a>&nbsp;
              <a href="mailto:haokokyong@gmail.com">
                <FaMailBulk/>
              </a>
              <br/>
              <a href={resume}><button className="resumeBut">My Resume</button></a>
          </p>
          <p>Email: haokokyong10@gmail.com</p>
          </div>
      </th>

      <th className="rightDiv">
        <div>
          <h2>
            Education
          </h2>
          <table className="tg">
            <tbody>
              <tr>
                <th className="tg-0pky"><strong>University at Buffalo, SUNY</strong></th>
                <th className="tg-dvpl"><strong>Expected Graduate: Winter 2019</strong></th>
              </tr>
              <tr>
                <td className="tg-0pky">Bachelor of Science, Computer Science</td>
                <td className="tg-dvpl">Dean's List | GPA: 3.8/4.0</td>
              </tr>
            </tbody>
          </table>

        <h2>
          Experience
        </h2>
        <table className="tg">
        <tbody>
          <tr>
            <th className="tg-0pky"><strong>Pitney Bowes Inc.</strong></th>
            <th className="tg-dvpl"><strong>June 2019 - August 2019</strong></th>
          </tr>
          <tr>
            <td className="tg-0pky">Android Developer Intern</td>
            <td className="tg-dvpl"></td>
          </tr>
          <tr>
            <th className="tg-0pky"><strong>University at Buffalo CSE</strong></th>
            <th className="tg-dvpl"><strong>December 2018 - January 2019 </strong></th>
          </tr>
          <tr>
            <td className="tg-0pky">Research Assistant</td>
            <td className="tg-dvpl"></td>
          </tr>
          </tbody>
        </table>
      </div>

      </th>
      </tr>
    </tbody>

  </table>
      </div>
    </div>
        </React.Fragment>
  );
}

export default About;
