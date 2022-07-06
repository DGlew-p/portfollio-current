import React, { useContext, useState } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
// import { NavLink } from "react-router-dom";
import { IoMenuSharp, IoSchoolSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import {
  FaUser,
  FaFolderOpen,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { Drawer, AppBar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./NavBar.css";
import { extLinkData } from "../../data/extLinkData";

export default function Navbar() {
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
          {/* <HashLink to='/'>
            <div className='drawerItem'>
              <IoHomeSharp className='drawerIcon' />
              <span className='drawerLinks'>Home</span>
            </div>
          </HashLink> */}

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

          <HashLink smooth to='/#experience'>
            <div className='drawerItem'>
              <HiDocumentText className='drawerIcon' />
              <span className='drawerLinks'>Experience</span>
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
