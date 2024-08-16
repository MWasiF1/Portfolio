"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have recently graduated with a degree in{" "}
        <span className="font-medium">Computer Science (BSCS) </span>, I decided to pursue my
        passion for programming and development. I have taken many development and programming tutorials and learned{" "}
        <span className="font-medium">full-stack Web and Mobile App development.</span>.{" "}
        <span className="italic">My favorite part of programming and development</span> is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          MERN, MEAN, MEVN, RN along with data scrapping and business analysis.
        </span>
        I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position and remote work</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
         watching movies, animes and playing hockey & football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">JAVA (Spring Boot)</span>.
      </p>
    </motion.section>
  );
}
