import React from 'react';

import profile from './profile.jpg';

import './App.css';

function Card(props) {
  return (
    <div className="card-container">
      <img src={profile} className="avatar-container"/>
      <div className="terminal-background">

        <div className="firstname-container">
          <p className="terminal-input">:001 > puts @first_name</p>
          <input name="firstName"
            defaultValue={props.first_name}
            className="terminal-input"
            readOnly={true}
          />
        </div>
        <div className="lastname-container">
          <p className="terminal-input">:002 > puts @last_name</p>
          <input name="lastName"
            defaultValue={props.last_name}
            className="terminal-input"
            readOnly={true}
          />
        </div>
        <div className="email-container">
          <p className="terminal-input">:003 > puts @email</p>
          <input name="email"
            defaultValue={props.email}
            className="terminal-input"
            readOnly={true}
          />
        </div>
        <br/>
      </div>
    </div>
  );
}

export default Card;
