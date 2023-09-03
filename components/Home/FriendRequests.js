import Image from "next/image";
import React from "react";

const FriendRequests = () => {
  return (
    <div>
      <div className="flex gap-2 w-[100%]">
        <Image src={"/4.jpg"} width={50} height={50} className="rounded-full" />
        <div>
          <h1 className="font-semibold">Elon Musk</h1>
          <p className="text-gray-500 text-[14px]">11 mutual friends</p>
        </div>
        <p className="ml-auto text-[blue] text-[14px]">1 d</p>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button className="bg-[blue] text-white py-2 px-5 rounded-lg">
          Confirm
        </button>
        <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendRequests;
