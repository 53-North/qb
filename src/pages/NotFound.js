import React, { Component } from 'react';
import './NotFound.css';
import NavBar from "../NavBar";
import logo from "./img/Error.jpg"
import { withRouter } from 'react-router-dom'


function NotFound() {

    return (
        <div className="NotFound">
            <img src={logo} alt="Logo" />;
            <p>hit back</p>
           );
        </div>
    );
}


export default NotFound;