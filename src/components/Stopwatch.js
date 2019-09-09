import React from 'react';

const Stopwatch = () => {
    return (
        <div className='stopwatch-container'>
            <p>STOPWATCH</p>
            <h2>0</h2>
            <button className='btn'>Start</button>
            <button className='btn'>Reset</button>
        </div>
    );
}

export default Stopwatch;