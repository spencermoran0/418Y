"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [loginError, setLoginError] = useState("");

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    router.refresh();

    if (error) {
      setLoginError("Authentication Failed");
    } else {
      router.push("/homepage");
    }
  };

  

  return (
    <>
      <section className=" h-screen w-full ">
        <div className="mt-[5%] flex h-4/5 rounded-[20px]mt-[5%] ">
          <div className={" h-full w-1/2 flex justify-center items-center"}>
            <h1>Unlock the Magic of Cinema, One Review at a Time</h1>
          </div>

          <div className="h-full w-1/2 flex justify-center items-center ">
            <div
              className={
                " bg-[rgb(207,_238,_238)] flex flex-col justify-center items-center h-[500px] w-[500px] rounded-[50px]"
              }
            >
              <input
                name="email"
                className="mb-[10px] h-[30px] w-[300px] block
                "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-[10px] h-[30px] w-[300px]"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <div
                className={
                  " bg-[rgb(194,_230,_245)] h-[50px] w-[300px] mt-[20px] border-[4px] border-[solid] border-[black] rounded-[20px] flex justify-center items-center"
                }
                onClick={handleSignIn}
              >
                <a>Sign in</a>
              </div>

              <div
                className={
                  " bg-[rgb(194,_230,_245)] h-[50px] w-[300px] mt-[20px] border-[4px] border-[solid] border-[black] rounded-[20px] flex justify-center items-center"
                }
              >
                <a href="/signup">Sign up</a>
              </div>

              <p>{loginError}</p>

              <a href="/user_email">Forgot password?</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
