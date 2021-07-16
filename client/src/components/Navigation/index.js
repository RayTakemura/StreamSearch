import React from 'react';
import { Link } from 'react-router-dom';
//import Auth from '../../utils/auth';

const Navigation = () => {
    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    return (
        <nav className="col-md-2 my-3">
            {/* Insert more logic for logged in vs not-logged in later! */}
            {/* <div className="d-flex justify-content-between"> */}
                <Link className="m-3" to="/login">Login</Link>
                <Link className="m-3"to="/signup">Signup</Link>
            {/*</div> */}
        </nav>
    )
    
}

export default Navigation