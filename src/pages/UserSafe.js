import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';


function UserSafe() {

    let thisUser;

    //const [thisUser, setUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/")
            .then(res => {
            //console.log(res.data);
            //setUser(res.data.user[0]);
            thisUser = res.data.user[0];
            console.log(thisUser);
            //console.log(setUser);
            })
            .catch(err => {
            console.log("Could not fetch users", err);
            });
    }, []);

    function markSafe(id) {

        id = 1; // this line needs to be removed when we get the app using different users

        console.log('clicked mark safe button');
        // const updatedUsers = users.map( user => {
        //     if ( user.userId === id) {
        //         user.user_markedSafe = 1;
        //     }
        //     return user;
        // });

        //const updatedUser = 1;
        // const updatedUser = users.filter(user => user.userId === id);
        // console.log(updatedUser);

        thisUser.user_markedSafe = 1;
        console.log(thisUser);

        axios
        .put(
        `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/${id}`, thisUser
        )
        .then(res => {
        // There is probably no data returned from a Put request.
        // But if you're in the "then" function you know the request succeeded.
        console.log(id + ' marked safe');

        })
        .catch(err => {
        console.log("Error marking " + id + " safe", err);
        });

        //setUsers( updatedUsers );
        //setUser( thisUser );
    }

/*
function humanTest() {
    // When a user marks themselves safe they must complete a simple test
    // to ensure the button hasn't been accidentally activated by rubble or debris

    console.log('To confirm your safety'); // strings from db to localise easily (future roadmap)
    console.log('Retype the number below and submit:');

    let a = Math.floor(Math.random() * 8 + 1);
    let b = Math.floor(Math.random() * 7 + 2); // makes sure 2nd digit won't become negative

    if (b === a) b--; // makes sure 2nd digit not the same as a

    console.log(`${a}${b}`);

    let answer = `${a}${b}`;
    let userAnswer = '';

    if (userAnswer === answer) {
        console.log('Safety Confirmed');
        // markSafe() with this users userId
    }
    else {
        console.log('Incorrect sequence');
        // return to default screen so user has to press mark safe button again
        // markSafe() not invoked and db untouched
    }
}
*/

    return (

        <div className="UserSafe">
            <header><h1>Quake°Beacon</h1></header>
            <p>An earthquake has happened and the epicentre is XXXPROPS in here XXX from your location, <strong>are you safe?</strong></p>
            <a href ="/UserSafe/" role="button" type="submit" className="btn btn-danger btn-xlg" onClick = {() => markSafe()}>I AM SAFE </a> 
        </div>

    );
}



export default UserSafe;