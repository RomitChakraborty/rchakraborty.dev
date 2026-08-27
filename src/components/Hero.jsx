import React from 'react';
import { profileData } from '../data/profile';

export default function Hero({ onOpenCV }) {
  return (
    <section id="about" className="hero-section">
      <div className="academic-container hero-grid">
        {/* Left Column: Portrait & Minimal Academic Links */}
        <div className="hero-portrait-col">
          <div className="portrait-frame">
            <img 
              src="/rc_scholar_portrait.jpeg" 
              alt="Romit Chakraborty, Ph.D." 
              className="portrait-img" 
            />
          </div>

          <div className="hero-minimal-links">
            <a href={profileData.links.googleScholar} target="_blank" rel="noopener noreferrer" className="minimal-link">
              Scholar ↗
            </a>
            <span className="link-divider">&bull;</span>
            <a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer" className="minimal-link">
              GitHub ↗
            </a>
            <span className="link-divider">&bull;</span>
            <a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer" className="minimal-link">
              ORCID ↗
            </a>
            <span className="link-divider">&bull;</span>
            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="minimal-link">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Column: Bio, Academic Credentials & Clean Actions */}
        <div className="hero-content-col">
          <h1 className="hero-name">{profileData.name}</h1>
          <p className="hero-tagline">
            Founder & Chief Scientific Officer, <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer" className="inline-prs-link">Point Reyes Sound, Inc.</a>
          </p>

          <p className="hero-bio">
            I am a computational quantum chemist and AI researcher specializing in <strong>non-equilibrium electronic structure</strong>, <strong>kinetic transport theory</strong>, and <strong>fault-tolerant quantum computing (FTQC)</strong>.
          </p>

          <p className="hero-bio">
            My work develops mathematical frameworks and high-performance algorithms that resolve fundamental bottlenecks in electronic structure theory—spanning from <strong>Quantum Boltzmann Equation (QBE-SCF)</strong> entropic regularization to block-encoded qubitization and physics-grounded generative foundation models.
          </p>

          {/* Clean Academic Pedigree List (No Heavy Boxes) */}
          <div className="pedigree-clean-list">
            <div className="pedigree-row">
              <span className="pedigree-inst">University of Chicago</span>
              <span className="pedigree-detail">Ph.D. in Theoretical Chemistry (Advisor: Prof. David A. Mazziotti)</span>
            </div>
            <div className="pedigree-row">
              <span className="pedigree-inst">UC Berkeley & Lawrence Berkeley National Lab</span>
              <span className="pedigree-detail">Postdoctoral Fellow in Computational Materials Science (Advisor: Prof. Martin Head-Gordon)</span>
            </div>
            <div className="pedigree-row">
              <span className="pedigree-inst">IIT Bombay &bull; St. Stephen's College</span>
              <span className="pedigree-detail">M.Sc. Chemistry &bull; B.Sc. (Hons) Chemistry, Physics & Mathematics</span>
            </div>
          </div>

          {/* Clean Focused CTAs */}
          <div className="hero-actions-clean">
            <button onClick={onOpenCV} className="btn-primary">
              📄 View Curriculum Vitae
            </button>
            <a 
              href={profileData.links.prsWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              🏢 Point Reyes Sound ↗
            </a>
            <a 
              href={`mailto:${profileData.email}`} 
              className="hero-email-link"
            >
              ✉️ {profileData.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
