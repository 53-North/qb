import React from 'react';
import './Login.css';

function Login(props) {

    function logInClick() {
        //check the email address in the box is one in the database
        //get all the email addresses in an array
        //then loop through the array and check for a match
        //if so...
        props.logInUser(props.text);
        
        // window.open("/UserSafe/");
    }

    return (
        <div className="loginForm">
            <h4>Log in below:</h4>
            <form>
                <div className=" form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email: name@example.com" onChange={ props.handleTextChange } value={ props.text } />
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" for="dropdownCheck">
                            Remember me
                        </label>
                    </div>

                </div>
                 
                <button
                onClick={logInClick}
                className="login_btn btn btn-danger btn-xl"> LOG IN </button>
            </form>

            <footer className="Login-footer">
                <h6>don't have an account- <a href="/UserReg/">sign up </a> </h6>
                <h6>forgotten password- <a href="/UserReg/">click here </a> </h6>
            </footer>
        </div>

    );
}


export default Login;