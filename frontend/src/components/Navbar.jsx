import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User } from "lucide-react";
import logowhite from "../assets/natter-white.png";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg py-2 bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-all"
          >
            <img src={logowhite} alt="natter." className="h-10" />
          </Link>

          {/* Right: Profile & Logout */}
          {authUser && (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="btn btn-sm gap-2">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button className="btn btn-sm gap-2" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
