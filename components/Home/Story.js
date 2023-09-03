import Image from "next/image";
import React from "react";
import SingleStory from "./SingleStory";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const Story = () => {
  const singleStoryData = [
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
    {
      title: "Vipin Kumar",
      img: "/1.png",
      postImg: "bg-[url(/1.png)]",
    },
  ];
  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="grid grid-cols-2 bg-white border-b border-gray-300">
        <div className="relative">
          <div className="mx-auto w-fit flex gap-2 items-center text-[blue] py-2">
            <AutoStoriesOutlinedIcon className="text-[blue]" />
            <p className="font-bold">Stories</p>
          </div>
          <div className="bg-[blue] h-[3px]"></div>
        </div>
        <div>
          <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2">
            <MovieOutlinedIcon />
            <p className="font-bold cursor-pointer">Reels</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px mt-5 pb-5 overflow-x-scroll scrollbarHide">
        <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
          <Image
            src={"/1.png"}
            height={151}
            width={112}
            className="rounded-t-[15px] object-cover"
            alt="dp"
          />
          <div>
            <div
              className="bg-[blue] w-[35px] h-[35px] rounded-full grid place-items-center text-[24px]\
            text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white
            "
            >
              <AddOutlinedIcon />
            </div>
            <p className="text-center mt-2 font-medium">Create Story</p>
          </div>
        </div>
        {singleStoryData?.map((item, index) => {
          return (
            <SingleStory
              key={index}
              title={item?.title}
              img={item?.img}
              postImg={item?.postImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Story;
