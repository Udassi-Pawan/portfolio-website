import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import workspaceImg from "@/public/workspace.png";
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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech CSE",
    location: "IIIT Bhubaneswar, Odisha, India",
    description:
      "Completed a 4-year Computer Science and Engineering degree while gaining hands-on experience building software and working with cloud technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Full Stack Developer",
    location: "FlyOnTech Solutions",
    description:
      "Built web applications and backend services, working across application development, APIs, databases, and cloud deployments.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Mar 2025",
  },
  {
    title: "DevOps Engineer",
    location: "Care Health Insurance",
    description:
      "Manage production AWS and Kubernetes infrastructure, troubleshoot complex application and infrastructure issues, and support reliable deployments. Work across EKS upgrades, networking, storage, databases, observability, and infrastructure automation.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Workspace",
    description:
      "A collaboration platform to chat, video call, share files, and edit documents and canvas in real time.",
    tags: ["Next.js", "NestJS", "MongoDB", "WebSocket", "WebRTC", "AWS"],
    imageUrl: workspaceImg,
    link: "https://github.com/stars/Udassi-Pawan/lists/workspace",
    demo: "https://www.youtube.com/embed/zH7eUT3lArk",
  },
  {
    title: "Workspace — AWS & CI/CD",
    description:
      "Deployed Workspace on AWS using Docker and Kubernetes and wired Jenkins and GitHub Actions to build, test, and ship updates on every push.",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    imageUrl: cicdImg,
    link: "https://github.com/stars/Udassi-Pawan/lists/devops",
  },
];

export const skillsData = [
  "AWS",
  "Linux",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Ansible",
  "Terraform",
  "GitHub Actions",
  "GitLab",
  "Nginx",
  "AWS VPC",
  "AWS IAM",
  "Amazon S3",
  "Amazon RDS",
  "AWS Lambda",
  "Networking",
  "CI/CD",
  "Observability",
  "Infrastructure Automation",
  "Production Troubleshooting",
  "TypeScript",
  "Next.js",
  "NestJS",
  "MongoDB",
] as const;