import React from "react";

import "./Education.css";
import EducationCard from "./EducationCard";

import { educationData } from "../../data/educationData";

export default function Education() {
  return (
    <div className='education' id='education'>
      <div className='education-body'>
        <div className='education-description'>
          <h1>Education</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
