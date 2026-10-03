import React from 'react';
import { profileData } from '../data/profile';

export default function Footer({ onOpenCV }) {
  return (
    <footer className="academic-footer">
      {/* Upper Blue Band of similar thickness */}
      <div className="footer-top-band" aria-hidden="true" />

      {/* Middle White Band with Blue Text */}
      <div className="footer-middle-band">
        <div className="academic-container footer-inner">
          <div className="footer-left">
            <div className="footer-name">Romit Chakraborty</div>
            <div className="footer-affiliation">
              Founder and CEO,{' '}
              <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">
                Point Reyes Sound, Inc.
              </a>
            </div>
            <div className="footer-pedigree">
              University of Chicago (Ph.D. '17) &bull; UC Berkeley & LBNL Postdoc ('23) &bull; PsiQuantum (2025) &bull; IIT Bombay ('12)
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">Point Reyes Sound <span className="ext-arrow">↗</span></a>
              <a href={profileData.links.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar <span className="ext-arrow">↗</span></a>
              <a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer">GitHub <span className="ext-arrow">↗</span></a>
              <a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer">ORCID <span className="ext-arrow">↗</span></a>
              <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span className="ext-arrow">↗</span></a>
              <button onClick={onOpenCV} className="footer-cv-btn">Curriculum Vitae</button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Blue Band with Single Contact Email and Copyright */}
      <div className="footer-bottom-bar">
        <div className="academic-container footer-bottom-inner">
          <div className="footer-contact-row">
            <span className="contact-label">Contact:</span>
            <a href="mailto:romit@pointreyessound.com" className="contact-email">
              romit@pointreyessound.com
            </a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Romit Chakraborty. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
