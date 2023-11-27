"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const supabase = createClientComponentClient();
  const sentLink = async () => {
   
   const {error} = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/forgot-password",
    });
     console.log(error);
    

    router.push("/login");
  };

  return (
    <section
      className={"h-screen bg-neutral-100 flex justify-center items-center"}
    >
      <div
        id="form"
        className={
          "h-[350px] w-[350px] flex flex-col items-center justify-center bg-[rgb(225,253,243)] rounded-[20px] border-2 border-solid border-[black]"
        }
      >
        <input
          id="emailInput"
          type="email"
          placeholder="Email"
          className={"w-[200px] h-10"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div
          id="btn"
          className={
            "w-[150px] h-[50px] flex justify-center items-center border bg-[rgb(168,238,238)] mt-5 rounded-[20px] border-solid border-[black]"
          }
          onClick={sentLink}
        >
          <a>submit</a>
        </div>
      </div>
    </section>
  );
}