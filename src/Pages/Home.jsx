// SignUp.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../CssStyle/Home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <section className="Home Page">
        <h1>Home Page</h1>

        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
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
        <button>Subscribe</button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
