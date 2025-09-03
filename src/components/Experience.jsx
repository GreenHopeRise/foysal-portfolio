import React from "react";
import { EXPERIENCES } from "../assets";

const Experience = () => {
  return (
    <div id="experience" className="pb-10 px-4">
      <h2 className="my-12 text-center text-3xl md:text-4xl font-semibold">
        Experience
      </h2>

      <div className="space-y-12 max-w-5xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-start lg:gap-10"
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-3/4">
              <h3 className="mb-2 font-semibold text-lg">
                {experience.role}{" "}
                <span className="block text-sm text-stone-500 lg:inline">
                  – {experience.company}
                </span>
              </h3>

              <p className="mb-4 text-stone-400 leading-relaxed">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;