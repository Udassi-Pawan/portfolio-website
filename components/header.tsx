"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const onNavClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* Mobile top bar */}
      <div
        className="fixed top-0 inset-x-0 z-[999] flex h-14 items-center justify-between border-b border-black/5 bg-white/90 px-4 backdrop-blur-md dark:border-white/10 dark:bg-gray-950/90 sm:hidden"
      >
        <span className="text-sm font-semibold text-gray-950 dark:text-gray-100">
          Pawan Udassi
        </span>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 inset-x-0 z-[998] max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-black/5 bg-white/95 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-gray-950/95 sm:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className={clsx(
                      "block px-5 py-3 text-[0.95rem] font-medium transition",
                      activeSection === link.name
                        ? "bg-gray-100 text-gray-950 dark:bg-white/10 dark:text-gray-100"
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5"
                    )}
                    onClick={() => onNavClick(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop pill nav */}
      <motion.div
        className="pointer-events-none fixed top-6 left-1/2 hidden h-[3.25rem] w-[min(50rem,calc(100vw-1.5rem))] -translate-x-1/2 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:block"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="pointer-events-auto fixed top-[1.7rem] left-1/2 z-[999] hidden max-w-[min(48rem,calc(100vw-2rem))] -translate-x-1/2 px-3 sm:block">
        <ul className="flex items-center justify-between gap-3 text-[0.82rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center whitespace-nowrap px-2.5 py-2 transition hover:text-gray-950 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => onNavClick(link.name)}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
