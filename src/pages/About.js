import React from 'react';
import QuakeMap from "./img/HomepageV.jpg";


function About() {
    return (

        <div className="About">
            <h2>What is this ap actually for</h2>
            <img src={QuakeMap} alt="Earthquake radius map" />
        </div>
    );
}



export default About;