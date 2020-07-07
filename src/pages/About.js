import React from 'react';
import "./About.css";


function About() {
    return (
        <div className="about-main">
            <div className="about-question">
                <h3>
                    What is Quake°Beacon?
                </h3>
            </div>
            <div className="about-para">
                <h4>Get Information</h4>
                <p>When an incident such as an earthquake, occurs where the severity of the quake means that people might be in danger, global crisis reporting agencies alert Quake°Beacon.</p>
                <p>
                Mark Yourself Safe
                Quickly reassure friends and family by marking yourself safe.
                </p>
                <p>
                    this is the answer to this question. im not too great with words so we need a paragraph
                    explaining the app and how it can help people.
                    we could also show a cool little illustration/ map about what happens e.g "were always watching earthquake data",
                    "when theres an earthquake in your area we add you to a search database that tells us your in danger", "if you tell us
                    you're safe we take you off" etc but each section can be a visualisation. All time dependent though.
                </p>
            </div>
            <div className="about-illo">
                <h3>illustration here!!!</h3>
            </div>
            <div className="about-question_2">
                <h3>
                    How do i sign up?
                </h3>
            </div>
            <div className="about-para_2">
                <p>
                    info on signing up. what we do with peoples data etc
                </p>
            </div>
        </div>
    );
}



export default About;