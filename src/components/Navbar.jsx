import React from 'react';

export default function Navbar({ activeSection, theme, onToggleTheme, onOpenCV }) {
  return (
    <>
      {/* Top Institutional Ribbon */}
      <div className="top-ribbon">
        <div className="academic-container">
          <div className="ribbon-pedigree">
            <span className="ribbon-tag">University of Chicago (Ph.D.) &bull; UC Berkeley &bull; Lawrence Berkeley National Lab</span>
          </div>
          <div className="ribbon-links">
            <a href="https://www.pointreyessound.com" target="_blank" rel="noopener noreferrer" className="ribbon-link">
              Point Reyes Sound, Inc. &rarr;
            </a>
            <a href="https://github.com/RomitChakraborty" target="_blank" rel="noopener noreferrer" className="ribbon-link">
              GitHub (Personal)
            </a>
            <a href="https://github.com/point-reyes-sound" target="_blank" rel="noopener noreferrer" className="ribbon-link">
              GitHub (PRS Org)
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav className="academic-navbar">
        <div className="academic-container navbar-inner">
          <div className="nav-brand">
            <a href="#about" className="brand-title">Romit Chakraborty, Ph.D.</a>
            <span className="brand-subtitle">Computational Quantum Chemist & AI Researcher</span>
          </div>

          <div className="nav-menu">
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#research" className={`nav-item ${activeSection === 'research' ? 'active' : ''}`}>Research</a>
            <a href="#publications" className={`nav-item ${activeSection === 'publications' ? 'active' : ''}`}>Publications</a>
            <a href="#experience" className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
            <a href="#awards" className={`nav-item ${activeSection === 'awards' ? 'active' : ''}`}>Awards</a>
            <a href="#talks" className={`nav-item ${activeSection === 'talks' ? 'active' : ''}`}>Talks</a>
          </div>

          <div className="nav-actions">
            <button 
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>

            <button 
              className="nav-cv-btn"
              onClick={onOpenCV}
            >
              📄 Curriculum Vitae
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
