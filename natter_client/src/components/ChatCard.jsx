import React from "react";

const ChatCard = () => {
  return (
    <>
      
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md hover:text-white">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg"
              alt="User Avatar"
              class="w-12 h-12 rounded-full"
            />
          </div>
          <div class="flex-1 ">
            <h2 class="text-lg font-semibold">Adarsh</h2>
            <p class="text-gray-600 hover:text-white ">Hoorayy!!</p>
          </div>
        </div>
    </>
  );
};

export default ChatCard;
