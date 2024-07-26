import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import Left from "./Left";
import Right from "./Right";
import Default from "./Default";
// import "/home/grey-pavilion/natter/src/pages/Homepage.css";

const Home = () => {
  // to show chat or deafult page on right side
  const [currentChat, setCurrentChat] = useState(null);

  const handleClickonChatCard = () => {
    setCurrentChat(true);
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className=" mt-8 mx-auto w-[90vw] h-[85vh]">
        <div>
          <SubNav />
        </div>
        {/* both */}
        <div className="flex mx-auto bg-gray-400 rounded-xl h-[80vh] ">
          {/* left */}

          <div className="left rounded-xl text-white w-[30%]">
            <Left handle={handleClickonChatCard} />
          </div>

          {/* default Right */}
          <div className="right rounded-xl  h-full bg-gray-600 text-white w-[70%]">
            {!currentChat && <Default />}
            {currentChat && <Right />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
