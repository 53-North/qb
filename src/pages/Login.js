import React from 'react';
import './Login.css';

function Login(props) {


    function Login() {
        // Need to try and get this to open with router instead?
        function logInClick() {
            //check the email address in the box is one in the database
            //get all the email addresses in an array
            //then loop through the array and check for a match
            //if so...
            props.logInUser(props.text);

            // window.open("/UserSafe/");
        }

        return (
            <div className="login-background">
                <div className="login-text">
                    <h3>
                        Log in below:
                </h3>
                </div>
                <div className="login-form-back">
                    <form>
                        <div className="form-group">
                            <div className="email-form">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email: name@example.com" />
                            </div>
                            <div className="password-form">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="button-area text-center">
                    <button onClick={logInClick} type="button" className="btn btn-primary">Log in</button>
                </div>
                <div className="login-footer">
                    <h6>don't have an account? - <a href="/UserReg/">sign up </a> </h6>
                    <h6>forgotten password? - <a href="/UserReg/">click here </a> </h6>
                </div>
            </div>

        );
    }
}

export default Login;