import React from 'react';
import { profileData } from '../data/profile';

export default function Hero() {
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
              Point Reyes Sound <span className="ext-arrow">↗</span>
            </a>
            <a href="https://scholar.google.com/citations?user=m4HlFRIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              Google Scholar <span className="ext-arrow">↗</span>
            </a>
            <a href={profileData.links.personalGithub} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              GitHub <span className="ext-arrow">↗</span>
            </a>
            <a href={profileData.links.orcid} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              ORCID <span className="ext-arrow">↗</span>
            </a>
            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="minimal-text-link">
              LinkedIn <span className="ext-arrow">↗</span>
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
              I use the tenets of quantum chemistry to conduct simulations of clean energy materials with a broad view toward developing efficient energy storage and conversion systems. My pursuits are informed by the foundations of Density Functional Theory (DFT) and Reduced Density Matrix (RDM) theory, both of which provide compressed descriptions of the Hilbert Space. DFT, a workhorse for practical materials simulations, is an effective one-electron theory that elegantly side-steps the well-known N-representability problem that applies to the treatment of many electron quantum systems. For a concise outline of effective one-body constraints that are necessary Pure N-representability of the one-electron reduced density matrix (1-RDM) as well as their applications to chemical and biological systems, peruse my <a href="https://www.proquest.com/openview/4e94e4be5bd5b67d83add173091d5b31/1?pq-origsite=gscholar&cbl=18750" target="_blank" rel="noopener noreferrer">dissertation on this topic</a>.
            </p>

            {/* Practical Electronic Structure & Head-Gordon */}
            <p className="hero-bio">
              Following this journey of abstractions that many would consider tangential to formal electronic structure theory, I worked with Prof. Martin Head-Gordon at Berkeley where I assisted in the rational design efforts for clean energy materials: metal-organic frameworks for gas storage and separations.
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
