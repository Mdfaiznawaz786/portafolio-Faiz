import React from 'react';
import '../../pages/Service/ServicesPage.css';
import { experience } from '../../resumeContent';

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">Experience</h2>
    <div className="row">
      {experience.slice(0, 2).map((job, index) => (
        <div className="columns" data-aos="fade-up" data-aos-delay={200 + index * 100} key={job.company}>
          <i className={job.icon} aria-hidden="true"></i>
          <h3>{job.role} at {job.company}</h3>
          <p>{job.dates}</p>
          {job.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
        </div>
      ))}
    </div>
  </section>
);

export default React.memo(Service);
