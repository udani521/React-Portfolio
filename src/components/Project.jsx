import React from 'react';

function Project({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>Deployed Version: <a href={project.deployedLink}>{project.deployedLink}</a></p>
      <p>GitHub Repository: <a href={project.githubLink}>{project.githubLink}</a></p>
      <img src={project.image} alt={project.title} />
    </div>
  );
}

export default Project;
