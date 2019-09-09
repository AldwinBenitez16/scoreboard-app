import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({score, index, changeScore}) => {
    return (
        <div className='counter-container'>
            <button className='counter-btn' onClick={() => changeScore(-1, index)}>-</button>
            <span>{score}</span>
            <button className='counter-btn' onClick={() => changeScore(1, index)}>+</button>
        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number,
    index: PropTypes.number,
    changeScore: PropTypes.func
};

export default Counter;