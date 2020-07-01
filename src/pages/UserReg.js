import React from 'react';

function UserReg() {
    return (

        <div className="UserReg">
            <h1>Quake°Beacon</h1>
            <h4>Register below .....</h4>

            <div className="row">
                <div className="col-12 col-md-6 form-group">
                <input type="name" class="form-control" id="exampleInputForName"  placeholder="First Name" />
                </div>
                <div className="col-12 col-md-6 form-group">
                <input type="name" class="form-control" id="exampleInputForName"  placeholder="Surname" /> 
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 form-group">
                <input type="name" class="form-control" id="exampleInputForName"  placeholder="D.O.B" />
                </div>
                <div className="col-12 col-md-6 form-group">
                //////language picker here
                
			
                </div>
            </div>
            <p>already have an account? <a href="/">log in </a> </p>
        </div>

    );
}



export default UserReg;