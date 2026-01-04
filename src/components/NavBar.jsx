import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/context";
import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogoModelS } from "react-icons/io";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { FaAddressBook, FaCarSide, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import logo from "../assets/carlogo.jpg";
import { div } from "framer-motion/client";
import userIcon from '../assets/user.png'
import { LiaThemeisle } from "react-icons/lia";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            
            <li>
              <NavLink to={"/all-vehicles"}>
                <IoLogoModelS /> All Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add-vehicles"}>
                <IoLogoModelS /> Add Vehicles
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
          <img src={logo} className="h-14 w-10 rounded-full" alt="" />
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">TravelEase</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-vehicles"}>
              <IoLogoModelS /> All Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add-vehicles"}>
              <ImBoxAdd /> Add Vehicle
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="relative group w-9 border-2 border-gray-300 rounded-full hover:">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
                {user && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md transition-all duration-300 whitespace-nowrap shadow-md z-10">
              {user.email}
            </span>
          )}
                
              </div>
           
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>

              <li>
                <Link to={"/my-vehicles"}>
                  <FaCarSide />
                  My Vehicles
                </Link>
              </li>

              <li>
                <Link to={"/my-bookings"}>
                  <FaAddressBook /> My Bookings
                </Link>
              </li>
              <div className="flex justify-between items-center">
                <li>
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text"> Theme</span>
              </li>

              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle"
              />

              </div>

              

             
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn_common flex items-center justify-center gap-2"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-5">
            <Link
              to={"/auth/login"}
              className="btn_common flex items-center justify-center gap-2"
            >
              {" "}
              <IoLogIn /> Login
            </Link>
            <Link
            to={"/auth/register"}
            className="btn_common flex items-center justify-center gap-2 hidden md:flex"
          >
            {" "}
            <IoLogIn /> Register
          </Link>
          </div>
        )}
      </div>

    
    </div>
  );
};

export default NavBar;
