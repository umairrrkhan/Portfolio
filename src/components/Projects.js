import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "English TextGen: End-to-End Text Generation using Fine-Tuned GPT-2",
      description: "Developed an end-to-end text generation model using a fine-tuned GPT-2 architecture, trained on a 39 million token subset of the Common Corpus dataset. The model achieves state-of-the-art performance in generating coherent and relevant English text, with applications in language translation, chatbots, and content generation.",
      skills: ["Python", "Transformers", "GPT-2", "NLP"],
      github: "https://github.com/umairrrkhan/End-to-End-Text-Processing-and-Generation-using-GPT-2",
      demo: "https://huggingface.co/spaces/umairrrkhan/english-text-generation"
    },
    {
      title: "Moneyball Linear Regression Model",
      description: "Built a model predicting player value with 80% accuracy based on MLB performance statistics. Deployed on Hugging Face, enabling real-time predictions with 2s response time.",
      skills: ["Python", "PyTorch", "Gradio", "ML"],
      github: "https://huggingface.co/spaces/umairrrkhan/Moneyball",
      demo: "https://huggingface.co/spaces/umairrrkhan/Moneyball"
    },
    {
      title: "African Banking Crisis Prediction",
      description: "Constructed a predictive model for banking crises using machine learning techniques and economic data. Performed data preprocessing and feature engineering to enhance model performance. Visualized key trends and model predictions using Plotly Express to interpret results effectively.",
      skills: ["Python", "Scikit-Learn", "Pandas", "Plotly Express", "Machine Learning"],
      github: "https://github.com/umairrrkhan/African-Banking-Crisis-Prediction"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiGithub /> Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FiExternalLink /> Demo
                </a>
              )}
            </div>
            <div className="skills-container">
              {project.skills.map((skill, skillIndex) => (
                <span className="skill-tag" key={skillIndex}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 