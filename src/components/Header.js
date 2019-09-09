import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = ({totalPlayers, totalPoints}) => {
    return (
        <div className='header-container'>
            <Stats totalPlayers={totalPlayers} totalPoints={totalPoints}/>
            <h1 className='header'>ScoreBoard</h1>
            <Stopwatch />
        </div>
    );
}

Header.propTypes = {
    totalPlayers: PropTypes.number
}

export default Header;