import React from 'react';
import './AboutMe.css';
import mepic from './images/mepic.jpg';

function About() {
  return (
    <div >
      <div className="About">
        <h1>
          About Me
        </h1>
        <hr width="5%" color="black"/>
        <img src={mepic} alt="me" width="225px" height="300px" />
        <h2>
          Education
        </h2>
        <table className="tg">
        <tbody>
          <tr>
            <th className="tg-0pky"><strong>University at Buffalo, SUNY (Transfer)</strong></th>
            <th className="tg-dvpl"><strong>Expected Graduate: Winter 2019</strong></th>
          </tr>
          <tr>
            <td className="tg-0pky">Bachelor of Science, Computer Science</td>
            <td className="tg-dvpl">Dean's List | GPA: 3.8/4.0</td>
          </tr>
          <tr>
            <td className="tg-0pky"><strong>Inti International College Subang Malaysia</strong></td>
            <td className="tg-dvpl"><strong>Spring 2016 - Summer 2017</strong></td>
          </tr>
          <tr>
            <td className="tg-0pky">Bachelor of Science, Computer Science</td>
            <td className="tg-dvpl">Dean's List | GPA: 3.6/4.0</td>
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
                    <td className="tg-0pky"><strong>University at Buffalo CSE</strong></td>
                    <td className="tg-dvpl"><strong>December 2018 - January 2019 </strong></td>
                  </tr>
                  <tr>
                    <td className="tg-0pky">Research Assistance</td>
                    <td className="tg-dvpl"></td>
                  </tr>
                  </tbody>
                </table>

      </div>
    </div>
  );
}

export default About;
