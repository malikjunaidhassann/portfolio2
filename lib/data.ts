import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import port3 from "@/public/port3.png";
import port2 from "@/public/port2.png";
import port1 from "@/public/port1.png";
import port4 from "@/public/port4.png";
import port5 from "@/public/port5.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Full Stack Developer",
    location: "Ciel Technologies",
    description:
      "One of the fundamental concepts I learned was the component-based architecture of React.js. This approach enabled me to break down user interfaces into reusable and manageable pieces, leading to cleaner and more maintainable code",
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - March 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Master IT",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "January 2017 - February 2022",
  }, {
    title: "Virtual University",
    location: "Lahore",
    description:
      "As I start studying it got internship.Throughout the internship, I worked on a variety of projects that allowed me to apply Full Stack concepts in real-world scenarios. These projects ranged from simple components to more complex interactive web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "GlassHive",
    description:
      "In Glasshive, I developed a seamless, interactive frontend that balances aesthetics with performance. Built using React.js, the interface offers a smooth, engaging user experience that simplifies SaaS management, keeping it responsive, visually appealing, and easy to navigate for users at all levels.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", ],
    imageUrl: port5,
  },
  {
    title: "Stellar Development",
    description:
      " For Stellar Development, I crafted a user-friendly and responsive frontend in React.js, focusing on delivering a clean and intuitive design that enhances user interaction. This project seamlessly combines functionality with a polished layout, ensuring users can navigate features effortlessly while enjoying a visually cohesive experience.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: port4,
  },
  {
    title: "Podium",
    description:
      " In building Podium, I developed a sleek, high-performance React.js interface that prioritizes both speed and user engagement. This design balances modern aesthetics with smooth navigation, ensuring users can access features seamlessly while enjoying an interactive and visually appealing experience.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: port3,
  },
  {
    title: "NearPeer",
    description:
      "For Nearpeer, I crafted a responsive, React-based frontend focused on fluid user interactions and optimized loading. Designed with a user-centric approach, this interface offers smooth transitions, intuitive navigation, and a visually engaging layout, making it easy for users to connect and interact with the platform’s features effortlessly.",
    tags: ["React", "Node.js", "MongoDb", "Tailwind", "Redux"],
    imageUrl: port2,
  },
  {
    title: "Pulsetic",
    description:
      "For Pulsetic, I developed a sleek and responsive React.js frontend that brings real-time monitoring data to life.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: port1,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
