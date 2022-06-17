import React from 'react';
import './terminal.css';

class Terminal extends React.Component {
    render() {

        return(
            <div id="terminal">
                <section id="terminal__body">          
                    <div id="terminal__prompt">            
                        <span id="terminal__prompt--user">users@tiny-terminal:</span>       
                        <span id="terminal__prompt--location">~</span>
                        <span id="terminal__prompt--bling">$</span>    
                        <span id="terminal__prompt--cursor">
                            <input autoFocus id="terminal__prompt--input"></input>
                        </span>   
                    </div>        
                </section>      
            </div>    
        );
        
    }
}

export default Terminal;
