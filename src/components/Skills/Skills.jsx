import React, { useContext } from "react";

import Box from "@mui/material/Box";
import { ThemeContext } from "../../context/ThemeContext";
import { skillsData } from "../../data/skillsData";
// import { skillsImage } from "../../utils/skillsImage";
import "./Skills.css";
export default function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div
      className='skills'
      id='skills'
      style={{ backgroundColor: theme.secondary }}>
      <div className='skillsHeader'>
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className='skillsContainer'>
        {skillsData.map((skill, id) => (
          <div className='skill--box' key={id} style={skillBoxStyle}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
