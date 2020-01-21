import React from 'react';

import react from './react.svg';
import ruby from './ruby.svg';

import './App.css';

function Technologies() {
  return (
    <div className="frameworks-container">
      <div className="technologies-description">
        <h2>This site was build it using both technologies</h2>
        <h3>ReactJs App that consume a Rest API written in Rails</h3>
        <h4>Find the corresponding code in each repository</h4>
      </div>

      <div className="ruby-img">
        <a href="https://github.com/gamassimino/business_card_api" target="_blank" >
          <img src={ruby} className="Ruby-logo"/>
        </a>
      </div>
      <div className="ruby-repo">
        <a href="https://github.com/gamassimino/business_card_api"
          className="terminal-input"
          target="_blank" >
          https://github.com/gamassimino/business_card_api
        </a>
      </div>

      <div className="rect-img">
        <a href="https://github.com/gamassimino/business_card" target="_blank" >
          <img src={react} className="React-logo"/>
        </a>
      </div>
      <div className="react-repo">
        <a href="https://github.com/gamassimino/business_card"
          className="terminal-input"
          target="_blank">
          https://github.com/gamassimino/business_card
        </a>
      </div>
    </div>
  );
}

export default Technologies;
