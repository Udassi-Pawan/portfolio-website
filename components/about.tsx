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
      <p>
        My passion for technology and building impactful products led me to pursue a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>.
      </p>

      <p>
        I started my career as a Full‑Stack Developer—an invaluable learning experience—but have since dedicated myself fully to my role as a DevOps Engineer.
      </p>

      <p className="mb-5">
        I have a knack for exploring new technologies and hands-on experience in Full‑Stack Web and Blockchain development. I’m constantly expanding my skill set and deepening my expertise.
      </p>

      <p>
        <span className="italic">When I’m away from the terminal</span>, I enjoy playing cricket, gymming, and going on long distance bicycle rides. I’m also an avid learner—currently teaching myself to play the guitar.
      </p>
    </motion.section>
  );
}
