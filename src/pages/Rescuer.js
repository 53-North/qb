import React, { useState } from 'react';
import axios from 'axios';
import Bootbox from 'bootbox-react';
import "./Rescuer.css";

function Rescuer(props) {

    const [usersInDanger_resc, setUsersInDanger_resc] = useState([]);

    function markAllUsersInDanger() {
        axios
            .put(
                `https://15omqaggcl.execute-api.eu-west-2.amazonaws.com/dev/user/`
            )
            .then(res => {
                console.log("All users marked in danger zone");
            })
            .catch(err => {
                console.log("Error marking users in danger zone", err);
            });
    }

    //function to find the users from the GET that are NOT safe and return an array of objects called resultToCall.
    //it then changes the usersInDanger STATE by passing in this new array (resultToCall).
    const resultToCall = [];
    function toCall() {
        for (let i = 0; i < props.users.length; i++) {
            if (props.users[i].user_markedSafe === 0) {
                resultToCall.push(props.users[i]);
            }
        }
        setUsersInDanger_resc(resultToCall)
    }

    //This bit of code is for the pop up alert box
    const [showAlert_earthquake, setShowAlert_earthquake] = useState(false)
    const handleClose_earthquake = () => {
        console.log("You tots closed that ALERT man!");
        return setShowAlert_earthquake(false);
    }
    //end of pop up alert box code

    //handleEartquakeClick is taking props from the startQuake function passed as props startQuake is in App.js.
    //It takes in the toCall function (which generates the list of unsafe users)
    //and setShowAlert_earthquake functions (which is what is used to change the showAlert_earthquake state to make a pop up box)
    function handleEarthquakeClick() {
        // props.triggerEarthquake()
        console.log("All users marked in danger")
        props.startQuake();
        toCall();
        setShowAlert_earthquake(true);
        // to remove the button from top of screen after pressed
        const x = document.getElementById("hideMe");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    // delete button 
    // look through the new STATE called usersInDanger and finds where userID() matches id
    function deleteUser(id) {
        // if it is NOT the same id return a list of all the users without that ID
        const updatedUsers_forDelete = usersInDanger_resc.filter(user => user.userID !== id);
        const deletedUser = usersInDanger_resc.filter(user => user.userID === id);
        setUsersInDanger_resc(updatedUsers_forDelete);
        console.log(deletedUser[0].userID);
        props.markSafe(deletedUser[0].userID);
    }
    //if it return TRUE it keeps it, if false it removes it
    // then update the STATE which is the usersInDanger.

    //making the USER IS SAFE button affect the database
    //need a button to do the delete function and the cc mark safe.  
    return (
        <div className="container earthquake-all">
            <div id="hideMe" className="row earthquake-warning">
                <div className="earthquake-text-title col-12 col-md-7">
                    <h2>Potentially Unsafe Users</h2>
                    <div className="earthquake-text-small">
                        <h3>Press the button to populate a list  the locations of potentially unsafe users
                        </h3>
                    </div>
                </div>
                <div className="earthquake_button-area col-12 col-md-5">
                    <button
                        className="btn btn-danger earthquake-button"
                        onClick={handleEarthquakeClick}>
                        Press Here
                    </button>
                </div>
            </div>
            <div className="earthquake-alert">
                <Bootbox show={showAlert_earthquake}
                    type={"alert"}
                    message={"An earthquake has been triggered. All users are marked as not safe."}
                    onClose={handleClose_earthquake} />
            </div>

            <div className="callCentreScreen-main">
                {/* the usersInDanger state should now be populated with the result of the toCall function and have a list of unsafe users
    we then make a map of the info in this state and return only the bits of the state required for this screen  */}

                {usersInDanger_resc.map(person =>
                    <div className="callCentreScreen-list-bign col-12" >

                        <div className="callCentreScreen-userId col-0 col-md-0">
                            {person.userID}
                        </div>
                        <div className="callCentreScreen-deets col-3 col-md-2" label="test">
                            {person.user_firstName}
                        </div>
                        <div className="callCentreScreen-phone col-6 col-md-8">
                            37.7749° N, 122.4194° W
                                </div>
                        <button
                            onClick={() => deleteUser(person.userID)}
                            //this passes the person.userId into deleteUser here so it is inside the scope of this filter.  NO need for handleclick then.
                            className="testBtn btn btn-danger btn-xs col-12 col-md-2"
                        > USER IS SAFE
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}



export default Rescuer;