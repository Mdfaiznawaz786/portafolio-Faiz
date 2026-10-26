import React, { useState } from 'react';
import './ProjectPage.css';
import Modal from './Modal';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { projects } from '../../resumeContent';

const Project = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />
      <main className="resume-project-page">
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading">Projects</h1>
        </section>
        <section className="projects__grid paginas-web resume-projects-grid" aria-label="Projects from my résumé">
          {projects.map((project) => (
            <button className="projects__item resume-project-tile" type="button" onClick={() => setSelected(project)} key={project.title}>
              <i className={project.icon} aria-hidden="true"></i>
              <span>{project.category}</span>
              <strong>{project.title}</strong>
            </button>
          ))}
        </section>
      </main>
      <Modal estado={Boolean(selected)} cambiarEstado={() => setSelected(null)}>
        {selected && (
          <div className="content-modal resume-project-modal">
            <div className="pw-content">
              <div className="eins-modal-preview resume-modal-icon"><i className={selected.icon} aria-hidden="true"></i></div>
              <div className="eins-modal-text">
                <h2>{selected.title}</h2>
                <p>{selected.description}</p>
                <div className="eins-modal-text-3">Used technology: <p>{selected.stack}</p></div>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Project;
