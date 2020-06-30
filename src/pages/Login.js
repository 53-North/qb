import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="full-login">
            <h1>Quake°Beacon</h1>
        <form>
            <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <a href ="/UserSafe/" role="button" type="submit" className="btn btn-dark login_button">log in </a> 
        </form>
        <footer>
            <p>don't have an account- <a href ="/UserReg/">sign up </a> </p>
            
            </footer>
        </div>

            
    );

}


export default Login;