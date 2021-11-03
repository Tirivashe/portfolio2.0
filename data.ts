import { RiComputerLine} from 'react-icons/ri'
import { FaServer, FaCogs, FaAward} from 'react-icons/fa'
import { AiOutlineApi} from 'react-icons/ai'
import { MdPeopleAlt} from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'
import { IProject, IService, ISkill } from './types'


export const services: IService[] = [
  {
    title: "Frontend Development",
    details: "Proficient in HTML, CSS, JS and React, MUI, TailwindCSS to build beautiful UIs",
    Icon: RiComputerLine
  }, 

  {
    title: 'Backend Development',
    details: "Experience with Node, ExpressJS with MongoDB and PostgreSQL to build servers",
    Icon: FaServer
  },
  
  {
    title: 'API Development',
    details: "Experience using GraphQL and ExpressJS to build RESTful APIs and GQL APIs ",
    Icon: AiOutlineApi
  },

  {
    title: 'Technical Skills',
    details: "Experience in Java, Python, TypeScript, Redux used in software development",
    Icon: FaCogs
  },

  {
    title: 'Other Skills',
    details: "Enthusiastic about teamwork, communication, critical thinking and problem-solving",
    Icon: MdPeopleAlt
  },

  {
    title: 'Certifications or Awards',
    details: "FreeCodeCamp Certification in JavaScript Algorithms and Data Structures",
    Icon: FaAward
  },
]

export const languages: ISkill[] = [
  {
    name: 'JavaScript',
    level: '80%',
    Icon: BsCircleFill
  },

  {
    name: 'TypeScript',
    level: '60%',
    Icon: BsCircleFill
  },

  {
    name: 'React',
    level: '80%',
    Icon: BsCircleFill
  },

  {
    name: 'Node',
    level: '70%',
    Icon: BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name: 'VSCode',
    level: '70%',
    Icon: BsCircleFill
  },

  {
    name: 'Git(hub)',
    level: '65%',
    Icon: BsCircleFill
  },

  {
    name: 'Jira',
    level: '65%',
    Icon: BsCircleFill
  },

  {
    name: 'AEM',
    level: '35%',
    Icon: BsCircleFill
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Movie App',
    description: "An app that consumes a movie API and showcases the top rated, newest and showing movies currently",
    image_path: '/images/movie_app_thumbnail.png',
    github_url:'https://github.com/Tirivashe/movie-app',
    deployed_path: "https://shamhu-movie-app.netlify.app",
    categories: ['react'],
    key_techs: ['React', 'Mui', 'JavaScript']

  },
  {
    id: 2,
    name: 'GitHub Repository',
    description: "Shows github repositories by selected categories and shows a detailed description",
    image_path: '/images/github_repo.jpg',
    github_url:'https://github.com/Tirivashe/nextjs-typescript-github-repo',
    deployed_path: "https://shamhu-github-repos.vercel.app",
    categories: ['react'],
    key_techs: ['React', 'NextJS', 'TypeScript', "Mui"]

  },
  {
    id: 3,
    name: 'E-Commerce Shop',
    description: "A shop that replicates an ecommerce shopping app and utilizes carts, paying and payment confirmation",
    image_path: '/images/ecommerce_shop.jpg',
    github_url:'https://github.com/Tirivashe/eCommerce-shop-with-nextjs-commercejs-typescript',
    deployed_path: "https://nextjs-typescript-ecommerce-shop.vercel.app",
    categories: ["react"],
    key_techs: ['React', 'Mui', 'Typescript', 'Commercejs','Stripe']

  },
  {
    id: 4,
    name: 'Pokedex',
    description: "A smaller app that displays the Pokemon repository and select a pokemon to see details",
    image_path: '/images/pokedex_repo.jpg',
    github_url:'https://github.com/Tirivashe/NextJS-Pokemon',
    deployed_path: "https://pokemon-repo-app.vercel.app",
    categories: ['react'],
    key_techs: ['React', 'TailwindCSS', 'NextJS']

  },
  {
    id: 5,
    name: 'Todo App',
    description: "A smaller app that takes tasks to do and keeps track of the tasks and mark them as complete when necessary",
    image_path: '/images/todo_app.jpg',
    github_url:'https://github.com/Tirivashe/typescript-todoapp',
    deployed_path: "https://shamhu-todo-app.netlify.app",
    categories: ['react'],
    key_techs: ['React', 'TailwindCSS', 'Redux Toolkit', 'Typescript', 'Mui']

  },

  {
    id: 6,
    name: 'Weather App',
    description: "A weather app that consumes and API shows the weather details of the major cities around the world",
    image_path: '/images/weather_app.jpg',
    github_url:'https://github.com/Tirivashe/weather-app',
    deployed_path: "https://shamhu-weather-app.netlify.app/",
    categories: ['react'],
    key_techs: ['React', 'TailwindCSS']

  }
]