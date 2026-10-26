import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../resumeContent';
import ProjectCards from './ProjectCards';

const Project = () => (
  <section className="projects" id="proyectos">
    <h2 className="heading"><Link to="/project">Projects</Link></h2>
    <ProjectCards projects={projects} />
  </section>
);

export default React.memo(Project);
