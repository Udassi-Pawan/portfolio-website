"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { achievementsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export default function Achievements() {
  const { ref } = useSectionInView("Achievements", 0.4);

  return (
    <section
      id="achievements"
      ref={ref}
      className="mb-28 max-w-[42rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Achievements</SectionHeading>
      <ul className="flex flex-col gap-4">
        {achievementsData.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-start bg-white borderBlack rounded-xl px-5 py-4 sm:px-6 sm:py-5 dark:bg-white/10 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/[0.14] transition-colors"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xl text-gray-700 dark:bg-white/10 dark:text-white/90"
                aria-hidden
              >
                {item.icon}
              </span>
              <p className="text-left leading-relaxed text-gray-800 dark:text-white/80 pt-1.5">
                {item.title}
              </p>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
