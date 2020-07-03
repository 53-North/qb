import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import './UserSafe.css';
import Bootbox from 'bootbox-react';


function UserSafe(props) {

    //console.log(props);
    // console.log(props.thisUser);
    // let thisUser;

    // //const [thisUser, setUser] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/")
    //         .then(res => {
    //             thisUser = res.data.user[0];
    //             console.log(thisUser);
    //         })
    //         .catch(err => {
    //             console.log("Could not fetch users", err);
    //         });
    // }, []);

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
    // function handleButtonPress() { window.alert("Thank you we have now logged you as SAFE"); }  this makes an ugly pop up box

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

    function markSafe(id) {
        id = 1; // this line needs to be removed when we get the app using different users
        console.log('clicked mark safe button');
        const updatedUsers = users.map( user => {
            if ( user.userID === id) {
                user.user_markedSafe = 1;
            }
            return user;
        });
 
        const updatedUser = users.filter(user => user.userID === id);

        console.log( updatedUsers );
        console.log( updatedUser );

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
        setUsers( updatedUsers );
    }

    const [showAlert, setShowAlert] = useState(false)
    const handleClose = () => {
        console.log("You tots closed that ALERT man!");
        
        return setShowAlert(false);
    }

    function buttonPressed() {
        console.log('button pressed');
        setShowAlert(true);
        markSafe();
    }

    return (
        <div className="UserSafe">
            <p>An earthquake has happened and the epicentre is "PROPS in here" km from your location
                <strong> are you safe?</strong></p>
            <>
                <button 
                onClick={() => buttonPressed()}
                className="btn btn-danger btn-xl"
                > I AM SAFE </button>

                <Bootbox show={showAlert}
                    type={"alert"}
                    message={"Thank you, we are delighted to inform you that you are marked as SAFE on our system.  Should your situation change, please call the EMERGENCY SERVICES"}
                    onClose={handleClose}/>
            </>
            <footer>
                <Link to="/">Log out</Link>
            </footer>
        </div>
    );
}



export default UserSafe;