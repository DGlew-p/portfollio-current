import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { RiReactjsLine } from "react-icons/ri";
import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMaterialui,
} from "react-icons/si";

export const skillsData = [
  {
    name: "HTML",
    color: "#f08c28",
    colorShadow: "#cb3e1a",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    color: "#D5F3FE",
    colorShadow: "#2565AE",
    icon: <FaCss3 />,
  },
  {
    name: "Javascript",
    color: "#f7c01d",
    colorShadow: "#dda808",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    color: "#61DBFB",
    colorShadow: "#61DBFB",
    icon: <RiReactjsLine />,
  },
  {
    name: "Node.js",
    color: "#3C873A",
    colorShadow: "#68A063",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    color: "#E8E7D5",
    colorShadow: "#3FA037",
    icon: <SiMongodb />,
  },
  {
    name: "Python",
    color: "#FFD43B",
    colorShadow: "#4B8BBE",
    icon: <FaPython />,
  },
  {
    name: "Django",
    color: "#2B8C67",
    colorShadow: "#44B78B",
    icon: <SiDjango />,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    colorShadow: "#336791",
    icon: <SiPostgresql />,
  },
  {
    name: "Git",
    color: "#4183C4",
    colorShadow: "#2da44e",
    icon: <FaGithub />,
  },
  {
    name: "MUI",
    color: "#007fff",
    colorShadow: "#007fff",
    icon: <SiMaterialui />,
  },
];
