import React from 'react';

export default function Navbar({ onOpenCV }) {
  return (
    <nav className="academic-navbar">
      <div className="academic-container navbar-inner">
        <div className="nav-brand">
          <a href="#about" className="brand-title">Romit Chakraborty</a>
          <a href="https://www.pointreyessound.com" target="_blank" rel="noopener noreferrer" className="brand-subtitle">
            Point Reyes Sound, Inc.
          </a>
        </div>

        <div className="nav-menu">
          <a href="#about" className="nav-item">About</a>
          <a href="#research" className="nav-item">Research</a>
          <a href="#publications" className="nav-item">Publications</a>
        </div>

        <div className="nav-actions">
          <button 
            className="nav-cv-btn"
            onClick={onOpenCV}
          >
            Curriculum Vitae
          </button>
        </div>
      </div>
    </nav>
  );
}
