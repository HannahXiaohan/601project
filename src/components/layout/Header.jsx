import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/bio">About Me</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/interests">Interests</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
