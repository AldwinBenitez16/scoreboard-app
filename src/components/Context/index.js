import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
    state={
        players: [
            {
                name: 'Example Person1',
                score: 0,
                id: 0
            },
            {
                name: 'Example Person2',
                score: 0,
                id: 1
            },
            {
                name: 'Example Person3',
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
    
    addPlayer = (name) => {
        if(name === '') {
            alert('Please Enter a username');
        } else {
            this.setState({
                players: [
                    ...this.state.players,
                    {
                    name,
                    score: 0,
                    id: this.state.players.length
                    }
                ] 
            });
        }
    }

    removePlayer = (index) => {
        this.setState( prevState => {
                return{
                    players: prevState.players.filter(p => p !== prevState.players[index])
                };
            }
        );
    }

    render() {
        return(
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.changeScore,
                    addPlayer: this.addPlayer,
                    removePlayer: this.removePlayer
                }
            }}>
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}

export const Consumer = ScoreboardContext.Consumer; 