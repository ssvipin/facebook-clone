import React from "react";
import Navbar from "../components/Home/Navbar";
import LeftSidebar from "../components/Home/LeftSidebar";
import Rightbar from "../components/Home/Rightbar";
import Feed from "../components/Home/Feed";
import { deleteDoc, doc, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Index = () => {
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
