import React from "react";

import "./Experience.css";

export default function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
}) {
  return (
    <div key={id} className={`experience-card `}>
      <div className='expcard-img'></div>
      <div className='experience-details'>
        <h6>
          {startYear}-{endYear}
        </h6>
        <h4>{jobtitle}</h4>
        <h5>{company}</h5>
      </div>
    </div>
  );
}
