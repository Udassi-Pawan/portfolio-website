import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import workspaceImg from "@/public/workspace.png";
import exchangeImg from "@/public/exchange.png";
import marketplaceImg from "@/public/marketplace-dark.png";
import cicdImg from "@/public/cicd.png";
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
    title: "B.Tech CSE",
    location: "IIIT Bhubaneswar, Odisha, India",
    description:
      "Midway while completing my 4 year Computer Science and Engineering course, I found a job as a Full Stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full Stack Developer",
    location: "FlyOnTech Solutions",
    description:
      "I am working currenty on Web and Blockchain on some very interesting projects enhancing my skills on all fronts. ",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Workspace",
    description:
      "A collaboration platform to Chat, Video Call, Share unlimited files and Edit Documents and Canvas in realtime.",
    tags: ["Next.js", "NestJS", "MongoDB", "WebSocket", "WebRTC", "AWS"],
    imageUrl: workspaceImg,
    link:"https://workspace.pawanudassi.site",
    demo : "https://www.youtube.com/embed/zH7eUT3lArk"
  },
  {
    title: "Exchange",
    description:
      "A Decentralised Cryptocurrency bridge between Sepolia and Mumbai Chains secured with custom-built Proof-of-Stake consensus.",
    tags: ["React", "Solidity", "Hardhat", "MaterialUI"],
    imageUrl: exchangeImg,
    link: "https://www.exchange.pawanudassi.site",
    demo : "https://www.youtube.com/embed/NNYCB6cExBU"
  },
  {
    title: "NFT Marketplace",
    description:
      "Platform to mint, transfer and list whole or partial NFTs for auction with support for partializing NFT ownership into 100 parts.",
    tags: ["React", "Solidity", "AntDesign", "Openzeppelin"],
    imageUrl: marketplaceImg,
    link: "https://nftmarketplace.pawanudassi.site",
    demo : "https://www.youtube.com/embed/asZUAO3WBpA"
  },
  {
    title: "CICD Pipelines",
    description:
      "Automated pipelines to test, build and deploy a Next.js&NestJS based fullstack app on code push.",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins", "Github Actions"],
    imageUrl: cicdImg,
    link : "https://github.com/stars/Udassi-Pawan/lists/devops"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "C++",
  "Express",
  "Node.js",
  "NestJS",
  "MongoDB",
  "Solidity",
  "De-Fi",
  "NFT",
  "Ether.js",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "AWS",
  "Github Actions",
] as const;
