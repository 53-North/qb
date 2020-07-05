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
import CallCentreScreen from "./pages/CallCentreScreen";
import Test from "./pages/Test";

// FONT FAMILY, font-family: 'Nunito', sans-serif;

/* ROUTER uses two make props.  PATH prop which specifies the URL where we want to render a given compnent. 
COMPONENT prop to specify the component we are interested in.
Our / route would match every single route so we uses EXACT
EXACT prop tells us that we are only interested in that specific component not anything with a / */

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/")
      .then(res => {
        setUsers(res.data.user);
      })
      .catch(err => {
        console.log("Could not fetch users", err);
      });
  }, []);

  // const myUsers = [
  //   { myEmail: "helloupart@gmail.com", myUserId: 1 },
  //   { myEmail: "joe@gmail.com", myUserId: 2}
  // ]

  function logInUser(text) {
    //check the email address in the box is one in the database
    //get all the email addresses in an array
    //then loop through the array and check for a match
    //if so...
    // let idToUse =0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].user_email === text) {
        console.log(text + "valid email address")
        // idToUse+=(users[i].user_email);
        // return true;
      }
    }
    // console.log(idToUse)
  }

  function startQuake() {
    let id;
    console.log('quake notification received');
    const updatedUsers = users.map(user => {
      //user.user_inDangerZone = 1;
      user.user_markedSafe = 0;

      //id = 1;

      return user;
    });

    console.log(updatedUsers.length);

    for (let i = 0; i < updatedUsers.length; i++) {
      axios
        .put(
          `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/${updatedUsers[i].userID}`, updatedUsers[i]
        )
        .then(res => {
          // There is probably no data returned from a Put request.
          // But if you're in the "then" function you know the request succeeded.
          console.log(updatedUsers[i].userID + ' marked in danger');
          console.log(updatedUsers[i].user_inDangerZone);

        })
        .catch(err => {
          console.log("Error marking " + updatedUsers[i].userID + " in danger", err);
        });
    }
    //console.log( updatedUsers );
    // console.log( updatedUser );
    setUsers(updatedUsers);
  }

  function markSafe(id) {
    id = 1; // this line needs to be removed when we get the app using different users
    console.log('clicked mark safe button');
    const updatedUsers = users.map(user => {
      if (user.userID === id) {
        user.user_markedSafe = 1;
      }
      return user;
    });

    const updatedUser = users && users.filter(user => user.userID === id);
    // console.log( updatedUsers );
    // console.log( updatedUser );

    axios
      .put(
        `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/${id}`, updatedUsers[0]
      )
      .then(res => {
        // There is probably no data returned from a Put request.
        // But if you're in the "then" function you know the request succeeded.
        console.log(id + ' marked safe');

      })
      .catch(err => {
        console.log("Error marking " + id + " safe", err);
      });
    setUsers(updatedUsers);
  }

  //holly playing with CALL CENTRE STATE
  // const activeCalls = users && users.filter(calls => !calls.user_markedSafe);
  // const completedCalls = users && users.filter(calls => calls.user_markedSafe);

 


  // key={users.userId}
  // user_email={users.user_email}
  // user_phone={users.user_phone}
  // user_language={users.user_language}
  // user_firstName={users.user_firstName}
  // user_lastName={users.user_lastName}
  // user_inDangerZone={users.user_inDangerZone}
  // user_markedSafe={users.user_markedSafe}
  // user_markedSafe={users.user_markedSafe}
  // user_lat={users.user_lat}
  // user_long={users.user_long}
  // userId={users.userId}
//end of call centre state bit
return (

  <Router>
    <div className="App">
      <div id="page-body">
        {/* switch is a router thing, that says only DISPLAY in the browser, the page that matches the specified URL else more than one page will show at the same time */}
        <div><NavBar /></div>
        <Switch>
          <Route path="/" /*component={Login} exact*/ render= {props => (<Login {...props} users={users} logInUser={logInUser} />)} exact />
          <Route path="/UserReg" component={UserReg, CallCentreScreen} />
          <Route path="/UserSafe" /*component={UserSafe}*/ render={props => (<UserSafe {...props} users={users} markSafe={markSafe} />)} />
          <Route path="/About" component={About} />
          <Route path="/Settings" component={Settings} />
          <Route path="/CallCentreScreen" render={props => 
                <div> 
                  <CallCentreScreen/>
                  <Earthquake/>
                </div>}/>
          <Route path="/Test" component={Test}/>
          <Route path="/Earthquake" /*component={Earthquake}*/ render={props => (<Earthquake {...props} users={users} markSafe={markSafe} startQuake={startQuake} />)} />
          <Route component={NotFound} />

          {/* NotFound HAS to be the last in the list as it always shows up */}
        </Switch>

      </div>
    </div>
  </Router>
);

}

export default App;
