import React from 'react';
import '../CssStyle/Navbar_Footer.css';
import logoImage from './Logo.png';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <div className="left-side">
            <Link to="/"><img src={logoImage} alt="Descriptive Text" className="NavLogo" /> </Link>
            <Link to="/" className="MovieName-link">Movie</Link>
            <Link to="/" className="RankerName-link">Ranker</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/MoviePage" className="Spencer">Spencer Work</Link></li>
            <li><Link to="/SearchBar" className="NavSearch">Search</Link></li>
            <li><Link to="/SignUp" className="NavSignUp">Sign Up</Link></li>
            <li><Link to="/Login" className="NavLogin">Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
