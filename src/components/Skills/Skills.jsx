import React from "react";
import { Box } from "@mui/material";

import { skillsData } from "../../data/skillsData";

import "./Skills.css";

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='skillsHeader'>
        <h2>Skills</h2>
      </div>
      <div className='skillsContainer'>
        {skillsData.map((skill, id) => (
          <Box
            className='skill--box'
            key={id}
            sx={{
              "&:hover": {
                color: `${skill.color}`,
                boxShadow: `0 0 10px ${skill.colorShadow}`,
              },
            }}>
            <h3>{skill.name}</h3>
            <div className='skill--icon'>{skill.icon}</div>
          </Box>
        ))}
      </div>
    </div>
  );
}
