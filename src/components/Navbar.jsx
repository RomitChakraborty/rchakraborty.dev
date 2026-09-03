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
            Romit Chakraborty
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-menu-group desktop-only">
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
          <a href="#research" className="mobile-nav-link" onClick={handleNavClick}>
            Research
          </a>
          <a href="#publications" className="mobile-nav-link" onClick={handleNavClick}>
            Publications
          </a>
          <button 
            className="mobile-nav-link mobile-nav-cv"
            onClick={handleCVClick}
          >
            Curriculum Vitae 📄
          </button>
        </div>
      </div>
    </nav>
  );
}
