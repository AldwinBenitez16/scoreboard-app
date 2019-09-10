import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = () => {
    return (
        <div className='header-container'>
            <Stats />
            <h1 className='header'>ScoreBoard</h1>
            <Stopwatch />
        </div>
    );
}

export default Header;