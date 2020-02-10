import React from 'react';

const PlayerList = props => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h5>Players</h5>
        </li>
        {props.players.map(player => (
          <a
            href="#!"
            className="collection-item"
            key={player._id}
            onClick={() => props.updateCurrentPlayer(player)}
          >
            {player.firstName} {player.lastName}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
