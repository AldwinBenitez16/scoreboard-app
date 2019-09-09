import React, {Component} from 'react';

class AddPlayer extends Component{
    state = {
        value: ''
    };

    playerInput = React.createRef();

    handleSubmit = () => {
        this.props.addPlayer(this.playerInput.current.value)
        this.playerInput.current.value = '';
    }

    render() {
        return (
            <div className='add-player-container'>
                <input 
                type='text' 
                ref={this.playerInput}
                />
                
                <button  
                type='submit' 
                onClick={() => this.handleSubmit()}
                >
                Add Player
                </button>
            </div>
        );
    }
}

export default AddPlayer;  