import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon, SocialIcons } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="fixed top-0 block shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center" style={{backgroundColor: "#61892F"}}>
      <div className="container mx-auto  justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white "
            className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-400 text-4xl font-bold cursive tracking-widest"
          >
            Kenny
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400"
            activeClassName="text-red-100 bg-gray-600"
          >
            About Me
          </NavLink>
          <NavLink
            to="/resume"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400"
            activeClassName="text-red-100 bg-gray-600"
          >
            Resume
          </NavLink>
        </nav>
        <div className="inline-flex mb-2 px-3">
          <SocialIcon
            url="https://www.linkedin.com/in/kenny-santiago-a70902205/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://stackoverflow.com/users/15116985/ksantiag"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/ksantiag"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
