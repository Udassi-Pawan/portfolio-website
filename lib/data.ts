import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiKubernetes } from "react-icons/si";
import workspaceImg from "@/public/workspace.png";
import cicdImg from "@/public/cicd.png";

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

export const achievementsData = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    icon: React.createElement(SiKubernetes),
    href: "https://www.credly.com/badges/0158417f-0d80-4c23-89bc-a63c574006dd/public_url",
  },
  {
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    icon: React.createElement(FaAws),
    href: "https://www.credly.com/badges/38977318-fe53-4090-b2bb-970dfb43afbb/public_url",
  },
  {
    title:
      "200+ consecutive days (ongoing) of publishing DevOps learning content on LinkedIn.",
    icon: React.createElement(BsLinkedin),
    href: "https://www.linkedin.com/in/pawan-kumar-4b56161b8",
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