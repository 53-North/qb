import React from 'react';
import axios from 'axios';


//when you press the button - sets user_inDangerZone to true AND user_markedSafe to false


function Earthquake() {

    function checkQuakeData() {
        let qData = {
            "type":"FeatureCollection",
            "metadata":{
                "generated":1593425041000,
                "url":"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-06-28&minmagnitude=5",
                "title":"USGS Earthquakes",
                "status":200,
                "api":"1.8.1",
                "count":3
                },
            "features":[
                {
                "type":"Feature",
                "properties":{
                "mag":5,
                "place":"41km WSW of Abapo, Bolivia",
                "time":1593407193435,
                "updated":1593408369040,
                "tz":-240,
                "url":"https://earthquake.usgs.gov/earthquakes/eventpage/us7000ae2s",
                "detail":"https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000ae2s&format=geojson",
                "felt":null,
                "cdi":null,
                "mmi":null,
                "alert":null,
                "status":"reviewed",
                "tsunami":0,
                "sig":385,
                "net":"us",
                "code":"7000ae2s",
                "ids":",us7000ae2s,",
                "sources":",us,",
                "types":",geoserve,origin,phase-data,",
                "nst":null,
                "dmin":4.8529999999999998,
                "rms":1.0800000000000001,
                "gap":34,
                "magType":"mb",
                "type":"earthquake",
                "title":"M 5.0 - 41km WSW of Abapo, Bolivia"},
                "geometry":{
                    "type":"Point",
                    "coordinates":[-63.848399999999998,-18.9254,37.719999999999999]
                    },
                    "id":"us7000ae2s"},
            {"type":"Feature","properties":{"mag":5,"place":"38km WSW of Abapo, Bolivia","time":1593407192469,"updated":1593409249040,"tz":-240,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/us7000ae33","detail":"https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000ae33&format=geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":385,"net":"us","code":"7000ae33","ids":",us7000ae33,","sources":",us,","types":",geoserve,origin,phase-data,","nst":null,"dmin":4.9059999999999997,"rms":1.2,"gap":73,"magType":"mb","type":"earthquake","title":"M 5.0 - 38km WSW of Abapo, Bolivia"},"geometry":{"type":"Point","coordinates":[-63.807099999999998,-18.962599999999998,35]},"id":"us7000ae33"},
            {"type":"Feature","properties":{"mag":5.5,"place":"13km S of Marmaris, Turkey","time":1593366208775,"updated":1593383116020,"tz":120,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/us7000adtk","detail":"https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000adtk&format=geojson","felt":58,"cdi":5.5,"mmi":5.6669999999999998,"alert":"green","status":"reviewed","tsunami":0,"sig":497,"net":"us","code":"7000adtk","ids":",us7000adtk,","sources":",us,","types":",dyfi,geoserve,losspager,moment-tensor,origin,phase-data,shakemap,","nst":null,"dmin":0.52600000000000002,"rms":0.73999999999999999,"gap":62,"magType":"mww","type":"earthquake","title":"M 5.5 - 13km S of Marmaris, Turkey"},"geometry":{"type":"Point","coordinates":[28.2514,36.730699999999999,62.259999999999998]},"id":"us7000adtk"}],"bbox":[-63.8484,-18.9626,35,28.2514,36.7307,62.26]};

        let uLat = -53.42519;
        let uLon = -2.32443;

        let quakeDists = [];

        for (let i = 0; i < qData.features.length; i++) {

        let qTime = qData.features[i].properties.time;
        let qID = qData.features[i].properties.ids;
        let qLon = qData.features[i].geometry.coordinates[0];
        let qLat = qData.features[i].geometry.coordinates[1];

        console.log(qTime);
        console.log(qID);
        console.log(qLon);
        console.log(qLat);

        const R = 6371e3; // metres - change this if using a different planet
        const φ1 = uLat * Math.PI/180; // φ, λ in radians
        const φ2 = qLat * Math.PI/180;
        const Δφ = (qLat-uLat) * Math.PI/180;
        const Δλ = (qLon-uLon) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c; // in metres

        console.log(d);
        quakeDists.push(Math.round(d)); // an array of the distances to all quakes in the query
    }

    let minDist = 10000; //threshold to be included in crisis (10000km)
    console.log(`User within ${Math.min(...quakeDists) / 1000}km of closest quake epicentre`);

    if (Math.min(...quakeDists) / 1000 < minDist) { // balance  this to reach the end result equation
        console.log('*add details to crisis db*');
    }
}

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

