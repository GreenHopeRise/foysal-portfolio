import React from "react";
import { PROJECTS } from "../assets";
import { CiLocationArrow1 } from "react-icons/ci";

const Projects = () => {
  return (
    <div id="projects" className="pb-16 px-4">
      <h2 className="my-12 text-center text-3xl md:text-4xl font-semibold">
        Projects
      </h2>

      <div className="grid gap-12 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
          >
            {/* Left Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl shadow-lg w-[280px] h-[180px] object-cover"
              />
            </div>

            {/* Right Details Section */}
            <div className="w-full lg:w-2/3">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 border px-4 py-2 rounded-2xl transition"
                >
                  Live Site
                  <CiLocationArrow1 className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;