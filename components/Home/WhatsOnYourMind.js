import { Search } from "@mui/icons-material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "./Button";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import VideocamIcon from "@mui/icons-material/Videocam";
import FilterIcon from "@mui/icons-material/Filter";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const WhatsOnYourMind = ({ setCount }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [input, setInput] = useState("");
  const fpicker = useRef(null);

  const addImagetoPost = (e) => {
    const reader = new FileReader();
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: Date.now(),
      username: "vipin Kumar",
      userImg: selectedFile ? selectedFile : "",
      text: input,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }
    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setCount((prevState) => prevState + 1);
  };
  return (
    <div
      className={`px-4 py-6 bg-white rounded-[17px] shadow-md mt-5 ${
        loading && "opacity-50"
      }`}
    >
      <div className="flex gap-4 border-b border-gray-300 pb-4">
        <Image
          src={"/4.jpg"}
          width={44}
          height={44}
          className="object-cover rounded-full"
        />
        <input
          className="outline-none border-none w-[100%] text-[18px] placeholder:text-gray-600"
          type="text"
          placeholder="What's on your mind?"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {selectedFile && (
        <div className="relative">
          <Image src={selectedFile} alt="pic" width={100} height={100} />
          <div
            className="bg-gray-300 text-gray-500 absolute top-0 right-0 m-[10px] text-[18px] h-[30px] w-[30px] rounded-full cursor-pointer grid place-items-center"
            onClick={() => {
              setSelectedFile(null);
              fpicker.current.value = "";
            }}
          >
            <Search />
          </div>
        </div>
      )}
      <div className="flex justify-between px-4 pt-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <VideocamIcon className="text-[#e42645] text=[30px]" />
          <p className="text-gray-500 font-medium">Live Video</p>
        </div>
        <label htmlFor="filePicker">
          <div className="flex items-center gap-2 cursor-pointer">
            <FilterIcon className="text-[#41b35d] text-[30px]" />
            <p className="text-gray-500 font-medium">Photo/Video</p>
          </div>
          <input
            type="file"
            name="filePicker"
            id="filePicker"
            accept="image/*"
            onChange={addImagetoPost}
            ref={fpicker}
            hidden
          />
        </label>
        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <EmojiEmotionsIcon className="text-[#ecbf55] text-[30px]" />
          <p className="text-gray-500 font-medium">Feeling/activity</p>
        </div>
      </div>
      <Button input={input} selectedFile={selectedFile} onClick={sendPost} />
    </div>
  );
};

export default WhatsOnYourMind;
