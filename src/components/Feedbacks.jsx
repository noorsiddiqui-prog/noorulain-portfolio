import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { styles } from "../styles"; // ✅ Ensure styles exist
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedin,
  github,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-4 xs:p-5 sm:p-6 md:p-8 rounded-2xl w-full flex flex-col min-h-[250px] xs:min-h-[270px] sm:min-h-[300px]"
  >
    <p className="text-white font-black text-[20px] xs:text-[32px] sm:text-[36px] md:text-[40px]">"</p>

    <div className="mt-2 flex-1">
      <p className="text-white tracking-wider text-[8px] xs:text-[15px] sm:text-[16px] md:text-[18px]">
        {testimonial}
      </p>

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[8px] xs:text-[13px] sm:text-[14px] md:text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[8px] xs:text-[11px] sm:text-[12px] md:text-[14px]">
            {designation} at {company}
          </p>
        </div>

        <div className="flex items-center gap-2 xs:gap-3">
          {/* LinkedIn Button (Optional) */}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-all"
            >
              <FaLinkedin className="text-secondary hover:text-black text-[16px] xs:text-[18px] sm:text-[20px]" />
            </a>
          )}

          {/* GitHub Button (Optional) */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-all"
            >
              <FaGithub className="text-secondary hover:text-black text-[16px] xs:text-[18px] sm:text-[20px]" />
            </a>
          )}

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-10 bg-black-100 rounded-[15px] sm:rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[auto] xs:min-h-[auto] sm:min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          {/* ✅ FIXED: Applying styles correctly */}
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`md:-mt-16 pb-10 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 lg:gap-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
