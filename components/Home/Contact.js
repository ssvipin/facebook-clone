import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center">
        <Image src="/4.jpg" width={40} height={40} className="rounded-full"/>
        <h1>Vipin Kumar</h1>
      </div>
    </div>
  );
};

export default Contact;
