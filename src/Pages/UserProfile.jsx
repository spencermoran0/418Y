import React, { useEffect, useState } from "react";
import supabase from "../Supabase/SupabaseClient";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



import "../CssStyle/logout.css";



// In LogoutButton.jsx
import Logout from './logout';


function UserProfile() {
  const [isVisible, setIsVisible] = useState(true);
  
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  // I tried to toggle logout based on user status, but some rendering issues occurred, causing a weird inconsistencies.
 /** 
  const toggleVisbility = async() => {

    




    const { data: { user } } = await supabase.auth.getUser();
  
    if(user != null){
      setIsVisible(!isVisible);
    }
  }

  toggleVisbility();

  */

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);
        // Fetch the user's bio from the database
        const { data, error } = await supabase
          .from("users")
          .select("bio")
          .eq("email", user.email)
          .single();
        if (data) setBio(data.bio);
      }
    };

    fetchProfile();
  }, []);

  const updateBio = async () => {
    setLoading(true);

    // Logging the values before making the API call
    console.log("Updating bio for email:", email);
    console.log("Bio to update:", bio);

    const { data, error } = await supabase
      .from("users")
      .update({ bio: bio })
      .eq("email", email);
    setLoading(false);
    if (error) {
      console.error("Error updating bio:", error);
      alert("Error updating bio. Check console for details.");
    } else {
      alert("Bio updated successfully");
    }
  };


 
  
  
  


 

  
  

  return (
    <div>
      <Navbar />


     {isVisible && (
      <div id="logoutBtn">
          <div>
            
            <Logout></Logout>
          </div>

        

          
        </div>
     )}
      <h1>User Profile</h1>
      {email ? <p>Email: {email}</p> : <p>Loading...</p>}
      <div>
       
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter your bio..."
        />
        <button onClick={updateBio} disabled={loading}>
          {loading ? "Updating..." : "Update Bio"}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
