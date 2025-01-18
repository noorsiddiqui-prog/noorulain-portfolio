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
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Noor Ul Ain Siddiqui &nbsp;
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
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
              href="https://drive.google.com/file/d/1s1ToS2eaWIylR8V1LPAJiMMI0PJl1sgC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-white hover:text-secondary transition duration-300"
            >
              Resume
            </a>
          </li>
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
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer transition duration-300 hover:scale-110"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white transition duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
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
                  className="transition duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-white text-[18px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/noorsiddiqui-prog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:scale-110"
                >
                  <FaGithub className="text-white text-[18px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/18dDp2L-if7VvcLSH5VQ3hwrnevGI82QP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[18px] bg-secondary py-1 px-3 rounded-lg hover:bg-white hover:text-secondary transition duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
//             Noor Ul Ain Siddiqui &nbsp;
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           <li>
//             <a
//               href="https://www.linkedin.com/in/noor-ul-ain-siddiqui-52404123b"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin className="text-secondary hover:text-white text-[22px]" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://github.com/noorsiddiqui-prog/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub className="text-secondary hover:text-white text-[22px]" />
//             </a>
//           </li>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//               <li>
//                 <a
//                   href="https://www.linkedin.com/in/noor-ul-ain-siddiqui-52404123b"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedin className="text-white text-[18px]" />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://github.com/noorsiddiqui-prog/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithub className="text-white text-[18px]" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // import React, { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom'

// // import { styles } from '../styles'
// // import { navLinks } from '../constants'
// // import { logo, menu, close } from '../assets'

// // const Navbar = () => {
// //   const [active, setActive] = useState('')
// //   const [toggle, setToggle] = useState(false)
// //   const [scrolled, setScrolled] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY
// //       if (scrollTop > 100) {
// //         setScrolled(true)
// //       } else {
// //         setScrolled(false)
// //       }
// //     }

// //     window.addEventListener('scroll', handleScroll)

// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <nav
// //       className={`${
// //         styles.paddingX
// //       } w-full flex items-center py-5 fixed top-0 z-20 ${
// //         scrolled ? 'bg-primary' : 'bg-transparent'
// //         // scrolled ? 'bg-primary' : 'bg-primary'
// //       }`}
// //     >
// //       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
// //         <Link
// //           to="/"
// //           className="flex items-center gap-2"
// //           onClick={() => {
// //             setActive('')
// //             window.scrollTo(0, 0)
// //           }}
// //         >
// //           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
// //           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
// //             Noor Ul Ain Siddiqui &nbsp;
// //           </p>
// //         </Link>

// //         <ul className="list-none hidden sm:flex flex-row gap-10">
// //           {navLinks.map((nav) => (
// //             <li
// //               key={nav.id}
// //               className={`${
// //                 active === nav.title ? 'text-white' : 'text-secondary'
// //               } hover:text-white text-[18px] font-medium cursor-pointer`}
// //               onClick={() => setActive(nav.title)}
// //             >
// //               <a href={`#${nav.id}`}>{nav.title}</a>
// //             </li>
// //           ))}
// //         </ul>

// //         <div className="sm:hidden flex flex-1 justify-end items-center">
// //           <img
// //             src={toggle ? close : menu}
// //             alt="menu"
// //             className="w-[28px] h-[28px] object-contain"
// //             onClick={() => setToggle(!toggle)}
// //           />

// //           <div
// //             className={`${
// //               !toggle ? 'hidden' : 'flex'
// //             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
// //           >
// //             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
// //               {navLinks.map((nav) => (
// //                 <li
// //                   key={nav.id}
// //                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
// //                     active === nav.title ? 'text-white' : 'text-secondary'
// //                   }`}
// //                   onClick={() => {
// //                     setToggle(!toggle)
// //                     setActive(nav.title)
// //                   }}
// //                 >
// //                   <a href={`#${nav.id}`}>{nav.title}</a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar
