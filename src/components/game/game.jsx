import React from 'react';
import './game.css';

class Game extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='game-container'>
                    <button className='game-button'><span>Resume</span></button>
                    <button className='game-button'>New Game</button>
                    <button className='game-button'>Start</button>
                </div>
            </div>
            
        );
    }
}

export default Game;