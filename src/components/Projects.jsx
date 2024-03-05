import React from 'react';
import Project from './Project';
import projectsData from '../data/projectsData.json';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      {projectsData.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;

