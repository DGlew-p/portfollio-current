import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { IoMenuSharp, IoSchoolSharp } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaUser, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import Hide from "./HideLinkOnScroll.jsx";
import { Drawer, AppBar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./NavBar.css";
import { extLinkData } from "../../data/extLinkData";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position='fixed' sx={{ backGroundColor: "transparent" }}>
      <div className='navbar--container'>
        <Hide {...props}>
          <div className='nbc--content'>
            {extLinkData.linkedIn && (
              <a href={extLinkData.linkedIn} target='_blank' rel='noreferrer'>
                <FaLinkedin className='navBar--extLink' aria-label='LinkedIn' />
              </a>
            )}
            {extLinkData.github && (
              <a href={extLinkData.github} target='_blank' rel='noreferrer'>
                <FaGithub className='navBar--extLink' aria-label='GitHub' />
              </a>
            )}
          </div>
        </Hide>
        <IoMenuSharp
          className={"navMenu"}
          onClick={handleDrawerOpen}
          aria-label='Menu'
        />
      </div>
      <Drawer
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor='left'
        open={open}
        className='MuiDrawer'
        disableScrollLock={true}
        variant='temporary'>
        <div className='div-closebtn'>
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className='closebtnIcon'
            role='button'
            tabIndex='0'
            aria-label='Close'
          />
        </div>

        <div className='navLink--container' onClick={handleDrawerClose}>
          <HashLink smooth to='/#about'>
            <div className='drawerItem'>
              <FaUser className='drawerIcon' />
              <span className='drawerLinks'>About</span>
            </div>
          </HashLink>

          <HashLink smooth to='/#projects'>
            <div className='drawerItem'>
              <BsBriefcase className='drawerIcon' />
              <span className='drawerLinks'>Projects</span>
            </div>
          </HashLink>

          <HashLink smooth to='/#skills'>
            <div className='drawerItem'>
              <FaCode className='drawerIcon' />
              <span className='drawerLinks'>Skills</span>
            </div>
          </HashLink>

          <HashLink smooth to='/#education'>
            <div className='drawerItem'>
              <IoSchoolSharp className='drawerIcon' />
              <span className='drawerLinks'>Education</span>
            </div>
          </HashLink>

          <HashLink smooth to='/#contacts'>
            <div className='drawerItem'>
              <MdConnectWithoutContact className='drawerIcon' />
              <span className='drawerLinks'>Contact</span>
            </div>
          </HashLink>
        </div>
      </Drawer>
    </AppBar>
  );
}
