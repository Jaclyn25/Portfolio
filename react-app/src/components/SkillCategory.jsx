import React from 'react';

const SkillCategory = ({ icon, title, skills }) => {
  return (
    <div className="skill-category reveal">
      <div className="skill-category-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
