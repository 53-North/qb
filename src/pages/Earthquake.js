import React from 'react';
import axios from 'axios';


//when you press the button - sets user_inDangerZone to true AND user_markedSafe to false


function Earthquake() {

    // user_inDangerZone = 1;
    // user_markedSafe = 0;

    // axios
    // .put(
    // `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/`
    // )
    // .then(res => {
    // // There is probably no data returned from a Put request.
    // // But if you're in the "then" function you know the request succeeded.
    // console.log("All users marked in danger zone");

    // })
    // .catch(err => {
    // console.log("Error marking users in danger zone", err);
    // });


    function handleEarthquakeClick(){
        // props.triggerEarthquake()
        console.log("All users marked in danger")
    }




    return (
        <div className = "earthquake button">
            <h1>Press this button when there is an earthquake!</h1>
            <button onClick={ handleEarthquakeClick }>Press me!</button>
        </div>
    )
}

export default Earthquake;

