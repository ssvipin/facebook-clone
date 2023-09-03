import React, { useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Post from "./Post";

const Feed = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatsOnYourMind setCount={setCount} />
      <Post count={count} setCount={setCount} />
    </div>
  );
};

export default Feed;
