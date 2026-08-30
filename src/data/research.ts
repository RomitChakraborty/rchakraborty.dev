export interface ResearchPillar {
  id: string;
  categoryKey: string;
  title: string;
  subtitle: string;
  overview: string;
  keyContributions: string[];
  latexEq: string;
  materials: {
    label: string;
    type: "paper" | "preprint" | "dissertation" | "code" | "grant" | "pod";
    url: string;
    badge?: string;
  }[];
}

export const researchPillars: ResearchPillar[] = [
  {
    id: "qbe-scf",
    categoryKey: "qbe",
    title: "Quantum Boltzmann Solver",
    subtitle: "Kinetic Transport & Entropic Regularization of Mean-Field Singularities",
    overview: "Conventional mean-field electronic structure methods frequently break down near degeneracies, conical intersections, and strong correlation regimes due to singularities in the self-consistent field (SCF). Pioneered at Point Reyes Sound, Inc., Quantum Boltzmann Equation Self-Consistent-Field (QBE-SCF) propagates the one-electron reduced density matrix (1-RDM) in phase space via a Bhatnagar-Gross-Krook (BGK) collision operator, achieving natural monotonic entropic regularization across mean-field singularities without artificial symmetry breaking.",
    keyContributions: [
      "Propagates the one-electron reduced density matrix directly in phase space via non-equilibrium BGK relaxation.",
      "Eliminates self-consistent field divergence and artificial symmetry breaking near conical intersections.",
      "Introduces the Quantum Boltzmann Entrainment Tensor for Hessian-free multireference orbital optimization.",
      "Extends phase-space kinetic transport to periodic crystalline materials via Lattice Boltzmann k-space schemes."
    ],
    latexEq: "\\partial_t {^1P}(t) = -\\frac{i}{\\hbar}[\\mathbf{F}[{^1P}], {^1P}(t)] - \\frac{1}{\\tau}\\left({^1P}(t) - {^1P}_{\\text{eq}}[\\mathbf{F}]\\right)",
    materials: [
      {
        label: "arXiv:2608.14979 — QBE-SCF Preprint",
        type: "preprint",
        url: "https://arxiv.org/abs/2608.14979",
        badge: "Preprint"
      },
      {
        label: "Point Reyes Sound, Inc. — Research Pod Portal",
        type: "pod",
        url: "https://www.pointreyessound.com",
        badge: "Pod"
      },
      {
        label: "Point Reyes Sound — Open Research GitHub",
        type: "code",
        url: "https://github.com/point-reyes-sound",
        badge: "GitHub"
      }
    ]
  },
  {
    id: "agentic-ai",
    categoryKey: "ai",
    title: "Agentic AI",
    subtitle: "Multimodal Foundation Models, LoRA Adaptations & Automated Orbital Recognition",
    overview: "Leveraging transformer architectures and multimodal large language models to accelerate scientific discovery in quantum chemistry. We build agentic systems that automate complex electronic structure workflows—partitioning the many-electron Hilbert space into interacting and non-interacting subspaces, fine-tuning multimodal models (such as GPT-4o) using the QM9 dataset via Low-Rank Adaptation (LoRA), and engineering vision models to identify and categorize molecular orbitals directly from 3D iso-surfaces.",
    keyContributions: [
      "Agentic workflows that autonomously partition the Hilbert space into strongly interacting and spectator subspaces.",
      "LoRA fine-tuning of multimodal large language models trained on QM9 quantum chemistry benchmark datasets.",
      "Prompt-engineered vision foundation models for automated 3D molecular orbital classification and symmetry recognition.",
      "Supported under the Microsoft Azure Accelerate Foundation Models Research Grant (UChicago 2023–2024)."
    ],
    latexEq: "\\Delta W = B \\cdot A, \\quad A \\in \\mathbb{R}^{r \\times d}, \\; B \\in \\mathbb{R}^{k \\times r}, \\; r \\ll \\min(d, k)",
    materials: [
      {
        label: "Google Scholar Profile — AI & Quantum Papers",
        type: "paper",
        url: "https://scholar.google.com/citations?user=m4HlFRIAAAAJ&hl=en",
        badge: "Scholar"
      },
      {
        label: "Microsoft Azure Accelerate Foundation Models Research Grant",
        type: "grant",
        url: "https://www.microsoft.com/en-us/research/collaboration/accelerating-foundation-models-research/",
        badge: "UChicago Grant"
      },
      {
        label: "Personal GitHub — Quantum AI Repositories",
        type: "code",
        url: "https://github.com/RomitChakraborty",
        badge: "GitHub"
      }
    ]
  },
  {
    id: "mof-simulations",
    categoryKey: "mof",
    title: "Quantum Chemical Simulations of Metal-Organic Frameworks",
    subtitle: "Clean Energy Materials, Gas Storage, and ALMO Energy Decomposition Analysis",
    overview: "In collaboration with Prof. Martin Head-Gordon and Prof. Jeffrey R. Long at UC Berkeley and Lawrence Berkeley National Laboratory, we developed rigorous first-principles methodologies to investigate clean energy materials. Our work focuses on rational design of metal-organic frameworks (MOFs) for high-capacity dihydrogen (H2) storage and selective gas separations (O2/N2, CO2), deploying Absolutely Localized Molecular Orbital Energy Decomposition Analysis (ALMO-EDA) to dissect electrostatic, polarization, and charge-transfer contributions at open metal sites.",
    keyContributions: [
      "Validated binding energetics and orbital back-bonding for ambient-temperature hydrogen storage in vanadium(II) MOFs.",
      "Elucidated selective reversible oxygen chemisorption over humidity at trigonal pyramidal copper(I) sites.",
      "Formulated free energy decomposition analysis (EDA) extending ALMO methods to thermodynamic binding free energies.",
      "Implemented and benchmarked electronic structure algorithms within the open Q-Chem 5 software package."
    ],
    latexEq: "\\Delta E_{\\text{bind}} = \\Delta E_{\\text{frz}} + \\Delta E_{\\text{pol}} + \\Delta E_{\\text{ct}} + \\Delta E_{\\text{disp}}",
    materials: [
      {
        label: "PCCP Hot Article (2024) — H2 Binding in MOFs: Validation & Insights",
        type: "paper",
        url: "https://doi.org/10.1039/D3CP05540J",
        badge: "PCCP Hot Article"
      },
      {
        label: "JACS (2024) — Selective O2 Adsorption at Cu(I) Sites in MOFs",
        type: "paper",
        url: "https://doi.org/10.1021/jacs.3c10753",
        badge: "JACS (2024)"
      },
      {
        label: "J. Phys. Chem. Lett. (2023) — Free Energy Decomposition Analysis (ALMO-EDA)",
        type: "paper",
        url: "https://doi.org/10.1021/acs.jpclett.3c01397",
        badge: "JPCL (2023)"
      },
      {
        label: "J. Phys. Chem. C (2023) — π-Backbonding in Cu(I) MOFs via NMR & DFT",
        type: "paper",
        url: "https://doi.org/10.1021/acs.jpcc.3c00462",
        badge: "JPCC (2023)"
      },
      {
        label: "J. Phys. Chem. Lett. (2022) — Multiple H2 Ligation at Vanadium(II)",
        type: "paper",
        url: "https://doi.org/10.1021/acs.jpclett.2c02844",
        badge: "JPCL (2022)"
      },
      {
        label: "JACS (2021) — Ambient H2 Storage via Vanadium(II)-Dihydrogen Complexation",
        type: "paper",
        url: "https://doi.org/10.1021/jacs.1c01883",
        badge: "JACS (2021)"
      },
      {
        label: "J. Chem. Phys. (2021) — Q-Chem 5 Quantum Chemistry Software Package",
        type: "paper",
        url: "https://doi.org/10.1063/5.0055522",
        badge: "JCP (2021)"
      }
    ]
  },
  {
    id: "generalized-pauli",
    categoryKey: "pauli",
    title: "Generalized Pauli Conditions",
    subtitle: "Effective One-Body Constraints, 1-RDM Polytope Boundaries, and Wavefunction Sparsity",
    overview: "Under the mentorship of Prof. David A. Mazziotti at the University of Chicago, we investigated the mathematical foundations of the generalized Pauli exclusion principle (Borland-Dennis and Klyachko constraints). We derived analytical conditions under which occupation numbers of the one-electron reduced density matrix (1-RDM) saturate boundary facets of the Pure N-representability polytope, proving that pinning enforces structural sparsity in CI wavefunctions and establishes spectral criteria for open quantum system dynamics.",
    keyContributions: [
      "Characterized Generalized Pauli polytope pinning conditions for atomic and molecular one-electron spectra.",
      "Proved that boundary saturation of Generalized Pauli constraints enforces structural sparsity in wavefunctions.",
      "Established a rigorous mathematical condition for the openness of many-electron systems via Pauli violation.",
      "Formulated noise-assisted quantum transport through geometric dilation of 1-RDM convex sets."
    ],
    latexEq: "D \\vec{\\lambda} \\le \\vec{d}, \\quad \\lambda_i \\in [0, 1], \\quad \\sum_{i} \\lambda_i = N",
    materials: [
      {
        label: "Ph.D. Dissertation — Generalized Pauli Conditions & Pure N-Representability",
        type: "dissertation",
        url: "https://www.proquest.com/openview/4e94e4be5bd5b67d83add173091d5b31/1?pq-origsite=gscholar&cbl=18750",
        badge: "UChicago Dissertation"
      },
      {
        label: "J. Chem. Phys. (2018) — Sparsity of Wavefunction from Generalized Pauli",
        type: "paper",
        url: "https://doi.org/10.1063/1.5010985",
        badge: "JCP (2018)"
      },
      {
        label: "J. Chem. Phys. (2017) — Noise-Assisted Energy Transfer from 1-RDM Dilation",
        type: "paper",
        url: "https://doi.org/10.1063/1.4982927",
        badge: "JCP (2017)"
      },
      {
        label: "Int. J. Quantum Chem. (2016) — Role of Generalized Pauli in Excited States",
        type: "paper",
        url: "https://doi.org/10.1002/qua.25120",
        badge: "IJQC (2016)"
      },
      {
        label: "Phys. Rev. A (2015) — Openness of Quantum System from Pauli Violation",
        type: "paper",
        url: "https://doi.org/10.1103/PhysRevA.91.010101",
        badge: "Phys. Rev. A (2015)"
      },
      {
        label: "Phys. Rev. A (2014) — Generalized Pauli Conditions on 1-RDM Spectra",
        type: "paper",
        url: "https://doi.org/10.1103/PhysRevA.89.042505",
        badge: "Phys. Rev. A (2014)"
      }
    ]
  }
];
