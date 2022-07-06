import React, { useContext } from "react";
import { ButtonBase, Button } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";

import "./Landing.css";
import { ThemeContext } from "../../context/ThemeContext";
import { headerData } from "../../data/headerData";

export default function Landing() {
  const { drawerOpen } = useContext(ThemeContext);
  return (
    <div className='landing' id='back-to-top-anchor'>
      <div className='landing--container'>
        <div className='landing--container-left'></div>
        <img
          src={headerData.image}
          alt=''
          className='landing--img'
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
          }}
        />
        <div className='landing--container-right'>
          <div className='lcr--content'>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className='lcr-buttonContainer'>
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
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
