import React, { useState } from "react";
import { FiMenu, FiX, FiMail } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wider">
     <a href="/"><span className="text-gray-300">Fz</span></a> 
      </div>

      {/* Menu Button (Mobile View) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX className="w-6 h-6 text-gray-300" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:space-x-8 text-gray-400 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent z-10`}
      >
        <a
          href="/page1"
          className="hover:text-white transition duration-300 px-4 py-2 md:p-0"
        >
          About Me
        </a>
        <a
          href="/page2"
          className="hover:text-white transition duration-300 px-4 py-2 md:p-0"
        >
          Portfolio
        </a>
        <a
          href="/page3"
          className="hover:text-white transition duration-300 px-4 py-2 md:p-0"
        >
          Blogs
        </a>
        <a
          href="/page4"
          className="hover:text-white transition duration-300 px-4 py-2 md:p-0"
        >
          Let's Talk
        </a>
      </div>

      {/* Email Contact */}
      <div className="hidden md:flex items-center space-x-2 text-gray-400">
        <FiMail className="w-5 h-5" />
        <a
          href="mailto:fkuser67@gmail.com"
          className="hover:text-white transition duration-300"
        >
          fkuser67@gmail.com
        </a>
      </div>
    </nav>
  );
};

export default Nav;
