import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Text Section */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-6">
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Hi, I'm <span className="text-[#915EFF]">Noor Ul Ain</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-3 text-white-200 leading-relaxed">
            I craft seamless web experiences <br className="sm:block hidden" />
            with modern UI & UX principles.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about" className="group">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2 transition-all group-hover:scale-110">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
