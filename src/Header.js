// Header.js

import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Crickscore</div>
      <div className="options">
      <Link to='/'>
        <span className="option">Live Matches</span>
        </Link>
        <Link to='/Allmatch'>
        <span className="option">All Matches</span>
        </Link>
        <Link to='/'>
        <span className="option">Refresh</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
