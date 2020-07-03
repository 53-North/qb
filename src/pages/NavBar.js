import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { ReactComponent as QBLogo } from "./img/qb_logo.svg";

function NavBar() {
    return (
        <div>
            {/* Navbar created with bootstrap, changed the <a> tags to <div> so we can still use <Link to> */}
            <nav className="navbar navbar-expand-lg navbar-dark nav-background">
                <div className="navbar-brand">
                    <Link to="/About">
                        <QBLogo />
                    </Link>
                </div>
                <div className="logo-title">Quake°<br />Beacon</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-item nav-link active">
                            <Link to="/About">
                                <div className="nav-text">About</div>
                                </Link>
                            <span className="sr-only">
                                (current)
                                    </span>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/Settings">
                            <div className="nav-text">My Account</div>
                                </Link>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/">
                            <div className="nav-text">Login</div>
                                </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;