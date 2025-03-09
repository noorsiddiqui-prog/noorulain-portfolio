import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Wrapper = isLargeScreen ? motion.div : "div";

  return (
    <Tilt className="xs:w-[180px] sm:w-[200px] md:w-[250px] w-full">
      <Wrapper
        {...(isLargeScreen && { variants: fadeIn("right", "spring", index * 0.5, 0.75) })}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-4 px-6 sm:px-8 min-h-[220px] sm:min-h-[240px] md:min-h-[280px] flex flex-col items-center justify-evenly">
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
          />
          <h3 className="text-white text-[14px] sm:text-[16px] md:text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </Wrapper>
    </Tilt>
  );
};

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <motion.div variants={textVariant()}>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-secondary">
            Introduction
          </p>
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] text-white font-bold">
            Overview.
          </h2>
        </motion.div>
      ) : (
        <div>
          <p className="text-[12px] sm:text-[16px] md:text-[18px] text-secondary">
            Introduction
          </p>
          <h2 className="text-[20px] sm:text-[30px] md:text-[36px] text-white font-bold">
            Overview.
          </h2>
        </div>
      )}

      {isLargeScreen ? (
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[12px] sm:text-[16px] md:text-[17px] text-secondary max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React Js, React Native,
          Node Js, and Three.js. I'm a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions that
          solve real-world problems. Let's work together to bring your ideas to
          life!
        </motion.p>
      ) : (
        <p className="mt-4 text-[12px] sm:text-[16px] md:text-[17px] text-secondary max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px]">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React Js, React Native,
          Node Js, and Three.js. I'm a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions that
          solve real-world problems. Let's work together to bring your ideas to
          life!
        </p>
      )}

      <div className="mt-16 flex flex-wrap gap-8 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
