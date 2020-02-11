import React, { Component } from 'react';
import './App.css';
import PlayerList from './Components/Player/PlayerList';
import PlayerSingle from './Components/Player/PlayerSingle';
import PlayerForm from './Components/Player/PlayerForm';
import NavBar from './Components/Navigation/NavBar'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}
    };

    this.firstName = React.createRef();

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
    this.submitPlayer = this.submitPlayer.bind(this)
  }

  updateCurrentPlayer(player) {
    this.setState({ currentPlayer: player });
  }

  submitPlayer(player){
    const URL = 'http://localhost:4000/players';
    axios.post(URL, player)
    .then( response => console.log(response))
    .catch(error => console.log(error))
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
          <NavBar />
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer = {this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm submitPlayer={this.submitPlayer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
