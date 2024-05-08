import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBriefcase,
  IconBriefcase2,
  IconPencil,
  IconSchool,
} from "@tabler/icons-react";
export const navPaths = ["Home", "About", "History", "Projects", "Contact"];

export const technicalSkills = [
  {
    id: 2,
    name: "TypeScript",
    icon: "/icon/typescript.svg",
  },
  {
    id: 7,
    name: "Node.js",
    icon: "/icon/node-js.svg",
  },
  {
    id: 3,
    name: "React",
    icon: "/icon/react.svg",
  },
  {
    id: 13,
    name: "Git",
    icon: "/icon/git.svg",
  },
  {
    id: 12,
    name: "Graphql",
    icon: "/icon/graphql.svg",
  },
  {
    id: 4,
    name: "Express js",
    icon: "/icon/express.svg",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "/icon/mongodb.svg",
  },
  {
    id: 13,
    name: "HTML",
    icon: "/icon/html.svg",
  },
  {
    id: 5,
    name: "Golang",
    icon: "/icon/go.svg",
  },
  {
    id: 1,
    name: "JavaScript",
    icon: "/icon/javascript.svg",
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: "/icon/postgresql.svg",
  },
  {
    id: 10,
    name: "Kotlin",
    icon: "/icon/kotlin.svg",
  },
  {
    id: 11,
    name: "CSS",
    icon: "/icon/css.svg",
  },
];

export const experience = [
  {
    id: 1,
    title: "BSc Computer Science",
    company: "Lipscomb University",
    date: "Aug 2015 - May 2019",
    location: "Nashville TN, USA",
    icon: IconSchool,
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "SoJourn Strategic",
    date: "Jan 2019 - Apr 2019",
    location: "Nashville, Tennessee, USA",
    icon: IconPencil,
  },
  {
    id: 3,
    title: "Software Development Engineer",
    company: "Intrinsic Value LLC",
    date: "Jun 2019 - Jun 2021",
    location: "Nashville TN, USA",
    icon: IconBriefcase,
  },
  {
    id: 4,
    title: "React Web Developer",
    company: "Letshego Holdings Limited",
    date: "Jan 2022 - Present",
    location: "Remote",
    icon: IconBriefcase2,
  },
];

export const projects = [
  {
    id: 1,
    title: "SpendSense",
    description:
      "Introducing SpendSense, your personal money guru in your pocket! SpendSense automatically tracks your spending habits, giving you clear insights into your expenditure. See exactly what you're spending, where your money's going, and identify areas to save.  Take control of your finances today with SpendSense!",
    git_url: "https://github.com/Tirivashe/spendsense",
    deployed_url: "https://shamhu-spendsense.vercel.app/",
    image_url: "/images/spendsense.png",
    techs: [
      "React",
      "Nextjs 14",
      "Typescript",
      "Mantine UI",
      "React Query",
      "Vercel",
      "Prisma",
      "Zod",
    ],
  },
  {
    id: 2,
    title: "Film Hub",
    description:
      "Film Hub is a dynamic movie app website that offers a seamless and immersive experience for movie enthusiasts. It provides a user-friendly interface for discovering, exploring, and sharing the latest movie releases and trailers. With recommendations and a wide range of genres, Film Hub is your go-to destination for all things cinema.",
    git_url: "https://github.com/Tirivashe/film-hub",
    deployed_url: "https://shamhu-film-hub.vercel.app/",
    image_url: "/images/film-hub.png",
    techs: [
      "React",
      "Typescript",
      "Mantine UI",
      "React Query",
      "TMDB API",
      "Vercel",
      "Vite",
      "Zustand",
      "Zod",
    ],
  },
  {
    id: 3,
    title: "Home Service Booking App",
    description:
      "Introducing 'Home Service' – your one-stop solution for all home service needs. With Home Service, users can effortlessly search for and book a wide range of services right from the comfort of their homes. Whether it's plumbing, electrical, cleaning, or more, Home Service has you covered.",
    git_url: "https://github.com/Tirivashe/home-service",
    deployed_url: "https://shamhu-home-service.vercel.app/",
    image_url: "/images/home-service.png",
    techs: [
      "Nextjs 14",
      "TypeScript",
      "Mantine UI",
      "Hygraph CMS",
      "Descope Auth",
      "Urql",
      "GPT-4",
      "DALL-E 3 image generation",
    ],
  },
];

export const socials = [
  {
    url: "https://www.linkedin.com/in/tirivashe-shamhu",
    name: "LinkedIn",
    icon: IconBrandLinkedin,
  },
  {
    url: "https://github.com/Tirivashe",
    name: "Github",
    icon: IconBrandGithub,
  },
  {
    url: "https://www.instagram.com/techbytiri",
    name: "Instagram",
    icon: IconBrandInstagram,
  },
  {
    url: "https://wa.me/263776202079",
    name: "WhatsApp",
    icon: IconBrandWhatsapp,
  },
];

export const summary =
  "Results-oriented software developer with expertise in React and strong focus in frontend development. I elevate user engagement and deliver reliable web and mobile applications. I bring a strong technical foundation and essential skillset. A constant learner and eager to leverage my skills to contribute to your success.";
