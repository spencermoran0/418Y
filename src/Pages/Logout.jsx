import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//This file is created by Akhil Nair

import supabase from "../Supabase/SupabaseClient";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// Logout component
export default function Logout() {
  const router = useNavigate();
  

  const [logouterror, setlogouterror] = useState("");

  const handleSignOut = async () => {
   const{error} =  await supabase.auth.signOut();
    
    // redirect back to the login page after the user sucessfully signs out.
    if(!error){
      router('/login');
    } else {
       setlogouterror("Can't logout");

    }

   

}




    return (

        <div>
       
       
        <section className=" h-screen w-full ">
          <div className={
              " inline-block px-4 py-2 text-white bg-green-500 border border-green-500 rounded hover:bg-green-600 hover:border-green-600"
            }
            onClick = {handleSignOut}
          >
            <a>Logout</a>
          </div>
    
          <p >{logouterror}</p>
        </section>
    
         

         
        </div>
      );
  };





