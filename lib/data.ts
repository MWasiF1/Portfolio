import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import billbrosImg from "@/public/billbros.png";
import ytscloneImg from "@/public/ytsclone.png";
import merchImg from "@/public/merch.png";

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
    title: "Frontend Developer",
    location: "DHA Lahore, Pakistan",
    description:
      "I'm now a Intern Frontend Developer (Angular) at PostEx and also working as a freelancer. My stack includes MERN, MEVN, MEAN, . I'm open to any opportunity in development.",
    icon: React.createElement(FaReact),
    date: " june 2024 - present",
  },
  {
    title: "GC University,Lahore",
    location: "Lahore, Pakistan",
    description:
      "I graduated after 4 years of studying. I am currently doing an intrnship in Angular at PostEx.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Trainee Front-End Developer",
    location: "Sheeikhupura, Pakistan",
    description:
      "I worked as a trainee front-end developer for 1 years in this software house. I also upskilled to the MERN Stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "BillBros",
    description:
      "I worked as a frontend developer on this final year project for Universit. A digital chat payment mobile app where users can pay bills in group payments with group chat options.",
    tags: ["React Native", "FireBase", "Stripe", "TailwindCSS", "Python"],
    imageUrl: billbrosImg,
  },
  {
    title: "YTS Clone",
    description:
      "Project assigned by team lead at PostEx. I was the front-end developer. It has features like searching movies , browsing, login, signup and pagination.",
    tags: ["Angular", "TypeScript","Tailwind", "REST API"],
    imageUrl: ytscloneImg,
  },
  {
    title: "Merchant Portal",
    description:
      "Currently working o the merchant portal for PostEx and converting it to Angular v15 containing dashboard and many other advance features. ",
    tags: ["Angular", "TypeScript","Tailwind", "REST API", "pagination"],
    imageUrl: merchImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "Vue.js",
  "JAVA",
  "Spring Boot",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "My SQL",
  "Express",
  "Python",
  "Data Sacrapping",
  "Business Analysis",
] as const;
