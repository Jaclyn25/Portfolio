import React from 'react';

const Hero = () => {
  return (
    <section className="hero hero-v4" id="hero">
      {/* Floating particles background */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`}></span>
        ))}
      </div>

      <div className="hero-v4-inner">
        {/* Left side: tagline text */}
        <div className="hero-v4-left">
          <p className="hero-v4-eyebrow">
            <span className="hero-badge-dot"></span> Available for Freelance Work
          </p>
          <h1 className="hero-v4-heading">
            Building Digital<br />
            <span className="hero-name-gradient">Experiences</span><br />
            That Matter
          </h1>
          <p className="hero-v4-sub">
            Full‑Stack .NET &amp; Frontend developer crafting clean, scalable,<br className="desktop-br" /> and pixel‑perfect web applications.
          </p>
        </div>

        {/* Right side: Neumorphism card */}
        <div className="hero-v4-card-wrap">
          <div className="hero-v4-card">
            {/* Profile photo */}
            <div className="hero-v4-avatar">
              <img src="/profile.jpg" alt="Jacqueline" />
            </div>

            <h2 className="hero-v4-name">
              Hi, I'm <span className="hero-name-gradient">Jacqueline</span>
            </h2>
            <p className="hero-v4-title">
              Software Engineer &bull; Full‑Stack .NET Developer
            </p>
            <p className="hero-v4-desc">
              I craft modern web &amp; mobile applications with clean architecture and
              pixel‑perfect interfaces. Turning complex problems into elegant,
              production‑ready solutions.
            </p>

            <div className="hero-badge hero-v4-badge">
              <span className="hero-badge-dot"></span>
              Available for Freelance Work
            </div>

            <div className="hero-v4-actions">
              <a href="#projects" className="btn-primary">
                <i className="fas fa-rocket"></i> View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                <i className="fas fa-paper-plane"></i> Get in Touch
              </a>
            </div>

            <div className="hero-social hero-v4-social">
              <a href="https://github.com/Jaclyn25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jaclynsaad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:jacquelinesaadmikhail@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+201220408620" aria-label="Phone">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
