import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { HiMenu, HiX } from "react-icons/hi"; // Menu and close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 sm:px-6 md:px-10">
        <div className="flex justify-between items-center w-full md:w-auto">
          <NavLink
            to="/"
            className="text-red-100 hover:text-green-800 text-3xl sm:text-4xl font-bold cursive tracking-widest"
          >
            Kunal
          </NavLink>
          {/* Menu button only shown on small screens */}
          <button
            onClick={toggleMenu}
            className="text-red-100 md:hidden focus:outline-none"
          >
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/post"
            className="text-red-200 hover:text-green-800 py-2 px-2 text-base rounded"
            activeclassname="text-red-100 bg-red-700 border"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="text-red-200 hover:text-green-800 py-2 px-2 text-base rounded"
            activeclassname="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="text-red-200 hover:text-green-800 py-2 px-2 text-base rounded"
            activeclassname="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <nav className="md:hidden w-full mt-4 space-y-2">
            <NavLink
              to="/post"
              className="block text-red-200 hover:text-green-800 py-2 px-4 text-base rounded"
              onClick={() => setIsOpen(false)}
              activeclassname="text-red-100 bg-red-700 border"
            >
              Blog Post
            </NavLink>
            <NavLink
              to="/project"
              className="block text-red-200 hover:text-green-800 py-2 px-4 text-base rounded"
              onClick={() => setIsOpen(false)}
              activeclassname="text-red-100 bg-red-700"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block text-red-200 hover:text-green-800 py-2 px-4 text-base rounded"
              onClick={() => setIsOpen(false)}
              activeclassname="text-red-100 bg-red-700"
            >
              About Me!
            </NavLink>
          </nav>
        )}

        {/* Social Icons - Stays visible on all screen sizes */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <SocialIcon
            url="https://x.com/home"
            className="transition-transform duration-300 transform hover:scale-110"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.youtube.com/@kunalverma3204"
            className="transition-transform duration-300 transform hover:scale-110"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kunal-verma-596a76287/"
            className="transition-transform duration-300 transform hover:scale-110"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
