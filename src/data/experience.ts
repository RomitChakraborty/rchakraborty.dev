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
    role: "Founder & CEO",
    organization: "Point Reyes Sound, Inc.",
    location: "San Francisco, CA",
    period: "June 2026 – Present",
    isCurrent: true,
    type: "venture",
    highlights: [
      "Phase-Space Electronic Structure: Formulated a Hessian-free orbital optimization framework utilizing continuous phase-space fluid advection and the Bhatnagar-Gross-Krook (BGK) collision operator to autonomously regularize mean-field singularities.",
      "Quantum Boltzmann Entrainment Tensor (QBET): Developed a theoretical methodology to restrict quantum simulation workloads strictly to the active space, effectively resolving exponential scaling limits in strongly correlated multireference systems.",
      "Solid-State k-Space Decoupling: Generalized the phase-space transport engine for periodic crystalline systems by projecting continuous Wigner distributions onto cGTOs, mapping multidimensional transport to decoupled matrix relaxations across the Brillouin zone."
    ]
  },
  {
    id: "psiquantum",
    role: "Senior Computational Scientist, AI & Solutions",
    organization: "PsiQuantum, Corp.",
    location: "Palo Alto, CA, USA",
    period: "Oct 2024 – Mar 2025",
    type: "industry",
    highlights: [
      "Translated quantum chemical models of correlated electron systems into robust algorithmic frameworks with scalable software architectures."
    ]
  },
  {
    id: "uchicago-staff",
    role: "Staff Researcher in Quantum AI",
    organization: "University of Chicago",
    location: "Chicago, IL, USA",
    period: "Nov 2023 – Oct 2024",
    type: "academic",
    highlights: [
      "Physics-Grounded Generative Workflows: Led the development of a symmetry-aware framework conditioning generative models on strict physical constraints (molecular geometry, charge/spin manifolds, point-group symmetry) to resolve out-of-distribution mode collapse.",
      "Physical Symmetry Integration: Pioneered the integration of physical symmetries into large-scale generative architectures, securing Microsoft Azure Foundation Models Research funding to bridge theoretical chemistry and machine learning.",
      "Mathematical Verification Metrics: Engineered rigorous protocols for generating mathematically-verified synthetic data, establishing evaluation metrics defined by exact structural equivalences rather than heuristic approximations."
    ],
    patentOrGrant: "Microsoft Azure Accelerate Foundation Models Grant"
  },
  {
    id: "ucberkeley-lbnl",
    role: "Postdoctoral Research Fellow (Computational Science)",
    organization: "UC Berkeley & LBNL",
    location: "Berkeley, CA, USA",
    period: "2017 – 2023",
    type: "academic",
    highlights: [
      "Advisor: Prof. Martin Head-Gordon.",
      "Investigated non-equilibrium electronic structure, hydrogen storage mechanisms, and metal-organic frameworks (MOFs).",
      "Authored high-impact publications in JACS, J. Phys. Chem. Lett., and PCCP (Hot Article), predicting multimetallic coordination and selective gas adsorption."
    ]
  },
  {
    id: "newtonx",
    role: "Scientific Computing Consultant",
    organization: "NewtonX",
    location: "Remote, part-time, USA",
    period: "06/2022 – 08/2022",
    type: "industry",
    highlights: [
      "Provided domain expertise and technical assessment on high-performance computing, quantum hardware roadmaps, and chemistry simulation software."
    ]
  },
  {
    id: "qchem",
    role: "Scientific Software Developer",
    organization: "Q-Chem Inc.",
    location: "CA, USA",
    period: "2018 – 2020",
    type: "industry",
    highlights: [
      "Contributed core electronic structure solvers, Energy Decomposition Analysis (ALMO-EDA), and quantum algorithms to the commercial Q-Chem 5 package."
    ]
  }
];
