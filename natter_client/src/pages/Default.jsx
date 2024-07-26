import React from 'react';
import bgImage from "../assets/bg.jpg";

const Default = () => {
  return (
    <>
<div className="w-full  pb-10 h-full flex flex-col items-center justify-center">
   <img src={bgImage} alt="bg_image" />
    <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">Natter</p>
        <p className="font-bold text-base mt-3">Web-Chatting Application</p>
        <p className="md:text-lg lg:text-xl text-white mt-8 font-semibold">Click on any chat to carry on your Natter</p>
    </div>
</div>
    </>
  )
}

export default Default