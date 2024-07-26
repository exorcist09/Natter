import React from "react";
import { useState } from "react";
import groupImage from "/home/grey-pavilion/natter/natter_client/src/assets/chat.jpg";
import TextField from "@mui/material/TextField";
import SelectedMember from "../components/SelectedMember";

const Group = () => {
  const [newGroup, setNewGroup] = useState(false);
  const [groupMember, setGroupMember] = useState(new Set());
  const handleRemoveMember=()=>{
    groupMember.delete(item);
    setGroupMember(groupMember);
  }
  const handleNewGroup = () => {};

  const handleSearch=()=>{

  }
  return (
    <>
      <div className="w-full h-full">
        {!newGroup && (
          <>
            <div className="space-x-10 bg-gray-700 text-white pt-5 px-5 pb-5 mr-5 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold">Add Group participants</p>
            </div>
            <div className=" flex items-center justify-center mr-5 mt-5 ">
              <img
                className="lg:w-[50%]
                md:w-[70%] md:h-[70%] lg:h-[50%]
                mix-blend-multiply bg-transparent rounded-full"
                src={groupImage}
                alt=""
              />
            </div>
            <div className=" relative mt-10  ml-5">
              <div className="flex space-x-2 flex-wrap space-y-1">
                {groupMember.size > 0 &&
                  Array.from(groupMember).map((item) => (
                    <SelectedMember
                      handleRemoveMember={() => handleRemoveMember(item)}
                      member={item}
                    />
                  ))}{" "}
              </div>

              <TextField
                id="filled-basic"
                label="Add members"
                variant="filled"
                className=" rounded-xl w-[90%] mx-auto"
                onChange={(e)=>{
                    handleSearch(e.target.value)
                }}
                
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Group;
