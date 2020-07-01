import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="full-login">
            <h1>Quake°Beacon</h1>
            <form>
                <div className=" form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                        <label class="form-check-label" for="dropdownCheck">
                            Remember me
                </label>
                    </div>
                </div>
                <a href="/UserSafe/" role="button" type="submit" className="btn btn-dark login_button">log in </a>
            </form>




            <footer className="Login-footer">
                <h8>don't have an account- <a href="/UserReg/">sign up </a> </h8>
            </footer>
        </div>
    );
}


export default Login;