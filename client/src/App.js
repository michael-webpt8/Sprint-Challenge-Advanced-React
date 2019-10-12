import React, { Component } from 'react';
import Navbar from './Navbar';
import SoccerData from './api/SoccerData';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  setPlayers = data => {
    this.setState({
      players: data
    });
  };

  render() {
    console.log('p', this.state.players);
    return (
      <div className='App'>
        <SoccerData setPlayers={this.setPlayers} />
        <Navbar />
      </div>
    );
  }
}

export default App;
