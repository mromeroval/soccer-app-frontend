import React, { Component } from 'react';
import './App.css';
import PlayerList from './Components/Player/PlayerList';
import PlayerSingle from './Components/Player/PlayerSingle';
import PlayerForm from './Components/Player/PlayerForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }

  updateCurrentPlayer(player) {
    console.log(player)
    this.setState({ currentPlayer: player });
  }

  componentDidMount() {
    const URL = 'http://localhost:4000/players';
    axios
      .get(URL)
      .then(response => {
        const players = response.data
        this.setState({ players: players });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">Manu</div>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer = {this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
