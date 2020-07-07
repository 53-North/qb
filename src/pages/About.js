import React from 'react';
import "./About.css";

import login from "./img/login.png"
import listen from "./img/ear.png"
import quake from "./img/earthquake.png"
import notif from "./img/bell.png"
import safe from "./img/shield.png"
import unsafe from "./img/shield1.png"
import search from "./img/human-resources.png"
import success from "./img/like.png"

function About() {
    return (
        <div className="container about-main">
            <div className="about-question">
                <h3>
                    What is Quake°Beacon?
                </h3>
            </div>


//             <div className="about-para">
//                 <h4>Get Information</h4>
//                 <p>When an incident such as an earthquake, occurs where the severity of the quake means that people might be in danger, global crisis reporting agencies alert Quake°Beacon.</p>
//                 <p>
//                 Mark Yourself Safe
//                 Quickly reassure friends and family by marking yourself safe.
//                 </p>
//                 <p>
//                     this is the answer to this question. im not too great with words so we need a paragraph
//                     explaining the app and how it can help people.
//                     we could also show a cool little illustration/ map about what happens e.g "were always watching earthquake data",
//                     "when theres an earthquake in your area we add you to a search database that tells us your in danger", "if you tell us
//                     you're safe we take you off" etc but each section can be a visualisation. All time dependent though.
//                 </p>
//             </div>

            <div className="about-illo">
                <div className="row illo_signup">
                    <div className="col-4 signup-png">
                        <img src={login} alt="login illustration" />
                    </div>
                    <div className="col-8 signup-text">
                        <p>Sign up for an account with us and register your details.</p>
                    </div>
                </div>
                <div className="row illo_listen">
                    <div className="col-8 listen-text">
                        <p>We're constantly listening to earthquake data from <a href="https://earthquake.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS </a>
                        and monitoring when a potentially harmful quake could happen.</p>
                    </div>
                    <div className="col-4 listen-png">
                        <img src={listen} alt="ear illustration" />
                    </div>
                </div>
                <div className="row illo_quake">
                    <div className="col-4 quake-png">
                        <img src={quake} alt="house damaged by earthquake" />
                    </div>
                    <div className="col-8 quake-text">
                        <p>When a harmful quake happens in your area, we add you to a database used by rescue professionals.
                            This aids them in their search for survivors.</p>
                    </div>
                </div>
                <div className="row illo_notif">
                    <div className="col-8 notif-text">
                        <p>You then get a notification asking if you're safe. A button press is all that's needed to reply.</p>
                    </div>
                    <div className="col-4 notif-png">
                        <img src={notif} alt="bell illustration for notification" />
                    </div>
                </div>
                <div className="row illo_safe">
                    <div className="col-4 safe-png">
                        <img src={safe} alt="shield with tick" />
                    </div>
                    <div className="col-8 safe-text">
                        <p>If you are safe and unharmed you are taken out of the rescue database. You dont need to do anything else.</p>
                    </div>
                </div>
                <div className="row illo_not-safe">
                    <div className="col-8 not-safe-text">
                        <p>If we haven't heard from you you're already in the database as someone that needs help.
                             Our call centre will try and contact you to double check.</p>
                    </div>
                    <div className="col-4 not-safe-png">
                        <img src={unsafe} alt="shield with cross" />
                    </div>
                </div>
                <div className="row illo_search">
                    <div className="col-4 search-png">
                        <img src={search} alt="magnifying glass" />
                    </div>
                    <div className="col-8 search-text">
                        <p>The local area rescue services will now be using our database to search for you along with
                            their own resources.
                        </p>
                    </div>
                </div>
                <div className="row illo_success">
                    <div className="col-8 success-text">
                        <p>By automatically adding you to our search database, 
                            it takes away the need to call the emergency services when a disaster heppens.
                        </p>
                    </div>
                    <div className="col-4 success-png">
                        <img src={success} alt="thumbs up" />
                    </div>
                </div>
            </div>
            <footer>
                <div className="illustration-credit">
                    <p>• Icons made by
                    <a href="https://www.flaticon.com/authors/freepik"
                            title="Freepik"> Freepik </a>
                    from <a href="https://www.flaticon.com/"
                            title="Flaticon">www.flaticon.com •</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}



export default About;