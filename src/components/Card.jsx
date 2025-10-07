import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    year: "2025 - present",
    title: "Textile Testing & Quality Control",
    subtitle: "Daffodil International University",
    details: [
      "Standards (ISO, ASTM, AATCC, BIS) for textile testing.",
      "Hands-on testing of strength, color fastness, and fabric performance.",
    ],
  },
  {
    year: "2025 - present",
    title: "Analytical & Management Skills",
    subtitle: "Daffodil International University",
    details: [
      "Production planning & control (PPC)",
      "Industrial Engineering (IE)",
      "Lean manufacturing / Six Sigma basics",
    ],
  },
  {
    year: "2023 - present",
    title: "Soft & Professional Skills",
    subtitle: "Daffodil International University",
    details: [
      "Communication & teamwork (especially for factory and client coordination).",
      "Problem-solving and analytical thinking.",
      "Time management and leadership (for production supervision roles).",
    ],
  },
  {
    year: "2025 - present",
    title: "Sustainable Textile Innovations",
    subtitle: "Daffodil International University",
    details: [
      "3D printing and digital textile printing.",
      "AI and IoT in textile production (smart factories, predictive maintenance).",
      "Knowledge of global textile markets and supply chains.",
    ],
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="bg-stone-900 rounded-3xl p-6 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            rotate: 3,
            boxShadow: "0 0 20px #36ff0f, 0 0 40px #36ff0f, 0 0 60px #36ff0f",
          }}
        >
          {/* Year Section */}
          <div className="mb-2 text-sm text-stone-400">{card.year}</div>

          {/* Details Section */}
          <h3 className="mb-2 font-semibold text-lg">
            {card.title}{" "}
            <span className="block text-sm text-stone-500 lg:inline">
              {card.subtitle}
            </span>
          </h3>

          <ul className="mb-4 text-stone-300 leading-relaxed list-disc ml-5">
            {card.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
