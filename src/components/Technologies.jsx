import { FaCss3, FaHtml5, FaGithub } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiN8N } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Technologies = () => {
  const techs = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <FaSquareJs className="text-yellow-500" />, name: "JavaScript" },
    { icon: <RiReactjsLine className="text-cyan-500" />, name: "React" },
    { icon: <RiTailwindCssFill className="text-cyan-400" />, name: "Tailwind" },
    { icon: <TbBrandFramerMotion className="text-pink-400" />, name: "Framer Motion" },
    { icon: <SiN8N className="text-orange-400" />, name: "n8n" },
    { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  ];

  return (
    <div id="technologies" className="py-16 px-4">
      <h2 className="mb-12 text-center text-3xl md:text-5xl font-bold">Technologies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="card bg-base-200 shadow-xl hover:scale-105 transition transform duration-300"
          >
            <div className="card-body flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl mb-3">{tech.icon}</div>
              <h3 className="card-title text-center text-stone-300 text-sm md:text-base">{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;