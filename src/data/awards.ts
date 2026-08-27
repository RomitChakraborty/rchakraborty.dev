export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export const awardsData: AwardItem[] = [
  {
    year: "Fall 2023",
    title: "Accelerate Foundation Models Research Grant",
    organization: "Microsoft Research",
    description: "Awarded computational grant and funding for fine-tuning OpenAI and custom generative foundation models with physical constraints."
  },
  {
    year: "Summer 2023",
    title: "Award for Contributions to Inclusion in Science and Society",
    organization: "Lawrence Berkeley National Laboratory (Postdoc Assoc.)",
    description: "Recognized for institutional and community contributions to equity, scientific outreach, and computational mentorship."
  },
  {
    year: "Summer 2023",
    title: "Successful EOI for Independent Early Career Fellowships",
    organization: "University of Oxford, UK",
    description: "Shortlisted and endorsed for independent research fellowships in computational quantum chemistry."
  },
  {
    year: "Fall 2015",
    title: "Arts, Science and Culture Graduate Fellowship",
    organization: "University of Chicago, USA",
    description: "Interdisciplinary fellowship fostering collaboration across theoretical sciences and creative design."
  },
  {
    year: "Summer 2009",
    title: "Lindau Graduate Fellowship",
    organization: "German Research Foundation (DFG)",
    description: "Selected to attend the prestigious 59th Lindau Nobel Laureate Meeting in Chemistry (Lindau, Germany)."
  }
];

export interface PeerReviewItem {
  journal: string;
  years: string;
}

export const peerReviewData: PeerReviewItem[] = [
  { journal: "Nature Communications", years: "2022" },
  { journal: "Journal of Chemical Theory and Computation (JCTC)", years: "2023" },
  { journal: "Molecular Physics", years: "2018, 2019, 2020" },
  { journal: "Journal of Physics: Condensed Matter", years: "2017" }
];

export interface MembershipItem {
  organization: string;
  details: string;
}

export const membershipsData: MembershipItem[] = [
  { organization: "American Physical Society (APS)", details: "Active Member (Division of Chemical Physics & Computational Physics)" },
  { organization: "American Chemical Society (ACS)", details: "Councillor (alternate) at California Section (2023–2026); Program Book Coordinator at Western Regional Meeting (2025)" },
  { organization: "Project SEED", details: "Summer Opportunities for Economically Disadvantaged Students (2025–2026)" }
];

export interface TalkItem {
  id: string;
  title: string;
  venue: string;
  date: string;
  youtubeId?: string;
  slidesUrl?: string;
  description: string;
}

export const talksData: TalkItem[] = [
  {
    id: "talk-ftqc-2026",
    title: "Phase-Space Kinetic Transport & Active-Space Qubitization for FTQC",
    venue: "Point Reyes Sound Technical Seminar Series",
    date: "2026",
    description: "Detailed overview of the Quantum Boltzmann Equation self-consistent-field (QBE-SCF) solver and exact resource reduction in fault-tolerant quantum chemistry simulation."
  },
  {
    id: "talk-berkeley-mofs",
    title: "Quantum Chemical Modeling of Gas Adsorption & Open Metal Sites in MOFs",
    venue: "UC Berkeley / Head-Gordon Group Colloquium",
    date: "2023",
    description: "Theoretical and computational mechanisms of hydrogen binding at vanadium(II) and trigonal pyramidal copper(I) centers in metal-organic frameworks."
  },
  {
    id: "talk-uchicago-1rdm",
    title: "Generalized Pauli Constraints & 1-RDM Spectra in Many-Electron Systems",
    venue: "University of Chicago Physical Chemistry Seminar",
    date: "2017",
    description: "Sparsity of wavefunctions, noise-assisted energy transfer, and spectral conditions on one-electron reduced density matrices."
  }
];
