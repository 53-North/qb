import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

// FONT FAMILY, font-family: 'Nunito', sans-serif;
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
  console.log(users);

  let id;

  //trying to get UserReg screen to work

  function addUser(firstname, surname, email, phone, language) {
    //get a copy of the tasks that are aready there, add a new task into this array, update the task state
    const newUser = {
      // userId: uuidv4(),
      user_email: email,
      user_phone: phone,
      user_language: language,
      user_firstName: firstname,
      user_lastName: surname, 
      user_markedSafe: false
    }
     axios.post('https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/', newUser)
      .then(
        //If the request is successful, get the task id and add it to the new task object
        (response) => {
          newUser.userId = response.data.user[0].userId;
          console.log(newUser);
          const updatedUsers_reg = [...users, newUser];
          setUsers(updatedUsers_reg);
          console.log(users);
        }
      )
      .catch(error => {
        console.log('Error adding a task', error)
      })
  }
  //end of UserReg post


  function logInUser(text) {
      //check the email address in the box is one in the database
      //get all the email addresses in an array
      //then loop through the array and check for a match
      //if so...
      // let idToUse =0;
      for (let i = 0; i < users.length; i++) {
        // console.log(users[i]);
        if (users[i].user_email === text) {
          id = users[i].userID;
          // console.log(text + " valid email address");
          console.log(`This user's ID is : ${id}`);
          window.open("/UserSafe/","_self") 
        }              
      }
    }

  function startQuake() {
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
          //console.log(updatedUsers[i].user_inDangerZone);
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
    //id = 1; // this line needs to be removed when we get the app using different users
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
        `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/${id}`, updatedUser[0]
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
return (
/* ROUTER uses two make props.  PATH prop which specifies the URL where we want to render a given compnent. 
COMPONENT prop to specify the component we are interested in.
Our / route would match every single route so we uses EXACT
EXACT prop tells us that we are only interested in that specific component not anything with a /
In a route you render (show the page) by passing props into it from things outside of its component.
If the function is WITHIN that component you do not need to pass it in as {notneeded}.
 */

  <Router>
    <div className="App">
      <div id="page-body">
        {/* switch is a router thing, that says only DISPLAY in the browser, the page that matches the specified URL else more than one page will show at the same time */}
        <div><NavBar /></div>
        <Switch>
          <Route path="/UserReg" render= {props => (<UserReg 
            {...props} 
            users={users}
            addUser={addUser} />
             )} /> 
          <Route path="/Login" render= {props => (<Login 
            {...props} 
            users={users}
            logInUser={logInUser} />
             )} />
          <Route path="/UserSafe" render={props => (<UserSafe 
            {...props} 
            users={users} 
            markSafe={markSafe}
            id={id} />
            )} />
          <Route path="/" component={About} exact/> 
          <Route path="/Settings" component={Settings} />
          <Route path="/Test" component={Test}/>
           {/* {...props} is saying go through all the props featured in the component.  
           users={users} says to take all the key value pairs from that state USERS, which is the info from the database */}
          <Route path="/Earthquake" render={props => (<Earthquake 
              {...props} 
              users={users} 
              markSafe={markSafe} 
              startQuake={startQuake}
               />
              )} />
          <Route component={NotFound} />

          {/* NotFound HAS to be the last in the list as it always shows up */}
        </Switch>

      </div>
    </div>
  </Router>
);

}

export default App;
