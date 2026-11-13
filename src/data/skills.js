import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/javascript.png";
import ts from "../assets/images/typescript.svg";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import vscode from "../assets/images/vscode.png";
import figma from "../assets/images/figma.png";
import mongo from "../assets/images/monogodb.png";
import sql from "../assets/images/sql.png";

export const skillGroups = [
  {
    title: "Frontend",
    caption: "The core of my day-to-day work",
    skills: [
      { name: "React.js", icon: react },
      { name: "JavaScript (ES6+)", icon: js },
      { name: "TypeScript", icon: ts },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
    ],
  },
  {
    title: "React Ecosystem",
    caption: "Patterns I use to structure apps",
    skills: [
      { name: "React Hooks", glyph: "H" },
      { name: "React Router", glyph: "RR" },
      { name: "Context API", glyph: "CA" },
      { name: "Component Architecture", glyph: "CA" },
    ],
  },
  {
    title: "API & Backend",
    caption: "Connecting interfaces to real data",
    skills: [
      { name: "REST APIs", glyph: "API" },
      { name: "Axios", glyph: "AX" },
      { name: "Fetch API", glyph: "FT" },
      { name: "Node.js", icon: node },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongo },
      { name: "SQL", icon: sql },
    ],
  },
  {
    title: "Styling & UI",
    caption: "Building layouts that hold up",
    skills: [
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Responsive Web Design", glyph: "RD" },
      { name: "Flexbox", glyph: "FX" },
      { name: "CSS Grid", glyph: "GR" },
    ],
  },
  {
    title: "Tools & Workflow",
    caption: "Shipping and collaborating",
    skills: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "VS Code", icon: vscode },
      { name: "Vite", glyph: "VT" },
      { name: "Vercel", glyph: "V" },
      { name: "Figma", icon: figma },
    ],
  },
];
