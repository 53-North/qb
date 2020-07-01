import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './UserReg.css';
import NavBar from "../NavBar";

function UserReg() {
    return (
<<<<<<< HEAD

        <div className="UserReg">


            <h1 className="UserRegh1">Quake°Beacon</h1>
=======
        <div className="UserReg">
>>>>>>> refs/remotes/origin/master
            <h4 className="UserRegh4">Register below .....</h4>

            <div className="row">
                <div className="col-12 col-md-6 col-md-offset-2 form-group" align="center">
                    <input type="name" class="form-control" id="exampleInputForName" placeholder="First Name" />
                </div>
                <div className="col-12 col-md-6 col-md-offset-2 form-group" align="center">
                    <input type="name" class="form-control" id="exampleInputForName" placeholder="Surname" />
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-6 form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email: name@example.com" />
                </div>
                <div className="col-12 col-md-6 form-group">
                    <input type="phone" className="form-control" id="phone" placeholder="Phone: (+44)101 110 1010" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6 form-group">
                    <input type="date" className="form-control" id="dob" placeholder="D.O.B" />
                </div>

                <div className="col-12 col-md-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Language</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Albanian">Albanian</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Basque">Basque</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Catalan">Catalan</option>
                        <option value="Cambodian">Cambodian</option>
                        <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                        <option value="Croatian">Croatian</option>
                        <option value="Czech">Czech</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="English">English</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finnish">Finnish</option>
                        <option value="French">French</option>
                        <option value="Georgian">Georgian</option>
                        <option value="German">German</option>
                        <option value="Greek">Greek</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Icelandic">Icelandic</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Irish">Irish</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Javanese">Javanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Latin">Latin</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Macedonian">Macedonian</option>
                        <option value="Malay">Malay</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Maltese">Maltese</option>
                        <option value="Maori">Maori</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Mongolian">Mongolian</option>
                        <option value="Nepali">Nepali</option>
                        <option value="Norwegian">Norwegian</option>
                        <option value="Persian">Persian</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Quechua">Quechua</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="Samoan">Samoan</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovenian">Slovenian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Swedish ">Swedish </option>
                        <option value="Tamil">Tamil</option>
                        <option value="Tatar">Tatar</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Thai">Thai</option>
                        <option value="Tibetan">Tibetan</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Ukrainian">Ukrainian</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Welsh">Welsh</option>
                        <option value="Xhosa">Xhosa</option>
                    </select>
                </div>

                <div className="text-center text-center">
                    <button type="button" class="btn btn-dark">Register</button>
                </div>

            </div>
            <p>already have an account? <a href="/">log in </a> </p>
        </div>

    );
}



export default UserReg;