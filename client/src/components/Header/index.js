import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

const Header = () => {

    return (
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            {/* title of the homepage */}
            <Link to="/">
                <h1>StreamSearch</h1>
            </Link>

            <Navigation />
        </div>
    )
}

export default Header;