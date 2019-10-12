import React, { useState, useEffect } from 'react';
import Player from './Player';

function PlayerDisplay(props) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    setPlayer(props.players);
  }, [props.players]);
  if (!player) return <h3>Loading...</h3>;
  return (
    <>
      {player.map(person => {
        return (
          <div className='player-display'>
            <Player
              key={person.id}
              name={person.name}
              country={person.country}
              searches={person.searches}
            />
          </div>
        );
      })}
    </>
  );
}
export default PlayerDisplay;
