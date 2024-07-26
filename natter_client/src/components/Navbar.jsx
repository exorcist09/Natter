import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/home/grey-pavilion/natter/natter_client/src/assets/natter_logo.png";
import { Button, Tooltip } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { withTheme } from "@emotion/react";

const Navbar = () => {
  const [OpenProfile, setOpenProfile] = useState("false");

  return (
    <>
      <nav className="bg-white border-gray-200 border-2 shadow-lg dark:bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className=" ml-8 w-38 h-8" alt="Natter_Logo" />
          </Link>

          {/* for drop down menu */}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-black"
              onClick={() => setOpenProfile((prev) => !prev)}
            >
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                alt="Profile_pic"
              />
            </button>

            <div
              className="absolute top-10 right-85 my-4 text-base list-none  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600"
              id="user-dropdown"
            >
              {!OpenProfile && (
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <NavLink
              to="/"
              exact={true}
              style={({ isActive, isPending }) => {
                return isActive
                  ? {
                      color: "green",
                      borderWidth: "2px",
                      borderColor: "green",
                      marginRight: "5px",
                      paddingRight: "15px",
                      paddingLeft: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }
                  : {
                      background: "green",
                      color: "white",
                      borderWidth: "2px",
                      borderColor: "green",
                      marginRight: "5px",
                      paddingRight: "15px",
                      paddingLeft: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    };
              }}
            >
              Chat
            </NavLink>
            <Tooltip title="This feature currently don't work">
              <NavLink
                to="/video"
                style={({ isActive, isPending }) => {
                  return isActive
                    ? {
                        color: "red",
                        borderWidth: "2px",
                        borderColor: "red",
                        marginRight: "5px",
                        paddingRight: "15px",
                        paddingLeft: "15px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        borderRadius: "15px",
                        fontWeight: "bold",
                      }
                    : {
                        background: "red",
                        borderColor: "red",
                        borderWidth: "2px",
                        marginRight: "5px",
                        paddingRight: "15px",
                        paddingLeft: "15px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        borderRadius: "15px",
                        fontWeight: "bold",
                      };
                }}
              >
                Video
              </NavLink>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
