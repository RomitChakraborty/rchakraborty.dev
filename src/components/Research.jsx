import React, { useState } from 'react';
import { researchPillars } from '../data/research';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function getPillarGlyph(id) {
  switch(id) {
    case 'qbe-scf':
      return (
        <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
          <path d="M4 12c4-8 12-8 16 0" />
          <path d="M4 12c4 8 12 8 16 0" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      );
    case 'agentic-ai':
      return (
        <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
        </svg>
      );
    case 'mof-simulations':
      return (
        <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 21 8.5 21 15.5 12 22 3 15.5 3 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="12" y1="12" x2="21" y2="8.5" />
          <line x1="12" y1="12" x2="3" y2="8.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'generalized-pauli':
      return (
        <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 22 8.5 18 21 6 21 2 8.5 12 2" />
          <line x1="12" y1="2" x2="18" y2="21" strokeDasharray="2 2" />
          <line x1="12" y1="2" x2="6" y2="21" strokeDasharray="2 2" />
          <line x1="2" y1="8.5" x2="22" y2="8.5" strokeDasharray="2 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Research({ selectedPillarId, onSelectDomain }) {
  const [activePillarId, setActivePillarId] = useState(researchPillars[0].id);

  React.useEffect(() => {
    if (selectedPillarId) {
      setActivePillarId(selectedPillarId);
    }
  }, [selectedPillarId]);

  const activePillar = researchPillars.find(p => p.id === activePillarId) || researchPillars[0];

  const handlePillarClick = (pillar) => {
    setActivePillarId(pillar.id);
  };

  const handleExploreAll = (categoryKey) => {
    if (onSelectDomain) {
      onSelectDomain(categoryKey);
    }
    const pubSection = document.getElementById('publications');
    if (pubSection) {
      pubSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="research" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <h2 className="section-title">Research Program</h2>
          <p className="section-subtitle">
            Theoretical Formulations, Kinetic Transport Solvers, and Materials Simulations
          </p>
        </div>

        {/* 4 Differentiated Research Area Tabs */}
        <div className="research-pillar-tabs">
          {researchPillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              className={`pillar-tab-btn ${activePillar.id === pillar.id ? 'active' : ''}`}
              onClick={() => handlePillarClick(pillar)}
            >
              <div className="pillar-tab-top">
                <span className="pillar-tab-index">0{idx + 1}</span>
                {getPillarGlyph(pillar.id)}
              </div>
              <span className="pillar-tab-title">{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Detailed Card */}
        <div className="pillar-detail-card">
          <div className="pillar-header-group">
            <div className="pillar-header-meta">
              <span className="pillar-badge">
                {getPillarGlyph(activePillar.id)}
                <span>Program 0{researchPillars.findIndex(p => p.id === activePillar.id) + 1}</span>
              </span>
              <span className="pillar-status-chip">● Peer-Reviewed & Active</span>
            </div>
            <h3 className="pillar-main-title">{activePillar.title}</h3>
            <div className="pillar-sub-title">{activePillar.subtitle}</div>
          </div>

          <p className="pillar-overview-text">
            {activePillar.overview}
          </p>

          {/* Mathematical Formulation */}
          {activePillar.latexEq && (
            <div className="pillar-math-box">
              <div className="math-label">Governing Dynamics:</div>
              <BlockMath math={activePillar.latexEq} />
            </div>
          )}

          {/* Key Methodologies & Contributions */}
          <div className="pillar-contributions">
            <h4 className="contributions-heading">Core Scientific Methodologies:</h4>
            <ul className="contributions-ul">
              {activePillar.keyContributions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Relevant Materials & Curated Links */}
          <div className="pillar-materials-section">
            <div className="materials-header">
              <h4 className="materials-heading">Relevant Materials & Publications:</h4>
              <button 
                className="filter-pubs-action-btn" 
                onClick={() => handleExploreAll(activePillar.categoryKey)}
              >
                Browse All Related Papers Below ↓
              </button>
            </div>

            <div className="materials-grid">
              {activePillar.materials.map((mat, i) => (
                <a 
                  key={i} 
                  href={mat.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="material-link-card"
                >
                  <div className="material-link-header">
                    <span className="material-badge">{mat.badge || mat.type}</span>
                    <span className="material-arrow">↗</span>
                  </div>
                  <div className="material-link-label">{mat.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
