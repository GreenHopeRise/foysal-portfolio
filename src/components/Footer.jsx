import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  const sections = ["hero", "technologies", "projects", "experience", "contact"];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-stone-900 rounded-2xl text-stone-300 py-10 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05, textShadow: "0 0 10px #36ff0f, 0 0 20px #36ff0f" }}>
          <a href="#" className="text-3xl font-bold mb-2 block md:mb-0">
            ƙ𝓐
          </a>
          <p className="text-sm text-stone-500">© 2025 Khalid Anwar. All rights reserved.</p>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-2xl">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#0ff", textShadow: "0 0 10px #36ff0f, 0 0 20px #36ff0f" }}
            className="transition transform"
          >
            <IoLogoLinkedin />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#0ff", textShadow: "0 0 10px #36ff0f, 0 0 20px #36ff0f" }}
            className="transition transform"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#f0f", textShadow: "0 0 10px #f0f, 0 0 20px #f0f" }}
            className="transition transform"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#00f", textShadow: "0 0 10px #00f, 0 0 20px #00f" }}
            className="transition transform"
          >
            <FaXTwitter />
          </motion.a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          {sections.map((sec, i) => (
            <motion.button
              key={i}
              onClick={() => handleScroll(sec)}
              className="transition bg-transparent border-none text-stone-300 hover:text-[#36ff0f]"
              whileHover={{ textShadow: "0 0 5px #36ff0f, 0 0 10px #36ff0f" }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;