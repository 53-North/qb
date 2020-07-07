import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Login.css';

//cut out logInUser={logInUser} from router section of app.js

function Login(props) {
    const [text, setText] = useState("");
    console.log(props.users);

    function handleTextChange(event) {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const myUsers = [
        { myEmail: "helloupart@gmail.com", myUserId: 1 },
        { myEmail: "joe@gmail.com", myUserId: 2 }
    ]
    // const [users, setUsers] = useState([]);

    const linkTRY = <Link to="/UserSafe"></Link>;

    function logInUser(text) {
        //check the email address in the box is one in the database
        //get all the email addresses in an array
        //then loop through the array and check for a match
        //if so...
        // let idToUse =0;
        for (let i = 0; i < myUsers.length; i++) {
            if (myUsers[i].myEmail === text) {
                // console.log(users[i].phone);
                console.log(text + " valid email address");
                window.open("/UserSafe/");
                // return <Link to="/UserSafe"></Link>;
            }    
            
        }
    }

    function logInClick(event) {
        //check the email address in the box is one in the database
        //get all the email addresses in an array
        //then loop through the array and check for a match
        //if so...

        //get the email address from the db that matches text
        //if length > 0 then window.open("/UserSfe/")
        //else - email address not recognised

        // axios
        // .get("https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/")
        // .then(res => {
        //     setUsers(res.data.user);
        // })
        // .catch(err => {
        //     console.log("Could not fetch users", err);
        // });
        console.log(text)
        logInUser(text);

    }

    return (
        <div className="login-background">
            <div className="login-text">
                <h3>
                    Log in below:
                </h3>
            </div>

            <form>
                <div className=" form-group">
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email: name@example.com"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" htmlFor="dropdownCheck">
                            Remember me
                        </label>
                    </div>
                </div>
            </form>
            <div className="button-area text-center">
                    <button
                        onClick={logInClick}
                        type="button"
                        className="btn btn-primary">
                        Log in
                    </button>
                
            </div>

            <div className="login-footer">
                <h6>don't have an account? - <a href="/UserReg/">sign up </a> </h6>
                <h6>forgotten password? - <a href="/UserReg/">click here </a> </h6>
            </div>
        </div>

    );
}


export default Login;