import React, { Component } from 'react';
import './NotFound.css';
import NavBar from "../NavBar";

function NotFound() {

    return (
        <div className="NotFound">
            <div><NavBar/></div>
            <h1>404: Yoo-hoo that page is not found, sorry!</h1>
           
        </div>

    );
}



export default NotFound;