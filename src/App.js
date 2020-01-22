import React, {Component} from 'react';

import Header from './Header'
import Card from './Card'
import Technologies from './Technologies'
import Resume from './Resume'
import Footer from './Footer'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    var state = {
      first_name: 'Gaston',
      last_name: 'Massimino',
      email: 'gamassimino01@gmail.com'
    }
    this.handleStatusChange(state)
  };

  render () {
    return (
      <div className="App">
        <Header />
        <Card {...this.state}/>
        <Technologies />
        <Resume />
        <Footer />
      </div>
    );

  }
}

export default App;
