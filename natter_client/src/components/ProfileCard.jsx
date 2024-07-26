import React from "react";

const ProfileCard = ({title}) => {
  return (
    <>
      <div class="max-w-lg w-full rounded-lg shadow-lg p-4 mt-5 p-9 font-bold   bg-gray-700">
        <h3 class="font-bold text-xl text-white tracking-wide">
          {title}
        </h3>
      </div>
    </>
  );
};

export default ProfileCard;
