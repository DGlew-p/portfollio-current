import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaWindowClose,
  FaLinkedinIn,
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

import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";

import { GrHomeRounded } from "react-icons/gr";
export const iconData = [
  AiOutlineSend,
  AiOutlineCheckCircle,
  FaLinkedinIn,
  FaWindowClose,
  GrHomeRounded,
];

export const skillsIcon = (skill) => {
  const skillIconID = skill;
  switch (skillIconID) {
    case "HTML":
      return <FaHtml5 />;
    case "Javascript":
      return <SiJavascript />;
    case "Node.js":
      return <FaNodeJs />;
    case "Python":
      return <FaPython />;
    case "Git":
      return <FaGithub />;
    case "CSS":
      return <FaCss3 />;
    case "MongoDB":
      return <SiMongodb />;
    case "PostgreSQL":
      return <SiPostgresql />;
    case "Django":
      return <SiDjango />;
    case "React":
      return <RiReactjsLine />;

    case "MUI":
      return <SiMaterialui />;

    default:
      return <FaCode />;
  }
};
