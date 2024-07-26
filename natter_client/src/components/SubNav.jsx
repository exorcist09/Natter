import React, { useState } from "react";

// react-icon
import { RiGroup2Fill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

import { IoNotificationsSharp } from "react-icons/io5";

import { BsFillChatSquareTextFill } from "react-icons/bs";

import { RiUserSettingsFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const SubNav = () => {
  // for going to group section
  const [isGroup, setIsGroup] = useState(false);
  const handleCreateGroup = () => {
    setIsGroup(true);
  };
  return (
    <>
      <div className="bg-white flex justify-between items-center">
        <div className="flex w-50 mx-auto gap-10 pb-2">
          <NavLink to="/">
            <BsFillChatSquareTextFill />
          </NavLink>
          <NavLink to="/groupchat">
            <div onClick={() => handleCreateGroup()}>
              <RiGroup2Fill style={{ fontSize: "1.4rem" }} />
            </div>
          </NavLink>
          <NavLink to="/phone">
            <MdContactPhone style={{ fontSize: "1.4rem" }} />
          </NavLink>
          <NavLink to="/notification">
            <IoNotificationsSharp style={{ fontSize: "1.4rem" }} />
          </NavLink>
          <NavLink to="/profile">
            <RiUserSettingsFill style={{ fontSize: "1.4rem" }} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SubNav;
