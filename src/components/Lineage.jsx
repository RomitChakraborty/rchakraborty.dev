import React from 'react';

const lineageEras = [
  {
    era: "Era IV",
    period: "2025 – Present",
    role: "Founder & Chief Executive Officer",
    organization: "Point Reyes Sound, Inc.",
    location: "San Francisco & Point Reyes Station, CA",
    strategicFocus: "Autonomous Quantum Boltzmann Solvers & Category Creation",
    badge: "Venture Leadership",
    keyContributions: [
      "Invented and commercialized the Quantum Boltzmann Equation Self-Consistent Field (QBE-SCF) framework for non-equilibrium electronic kinetics.",
      "Engineered the Quantum Boltzmann Entrainment Tensor (QBET) to eliminate multireference active-space combinatorial explosion on up to 254-orbital basis sets.",
      "Filed U.S. Provisional Patent Application No. 64/033,274 for QBE-SCF mean-field regularization."
    ]
  },
  {
    era: "Era III",
    period: "2024 – 2025",
    role: "Senior Quantum Solutions Chemist",
    organization: "PsiQuantum, Corp.",
    location: "Palo Alto, CA",
    strategicFocus: "Fault-Tolerant Quantum Algorithm Compilation & Resource Estimation",
    badge: "Quantum Hardware Vanguard",
    keyContributions: [
      "Translated complex multireference chemistry benchmarks into hardware compilation pipelines for fault-tolerant photonic quantum computers.",
      "Developed active-space resource estimation frameworks evaluating logical qubit and Toffoli gate depth constraints under error-correction models.",
      "Discovered the fundamental need for classical density-matrix kinetic pre-relaxation to reduce circuit synthesis depth by orders of magnitude."
    ]
  },
  {
    era: "Era II",
    period: "2017 – 2024",
    role: "Postdoctoral Research Fellow & Staff Researcher",
    organization: "UC Berkeley, Lawrence Berkeley National Laboratory & University of Chicago",
    location: "Berkeley, CA & Chicago, IL",
    strategicFocus: "Open-Shell Chemistry, Energy Materials & Scalable Codebases",
    badge: "Frontier Computational Science",
    keyContributions: [
      "Co-authored the landmark Q-Chem 5 software package (J. Chem. Phys.), engineering open-shell electronic structure algorithms.",
      "Modeled open metal coordination and ambient-temperature hydrogen chemisorption in MOFs under Prof. Martin Head-Gordon (PCCP Hot Article, JACS).",
      "Led physics-grounded generative foundation model research at UChicago, securing Microsoft Azure Accelerate Foundation Models Research funding."
    ]
  },
  {
    era: "Era I",
    period: "2012 – 2017",
    role: "Ph.D. Researcher in Chemistry / Chemical Physics",
    organization: "The University of Chicago",
    location: "Chicago, IL",
    strategicFocus: "Reduced Density Matrix Mechanics & Generalized Pauli Constraints",
    badge: "Mathematical Foundations",
    keyContributions: [
      "Formulated mathematical constraints on the eigenvalues of one-particle reduced density matrices (1-RDM) under Prof. David A. Mazziotti.",
      "Proved that N-representability boundary saturation dictates structural sparsity in configuration interaction wavefunctions (Phys. Rev. A).",
      "Earned Master of Science and Ph.D. in Theoretical and Computational Quantum Chemistry."
    ]
  }
];

export default function Lineage() {
  return (
    <section id="lineage" className="section-wrapper lineage-section">
      <div className="academic-container">
        <div className="section-header">
          <div className="section-kicker">SCIENTIFIC & INDUSTRIAL PROVENANCE</div>
          <h2 className="section-title">The Career Ledger</h2>
          <p className="section-subtitle">
            A fifteen-year strategic trajectory from mathematical density matrix geometry to category-defining deep-tech venture leadership.
          </p>
        </div>

        <div className="lineage-timeline">
          {lineageEras.map((era) => (
            <div key={era.era} className="lineage-card">
              <div className="lineage-card-top">
                <div className="lineage-era-tag">
                  <span className="era-number">{era.era}</span>
                  <span className="era-period">{era.period}</span>
                </div>
                <span className="lineage-badge">{era.badge}</span>
              </div>

              <h3 className="lineage-role">{era.role}</h3>
              <div className="lineage-org-row">
                <span className="lineage-org">{era.organization}</span>
                <span className="lineage-sep">&bull;</span>
                <span className="lineage-loc">{era.location}</span>
              </div>

              <div className="lineage-focus-box">
                <span className="focus-label">Strategic Focus:</span>
                <span className="focus-val">{era.strategicFocus}</span>
              </div>

              <ul className="lineage-contributions">
                {era.keyContributions.map((contrib, i) => (
                  <li key={i}>
                    <span className="lineage-bullet">›</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
