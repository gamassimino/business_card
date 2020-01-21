import React from 'react';

import profile from './profile.jpg';
import terminal from './terminal.png';

import './App.css';

function Card() {
  return (
    <div className="card-container">
      <img src={profile} className="avatar-container"/>
      <div className="terminal-background">

        <div className="firstname-container">
          <p class="terminal-input">:001 > puts @first_name</p>
          <input name="firstName"
            defaultValue="Gaston"
            className="terminal-input"
          />
        </div>
        <div className="lastname-container">
          <p class="terminal-input">:002 > puts @last_name</p>
          <input name="lastName"
            defaultValue="Massimino"
            className="terminal-input"
          />
        </div>
        <br/>
        <div className="email-container">
          <p class="terminal-input">:003 > puts @email</p>
          <input name="email"
            defaultValue="gamassimino01@gmail.com"
            className="terminal-input"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
