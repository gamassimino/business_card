import React from 'react';

import Card from './Card'
import Technologies from './Technologies'
import Resume from './Resume'
import Footer from './Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <p>Software Engenier with Full Stack profile combining ruby&react </p>
        <p>Ruby on Rails Backend dev, almost 5 years experience</p>
        <p>ReactJs Frontend dev, less 1 year experience</p>
      </header>
      <Card />
      <Technologies />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
