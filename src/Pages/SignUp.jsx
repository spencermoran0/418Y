import React from 'react'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../Supabase/SupabaseClient";

import '../CssStyle/SignUp.css';

//This file is created by Akhil Nair

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate
 // auth.signup takes an email and a password.
  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (!error) {
      navigate('/login'); // Replace history.push with navigate
    } else {
      setSignUpError('Signup failed: ' + error.message);
    }
  };


  return (
    <div>
      <Navbar />
    <section id = "signupSection" className="h-screen w-full flex justify-center items-center m-0">
      <div>
        <div id = "signupDiv" className="flex flex-col h-[450px] w-[450px] justify-center items-center border bg-[rgb(210,237,239)] rounded-[30px] border-solid border-[black]">
          <input id = "emailInput"
            type="email"
            name="email"
            placeholder="Email"
            className="h-10 w-[250px] mb-[50px] bottom-[5px]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input id = "passwordInput"
            type="password"
            name="password"
            placeholder="Password"
            className="h-10 w-[250px] mb-[50px] bottom-[5px]"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div id = "signupBtn" className="h-[50px] w-[250px] border bg-[rgb(171,171,245)] text-center rounded-[5px] border-solid border-[black] cursor-pointer">
            <a  onClick={handleSignUp}> Sign up</a>
             
         
          </div>
          {signUpError && <p className="mt-[20px] text-red-500">{signUpError}</p>}
        </div>
      </div>
    </section>

    <Footer />
    </div>
  );
}

export default SignUp;