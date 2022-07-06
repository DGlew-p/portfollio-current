import React from "react";

import "./About.css";

import { aboutData } from "../../data/aboutData";

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='line-styling'>
        <div className='style-circle'></div>
        <div className='style-circle'></div>
        <div className='style-line'></div>
      </div>
      <div className='about-body'>
        <div className='about-description'>
          <h2>{aboutData.title}</h2>
          <p>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
      </div>
    </div>
  );
}
