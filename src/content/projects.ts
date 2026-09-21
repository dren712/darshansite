export interface ArchitectureStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  subtext?: string;
}

export interface FlagshipProject {
  id: string;
  tier: "BUILT" | "EXPERIMENTED" | "BUILDING" | "LONG-TERM";
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

export const projectsHierarchy: {
  built: FlagshipProject[];
  experimented: FlagshipProject[];
  exploring: FlagshipProject[];
  longTerm: FlagshipProject[];
} = {
  built: [
    {
      id: "provn",
      tier: "BUILT",
      tierLabel: "BUILT · PRODUCTION",
      number: "01",
      title: "PROVN",
      subtitle: "Solana-Native Cryptographic Provenance Protocol",
      tagline: "What if your work history could be independently verified without platform mercy?",
      category: "Cryptographic Infrastructure · Solana",
      theQuestion:
        "Developer work and agent executions are scattered across PRs, private tools, and fragile platforms. Can we turn contributions into immutable, self-sovereign evidence envelopes signed with a keypair?",
      whatIHadToLearn:
        "I didn't start as an expert in Solana. I went deep into Solana documentation, Anchor specifications, Ed25519 signature mechanics, Arweave transaction tagging, and Row-Level Security in Postgres. AI tools accelerated the implementation while I focused on the cryptographic boundaries and threat model.",
      howTheSystemWorked:
        "Users or agents sign canonical JSON work envelopes with Ed25519 keypairs. An API gateway enforces a ±15-minute anti-replay sliding window. Evidence envelopes are permanently archived to Arweave via Irys, and immutable commitments are anchored to deterministic Solana PDAs [b'proof', authority, proof_id].",
      whatActuallyShipped:
        "A live, running protocol on Solana Devnet and Irys, 294 air-gapped cryptographic unit tests, 304 passing CI tests, a live verifier inspector, and dynamic SVG proof passports.",
      stack: ["Solana", "Anchor (Learning)", "Rust", "Ed25519", "Irys / Arweave", "Next.js", "Postgres RLS"],
      liveUrl: "https://provn-sol.vercel.app",
      repoUrl: "https://github.com/dren712/pow-logger",
      flowTitle: "PROVENANCE EXECUTION PIPELINE",
      flowSteps: [
        {
          id: "p1",
          stepNumber: "01",
          title: "Sign with Keypair",
          description: "Author signs canonical work envelope with their Ed25519 keypair, binding identity to work.",
          subtext: "Cryptographic origin",
        },
        {
          id: "p2",
          stepNumber: "02",
          title: "Anti-Replay Verification",
          description: "Gateway validates signature and consumes single-use challenge within a ±15-minute window.",
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
          description: "Third parties inspect the 5-link cryptographic chain independently with zero-knowledge trust.",
          subtext: "Public verification",
        },
      ],
      technicalHighlights: [
        "294 offline tests covering signature tampering, challenge expiration, and replay attacks",
        "Deterministic PDA derivations [b'proof', authority, proof_id]",
        "Permanent decentralized archival via Irys and Arweave L1",
        "SIWS OAuth binding GitHub identities to Solana wallet keypairs",
      ],
    },
    {
      id: "raspberry-pi-nas",
      tier: "BUILT",
      tierLabel: "BUILT · SELF-HOSTED INFRASTRUCTURE",
      number: "02",
      title: "Raspberry Pi Private Cloud NAS",
      subtitle: "Self-Hosted Microservices & Private Storage Cloud",
      tagline: "I wanted my own cloud.",
      category: "Systems Infrastructure · Linux & Docker",
      theQuestion:
        "Why depend on centralized cloud storage providers when you can build and operate your own miniature private cloud with containerized services and remote networking?",
      whatIHadToLearn:
        "Linux system administration from scratch, systemd services, Docker container orchestration, reverse tunneling (ngrok), local area network routing, file-system permissions, and physical thermal management on ARM SBC hardware.",
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
          description: "Remote client requests access from outside local network.",
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
        "A student looked at cloud infrastructure and decided to build a tiny version of it himself",
        "Demonstrated infrastructure and microservices thinking well before entering Web3",
        "Hands-on mastery of Linux permissions, ARM architectures, and networking protocols",
        "Operated as a functional personal daily driver for remote file synchronization",
      ],
    },
    {
      id: "hpurn",
      tier: "BUILT",
      tierLabel: "BUILT · ACADEMIC RESEARCH",
      number: "03",
      title: "HPURN — AI-Based Video Dehazing",
      subtitle: "Deep Learning Pipeline for Spatiotemporal Video Restoration",
      tagline: "What happens when image restoration has to work across time, not just individual frames?",
      category: "Machine Learning Research · Computer Vision",
      theQuestion:
        "Single-image dehazing methods flicker and fail when applied to continuous video streams. How do we preserve temporal consistency across frames while removing non-uniform haze?",
      whatIHadToLearn:
        "Reading academic computer vision papers, atmospheric scattering models, Dark Channel Prior mathematics, ConvLSTM recurrent spatiotemporal architectures, and adversarial loss formulations in CycleGAN.",
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
        "Govt. of India Copyright registered for novel video dehazing neural architecture",
        "Academic paper accepted with minor revisions at ICAIMEST",
        "Combined classical physics-based optics (DCP) with modern deep recurrent networks",
        "Rigorous empirical evaluation against standard computer vision benchmarks (RESIDE-6k)",
      ],
    },
  ],
  experimented: [
    {
      id: "forge",
      tier: "EXPERIMENTED",
      tierLabel: "EXPERIMENTED · HACKATHON PROTOTYPE",
      number: "04",
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
      tier: "BUILDING",
      tierLabel: "BUILDING / EXPLORING",
      number: "05",
      title: "Agent Verification Layer",
      subtitle: "Cryptographic Audit Receipts & Policy Gates for AI Agents",
      tagline: "How do we prove what an autonomous agent did, under whose authority, and whether policy was respected?",
      category: "Active Exploration · AI × Cryptography",
      theQuestion:
        "As autonomous agents execute code changes, API calls, and x402 payments, organizations need non-repudiable receipts. How do we verify agent behavior without human bottlenecks?",
      whatIHadToLearn:
        "Researching cryptographic receipt structures, delegation mechanisms, policy enforcement schemas, and Solana micro-payment state models.",
      howTheSystemWorked:
        "Agents generate structured execution traces signed with dedicated Ed25519 keypairs, verified against deterministic policy gates, and anchored on-chain for dispute resolution.",
      whatActuallyShipped:
        "Active architectural specifications, threat models, and pilot receipt prototypes evolving directly out of the PROVN cryptographic core.",
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
        "Natural evolution from human proof-of-work (PROVN) to autonomous agent proof-of-action",
        "Focuses on verifiable receipts and policy enforcement for AI systems that execute money and code",
      ],
    },
  ],
  longTerm: [
    {
      id: "civilization-engine",
      tier: "LONG-TERM",
      tierLabel: "LONG-TERM INTELLECTUAL THESIS",
      number: "06",
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
