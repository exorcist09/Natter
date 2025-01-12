import React, { useEffect } from "react";

const ProfileSidebar = () => {
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 bg-gray-600">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <span className="font-medium hidden lg:block">Account</span>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
