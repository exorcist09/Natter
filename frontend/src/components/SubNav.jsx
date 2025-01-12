import React, { useState } from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex w-50 mx-auto gap-10 pb-2">
          <NavLink to="/">
            <BsFillChatSquareTextFill className="mt-1" />
          </NavLink>
          <NavLink to="/settings">
            <RiUserSettingsFill style={{ fontSize: "1.4rem" }} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SubNav;
