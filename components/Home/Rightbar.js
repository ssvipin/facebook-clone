import React from "react";
import Contact from "./Contact";
import FriendRequests from "./FriendRequests";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Search } from "@mui/icons-material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const Rightbar = () => {
  return (
    <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">
            Friend requests
          </h1>
          <p className="text-[blue]">See All</p>
        </div>
        <div className="mt-4">
          <FriendRequests />
          <div className="h-[2px] bg-gray-300 my-5"></div>
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">Contact</h1>
            <div className="flex gap-4">
              <VideoCallOutlinedIcon />
              <Search />
              <MoreHorizOutlinedIcon />
            </div>
          </div>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <div className="bg-gray-300 h-[44px] w-[44px] grid place-items-center text-[26px] rounded-full fixed right-0 bottom-0 mr-8 mb-8">
            <ModeEditOutlineOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
