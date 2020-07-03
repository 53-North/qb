import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import NavBar from "./pages/NavBar";
import Login from "./pages/Login";
import UserReg from "./pages/UserReg";
import UserSafe from "./pages/UserSafe";
import About from "./pages/About";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Earthquake from "./pages/Earthquake";
import Test from "./pages/Test";


/* ROUTER uses two make props.  PATH prop which specifies the URL where we want to render a given compnent. 
COMPONENT prop to specify the component we are interested in.
Our / route would match every single route so we uses EXACT
EXACT prop tells us that we are only interested in that specific component not anything with a / */

function App () {

    // let thisUser;
    // useEffect(() => {
    //     axios
    //         .get("https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/")
    //         .then(res => {
    //             //console.log(res.data);
    //             //setUser(res.data.user);
    //             thisUser = res.data.user[0]; // **
    //             //console.log(thisUser);
    //             // console.log(setUser);
    //         })
    //         .catch(err => {
    //             console.log("Could not fetch users", err);
    //         });
    // }, []);

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/")
    //         .then(res => {
    //             //console.log(res.data);
    //             setUsers(res.data.user);
    //             //users = res.data.user; // **
    //             //console.log(thisUser);
    //             //console.log(res.data.user);
    //         })
    //         .catch(err => {
    //             console.log("Could not fetch users", err);
    //         });
    // }, []);

    // function markSafe(id) {
    //     id = 1; // this line needs to be removed when we get the app using different users
    //     console.log('clicked mark safe button');
    //     const updatedUsers = setUsers.map( user => {
    //         if ( user.userId === id) {
    //             user.user_markedSafe = 1;
    //         }
    //         return user;
    //     });
    //     //const updatedUser = 1;
    //     const updatedUser = setUsers.filter(user => user.userId === id);
    //     // console.log(updatedUser);
    //     //thisUser.user_markedSafe = 1;
    //     //console.log(thisUser);

    //     axios
    //         .put(
    //             `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/${id}`, updatedUsers
    //         )
    //         .then(res => {
    //             // There is probably no data returned from a Put request.
    //             // But if you're in the "then" function you know the request succeeded.
    //             console.log(id + ' marked safe');
    //         })
    //         .catch(err => {
    //             console.log("Error marking " + id + " safe", err);
    //         });
    //     setUsers( updatedUsers );
    //     //setUser( thisUser );
    // }

  return (
      
    <Router>
      <div className="App">
        <div id="page-body">
          {/* switch is a router thing, that says only DISPLAY in the browser, the page that matches the specified URL else more than one page will show at the same time */}
          <div><NavBar/></div>
          <Switch>
            <Route path="/" component={Login} exact /> 
            <Route path="/UserReg" component={UserReg} />
            <Route path="/UserSafe" component={UserSafe} /* render={props => (<UserSafe {...props} user={ users } /> ) } */ />
            <Route path="/About" component={About} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Test" component={Test} />
            <Route path="/Earthquake" component={Earthquake} />
            <Route component={NotFound} />

            {/* NotFound HAS to be the last in the list as it always shows up */}
          </Switch>
            
        </div>
      </div>
    </Router>
  );
  
}

export default App;
