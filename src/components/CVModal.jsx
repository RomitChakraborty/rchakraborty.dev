import React from 'react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { publishedPapers } from '../data/publishedPapers';
import { awardsData } from '../data/awards';

export default function CVModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = React.useState('pdf'); // 'pdf' | 'html'

  if (!isOpen) return null;

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cv-modal-header">
          <div>
            <h3 className="cv-modal-title">Curriculum Vitae — Romit Chakraborty</h3>
            <span className="cv-modal-subtitle">Official 3-Page XeLaTeX Vector Document (Updated October 2026)</span>
          </div>

          <div className="cv-modal-controls">
            <div className="cv-mode-toggle">
              <button 
                type="button"
                className={`cv-mode-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                onClick={() => setViewMode('pdf')}
              >
                Vector PDF (4 Pages)
              </button>
              <button 
                type="button"
                className={`cv-mode-btn ${viewMode === 'html' ? 'active' : ''}`}
                onClick={() => setViewMode('html')}
              >
                HTML Overview
              </button>
            </div>

            <a 
              href="/cv.pdf" 
              download="Romit_Chakraborty_CV.pdf"
              className="cv-download-btn"
              title="Download official 3-page PDF"
            >
              ⬇️ Download PDF
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cv-open-btn"
              title="Open PDF in new browser tab"
            >
              Open PDF ↗
            </a>
            <button onClick={onClose} className="cv-close-btn" aria-label="Close CV">
              ✕ Close
            </button>
          </div>
        </div>

        {/* Modal Content */}
        {viewMode === 'pdf' ? (
          <div className="cv-modal-body cv-pdf-body">
            <object 
              data="/cv.pdf#toolbar=1&navpanes=1" 
              type="application/pdf" 
              className="cv-pdf-frame"
            >
              <iframe 
                src="/cv.pdf#toolbar=1" 
                title="Curriculum Vitae — Romit Chakraborty" 
                className="cv-pdf-frame"
              >
                <div className="cv-pdf-fallback">
                  <p>Your browser does not support inline PDF viewing.</p>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-download-btn">
                    Open 3-Page CV (PDF) ↗
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        ) : (
          <div className="cv-modal-body">
          <div className="cv-paper-header">
            <h1>Romit Chakraborty</h1>
            <p>
              {profileData.phone} &bull; <a href="mailto:romit@pointreyessound.com">romit@pointreyessound.com</a> &bull; <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">www.pointreyessound.com</a>
            </p>
          </div>

          <section className="cv-section">
            <h2>Professional Profile</h2>
            <p>{profileData.shortBio}</p>
          </section>

          <section className="cv-section">
            <h2>Education & Postdoctoral Training</h2>
            {profileData.pedigree.map((item, idx) => (
              <div key={idx} className="cv-item">
                <div className="cv-item-top">
                  <strong>{item.institution}</strong>
                  <span className="cv-years">{item.years}</span>
                </div>
                <div className="cv-item-sub">
                  {item.role} {item.advisor ? `— Advisor: ${item.advisor}` : ''}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>Professional Experience</h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="cv-item">
                <div className="cv-item-top">
                  <strong>{exp.organization} — {exp.role}</strong>
                  <span className="cv-years">{exp.period}</span>
                </div>
                <ul className="cv-highlights">
                  {exp.highlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>Published Works ({publishedPapers.length} Total)</h2>
            <ol className="cv-pub-list">
              {publishedPapers.map((pub) => (
                <li key={pub.id}>
                  <strong>{pub.authors}</strong> ({pub.year}). <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a>. <em>{pub.journal}</em>. DOI: {pub.doi}
                </li>
              ))}
            </ol>
          </section>

          <section className="cv-section">
            <h2>Awards, Fellowships, & Grants</h2>
            <ul className="cv-highlights">
              {awardsData.map((aw, i) => (
                <li key={i}>
                  <strong>{aw.year}:</strong> {aw.title} ({aw.organization})
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
      </div>
    </div>
  );
}
