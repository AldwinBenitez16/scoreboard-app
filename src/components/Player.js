import React, {Component} from 'react';
import Counter from './Counter';

class Player extends Component {

    state={
        players: [
            {
                name: 'Aldwin'
            },
            {
                name: 'Ivan'
            },
            {
                name: 'Pia'
            }
        ]
    }

    render() {
        return(
            this.state.players.map( player => {
                return (
                    <div className='player-container'>
                        <p className='name'>{player.name}</p>
                        <Counter />
                    </div>
                );
            })
        );
    }
}

export default Player;