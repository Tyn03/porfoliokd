import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import "./style.css";
import { Bio } from '../../data/constants';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Navbar = () => {
    const [showContact, setShowContact] = useState(false);

  const handleContactToggle = () => {
    setShowContact(!showContact);
  };
    return (
        
        <div className="Nav">
            <div className="duk">
                <p>DO Uy Khang</p>
            </div>
            
            <div className="NavContainer">
                <div className="NavItems">
                    
                    <div className="AP">
                    <Link to="/porfoliokd/about">About</Link>
                    <Link to="/porfoliokd/projects">Projects</Link>
                    </div>
                    
                    
                </div>

                <div className="github">
                <a href={Bio.github} target="_blank">Github Profile</a>
                </div>
                
        
            </div>
        </div>
    );
}

export default Navbar;