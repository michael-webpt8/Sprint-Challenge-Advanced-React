import React, { Component } from 'react';
import axios from 'axios';
import { setPlayers } from '../App';

class SoccerData extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => this.props.setPlayers(res.data))
      .catch(err => console.log(err));
  }
  render() {
    return <></>;
  }
}
export default SoccerData;
