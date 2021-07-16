import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.css'

const Header = () => {

    return (
        <header >
            <div className="container">
                <div className="row py-4 d-flex ">
                    {/* title of the homepage */}
                    <Link className="col-sm-10" to="/">
                        <h1>StreamSearch</h1>
                    </Link>

                    <Navigation />
                </div>
            </div>
            
        </header>
    )
}

export default Header;