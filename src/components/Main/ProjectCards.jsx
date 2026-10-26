import React, { useState } from 'react';
import Modal from '../../pages/Project/Modal';
import '../../pages/Project/ProjectPage.css';

const ProjectCards = ({ projects }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="row project-showcase">
        {projects.map((project, index) => (
          <article className="columns project-card" data-aos="fade-up" data-aos-delay={150 + (index % 3) * 100} key={project.title}>
            <i className={project.icon} aria-hidden="true"></i>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-actions">
              <button type="button" onClick={() => setSelected(project)}>View details</button>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Use app <span aria-hidden="true">↗</span></a>}
              {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>}
            </div>
          </article>
        ))}
      </div>
      <Modal estado={Boolean(selected)} cambiarEstado={() => setSelected(null)}>
        {selected && (
          <div className="project-modal-content">
            <i className={selected.icon} aria-hidden="true"></i>
            <span className="project-category">{selected.category}</span>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <p className="project-stack"><strong>Built with</strong> {selected.stack}</p>
            <div className="project-actions">
              {selected.liveUrl && <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">Use app <span aria-hidden="true">↗</span></a>}
              {selected.sourceUrl && <a href={selected.sourceUrl} target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectCards;
