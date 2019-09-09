import React, {Component} from 'react';

class Stopwatch extends Component {
    
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }; 

    // When the Stopwatch is added to the DOM execute

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        });
        if(!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    }

    tick = () => {
        if(this.state.isRunning) {
            const now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            });
        } 
    }

    reset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    render() {
        return (
            <div className='stopwatch-container'>
                <p>STOPWATCH</p>
                <h2>
                    {Math.floor(this.state.elapsedTime / 1000)}
                </h2>
                <button 
                className='btn'
                onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button className='btn' onClick={() => this.reset()}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;