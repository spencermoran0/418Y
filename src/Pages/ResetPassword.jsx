import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import supabase from "../Supabase/SupabaseClient";
import "../CssStyle/ResetPassword.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
//This file is created by Akhil Nair

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async () => {
    const token = searchParams.get("access_token"); // Extract the token from the URL

    if (!token) {
      setMessage("Error: No reset token provided.");
      return;
    }

    // Note: Supabase's client-side reset password functionality might not support email along with the token.
    const { error } = await supabase.auth.api.updateUser(token, {
      password: newPassword,
    });

    if (error) {
      setMessage("Error resetting password: " + error.message);
    } else {
      setMessage(
        "Password reset successfully. Please login with your new password."
      );
    }
  };

  return (
    <div>
      <Navbar />
      <section
        id="yourSectionId"
        className={"h-screen bg-neutral-100 flex justify-center items-center"}
      >
        <div id="form">
          <input
            id="passwordInput"
            type="password"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          <div id="btn" onClick={handlePasswordReset}>
            <a>Submit</a>
          </div>
        </div>
      </section>
      
      {message && <p>{message}</p>}
      <Footer />
    </div>
  );
}

export default ResetPassword;
