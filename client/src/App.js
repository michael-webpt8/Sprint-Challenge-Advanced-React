import React, { Component } from 'react';
import Navbar from './Navbar';
import SoccerData from './api/SoccerData';
import './App.scss';
import PlayerDisplay from './player/PlayerDisplay';

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
  componentDidMount() {
    let player = this.state.players;
  }

  componentWillUnmount() {}

  render() {
    console.log('p', this.state.players);
    return (
      <div className='App'>
        <SoccerData setPlayers={this.setPlayers} />
        <Navbar />
        <PlayerDisplay players={this.state.players} />
      </div>
    );
  }
}

export default App;
