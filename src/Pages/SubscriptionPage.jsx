// Subscription.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import '../CssStyle/Subscription.css'; // Import your Subscription styles

function Subscription() {
  const navigate = useNavigate();
  const [displayAds, setDisplayAds] = useState(true);

  const handlePremiumSubscribe = () => {
    // Navigate to the PaymentPage when the user subscribes to premium
    navigate('/payment');
    // Turn off the display of ads
    setDisplayAds(false);
  };

  return (
    <div>
      <Navbar />
      <section className="subscription-container"> {/* Use the correct class name */}
        

        {/* Premium Services */}
        <div>
          <h2>Premium Membership</h2>
          <p>Upgrade to our premium membership for additional benefits:</p>
          <ul>
            <li>Ad-free experience</li>
            <button onClick={handlePremiumSubscribe}>Subscribe</button>
            {/* Add more premium features as needed */}
          </ul>
          
        </div>

        

        {/* Additional content */}
        <div>
          <h2>Why Subscribe?</h2>
          <p>Stay informed about the latest movies, rankings, and exclusive offers.</p>
        </div>

        <h1>Subscribe to Our Newsletter</h1>
        <p>Get the latest updates by subscribing to our newsletter.</p>
        
        {/* Subscription form */}
        <form className="subscription-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Subscribe</button>
        </form>{
        
}

      </section>
      <Footer />
    </div>
  );
}

export default Subscription;
