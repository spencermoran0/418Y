"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const [password,setPassword] = useState("");

    const router = useRouter();

    const supabase = createClientComponentClient();

    const resetPassword = async() => {

      await supabase.auth.updateUser({ password: password })

        router.push("/login");



    }
  return (
    <section className={"h-screen bg-neutral-100 flex justify-center items-center"}>
    <div id="form"  className={
          "h-[350px] w-[350px] flex flex-col items-center justify-center bg-[rgb(225,253,243)] rounded-[20px] border-2 border-solid border-[black]"
        }>
      <input  id  = "passwordInput"type="Password" placeholder="New Password"  onChange={(e) => setPassword(e.target.value)}  value={password}/>
      <div id = "btn" className={
            "w-[150px] h-[50px] flex justify-center items-center border bg-[rgb(168,238,238)] mt-5 rounded-[20px] border-solid border-[black]"
          } onClick={resetPassword}><a>submit</a></div>
    </div>
  </section>
  )
}