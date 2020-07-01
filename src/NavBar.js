import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/mattmckinley/Desktop/qb-front-end-USE/src/NavBar.css';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <ul id="nav">
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Settings">My Account</Link></li>
                    <li><Link to="/">Login/LogOut</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default NavBar;