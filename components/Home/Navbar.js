import React from "react";
import Image from "next/image";
import { Search, Home } from "@mui/icons-material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Navbar = () => {
  return (
    <div className="py-2 px-4 bg-white shadow-md flex justify-between items-center top-0 sticky z-50">
      <div className="flex items-center gap-2">
        <Image src={"/5.jpg"} height={50} width={50} />
        <div className="relative hidden sm:block">
          <Search className="absolute text-[20px] top-[10px] left-[10px] text-gray-500" />
          <input
            className="bg-[#f0f2f5] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500"
            type="text"
            placeholder="Search Gossips"
          />
        </div>
      </div>
      <div className="hidden lg:flex item-center gap-[100px] text-[30px] text-gray-500">
        <div className="relative">
          <Home className="text-[blue] cursor-pointer" />
          <div className="absolute bg-[blue] -left-[40px] h-[3px] w-[110px] -bottom-[16px]"></div>
        </div>
        <div className="relative">
          <PeopleOutlinedIcon className="text-primary cursor-pointer" />
          {/* <div className="absolute bg-[blue] -left-[40px] h-[3px] w-[110px] -bottom-[16px]"></div> */}
        </div>
        <div className="relative">
          <OndemandVideoOutlinedIcon className="text-primary cursor-pointer" />
          {/* <div className="absolute bg-[blue] -left-[40px] h-[3px] w-[110px] -bottom-[16px]"></div> */}
        </div>
        <div className="relative">
          <AddBusinessOutlinedIcon className="text-primary cursor-pointer" />
          {/* <div className="absolute bg-[blue] -left-[40px] h-[3px] w-[110px] -bottom-[16px]"></div> */}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="icon-wrapper text-[28px]">
          <AppsOutlinedIcon className="cursor-pointer" />
        </div>
        <div className="icon-wrapper text-[28px]">
          <ChatOutlinedIcon className="cursor-pointer" />
        </div>
        <div className="icon-wrapper text-[28px]">
          <NotificationsIcon className="cursor-pointer" />
        </div>
        <div className="icon-wrapper text-[28px]">
          <Image
            src={"/4.jpg"}
            height={30}
            width={30}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
