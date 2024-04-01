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
    title: "Film Hub",
    description:
      "A web app that allows you to search for movies and view their details.",
    git_url: "https://github.com/Tirivashe/film-hub",
    deployed_url: "https://shamhu-film-hub.vercel.app/",
    image_url: "/images/film-hub.png",
    tech: [
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
    id: 2,
    title: "Home Service Booking App",
    description:
      "A web app that allows you to book, complete and cancel home services",
    git_url: "https://github.com/Tirivashe/home-service",
    deployed_url: "https://shamhu-home-service.vercel.app/",
    image_url: "/images/home-service.png",
    tech: [
      "Nextjs 14",
      "TypeScript",
      "Mantine UI",
      "Hygraph CMS",
      "Descope Auth",
      "Urql",
      "GPT-4 for data generation for CMS",
      "DALL-E 3 for image generation for CMS",
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
