import React from 'react';
import './App.css';
import PlayerCard from './Components/PlayerCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    };
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(data => this.setState({players: data}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <PlayerCard players = {this.state.players} />
      </div>
    )
  }
}

export default App;
