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
        I’m a <span className="font-medium">DevOps Engineer</span> focused on
        building, securing, and operating cloud infrastructure at scale. My
        current work revolves around AWS, Kubernetes, networking, CI/CD, and
        highly available production systems.
      </p>

      <p>
        I started my career as a Full-Stack Developer, where I built and
        deployed production applications across the frontend and backend. That
        experience gave me a strong understanding of how applications are
        designed, developed, deployed, and operated.
      </p>

      <p className="mb-5">
        Today, I’m focused on deepening my expertise in
        <span className="font-medium"> Cloud Infrastructure, DevOps, and SRE</span>.
        I enjoy working close to the infrastructure while still understanding
        the applications and systems running on top of it.
      </p>

      <p>
        <span className="italic">When I’m away from the terminal</span>, I enjoy
        playing cricket, gymming, and going on long-distance bicycle rides.
        I’m also an avid learner—currently teaching myself to play the guitar.
      </p>

    </motion.section>
  );
}
