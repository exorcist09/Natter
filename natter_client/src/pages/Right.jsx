import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageCard from "/home/grey-pavilion/natter/natter_client/src/components/MessageCard.jsx";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Right = () => {
  const [openButton, setOpenButton] = useState("false");
  const [content,setContent] =useState("")

  const handleCreateNewMessage=()=>{}
  return (
    <>
      {/* top */}
      <div>
        <div className="flex justify-between items-center pr-3 border-b-2 border-black">
          <header class="p-4 text-gray-700">
            <h1 class="text-2xl text-white font-semibold">Adarsh</h1>
          </header>
          <div>
            <button onClick={() => setOpenButton((prev) => !prev)}>
              <MoreHorizIcon />
            </button>
            <div
              className="absolute top-10 right-85 my-4 text-base list-none  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 hidden dark:divide-gray-600"
              id="user-dropdown"
            >
              {openButton && (
                <ul>
                  <li className="block">Info</li>
                  <li className="block">Pin</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* middle chat bubbles */}
        <div className="px-10  h-[64vh] overflow-y-scroll">
          <div className="space-y-1 flex flex-col justify-center  mt-8">
            {[1, 1, 1, 1].map((item,i) => (
              <MessageCard isRequestedUserMessage={i%2==0}
                content={"Hello World"}
              />
            ))}
          </div>
        </div>

        {/* bottom for entering text*/}
        <div class="mt-4 max-w-full mx-auto">
          <form>
            <div class="flex items-center py-2 px-3 bg-gray-50 rounded-2xl dark:bg-gray-700">
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                
                <AttachFileIcon sx={{color:"#92989f"}}/>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <EmojiEmotionsIcon sx={{color:"#92989f"}}/>
                
              </button>
              <button
                type="button"
                class="p-2  text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
              <KeyboardVoiceIcon sx={{color:"#92989f"}}/>
              </button>
              <input
                id="chat"
                class="block mx-4 p-2 w-full text-xl text-gray-900 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder=" Type your message here..."
                onChange={(e)=>setContent(e.target.value) }
                value={content}
                onKeyPress={(e)=>{
                  if(e.key =="Enter"){
                    handleCreateNewMessage();
                    setContent("")
                  }
                }}
              ></input>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Right;
