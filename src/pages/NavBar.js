import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { ReactComponent as QBLogo } from "./img/qb_logo.svg";
import { ReactComponent as MenuIcon } from "./img/open-menu.svg";


function NavBar() {
    return (
        <div>
            {/* Navbar created with bootstrap, changed the <a> tags to <div> so we can still use <Link to> */}
            <nav className="navbar navbar-expand-lg navbar-dark nav-background">
                <div className="navbar-brand">
                    <Link to="/">
                        <QBLogo />
                    </Link>
                </div>
                <div className="logo-title">
                    Quake°<br />Beacon<br />
                    <div className="logo-tag">
                        <h6>Are you safe?</h6>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i><MenuIcon /></i></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-item nav-link active">
                            <Link to="/">
                                <div className="nav-text">About</div>
                            </Link>
                            <span className="sr-only">
                                (current)
                                    </span>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/Login">
                                <div className="nav-text">Login</div>
                            </Link>
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/UserReg">
                                <div className="nav-text">Register</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;