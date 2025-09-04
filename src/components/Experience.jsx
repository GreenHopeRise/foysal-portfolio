import React from "react";
import { EXPERIENCES } from "../assets";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="pb-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <motion.h2
        className="my-12 text-center text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h2>

      {/* Scroll Container */}
      <motion.div
        className="flex flex-col lg:flex-row gap-6 sm:gap-8 py-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none px-0 lg:px-0"
        style={{ overflow: "visible" }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full lg:w-[360px] bg-stone-900 rounded-3xl p-6 snap-center cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
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