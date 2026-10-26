import React from 'react';
import './AboutPage.css';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const skills = [
  { name: 'React', icon: 'react/react-original.svg', detail: 'Responsive interfaces and reusable components.' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg', detail: 'Typed full-stack applications and APIs.' },
  { name: 'Python', icon: 'python/python-original.svg', detail: 'FastAPI services, ETL, automation, and AI integrations.' },
  { name: 'Java', icon: 'java/java-original.svg', detail: 'Spring Boot microservices and enterprise applications.' },
  { name: 'Go', icon: 'go/go-original-wordmark.svg', detail: 'Distributed services and command policy engines.' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', detail: 'Schema design, indexing, and query optimization.' },
  { name: 'Docker', icon: 'docker/docker-original.svg', detail: 'Containerized services and deployments.' },
  { name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain.svg', detail: 'Helm-based deployment and platform operations.' },
  { name: 'Terraform', icon: 'terraform/terraform-original.svg', detail: 'Infrastructure as code for AWS workloads.' },
];

const About = () => (
  <div>
    <HeaderPage />
    <ParticleBackground />
    <main className="resume-about-page">
      <section className="sobre-mi-seccion" id="sobre-mi">
        <div className="skill-seccion">
          <h1 className="heading">Skills</h1>
          <div className="skill-container">
            {skills.map((skill, index) => (
              <div className="skill-card" data-aos="flip-up" data-aos-delay={200 + (index % 3) * 100} key={skill.name}>
                <img alt="" className="skills-img icon-li" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`} />
                <h2 className="skill-name">{skill.name}</h2>
                <p className="skill-info">{skill.detail}</p>
              </div>
            ))}
          </div>
          <h2 className="heading">Education & Certifications</h2>
          <div className="skill-container">
            <div className="skill-card"><h3 className="skill-name">MS in Computer Science</h3><p className="skill-info">State University of New York at Buffalo · Jan 2024 – Jun 2025</p></div>
            <div className="skill-card"><h3 className="skill-name">BTech in Electrical & Electronics Engineering</h3><p className="skill-info">Jawaharlal Nehru Technological University Kakinada · Aug 2018 – May 2022</p></div>
            <div className="skill-card"><h3 className="skill-name">AWS Certified</h3><p className="skill-info">Solutions Architect – Associate and Cloud Practitioner – Foundational · 2026</p></div>
          </div>
        </div>
      </section>
    </main>
    <ScrollToTop />
    <Footer />
  </div>
);

export default About;
