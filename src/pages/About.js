import React from 'react';
import NavBar from "../NavBar";
import logo from "./img/HomepageV.jpg"


function About() {
    return (

        <div className="ABout">
            <div><NavBar /></div>
            <h2>What is this ap actually for</h2>
            <img src={logo} alt="Logo" />;

        </div>

    );
}



export default About;