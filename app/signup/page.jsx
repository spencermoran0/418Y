"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";


// sign up function

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [signUpError, setSignUpError] = useState("");

  const SignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (!error) {
      router.push("/login");
    } else {
      setSignUpError("Invalid email address");
    }

    router.refresh();
  };

  return (
    <section className=" h-screen w-full flex justify-center items-center m-0">
      <div>
        <div className="flex flex-col h-[450px] w-[450px] justify-center items-center border bg-[rgb(210,237,239)] rounded-[30px] border-solid border-[black]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" h-10 w-[250px] mb-[50px] bottom-[5px]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className=" h-10 w-[250px] mb-[50px] bottom-[5px]"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div className=" h-[50px] w-[250px] border bg-[rgb(171,171,245)] text-center rounded-[5px] border-solid border-[black]">
            <a className="relative top-[15px]" onClick={SignUp}>
              Sign up
            </a>
          </div>
          <p className="mt-[20px]">{signUpError}</p>
        </div>
      </div>
    </section>
  );
}