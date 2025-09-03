import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Navbar = () => {
  return (
    <nav
      id="hero"
      className="flex flex-wrap items-center justify-between py-4 px-6 sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <a href="#" className="font-bold text-3xl md:text-4xl">
          ƙ𝓐
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 text-2xl mt-4 lg:mt-0">
        <a
          href="#"
          className="hover:text-cyan-400 transition transform hover:scale-110"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://github.com/GreenHopeRise" target="_blank"
          className="hover:text-gray-400 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/khalid_anwar_antur/"
          className="hover:text-pink-500 transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/KhalidAnwa64850"
          className="hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
