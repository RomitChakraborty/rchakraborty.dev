export interface ManifestoItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  hook: string;
  abstract: string;
  keyTheses: string[];
  audience: string;
  readTime: string;
  doiOrLink?: string;
  linkText?: string;
}

export const manifestosData: ManifestoItem[] = [
  {
    id: "the-factorial-bottleneck",
    number: "01",
    category: "THEORETICAL PROVOCATION",
    title: "The Factorial Bottleneck: Why Modern Quantum Chemistry Software Is Bound to Fail, and What We Are Doing About It",
    subtitle: "Moore's law gave classical compute an extra decade, but it cannot outrun N! — why room-temperature materials discovery requires abandoning combinatorial static diagonalization.",
    hook: "“For fifty years, computational chemistry has lived in denial of an exponential wall. If we want room-temperature catalysts and solid-state batteries, we must abandon brute-force combinatorial active-space expansion.”",
    abstract: "Standard density functional theory (DFT) catastrophically fails at open-shell transition metal bonds, while multireference methods (CASSCF, CASPT2, DMRG) hit a factorial active-space wall that caps exact calculations at ~30 electrons. This essay outlines why conventional quantum chemistry cannot scale to the energy transition and presents the physical rationale for replacing combinatorial wavefunction diagonalization with continuous thermodynamic phase-space kinetics.",
    keyTheses: [
      "The Unphysical Barrier: Static mean-field methods break spin and spatial symmetries precisely where chemical reactions occur, creating artificial singular cusps.",
      "The Combinatorial Trap: Multireference methods attempt to patch this failure by diagonalizing factorially exploding Hilbert spaces (O(N!)), rendering large-scale industrial simulation intractable.",
      "The Kinetic Alternative: Reformulating electronic self-consistency as non-equilibrium kinetic transport of the 1-RDM achieves polynomial O(N³) scaling while rigorously regularizing topological singularities."
    ],
    audience: "Deep-Tech Venture Capitalists, Chemical Enterprise CTOs (BASF, Dow), Senior Computational Scientists",
    readTime: "7 min read",
    doiOrLink: "https://arxiv.org/abs/2608.14979",
    linkText: "Read arXiv Preprint (2608.14979) ↗"
  },
  {
    id: "beyond-casscf",
    number: "02",
    category: "MATHEMATICAL MECHANISM",
    title: "Beyond CASSCF: Eliminating Mean-Field Singularities with Continuous Phase-Space Relaxation",
    subtitle: "Restoring physical ergodicity through non-equilibrium Bhatnagar-Gross-Krook collision operators instead of factorial configuration interaction.",
    hook: "“Why should an electron-pair dissociation require diagonalizing a 10¹²-dimensional Hilbert space when a phase-space collision operator restores physical ergodicity continuously?”",
    abstract: "When chemical bonds stretch or molecules cross conical intersections, the non-linear Fock operator exhibits Coulombic singular crossings and negative curvature. Instead of expanding the basis into millions of Slater determinants, the Quantum Boltzmann Equation Self-Consistent Field (QBE-SCF) framework models electron density as a continuous phase-space distribution relaxing toward maximum local entropy, restoring monotonic convergence across singular manifolds.",
    keyTheses: [
      "Hessian-Free Convergence: Traditional orbital optimizers diverge at Coulson-Fischer singular crossings; phase-space kinetic advection guarantees smooth, C¹ energy gradient traversal.",
      "The BGK Collision Engine: A mathematically rigorous relaxation-time approximation drives the one-electron reduced density matrix (1-RDM) to its physical equilibrium without combinatorial active spaces.",
      "Rigorous Verification: Numerical validation across H₃ linear dissociation, BeH₂ C₂ᵥ → D∞h avoided crossings, and N₂ triple-bond cleavage with exact Hartree-Fock commutator preservation [F, P] = 0."
    ],
    audience: "Quantum Physicists, Theoretical Chemists, Staff ML & HPC Scientists",
    readTime: "10 min read",
    doiOrLink: "https://github.com/point-reyes-sound/p1_qbescf",
    linkText: "Explore Open Numerical Benchmarks ↗"
  },
  {
    id: "the-15b-materials-blindspot",
    number: "03",
    category: "COMMERCIAL STRATEGY & TAM",
    title: "The $15 Billion Materials Blindspot: Why the Energy Transition Demands Non-Equilibrium Solvers",
    subtitle: "From solid-state battery electrolytes to wide-bandgap GaN power semiconductors—the trillion-dollar clean tech transition is bottlenecked by software failure at chemical interfaces.",
    hook: "“Every battery fire, degradation cycle, and failed synthetic catalyst traces back to a Coulson-Fischer singular cusp that classical quantum chemistry software simply failed to converge.”",
    abstract: "The commercial transition to clean energy, high-density batteries, and green hydrogen is stalled not by manufacturing capacity, but by materials discovery cycle times. Enterprise chemical and semiconductor leaders spend billions running unconverged DFT iterations that hallucinate reaction barriers. Point Reyes Sound's QBE-SCF platform establishes the computational foundation for predictive simulation of strongly correlated interfacial charge transfer.",
    keyTheses: [
      "Cathode-Electrolyte Degradation: Open-shell transition metal ions at battery interfaces cause standard DFT to collapse into unphysical charge-localized states.",
      "Wide-Bandgap Electronics: Simulating non-equilibrium carrier transport in Gallium Nitride (GaN) and Silicon Carbide (SiC) devices requires kinetic transport theory, not equilibrium band structures.",
      "Industrial High-Performance Computing: Delivering polynomial O(N³) quantum chemistry unlocks massive GPU acceleration on modern Tensor Core hardware (NVIDIA H100/B200)."
    ],
    audience: "Frontier Tech Investors (DCVC, Lux Capital, Playground Global), Clean Energy Execs",
    readTime: "8 min read",
    doiOrLink: "https://pointreyessound.com/public-deck",
    linkText: "View Technical Prospectus ↗"
  },
  {
    id: "the-ftqc-illusion",
    number: "04",
    category: "QUANTUM COMPUTING ARCHITECTURE",
    title: "The FTQC Illusion: Why Fault-Tolerant Quantum Computers Will Require Classical Pre-Relaxation",
    subtitle: "A quantum computer is only as viable as the classical state prepared for it—demonstrating a 1,747× reduction in Toffoli gate complexity via GPU kinetic pre-relaxation.",
    hook: "“Running naive active-space state preparation on a multimillion-dollar quantum processor is commercial suicide. Quantum hardware needs classical kinetic compression.”",
    abstract: "Drawing from direct industry experience architecting algorithmic compilation pipelines at PsiQuantum, this manifesto dissects the resource requirements of fault-tolerant quantum computing (FTQC). State-of-the-art quantum phase estimation on correlated systems like chromium dimers (Cr₂) requires astronomical Toffoli gate budgets. By pre-relaxing active-space density matrices on classical GPUs before quantum circuit synthesis, Point Reyes Sound slashes quantum circuit depth by three orders of magnitude.",
    keyTheses: [
      "The Logical Qubit Bottleneck: First-generation FTQC systems will operate with hundreds to thousands of logical qubits, not millions—active space minimization is existential.",
      "The 1,747× Toffoli Breakthrough: Compressing active-space representation from raw CI configurations into kinematically relaxed 1-RDMs reduces Cr₂ gate counts from 2.9 × 10¹² to 1.66 × 10⁹ T-gates.",
      "Bilateral Classical-Quantum Synergy: The future of quantum advantage is hybrid—continuous classical kinetic transport handling the mean-field continuum, and quantum processors targeting pure multi-reference correlations."
    ],
    audience: "Quantum Hardware Leadership (PsiQuantum, IBM, Quantinuum, Google Quantum AI), FTQC Researchers",
    readTime: "9 min read",
    doiOrLink: "https://pointreyessound.com/nvidia-brief",
    linkText: "Inspect Architecture Brief ↗"
  }
];
