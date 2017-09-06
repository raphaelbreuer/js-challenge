import * as React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './screens/main';
import Anogram from './screens/anogram';
import RotateArray from './screens/rotateArray';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/anogram" component={Anogram} />
            <Route exact path="/rotateArray" component={RotateArray}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
