import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SkillCategory from './components/SkillCategory';
import Footer from './components/Footer';

function App() {
  const [projects, setProjects] = useState([]);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  // Scroll‑reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.08 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [projects]);

  /* ─── Skills data ─── */
  const skills = [
    {
      icon: 'fas fa-drafting-compass',
      title: 'Software Engineering',
      skills: ['OOP', 'SOLID', 'Clean Architecture', 'Design Patterns', 'Data Structures', 'Algorithms', 'REST API Design'],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      skills: ['.NET 8', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'EF Core', 'LINQ', 'SignalR', 'JWT Auth'],
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Frontend Development',
      skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'RxJS', 'Tailwind CSS', 'Bootstrap 5', 'Material UI'],
    },
    {
      icon: 'fas fa-database',
      title: 'Databases & BI',
      skills: ['SQL Server', 'T‑SQL', 'SSIS', 'SSRS', 'SSAS', 'Query Optimization'],
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile & DevOps',
      skills: ['Flutter', 'Dart', 'Git', 'GitHub', 'Docker', 'Swagger', 'Postman', 'Vercel'],
    },
    {
      icon: 'fas fa-users',
      title: 'Soft Skills',
      skills: ['Client Communication', 'Requirements Gathering', 'Team Collaboration', 'Technical Docs', 'Business Analysis', 'Stakeholder Engagement'],
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* ═══════ ABOUT ═══════ */}
      <section className="section" id="about">
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
          <p className="section-subtitle">
            Passionate about building software that makes a real difference — from concept to deployment.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a Full‑Stack .NET Developer with professional training from the Information Technology Institute (ITI)
              and a B.Sc. in Computer Science from Minya University. I specialize in building robust web and mobile
              applications using .NET 8, Angular, React, Next.js, and Flutter.
            </p>
            <p>
              My approach combines clean architecture principles with modern UI/UX best practices.
              I've delivered 6+ production projects — from agency CRM platforms and learning management systems
              to e‑commerce solutions — always focusing on scalability, performance, and maintainability.
            </p>
            <p>
              Whether it's designing RESTful APIs, crafting responsive interfaces, or optimizing database queries,
              I'm committed to writing code that's both elegant and effective.
            </p>
          </div>
          <div className="about-stats reveal reveal-delay-2">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="stat-number">6+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="stat-number">3</div>
              <div className="stat-label">Freelance Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="stat-number">3.3</div>
              <div className="stat-label">GPA / 4.0</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════ EXPERIENCE ═══════ */}
      <section className="section" id="experience">
        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Made an Impact</h2>
          <p className="section-subtitle">
            Building real‑world products for real clients — each project sharpened my craft.
          </p>
        </div>
        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025 — Present</div>
            <div className="timeline-title">Freelance Full‑Stack Developer</div>
            <div className="timeline-company">Self‑Employed · Remote</div>
            <ul className="timeline-description">
              <li>Delivered <strong>Wakala Wasl</strong> — an agency &amp; CRM platform with 4+ automated workflows for services, inquiries, and follow‑ups.</li>
              <li>Built <strong>Lawandy Motors</strong> — a corporate platform showcasing 5+ engineering divisions with investor‑facing content sections.</li>
              <li>Developed <strong>Dragon LMS</strong> — a learning management system serving students, instructors, and admins with dashboard analytics.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Oct 2025 — Aug 2026</div>
            <div className="timeline-title">Professional Trainee</div>
            <div className="timeline-company">Information Technology Institute (ITI) · Assiut Branch</div>
            <ul className="timeline-description">
              <li>Completed intensive training in .NET, Angular, React, SQL Server, SSIS/SSRS/SSAS, and BI workflows.</li>
              <li>Built an E‑Commerce backend with 5+ modules (products, orders, auth, payments) using Clean Architecture.</li>
              <li>Engineered a Real Estate platform supporting buying, renting, and investment property flows.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════ PROJECTS ═══════ */}
      <section className="section" id="projects">
        <div className="section-header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've designed, developed, and shipped.
          </p>
        </div>
        <div className="projects-carousel">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════ SKILLS ═══════ */}
      <section className="section" id="skills">
        <div className="section-header reveal">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I use to bring products to life.
          </p>
        </div>
        {/* Interactive Tabs — Design 3 */}
        <div className="skills-tabs-wrapper reveal">
          {/* Tab Navigation */}
          <div className="skills-tabs-nav">
            {skills.map((cat, i) => (
              <button
                key={i}
                className={`skill-tab-btn ${activeSkill === i ? 'active' : ''}`}
                onClick={() => setActiveSkill(i)}
              >
                <i className={cat.icon}></i>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
          {/* Tab Content Panel */}
          <div className="skills-tab-panel">
            <div className="skills-tab-panel-inner">
              <div className="skills-tab-illustration">
                <div className="skills-tab-icon-large">
                  <i className={skills[activeSkill].icon}></i>
                </div>
                <h3>{skills[activeSkill].title}</h3>
                <p className="skills-tab-desc">
                  Core tools and technologies I work with in this domain.
                </p>
              </div>
              <div className="skills-tab-tags">
                {skills[activeSkill].skills.map((s, i) => (
                  <span key={i} className="skill-tag-pill">
                    <i className="fas fa-check-circle"></i> {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════ EDUCATION ═══════ */}
      <section className="section" id="education">
        <div className="section-header reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            The foundations that shaped my engineering mindset.
          </p>
        </div>
        <div className="education-grid">
          <div className="education-card reveal">
            <div className="education-icon"><i className="fas fa-award"></i></div>
            <h3>Information Technology Institute (ITI)</h3>
            <div className="education-degree">Professional Training — BI‑Infused CRM Development</div>
            <div className="education-date">Oct 2025 — Aug 2026 · Assiut Branch</div>
            <ul className="education-details">
              <li>Full‑stack .NET &amp; Angular intensive program</li>
              <li>Database design, SSIS/SSRS/SSAS pipelines</li>
              <li>Built 2 capstone projects (E‑Commerce &amp; Real Estate)</li>
            </ul>
          </div>
          <div className="education-card reveal reveal-delay-2">
            <div className="education-icon"><i className="fas fa-university"></i></div>
            <h3>Minya University</h3>
            <div className="education-degree">B.Sc. Computer Science — Faculty of Computers &amp; Information</div>
            <div className="education-date">2021 — 2025 · GPA 3.3 / 4.0</div>
            <ul className="education-details">
              <li>Core CS: Data Structures, Algorithms, OS, Databases</li>
              <li>Graduation Project: <strong>Dalelak</strong> — a Flutter shopping‑guide app</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════ LANGUAGES ═══════ */}
      <section className="section" id="languages">
        <div className="section-header reveal">
          <span className="section-label">Languages</span>
          <h2 className="section-title">I Communicate In</h2>
        </div>
        <div className="languages-grid reveal">
          <div className="language-card">
            <div className="language-badge eg-badge">EG</div>
            <div className="language-details">
              <div className="language-info">
                <h4>Arabic</h4>
                <span className="language-level">Native Speaker</span>
              </div>
              <div className="language-progress">
                <div className="progress-bar" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          <div className="language-card">
            <div className="language-badge gb-badge">GB</div>
            <div className="language-details">
              <div className="language-info">
                <h4>English</h4>
                <span className="language-level">Intermediate</span>
              </div>
              <div className="language-progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ═══════ CONTACT ═══════ */}
      <section className="section contact-section" id="contact">
        <div className="contact-split reveal">
          {/* Left: Text & Links */}
          <div className="contact-split-left">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title" style={{textAlign:'left', marginBottom:'0.75rem'}}>Let's Work <span className="gradient-text">Together</span></h2>
            <p className="contact-split-desc">
              Have a project in mind or want to collaborate?<br/>
              Feel free to reach out — I'd love to <span className="gradient-text">hear from you.</span>
            </p>
            <div className="contact-links-list">
              <a href="mailto:jacquelinesaadmikhail@gmail.com" className="contact-link-row">
                <div className="contact-link-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-link-info">
                  <span className="contact-link-label">EMAIL</span>
                  <span className="contact-link-value">jacquelinesaadmikhail@gmail.com</span>
                </div>
                <i className="fas fa-chevron-right contact-link-arrow"></i>
              </a>
              <a href="tel:+201220408620" className="contact-link-row">
                <div className="contact-link-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-link-info">
                  <span className="contact-link-label">PHONE</span>
                  <span className="contact-link-value">+20 122 040 8620</span>
                </div>
                <i className="fas fa-chevron-right contact-link-arrow"></i>
              </a>
              <a href="https://www.linkedin.com/in/jaclynsaad/" target="_blank" rel="noopener noreferrer" className="contact-link-row">
                <div className="contact-link-icon"><i className="fab fa-linkedin-in"></i></div>
                <div className="contact-link-info">
                  <span className="contact-link-label">LINKEDIN</span>
                  <span className="contact-link-value">linkedin.com/in/jaclynsaad</span>
                </div>
                <i className="fas fa-chevron-right contact-link-arrow"></i>
              </a>
              <a href="https://github.com/Jaclyn25" target="_blank" rel="noopener noreferrer" className="contact-link-row">
                <div className="contact-link-icon"><i className="fab fa-github"></i></div>
                <div className="contact-link-info">
                  <span className="contact-link-label">GITHUB</span>
                  <span className="contact-link-value">github.com/Jaclyn25</span>
                </div>
                <i className="fas fa-chevron-right contact-link-arrow"></i>
              </a>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="contact-split-right">
            <div className="contact-illustration">
              {/* Animated paper plane SVG */}
              <svg className="paper-plane-svg" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="planeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818cf8"/>
                    <stop offset="100%" stopColor="#a78bfa"/>
                  </linearGradient>
                </defs>
                {/* Glow */}
                <circle cx="150" cy="150" r="140" fill="url(#glow)"/>
                {/* Dashed trail */}
                <path d="M 60 220 Q 130 160 200 100" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5" className="plane-trail"/>
                {/* Paper plane body */}
                <polygon points="200,100 110,150 130,165" fill="url(#planeGrad)" className="plane-body"/>
                <polygon points="200,100 130,165 155,190" fill="#4f46e5" className="plane-bottom"/>
                <polygon points="200,100 170,115 130,165" fill="#818cf8" opacity="0.7"/>
                {/* Stars */}
                <circle cx="80" cy="80" r="3" fill="#818cf8" opacity="0.7" className="star star-1"/>
                <circle cx="240" cy="60" r="2" fill="#a78bfa" opacity="0.6" className="star star-2"/>
                <circle cx="260" cy="200" r="2.5" fill="#818cf8" opacity="0.5" className="star star-3"/>
                <circle cx="50" cy="180" r="2" fill="#a78bfa" opacity="0.6" className="star star-4"/>
              </svg>
              {/* Available badge */}
              <div className="contact-available-badge">
                <div className="contact-badge-icon"><i className="fas fa-comment-dots"></i></div>
                <div>
                  <div className="contact-badge-title">Available for new projects</div>
                  <div className="contact-badge-sub">Let's build something <span className="gradient-text">amazing</span> together!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
