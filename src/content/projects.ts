export interface ArchitectureStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  subtext?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  metadata: string;
  category: string;
  group: "CURRENT WORK" | "FOUNDATIONS" | "EXPERIMENTS";
  coreThemes: string[];
  description: string;
  problem?: string;
  approach?: string;
  system?: string;
  outcome?: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  proofBadge?: string;
  pipelineSteps?: ArchitectureStep[];
  technicalDetails?: string[];
}

export const currentProjects: ProjectItem[] = [
  {
    id: "provn",
    number: "01",
    title: "PROVN",
    tagline: "A cryptographically verifiable reputation trail for real-world work.",
    metadata: "2026 · INDEPENDENT BUILD",
    group: "CURRENT WORK",
    category: "Cryptographic Infrastructure · Solana",
    coreThemes: ["Solana", "Cryptographic verification", "Irys", "On-chain reputation"],
    description:
      "A cryptographically verifiable reputation trail for real-world work. The transition from academic and engineering projects into independent systems building on Solana and Arweave.",
    problem:
      "Developer contributions and autonomous agent actions are scattered across platforms, private repos, and unverified resumes. They can be deleted, altered, or fabricated at any time.",
    approach:
      "Instead of trusting third-party platforms, turn human and agent actions into signed evidence envelopes that anyone can cryptographically verify on an open ledger.",
    system:
      "Users sign canonical JSON payloads with their Solana Ed25519 keypair. An API gateway enforces a ±15-minute anti-replay sliding window. Evidence envelopes are permanently archived to Arweave via Irys, and state is anchored on-chain to deterministic Anchor PDAs [b'proof', authority, proof_id].",
    outcome:
      "A live protocol on Solana Devnet and Irys, supported by 294 air-gapped cryptographic unit tests, 304 passing CI tests, and an independent 5-link verifier inspector.",
    stack: ["Solana", "Anchor", "Rust", "Ed25519", "Irys / Arweave", "Next.js", "Postgres RLS"],
    liveUrl: "https://provn-sol.vercel.app",
    repoUrl: "https://github.com/dren712/pow-logger",
    pipelineSteps: [
      { id: "p1", stepNumber: "01", title: "SIGN", description: "Author signs canonical work payload with their Ed25519 keypair.", subtext: "Origin signature" },
      { id: "p2", stepNumber: "02", title: "VERIFY", description: "Gateway validates signature and consumes single-use challenge in ±15m window.", subtext: "Replay defense" },
      { id: "p3", stepNumber: "03", title: "ANCHOR", description: "State committed to deterministic PDA on Solana; evidence archived to Arweave.", subtext: "Permanent storage" },
      { id: "p4", stepNumber: "04", title: "PROVE", description: "Third parties independently inspect the cryptographic envelope without trust assumptions.", subtext: "Public verification" },
    ],
    technicalDetails: [
      "294 offline tests covering signature tampering, challenge expiration, and replay attacks",
      "Deterministic PDA derivations on Solana: [b'proof', authority, proof_id]",
      "Permanent decentralized archival via Irys and Arweave L1",
      "SIWS OAuth binding GitHub identities to Solana wallet keypairs",
    ],
  },
  {
    id: "sentinel-finance",
    number: "02",
    title: "Sentinel Finance",
    tagline: "An autonomous portfolio-management experiment with on-chain financial guardrails.",
    metadata: "2026 · STOCKLANA HACKATHON",
    group: "CURRENT WORK",
    category: "Autonomous Systems · Solana & Financial Guardrails",
    coreThemes: ["Solana", "Autonomous agents", "Tokenized equities", "Financial infrastructure"],
    description:
      "An autonomous portfolio-management experiment exploring the transition from verifiable actions to autonomous actions. Designed with on-chain financial guardrails so agents cannot violate risk parameters.",
    problem:
      "Autonomous financial agents can easily execute disastrous trades or drift outside risk tolerances when market volatility strikes or models hallucinate.",
    approach:
      "Constrain agent autonomy with deterministic smart-contract guardrails. The agent can optimize allocation strategies, but hard stop-losses and max drawdown rules are enforced on-chain.",
    system:
      "Autonomous agents evaluate tokenized equities and market indicators, constructing execution intents. An Anchor smart contract validates that proposed rebalances strictly adhere to predefined drawdown bounds and risk budgets before executing on Solana.",
    outcome:
      "Built during the Stocklana Hackathon (2026) as an exploration into autonomous execution bounded by deterministic financial constraints.",
    stack: ["Solana", "Anchor", "TypeScript", "Python", "Autonomous Agents", "Tokenized Assets"],
    pipelineSteps: [
      { id: "s1", stepNumber: "01", title: "SIGNALS", description: "Agent ingests market feeds, portfolio state, and price volatility.", subtext: "Market telemetry" },
      { id: "s2", stepNumber: "02", title: "STRATEGY", description: "Autonomous model calculates risk-adjusted rebalancing allocations.", subtext: "Agent policy" },
      { id: "s3", stepNumber: "03", title: "GUARDRAIL", description: "On-chain Anchor program validates stop-loss and drawdown boundaries.", subtext: "Deterministic gate" },
      { id: "s4", stepNumber: "04", title: "EXECUTION", description: "Transaction settles on Solana only if all safety constraints pass.", subtext: "Verified rebalance" },
    ],
    technicalDetails: [
      "Built during the Stocklana Hackathon (2026) exploring autonomous agent execution",
      "Explores on-chain invariant enforcement for autonomous agent actions",
      "Demonstrates the move from verifiable actions toward autonomous actions",
    ],
  },
];

