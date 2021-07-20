import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Nav } from 'react-bootstrap';



const Navigation = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
        localStorage.clear();
    };

    return (
        <Nav className="col-md-2 my-3">
           {Auth.loggedIn() ? (
            <>
              <Link className="d-flex align-items-center m-3" to="/profile">Profile</Link>
              <a className="d-flex align-items-center m-3 " href="/" onClick={logout}>
                      Logout
              </a>
            </>
          ) : (
            <>
                
                
                
                <Link className="m-3 " to="/login">Login</Link>
                <Link className="m-3"to="/signup">Signup</Link>
            </>
            )}
        </Nav>
    )
    
}

export default Navigation