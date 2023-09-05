import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import LeftSidebar from "../components/Home/LeftSidebar";
import Rightbar from "../components/Home/Rightbar";
import Feed from "../components/Home/Feed";
import { useRouter } from "next/router";
const Index = () => {
  let token = "";
  const router = useRouter();
  if (typeof window !== "undefined") {
    token = localStorage?.getItem("token") ?? "";
  }
  useEffect(() => {
    if (token?.length <= 0) {
      router.push("/auth");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <Rightbar />
      <Feed />
    </div>
  );
};
export default Index;
