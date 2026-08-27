import React from 'react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { publicationsData } from '../data/publications';
import { awardsData, membershipsData, peerReviewData } from '../data/awards';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(6px)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-card)',
        color: 'var(--text-primary)',
        width: '100%',
        maxWidth: '900px',
        maxHeight: '90vh',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Modal Top Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-secondary)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              Curriculum Vitae — Romit Chakraborty, Ph.D.
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Updated August 2026
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a 
              href="/cv.pdf" 
              download="Romit_Chakraborty_CV.pdf"
              className="btn-primary"
              style={{ fontSize: '0.82rem', padding: '6px 12px' }}
            >
              ⬇️ Download PDF
            </a>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '6px 12px',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem'
              }}
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div style={{ padding: '36px', overflowY: 'auto', lineHeight: '1.6' }}>
          {/* Header Info */}
          <div style={{ textAlign: 'center', marginBottom: '28px', borderBottom: '2px solid var(--border-subtle)', paddingBottom: '20px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '6px' }}>Romit Chakraborty, Ph.D.</h1>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', margin: 0 }}>
              {profileData.phone} &bull; {profileData.email} &bull; <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">www.pointreyessound.com</a>
            </p>
          </div>

          {/* Profile Statement */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--uchicago-maroon)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '10px' }}>
              Professional Profile
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
              {profileData.shortBio}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--uchicago-maroon)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '10px' }}>
              Education & Postdoctoral Training
            </h3>
            {profileData.pedigree.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>{item.institution}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>{item.years}</span>
                </div>
                <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {item.role} {item.advisor ? `— Advisor: ${item.advisor}` : ''}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--uchicago-maroon)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '10px' }}>
              Professional Experience
            </h3>
            {experienceData.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>{exp.organization} — {exp.role}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.94rem' }}>
                  {exp.highlights.map((hl, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Publications Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--uchicago-maroon)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '10px' }}>
              Selected Publications ({publicationsData.length} Total)
            </h3>
            <ol style={{ paddingLeft: '20px', fontSize: '0.94rem' }}>
              {publicationsData.map((pub) => (
                <li key={pub.id} style={{ marginBottom: '8px' }}>
                  <strong>{pub.authors}</strong> ({pub.year}). {pub.title}. <em>{pub.journal}</em>.
                </li>
              ))}
            </ol>
          </div>

          {/* Awards */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--uchicago-maroon)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '10px' }}>
              Awards, Fellowships, & Grants
            </h3>
            <ul style={{ paddingLeft: '20px', fontSize: '0.94rem' }}>
              {awardsData.map((aw, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>
                  <strong>{aw.year}:</strong> {aw.title} ({aw.organization})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
