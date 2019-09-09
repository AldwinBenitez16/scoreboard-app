import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends Component {

    static propTypes = {
        players: PropTypes.arrayOf(PropTypes.object),
        changeScore: PropTypes.func
    };

    render() {
        const {players, changeScore} = this.props;

        return(
            players.map( player => {
                return (
                    <div key={player.id} className='player-container'>
                        <p className='name'>{player.name}</p>
                        <Counter score={player.score} index={player.id} changeScore={changeScore}/>
                    </div>
                );
            })
        );
    }
}

export default Player;