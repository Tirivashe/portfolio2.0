import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaCogs, FaAward } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./types";

export const services: IService[] = [
  {
    title: "Frontend Development",
    details:
      "Proficient in HTML, CSS, JavaScript, TypeScript, React, MUI, TailwindCSS to build beautiful UIs",
    Icon: RiComputerLine,
  },

  {
    title: "Backend Development",
    details:
      "Experience with Node, ExpressJS, NestJS with MongoDB, PostgreSQL and Prisma to build servers",
    Icon: FaServer,
  },

  {
    title: "API Development",
    details:
      "Experience using GraphQL and ExpressJS to build RESTful APIs and GQL APIs ",
    Icon: AiOutlineApi,
  },

  {
    title: "Technical Skills",
    details:
      "Experience in Java, Python, Kotlin, Solidity, Redux used in software development",
    Icon: FaCogs,
  },

  {
    title: "Other Skills",
    details:
      "Enthusiastic about teamwork, communication, critical thinking and problem-solving",
    Icon: MdPeopleAlt,
  },

  {
    title: "Certifications or Awards",
    details:
      "FreeCodeCamp Certification in JavaScript Algorithms and Data Structures",
    Icon: FaAward,
  },
];

export const languages: ISkill[] = [
  {
    name: "JavaScript",
    level: "90%",
    Icon: BsCircleFill,
  },

  {
    name: "TypeScript",
    level: "75%",
    Icon: BsCircleFill,
  },

  {
    name: "React",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Next.js",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Node",
    level: "80%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git(hub)",
    level: "85%",
    Icon: BsCircleFill,
  },

  {
    name: "Azure DevOps",
    level: "85%",
    Icon: BsCircleFill,
  },

  {
    name: "Kotlin",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Azure DevOps",
    level: "85%",
    Icon: BsCircleFill,
  },

  {
    name: "Solidity",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Movie App",
    description:
      "An app that consumes a movie API and showcases the top rated, newest and showing movies currently",
    image_path: "/static/images/movie_app_thumbnail.png",
    github_url: "https://github.com/Tirivashe/film-hub",
    deployed_path: "https://shamhu-film-hub.vercel.app",
    key_techs: [
      "React",
      "Mantine",
      "TypeScript",
      "React Router",
      "React Query",
    ],
  },
  {
    id: 2,
    name: "Home Service Booking App",
    description:
      "A fullstack application that allows users to book for any sort of service they need in their homes from available services",
    image_path: "/static/images/home-service.png",
    github_url: "https://github.com/Tirivashe/home-service",
    deployed_path: "https://shamhu-home-service.vercel.app",
    key_techs: [
      "Next.js 14",
      "TypeScript",
      "Mantine UI",
      "Hygraph CMS",
      "Urql",
      "Descope Auth",
      "GPT-4",
      "DALL-E 3",
    ],
  },
  // {
  //   id: 3,
  //   name: "Expense Tracker",
  //   description:
  //     "A fullstack application that allows users to keep track of their expenses, even by category",
  //   image_path: "/static/images/expense_app_thumbnail.png",
  //   github_url: "https://github.com/Tirivashe/expense-tracker-client",
  //   deployed_path: "https://expense-tracker-client-three.vercel.app",
  //   key_techs: [
  //     "React",
  //     "TypeScript",
  //     "Mantine UI",
  //     "Redux Toolkit",
  //     "NestJS",
  //     "Prisma",
  //   ],
  // },
  {
    id: 4,
    name: "GitHub Repository",
    description:
      "Shows github repositories by selected categories and shows a detailed description",
    image_path: "/static/images/github_repo.jpg",
    github_url: "https://github.com/Tirivashe/nextjs-typescript-github-repo",
    deployed_path: "https://shamhu-github-repos.vercel.app",
    key_techs: ["React", "NextJS", "TypeScript", "Mui"],
  },
  // {
  //   id: 4,
  //   name: 'E-Commerce Shop',
  //   description: "A shop that replicates an ecommerce shopping app and utilizes carts, paying and payment confirmation",
  //   image_path: '/static/images/ecommerce_shop.jpg',
  //   github_url:'https://github.com/Tirivashe/eCommerce-shop-with-nextjs-commercejs-typescript',
  //   deployed_path: "https://nextjs-typescript-ecommerce-shop.vercel.app",
  //   key_techs: ['React', 'Mui', 'Typescript', 'Commercejs','Stripe']

  // },
  // {
  //   id: 5,
  //   name: 'Yelp Clone',
  //   description: "A Yelp inspired app that shows saved restaurants by the user and can have added reviews and ratings",
  //   image_path: '/static/images/yelp_app.jpg',
  //   github_url:'https://github.com/Tirivashe/yelp-app',
  //   deployed_path: "https://yelp-clone-app.netlify.app/",
  //   key_techs: ['React', 'TailwindCSS','Node', 'Express', "Sequelize", "Postgres"]

  // },
  // {
  //   id: 6,
  //   name: 'Pokedex',
  //   description: "A smaller app that displays the Pokemon repository and select a pokemon to see details",
  //   image_path: '/static/images/pokedex_repo.jpg',
  //   github_url:'https://github.com/Tirivashe/NextJS-Pokemon',
  //   deployed_path: "https://pokemon-repo-app.vercel.app",
  //   key_techs: ['React', 'TailwindCSS', 'NextJS']

  // },
  // {
  //   id: 7,
  //   name: "Todo App",
  //   description:
  //     "A smaller app that takes tasks to do and keeps track of the tasks and mark them as complete when necessary",
  //   image_path: "/static/images/todo_app.jpg",
  //   github_url: "https://github.com/Tirivashe/typescript-todoapp",
  //   deployed_path: "https://shamhu-todo-app.netlify.app",
  //   key_techs: ["React", "TailwindCSS", "Redux Toolkit", "Typescript", "Mui"],
  // },

  // {
  //   id: 8,
  //   name: "Weather App",
  //   description:
  //     "A weather app that consumes and API shows the weather details of the major cities around the world",
  //   image_path: "/static/images/weather_app.jpg",
  //   github_url: "https://github.com/Tirivashe/weather-app",
  //   deployed_path: "https://shamhu-weather-app.netlify.app/",
  //   key_techs: ["React", "TailwindCSS", "JavaScript"],
  // },
  {
    id: 9,
    name: "Quiz App",
    description:
      "A small quiz app with questions generated by ChatGPT to challenge you on your general knowledge skills",
    image_path: "/static/images/quiz_app.png",
    github_url: "https://github.com/Tirivashe/Quiz-App",
    deployed_path: "https://shamhu-quiz-app.vercel.app",
    key_techs: ["React", "Mantine UI", "ChatGPT", "TypeScript"],
  },
];
