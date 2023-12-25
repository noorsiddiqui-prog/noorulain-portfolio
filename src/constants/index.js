import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  caterer,
  customer,
  softcity,
  superadmin,
  vellavision,
  amazon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },

  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BitsPro",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#383E56",
    date: "July 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React JS Intern",
    company_name: "Enseedling",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Intern",
    company_name: "TriconV Technologies",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Js Intern",
    company_name: "Ghani Business Solutions",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "John Doe",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "John Doe",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "EatCoast Website",
    description:
      "Web-based platform that allows users to search, book, and manage meals from various providers, providing a convenient and efficient solution for delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: customer,
    source_code_link: "https://customer-ec.vercel.app",
  },
  {
    name: "Super Admin",
    description:
      "Web application Dashboard of a super admin who manages all the activities related to the caterer and eatcoast website. It checks the progress by charts on the dashboard. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: superadmin,
    source_code_link: "https://super-admin-ec.vercel.app",
  },
  {
    name: "Caterer",
    description:
      "Web application Dashboard that manage caterers for selling and delivering the meals. ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: caterer,
    source_code_link: "https://caterer-ec.vercel.app",
  },
  {
    name: "Vella Vision",
    description: "Web application Dashboard that manages products analytics. ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: vellavision,
    source_code_link: "https://vella-vision-api.vercel.app",
  },
  {
    name: "Softcity Analytics",
    description:
      "Web application Analytics Dashboard that manages softcity progress. ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: softcity,
    source_code_link: "#",
  },
  {
    name: "Amazon clone",
    description: "Web application Amazon clone ecommerce website. ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
