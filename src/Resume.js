import React from 'react';
import './App.css';

import resume from './resume.pdf';

function Resume() {
  return (
    <div className="iframe-container">
      <object data={resume} type="application/pdf" className="iframe">
          <embed src={resume} type="application/pdf" className="iframe-content" />
      </object>
    </div>
  );
}

export default Resume;
