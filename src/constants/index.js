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
  voodoo,
  tracklease,
  enseedling,
  voodooNew,
  voodooNew2,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "React JS",
    icon: mobile,
  },

  {
    title: "React Native",
    icon: backend,
  },
  {
    title: "Backend",
    icon: creator,
  },
  {
    title: "Vue JS",
    icon: mobile,
  },
  {
    title: "Node Js",
    icon: backend,
  },
  {
    title: "Express Js",
    icon: backend,
  },
  {
    title: "Frontend",
    icon: web,
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
    title: "MERN Developer",
    company_name: "Expertizo",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Building dynamic and responsive web applications using MERN stack technologies: React.js, Node.js, Express.js, MongoDB, and TypeScript.",
      "Implemented cloud-based solutions with Google Cloud Run and Google Cloud Buckets for optimized performance and scalability.",
      "Integrated social media platforms, including managing Facebook API permissions and automating video scheduling across multiple platforms.",
      "Developed custom reporting features and managed deployments, ensuring seamless project delivery and client satisfaction.",
      "Collaborated closely with cross-functional teams and clients to gather requirements, provide solutions, and ensure timely project completion.",
      "Led and mentored a team of junior developers, providing guidance on best practices and conducting code reviews to ensure high-quality deliverables.",
      "Facilitated regular meetings with clients to understand project requirements, present project updates, and align deliverables with their expectations.",
      "Designed workflows and processes to enhance team productivity and ensure adherence to project timelines and quality standards.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "BitsPro",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#383E56",
    date: "July 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React JS Developer - Part Time",
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
    title: "MERN Developer",
    company_name: "TriconV Technologies",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#383E56",
    date: "January 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "Ghani Business Solutions",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2023",
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
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Developing  web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
    name: "Voodoo Project",
    description:
      "Developed web application dashboards capable of automating the creation of Shorts from Youtube uploaded videos, YouTube URLs, or manually uploaded files. Integrated automated scheduling features across multiple social media platforms.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "red-text-gradient",
      },
      {
        name: "Google Cloud Run",
        color: "red-text-gradient",
      },
      {
        name: "Google Cloud Buckets",
        color: "purple-text-gradient",
      },
      {
        name: "Social Platforms",
        color: "pink-text-gradient",
      },
      {
        name: "Shorts Generation",
        color: "green-text-gradient",
      },
    ],
    image: voodooNew2,
    source_code_link: "https://app.voodoo.tube/",
  },
  {
    name: "TrackLease Imoon",
    description:
      "Web application Dashboard that manages laundary and its shipping orders. ",
    tags: [
      {
        name: "React Ts",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "red-text-gradient",
      },
      {
        name: "Ant Design",
        color: "pink-text-gradient",
      },
    ],
    image: tracklease,
    source_code_link: "https://app-test.track.lease/",
    source_code_link: "#",
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
    source_code_link: "https://vella-vision.vercel.app/dashboard",
  },
  // {
  //   name: "Voodoo",
  //   description:
  //     "Web application Dashboard that creates and schedules shorts of a video. ",
  //   tags: [
  //     {
  //       name: "React Ts",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "redux toolkit",
  //       color: "red-text-gradient",
  //     },
  //     {
  //       name: "Ant Design",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "express js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: voodoo,
  //   // source_code_link: "https://app.voodoo.tube/",
  //   source_code_link: "#",
  // },
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
    source_code_link: "https://softcity-group.netlify.app/",
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
  {
    name: "Enseedling Group",
    description:
      "Web application Dashboard that manages enseedling group progress. ",
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
    image: enseedling,
    source_code_link: "https://main--enseedling.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
