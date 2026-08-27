export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: "submitted" | "in-print";
  isHotArticle?: boolean;
  doi?: string;
  arxiv?: string;
  pdfUrl?: string;
  bibtex: string;
  abstract?: string;
}

export const publicationsData: Publication[] = [
  // --- IN PREPARATION & SUBMITTED ---
  {
    id: "qbe-scf-jcp-2026",
    title: "Quantum Boltzmann Equation Self-Consistent-Field Method for Entropic Regularization of Mean-Field Singularities near Conical Intersections",
    authors: "Chakraborty, R.",
    journal: "Submitted to The Journal of Chemical Physics",
    year: 2026,
    category: "submitted",
    arxiv: "2608.14979",
    bibtex: `@article{chakraborty2026qbescf,
  title={Quantum Boltzmann Equation Self-Consistent-Field Method for Entropic Regularization of Mean-Field Singularities near Conical Intersections},
  author={Chakraborty, Romit},
  journal={arXiv preprint arXiv:2608.14979},
  year={2026}
}`,
    abstract: "We introduce a Quantum Boltzmann Equation self-consistent-field (QBE-SCF) framework that propagates the one-electron reduced density matrix via a Bhatnagar-Gross-Krook (BGK) collision operator. QBE-SCF achieves entropic regularization across mean-field singularities near electronic degeneracies."
  },
  {
    id: "ftqc-prx-quantum-2026",
    title: "Hardware Resource Compilation for Active-Space Driven Fault-Tolerant Quantum Simulation",
    authors: "Chakraborty, R.",
    journal: "Technical Brief / In Preparation for PRX Quantum",
    year: 2026,
    category: "submitted",
    bibtex: `@article{chakraborty2026ftqc,
  title={Hardware Resource Compilation for Active-Space Driven Fault-Tolerant Quantum Simulation},
  author={Chakraborty, Romit},
  journal={PRX Quantum (In Preparation)},
  year={2026}
}`
  },
  {
    id: "quantum-fluid-tbdr-2026",
    title: "Rendering the Quantum Fluid: Mapping Phase-Space Electronic Structure to Tile-Based Deferred Shading",
    authors: "Chakraborty, R.",
    journal: "Technical Brief, Point Reyes Sound, Inc.",
    year: 2026,
    category: "submitted",
    bibtex: `@techreport{chakraborty2026tbdr,
  title={Rendering the Quantum Fluid: Mapping Phase-Space Electronic Structure to Tile-Based Deferred Shading},
  author={Chakraborty, Romit},
  institution={Point Reyes Sound, Inc.},
  year={2026}
}`
  },
  {
    id: "qbe-entrainment-jctc-2026",
    title: "The Quantum Boltzmann Entrainment Tensor: A Hessian-Free Framework for Multireference Orbital Optimization",
    authors: "Chakraborty, R.",
    journal: "In Preparation for JCTC",
    year: 2026,
    category: "submitted",
    bibtex: `@article{chakraborty2026entrainment,
  title={The Quantum Boltzmann Entrainment Tensor: A Hessian-Free Framework for Multireference Orbital Optimization},
  author={Chakraborty, Romit},
  journal={J. Chem. Theory Comput. (In Preparation)},
  year={2026}
}`
  },
  {
    id: "crystalline-ps-lbm-prl-2026",
    title: "Crystalline Phase-Space Lattice Boltzmann Method: k-Space Generalization of Entropic Regularization in Periodic Solids",
    authors: "Chakraborty, R.",
    journal: "In Preparation for Physical Review Letters",
    year: 2026,
    category: "submitted",
    bibtex: `@article{chakraborty2026crystalline,
  title={Crystalline Phase-Space Lattice Boltzmann Method: k-Space Generalization of Entropic Regularization in Periodic Solids},
  author={Chakraborty, Romit},
  journal={Phys. Rev. Lett. (In Preparation)},
  year={2026}
}`
  },
  {
    id: "co-dipole-kinetic-2026",
    title: "On the Kinetic Origin of the CO dipole moment",
    authors: "Chakraborty, R.",
    journal: "In Preparation",
    year: 2026,
    category: "submitted",
    bibtex: `@article{chakraborty2026codipole,
  title={On the Kinetic Origin of the CO dipole moment},
  author={Chakraborty, Romit},
  journal={In Preparation},
  year={2026}
}`
  },
  {
    id: "phase-space-tomography-natchem-2026",
    title: "Phase-Space Tomography Reveals Hidden Topology in Chemical Bonding",
    authors: "Chakraborty, R.",
    journal: "In Preparation for Nature Chemistry",
    year: 2026,
    category: "submitted",
    bibtex: `@article{chakraborty2026tomography,
  title={Phase-Space Tomography Reveals Hidden Topology in Chemical Bonding},
  author={Chakraborty, Romit},
  journal={Nature Chemistry (In Preparation)},
  year={2026}
}`
  },

  // --- IN PRINT & PEER-REVIEWED (VERIFIED CROSSREF DOIs) ---
  {
    id: "pccp-hot-2024",
    title: "Quantum Chemical Modeling of Hydrogen Binding in Metal-Organic Frameworks: Validation, Insight, Predictions and Challenges",
    authors: "Chakraborty, R., Talbot, J. J., Shen, H., Yabuuchi, Y., Jiang, H., Carsch, K.M., Furukawa, H., Long, J.R., Head-Gordon, M.",
    journal: "Phys. Chem. Chem. Phys. 26 (8), 6490–6511",
    year: 2024,
    category: "in-print",
    isHotArticle: true,
    doi: "10.1039/D3CP05540J",
    bibtex: `@article{chakraborty2024quantum,
  title={Quantum Chemical Modeling of Hydrogen Binding in Metal--Organic Frameworks: Validation, Insight, Predictions and Challenges},
  author={Chakraborty, Romit and Talbot, Joseph J and Shen, Henry and Yabuuchi, Yuto and Jiang, Henry and Carsch, Kurtis M and Furukawa, Hiroyasu and Long, Jeffrey R and Head-Gordon, Martin},
  journal={Phys. Chem. Chem. Phys.},
  volume={26},
  number={8},
  pages={6490--6511},
  year={2024},
  publisher={Royal Society of Chemistry},
  doi={10.1039/D3CP05540J},
  note={Selected as a Hot Article}
}`
  },
  {
    id: "jacs-oxygen-2024",
    title: "Selective Adsorption of Oxygen from Humid Air in a Metal–Organic Framework with Trigonal Pyramidal Copper(I) Sites",
    authors: "Carsch, K.M., Chakraborty, R., Head-Gordon, M., Long, J.R. et al.",
    journal: "J. Am. Chem. Soc. 146 (5), 3160–3170",
    year: 2024,
    category: "in-print",
    doi: "10.1021/jacs.3c10753",
    bibtex: `@article{carsch2024selective,
  title={Selective Adsorption of Oxygen from Humid Air in a Metal--Organic Framework with Trigonal Pyramidal Copper(I) Sites},
  author={Carsch, Kurtis M and Chakraborty, Romit and Head-Gordon, Martin and Long, Jeffrey R and others},
  journal={J. Am. Chem. Soc.},
  volume={146},
  number={5},
  pages={3160--3170},
  year={2024},
  doi={10.1021/jacs.3c10753}
}`
  },
  {
    id: "jpcl-eda-2023",
    title: "A Free Energy Decomposition Analysis: Insight into Binding Thermodynamics from Absolutely Localized Molecular Orbitals",
    authors: "Talbot, J.J., Chakraborty, R., Shen, H., Head-Gordon, M.",
    journal: "J. Phys. Chem. Lett. 14 (23), 5432–5440",
    year: 2023,
    category: "in-print",
    doi: "10.1021/acs.jpclett.3c01397",
    bibtex: `@article{talbot2023free,
  title={A Free Energy Decomposition Analysis: Insight into Binding Thermodynamics from Absolutely Localized Molecular Orbitals},
  author={Talbot, Joseph J and Chakraborty, Romit and Shen, Henry and Head-Gordon, Martin},
  journal={J. Phys. Chem. Lett.},
  volume={14},
  number={23},
  pages={5432--5440},
  year={2023},
  doi={10.1021/acs.jpclett.3c01397}
}`
  },
  {
    id: "jpcc-backbonding-2023",
    title: "Assessment of Adsorbate π-Backbonding in Copper(I) Metal–Organic Frameworks via Multinuclear NMR Spectroscopy and Density Functional Theory Calculations",
    authors: "Funke, L.M., Chakraborty, R., Carsch, K.M., Head-Gordon, M., Long, J.R., Reimer, J.A.",
    journal: "J. Phys. Chem. C 127 (15), 7513–7519",
    year: 2023,
    category: "in-print",
    doi: "10.1021/acs.jpcc.3c00462",
    bibtex: `@article{funke2023assessment,
  title={Assessment of Adsorbate $\\pi$-Backbonding in Copper(I) Metal--Organic Frameworks via Multinuclear NMR Spectroscopy and Density Functional Theory Calculations},
  author={Funke, Lea M and Chakraborty, Romit and Carsch, Kurtis M and Head-Gordon, Martin and Long, Jeffrey R and Reimer, Jeffrey A},
  journal={J. Phys. Chem. C},
  volume={127},
  number={15},
  pages={7513--7519},
  year={2023},
  doi={10.1021/acs.jpcc.3c00462}
}`
  },
  {
    id: "jpcl-vanadium-2022",
    title: "Prediction of Multiple Hydrogen Ligation at a Vanadium(II) Site in a Metal–Organic Framework",
    authors: "Chakraborty, R., Carsch, K.M., Jaramillo, D.E., Yabuuchi, Y., Furukawa, H., Long, J.R., Head-Gordon, M.",
    journal: "J. Phys. Chem. Lett. 13 (44), 10471–10478",
    year: 2022,
    category: "in-print",
    doi: "10.1021/acs.jpclett.2c02844",
    bibtex: `@article{chakraborty2022prediction,
  title={Prediction of Multiple Hydrogen Ligation at a Vanadium(II) Site in a Metal--Organic Framework},
  author={Chakraborty, Romit and Carsch, Kurtis M and Jaramillo, David E and Yabuuchi, Yuto and Furukawa, Hiroyasu and Long, Jeffrey R and Head-Gordon, Martin},
  journal={J. Phys. Chem. Lett.},
  volume={13},
  number={44},
  pages={10471--10478},
  year={2022},
  doi={10.1021/acs.jpclett.2c02844}
}`
  },
  {
    id: "jacs-intermediate-2021",
    title: "Observation of an Intermediate to H2 Binding in a Metal–Organic Framework",
    authors: "Barnett, B.R., Evans, H.A., Su, G.M., Jiang, H.Z.H., Chakraborty, R., et al., Head-Gordon, M., Long, J.R.",
    journal: "J. Am. Chem. Soc. 143 (36), 14884–14894",
    year: 2021,
    category: "in-print",
    doi: "10.1021/jacs.1c07223",
    bibtex: `@article{barnett2021observation,
  title={Observation of an Intermediate to H2 Binding in a Metal--Organic Framework},
  author={Barnett, Brandon R and Evans, Hayden A and Su, Grace M and Jiang, Henry ZH and Chakraborty, Romit and others and Head-Gordon, Martin and Long, Jeffrey R},
  journal={J. Am. Chem. Soc.},
  volume={143},
  number={36},
  pages={14884--14894},
  year={2021},
  doi={10.1021/jacs.1c07223}
}`
  },
  {
    id: "qchem5-overview-2021",
    title: "Software for the frontiers of quantum chemistry: An overview of developments in the Q-Chem 5 package",
    authors: "Epifanovsky, E., Gilbert, A.T.B., Feng, X., Lee, J., Mao, Y., Mardirossian, N., ..., Chakraborty, R., ..., Head-Gordon, M., Herbert, J.M., Krylov, A.I.",
    journal: "J. Chem. Phys. 155 (8), 084801",
    year: 2021,
    category: "in-print",
    doi: "10.1063/5.0055522",
    bibtex: `@article{epifanovsky2021software,
  title={Software for the frontiers of quantum chemistry: An overview of developments in the Q-Chem 5 package},
  author={Epifanovsky, Evgeny and Gilbert, Andrew TB and Feng, Xintian and Lee, Joonho and Mao, Yuezhi and Mardirossian, Narbe and Chakraborty, Romit and Head-Gordon, Martin and Herbert, John M and Krylov, Anna I and others},
  journal={J. Chem. Phys.},
  volume={155},
  number={8},
  pages={084801},
  year={2021},
  doi={10.1063/5.0055522}
}`
  },
  {
    id: "jacs-ambient-vanadium-2021",
    title: "Ambient-Temperature Hydrogen Storage via Vanadium(II)-Dihydrogen Complexation in a Metal–Organic Framework",
    authors: "Jaramillo, D.E., Jiang, H.Z.H., Evans, H.A., Chakraborty, R., Furukawa, H., Brown, C.M., Head-Gordon, M., Long, J.R.",
    journal: "J. Am. Chem. Soc. 143 (16), 6248–6256",
    year: 2021,
    category: "in-print",
    doi: "10.1021/jacs.1c01883",
    bibtex: `@article{jaramillo2021ambient,
  title={Ambient-Temperature Hydrogen Storage via Vanadium(II)-Dihydrogen Complexation in a Metal--Organic Framework},
  author={Jaramillo, David E and Jiang, Henry ZH and Evans, Hayden A and Chakraborty, Romit and Furukawa, Hiroyasu and Brown, Craig M and Head-Gordon, Martin and Long, Jeffrey R},
  journal={J. Am. Chem. Soc.},
  volume={143},
  number={16},
  pages={6248--6256},
  year={2021},
  doi={10.1021/jacs.1c01883}
}`
  },
  {
    id: "chemphyschem-pressure-2019",
    title: "Quantum Chemical Modeling of Pressure‐Induced Spin Crossover in Octahedral Metal‐Ligand Complexes",
    authors: "Stauch, T., Chakraborty, R., Head-Gordon, M.",
    journal: "ChemPhysChem 20 (21), 2742–2747",
    year: 2019,
    category: "in-print",
    doi: "10.1002/cphc.201900853",
    bibtex: `@article{stauch2019quantum,
  title={Quantum Chemical Modeling of Pressure-Induced Spin Crossover in Octahedral Metal-Ligand Complexes},
  author={Stauch, Tim and Chakraborty, Romit and Head-Gordon, Martin},
  journal={ChemPhysChem},
  volume={20},
  number={21},
  pages={2742--2747},
  year={2019},
  doi={10.1002/cphc.201900853}
}`
  },
  {
    id: "jcp-pauli-sparsity-2018",
    title: "Sparsity of the wavefunction from the generalized Pauli exclusion principle",
    authors: "Chakraborty, R., Mazziotti, D.A.",
    journal: "J. Chem. Phys. 148 (5), 054106",
    year: 2018,
    category: "in-print",
    doi: "10.1063/1.5010985",
    bibtex: `@article{chakraborty2018sparsity,
  title={Sparsity of the wavefunction from the generalized Pauli exclusion principle},
  author={Chakraborty, Romit and Mazziotti, David A},
  journal={J. Chem. Phys.},
  volume={148},
  number={5},
  pages={054106},
  year={2018},
  doi={10.1063/1.5010985}
}`
  },
  {
    id: "jcp-noise-transfer-2017",
    title: "Noise-assisted energy transfer from the dilation of the set of one-electron reduced density matrices",
    authors: "Chakraborty, R., Mazziotti, D.A.",
    journal: "J. Chem. Phys. 146 (18), 184101",
    year: 2017,
    category: "in-print",
    doi: "10.1063/1.4982927",
    bibtex: `@article{chakraborty2017noise,
  title={Noise-assisted energy transfer from the dilation of the set of one-electron reduced density matrices},
  author={Chakraborty, Romit and Mazziotti, David A},
  journal={J. Chem. Phys.},
  volume={146},
  number={18},
  pages={184101},
  year={2017},
  doi={10.1063/1.4982927}
}`
  },
  {
    id: "ijqc-excited-states-2016",
    title: "Role of the generalized Pauli constraints in the quantum chemistry of excited states",
    authors: "Chakraborty, R., Mazziotti, D.A.",
    journal: "Int. J. Quantum Chem. 116 (10), 784–790",
    year: 2016,
    category: "in-print",
    doi: "10.1002/qua.25120",
    bibtex: `@article{chakraborty2016role,
  title={Role of the generalized Pauli constraints in the quantum chemistry of excited states},
  author={Chakraborty, Romit and Mazziotti, David A},
  journal={Int. J. Quantum Chem.},
  volume={116},
  number={10},
  pages={784--790},
  year={2016},
  doi={10.1002/qua.25120}
}`
  },
  {
    id: "ijqc-structure-1rdm-2015",
    title: "Structure of the one-electron reduced density matrix from the generalized Pauli exclusion principle",
    authors: "Chakraborty, R., Mazziotti, D.A.",
    journal: "Int. J. Quantum Chem. 115 (19), 1305–1310",
    year: 2015,
    category: "in-print",
    doi: "10.1002/qua.24934",
    bibtex: `@article{chakraborty2015structure,
  title={Structure of the one-electron reduced density matrix from the generalized Pauli exclusion principle},
  author={Chakraborty, Romit and Mazziotti, David A},
  journal={Int. J. Quantum Chem.},
  volume={115},
  number={19},
  pages={1305--1310},
  year={2015},
  doi={10.1002/qua.24934}
}`
  },
  {
    id: "pra-openness-2015",
    title: "Sufficient condition for the openness of a many-electron quantum system from the violation of a generalized Pauli exclusion principle",
    authors: "Chakraborty, R., Mazziotti, D.A.",
    journal: "Phys. Rev. A 91 (1), 010101(R)",
    year: 2015,
    category: "in-print",
    doi: "10.1103/PhysRevA.91.010101",
    bibtex: `@article{chakraborty2015sufficient,
  title={Sufficient condition for the openness of a many-electron quantum system from the violation of a generalized Pauli exclusion principle},
  author={Chakraborty, Romit and Mazziotti, David A},
  journal={Phys. Rev. A},
  volume={91},
  number={1},
  pages={010101},
  year={2015},
  doi={10.1103/PhysRevA.91.010101}
}`
  },
  {
    id: "ind-j-phys-klein-gordon-2015",
    title: "Variational aspects of the Klein–Gordon equation",
    authors: "Datta, S.N., Ghosh, A., Chakraborty, R.",
    journal: "Indian J. Phys. 89 (2), 181–187",
    year: 2015,
    category: "in-print",
    doi: "10.1007/s12648-014-0506-6",
    bibtex: `@article{datta2015variational,
  title={Variational aspects of the Klein--Gordon equation},
  author={Datta, Sambhu N and Ghosh, Aniket and Chakraborty, Romit},
  journal={Indian J. Phys.},
  volume={89},
  number={2},
  pages={181--187},
  year={2015},
  doi={10.1007/s12648-014-0506-6}
}`
  },
  {
    id: "pra-spectra-1rdm-2014",
    title: "Generalized Pauli conditions on the spectra of one-electron reduced density matrices of atoms and molecules",
    authors: "Chakraborty, R., Mazziotti, D.A.",
    journal: "Phys. Rev. A 89 (4), 042505",
    year: 2014,
    category: "in-print",
    doi: "10.1103/PhysRevA.89.042505",
    bibtex: `@article{chakraborty2014generalized,
  title={Generalized Pauli conditions on the spectra of one-electron reduced density matrices of atoms and molecules},
  author={Chakraborty, Romit and Mazziotti, David A},
  journal={Phys. Rev. A},
  volume={89},
  number={4},
  pages={042505},
  year={2014},
  doi={10.1103/PhysRevA.89.042505}
}`
  }
];
