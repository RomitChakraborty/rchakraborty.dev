import React from 'react';

export default function Navbar({ activeSection, theme, onToggleTheme, onOpenCV }) {
  return (
    <>
      {/* Top Quiet Ribbon */}
      <div className="top-ribbon">
        <div className="academic-container">
          <div className="ribbon-pedigree">
            <span>University of Chicago (Ph.D.) &bull; UC Berkeley & LBNL &bull; Point Reyes Sound, Inc.</span>
          </div>
          <div className="ribbon-links">
            <a href="https://www.pointreyessound.com" target="_blank" rel="noopener noreferrer" className="ribbon-link">
              pointreyessound.com ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="academic-navbar">
        <div className="academic-container navbar-inner">
          <div className="nav-brand">
            <a href="#about" className="brand-title">Romit Chakraborty, Ph.D.</a>
            <span className="brand-subtitle">Theoretical Chemistry & AI</span>
          </div>

          <div className="nav-menu">
            <a href="#about" className="nav-item">About</a>
            <a href="#research" className="nav-item">Research</a>
            <a href="#publications" className="nav-item">Publications</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#awards" className="nav-item">Honors</a>
            <a href="#talks" className="nav-item">Talks</a>
          </div>

          <div className="nav-actions">
            <button 
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button 
              className="nav-cv-btn"
              onClick={onOpenCV}
            >
              Curriculum Vitae
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
