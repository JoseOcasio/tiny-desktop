import React from 'react';
import { useRef, useEffect } from 'react';

function GameCanvas(props) {
    const canvasRef = useRef(null)  

    let snake = [
        {x: 200, y: 200},
        {x: 190, y: 200},
        {x: 180, y: 200},
        {x: 170, y: 200},
        {x: 160, y: 200}
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const board_border = 'black';
        const board_background = "white";

        // Horizontal velocity
        let dx = 10;
        // Vertical velocity
        let dy = 0;
        
        function drawSnake(){
            for (let i=0; i<snake.length; i++){
                let snakePart = snake[i];
                
                context.fillStyle = 'lightblue';
                context.strokestyle = 'darkblue'
                context.fillRect(snakePart.x, snakePart.y, 10, 10);  
                context.strokeRect(snakePart.x, snakePart.y, 10, 10);
            }
        }

        function clearBoard() {
            context.fillStyle = board_background;
            context.strokestyle = board_border;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.strokeRect(0, 0, canvas.width, canvas.height);
        }
        
        function moveSnake() {  
            const head = {x: snake[0].x + dx, y: snake[0].y + dy};
            snake.unshift(head);
            snake.pop();
        }

        function hasGameEnded() {
            for (let i=4; i<snake.length; i++){
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    return true;
                }
            }
            const hitLeftWall = snake[0].x < 0;
            const hitRightWall = snake[0].x > canvas.width - 10;
            const hitToptWall = snake[0].y < 0;
            const hitBottomWall = snake[0].y > canvas.height - 10;

            return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
        }

        function changeDirection(event) {  
            const LEFT_KEY = 37;
            const RIGHT_KEY = 39;
            const UP_KEY = 38;
            const DOWN_KEY = 40;
            
            const keyPressed = event.keyCode;
            const goingUp = dy === -10;
            const goingDown = dy === 10;
            const goingRight = dx === 10;  
            const goingLeft = dx === -10;
            
                if (keyPressed === LEFT_KEY && !goingRight)
                {    
                    dx = -10;
                    dy = 0;  
                }
            
                if (keyPressed === UP_KEY && !goingDown)
                {    
                    dx = 0;
                    dy = -10;
                }
            
                if (keyPressed === RIGHT_KEY && !goingLeft)
                {    
                    dx = 10;
                    dy = 0;
                }
            
                if (keyPressed === DOWN_KEY && !goingUp)
                {    
                    dx = 0;
                    dy = 10;
                }
        }

        setTimeout(function onTick() {  clearBoard();  moveSnake();  drawSnake();}, 100);

        function main() {
            if (hasGameEnded()){
                document.removeEventListener("keydown", changeDirection)
                //update parent that the gameStatus is END
                props.updateStatus("END")
                return;
            }
            setTimeout(function onTick() 
            {    
                clearBoard();    
                moveSnake();  
                drawSnake();
                // Call main again
                main();
            }, 100)
        }
        
        main();

        document.addEventListener("keydown", changeDirection)

        
      }, [])


    return <canvas width={props.width} height={props.width} id="gameCanvas" ref={canvasRef}></canvas>
}


export default GameCanvas;