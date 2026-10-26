import React from 'react';
import './ServicesPage.css';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { experience } from '../../resumeContent';

const Services = () => (
  <div>
    <HeaderPage />
    <ParticleBackground />
    <main className="service-page">
      <section className="servicios">
        <h1 className="heading">Experience</h1>
        <div className="row experience-timeline">
          {experience.map((job, index) => (
            <div className="columns" data-order={String(index + 1).padStart(2, '0')} data-aos="fade-up" data-aos-delay={150 + (index % 2) * 100} key={job.company}>
              <i className={job.icon} aria-hidden="true"></i>
              <h3>{job.role} at {job.company}</h3>
              <p>{job.dates}</p>
              {job.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
            </div>
          ))}
        </div>
      </section>
    </main>
    <ScrollToTop />
    <Footer />
  </div>
);

export default Services;
