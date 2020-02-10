import React from 'react';
import userImage from '../../assets/images/soccer.jpeg'

const Player = (props) => {
  const {player} = props;
  return ( 
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={userImage} alt="Soccer Player" />
          <span className="card-title">{player.firstName} {player.lastName}</span>
        </div>
        <div className="card-content">
          <p>E-mail: {player.email}</p>
          <p>Phone: {player.phone}</p>
          <p>isCoach: {player.isCoach}</p>
          <p>speed: {player.speed}</p>
          <p>strength: {player.strength}</p>
          <p>endurance: {player.endurance}</p>
          <p>ability: {player.ability}</p>
          <p>technique: {player.technique}</p>
          <p>tactical: {player.tactical}</p>
          <p>created_date: {player.created_date}</p>
        </div>
        <div className="card-action">
          Team: {player.team}
        </div>
      </div>
    </div>
  </div>
  );
}
 
export default Player