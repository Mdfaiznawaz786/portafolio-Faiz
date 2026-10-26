import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Project/ProjectPage.css';
import { projects } from '../../resumeContent';

const Project = () => (
  <section className="projects" id="proyectos">
    <h2 className="heading"><Link to="/project">Projects</Link></h2>
    <div className="row">
      {projects.slice(0, 2).map((project, index) => (
        <div className="columns" data-aos="fade-up" data-aos-delay={200 + index * 100} key={project.title}>
          <i className={project.icon} aria-hidden="true"></i>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.stack}</p>
        </div>
      ))}
    </div>
  </section>
);

export default React.memo(Project);
