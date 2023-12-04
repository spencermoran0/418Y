// SignUp.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../CssStyle/Home.css"

import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchTerm = event.target.value;
      navigate(`/SearchList?searchMovie=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleSubscribeClick = () => {
    navigate('/Subscription'); // Navigates to the Subscription page
  };



  return (
    <div>
      <Navbar />
      <section className="WelcomeMessage">
        <h1>Home Page</h1>
      </section>

      {/* Search BAr */}
        <section className="SearchBarHome">
        <div className="container">
          <label htmlFor="searchInput">Search Movie</label>
          <input type="search" id="searchInput" placeholder="Enter the movie here...." onKeyPress={handleKeyPress} />
        </div>
      </section>


      <section className="SubscriptionDetails">
        <h2>Membership Benefits</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Non-Subscriber</th>
              <th>Subscriber</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access to Full Site</td>
              <td>Yes (With Ads)</td>
              <td>Yes (No Ads)</td>
            </tr>
            <tr>
              <td>Other Perks</td>
              <td>Limited</td>
              <td>Exclusive Access</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>

      <section className="Subscribe_Button">
        <button onClick={handleSubscribeClick}>Subscribe</button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
