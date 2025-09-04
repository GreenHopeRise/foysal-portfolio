import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      id="hero"
      className="flex flex-wrap items-center justify-between py-4 px-6 sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <motion.a
          href="#"
          className="font-bold text-3xl md:text-4xl text-stone-300 transition"
          whileHover={{
            color: "#36ff0f",
            textShadow: "0 0 5px #36ff0f, 0 0 10px #36ff0f, 0 0 20px #36ff0f",
          }}
        >
          ƙ𝓐
        </motion.a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 text-2xl mt-4 lg:mt-0">
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "#0ff", textShadow: "0 0 5px #36ff0f, 0 0 10px #36ff0f" }}
          className="transition transform"
        >
          <IoLogoLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/GreenHopeRise"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#0ff", textShadow: "0 0 5px #36ff0f, 0 0 10px #36ff0f" }}
          className="transition transform"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/khalid_anwar_antur/"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#f0f", textShadow: "0 0 5px #f0f, 0 0 10px #f0f" }}
          className="transition transform"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://x.com/KhalidAnwa64850"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#00f", textShadow: "0 0 5px #00f, 0 0 10px #00f" }}
          className="transition transform"
        >
          <FaXTwitter />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;