import React from "react";
import { PROJECTS } from "../assets";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="pb-16 px-4">
      <motion.h2
        className="my-12 text-center text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-12 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Left Image Section */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl shadow-lg w-[280px] h-[180px] object-cover"
              />
            </motion.div>

            {/* Right Details Section */}
            <div className="w-full lg:w-2/3">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-sky-300 cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 0 10px #36ff0f, 0 0 20px #36ff0f, 0 0 30px #36ff0f",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-400 hover:text-[#36ff0f] border px-4 py-2 rounded-2xl transition hover:shadow-[0_0_5px_#36ff0f,0_0_10px_#36ff0f,0_0_20px_#36ff0f]"
                >
                  Live Site
                  <CiLocationArrow1 className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;