import React from 'react';
import {Consumer} from './Context/index';
import PropTypes from 'prop-types';

const Counter = ({index}) => {
    return (
        <Consumer>
            {({players,actions}) => {

                return (
                    <div className='counter-container'>
                        <button className='counter-btn' onClick={() => actions.changeScore(-1, index)}>-</button>
                        <span>{players[index].score}</span>
                        <button className='counter-btn' onClick={() => actions.changeScore(1, index)}>+</button>
                    </div>
                );
            }}
        </Consumer>
    );
}

Counter.propTypes = {
    index: PropTypes.number
};

export default Counter;