import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {PropsRoute} from 'react-router-with-props';
import NavBar from './NavBar'
import Body from './Body'
import Map from './Map'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App fullscreen">
        <NavBar/>
        <Router>
          <div>
            <PropsRoute exact path="/" component={Body}/>
            <PropsRoute exact path="/map" component={Map}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
