import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';
import '../css/style.css';

class App extends Component {

    state={
      players: [
          {
              name: 'Aldwin',
              score: 0,
              id: 0
          },
          {
              name: 'Ivan',
              score: 0,
              id: 1
          },
          {
              name: 'Pia',
              score: 0,
              id: 2
          }
      ]
    }

    changeScore = (num,index) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += num
      })); 
    }

    newKey = this.state.players.length + 1;
    addPlayer = (name) => {
      console.log(name);
      if(name === '') {
        alert('Please Enter a username');
      } else {
        this.setState({
          players: [
            ...this.state.players,
            {
              name,
              score: 0,
              id: this.newKey
            }
          ] 
        });
      }

    }

  render() {
    return (
      <div className='app-container'>
        <Header 
        totalPlayers={this.state.players.length} 
        totalPoints={this.state.players.reduce((total, player) => {
          return total + player.score;
        }, 0)}
        />

        <Player 
        players={this.state.players} 
        changeScore={this.changeScore}
        />
        
        <AddPlayer addPlayer={this.addPlayer}/>
      </div>
    );
  }
}

export default App;
