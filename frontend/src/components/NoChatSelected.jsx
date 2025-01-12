import React from "react";
import bg from "../assets/bg.jpg";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-full rounded-2xl  flex items-center
             justify-center "
            >
              <img src={bg} alt="" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          Natter
        </p>
        <p className="font-bold text-base mt-3">Web Chatting Application</p>
        <p className="md:text-lg lg:text-xl text-white mt-8 font-semibold">
          Click on any Chat to Continue your natter
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
