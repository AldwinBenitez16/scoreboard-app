import React from 'react';

const Stats = ({totalPlayers, totalPoints}) => {
    return (
        <div className='stats-container'>
            {console.log(totalPoints)}
            <p>Players: {totalPlayers}</p>
            <p>Total Points: {totalPoints}</p>
        </div>
    );
}

export default Stats;