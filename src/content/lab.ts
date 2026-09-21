export interface LabNote {
  id: string;
  code: string;
  title: string;
  status: "BUILDING" | "EXPERIMENT" | "RESEARCH" | "FUTURE";
  category: string;
  summary: string;
  thesis: string;
  primitives: string[];
}

export const labNotes: LabNote[] = [
  {
    id: "agent-verification",
    code: "NOTE // 01",
    title: "Agent Verification Layer & x402 Audit Infrastructure",
    status: "BUILDING",
    category: "Cryptographic Infrastructure",
    summary:
      "A verifiable audit and receipt protocol for autonomous AI-agent executions, tool calls, and HTTP 402 payment flows.",
    thesis:
      "As agents gain the ability to deploy infrastructure and spend capital, auditability cannot rely on centralized server logs. Agents must sign canonical execution traces with dedicated keypairs, evaluated against deterministic security boundaries and anchored on Solana.",
    primitives: ["Ed25519 Agent Keypairs", "x402 Payment Receipts", "Anchor PDA Commitments", "Policy Evaluation Gateways"],
  },
  {
    id: "cultural-ledger",
    code: "NOTE // 02",
    title: "Cultural Ledger: Attribution for Generative DNA",
    status: "RESEARCH",
    category: "Crypto-Economics & Provenance",
    summary:
      "On-chain attribution and compensation mechanisms for human cultural traditions utilized within generative world models.",
    thesis:
      "Generative intelligence extracts folklore, mythological structures, and aesthetic motifs without attribution. The Cultural Ledger explores whether cultural heritage can be cryptographically registered and compensated through autonomous micro-royalties on Solana.",
    primitives: ["Solana State Compression", "Provenance Trees", "Attribution Oracles", "Cultural DNA Graph"],
  },
  {
    id: "civilization-simulation",
    code: "NOTE // 03",
    title: "Decentralized Living-World Simulation Substrates",
    status: "RESEARCH",
    category: "Autonomous Worlds",
    summary:
      "Simulation engines where autonomous agent collectives form persistent societies, languages, and societal lore.",
    thesis:
      "Virtual environments will shift from pre-scripted loops to persistent, non-deterministic civilizations. Decoupling world rules, agent consciousness, and historical memory creates worlds that continuously evolve even when players leave.",
    primitives: ["Agent Consciousness Loop", "Vectorized Lore Graphs", "Societal State Transitions", "Procedural World Grids"],
  },
  {
    id: "autonomous-agent-economies",
    code: "NOTE // 04",
    title: "Machine-to-Machine Agent Micro-Settlement",
    status: "EXPERIMENT",
    category: "Agent Economies",
    summary:
      "Autonomous payment and resource negotiation primitives for agent-to-agent service exchanges on Solana.",
    thesis:
      "When software agents purchase compute, APIs, and specialized models from each other, traditional payment gateways fail. Sub-cent Solana settlement combined with signed service contracts enables autonomous agent markets.",
    primitives: ["Micropayment Channels", "Service Level Proofs", "Token Escrows", "Autonomous Arbitration"],
  },
  {
    id: "replay-defense",
    code: "NOTE // 05",
    title: "Deterministic Replay Defense for AI Execution Traces",
    status: "BUILDING",
    category: "Security & Verification",
    summary:
      "Cryptographic protocols preventing adversarial replay and timestamp forgery in autonomous agent tool calls.",
    thesis:
      "In untrusted execution runtimes, an adversary can replay previous agent outputs to spoof unauthorized actions. Bounded sliding observation windows and challenge consumption guarantee non-repudiation.",
    primitives: ["Sliding Observation Windows", "Atomic Database Locks", "Canonical Payload Hashing", "Zero-Knowledge Proofs"],
  },
  {
    id: "reputation-primitives",
    code: "NOTE // 06",
    title: "Verifiable Engineering Reputation Trails",
    status: "EXPERIMENT",
    category: "Decentralized Identity",
    summary:
      "Cryptographic proof systems for technical skill, pull request authorship, and benchmark milestones.",
    thesis:
      "Resumes and portfolio websites are trivially manipulated. True credibility is a cryptographic chain linking commit hashes, CI test suites, and wallet-signed milestones permanently to decentralized storage.",
    primitives: ["SIWS GitHub Attribution", "Irys Permanent Storage", "Metaplex Compressed NFTs", "On-Chain Heatmaps"],
  },
];
