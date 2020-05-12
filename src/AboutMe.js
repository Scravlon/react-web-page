import React from 'react';
import './AboutMe.css';
import mepic from './images/mepic.jpg';
import resume from './docs/kevin-resume.pdf';
import { FaChevronCircleDown } from 'react-icons/fa';
import transcript from './docs/final.pdf';
import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

function About() {
  return (
        <React.Fragment>
    <div className="aboutContainer">
      <div className="About" id ="aboutid">
  <table >
    <tbody>
      <tr>
        <th className="leftDiv">
          <div>
            <h2>About Me</h2>
            <img src={mepic} alt="me" width="250px" height="290px" />
            <p>
              <a href="https://twitter.com/Scravlon">
                <FaTwitter/>
              </a>&nbsp;
              <a href="https://github.com/Scravlon">
                <FaGithubSquare/>
              </a>&nbsp;
              <a href="https://www.linkedin.com/in/scravlon">
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
                  &nbsp;
                <a href={transcript}><button className="resumeBut">Transcript</button></a><br/>

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
                <th className="tg-dvpl"><strong>Aug 2017 - Dec 2019</strong></th>
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
            <th className="tg-0pky"><strong>DHL Information Services</strong></th>
            <th className="tg-dvpl"><strong>Apr 2020 - Current</strong></th>
          </tr>
          <tr>
            <td className="tg-0pky">Software Engineer</td>
            <td className="tg-dvpl"></td>
          </tr>
          <tr>
            <th className="tg-0pky">Pitney Bowes Inc.</th>
            <th className="tg-dvpl">Jun 2019 - Dec 2019</th>
          </tr>
          <tr>
            <td className="tg-0pky">Android Developer Intern</td>
            <td className="tg-dvpl"></td>
          </tr>
          <tr>
            <th className="tg-0pky">University at Buffalo CSE</th>
            <th className="tg-dvpl">Dec 2018 - Jan 2019 </th>
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
