import React from "react";

function ProjectItem({ name, about, technologies }) {

 const Tech = technologies.map((item) => <span>{item}</span> )

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {Tech}
      </div>
    </div>
  );
}

export default ProjectItem;
