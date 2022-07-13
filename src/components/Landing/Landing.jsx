import React from "react";
import { ButtonBase } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";

import "./Landing.css";

import { landingData } from "../../data/landingData";

export default function Landing() {
  return (
    <div className='landing' id='back-to-top-anchor'>
      <div className='landing--container'>
        <div className='landing--container-left'></div>
        <img src={landingData.image} alt='' className='landing--img' />
        <div className='landing--container-right'>
          <div className='lcr--content'>
            <h6>{landingData.title}</h6>
            <h1>{landingData.name}</h1>
            <p>{landingData.desciption}</p>

            <div className='lcr-buttonContainer'>
              {landingData.resumePdf && (
                <a
                  href={landingData.resumePdf}
                  download='resume'
                  target='_blank'
                  rel='noreferrer'>
                  <ButtonBase className={"landing--button"}>
                    Download CV
                  </ButtonBase>
                </a>
              )}
              <NavHashLink
                to='/#contacts'
                smooth={true}
                spy='true'
                duration={2000}>
                <ButtonBase className={"landing--button"}>Contact</ButtonBase>
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
