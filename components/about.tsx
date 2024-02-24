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
        My love for tech and building awesome products made me choose{" "}
        <span className="font-medium">Computer Science Engineering</span> as a
        major. During my course I worked on some interesting projects and
        finished them end-to-end. I soon found a role as a Full-Stack Developer.
        Primary Areas of my expertise are Web, Blockchain and DevOps. I also
        have a knack for problem solving and have experience of Competitive
        Programming.{" "}
        <span>
          I am continually expanding my skill set and am presently exploring
          better opportunities to level up.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, scrolling meme, and biking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
