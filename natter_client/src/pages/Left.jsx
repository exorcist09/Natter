import React, { useState } from "react";
import ChatCard from "/home/grey-pavilion/natter/natter_client/src/components/ChatCard.jsx";
import Group from "./Group";

const card = [1, 1, 1, 1, 1];

const Left = ({ handle }) => {
  const [Querys, setQuerys] = useState(null);
  const handleSearch = () => {};

  // to show profile
  const [isProfile, setIsProfile] = useState(false);

  // to handle group
  const [isGroup, setIsGroup] = useState(false);

 

  const handleProfile =()=>{
    setIsProfile(true)
  }

  return (
    <>
      <div className="mx-auto mt-6 ml-4">
        {!isGroup && <Group/>}
        {!isProfile && isGroup &&  (
          <>
            <div className="rounded-3xl w-[90%] mx-auto bg-white  text-gray-500">
              <input
                className="w-full h-10 rounded-3xl pl-4 text-start "
                type="text"
                placeholder="  Search or start new Chat"
                onChange={(e) => {
                  setQuerys(e.target.value);
                  handleSearch(e.target.value);
                }}
                value={Querys}
              />
            </div>

            <div className="mt-5 ml-2 mr-4 flex flex-col ">
              <h1 className="font-bold text-xl">All Chats</h1>
              <div className="flex flex-col flex-grow-0 overflow-y-scroll mt-4 mr-4 ">
                {Querys &&
                  card.map((item) => (
                    <div onClick={handle}>
                      <ChatCard />
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Left;
