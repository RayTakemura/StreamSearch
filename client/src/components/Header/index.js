import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.css'
import logo from '../../assets/logo/logo2.gif';

const Header = () => {

    return (
        <header style={{borderBottomColor:"black", borderBlock:"solid"}}>
            <div className="container">
                <div className="row py-4 d-flex ">
                    
                    {/* title of the homepage */}
                    <Link className="col-sm-10" to="/">
                        <img className="logo" src={logo} alt="tv with magnifying glass inside"/>
                        <h1 className="title">StreamSearch</h1>
                        
                    </Link>

                    <Navigation />
                </div>
            </div>
            
        </header>
    )
}

export default Header;