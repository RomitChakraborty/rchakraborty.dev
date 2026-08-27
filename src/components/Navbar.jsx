import React from 'react';

export default function Navbar({ onOpenCV }) {
  return (
    <nav className="academic-navbar">
      <div className="academic-container navbar-inner">
        <div className="nav-brand">
          <a href="#about" className="brand-title">Romit Chakraborty</a>
        </div>

        <div className="nav-menu-group">
          <a href="#about" className="nav-tab">About</a>
          <a href="#research" className="nav-tab">Research</a>
          <a href="#publications" className="nav-tab">Publications</a>
          <button 
            className="nav-tab nav-tab-cv"
            onClick={onOpenCV}
          >
            Curriculum Vitae
          </button>
        </div>
      </div>
    </nav>
  );
}
