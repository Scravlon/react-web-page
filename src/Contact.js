import React from 'react';

import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';



function Contact() {
  return (

    <React.Fragment>
    <div className="contact-container">
    <h1>
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
    </h1>
    </div>
    </React.Fragment>

  );
}

export default Contact;
