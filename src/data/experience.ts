export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: "academic" | "industry" | "venture";
  highlights: string[];
  patentOrGrant?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "point-reyes-sound",
    role: "Founder & Chief Scientific Officer",
    organization: "Point Reyes Sound, Inc.",
    location: "San Francisco, CA",
    period: "2026 – Present (Initiative 2025–2026)",
    isCurrent: true,
    type: "venture",
    highlights: [
      "FTQC Resource Compilation Brief: Engineered a classical-to-quantum active-space compiler and block-encoded qubitization pipeline, publishing exact resource bounds (1.66 × 10⁹ T-gates, 168 logical qubits on Cr₂) to prove a 1,747× reduction in Toffoli gate complexity against full-system FTQC benchmarks.",
      "Hardware Adaptation & SRAM Streaming: Mapped the Quantum Boltzmann Equation (QBE-SCF) framework to Apple Silicon's Tile-Based Deferred Rendering (TBDR) pipeline, bypassing memory bandwidth walls via 32 KB on-chip SRAM tile streaming to achieve a >3.0× asymptotic speedup over CPU cache-throttled baselines while maintaining microhartree accuracy.",
      "AI-Accelerated Phase-Space Transport: Developed a Hessian-free orbital optimization framework utilizing continuous phase-space fluid advection and the BGK collision operator to autonomously offload dynamic correlation via differentiable JAX kernels.",
      "Intellectual Property & Commercialization: Authored, filed, and formally assigned U.S. Provisional Patent App. No. 64/033,274 (Quantum Boltzmann Equation framework) to commercialize quantum-accelerated electronic structure solvers for partner integration."
    ],
    patentOrGrant: "U.S. Provisional Patent App. No. 64/033,274"
  },
  {
    id: "psiquantum",
    role: "Senior Computational Scientist, AI & Quantum Solutions",
    organization: "PsiQuantum",
    location: "Palo Alto, CA",
    period: "2024 – 2025",
    type: "industry",
    highlights: [
      "Partner Workload Translation: Engineered scalable distributed simulation pipelines, translating complex quantum mechanical domain problems into performant, production-ready software for cross-functional benchmarking.",
      "Fault-Tolerant Algorithm Assessment: Benchmarked electronic structure Hamiltonians under photonic quantum architecture error correction constraints."
    ]
  },
  {
    id: "uchicago-staff",
    role: "Staff Researcher in Quantum AI & Generative Modeling",
    organization: "University of Chicago",
    location: "Chicago, IL",
    period: "2023 – 2024",
    type: "academic",
    highlights: [
      "Domain Adaptation for Generative AI (Azure Grant): Secured the Microsoft Azure Accelerate Foundation Models Research grant to pioneer the integration of physical symmetries into generative architectures (PyTorch/JAX), establishing exact structural equivalence benchmarks to evaluate OOD mode collapse.",
      "Physics-Grounded Generative Workflows (NeurIPS 2026): Led the development of a symmetry-aware framework conditioning generative outputs on strict physical constraints (geometry, charge/spin, point-group symmetry), effectively solving out-of-distribution mode collapse.",
      "Automated Evaluation & Distributed Training (JCTC 2026): Built distributed training pipelines natively in PyTorch to generate mathematically-verified synthetic supervision data, establishing evaluation metrics defined by exact structural equivalences rather than heuristics."
    ],
    patentOrGrant: "Microsoft Azure Accelerate Foundation Models Grant"
  },
  {
    id: "ucberkeley-lbnl",
    role: "Postdoctoral Research Fellow (Computational Materials Science)",
    organization: "University of California, Berkeley & Lawrence Berkeley National Laboratory",
    location: "Berkeley, CA",
    period: "2017 – 2023",
    type: "academic",
    highlights: [
      "Advisor: Prof. Martin Head-Gordon.",
      "Investigated non-equilibrium electronic structure, hydrogen storage mechanisms, and metal-organic frameworks (MOFs).",
      "Authored high-impact publications in JACS, J. Phys. Chem. Lett., and PCCP (Hot Article), predicting multimetallic coordination and selective gas adsorption."
    ]
  },
  {
    id: "qchem",
    role: "Scientific Software Engineer",
    organization: "Q-Chem Inc.",
    location: "Pleasanton, CA",
    period: "2018 – 2020",
    type: "industry",
    highlights: [
      "Contributed core electronic structure solvers, Energy Decomposition Analysis (ALMO-EDA), and quantum algorithms to the commercial Q-Chem 5 package."
    ]
  },
  {
    id: "newtonx",
    role: "Scientific Computing Consultant",
    organization: "NewtonX",
    location: "Remote",
    period: "06/2022 – 08/2022",
    type: "industry",
    highlights: [
      "Provided domain expertise and technical assessment on high-performance computing, quantum hardware roadmaps, and chemistry simulation software."
    ]
  }
];
