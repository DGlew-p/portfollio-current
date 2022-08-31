import React, { useState } from "react";

import "./Education.css";

export default function EducationCard({
  id,
  school,
  course,
  startYear,
  endYear,
  edDetails,
}) {
  const [isOpen, setOpen] = useState("false");
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div key={id} className={isOpen ? `education-card` : "education-card-open"}>
      <div
        className={isOpen ? "educard-img" : "educard-img-open"}
        onClick={toggleOpen}></div>
      <div className={isOpen ? "education-details" : "education-details-open"}>
        <h6>
          {startYear}
          {endYear}
        </h6>
        <h4>{course}</h4>
        <h5>{school}</h5>
        <ul className={isOpen ? "hide" : "hide-open"}>
          {edDetails.map((det, index) => (
            <li key={index}>{det}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
