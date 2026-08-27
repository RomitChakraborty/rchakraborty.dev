import React from 'react';
import { profileData } from '../data/profile';

export default function Hero({ onOpenCV }) {
  return (
    <section id="about" className="hero-section">
      <div className="academic-container hero-grid">
        {/* Left Column: Portrait & Quick Academic Links */}
        <div className="hero-portrait-col">
          <div className="portrait-frame">
            <img 
              src="/rc_scholar_portrait.jpeg" 
              alt="Romit Chakraborty, Ph.D." 
              className="portrait-img" 
            />
          </div>

          <div className="hero-quick-links">
            <a 
              href={profileData.links.prsWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-link-btn"
            >
              <span>🏢 Point Reyes Sound</span>
              <span>↗</span>
            </a>
            <a 
              href={profileData.links.googleScholar} 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-link-btn"
            >
              <span>🎓 Google Scholar</span>
              <span>↗</span>
            </a>
            <a 
              href={profileData.links.personalGithub} 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-link-btn"
            >
              <span>💻 Personal GitHub</span>
              <span>↗</span>
            </a>
            <a 
              href={profileData.links.prsGithub} 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-link-btn"
            >
              <span>🔬 PRS Lab GitHub</span>
              <span>↗</span>
            </a>
            <a 
              href={profileData.links.orcid} 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-link-btn"
            >
              <span>🆔 ORCID</span>
              <span>↗</span>
            </a>
            <a 
              href={profileData.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-link-btn"
            >
              <span>💼 LinkedIn</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Bio, Academic Credentials & Research Mission */}
        <div className="hero-content-col">
          <span className="hero-eyebrow">Theoretical & Computational Chemistry &bull; AI / ML</span>
          <h1 className="hero-name">{profileData.name}</h1>
          <p className="hero-tagline">{profileData.currentRole}</p>

          <p className="hero-bio">
            I am a computational quantum chemist and AI researcher specializing in <strong>non-equilibrium electronic structure</strong>, <strong>kinetic transport theory</strong>, and <strong>fault-tolerant quantum computing (FTQC)</strong>.
          </p>

          <p className="hero-bio">
            My work develops mathematical formulations and high-performance algorithms that resolve fundamental bottlenecks in electronic structure theory—spanning from <strong>Quantum Boltzmann Equation (QBE-SCF)</strong> entropic regularization to block-encoded qubitization and physics-grounded generative foundation models.
          </p>

          {/* Academic Pedigree Box */}
          <div className="affiliations-box">
            <div className="affiliations-title">Academic Provenance & Leadership</div>
            <div className="affiliations-list">
              {profileData.pedigree.map((item, idx) => (
                <div key={idx} className="affiliation-item">
                  <strong>{item.institution}</strong>
                  <span>{item.role} {item.advisor ? `(Advisor: ${item.advisor})` : ''}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-ctas">
            <button onClick={onOpenCV} className="btn-primary">
              📄 View Full Curriculum Vitae
            </button>
            <a href="#research" className="btn-secondary">
              🔬 Explore Research Pillars
            </a>
            <a href="#publications" className="btn-secondary">
              📚 Browse Publications
            </a>
            <a href={`mailto:${profileData.email}`} className="btn-secondary">
              ✉️ Contact (romit.chakraborty@gmail.com)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
