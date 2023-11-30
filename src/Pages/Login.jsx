import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



import supabase from "../Supabase/SupabaseClient";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();


  const handleSignIn = async () => {

    console.log(supabase); // Add this line to log the Supabase client
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setLoginError('Authentication Failed: ' + error.message);
    } else {
      navigate('/user-profile'); // Update this line to navigate to the user profile page
    }
  };

  return (
    <div>
      <Navbar />
      <section className="h-screen w-full">
        <div className="mt-[5%] flex h-4/5 rounded-[20px]">
          <div className="h-full w-1/2 flex justify-center items-center">
            <h1>Unlock the Magic of Cinema, One Review at a Time</h1>
          </div>

          <div className="h-full w-1/2 flex justify-center items-center">
            <div className="bg-[rgb(207,238,238)] flex flex-col justify-center items-center h-[500px] w-[500px] rounded-[50px]">
              <input
                type="email"
                name="email"
                className="mb-[10px] h-[30px] w-[300px]"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                name="password"
                className="mb-[10px] h-[30px] w-[300px]"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button
                className="bg-[rgb(194,230,245)] h-[50px] w-[300px] mt-[20px] border-[4px] border-[solid] border-[black] rounded-[20px] flex justify-center items-center cursor-pointer"
                onClick={handleSignIn}
              >
                Sign in
              </button>

              <div
                className="bg-[rgb(194,230,245)] h-[50px] w-[300px] mt-[20px] border-[4px] border-[solid] border-[black] rounded-[20px] flex justify-center items-center"
              >
                <a href="/signup">Sign up</a>
              </div>

              {loginError && <p className="text-red-500">{loginError}</p>}

              <a href="/forgot-password">Forgot password?</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
