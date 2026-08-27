import React from 'react';
import { talksData } from '../data/awards';

export default function MediaTalks() {
  return (
    <section id="talks" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Invited Talks & Seminars</h2>
            <p className="section-subtitle">Conference Keynotes, Departmental Colloquia, and Recorded Lectures</p>
          </div>
        </div>

        <div className="research-grid">
          {talksData.map((talk) => (
            <div key={talk.id} className="research-card">
              <span className="pillar-number">{talk.date} &bull; {talk.venue}</span>
              <h3 className="pillar-title" style={{ fontSize: '1.28rem', marginBottom: '12px' }}>
                {talk.title}
              </h3>
              <p className="pillar-overview" style={{ marginBottom: '16px' }}>
                {talk.description}
              </p>

              <div className="pillar-footer">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Invited Presentation
                </span>
                {talk.youtubeId && (
                  <a 
                    href={`https://www.youtube.com/watch?v=${talk.youtubeId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pub-action-btn"
                  >
                    ▶️ Watch Video &rarr;
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
