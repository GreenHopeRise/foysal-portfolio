import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-stone-900 rounded-2xl text-stone-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div>
          <a href="#" className="text-3xl font-bold mb-2 block md:mb-0">
            ƙ𝓐
          </a>
          <p className="text-sm text-stone-500">© 2025 Khalid Anwar. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="#"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#technologies" className="hover:text-white transition">Technologies</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;