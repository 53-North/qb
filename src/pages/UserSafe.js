import React from 'react';
import { render } from 'react-dom';

function UserSafe() {

    return (

        <div className="UserSafe">
            <header><h1>Quake°Beacon</h1></header>
            <p>An earthquake has happened and the epicentre is XXXPROPS in here XXX from your location, <strong>are you safe?</strong></p>
            <a href ="/UserSafe/" role="button" type="submit" class="btn btn-danger btn-xlg">I AM SAFE </a> 

    
            
        </div>

    );
}



export default UserSafe;