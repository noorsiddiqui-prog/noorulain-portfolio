import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 sm:gap-10">
      {technologies.map((technology) => (
        <div
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col items-center"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          <p className="text-xs sm:text-sm md:text-base mt-2 text-center text-white">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
