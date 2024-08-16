"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

export default function Contact() {
  //const { ref } = useSectionInView();

  return (
    <motion.section
      id="contact"
      //ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline">
        wasifkhalid145@gmail.com 
        </a>
       <p> or at my Ph.No</p> 
        <a className="underline">
        +923332667474
        </a>
        .
      </p>

      
    </motion.section>
  );
}
