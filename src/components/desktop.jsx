import React from 'react';
import './desktop.css';

import WinboxReact from 'winbox-react';
import 'winbox/dist/css/winbox.min.css';

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

    handleClick(name, index){
        const background = 'linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)';

        const windowObject = 
        <WinboxReact key={this.generateKey(index)} title={name} x={30} y={30} border={4} background={background}>
            <div>
            <h1>Hello, WinBox!</h1>
            </div>
         </WinboxReact>;

        this.setState({ windows: [...this.state.windows, windowObject] })
        
        return this.state.windows;
    }

    render() {
        const applications = ["App1", "Terminal", "Folder", "Pictures", "Videos", "Trash"];
        
        const items = applications.map((app, index) => {
            return <button style={{animationDelay: index/80+'s'}} className='desktop-app app-animation' key={index} onClick={() => this.handleClick(app, index)} > {app} </button>;
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