export const foundationalProjects: ProjectItem[] = [
  {
    id: "raspberry-pi-nas",
    number: "03",
    title: "Raspberry Pi NAS",
    tagline: "I wanted my own cloud.",
    metadata: "2025 · 3RD YEAR MINI PROJECT",
    group: "FOUNDATIONS",
    category: "Systems Infrastructure · Linux & Docker",
    coreThemes: ["Infrastructure", "Docker", "Networking", "Self-hosting"],
    description:
      "A Raspberry Pi-based private cloud built with Dockerized services, storage and remote access through ngrok. Demonstrates systems thinking before entering Web3.",
    problem:
      "Relying entirely on commercial cloud services felt like operating blind. I wanted to understand how storage, networking, permissions, and services actually work under the hood.",
    approach:
      "Turn physical single-board hardware into a miniature self-hosted private cloud using Linux, Docker containers, local storage volumes, and secure reverse tunnels.",
    system:
      "The Raspberry Pi runs a custom Linux host. Docker containerizes microservices and storage volumes. Encrypted ngrok tunnels punch through NAT securely without opening raw router ports.",
    outcome:
      "A functioning home cloud used daily for remote file synchronization, private media streaming, and containerized background services.",
    stack: ["Raspberry Pi", "Linux (Debian)", "Docker", "Docker Compose", "ngrok", "Bash"],
    pipelineSteps: [
      { id: "pi1", stepNumber: "01", title: "Internet", description: "Remote client requests access from outside the local network.", subtext: "Client request" },
      { id: "pi2", stepNumber: "02", title: "ngrok Tunnel", description: "Encrypted reverse tunnel punches through NAT securely without open ports.", subtext: "Secure gateway" },
      { id: "pi3", stepNumber: "03", title: "Raspberry Pi", description: "ARM hardware managing system resources, storage volumes, and daemons.", subtext: "Physical host" },
      { id: "pi4", stepNumber: "04", title: "Docker", description: "Containerized services for file storage, streaming, and background jobs.", subtext: "Isolated services" },
    ],
    technicalDetails: [
      "Foundational 3rd-year mini project demonstrating systems and networking intuition",
      "Microservice-style container orchestration with Docker Compose",
      "NAT traversal via authenticated tunnels and local file-system management",
    ],
  },
  {
    id: "hpurn",
    number: "04",
    title: "HPURN — AI Video Dehazing",
    tagline: "A deep-learning pipeline for restoring visibility in hazy video.",
    metadata: "2026 · FINAL YEAR MAJOR PROJECT",
    group: "FOUNDATIONS",
    category: "Computer Vision · Deep Learning · Research",
    coreThemes: ["Computer Vision", "Deep Learning", "Research"],
    description:
      "A deep-learning pipeline for restoring visibility in hazy video. Combines physics-based optics priors with recurrent networks and generative refinement.",
    problem:
      "Single-frame dehazing algorithms cause severe flickering and artifacting when applied to continuous video because they ignore temporal continuity between frames.",
    approach:
      "Combine physics-based optics with recurrent deep learning to maintain temporal consistency across sequential video frames.",
    system:
      "A multi-stage pipeline combining Dark Channel Prior (DCP) for atmospheric light estimation, AOD-Net for transmission modeling, ConvLSTM for recurrent temporal smoothness, and CycleGAN for edge detail refinement.",
    outcome:
      "Evaluated on the standard RESIDE-6k benchmark. Research paper accepted with minor revisions at ICAIMEST; registered under Government of India Copyright.",
    stack: ["Python", "PyTorch", "CycleGAN", "ConvLSTM", "Dark Channel Prior", "RESIDE-6k"],
    proofBadge: "Accepted at ICAIMEST · Govt. of India Copyright",
    pipelineSteps: [
      { id: "h1", stepNumber: "01", title: "Hazy Video", description: "Sequential degraded video frames with atmospheric haze.", subtext: "Input stream" },
      { id: "h2", stepNumber: "02", title: "DCP + AOD-Net", description: "Physics-based estimation of atmospheric light and transmission.", subtext: "Optics prior" },
      { id: "h3", stepNumber: "03", title: "ConvLSTM", description: "Maintains recurrent memory across consecutive frames to prevent flicker.", subtext: "Temporal consistency" },
      { id: "h4", stepNumber: "04", title: "CycleGAN", description: "Unpaired adversarial translation refines high-frequency contrast.", subtext: "Restored video" },
    ],
    technicalDetails: [
      "Final year major project demonstrating machine learning research and complex pipelines",
      "Registered Government of India Copyright for spatiotemporal video dehazing architecture",
      "Academic research paper accepted with minor revisions at ICAIMEST",
      "Benchmarked against standard RESIDE-6k synthetic and real-world datasets",
    ],
  },
];

export const experimentProjects: ProjectItem[] = [
  {
    id: "forge",
    number: "05",
    title: "FORGE",
    tagline: "An autonomous agent engineering and evolution experiment built through rapid AI-assisted prototyping.",
    metadata: "2026 · HACKATHON EXPERIMENT",
    group: "EXPERIMENTS",
    category: "AI Agents · Evaluation · Autonomous Engineering",
    coreThemes: ["AI agents", "Evaluation", "Autonomous engineering"],
    description:
      "An autonomous agent engineering and evolution experiment built through rapid AI-assisted prototyping during a hackathon. Explored whether agents could use execution failures as signals for improving future tool calls.",
    stack: ["Python", "FastAPI", "Next.js", "Agent Orchestrator"],
    liveUrl: "https://forge-agentd.vercel.app/",
    repoUrl: "https://github.com/dren712/forge",
  },
];
