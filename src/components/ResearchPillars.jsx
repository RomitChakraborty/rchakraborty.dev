import React from 'react';
import { BlockMath } from 'react-katex';
import { researchPillars } from '../data/research';

export default function ResearchPillars() {
  return (
    <section id="research" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Research Pillars & Methodologies</h2>
            <p className="section-subtitle">Theoretical Formulations, Kinetic Transport, Fault-Tolerant Algorithms & AI</p>
          </div>
        </div>

        <div className="research-grid">
          {researchPillars.map((pillar, index) => (
            <div key={pillar.id} className="research-card">
              <span className="pillar-number">Focus Area {index + 1}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <div className="pillar-subtitle">{pillar.subtitle}</div>

              <p className="pillar-overview">{pillar.overview}</p>

              {pillar.latexEq && (
                <div className="equation-box">
                  <BlockMath math={pillar.latexEq} />
                </div>
              )}

              <ul className="contributions-list">
                {pillar.keyContributions.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="pillar-footer">
                <div className="pillar-papers">
                  <strong>Key References:</strong> {pillar.relevantPapers?.join(' • ')}
                </div>
                {pillar.githubRepo && (
                  <a 
                    href={pillar.githubRepo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pub-action-btn"
                  >
                    💻 Code Repository &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
