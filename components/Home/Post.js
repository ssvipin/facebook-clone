import React, { useEffect, useState } from "react";
import {
  deleteDoc,
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClearIcon from "@mui/icons-material/Clear";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
const Post = ({ count, setCount }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (data) => {
        const cityList = data.docs.map((doc) => doc.data());
        setPosts(cityList);
      }
    );
  }, [count]);
  return (
    posts?.length > 0 &&
    posts?.map((item) => {
      return (
        <div className="py-4 bg-white rounded-[17px] shadow-md mt-5">
          <div className="px-4 flex justify-between items-center">
            <div className="flex gap-2">
              <Image
                className="object-cover rounded-full"
                height={44}
                width={44}
                src={"/4.jpg"}
                alt="dp"
              />
              <div>
                <h1 className="text-[16px] font-semibold">{item?.username}</h1>
                <div className="text-gray-500 flex items-center gap-2">
                  <p>1d</p>
                  <p>.</p>
                  <PublicIcon />
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-[26px] flex gap-4">
              <MoreHorizIcon className="cursor-pointer" />
              {true && (
                <ClearIcon
                  className="cursor-pointer"
                  onClick={() => {
                    deleteDoc(doc(db, "posts", item.id));
                    setCount((prevState) => prevState + 1);
                  }}
                />
              )}
            </div>
          </div>
          <p className="px-4 mt-[15px] text-gray-800 font-normal">
            {item?.text}
          </p>
          {item?.userImg && (
            <div className="mt-[15px]">
              <Image
                src={item?.userImg}
                height={100}
                width={100}
                className="w-[100%]"
              />
            </div>
          )}
          <div className=" mx-4 h-[1px] bg-gray-300 mt-[15px]"></div>
          <div className="flex mt-[7px] text-gray-500">
            <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
              <ThumbUpAltOutlinedIcon className="text-[26px]" />
              <p className="font-medium">Like</p>
            </div>
            <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
              <ModeCommentOutlinedIcon className="text-[20px] translate-y-[4px]" />
              <p className="font-medium">comment</p>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Post;
