import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "QUICK ENGINEERING SOLUTIONS",
      period: "Oct 2024 - Present",
      description: "Building robust applications and integrating IoT solutions.",
      achievements: [
        "Web App Dev: Building a robust Python & Kivy app for real-time device connectivity",
        "IoT Integration: Syncing ESP32 and Wi-Fi devices with efficient data flow",
        "Real-Time Data: Using Arduino for instant data processing and display"
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Spacept",
      period: "Dec 2023 - Feb 2024",
      description: "Improved system performance and developed efficient model deployment solutions.",
      achievements: [
        "Improved system performance by upgrading libraries, reducing processing errors by 30%",
        "Developed an inference class for efficient model deployment on images",
        "Managed model files within GitHub repository and provided support"
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Ybi Foundation",
      period: "Oct 2023 - Nov 2023",
      description: "Worked on AI/ML projects and enhanced model performance.",
      achievements: [
        "Contributed to 15% reduction in processing time for large datasets",
        "Applied data analysis and predictive modeling techniques in real-world scenarios",
        "Enhanced skills in cutting-edge AI/ML technologies and practical applications"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="company">{exp.company}</span>
              <span className="period">{exp.period}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="achievements-list">
              {exp.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 