import React from "react";

import "./Education.css";

export default function EducationCard({
  id,
  school,
  course,
  startYear,
  endYear,
  edDetails,
}) {
  return (
    <div key={id} className={`education-card`}>
      <div className='educard-img'></div>
      <div className='education-details'>
        <h6>
          {startYear}
          {endYear}
        </h6>
        <h4>{course}</h4>
        <h5>{school}</h5>
        <ul className='hide'>
          {edDetails.map((det, index) => (
            <li key={index}>{det}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
