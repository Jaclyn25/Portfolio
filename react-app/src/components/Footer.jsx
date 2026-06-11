import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/Jaclyn25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jaclynsaad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:jacquelinesaadmikhail@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="footer-copy">
          &copy; {year} Jacqueline Saad Mikhail &mdash; Crafted with passion &amp; clean code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
