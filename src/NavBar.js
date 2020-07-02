import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ReactComponent as QBLogo } from "/Users/mattmckinley/Desktop/qb-front-end-USE/src/pages/img/qb_logo.svg";

function NavBar() {
    return (
        <div>
            {/* Navbar created with bootstrap, changed the <a> tags to <div> so we can still use <Link to> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <Link to="/About">
                        <QBLogo />
                        <div className="logo_text">
                            Quake°Beacon
                            </div>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-item nav-link active">
                            <Link to="/About">
                                About
                                </Link>
                            <span className="sr-only">
                                (current)
                                    </span>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/Settings">
                                My Account
                                </Link>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/">
                                Login / Register
                                </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;