import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import './UserSafe.css';

function UserSafe() {

    return (

        <div className="UserSafe">
            <header><h1>Quake°Beacon</h1></header>
            <p>An earthquake has happened and the epicentre is "PROPS in here" km from your location, <strong>are you safe?</strong></p>
            <a href="/UserSafe/" role="button" type="submit" class="btn btn-danger btn-xl">I AM SAFE </a>
            <footer>
                <Link to="/">Log out</Link>
        </footer>
        </div>
        

    );
}



export default UserSafe;