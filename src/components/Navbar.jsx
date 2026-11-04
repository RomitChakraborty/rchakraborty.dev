import React, { useState } from 'react';

export default function Navbar({ onOpenCV }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleCVClick = () => {
    setMobileMenuOpen(false);
    onOpenCV();
  };

  return (
    <nav className="academic-navbar">
      <div className="academic-container navbar-inner">
        <div className="nav-brand">
          <a href="#about" className="brand-title" onClick={handleNavClick}>
            Romit Chakraborty, Ph.D.
          </a>
          <span className="brand-badge-tag">Point Reyes Sound</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-menu-group desktop-only">
          <a href="#about" className="nav-tab">About</a>
          <a href="#venture" className="nav-tab highlight-venture">Venture</a>
          <a href="#manifestos" className="nav-tab highlight-manifestos">Manifestos</a>
          <a href="#lineage" className="nav-tab">Lineage</a>
          <a href="#research" className="nav-tab">Research</a>
          <a href="#publications" className="nav-tab">Publications</a>
          <button 
            type="button"
            onClick={handleCVClick}
            className="nav-tab nav-tab-cv"
            title="Curriculum Vitae (PDF & Interactive)"
          >
            Curriculum Vitae <span className="ext-arrow">↗</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`nav-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer / Dropdown */}
      <div className={`mobile-nav-dropdown ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="academic-container mobile-nav-content">
          <a href="#about" className="mobile-nav-link" onClick={handleNavClick}>
            About
          </a>
          <a href="#venture" className="mobile-nav-link" onClick={handleNavClick}>
            Venture (Point Reyes Sound)
          </a>
          <a href="#manifestos" className="mobile-nav-link" onClick={handleNavClick}>
            Executive Manifestos
          </a>
          <a href="#lineage" className="mobile-nav-link" onClick={handleNavClick}>
            Career Lineage
          </a>
          <a href="#research" className="mobile-nav-link" onClick={handleNavClick}>
            Research Program
          </a>
          <a href="#publications" className="mobile-nav-link" onClick={handleNavClick}>
            Publications
          </a>
          <button 
            type="button"
            onClick={handleCVClick}
            className="mobile-nav-link mobile-cv-btn"
          >
            Curriculum Vitae ↗
          </button>
        </div>
      </div>
    </nav>
  );
}
