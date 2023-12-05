import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../Supabase/SupabaseClient";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Logout from './Logout';
import "../CssStyle/logout.css";

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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      {isVisible && (
        <div id="logoutBtn">
          <Logout></Logout>
        </div>
      )}

      {/* Profile Content */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flex: 1 }}>
        <div style={{ width: '60%' }}>
          <h1>Welcome to Your Profile</h1>
          {email ? <p>Email: {email}</p> : <p>Loading...</p>}
          <div>
            <p>Discover more amazing features on our homepage!</p>
            <button onClick={handleHomeClick}>Go to Homepage</button>
          </div>
        </div>

        {/* Partners Column */}
        <div style={{ width: '20%', textAlign: 'left' }}>
          <h3>Visit our Partners!</h3>
          <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
            <img src="/path_to_imdb_logo.jpg" alt="IMDb" style={{ width: '100%' }} />
          </a>
          <a href="https://www.fandango.com/" target="_blank" rel="noopener noreferrer">
            <img src="/path_to_fandango_logo.jpg" alt="Fandango" style={{ width: '100%' }} />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserProfile;
