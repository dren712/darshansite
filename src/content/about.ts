export interface BuildStep {
  step: string;
  name: string;
  question: string;
  description: string;
}

export interface TrajectoryMilestone {
  stage: string;
  title: string;
  description: string;
}

export const humanNarrative = {
  hook: "I tend to ask questions that eventually become engineering problems.",
  paragraphs: [
    "I started with electronics.",
    "Then machine learning.",
    "Then I built my own little cloud on a Raspberry Pi.",
    "Then I fell into Solana.",
    "Today I use AI heavily to explore technical territory I wouldn't be able to cover alone. I spend a lot of time reading documentation, designing systems, orchestrating tools and figuring out why things break. I'm still learning. That's kind of the point.",
  ],
  trajectory: [
    { stage: "01", title: "Hardware", description: "Circuits, microcontrollers, physical constraints" },
    { stage: "02", title: "Machine Learning", description: "Image restoration, probabilistic models, PyTorch" },
    { stage: "03", title: "Infrastructure", description: "Raspberry Pi private cloud, Docker, networking" },
    { stage: "04", title: "Solana", description: "Anchor, Rust, PDAs, cryptographic verification" },
    { stage: "05", title: "AI-Native Building", description: "System decomposition, orchestration, rapid implementation" },
    { stage: "06", title: "Autonomous Systems", description: "Agent verification, execution receipts, living worlds" },
  ],
};

export const buildLoop: BuildStep[] = [
  {
    step: "01",
    name: "Question",
    question: "What am I actually trying to build?",
    description:
      "Identify the true problem, core requirements, and non-negotiable constraints before touching code.",
  },
  {
    step: "02",
    name: "Research",
    question: "What do the docs, papers, and specs say?",
    description:
      "Read technical documentation, protocol specifications, and reference repositories until the mechanics make sense.",
  },
  {
    step: "03",
    name: "Design",
    question: "How do the systems and boundaries connect?",
    description:
      "Decompose the problem into clean primitives, data flows, state transitions, and failure modes.",
  },
  {
    step: "04",
    name: "Orchestrate",
    question: "How do we accelerate implementation with AI?",
    description:
      "Direct AI coding tools (Claude, Antigravity, Gemini) with clear architectural context to generate components rapidly.",
  },
  {
    step: "05",
    name: "Verify",
    question: "Where is the generated code or logic wrong?",
    description:
      "Review the implementation, test boundary conditions, challenge hallucinations, and ensure invariants hold.",
  },
  {
    step: "06",
    name: "Ship",
    question: "Is it running and verified in the real world?",
    description:
      "Deploy to real environments, observe real behavior, and iterate continuously on feedback.",
  },
];
