import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science And Engineering",
      school: "Kamla Nehru Institute of Physical And Social Sciences, Sultanpur",
      period: "Graduated with First Division with Distinction"
    }
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="school">{edu.school}</span>
              <span className="period">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 