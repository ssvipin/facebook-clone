import React from "react";
import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Signup from "./Signup";
function MobileLogin({ loginObj, setLoginObj, login }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  return isSignup ? (
    <Signup isMobile={true} setIsSignup={setIsSignup} />
  ) : (
    <div className="w-full bg-[#486b69] h-full p-[10vw] flex items-center">
      <div className="border-2 border-white border-solid w-[100%] flex flex-col items-center justify-center p-[10vw]">
        <h1 className="text-white text-[10vw]">Facebook</h1>
        <h1 className="text-white mt-8">
          Seamless Social Sharing, it's that easy!
        </h1>
        <div className="flex flex-col mt-8 items-center">
          <div className="relative">
            <EmailOutlinedIcon className="absolute text-3xl opacity-50 h-full left-1" />
            <div className="h-10 absolute left-10 w-0.5 bg-black opacity-50"></div>
            <input
              type="text"
              value={loginObj?.email}
              className="h-10 w-[60vw] rounded pl-12 focus:outline-none"
              placeholder="Email or Phone"
              onChange={(e) =>
                setLoginObj({ ...loginObj, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <LockPersonOutlinedIcon className="absolute text-3xl top-4 opacity-50	h-10 left-1" />
            <div className="h-10 absolute left-10 w-0.5 bg-black top-4 opacity-50"></div>
            <input
              type={`${showPassword ? "text" : "password"}`}
              value={loginObj?.password}
              className="h-10 w-[60vw] pl-12 rounded mt-4 focus:outline-none"
              placeholder="Password"
              onChange={(e) =>
                setLoginObj({ ...loginObj, password: e.target.value })
              }
            />
            {loginObj?.password &&
              (showPassword ? (
                <VisibilityOutlinedIcon
                  className="absolute h-10 right-2 top-4 opacity-50"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="absolute h-10 right-2 top-4 opacity-50"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ))}
          </div>
          <button className="bg-white mt-12 h-10 w-[60vw] rounded" onClick={login}>
            LOGIN
          </button>
        </div>
        <div className="flex mt-8  items-center h-12">
          {/* <div className="w-[25vw]  border-t-2 border-white-500"></div> */}
          <p className="mx-7 text-white">or you can</p>
          {/* <div className="w-[25vw]  border-t-2 border-white-500"></div> */}
        </div>
        <button
          className="bg-white mt-12 h-10 w-[60vw] rounded"
          onClick={() => setIsSignup((prevState) => !prevState)}
        >
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default MobileLogin;
