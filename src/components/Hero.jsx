import { motion } from "framer-motion";
import profile from "../assets/khalid.jpeg";

const Hero = () => {
  return (
    <div id="" className="pb-10 lg:mb-36">
      <div className="flex flex-wrap items-center flex-col-reverse lg:flex-row">
        {/* Left Section - Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10 px-4">
            <motion.h2
              className="pb-2 text-4xl font-bold tracking-tight lg:text-6xl"
              whileHover={{ scale: 1.05, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Khalid Anwar
            </motion.h2>

            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl font-semibold tracking-tight text-transparent"
              whileHover={{ scale: 1.05, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Frontend Developer
            </motion.span>

            <motion.p
              className="my-4 max-w-lg text-lg lg:text-xl leading-relaxed tracking-tight text-center lg:text-left text-stone-400"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              I’m a passionate React developer with hands-on experience in
              building modern, responsive, and user-friendly web applications. I
              specialize in creating clean UI, writing efficient code, and
              turning ideas into smooth digital experiences. Always eager to
              learn and explore new tools, I focus on delivering impactful
              solutions that make a difference.
            </motion.p>

            <motion.a
              href="https://drive.google.com/file/d/1nWIs82_DU85G_SL388_gqSkoTcWcm3tB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gradient-to-r from-stone-200 to-white rounded-full px-6 py-3 text-sm font-medium text-stone-800 shadow-md mb-10"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 10px #36ff0f, 0 0 20px #36ff0f, 0 0 30px #36ff0f",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="flex justify-center items-center mt-10 w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={profile}
            alt="Portrait of Khalid Anwar"
            className="border-4 border-stone-900 rounded-full shadow-xl object-cover transform scale-110 lg:scale-125 max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-sm transition"
            whileHover={{
              scale: 1.15,
              rotateY: 15,
              rotateX: 5,
              boxShadow:
                "0 0 20px #36ff0f, 0 0 40px #36ff0f, 0 0 60px #36ff0f",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;