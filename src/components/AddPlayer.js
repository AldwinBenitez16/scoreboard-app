import React, {Component} from 'react';
import {Consumer} from './Context/index';

class AddPlayer extends Component{
    state = {
        value: ''
    };

    playerInput = React.createRef();

    render() {
        return (
            <Consumer>
                {({players, actions}) => {

                    const handleSubmit = () => {
                        actions.addPlayer(this.playerInput.current.value)
                        this.playerInput.current.value = '';
                    }

                    return(
                        <div className='add-player-container'>
                            <input 
                            type='text' 
                            ref={this.playerInput}
                            />
                            
                            <button  
                            type='submit' 
                            onClick={() => handleSubmit()}
                            >
                            Add Player
                            </button>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddPlayer;  