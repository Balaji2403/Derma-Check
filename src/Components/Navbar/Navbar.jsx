import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { gsap } from "gsap";
import { useEffect } from "react";
import logo from "./DC.png";



const Navbar = () => {
  return (
    <nav className="navbar">
        <img className="logo"src={logo} alt="logo" />
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Dermacheck</Link></li>
            <li><Link to="/check-health">Check </Link></li>
           
        </ul>
    </nav>
  );
}

export default Navbar;