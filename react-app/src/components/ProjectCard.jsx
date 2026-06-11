import React, { useState, useRef, useEffect } from 'react';

const ProjectCard = ({ project, index }) => {
  const { title, description, tech, demo, github, icon, image } = project;
  const [isInteractive, setIsInteractive] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const iframeRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Alternating logic
  const isReversed = index % 2 !== 0;

  useEffect(() => {
    if (isInteractive && demo) {
      setIframeFailed(false);
      // Give iframe 6 seconds to load, then show fallback
      timeoutRef.current = setTimeout(() => {
        try {
          const iframe = iframeRef.current;
          if (iframe) {
            // Try accessing contentWindow — cross-origin will throw
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            // If we can access it and it's blank/error, mark failed
            if (!doc || doc.title === '' || doc.body?.innerText?.includes("can't be reached")) {
              setIframeFailed(true);
            }
          }
        } catch (e) {
          // Cross-origin = loaded successfully (that's fine!)
        }
      }, 6000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isInteractive, demo]);

  const handleIframeLoad = () => {
    clearTimeout(timeoutRef.current);
    // iframe loaded something — could still be an error page
    // We can't reliably detect cross-origin error pages, so we trust it
  };

  const handleIframeError = () => {
    clearTimeout(timeoutRef.current);
    setIframeFailed(true);
  };

  return (
    <div className={`project-timeline-row reveal reveal-delay-1 ${isReversed ? 'reversed' : ''}`}>
      <div className="project-timeline-dot"></div>

      {/* Content Side */}
      <div className="project-timeline-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-tags">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <div className="card-buttons">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
          )}
        </div>
      </div>

      {/* Visual Side */}
      <div className="project-timeline-visual">
        {isInteractive && demo ? (
          <div className="iframe-container">
            <button className="close-iframe-btn" onClick={() => { setIsInteractive(false); setIframeFailed(false); }}>
              <i className="fas fa-times"></i> Close
            </button>

            {iframeFailed ? (
              <div className="iframe-fallback">
                <div className="iframe-fallback-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>This site cannot be embedded</h4>
                <p>Some websites restrict iframe embedding for security.</p>
                <a href={demo} target="_blank" rel="noopener noreferrer" className="open-newtab-btn">
                  <i className="fas fa-external-link-alt"></i> Open in New Tab
                </a>
              </div>
            ) : (
              <>
                <div className="iframe-loading">
                  <div className="iframe-spinner"></div>
                  <span>Loading live demo...</span>
                </div>
                <iframe
                  ref={iframeRef}
                  src={demo}
                  title={title}
                  className="project-iframe"
                  loading="lazy"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </>
            )}
          </div>
        ) : (
          <div className="visual-media-container" onClick={() => demo && setIsInteractive(true)}>
            {image ? (
              <img src={image} alt={title} className="project-image" />
            ) : (
              <div className="project-visual-placeholder">
                <i className={icon || 'fas fa-laptop-code'}></i>
                <div className="visual-overlay"></div>
              </div>
            )}
            
            {demo && (
              <div className="play-demo-overlay">
                <button className="play-btn">
                  <i className="fas fa-play"></i>
                </button>
                <span>Click to Interact</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
