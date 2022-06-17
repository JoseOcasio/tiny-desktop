import { useState } from 'react';
import './game.css';
import GameCanvas from './gameCanvas';

function Game(props) {
    const [gameStatus, setStatus] = useState("INIT");
    
    function setupGame(e) {        
        setStatus("START");
    }

    //send to child for update
    const updateStatus = status => {
        setStatus(status);
    }

    function renderer() {
        if (gameStatus == "INIT") {
            return (
                <div className='container'>
                    <div className='game-container'>
                        <button onClick={setupGame} className='game-button'>New Game</button>
                        <button className='game-button'>Start</button>
                    </div>
                </div>
            );
        }
        else if (gameStatus == "START") {
            return (
                <GameCanvas updateStatus={updateStatus} height={props.height} width={props.width}/>
            );
        }
        else if (gameStatus == "END"){
            return(
                <div>
                    GAME OVER
                </div>
            );
        }
    }

    return renderer();
}

export default Game;