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
      "Quantum Boltzmann Entrainment Tensor (QBET): Developed a framework coupling classical phase-space relaxation to an active-space quantum core, circumventing combinatorial active-space expansion and demonstrating monotonic CASSCF orbital convergence on multireference dissociation benchmarks up to 254-orbital basis sets.",
      "Solid-State k-Space Decoupling: Generalized the phase-space transport engine for periodic crystalline systems by projecting continuous Wigner distributions onto cGTOs, mapping multidimensional transport to decoupled matrix relaxations across the Brillouin zone."
    ]
  },
  {
    id: "psiquantum",
    role: "Senior Quantum Solutions Chemist",
    organization: "PsiQuantum, Corp.",
    location: "Palo Alto, CA",
    period: "Oct 2024 – Mar 2025",
    type: "industry",
    highlights: [
      "Translated quantum chemical models of correlated electron systems into algorithmic compilation pipelines and active-space resource estimation frameworks for fault-tolerant quantum hardware architectures."
    ]
  },
  {
    id: "uchicago-staff",
    role: "Staff Researcher in Quantum AI",
    organization: "University of Chicago",
    location: "Chicago, IL",
    period: "Nov 2023 – Oct 2024",
    type: "academic",
    highlights: [
      "Physics-Grounded Generative Workflows: Led the development of an equivariant framework conditioning generative models on exact physical invariants (molecular geometry, charge/spin multiplicity, point-group symmetry) to mitigate out-of-distribution mode collapse.",
      "Physical Symmetry Integration: Integrated point-group and rotational symmetries into multimodal foundation models, securing Microsoft Azure Accelerate Foundation Models Research funding for automated quantum chemical discovery.",
      "Structural Verification Metrics: Designed deterministic validation protocols for synthetic molecular configurations, evaluating model fidelity against exact graph automorphisms and quantum chemical invariant sets rather than heuristic approximations."
    ],
    patentOrGrant: "Microsoft Azure Accelerate Foundation Models Grant"
  },
  {
    id: "ucberkeley-lbnl",
    role: "Postdoctoral Research Fellow",
    organization: "UC Berkeley & Lawrence Berkeley National Laboratory",
    location: "Berkeley, CA",
    period: "2017 – 2023",
    type: "academic",
    highlights: [
      "MOF Chemistry: Modeled dihydrogen binding and multi-ligand coordination at open metal sites (V(II), Cu(I)) in metal-organic frameworks under Prof. Martin Head-Gordon, validating predictions against experimental neutron scattering and adsorption isotherms (JACS, PCCP Hot Article).",
      "Quantum Chemistry Software: Co-developed modular quantum chemistry capabilities for open-shell and correlated electronic structure as a code contributor to the open-source Q-Chem 5 package (J. Chem. Phys.)."
    ]
  }
];

export interface ConciseExperienceItem {
  period: string;
  role: string;
  organization: string;
}

export const conciseExperienceData: ConciseExperienceItem[] = [
  {
    period: "June 2026",
    role: "Founder & CEO",
    organization: "Point Reyes Sound, Inc., San Francisco, CA"
  },
  {
    period: "2024–2025",
    role: "Senior Quantum Solutions Chemist",
    organization: "PsiQuantum, Palo Alto, CA, USA"
  },
  {
    period: "2023–2024",
    role: "Staff Researcher in Quantum AI",
    organization: "University of Chicago, Chicago, IL, USA"
  },
  {
    period: "2017–2023",
    role: "Postdoctoral Research Fellow",
    organization: "UC Berkeley & LBNL, Berkeley, CA, USA"
  }
];
