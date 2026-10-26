import { experience, profile, projects, skills } from './content.js';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Mohammed Faiz Nawaz, home">MFN<span>.</span></a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>
          <a className="header-contact" href="#contact">Let's connect <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEER · BUFFALO, NY</p>
              <h1 id="hero-title">Building systems<br />that <em>scale.</em></h1>
              <p className="hero-lead">I'm {profile.name}. I build full-stack products, cloud platforms, and AI-powered tools that turn complex problems into reliable software.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
                <a className="button button-quiet" href={resumeUrl} download="Mohammed_Faiz_Nawaz_Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="art-center"><span>MFN</span><small>ENGINEERING<br />WITH PURPOSE</small></div>
              <span className="art-label label-one">01 / BUILD</span>
              <span className="art-label label-two">02 / SCALE</span>
              <span className="art-label label-three">03 / IMPROVE</span>
            </div>
          </div>
          <div className="container hero-bottom"><span>FULL-STACK DEVELOPMENT</span><span>CLOUD INFRASTRUCTURE</span><span>AI / ML INTEGRATION</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <SectionHeading eyebrow="01 / ABOUT" title={<>Engineer across the <em>entire stack.</em></>} />
            <div className="about-copy">
              <p>I’m a software engineer with 4+ years of experience spanning product development, distributed systems, automation, and cloud infrastructure.</p>
              <p>My work ranges from secure APIs and responsive interfaces to Kubernetes deployments and AI-assisted workflows. I care about systems that are useful, observable, and dependable in production.</p>
              <div className="about-facts"><div><strong>4+</strong><span>Years of experience</span></div><div><strong>10+</strong><span>APIs and microservices delivered at GrowMe.ai</span></div></div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="02 / EXPERIENCE" title={<>Where I’ve <em>made an impact.</em></>} intro="From product engineering to platform reliability, each role has sharpened how I build and ship." />
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.organization}>
                  <div className="timeline-meta"><span className="timeline-dot" /><span>{job.period}</span></div>
                  <div className="timeline-content"><div className="job-heading"><div><h3>{job.role}</h3><p>{job.organization} <span>· {job.location}</span></p></div><span className="job-arrow" aria-hidden="true">↗</span></div><ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="03 / SELECTED PROJECTS" title={<>Ideas made <em>real.</em></>} intro="A selection of engineering projects described in my résumé." />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top"><span>{project.number} / {project.category}</span><span aria-hidden="true">✳</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container skills-grid">
            <div><SectionHeading eyebrow="04 / TOOLKIT" title={<>Built with the <em>right tools.</em></>} /><p className="section-intro">A practical mix of product, platform, and data engineering skills.</p></div>
            <div className="skill-list">{skills.map(({ label, items }) => <div className="skill-row" key={label}><h3>{label}</h3><p>{items}</p></div>)}</div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <SectionHeading eyebrow="05 / FOUNDATION" title={<>Learning is part of <em>the work.</em></>} />
            <div className="education-grid">
              <article><span className="card-kicker">EDUCATION</span><h3>Master of Science in Computer Science</h3><p>State University of New York at Buffalo</p><small>Jan 2024 — Jun 2025</small></article>
              <article><span className="card-kicker">EDUCATION</span><h3>Bachelor of Technology in Electrical & Electronics Engineering</h3><p>Jawaharlal Nehru Technological University Kakinada</p><small>Aug 2018 — May 2022</small></article>
              <article><span className="card-kicker">CERTIFICATIONS</span><h3>AWS Certified</h3><p>Solutions Architect – Associate<br />Cloud Practitioner – Foundational</p><small>2026</small></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid"><div><p className="eyebrow">06 / CONTACT</p><h2>Let's build something <em>meaningful.</em></h2><p>Have a project, role, or collaboration in mind? I'd be glad to hear from you.</p></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div></div></footer>
    </>
  );
}

export default App;
