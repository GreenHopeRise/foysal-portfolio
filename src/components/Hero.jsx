import profile from "../assets/khalid.jpeg";

const Hero = () => {
  return (
    <div id="" className="pb-10 lg:mb-36">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10 px-4">
            <h2 className="pb-2 text-4xl font-bold tracking-tight lg:text-6xl">
              Khalid Anwar
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl font-semibold tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-4 max-w-lg text-lg lg:text-xl leading-relaxed tracking-tight text-center lg:text-left text-stone-400">
              I’m a passionate React developer with hands-on experience in
              building modern, responsive, and user-friendly web applications.
              I specialize in creating clean UI, writing efficient code, and
              turning ideas into smooth digital experiences. Always eager to
              learn and explore new tools, I focus on delivering impactful
              solutions that make a difference.
            </p>
            <a
              href="https://drive.google.com/file/d/1nWIs82_DU85G_SL388_gqSkoTcWcm3tB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gradient-to-r from-stone-200 to-white rounded-full px-6 py-3 text-sm font-medium text-stone-800 shadow-md hover:shadow-lg hover:scale-105 transition mb-10"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 lg:p-8">
          <img
            src={profile}
            alt="Portrait of Khalid Anwar"
            className="border-4 border-stone-900 rounded-full shadow-xl object-cover transform scale-110 lg:scale-125 max-w-[220px] lg:max-w-sm transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;