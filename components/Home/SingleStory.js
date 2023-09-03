import Image from "next/image";
import React from "react";

const SingleStory = ({ title, img, postImg }) => {
  return (
    <div
      className={`relative w-[112px] shadow-md rounded-[15px] pb-2 bg-cover shrink-0 ${postImg} ml-4 singleStory`}
    >
      <Image
        src={img}
        className=" rounded-full object-cover outline outline-blue m-[14px]"
        width={40}
        height={40}
      />
      <p className="text-white absolute w-[100%] text-center bottom-2">
        {title}
      </p>
    </div>
  );
};

export default SingleStory;
