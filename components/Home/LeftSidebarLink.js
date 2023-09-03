import Image from "next/image";
import React from "react";

const LeftSidebarLink = ({ image, text, width, height, bg }) => {
  return (
    <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
      <div
        className={`${
          bg
            ? "flex items-center justify-center w-[40px] h-[40px] bg-gray-200 rounded-full"
            : ""
        }`}
      >
        <Image
          src={image}
          width={width}
          height={height}
          alt="icon"
          className="rounded-full"
        />
      </div>
      <h1 className="text-[16px]">{text}</h1>
    </div>
  );
};

export default LeftSidebarLink;
