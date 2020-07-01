import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="full-login">
            <h1>Quake°Beacon</h1>
            <form>
                <div className=" form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <a href="/UserSafe/" role="button" type="submit" className="btn btn-dark login_button">log in </a>
            </form>
            <footer className="Login-footer">
                <h6>don't have an account- <a href="/UserReg/">sign up </a> </h6>
            </footer>
        </div>
    );
}


export default Login;