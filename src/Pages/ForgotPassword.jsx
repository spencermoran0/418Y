import React, { useState } from 'react';
import supabase from "../Supabase/SupabaseClient";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false); // New state to track if reset email sent

  const handleReset = async () => {
    console.log("Email to reset:", email);


    
    let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/reset-password' // Replace with your reset password page URL
    });
      

    if (error) {
      console.error('Error resetting password:', error.message);
      setResetSent(false); // Reset email not sent due to error
    } else {
      console.log('Password reset email sent');
      setResetSent(true); // Reset email sent successfully
    }
  };

  return (
    <div>
      <Navbar />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={resetSent} // Disable input if reset email sent
      />
      {!resetSent && (
        <button onClick={handleReset}>Reset Password</button>
      )}
      {resetSent && (
        <p>Check your email for the reset link.</p> // Display message if reset email sent
      )}
      <Footer />
    </div>
  );
}

export default ForgotPassword;
