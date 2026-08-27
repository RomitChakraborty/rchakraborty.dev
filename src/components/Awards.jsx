import React from 'react';
import { awardsData, peerReviewData, membershipsData } from '../data/awards';

export default function Awards() {
  return (
    <section id="awards" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Honors, Fellowships & Service</h2>
            <p className="section-subtitle">Grants, Professional Leadership, and Editorial Contributions</p>
          </div>
        </div>

        {/* Awards & Fellowships */}
        <div className="awards-grid" style={{ marginBottom: '40px' }}>
          {awardsData.map((award, idx) => (
            <div key={idx} className="award-card">
              <div className="award-year">{award.year}</div>
              <h3 className="award-title">{award.title}</h3>
              <div className="award-org">{award.organization}</div>
              {award.description && <p className="award-desc">{award.description}</p>}
            </div>
          ))}
        </div>

        {/* Professional Service & Memberships */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div className="affiliations-box" style={{ margin: 0 }}>
            <div className="affiliations-title">Peer Review Service</div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {peerReviewData.map((pr, i) => (
                <li key={i} style={{ marginBottom: '8px', fontSize: '0.98rem' }}>
                  <strong>{pr.journal}</strong> <span style={{ color: 'var(--text-muted)' }}>({pr.years})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="affiliations-box" style={{ margin: 0 }}>
            <div className="affiliations-title">Professional Memberships & Leadership</div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {membershipsData.map((mem, i) => (
                <li key={i} style={{ marginBottom: '10px', fontSize: '0.96rem', lineHeight: '1.4' }}>
                  <strong>{mem.organization}</strong>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{mem.details}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
