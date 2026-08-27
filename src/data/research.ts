export interface ResearchPillar {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  keyContributions: string[];
  latexEq?: string;
  relevantPapers?: string[];
  githubRepo?: string;
}

export const researchPillars: ResearchPillar[] = [
  {
    id: "qbe-scf",
    title: "Non-Equilibrium Electronic Structure & QBE-SCF",
    subtitle: "Kinetic Transport & Entropic Regularization of Mean-Field Singularities",
    overview: "Conventional self-consistent field (SCF) methods frequently diverge or experience artificial symmetry breaking near degeneracies and conical intersections due to mean-field singularities. We reformulate electronic structure through the Quantum Boltzmann Equation (QBE-SCF), propagating the one-electron reduced density matrix (1-RDM) via a Bhatnagar-Gross-Krook (BGK) collision operator to guarantee monotonic entropic relaxation.",
    keyContributions: [
      "Propagates the 1-RDM directly in phase space, eliminating non-convergence near electronic degeneracies.",
      "Introduces the Quantum Boltzmann Entrainment Tensor for Hessian-free multireference orbital optimization.",
      "Enables k-space generalization for periodic crystalline solids via the Crystalline Phase-Space Lattice Boltzmann Method."
    ],
    latexEq: "\\partial_t \\gamma(t) = -\\frac{i}{\\hbar}[\\mathbf{F}[\\gamma], \\gamma(t)] - \\frac{1}{\\tau}\\left(\\gamma(t) - \\gamma_{\\text{eq}}[\\mathbf{F}]\\right)",
    relevantPapers: ["Chakraborty (2026, JCP Subm.)", "Chakraborty (2026, JCTC Prep.)", "Chakraborty (2026, PRL Prep.)"],
    githubRepo: "https://github.com/point-reyes-sound/p1_qbescf"
  },
  {
    id: "ftqc",
    title: "Fault-Tolerant Quantum Computing & Resource Compilation",
    subtitle: "Active-Space Qubitization & Gate Compression Pipelines",
    overview: "Translating classically intractable quantum chemistry problems into fault-tolerant quantum algorithms requires optimizing physical and logical resource overheads. We engineered classical-to-quantum active-space compilers and block-encoded qubitization pipelines that establish rigorous analytical resource bounds across complex open-shell multi-metallic complexes.",
    keyContributions: [
      "Demonstrated exact logical resource bounds (1.66 × 10⁹ T-gates, 168 logical qubits on Cr₂) yielding a 1,747× Toffoli complexity reduction over full-system FTQC benchmarks.",
      "Bridged quantum error correction (QEC) threshold models with production-grade chemical Hamiltonian representations.",
      "Automated Hamiltonian factorization and double-factorized block-encoding routines for quantum chemistry solvers."
    ],
    latexEq: "U_{\\text{Qubit}} = e^{-i \\arccos(H / \\lambda) \\sigma_y} \\otimes |0\\rangle\\langle 0| + \\dots",
    relevantPapers: ["Chakraborty (2026, PRX Quantum Prep.)"],
    githubRepo: "https://github.com/point-reyes-sound"
  },
  {
    id: "hardware-streaming",
    title: "Hardware Adaptation & Phase-Space SRAM Streaming",
    subtitle: "Mapping Electronic Structure to Tile-Based Deferred Shading (TBDR)",
    overview: "Modern electronic structure solvers are bounded by GPU and CPU memory bandwidth walls during large tensor contractions. By mapping continuous phase-space fluid advection and collision kernels directly onto Tile-Based Deferred Rendering (TBDR) pipelines (e.g., Apple Silicon unified memory), we execute local contractions directly in ultra-fast on-chip SRAM.",
    keyContributions: [
      "Bypasses DDR/LPDDR memory bottlenecks via 32 KB on-chip SRAM tile streaming for non-equilibrium density updates.",
      "Achieved >3.0× asymptotic execution speedup over CPU cache-throttled baselines while maintaining sub-microhartree precision.",
      "Developed differentiable JAX and Metal kernels for autonomous Hessian-free orbital optimization."
    ],
    latexEq: "\\mathcal{F}_{\\text{tile}}(\\mathbf{x}, \\mathbf{v}) \\longrightarrow \\text{SRAM}_{32\\text{KB}} \\xrightarrow{\\text{TBDR}} \\rho(\\mathbf{x})",
    relevantPapers: ["Chakraborty (2026, PRS Technical Brief)", "U.S. Provisional Patent App. No. 64/033,274"],
    githubRepo: "https://github.com/point-reyes-sound"
  },
  {
    id: "physics-ai",
    title: "Physics-Grounded Generative AI & Materials Discovery",
    subtitle: "Symmetry-Preserving Neural Architectures & Functional Materials",
    overview: "Standard generative foundation models frequently suffer from out-of-distribution (OOD) mode collapse when predicting complex quantum states and molecular geometries. Supported by the Microsoft Azure Accelerate Foundation Models Grant, we develop deep learning architectures conditioned on rigorous physical symmetries (geometry, spin, point-group invariance).",
    keyContributions: [
      "Pioneered symmetry-aware generative workflows (PyTorch/JAX) that enforce exact quantum invariance constraints.",
      "Uncovered binding mechanisms and predicted ultra-high hydrogen storage capacities in metal-organic frameworks (MOFs with vanadium(II) and copper(I) sites).",
      "Selected as Hot Article in Physical Chemistry Chemical Physics (PCCP 2024)."
    ],
    latexEq: "\\mathcal{L}_{\\text{phys}}(\\theta) = \\mathcal{L}_{\\text{MSE}} + \\lambda \\| \\hat{S}^2 \\Psi_\\theta - S(S+1)\\Psi_\\theta \\|^2 + \\mu \\| [\\hat{G}, \\hat{H}] \\|^2",
    relevantPapers: ["NeurIPS (2026 Prep.)", "PCCP Hot Article (2024)", "JACS (2024)", "J. Phys. Chem. Lett. (2023)"],
    githubRepo: "https://github.com/RomitChakraborty"
  }
];
