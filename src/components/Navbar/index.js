import React from "react";
import "./Navbar.css";
import {Link } from "react-router-dom";

function Navbar(){


    return(
        <div className="navbar">
            <ul className="nav">
                <Link to="/menu">
                    <li className="navitems">
                            <span>MENU</span>
                    </li>
                </Link> 
                <Link to="/order">
                    <li className="navitems">
                            <span>ORDER</span>
                    </li>
                </Link>
                
                <Link to="/login">
                    <li className="navitems">
                            <span>LOGIN</span>
                    </li>
                </Link>
            </ul>
            <ul className="logo">
                <li><span>KTS</span></li>
                <li><span>FOOD</span></li>
            </ul>

        </div>
    )


}

export default Navbar;