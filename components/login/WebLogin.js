// import Image from "next/image";
import React from "react";
import Signup from "./Signup";
// import { useRouter } from "next/router";
const Login = ({ loginObj, setLoginObj, login }) => {
  // const [loginObj, setLoginObj] = useState({});
  // const router = useRouter();
  // const login = async () => {
  //   const res = await fetch("/api/auth/login", {
  //     method: "POST",
  //     body: JSON.stringify(loginObj),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   localStorage.setItem("token", data?.token);
  //   router.push("/");
  // };
  return (
    <div className="h-full w-full">
      <div className="w-full bg-[#486b69] flex justify-between p-3 h-24">
        <h1 className="text-white text-4xl m-3"> Gossips</h1>
        <div className="flex items-center">
          <div className="h-20">
            <h1 className="text-white">Email or Phone</h1>
            <input
              className="mt-1"
              type="text"
              value={loginObj?.email}
              onChange={(e) =>
                setLoginObj({ ...loginObj, email: e?.target?.value })
              }
            />
          </div>
          <div className="ml-5 h-20">
            <h1 className="text-white">Password</h1>
            <input
              className="mt-1"
              type="password"
              value={loginObj?.password}
              onChange={(e) =>
                setLoginObj({ ...loginObj, password: e.target.value })
              }
            />
            <h1 className="text-white mt-1">Forgot password?</h1>
          </div>
          <button
            className="bg-white mr-5 px-4 ml-3 py-0 text-[#486b69]"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
      <Signup isMobile={false} />
    </div>
  );
};

export default Login;
