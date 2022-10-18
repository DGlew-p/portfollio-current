// import { HiArrowRight } from "react-icons/hi";
// import { Link } from "react-router-dom";

import React from "react";
import { projectsData } from "../../data/projectsData";
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
              {projectsData.map((project) => (
                // projectsData.slice(0, 3).map // future dev
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
{/* future dev with more projects below */}
            {/* {projectsData.length > 3 && (
              <div className='projects--viewAll'>
                <Link to='/AllProjects'>
                  <button className={"viewAllBtn"}>
                    View All
                    <HiArrowRight className={"viewArr"} />
                  </button>
                </Link>
              </div>
            )} */}
          </div>
        </div>
      )}
    </>
  );
}
