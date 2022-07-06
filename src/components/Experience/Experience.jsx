import React, { useContext } from "react";

import "./Experience.css";

import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className='experience' id='experience'>
      <div className='experience-body'>
        <div className='experience-description'>
          <h1>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
