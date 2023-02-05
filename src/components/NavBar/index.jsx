import React from "react";
import logo from "../../static/logo.png";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 shadow-md text-xl font-semibold text-gray-800 bg-gray-200 flex items-center justify-between px-20">
      <div className="flex items-center gap-5">
        {" "}
        <img src={logo} alt="logo" />
        <div>RAJ PRAKASH</div>
      </div>
      <div className="right-nav flex gap-10 mr-10 max-md:hidden">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
      </div>
      <div className="hidden max-md:block max-md:mr-0">menu</div>
    </nav>
  );
};

export default NavBar;
