import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  

  const projectsName = projects.map((item) => item.name)
  const projectsAbout = projects.map((item) => item.about)
  const projectsTech = projects.map((item) => item.technologies)
  console.log(projectsTech)
   
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >{/* render ProjectItem components here */}
      <ProjectItem name={projectsName[0]} about={projectsAbout[0]} technologies={projectsTech[0]}/>
      <ProjectItem name={projectsName[1]} about={projectsAbout[1]} technologies={projectsTech[1]}/>
      <ProjectItem name={projectsName[2]} about={projectsAbout[2]} technologies={projectsTech[2]}/>
      </div>
    </div>
  );
}

export default ProjectList;
