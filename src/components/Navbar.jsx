import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 xs:w-6 xs:h-6 sm:w-10 sm:h-10 object-contain"
          />
          <p className="text-white text-[16px] xs:text-[12px] sm:text-[18px] lg:block font-bold cursor-pointer flex">
            Noor Ul Ain Siddiqui
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex list-none flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/noor-ul-ain-siddiqui-52404123b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-secondary hover:text-white text-[24px]" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/noorsiddiqui-prog/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110"
            >
              <FaGithub className="text-secondary hover:text-white text-[24px]" />
            </a>
          </li>
          <li>
            <a
              // href="https://drive.google.com/file/d/1s1ToS2eaWIylR8V1LPAJiMMI0PJl1sgC/view?usp=sharing"
              href="https://drive.google.com/file/d/1I38YYqcx7LJHiy-rkS61lDdnboJN20V1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-white hover:text-secondary transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setToggle(!toggle)}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-8 h-8 object-contain cursor-pointer transition duration-300 hover:scale-110"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-primary p-6 shadow-lg transform ${
            toggle ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <button
            className="absolute top-5 right-5"
            onClick={() => setToggle(false)}
          >
            <img src={close} alt="close" className="w-8 h-8" />
          </button>

          <ul className="flex flex-col mt-10 gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition duration-300`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/noor-ul-ain-siddiqui-52404123b"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110 flex items-center gap-2"
              >
                <FaLinkedin className="text-white text-[24px]" />
                <span className="text-white text-[16px]">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/noorsiddiqui-prog/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110 flex items-center gap-2"
              >
                <FaGithub className="text-white text-[24px]" />
                <span className="text-white text-[16px]">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1s1ToS2eaWIylR8V1LPAJiMMI0PJl1sgC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[18px] bg-secondary py-2 px-4 rounded-lg hover:bg-white hover:text-secondary transition duration-300 text-center block"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
