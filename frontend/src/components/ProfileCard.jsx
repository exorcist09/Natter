import React from "react";
import {Link} from "react-router-dom";

const ProfileCard = ({ title }) => {
  return (
    <>
      <div class="max-w-lg w-full rounded-lg shadow-lg p-4 mt-5  font-bold   bg-gray-700">
        <Link to={`/${title.toLowerCase()}`}  className="font-bold text-xl text-white tracking-wide">{title}</Link>
        
      </div>
    </>
  );
};

export default ProfileCard;
