import React from 'react';

import resume from './resume.pdf';
import github from './github.svg'
import linkedin from './linkedin.svg'
import file from './file.svg'

import './App.css';

function Footer() {
  return (
    <footer>
      <div className="contact-container">
        <a href="https://github.com/gamassimino"
          className="github feed-link"
          target="_blank">
          <img src={github} className="icon" />
          <p className="text">Take a look to my projects</p>
        </a>

        <a href="https://www.linkedin.com/in/gaston-massimino-730a32165/"
          className="linkedin feed-link"
          target="_blank">
          <img src={linkedin} className="icon" />
          <p className="text">Conect me on LinkedIn</p>
        </a>

        <a href={resume}
          className="pdf feed-link"
          target="_blank">
          <img src={file} className="icon" />
          <p className="text">Download my Resume</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
