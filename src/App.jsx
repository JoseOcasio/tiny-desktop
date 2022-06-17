import './App.css';

import WinboxReact from 'winbox-react'
import 'winbox/dist/css/winbox.min.css';

import Desktop from './components/desktop';

const background = 'linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)';

function App() {
  return (
    <div className="App">
      <div className='Desktop-container'>
        <Desktop/>
      </div>
    </div>
  );
}

export default App;
