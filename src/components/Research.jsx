import React, { useState } from 'react';
import { researchPillars } from '../data/research';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function Research({ onSelectDomain }) {
  const [activePillarId, setActivePillarId] = useState(researchPillars[0].id);

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
              <span className="pillar-tab-index">0{idx + 1}</span>
              <span className="pillar-tab-title">{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Detailed Card */}
        <div className="pillar-detail-card">
          <div className="pillar-header-group">
            <span className="pillar-badge">Research Program 0{researchPillars.findIndex(p => p.id === activePillar.id) + 1}</span>
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
