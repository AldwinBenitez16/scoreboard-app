import React, {PureComponent} from 'react';
import {Consumer} from './Context/index';
import Counter from './Counter';

class Player extends PureComponent {

    render() {
        return(
            <Consumer>
                {({players, actions}) => {

                    return(
                        players.map( (player, index) => {
                            return (
                                <div key={index} className='player-container'>
                                    <p className='name'>{player.name}</p>
                                    <button  className='deleteBtn' onClick={() => actions.removePlayer(index)}>X</button>
                                    <Counter index={index}/>
                                </div>
                            );
                        })
                    );
                }}
            </Consumer>
        );
    }
}

export default Player;