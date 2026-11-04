import React, { useState } from 'react';
import { manifestosData } from '../data/manifestos';

export default function Manifestos() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="manifestos" className="section-wrapper manifestos-section">
      <div className="academic-container">
        <div className="section-header">
          <div className="section-kicker">EXECUTIVE THOUGHT LEADERSHIP &bull; POINT REYES SOUND</div>
          <h2 className="section-title">The Executive Manifestos</h2>
          <p className="section-subtitle">
            Translating fundamental kinetic transport theory into industrial sovereignty and category-defining computational advantage.
          </p>
        </div>

        <div className="manifestos-grid">
          {manifestosData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article key={item.id} className={`manifesto-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="manifesto-header">
                  <div className="manifesto-meta">
                    <span className="manifesto-num">{item.number}</span>
                    <span className="manifesto-badge">{item.category}</span>
                    <span className="manifesto-read-time">{item.readTime}</span>
                  </div>
                  <h3 className="manifesto-title">{item.title}</h3>
                  <p className="manifesto-subtitle">{item.subtitle}</p>
                </div>

                <div className="manifesto-hook-box">
                  <p className="manifesto-hook-text">{item.hook}</p>
                </div>

                <p className="manifesto-abstract">{item.abstract}</p>

                {isExpanded && (
                  <div className="manifesto-expanded-content">
                    <div className="manifesto-theses">
                      <h4 className="theses-title">Key Strategic Theses:</h4>
                      <ul className="theses-list">
                        {item.keyTheses.map((thesis, idx) => (
                          <li key={idx}>
                            <span className="thesis-marker">&bull;</span>
                            <span>{thesis}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="manifesto-audience">
                      <strong>Target Stakeholders:</strong> {item.audience}
                    </div>
                  </div>
                )}

                <div className="manifesto-footer">
                  <button 
                    type="button" 
                    className="manifesto-toggle-btn"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {isExpanded ? 'Collapse Analysis ↑' : 'Read Full Thesis Breakdown ↓'}
                  </button>

                  {item.doiOrLink && (
                    <a 
                      href={item.doiOrLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="manifesto-ext-link"
                    >
                      {item.linkText || 'Inspect Verification ↗'}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
