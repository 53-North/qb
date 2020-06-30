import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (

        <div className="NavBar">
            <nav class="navbar navbar-dark bg-dark">
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Settings">My Account</Link></li>
                </ul>
            </nav>
        </div>

    );
}



export default NavBar;