import React from "react";
import { ButtonBase } from "@mui/material";

import "./Landing.css";
import { scroller, Link } from "react-scroll";
import { landingData } from "../../data/landingData";

export default function Landing() {
  // eslint-disable-next-line
  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 300,
      delay: 0,
      smooth: "easeInQuart",
    });
  };
  return (
    <div className='landing' id='back-to-top-anchor'>
      <div className='landing--container'>
        <div className='landing--container-left'></div>
        <img
          srcSet={`${landingData.image} 500w, ${landingData.imageSM} 250w`}
          sizes='(max-width: 750px) 250px,
            500px'
          src={landingData.image}
          alt='Portrait of Darren Glew'
          className='landing--img'
        />
        <div className='landing--container-right'>
          <div className='lcr--content'>
            <h6>{landingData.title}</h6>
            <h1>{landingData.name}</h1>
            <p>{landingData.desciption}</p>

            <div className='lcr-buttonContainer'>
              <ButtonBase
                className={"landing--button"}
                href={landingData.resumePdf}
                download='CV_DarrenGlew'
                target='_blank'
                rel='noreferrer'
              >Download CV</ButtonBase>
          
            
              <Link to='contacts' smooth={true}>
                <ButtonBase className={"landing--button"}>Contact</ButtonBase>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
