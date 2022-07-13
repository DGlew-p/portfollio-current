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

export const iconData = {
  AiOutlineSend,
  AiOutlineCheckCircle,
  FaLinkedinIn,
  FaWindowClose,
};

export const skillsIcon = (skill) => {
  const skillIconID = skill;
  switch (skillIconID) {
    case "HTML":
      return <FaHtml5 />;
    case "Javascript":
      return <SiJavascript />;
    case "NodeJS":
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

    case "Material-UI":
      return <SiMaterialui />;

    default:
      return <FaCode />;
  }
};