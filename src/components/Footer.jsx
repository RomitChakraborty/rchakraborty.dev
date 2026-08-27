import React from 'react';
import { profileData } from '../data/profile';

export default function Footer({ onOpenCV }) {
  return (
    <footer className="academic-footer">
      <div className="academic-container footer-inner">
        <div className="footer-left">
          <div className="footer-name">Romit Chakraborty</div>
          <div className="footer-affiliation">
            <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">
              Point Reyes Sound, Inc.
            </a>
          </div>
          <div className="footer-pedigree">
            University of Chicago (Ph.D. '17) &bull; UC Berkeley & LBNL Postdoc ('23) &bull; IIT Bombay ('12)
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer">Point Reyes Sound ↗</a>
            <a href={profileData.links.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
            <a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer">ORCID ↗</a>
            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <button onClick={onOpenCV} className="footer-cv-btn">Curriculum Vitae</button>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Romit Chakraborty. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
