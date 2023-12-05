import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../Supabase/SupabaseClient";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Logout from './Logout';
import { Link } from 'react-router-dom'; // Import Link
import Fandango from '../Components/Fandango.png';
import IMDb from '../Components/IMDb.png';

import "../CssStyle/UserProfile.css";


function UserProfile() {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);
      }
    };

    fetchProfile();
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="user-profile-container">
      <Navbar />

      {isVisible && (
        <div id="logoutBtn">
          <Logout></Logout>
        </div>
      )}

      {/* Profile Content */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flex: 1 }}>
        <div className='UserContent' style={{ width: '60%' }}>
          <h1 className='WelcomeMessagePr'>Welcome to Your Profile</h1>
          {email ? <p className='UserEmail'>Email: {email}</p> : <p>Loading...</p>}
          <div>
            <p className='UserMessage'>Discover more amazing features on our homepage!</p>
            <div id='UserButton'>
              <button onClick={handleHomeClick}>Go to Homepage</button>
            </div>
          </div>
        </div>

        {/* Partners Column */}
        <div style={{ width: '20%', textAlign: 'left' }}>
          <h3 className='VisitPartners'>Visit our Partners!</h3>
          
          <Link to="https://www.imdb.com/"><img src={IMDb} alt="Descriptive Text" className="IMDb" /> </Link>
          <Link to="https://www.fandango.com/"><img src={Fandango} alt="Descriptive Text" className="Fandango" /> </Link>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserProfile;
