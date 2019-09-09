import React from 'react';


const Counter = () => {
    return (
        <div className='counter-container'>
            <button className='counter-btn'>-</button>
            <span>0</span>
            <button className='counter-btn'>+</button>
        </div>
    );
}

export default Counter;