import React from 'react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="academic-container hero-grid">
        {/* Left Column: Portrait & Minimal Text Links (No Icons/Images) */}
        <div className="hero-portrait-col">
          <div className="portrait-frame">
            <img 
              src="/rc_scholar_portrait.jpeg" 
              alt="Romit Chakraborty" 
              className="portrait-img" 
            />
          </div>

          <div className="hero-text-links">
            <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              Point Reyes Sound ↗
            </a>
            <a href={profileData.links.googleScholar} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              Google Scholar ↗
            </a>
            <a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              GitHub ↗
            </a>
            <a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              ORCID ↗
            </a>
            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Column: Clean Bio & Point Reyes Sound Affiliation */}
        <div className="hero-content-col">
          <h1 className="hero-name">Romit Chakraborty</h1>
          <div className="hero-subtitle">
            <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer" className="prs-affiliation-link">
              Point Reyes Sound, Inc.
            </a>
          </div>

          <p className="hero-bio">
            I am a computational quantum chemist and AI researcher specializing in <strong>non-equilibrium electronic structure</strong>, <strong>kinetic transport theory</strong>, and <strong>fault-tolerant quantum computing (FTQC)</strong>.
          </p>

          <p className="hero-bio">
            My work develops mathematical formulations and performant simulation pipelines that resolve fundamental bottlenecks in electronic structure theory—spanning from <strong>Quantum Boltzmann Equation (QBE-SCF)</strong> entropic regularization to block-encoded qubitization and physics-grounded generative foundation models.
          </p>

          <p className="hero-bio" style={{ marginBottom: 0 }}>
            Ph.D. in Theoretical & Computational Chemistry from the <strong>University of Chicago</strong> (Advisor: Prof. David A. Mazziotti) and postdoctoral training at <strong>UC Berkeley</strong> and <strong>Lawrence Berkeley National Laboratory</strong> (Advisor: Prof. Martin Head-Gordon).
          </p>

          <div className="hero-contact-row">
            <span className="contact-label">Contact:</span>
            <a href={`mailto:${profileData.email}`} className="contact-email">
              {profileData.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
