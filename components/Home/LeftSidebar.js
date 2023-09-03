import React from "react";
import LeftSidebarLink from "./LeftSidebarLink";
const LeftSidebar = () => {
  const sideMenuItems = [
    { image: "/4.jpg", text: "Vipin Kumar", key: 1, width: 36, height: 36 },
    { image: "/9.png", text: "Friends", key: 2, width: 36, height: 36 },
    { image: "/6.png", text: "Groups", key: 3, width: 36, height: 36 },
    {
      image: "/12.png",
      text: "Market place",
      key: 4,
      width: 36,
      height: 36,
    },
    { image: "/8.png", text: "Saved", key: 5, width: 36, height: 36 },
    { image: "/13.png", text: "Pages", key: 6, width: 36, height: 36 },
    { image: "/14.png", text: "Events", key: 7, width: 36, height: 36 },
    { image: "/7.png", text: "Most Recent", key: 8, width: 36, height: 36 },
    {
      image: "/11.png",
      text: "See more",
      key: 9,
      width: 15,
      height: 15,
      bg: true,
    },
  ];
  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        {sideMenuItems?.map((item) => {
          return (
            <LeftSidebarLink
              image={item.image}
              text={item.text}
              key={item.key}
              width={item.width}
              height={item.height}
              bg={item?.bg ?? false}
            />
          );
        })}
        <p className="text=[14px] text-gray-500 mt-2">
          Privacy . Terms . Advertising . Ad choices .<br /> Cookies . VIP
          Copyright 2023
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
