import React from "react";
import { useNavigate } from "react-router-dom";
import SubNav from "../components/SubNav";
import Navbar from "../components/Navbar";
import LeftProfile from "./LeftProfile";


const Profile = () => {
  return (
    <>
      <>
        <div className="navbar">
          <Navbar />
        </div>

        <div className=" mt-8 mx-auto w-[90vw] h-[85vh]">
          <div>
            <SubNav />
          </div>
          <div className="flex mx-auto bg-gray-400 rounded-xl h-[80vh] ">
            {/* left */}
            <div className="h-[80vh] rounded-xl text-white w-[30%]">
            <LeftProfile/>
            </div>
            {/* default Right */}
            <div className="right rounded-xl  h-full bg-gray-600 text-white w-[70%]"></div>
          </div>
        </div>
      </>
    </>
  );
};

export default Profile;
