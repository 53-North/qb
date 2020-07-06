import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import './UserSafe.css';
import Bootbox from 'bootbox-react';


function UserSafe(props) {

    console.log(props.users);

    function handleMarkSafe() {
        props.markSafe();
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
    // function handleButtonPress() { window.alert("Thank you we have now logged you as SAFE"); }  this makes an ugly pop up box


    const [showAlert, setShowAlert] = useState(false)
    const handleClose = () => {
        console.log("You tots closed that ALERT man!");

        return setShowAlert(false);
    }

    function buttonPressed() {
        console.log('button pressed');
        setShowAlert(true);
        handleMarkSafe();
    }

    return (
        <div className="UserSafe">
            <div className="alert-text">
                <h3><strong>ATTENTION!</strong></h3>
            </div>
            <div className="user_safe-para">
                <h3>
                    An earthquake has happened and the epicentre is "PROPS in here" km from your location.
                    </h3>
            </div>
            <div className="safe-text">
                <h3><strong>ARE YOU SAFE ?</strong></h3>
            </div>
            <div className="safe-button text-center">
                <button
                    onClick={() => buttonPressed()}
                    className="btn btn-danger btn-xl"
                > I AM SAFE
                </button>
            </div>
            <div className="alert-message">
                <Bootbox show={showAlert}
                    type={"alert"}
                    message={"Thank you, we are delighted to inform you that you are marked as SAFE on our system.  Should your situation change, please call the EMERGENCY SERVICES"}
                    onClose={handleClose} />
            </div>
            <div className="logout-footer">
                <h6><Link to="/">Log out</Link></h6>
            </div>
        </div>
    );
}



export default UserSafe;