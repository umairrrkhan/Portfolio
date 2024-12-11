import React, { useState } from 'react';
import './App.css';
import { FiGithub, FiLinkedin, FiMail, FiCopy, FiCheck } from 'react-icons/fi';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const [copied, setCopied] = useState(false);
  const email = "umairh1819@gmail.com";
  const githubUrl = "https://github.com/umairrrkhan";
  const linkedinUrl = "https://www.linkedin.com/in/umairkhannn";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="App">
      <nav className="nav-container">
        <div className="nav-logo">
          <span className="attention-text">ATTENTION</span>
          <span className="is-text">IS</span>
          <span className="all-text">ALL</span>
          <span className="you-need-text">YOU NEED</span>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hey, I'm Umair Khan</h1>
          <p className="hero-subtitle">
            Building AI systems that solve real-world problems, 
            with a focus on Natural Language Processing and Machine Learning.
          </p>
          <div className="social-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin />
            </a>
            <div className="email-container">
              <button className="social-link email-button" onClick={handleCopyEmail}>
                <FiMail />
                {copied ? <FiCheck className="copy-icon" /> : <FiCopy className="copy-icon" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Education />
      <Experience />
      <section id="now" className="section">
        <h2 className="section-title">What I'm Doing Now</h2>
        <div className="now-grid">
          <div className="now-card">
            <h3>Building</h3>
            <p>Junior Software Engineer at Quick Engineering Solutions</p>
          </div>
          <div className="now-card">
            <h3>Learning</h3>
            <p>Deep diving into NLP and Machine Learning</p>
          </div>
          <div className="now-card">
            <h3>Exploring</h3>
            <p>New ways to make AI more accessible and practical</p>
          </div>
        </div>
      </section>

      <Projects />

      <section className="contact-section">
        <p className="contact-text">
          Shoot me a message on{' '}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
          or email me at{' '}
          <button onClick={handleCopyEmail} className="email-link">
            umairh1819@gmail.com
            {copied && <span className="copied-text">Copied!</span>}
          </button>
          {' '}to connect.
        </p>
      </section>
    </div>
  );
}

export default App;
