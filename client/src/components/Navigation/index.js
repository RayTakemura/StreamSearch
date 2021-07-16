import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navigation = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <nav className="col-md-2 my-3">
           {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
                <Link className="m-3" to="/login">Login</Link>
                <Link className="m-3"to="/signup">Signup</Link>
            </>
            )}
        </nav>
    )
    
}

export default Navigation