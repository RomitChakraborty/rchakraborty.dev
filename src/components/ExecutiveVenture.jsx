import React from 'react';
import { profileData } from '../data/profile';

export default function ExecutiveVenture() {
  return (
    <section id="venture" className="section-wrapper venture-section">
      <div className="academic-container">
        <div className="venture-card">
          <div className="venture-card-header">
            <div className="venture-kicker-row">
              <span className="venture-kicker">FLAGSHIP COMMERCIAL ENTERPRISE</span>
              <span className="venture-status-badge">Seed Stage &bull; San Francisco, CA</span>
            </div>

            <div className="venture-title-row">
              <div className="venture-brand-group">
                <img 
                  src="/PRS_logo_v2.jpeg" 
                  alt="Point Reyes Sound Logo" 
                  className="venture-brand-avatar" 
                />
                <div>
                  <h2 className="venture-company-name">Point Reyes Sound, Inc.</h2>
                  <p className="venture-company-slogan">Engineering Electronic Structure for the Next Century</p>
                </div>
              </div>

              <a 
                href={profileData.links.prsWebsite} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="venture-portal-btn"
              >
                Launch Company Portal ↗
              </a>
            </div>
          </div>

          <div className="venture-body-grid">
            <div className="venture-thesis-col">
              <h3 className="venture-block-title">The Foundational Thesis</h3>
              <p className="venture-text">
                Current quantum chemistry solvers are trapped behind an exponential wall: standard mean-field DFT breaks down at chemical reactions, while multireference methods (CASSCF, DMRG) explode factorially $\mathcal{O}(N!)$, capping simulations at approximately 30 active electrons.
              </p>
              <p className="venture-text">
                Point Reyes Sound is commercializing <strong>Quantum Boltzmann Equation Self-Consistent Field (QBE-SCF)</strong> theory. By replacing combinatorial active-space diagonalization with continuous thermodynamic phase-space fluid kinetics, we achieve <strong>deterministic polynomial $\mathcal{O}(N^3)$ computational scaling</strong> with smooth C¹ gradient continuity across topological conical intersections.
              </p>
              
              <div className="venture-pillars-compact">
                <div className="v-pillar">
                  <span className="v-pillar-num">01</span>
                  <div>
                    <strong>Continuous Phase-Space Kinetics</strong>
                    <p>Bhatnagar-Gross-Krook relaxation regularizing Coulson-Fischer singular crossings without combinatorial active spaces.</p>
                  </div>
                </div>
                <div className="v-pillar">
                  <span className="v-pillar-num">02</span>
                  <div>
                    <strong>Fault-Tolerant Quantum Algorithm Compilation</strong>
                    <p>Pre-relaxing active-space density matrices on classical GPUs before quantum circuit synthesis, cutting Toffoli complexity by 1,747×.</p>
                  </div>
                </div>
                <div className="v-pillar">
                  <span className="v-pillar-num">03</span>
                  <div>
                    <strong>Predictive Clean Energy Materials</strong>
                    <p>Autonomous simulation of battery cathode-electrolyte interphases, GaN/SiC power electronics, and industrial catalysts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="venture-interactive-col">
              <h3 className="venture-block-title">Platform & Evidence Suite</h3>
              
              <div className="venture-links-grid">
                <a 
                  href={profileData.links.prsInteractive} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="venture-action-card"
                >
                  <div className="vac-top">
                    <span className="vac-badge">INTERACTIVE 3D</span>
                    <span className="vac-arrow">↗</span>
                  </div>
                  <h4 className="vac-title">Quantum Gas Simulator</h4>
                  <p className="vac-desc">Experience real-time phase-space advection, multimodal sonification, and Wigner distribution dynamics in WebGL.</p>
                </a>

                <a 
                  href="https://pointreyessound.com/film" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="venture-action-card"
                >
                  <div className="vac-top">
                    <span className="vac-badge">CINEMATIC FILM</span>
                    <span className="vac-arrow">↗</span>
                  </div>
                  <h4 className="vac-title">Scientific Showcase Film</h4>
                  <p className="vac-desc">A deep-dive cinematic overview into the mathematics of continuous reduced density matrix relaxation.</p>
                </a>

                <a 
                  href="https://github.com/point-reyes-sound/p1_qbescf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="venture-action-card"
                >
                  <div className="vac-top">
                    <span className="vac-badge">OPEN BENCHMARKS</span>
                    <span className="vac-arrow">↗</span>
                  </div>
                  <h4 className="vac-title">Reproduction Suite (p1_qbescf)</h4>
                  <p className="vac-desc">Open NumPy validation datasets for H₃, BeH₂, H₄, and N₂ dissociation (arXiv:2608.14979).</p>
                </a>

                <a 
                  href={profileData.links.prsDeck} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="venture-action-card"
                >
                  <div className="vac-top">
                    <span className="vac-badge">EXECUTIVE OVERVIEW</span>
                    <span className="vac-arrow">↗</span>
                  </div>
                  <h4 className="vac-title">Technical Prospectus (16:9)</h4>
                  <p className="vac-desc">15B+ SAM materials simulation opportunity, market traction, and institutional roadmap.</p>
                </a>
              </div>

              <div className="venture-validation-box">
                <span className="vv-label">Institutional Programs & Backing:</span>
                <div className="vv-tags">
                  <span className="vv-tag">Alchemist Chicago Cohort 2</span>
                  <span className="vv-tag">UChicago Polsky Center</span>
                  <span className="vv-tag">NVIDIA Inception</span>
                  <span className="vv-tag">Google Cloud Research Grants</span>
                  <span className="vv-tag">U.S. Patent 64/033,274</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
