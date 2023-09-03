import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
const Signup = () => {
  const [signUpObj, setSignUpObj] = useState({});
  const router = useRouter();
  const signUp = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify(signUpObj),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = res.json();
    localStorage.setItem("token", data.token);
    router.push("/");
  };
  return (
    <div className="w-full flex">
      <div className="w-2/4 flex justify-center items-center">
        <Image src="/1.png" width={500} height={700} />
      </div>
      <div className="w-2/4 flex flex-col p-5">
        <div className="flex flex-col">
          <h1 className="text-4xl">Create a New Account</h1>
          <h1 className="mt-2">It's free and always will be.</h1>
        </div>
        <div className="mt-8 flex w-full">
          <input
            type="text"
            placeholder="First name"
            className="border-2 h-10 w-2/4 pl-2 rounded"
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, f_name: e.target.value })
            }
            value={signUpObj?.f_name}
          />
          <input
            type="text"
            placeholder="Last name"
            className="border-2 h-10 ml-10 w-2/4 pl-2 rounded"
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, l_name: e.target.value })
            }
            value={signUpObj?.l_name}
          />
        </div>
        <div className="mt-4 w-full">
          <input
            type="text"
            placeholder="Mobile No. or Email"
            className="border-2 h-10 w-full pl-2 rounded"
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, email: e.target.value })
            }
            value={signUpObj?.email}
          />
        </div>
        <div className="mt-4 w-full">
          <input
            type="password"
            placeholder="New Password"
            className="border-2 h-10 w-full pl-2 rounded"
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, password: e.target.value })
            }
            value={signUpObj?.value}
          />
        </div>
        <div className="mt-4 w-full">
          <h1>Birthday</h1>
          <input
            type="date"
            className="border-2 mt-2"
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, DOB: e.target.value })
            }
            value={signUpObj?.DOB}
          />
        </div>
        <div className="mt-4 w-full">
          <input
            type="radio"
            checked={signUpObj?.gender === "male"}
            onChange={(e) => setSignUpObj({ ...signUpObj, gender: "male" })}
          />{" "}
          Male
          <input
            type="radio"
            className="ml-4"
            checked={signUpObj?.gender === "female"}
            onChange={(e) => setSignUpObj({ ...signUpObj, gender: "female" })}
          />{" "}
          Female
        </div>
        <div className="mt-4">
          <p className="opacity-50">
            By clicking Sign Up, you agree to our Terms,Data Policy and Cookies
            Policy.You may receive SMS Notifications from us and can opt out any
            time.
          </p>
        </div>
        <button
          className="bg-[#486b69] text-white mt-12 h-10 w-full rounded border-2"
          onClick={signUp}
        >
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default Signup;
