import React from "react";
import logowhite from "../assets/natter-white.png";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <div className="ml-32">
            <img src={logowhite} alt="natter." className="h-10 " />
          </div>
        </div>
        {authUser && (
          <div className="flex-none gap-2 pr-32">
            <button className="flex gap-2 items-center" onClick={logout}>
              <LogOut className="size-5 " />
              <span className="hidden sm:inline font-bold">Logout</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
