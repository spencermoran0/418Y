import React from 'react';
import { Link } from 'react-router-dom';
import '../CssStyle/Navbar_Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container flex footer-content">
                <div className="footer-links">
                    <Link to="/AboutUs">About Us</Link>
                    <Link to="/TermsAndConditions">Terms and Conditions</Link>
                    <Link to="/ContactUs">Contact Us</Link>
                </div>
                <div className="social-media">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()}MovieRankern. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;