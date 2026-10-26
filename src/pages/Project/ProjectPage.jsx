import React from 'react';
import './ProjectPage.css';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ProjectCards from '../../components/Main/ProjectCards';
import { projects } from '../../resumeContent';

const Project = () => (
  <div>
    <HeaderPage />
    <ParticleBackground />
    <main className="resume-project-page">
      <section className="projects project-collection" id="proyectos">
        <h1 className="heading">Projects</h1>
        <ProjectCards projects={projects} />
      </section>
    </main>
    <ScrollToTop />
    <Footer />
  </div>
);

export default Project;
