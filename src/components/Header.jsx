import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  // Make sure this is imported to apply styles

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
