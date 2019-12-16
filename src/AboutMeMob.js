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
    <div >
      <div className="About">
        <h1>
          About Me
        </h1>
        <hr width="5%" color="black"/>
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
          <a href={resume}><button className="resumeBut">My Resume</button></a><br/>
        </p>
          <p>Email: haokokyong10@gmail.com</p>

        <h3>
          <strong>Education</strong>
        </h3>
        <p>
          <strong>University at Buffalo, SUNY</strong><br/>
          <strong>Bachelor of Science, Computer Science</strong><br/>
          Graduated: Winter 2019<br/>
          Dean's List | GPA: 3.8/4.0
        </p>

                <h3>
                  Experience
                </h3>

                <p>
                  <strong>Pitney Bowes Inc.</strong><br/>
                  <strong>Android Developer Intern</strong><br/>
                June 2019 - Dec 2019<br/> <br/>

                  <strong>University at Buffalo CSE</strong><br/>
                  <strong>Mcahine Learning Research Assistance</strong><br/>
                  December 2018 - January 2019<br/>
                </p>


      </div>
    </div>
  );
}

export default About;
