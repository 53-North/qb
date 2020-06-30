import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';

import Login from "./pages/Login";
import UserReg from "./pages/UserReg";
import UserSafe from "./pages/UserSafe";

{/* ROUTER uses two make props.  PATH prop which specifies the URL where we want to render a given compnent. 
COMPONENT prop to specify the component we are interested in.
Our / route would match every single route so we uses EXACT
EXACT prop tells us that we are only interested in that specific component not anything with a / */}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="page-body">
            <Route path="/" component={Login} exact />
            <Route path="/UserReg" component={UserReg} />
            <Route path="/UserSafe" component={UserSafe} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
