import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";

import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";
export default function Projects() {
  return (
    <>
      {projectsData.length > 0 && (
        <div className='projects' id='projects'>
          <div className='projects--header'>
            <h1>Projects</h1>
          </div>
          <div className='projects--body'>
            <div className='projects--bodyContainer'>
              {projectsData.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className='projects--viewAll'>
                <Link to='/projects'>
                  <button className={"viewAllBtn"}>
                    View All
                    <HiArrowRight className={"viewArr"} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
