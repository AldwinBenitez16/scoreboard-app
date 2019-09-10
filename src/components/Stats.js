import React from 'react';
import {Consumer} from './Context/index';

const Stats = () => {
    return(
        <Consumer>
            {({players}) => {
                const totalPlayers = players.length;
                const totalPoints = players.reduce((total, points) => {
                    return total += points.score;
                }, 0);

                return (
                    <div className='stats-container'>
                        <p>Players: {totalPlayers}</p>
                        <p>Total Points: {totalPoints}</p>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default Stats;