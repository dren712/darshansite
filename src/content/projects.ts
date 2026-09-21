export interface ArchitectureStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  subtext?: string;
}

export interface FlagshipProject {
  id: string;
  tier: "BUILT_CURRENT" | "BUILT_FOUNDATIONS" | "EXPERIMENTED" | "BUILDING" | "LONG_TERM";
  tierLabel: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  theQuestion: string;
  whatIHadToLearn: string;
  howTheSystemWorked: string;
  whatActuallyShipped: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  paperNote?: string;
  flowTitle: string;
  flowSteps: ArchitectureStep[];
  technicalHighlights: string[];
}

export const progressionBridge = [
  {
    step: "01",
    title: "PROVN",
    subtitle: "Proof of Work",
    question: "Can human developer contributions be independently verified and anchored without platform mercy?",
    flow: "Human Work → Cryptographic Evidence → On-Chain Reputation",
  },
  {
    step: "02",
    title: "SENTINEL FINANCE",
    subtitle: "Guarded Autonomous Action",
    question: "Can an AI agent make financial decisions while on-chain postconditions guarantee user constraints?",
    flow: "AI Decision → Constraint Enforcement → Guarded Devnet Settlement",
  },
  {
    step: "03",
    title: "AGENT VERIFICATION",
    subtitle: "Proof of Agent Action",
    question: "How do we prove what an autonomous agent did, under whose authority, and whether policy was respected?",
    flow: "Agent Execution → Canonical Envelope → Non-Repudiable Receipt",
  },
];

