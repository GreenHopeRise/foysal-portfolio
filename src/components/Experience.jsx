import React from "react";
import { EXPERIENCES } from "../assets";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="pb-16 px-4">
      {/* Section Title */}
      <motion.h2
        className="my-12 text-center text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Horizontal scroll container */}
      <motion.div
        className="flex gap-6 py-6 overflow-x-auto snap-x snap-mandatory"
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="
              flex-shrink-0 
              w-full sm:w-[320px] md:w-[360px] lg:w-[400px] 
              bg-stone-900 rounded-3xl p-6 snap-center cursor-pointer
            "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              boxShadow:
                "0 0 20px #36ff0f, 0 0 40px #36ff0f, 0 0 60px #36ff0f",
            }}
          >
            {/* Year Section */}
            <div className="mb-2 text-sm text-stone-400">{experience.year}</div>

            {/* Details Section */}
            <h3 className="mb-2 font-semibold text-lg">
              {experience.role}{" "}
              <span className="block text-sm text-stone-500 lg:inline">
                – {experience.company}
              </span>
            </h3>

            <p className="mb-4 text-stone-300 leading-relaxed">
              {experience.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-stone-800 px-3 py-1 text-sm font-medium text-stone-300 cursor-pointer hover:shadow-[0_0_5px_#36ff0f,0_0_10px_#36ff0f,0_0_20px_#36ff0f] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;