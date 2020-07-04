import React, { useState, useEffect } from 'react';
import "./CallCentreScreen.css";

//need to make USER IS SAFE BUTTON WORK
function CallCentreScreen(props) {

    //     function handleMarkSafe() {
    //         props.markSafe();
    //     }

    return (

        <div className="callCentreScreen-main">
            <div className="callCentreScreen-background">
                <div className="callCentreScreen-header">
                    <h4>
                        Potentially UNSAFE Users
                </h4>
                </div>
                <div className="callCentreScreen-list">
                    <div className="row callCentreScreen-deets">
                        <div class Name="col-4 col-md-4"><p>Phylis Blythe</p></div>
                        <div class Name="col-4 col-md-4"><p>07123458673</p></div>
                        {/* will be a concat of the first and second name */}
                        <div className="form-check col-4 col-md-2">
                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                            <label className="form-check-label" for="dropdownCheck">Called
                        </label>
                        </div>
                        <button
                            className="btn btn-danger btn-xl col-12 col-md-2"> User Is Safe
                        </button>
                    </div>
                </div>

            </div>
        </div>    
    );
}



export default CallCentreScreen;