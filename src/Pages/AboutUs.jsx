// ContactUs.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CssStyle/Navbar_Footer.css';

function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className="page-content">
                <h1>About Us</h1>
                {/* Add your contact information or form here */}
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
