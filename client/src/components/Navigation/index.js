import React from 'react';
import { Link } from 'react-router-dom';
//import Auth from '../../utils/auth';

const Navigation = () => {
    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    return (
        <nav className="text-center">
            {/* Insert more logic for logged in vs not-logged in later! */}
            <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </>
        </nav>
    )
    
}

export default Navigation