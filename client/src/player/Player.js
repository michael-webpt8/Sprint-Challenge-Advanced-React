import React from 'react';

function Player(props) {
  return (
    <div className='player' data-testid='player-data'>
      <h2>{props.name}</h2>
      <p>{props.country}</p>
      <p>Search Result: {props.searches}</p>
    </div>
  );
}
export default Player;
