import { FaCss3, FaHtml5, FaGithub } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiReactjsLine, RiRfidFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobelightroom, SiAutocad, SiCanva, SiGoogledocs, SiN8N } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
import { PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { GiArtificialIntelligence } from "react-icons/gi";


const Technologies = () => {
  const techs = [
    { icon: <SiAutocad className="text-orange-500" />, name: "Auto CAD" },
    { icon: <RiRfidFill className="text-cyan-500" />, name: "RFID" },
    { icon: <PiMicrosoftExcelLogoFill className="text-yellow-500" />, name: "Excel" },
    { icon: <SiGoogledocs className="text-cyan-500" />, name: "Docs" },
    { icon: <SiCanva className="text-cyan-400" />, name: "Canva" },
    { icon: <GiArtificialIntelligence className="text-pink-400" />, name: "A.I." },
    { icon: <PiMicrosoftPowerpointLogoFill className="text-orange-400" />, name: "Power Point" },
    { icon: <SiAdobelightroom className="text-green-500" />, name: "Light Room" },
  ];

  return (
    <div id="technologies" className="py-16 px-4">
      <motion.h2
        className="mb-12 text-center text-3xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            className="card bg-transparent rounded-xl cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#1f2937", // bg-stone-800
              borderRadius: "1.5rem", // rounded-3xl
              boxShadow: "0 0 15px #36ff0f, 0 0 30px #36ff0f, 0 0 45px #36ff0f",
            }}
          >
            <div className="card-body flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl mt-3 mb-3">{tech.icon}</div>
              <h3 className="card-title text-center text-stone-300 text-sm md:text-base">
                {tech.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;