export const projectsHierarchy = {
  builtCurrent: [
    {
      id: "provn",
      tier: "BUILT_CURRENT" as const,
      tierLabel: "BUILT · CURRENT",
      number: "01",
      title: "PROVN",
      subtitle: "Solana-Native Cryptographic Provenance Protocol",
      tagline: "What if your work history could be independently verified without platform mercy?",
      category: "Cryptographic Infrastructure · Solana",
      theQuestion:
        "Developer work and agent executions are scattered across PRs, private tools, and fragile platforms. Resumes can be fabricated or deleted. Can we turn contributions into immutable, self-sovereign evidence envelopes signed with a keypair?",
      whatIHadToLearn:
        "Solana account structures, Anchor specifications, Ed25519 signature mechanics, Arweave transaction tagging via Irys, Row-Level Security in Postgres, and threat modeling for anti-replay verification gates.",
      howTheSystemWorked:
        "Users or agents sign canonical JSON work envelopes with Ed25519 keypairs. An API gateway enforces a ±15-minute anti-replay sliding window. Evidence envelopes are permanently archived to Arweave via Irys, and immutable commitments are anchored to deterministic Solana PDAs [b'proof', authority, proof_id].",
      whatActuallyShipped:
        "A live, running protocol on Solana Devnet and Irys, 294 air-gapped cryptographic unit tests, 304 passing CI tests, a live verifier inspector, dynamic SVG proof passports, and protection against 5 active threat vectors documented in the Litepaper.",
      stack: ["Solana", "Anchor (Building & Learning)", "Rust", "Ed25519", "Irys / Arweave", "Next.js", "Postgres RLS"],
      liveUrl: "https://provn-sol.vercel.app",
      repoUrl: "https://github.com/dren712/pow-logger",
      flowTitle: "PROVENANCE EXECUTION PIPELINE",
      flowSteps: [
        {
          id: "p1",
          stepNumber: "01",
          title: "Sign with Keypair",
          description: "Author signs canonical work envelope with Ed25519 keypair, binding identity to contribution.",
          subtext: "Cryptographic origin",
        },
        {
          id: "p2",
          stepNumber: "02",
          title: "Anti-Replay Verification",
          description: "Gateway validates signature and consumes single-use challenge within a ±15-minute sliding window.",
          subtext: "Replay defense",
        },
        {
          id: "p3",
          stepNumber: "03",
          title: "Arweave Permanent Storage",
          description: "Background pipeline permanently anchors evidence payload onto Arweave via Irys.",
          subtext: "Data availability",
        },
        {
          id: "p4",
          stepNumber: "04",
          title: "Anchor PDA Commitment",
          description: "On-chain state committed to deterministic PDA [b'proof', authority, proof_id] on Solana.",
          subtext: "On-chain settlement",
        },
        {
          id: "p5",
          stepNumber: "05",
          title: "Independent Verifier",
          description: "Third parties inspect the 5-link cryptographic chain independently with zero-knowledge assumptions.",
          subtext: "Public verification",
        },
      ],
      technicalHighlights: [
        "294 offline tests covering signature tampering, challenge expiration, and replay defense",
        "Deterministic PDA derivations [b'proof', authority, proof_id]",
        "Permanent decentralized archival via Irys and Arweave L1",
        "SIWS OAuth binding GitHub identities to Solana wallet keypairs",
      ],
    },
    {
      id: "sentinel-finance",
      tier: "BUILT_CURRENT" as const,
      tierLabel: "BUILT · STOCKLANA HACKATHON · 2026",
      number: "02",
      title: "SENTINEL FINANCE",
      subtitle: "Autonomous Financial Agent Execution & Policy Guardrails on Solana",
      tagline: "What if an AI agent could make the decision — but could never settle an outcome that violated the user's rules?",
      category: "Autonomous Finance · Solana Devnet Program",
      theQuestion:
        "When an investor delegates portfolio management to an autonomous agent, authorization alone is not enough. The agent can be allowed to trade. But what guarantees that the resulting financial state still satisfies the investor's rules? Sentinel explores a stricter model: The agent can decide. The protocol decides whether the resulting state is allowed to settle.",
      whatIHadToLearn:
        "Anchor program architecture, Solana account and state modeling, on-chain policy enforcement, financial invariant checks, fixed-point financial math, Pyth price feed consumption, Meteora DBC execution adapters, autonomous agent loop orchestration, and PROVN evidence commitments.",
      howTheSystemWorked:
        "The agent proposes a trade. Sentinel evaluates whether the resulting financial state violates defined constraints: maximum single-asset exposure, minimum stablecoin reserve, maximum trade size, slippage bounds, and pre-IPO allocation ceilings. The Anchor program's `execute_guarded_trade` instruction is the authoritative enforcement boundary: if compliant, it settles; if non-compliant, it atomically reverts. All executions generate PROVN cryptographic evidence envelopes.",
      whatActuallyShipped:
        "A working Stocklana hackathon prototype with a live Solana Devnet Anchor program, policy engine, autonomous robo-agent loop, execution adapters (Meteora, PreStocks), and PROVN evidence integration. The repository explicitly distinguishes between verified on-chain code, cryptographic engines, and simulated execution.",
      stack: ["Solana Devnet", "Anchor Program", "Rust", "Python", "Pyth Oracle", "Meteora DBC", "PROVN Receipts"],
      repoUrl: "https://github.com/dren712/sentinel_finance",
      flowTitle: "FLAGSHIP FIVE-STEP GUARDED DEMO",
      flowSteps: [
        {
          id: "s1",
          stepNumber: "01",
          title: "Connect & Set Constraints",
          description: "Investor defines strict vault invariants: max 25% single-asset exposure, min 30% stablecoin reserve.",
          subtext: "Policy boundary",
        },
        {
          id: "s2",
          stepNumber: "02",
          title: "Agent Proposes Violating Trade",
          description: "Autonomous robo-agent attempts a 45% allocation to an aggressive asset based on market signals.",
          subtext: "Autonomous decision",
        },
        {
          id: "s3",
          stepNumber: "03",
          title: "Sentinel Rejects & Reverts",
          description: "execute_guarded_trade instruction checks postconditions against Pyth feeds and atomically reverts.",
          subtext: "On-chain revert",
        },
        {
          id: "s4",
          stepNumber: "04",
          title: "Agent Adapts Strategy",
          description: "Robo-agent parses revert constraints, recalculates allocations within bounds, and resubmits.",
          subtext: "Adaptive loop",
        },
        {
          id: "s5",
          stepNumber: "05",
          title: "Compliant Trade Settles",
          description: "Guarded transaction satisfies all postconditions, settles on Solana Devnet, and records PROVN receipt.",
          subtext: "Guaranteed settlement",
        },
      ],
      technicalHighlights: [
        "On-chain postcondition enforcement via Anchor execute_guarded_trade instruction",
        "Deterministic financial invariant validation (exposure caps, reserve floors, slippage bounds)",
        "Integrated Pyth network price feeds and Meteora dynamic bonding curve adapter",
        "Direct bridge between autonomous decision-making and verifiable cryptographic proofs",
      ],
    },
  ],
  builtFoundations: [
    {
      id: "raspberry-pi-nas",
      tier: "BUILT_FOUNDATIONS" as const,
      tierLabel: "BUILT · 2025 · 3RD YEAR MINI PROJECT",
      number: "03",
      title: "Raspberry Pi Private Cloud NAS",
      subtitle: "Self-Hosted Microservices & Private Cloud Architecture",
      tagline: "I wanted my own cloud.",
      category: "Systems Infrastructure · Linux & Docker",
      theQuestion:
        "Why depend on centralized commercial cloud storage when you can build and operate your own miniature private cloud with containerized services and remote networking?",
      whatIHadToLearn:
        "Linux system administration from scratch, systemd services, Docker container orchestration, reverse tunneling (ngrok), local area network routing, file-system permissions, and physical thermal constraints on ARM SBC hardware.",
      howTheSystemWorked:
        "The Raspberry Pi acted as a physical host running a customized Linux OS. Docker containerized independent microservices and storage daemons. An ngrok tunnel provided secure, encrypted remote access from outside the local network without exposing raw router ports.",
      whatActuallyShipped:
        "A continuously operating physical home server providing personal file storage, remote media streaming, and isolated service containers accessible from any device over the internet.",
      stack: ["Raspberry Pi", "Linux (Debian)", "Docker", "Docker Compose", "ngrok", "Networking", "Bash"],
      flowTitle: "PRIVATE CLOUD TOPOLOGY",
      flowSteps: [
        {
          id: "pi1",
          stepNumber: "01",
          title: "Incoming Internet Request",
          description: "Remote client requests access from outside the local home network.",
          subtext: "External network",
        },
        {
          id: "pi2",
          stepNumber: "02",
          title: "Encrypted ngrok Tunnel",
          description: "Secure, authenticated tunnel punches through NAT without open port forwarding.",
          subtext: "Security gateway",
        },
        {
          id: "pi3",
          stepNumber: "03",
          title: "Raspberry Pi Host",
          description: "ARM single-board computer manages system resources, storage volumes, and systemd.",
          subtext: "Physical hardware",
        },
        {
          id: "pi4",
          stepNumber: "04",
          title: "Docker Host & Services",
          description: "Isolated containerized services handle storage, streaming, and background cron jobs.",
          subtext: "Container isolation",
        },
        {
          id: "pi5",
          stepNumber: "05",
          title: "Local Storage Volumes",
          description: "Persistent storage drives mapped securely with access control and local backups.",
          subtext: "Private storage",
        },
      ],
      technicalHighlights: [
        "Hands-on mastery of Linux permissions, ARM architectures, and networking protocols",
        "Operated as a functional personal daily driver for remote file synchronization",
        "Containerized independent microservices with secure reverse tunneling via ngrok",
      ],
    },
    {
      id: "hpurn",
      tier: "BUILT_FOUNDATIONS" as const,
      tierLabel: "BUILT · 2026 · FINAL YEAR MAJOR PROJECT",
      number: "04",
      title: "HPURN — AI-Based Video Dehazing",
      subtitle: "Deep Learning Pipeline for Spatiotemporal Video Restoration",
      tagline: "What happens when image restoration has to work across time, not just individual frames?",
      category: "Machine Learning Research · Computer Vision",
      theQuestion:
        "Single-image dehazing methods flicker and fail when applied to continuous video streams. How do we preserve temporal consistency across frames while removing non-uniform haze?",
      whatIHadToLearn:
        "Atmospheric scattering models, Dark Channel Prior mathematics, ConvLSTM recurrent spatiotemporal architectures, and adversarial loss formulations in CycleGAN.",
      howTheSystemWorked:
        "Combined a physics-based Dark Channel Prior (DCP) with an AOD-Net transmission estimator, passed recurrent features through ConvLSTM to enforce inter-frame smoothness, and refined visual quality using CycleGAN unpaired adversarial translation.",
      whatActuallyShipped:
        "A complete research pipeline evaluated on the RESIDE-6k benchmark dataset. Research paper accepted with minor revisions at ICAIMEST and registered under Government of India Copyright.",
      stack: ["Python", "PyTorch", "CycleGAN", "ConvLSTM", "Dark Channel Prior", "RESIDE-6k"],
      paperNote: "Accepted with minor revisions at ICAIMEST · Govt. of India Copyright",
      flowTitle: "SPATIOTEMPORAL RESTORATION PIPELINE",
      flowSteps: [
        {
          id: "h1",
          stepNumber: "01",
          title: "Hazy Video Stream",
          description: "Input degraded sequential video frames with atmospheric attenuation and haze.",
          subtext: "Degraded input",
        },
        {
          id: "h2",
          stepNumber: "02",
          title: "Dark Channel Prior (DCP)",
          description: "Physics-based estimation of atmospheric light and initial transmission map.",
          subtext: "Atmospheric prior",
        },
        {
          id: "h3",
          stepNumber: "03",
          title: "AOD-Net Transformation",
          description: "Reformulates atmospheric scattering equations to directly estimate transmission.",
          subtext: "Neural estimation",
        },
        {
          id: "h4",
          stepNumber: "04",
          title: "ConvLSTM Temporal Gate",
          description: "Maintains recurrent memory across consecutive frames to eliminate visual flicker.",
          subtext: "Temporal consistency",
        },
        {
          id: "h5",
          stepNumber: "05",
          title: "CycleGAN Reconstruction",
          description: "Unpaired adversarial translation refines high-frequency edge details and contrast.",
          subtext: "Restored video",
        },
      ],
      technicalHighlights: [
        "Government of India Copyright registered",
        "Academic paper accepted with minor revisions at ICAIMEST",
        "Combined classical physics-based optics (DCP) with modern deep recurrent networks",
        "Rigorous empirical evaluation against standard computer vision benchmarks (RESIDE-6k)",
      ],
    },
  ],
  experimented: [
    {
      id: "forge",
      tier: "EXPERIMENTED" as const,
      tierLabel: "EXPERIMENTED · HACKATHON PROTOTYPE",
      number: "05",
      title: "FORGE",
      subtitle: "Autonomous Agent Evolution Engine",
      tagline: "A few-hour hackathon experiment in autonomous agent engineering.",
      category: "Autonomous AI · Speed & Orchestration",
      theQuestion:
        "Agents break when they hit unexpected API constraints. Can an agent treat its own runtime failures as training signals and mutate its own prompts and tool playbooks?",
      whatIHadToLearn:
        "How to quickly structure a dual-loop reflection system during a compressed hackathon window using Agent Orchestrator (AO) and FastAPI.",
      howTheSystemWorked:
        "An Inner Loop catches tool errors and caches successful playbooks. An Outer Loop clusters benchmark failures and passes architectural mutations through a Pareto Acceptance Gate.",
      whatActuallyShipped:
        "A working prototype with a live interactive web dashboard, FastAPI service, and empirical test bench demonstrating a 75% latency reduction on repeat warm runs.",
      stack: ["Python", "FastAPI", "Next.js", "Agent Orchestrator", "PostgreSQL"],
      liveUrl: "https://forge-agentd.vercel.app/",
      repoUrl: "https://github.com/dren712/forge",
      flowTitle: "DUAL-LOOP EVOLUTIONARY FLOW",
      flowSteps: [
        {
          id: "f1",
          stepNumber: "01",
          title: "Cold Execution Failure",
          description: "Agent encounters undocumented API rate limit or error in target environment.",
          subtext: "Runtime error",
        },
        {
          id: "f2",
          stepNumber: "02",
          title: "Inner Loop Reflection",
          description: "Synthesizes operational tool playbook and caches it into persistent memory.",
          subtext: "Playbook cache",
        },
        {
          id: "f3",
          stepNumber: "03",
          title: "Warm Run Zero-Waste",
          description: "Re-execution uses cached playbooks, cutting tool calls by 66.7% and latency by 75%.",
          subtext: "Instant recovery",
        },
        {
          id: "f4",
          stepNumber: "04",
          title: "Pareto Acceptance Gate",
          description: "Outer loop merges architectural mutations only if accuracy, latency, and cost improve.",
          subtext: "Regression guard",
        },
      ],
      technicalHighlights: [
        "Built rapidly during a hackathon to test agent adaptation mechanics",
        "Demonstrates speed, experimentation, and AI-assisted prototyping",
        "Measured empirical gains: -66.7% tool calls, -75% latency, 100% accuracy on warm repeat runs",
      ],
    },
  ],
  exploring: [
    {
      id: "agent-verification",
      tier: "BUILDING" as const,
      tierLabel: "BUILDING / EXPLORING",
      number: "06",
      title: "Agent Verification Layer",
      subtitle: "Cryptographic Audit Receipts & Policy Gates for Autonomous Agents",
      tagline: "Can autonomous software actions themselves be proven?",
      category: "Active Research · AI × Cryptography",
      theQuestion:
        "As autonomous agents execute code changes, API calls, and x402 payments, organizations need non-repudiable receipts. How do we verify agent behavior without human bottlenecks?",
      whatIHadToLearn:
        "Researching cryptographic receipt structures, delegation mechanisms, policy enforcement schemas, and Solana micro-payment state models.",
      howTheSystemWorked:
        "Agents generate structured execution traces signed with dedicated Ed25519 keypairs, verified against deterministic policy gates, and anchored on-chain for dispute resolution.",
      whatActuallyShipped:
        "Active architectural specifications, threat models, and receipt prototypes evolving directly out of the PROVN cryptographic core.",
      stack: ["Solana", "Ed25519", "x402 Payments", "Agent Keypairs", "Anchor"],
      flowTitle: "AGENT VERIFICATION FLOW",
      flowSteps: [
        {
          id: "av1",
          stepNumber: "01",
          title: "Agent Tool Invocation",
          description: "Agent initiates external API call, code commit, or transaction.",
          subtext: "Autonomous action",
        },
        {
          id: "av2",
          stepNumber: "02",
          title: "Canonical Trace",
          description: "Generates deterministic execution envelope with input, output, and timestamp.",
          subtext: "Structured trace",
        },
        {
          id: "av3",
          stepNumber: "03",
          title: "Keypair Signature",
          description: "Agent signs envelope with dedicated cryptographic keypair.",
          subtext: "Attribution",
        },
        {
          id: "av4",
          stepNumber: "04",
          title: "Policy & On-Chain Anchor",
          description: "Verifies authority constraints and anchors receipt hash on Solana.",
          subtext: "Verifiable record",
        },
      ],
      technicalHighlights: [
        "Natural evolution from human proof-of-work (PROVN) and guarded action (Sentinel) to autonomous proof-of-action",
        "Focuses on verifiable receipts and policy enforcement for AI systems that execute money and code",
      ],
    },
  ],
  longTerm: [
    {
      id: "civilization-engine",
      tier: "LONG_TERM" as const,
      tierLabel: "LONG-TERM RESEARCH THESIS",
      number: "07",
      title: "Civilization Engine & Cultural Ledger",
      subtitle: "Research Exploration in Autonomous Living Worlds",
      tagline: "A question I'm obsessed with: What happens when generative worlds can remember, evolve, and create their own cultural continuity?",
      category: "Long-Term Research · Living-World Systems",
      theQuestion:
        "Current virtual worlds are static scripts. Generative AI creates disconnected content while scraping cultural heritage without attribution. Can we model autonomous societies that evolve lore and record cultural assets on an open ledger?",
      whatIHadToLearn:
        "Researching emergent narrative graphs, procedural world generation, agent social memory indexing, cultural attribution frameworks, and decentralized state compression.",
      howTheSystemWorked:
        "A decoupled 5-tier architecture: (1) World Substrate, (2) Cultural Ledger for cryptographic attribution, (3) Character Consciousness, (4) Civilization Memory, and (5) Narrative Intelligence.",
      whatActuallyShipped:
        "Not a finished company or commercial startup — this is an intellectual research specification, conceptual framework, and active design exploration.",
      stack: ["Solana State Compression", "Vector Memory", "Autonomous Agents", "Narrative Graphs"],
      flowTitle: "THE 5-TIER LIVING-WORLD ARCHITECTURE",
      flowSteps: [
        {
          id: "ce1",
          stepNumber: "01",
          title: "World Generation",
          description: "Synthesizes spatial coordinate grids, resource constraints, and physical laws.",
          subtext: "World Substrate",
        },
        {
          id: "ce2",
          stepNumber: "02",
          title: "Cultural Ledger",
          description: "On-chain registry recording folklore, motifs, and attribution for cultural DNA.",
          subtext: "Attribution Layer",
        },
        {
          id: "ce3",
          stepNumber: "03",
          title: "Character Consciousness",
          description: "Agents with persistent memory, subjective motivations, and evolving social ties.",
          subtext: "Agent Society",
        },
        {
          id: "ce4",
          stepNumber: "04",
          title: "Civilization Memory",
          description: "Stores societal milestones, historical conflicts, and persistent cultural evolution.",
          subtext: "Living History",
        },
        {
          id: "ce5",
          stepNumber: "05",
          title: "Narrative Intelligence",
          description: "Extracts emergent drama and synthesizes dynamic storytelling and aesthetic motifs.",
          subtext: "Emergent Lore",
        },
      ],
      technicalHighlights: [
        "Explores cultural provenance and micro-royalties inside generative worlds",
        "Conceptual architecture exploring decentralized living-world runtimes",
        "Clear demarcation: long-term intellectual research, not an over-hyped startup claim",
      ],
    },
  ],
};
