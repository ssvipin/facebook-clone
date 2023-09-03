import React from "react";
import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
function MobileLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full bg-[#486b69] h-full p-40 flex items-center">
      <div className="border-2 border-white border-solid w-full flex flex-col items-center justify-center p-20">
        <h1 className="text-white text-8xl">Facebook</h1>
        <h1 className="text-white mt-8">
          Seamless Social Sharing, it's that easy!
        </h1>
        <div className="flex flex-col mt-8">
          <div className="relative">
            <EmailOutlinedIcon className="absolute text-3xl opacity-50 h-full left-1" />
            <div className="h-10 absolute left-10 w-0.5 bg-black opacity-50"></div>
            <input
              type="text"
              value={emailOrPhone}
              className="h-10 w-96 rounded pl-12 focus:outline-none"
              placeholder="Email or Phone"
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
          </div>
          <div className="relative">
            <LockPersonOutlinedIcon className="absolute text-3xl top-4 opacity-50	h-10 left-1" />
            <div className="h-10 absolute left-10 w-0.5 bg-black top-4 opacity-50"></div>
            <input
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              className="h-10 w-96 pl-12 rounded mt-4 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password &&
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
          <button className="bg-white mt-12 h-10 rounded">LOGIN</button>
        </div>
        <div className="flex mt-8  items-center h-12">
          <div className="w-32  border-t-2 border-white-500"></div>
          <p className="mx-7 text-white">or you can</p>
          <div className="w-32  border-t-2 border-white-500"></div>
        </div>
        <button className="bg-white mt-12 h-10 w-96 rounded">
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default MobileLogin;
