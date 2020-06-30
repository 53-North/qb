import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';



import './App.css';

import NavBar from "./NavBar";
import Login from "./pages/Login";
import UserReg from "./pages/UserReg";
import UserSafe from "./pages/UserSafe";
import About from "./pages/About";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";


{/* ROUTER uses two make props.  PATH prop which specifies the URL where we want to render a given compnent. 
COMPONENT prop to specify the component we are interested in.
Our / route would match every single route so we uses EXACT
EXACT prop tells us that we are only interested in that specific component not anything with a / */}

class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="App">
          
          <div id="page-body">
            {/* switch is a router thing, that says only DISPLAY in the browser, the page that matches the specified URL else more than one page will show at the same time */}
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/UserReg" component={UserReg} />
              <Route path="/UserSafe" component={UserSafe} />
              <Route path="/About" component={About} />
              <Route path="/Settings" component={Settings} />
              <Route component={NotFound} />
              {/* NotFound HAS to be the last in the list as it always shows up */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
