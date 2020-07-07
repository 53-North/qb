import React from 'react';
import axios from 'axios';

function Centre(props) {

    //let users = props.users;
    let tableLines = [];

    function handleMarkTUserSafe(id) {
        //console.log('mark ' + id + ' safe');
        props.markTUserSafe(id);
    }

    function drawTable(){
        console.log("drawing user table")

        let notSafeUsers = props.users.filter(user => user.user_markedSafe === 0);
        //console.log(notSafeUsers);

        for (let i = 0; i < notSafeUsers.length; i++) {
            tableLines.push( <li key={ notSafeUsers[i].userID } >{notSafeUsers[i].userID} {notSafeUsers[i].user_firstName} {notSafeUsers[i].user_lastName}<button onClick={() => handleMarkTUserSafe(notSafeUsers[i].userID)}>Mark User Safe</button></li> );
        }

        return tableLines;
    }

    return (
        <div className = "user table">
            <ul>
                {drawTable()}
            </ul>
        </div>
    )
}

export default Centre;

