import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import supabase from "../Supabase/SupabaseClient";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ResetPassword() {

    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordReset = async () => {
        const token = searchParams.get('access_token'); // Extract the token from the URL

        if (!token) {
            setMessage('Error: No reset token provided.');
            return;
        }

        // Note: Supabase's client-side reset password functionality might not support email along with the token.
        const { error } = await supabase.auth.api.updateUser(token, {
            password: newPassword
        });

        if (error) {
            setMessage('Error resetting password: ' + error.message);
        } else {
            setMessage('Password reset successfully. Please login with your new password.');
        }
    };

    return (
        <div>
            <Navbar />
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Enter new password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handlePasswordReset}>Reset Password</button>
            {message && <p>{message}</p>}
            <Footer />
        </div>
    );
}

export default ResetPassword;
