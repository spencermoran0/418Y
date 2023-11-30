import React, { useEffect, useState } from 'react';
import supabase from "../Supabase/SupabaseClient";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function UserProfile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
        const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
        <Navbar />
      <h1>User Profile</h1>
      {email ? <p>Email: {email}</p> : <p>Loading...</p>}

      <Footer />
    </div>

  );
}

export default UserProfile;