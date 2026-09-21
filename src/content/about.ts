export interface TimelineAct {
  actNumber: string;
  phase: string;
  title: string;
  subtitle: string;
  summary: string;
  focus: string;
  technologies: string[];
}

export interface BuildStep {
  step: string;
  name: string;
  question: string;
  description: string;
}

export const humanNarrative = {
  hook: "I tend to ask questions that eventually become engineering problems.",
  story: [
    "I started with electronics.",
    "Then I got obsessed with machine learning.",
    "Then I built my own little cloud on a Raspberry Pi.",
    "Then I fell down the Solana rabbit hole.",
    "Now AI lets me explore systems far outside the boundaries of what I could comfortably build alone.",
    "I spend a lot of time reading documentation, figuring out unfamiliar systems, designing architectures, and orchestrating AI tools to turn those ideas into working software.",
    "I'm still learning a lot. That's kind of the point.",
  ],
  axiom: "Architecture > Systems > Optimization >> Code",
  distinction: "AI accelerates implementation. It does not replace understanding.",
};

export const careerPhases: TimelineAct[] = [
  {
    actNumber: "01",
    phase: "PHASE 1",
    title: "Hardware & Physical Constraints",
    subtitle: "Electronics & Telecommunication Engineering (PCCOER)",
    summary:
      "Working with microcontrollers, sensor telemetry, and circuits taught me that software is only one component of a larger system. Memory, clock cycles, voltage drops, and noisy inputs cannot be hand-waved away.",
    focus: "Physical constraints, embedded control, hardware feedback loops",
    technologies: ["ESP8266", "Arduino", "Embedded C++", "Sensors", "Hardware Constraints"],
  },
  {
    actNumber: "02",
    phase: "PHASE 2",
    title: "Machine Learning & Image Restoration",
    subtitle: "HPURN Neural Dehazing & Academic Research",
    summary:
      "Moved from circuits to probabilistic models. Video dehazing taught me how to combine different algorithms (Dark Channel Prior, ConvLSTM, CycleGAN) into an integrated pipeline, resulting in an accepted paper at ICAIMEST and a Govt. of India Copyright.",
    focus: "Combining unfamiliar techniques into larger systems, benchmark evaluation",
    technologies: ["PyTorch", "CycleGAN", "ConvLSTM", "Dark Channel Prior", "RESIDE-6k"],
  },
  {
    actNumber: "03",
    phase: "PHASE 3",
    title: "Self-Hosted Infrastructure",
    subtitle: "Raspberry Pi Private Cloud NAS",
    summary:
      "I wanted my own cloud. Instead of using off-the-shelf cloud services, I built a miniature private cloud on a Raspberry Pi using Docker, networking tunnels (ngrok), microservice routing, and local storage. This was infrastructure thinking before Web3.",
    focus: "Microservice routing, containerization, private networking, storage",
    technologies: ["Raspberry Pi", "Docker", "Linux", "ngrok", "Local Storage"],
  },
  {
    actNumber: "04",
    phase: "PHASE 4",
    title: "Web3 & Decentralized Primitives",
    subtitle: "Solana, Cryptography & Verifiable State",
    summary:
      "Solana introduced programmable ownership, cryptographic signatures (Ed25519), and open state machines. Learned Anchor, Program Derived Addresses (PDAs), and permanent Arweave storage via Irys, participating in Solana School (Fall 2026).",
    focus: "Actively building and learning Solana engineering and on-chain state",
    technologies: ["Solana", "Anchor (Learning)", "Rust (Building)", "Ed25519", "Irys / Arweave"],
  },
  {
    actNumber: "05",
    phase: "PHASE 5",
    title: "AI-Native Engineering",
    subtitle: "The Implementation Multiplier",
    summary:
      "AI became an implementation multiplier: documentation, decomposition, orchestration, and verification.",
    focus: "Accelerated prototyping, documentation-driven decomposition",
    technologies: ["Claude", "Google Antigravity", "Gemini", "Technical Documentation"],
  },
  {
    actNumber: "06",
    phase: "PHASE 6",
    title: "Autonomous & Verifiable Systems",
    subtitle: "PROVN → Sentinel Finance → Agent Verification",
    summary:
      "Today, the central question is: How do we make systems that can act while still being verifiable? When AI agents make financial trades or invoke tools, how do we enforce policy boundaries and prove what happened? That inquiry connects PROVN, Sentinel Finance, and the Agent Verification Layer.",
    focus: "Cryptographic receipts, financial invariants, agent policy gates",
    technologies: ["PROVN Protocol", "Sentinel Finance", "Agent Verification Layer", "Civilization Engine"],
  },
];

export const buildLoop: BuildStep[] = [
  {
    step: "01",
    name: "Question",
    question: "What is the actual system we need?",
    description:
      "I rarely start with 'how do I code this?' I start with 'what is the system?' Identify what problem needs solving and what constraints cannot be violated.",
  },
  {
    step: "02",
    name: "Research & Documentation",
    question: "What does the documentation actually say?",
    description:
      "I read. I go through documentation, specifications, open-source repositories, and technical examples until I understand enough of the underlying mechanics to make architectural choices.",
  },
  {
    step: "03",
    name: "System Design",
    question: "How do the primitives connect?",
    description:
      "Map out the data flow, state machines, trust boundaries, and failure modes. Decompose a vague, ambitious idea into concrete, executable components.",
  },
  {
    step: "04",
    name: "AI-Assisted Build",
    question: "How do we orchestrate implementation rapidly?",
    description:
      "I give detailed instructions to coding agents (Claude, Antigravity, Gemini). AI handles a large part of the implementation acceleration while I guide the trajectory.",
  },
  {
    step: "05",
    name: "Verify & Challenge",
    question: "Where is the generated code wrong?",
    description:
      "Review the implementation, write tests, inspect edge cases, check anti-replay windows, and test against real APIs. Find where the AI or assumptions failed.",
  },
  {
    step: "06",
    name: "Ship & Iterate",
    question: "Is it running and verified in the real world?",
    description:
      "Deploy the system, observe real behavior, and continuously pull the software toward the thing I actually set out to build.",
  },
];
