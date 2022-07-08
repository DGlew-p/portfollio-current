import React from "react";

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
          <div className='skill--box' key={id}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
