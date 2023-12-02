// TermsAndConditions.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CssStyle/Navbar_Footer.css';

function TermsAndConditions() {
    return (
        <div>
            <Navbar />
            <div className="page-content">
                <h1>Terms and Conditions</h1>
                {/* Add your terms and conditions text here */}
            </div>
            <Footer />
        </div>
    );
}

export default TermsAndConditions;
