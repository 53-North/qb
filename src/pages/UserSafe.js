import React from 'react';

function UserSafe() {
    return (

        <div className="UserSafe">
            <header><h1>Quake°Beacon</h1></header>
            <p>An earthquake has happened and the epicentre is XXXPROPS NEEDEDXXX from your location.</p>
            <h3>Enter the number below to confirm your safety</h3>
            <h1>52</h1> 
            {/* this should be props and auto generated */}
            <div className="input-group mb-3">
                <div class="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">I am Safe</button>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            </div>
            
    );
}



export default UserSafe;