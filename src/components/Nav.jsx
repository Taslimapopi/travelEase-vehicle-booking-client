import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/context";
import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogoModelS } from "react-icons/io";
import { FaAddressBook, FaCarSide, FaUser } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { LiaThemeisle } from "react-icons/lia";
import logo from "../assets/carlogo.jpg";
import userIcon from "../assets/user.png";

const Nav = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => alert("SignOut Successful"))
      .catch();
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

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-semibold hover:text-orange-500 transition-colors duration-300"
        >
          <GoHomeFill /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-vehicles"
          className="font-semibold hover:text-orange-500 transition-colors duration-300"
        >
          <FaCarSide /> All Vehicles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-vehicles"
          className="font-semibold hover:text-orange-500 transition-colors duration-300"
        >
          <IoLogoModelS /> Add Vehicles
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/my-vehicles"
              className="font-semibold hover:text-orange-500 transition-colors duration-300"
            >
             My Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className="font-semibold hover:text-orange-500 transition-colors duration-300"
            >
              <FaAddressBook />My Bookings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-opacity-90">
      <div className="navbar max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-wide"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 rounded-full shadow-md ring-2 ring-orange-400 hidden md:block"
            />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
              TravelEase
            </span>
          </Link>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end space-x-3 flex items-center">
          {/* User Avatar */}
          <div className="relative group hidden md:block">
            <img
              className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-400"
              src={user?.photoURL || userIcon}
              alt="User Avatar"
            />
            {user && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md transition-all duration-300 whitespace-nowrap shadow-lg">
                {user.email}
              </span>
            )}
          </div>

          {/* Theme Toggle */}
          <label className="cursor-pointer flex items-center gap-2">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={theme === "dark"}
              className="toggle toggle-warning"
            />
          </label>

          {/* Login / Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn font-semibold border-none bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <IoLogOut /> Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn font-semibold border-none bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <IoLogIn /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
