import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, linkIcon } from "../assets"; 
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[300px] md:w-[350px] lg:w-[320px] xl:w-[400px] p-3 sm:p-5 bg-tertiary rounded-2xl flex flex-col"
    >
      <div className="relative w-full h-[200px] sm:h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-2 sm:m-3 space-x-1 sm:space-x-2">
          {source_code_link && <IconButton link={source_code_link} icon={github} alt="GitHub" />}
          {live_demo_link && <IconButton link={live_demo_link} icon={linkIcon} alt="Live Demo" />}
        </div>
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-white font-bold text-[16px] sm:text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">{description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[10px] sm:text-[12px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};


const IconButton = ({ link, icon, alt }) => (
  <div
    onClick={() => window.open(link, "_blank")}
    className="bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  >
    <img src={icon} alt={alt} className="w-1/2 h-1/2 object-contain" />
  </div>
);

const Works = () => {
  console.log("Projects Data:", projects); // Debugging

  return (
    <div className="relative h-full md:mx-12">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience...
        </motion.p>
      </div>

      <div className="lg:mt-20 z-10 flex flex-wrap gap-8 justify-center">
        {/* {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p className="text-white text-lg">No projects found.</p>
        )} */}
        <div className="lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p className="text-white text-lg">No projects found.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Works;
