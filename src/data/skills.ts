export interface SkillCategory {
  id: string;
  category: string;
  period: string;
  technologies: string[];
  rawText: string;
}

export const skillsData: SkillCategory[] = [
  {
    id: "hpc",
    category: "HPC",
    period: "2012–now",
    technologies: ["Python", "C++", "MPI", "Slurm", "GPU Acceleration", "Linux"],
    rawText: "Python, C++, MPI, Slurm, GPU Acceleration, Linux"
  },
  {
    id: "quantum-simulation",
    category: "Quantum Simulation",
    period: "2012–now",
    technologies: ["FTQC", "QEC", "Quantum Boltzmann Equation (QBE)"],
    rawText: "FTQC, QEC, Quantum Boltzmann Equation (QBE)"
  },
  {
    id: "data-pipelines",
    category: "Data Pipelines",
    period: "2022–now",
    technologies: ["Vector Databases", "ChromaDB", "Azure"],
    rawText: "Vector Databases, ChromaDB, Azure"
  },
  {
    id: "ml-infrastructure",
    category: "ML Infrastructure",
    period: "2023–now",
    technologies: ["PyTorch", "JAX", "LLMs", "LoRA"],
    rawText: "PyTorch, JAX, LLMs, LoRA"
  }
];
