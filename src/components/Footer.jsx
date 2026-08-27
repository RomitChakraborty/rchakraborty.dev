import React from 'react';
import { profileData } from '../data/profile';

export default function Footer({ onOpenCV }) {
  return (
    <footer className="academic-footer">
      <div className="academic-container">
        <div className="footer-grid">
          {/* Brand & Mission */}
          <div className="footer-brand">
            <h3>Romit Chakraborty, Ph.D.</h3>
            <p>
              Computational Quantum Chemist & AI Researcher. Founder & Chief Scientific Officer at <strong>Point Reyes Sound, Inc.</strong>
            </p>
            <p style={{ marginTop: '12px', fontSize: '0.88rem' }}>
              UChicago (Ph.D. '17) &bull; UC Berkeley / LBNL Postdoc ('23) &bull; IIT Bombay ('12)
            </p>
          </div>

          {/* Core Portals & Links */}
          <div className="footer-col">
            <h4>Research & Portals</h4>
            <ul>
              <li><a href="#about">About & Provenance</a></li>
              <li><a href="#research">Research Pillars</a></li>
              <li><a href="#publications">Publications & Preprints</a></li>
              <li><a href="#experience">Professional Experience</a></li>
              <li><button onClick={onOpenCV} style={{ background: 'none', border: 'none', color: '#c9c7c2', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-serif)', fontSize: '0.92rem' }}>Curriculum Vitae</button></li>
            </ul>
          </div>

          {/* External Repos & Affiliations */}
          <div className="footer-col">
            <h4>Code & Profiles</h4>
            <ul>
              <li><a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">Point Reyes Sound, Inc. &rarr;</a></li>
              <li><a href={profileData.links.prsGithub} target="_blank" rel="noopener noreferrer">Point Reyes Sound (GitHub)</a></li>
              <li><a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer">Personal GitHub (@RomitChakraborty)</a></li>
              <li><a href={profileData.links.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
              <li><a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer">ORCID Record</a></li>
              <li><a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Romit Chakraborty, Ph.D. All rights reserved.
          </div>
          <div>
            Designed with EB Garamond &bull; Hosted on <a href="https://www.rchakraborty.dev" style={{ color: '#a09d96' }}>rchakraborty.dev</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
