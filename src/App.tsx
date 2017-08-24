import * as React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './screens/main';
import Anogram from './screens/anogram';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/anogram" component={Anogram} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
