import React from 'react';
import { profileData } from '../data/profile';

export default function Hero({ onSelectPillar }) {
  const handleMofClick = (e) => {
    if (onSelectPillar) {
      onSelectPillar('mof-simulations');
    }
    const target = document.getElementById('research');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hero-section">
      <div className="academic-container hero-grid">
        {/* Left Column: Portrait & Minimal Links */}
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
              <img src="/PRS_logo_v2.jpeg" alt="Point Reyes Sound" className="brand-icon prs-icon" />
              <span>Point Reyes Sound</span> <span className="ext-arrow">↗</span>
            </a>
            <a href="https://scholar.google.com/citations?user=m4HlFRIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              <svg className="brand-icon scholar-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
              <span>Google Scholar</span> <span className="ext-arrow">↗</span>
            </a>
            <a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              <svg className="brand-icon github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span> <span className="ext-arrow">↗</span>
            </a>
            <a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              <svg className="brand-icon orcid-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.306v7.444h2.244c2.612 0 3.816-1.575 3.816-3.722 0-2.016-1.125-3.722-3.75-3.722h-2.31z" />
              </svg>
              <span>ORCID</span> <span className="ext-arrow">↗</span>
            </a>
            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              <svg className="brand-icon linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
              </svg>
              <span>LinkedIn</span> <span className="ext-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Complete About Me Section with Uniform Royal Blue Accent Margin */}
        <div className="hero-content-col">
          <h1 className="hero-name">Romit Chakraborty</h1>
          <div className="hero-subtitle">
            <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer" className="prs-affiliation-link">
              Point Reyes Sound, Inc.
            </a>
          </div>

          {/* Unified About Me Container with Continuous Royal Blue Left Margin */}
          <div className="about-manuscript-container">
            {/* Welcome Intro */}
            <p className="hero-bio">
              Welcome to my humble internet abode!
            </p>

            {/* Scientific Foundation */}
            <p className="hero-bio">
              I use the tenets of quantum chemistry to conduct simulations of clean energy materials with a broad view toward developing efficient energy storage and conversion systems. My pursuits are informed by the foundations of Density Functional Theory (DFT) and Reduced Density Matrix (RDM) theory, both of which provide compressed descriptions of the Hilbert space.
            </p>

            <p className="hero-bio">
              DFT, a workhorse for practical materials simulations, is an effective one-electron theory that elegantly side-steps the well-known N-representability problem that applies to the treatment of many electron quantum systems. For a concise outline of effective one-body constraints that are necessary Pure N-representability of the one-electron reduced density matrix (1-RDM) as well as their applications to chemical and biological systems, peruse my <a href="https://www.proquest.com/openview/4e94e4be5bd5b67d83add173091d5b31/1?pq-origsite=gscholar&cbl=18750" target="_blank" rel="noopener noreferrer">dissertation on this topic</a>.
            </p>

            {/* Practical Electronic Structure & Head-Gordon */}
            <p className="hero-bio">
              Following this journey of abstractions that many would consider tangential to formal electronic structure theory, I worked with Prof. Martin Head-Gordon at Berkeley where I assisted in the rational design efforts for clean energy materials: <a href="#research" onClick={handleMofClick}>metal-organic frameworks for gas storage and separations</a>.
            </p>

            <p className="hero-bio">
              This gave me a broad perspective on practical electronic structure theory and simulations. Despite improvements, the computational complexity of the CI (Configuration Interaction) and CC (Coupled Cluster) Hamiltonians entails that only a handful of electrons, about ten on your laptop, and about twenty if you have the luxury of high-performance compute, can be treated accurately in molecular systems. This barrier is not likely to be overcome by quantum hardware of any architecture: superconducting qubits, trapped ions, atoms, or silicon photonics in the next two years. Density Matrix Renormalization Group (DMRG) remains the best CI solver, and Density Functional Theory (DFT) remains the workhorse for practical computations for material systems, and is likely to remain so in the foreseeable future.
            </p>

            {/* AI & Multimodal LLMs */}
            <p className="hero-bio">
              As an AI optimist, I am enthused by the prospect of using transformer-based architectures to learn more about the physical world. I enjoy building extensions to solutions in the natural sciences by programming multimodal large language models. Please find below some examples of applications and services derived from programming multimodal large language models. These are relatively simple augmentations of the underlying LLMs (GPT-4o for instance) that i) employ low rank adaptations of a large model by fine-tuning it with the QM9 dataset, and ii) train a large vision model (GPT-4o) to recognize molecular orbitals via prompt engineering.
            </p>

            {/* Ongoing Directions */}
            <div className="ongoing-inner-group">
              <div className="ongoing-work-title">Some examples of ongoing work include:</div>
              <ul className="ongoing-work-list">
                <li><strong>i)</strong> Agentic Workflows that partition the Hilbert Space into interacting and non-interacting subsystems,</li>
                <li><strong>ii)</strong> LoRA fine tuning of Multimodal Large Language models for Orbital Recognition,</li>
                <li><strong>iii)</strong> Models for competitive adsorption in MOFs with open metal sites, and</li>
                <li><strong>iv)</strong> Accurate Depictions for Anharmonicity in Small Molecule Binding to Open Metal sites in MOFs.</li>
              </ul>
              <p className="ongoing-work-note">
                The first two of the above were carried out under the auspices of the Accelerate Foundation Models Research Grant generously provided by Microsoft Azure during my stint as a staff researcher at UChicago from 2023–2024. The last two are unpublished yet promising projects I undertook at UC Berkeley. Find out more info about peer reviewed and archived articles on my <a href="https://scholar.google.com/citations?user=m4HlFRIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
              </p>
            </div>

            {/* Opportunities & PsiQuantum */}
            <p className="hero-bio" style={{ marginBottom: 0 }}>
              I seek research and development opportunities that lie at the intersection of quantum chemistry, materials science, quantum and classical information theory, and that can leverage my skills in programming multimodal large language models. Please peruse my résumé. Please note that none of the code that are due to my affiliations with PsiQuantum are available for public consumption and neither have they been at any stage.
            </p>
          </div>

          {/* Concise Point Reyes Sound, Inc. Section */}
          <div className="prs-spotlight-box">
            <h3 className="prs-spotlight-title">Point Reyes Sound, Inc.</h3>
            <p className="prs-spotlight-desc">
              <strong>Point Reyes Sound, Inc.</strong> is a privately held theoretical and computational research pod specializing in building first-principles <strong>Quantum Boltzmann Solvers (QBE-SCF)</strong>, non-equilibrium electronic structure methods, and phase-space kinetic transport frameworks for molecules and functional materials.
            </p>
            <a href={profileData.links.prsWebsite} target="_blank" rel="noopener noreferrer" className="prs-explore-link">
              Explore Point Reyes Sound, Inc. &rarr;
            </a>
          </div>

          {/* Contact Section with Requested Emails */}
          <div className="hero-contact-row">
            <span className="contact-label">Contact:</span>
            <div className="contact-emails-group">
              <a href="mailto:romit@pointreyessound.com" className="contact-email">
                romit@pointreyessound.com
              </a>
              <span className="email-sep">&bull;</span>
              <a href="mailto:romit@uchicago.edu" className="contact-email">
                romit@uchicago.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
