import React, { useContext } from "react";

import "./Education.css";

export default function EducationCard({
  id,
  institution,
  course,
  startYear,
  endYear,
}) {
  return (
    <div key={id} className={`education-card`}>
      <div className='educard-img'></div>
      <div className='education-details'>
        <h6>
          {startYear}-{endYear}
        </h6>
        <h4>{course}</h4>
        <h5>{institution}</h5>
      </div>
    </div>
  );
}
