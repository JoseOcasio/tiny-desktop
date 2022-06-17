import React from 'react';
import './desktop.css';

import WinboxReact from 'react-winbox';
import 'winbox/dist/css/winbox.min.css';

import Terminal from './terminal/terminal';
import Game from './game/game';

class Desktop extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        windows: []
      }
    }

    generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    handleClick(app, index){
        const background = 'linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)';

        const windowObject = 
        <WinboxReact height={app.height} width={app.width} key={this.generateKey(index)} title={app.name} x={30} y={30} border={4} background={background}>
           {app.content}
         </WinboxReact>;

        this.setState({ windows: [...this.state.windows, windowObject] })
        
        return this.state.windows;
    }

    createApps() {
      const game = {
        name: "Game",
        content: <Game height={500} width={500}/>,
        height: 500,
        width: 500
      }

      const trash = {
        name: "Trash",
        content: <div><h1>Hello From Trash</h1></div>,
        height: 400,
        width: 400
      }

      const terminal = {
        name: "Terminal",
        content: <Terminal/>,
        height: 400,
        width: 400
      }

      return [game, trash, terminal]
    }

    render() {
      const applications = this.createApps();

      const items = applications.map((app, index) => {
          return <button style={{animationDelay: index/80+'s'}} className='desktop-app app-animation' key={index} onClick={() => this.handleClick(app, index)}> {app.name} </button>;
      });

      const windows = this.state.windows.map((app) => {
          return app;
      } );

      return(
        <div style={{padding: 30}}>
            {items}
            {windows}
        </div>
      );
    }
  }

export default Desktop;