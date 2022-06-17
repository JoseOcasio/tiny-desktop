import React from 'react';
import './game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
          gameStatus: "INIT"
        };

        //neccesary to make this work on the callback
        this.startGame = this.startGame.bind(this)
    }

    startGame(e) {
        this.setState({
            gameStatus: "START"
        });
    }

    renderer() {
        if (this.state.gameStatus == "INIT") {
            return (
                <div className='container'>
                    <div className='game-container'>
                        <button id="w2" onClick={this.startGame} className='game-button'><span>Resume</span></button>
                        <button className='game-button'>New Game</button>
                        <button className='game-button'>Start</button>
                    </div>
                </div>
            );
        }
        else if (this.state.gameStatus == "START") {
            return (
                <div>START NOW</div>
            );
        }
    }

    render() {
        return this.renderer();
    }
}

export default Game;