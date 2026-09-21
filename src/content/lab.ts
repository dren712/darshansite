export interface LabNote {
  id: string;
  code: string;
  title: string;
  status: "BUILDING" | "EXPERIMENT" | "RESEARCH" | "FUTURE";
  category: string;
  summary: string;
  thesis: string;
  subInquiries: string[];
  primitives: string[];
}

export const labNotes: LabNote[] = [
  {
    id: "agent-verification",
    code: "PROGRAM // 01",
    title: "Agent Verification Layer & x402 Audit Infrastructure",
    status: "BUILDING",
    category: "Autonomous Systems & Cryptographic Verification",
    summary:
      "A verifiable audit and receipt protocol for autonomous AI agent executions, tool calls, and HTTP 402 machine-to-machine payment settlements.",
    thesis:
      "As software agents gain authority to deploy capital, invoke external APIs, and execute trades, auditability cannot rely on centralized server logs. Agents must sign canonical execution traces with dedicated Ed25519 keypairs. Incorporating deterministic replay defense, sliding observation windows, and on-chain Anchor commitments ensures that machine-to-machine settlements and tool executions remain non-repudiable and bound to human policy.",
    subInquiries: [
      "Authority Policies: Binding autonomous agent runtimes to on-chain constraint boundaries (exposure caps, trade ceilings, revert conditions).",
      "Deterministic Replay Defense: Preventing adversarial trace reuse and timestamp manipulation across distributed execution nodes.",
      "Machine-to-Machine Settlement: Enabling sub-cent Solana payment channels for autonomous API and tool-use monetization.",
    ],
    primitives: [
      "Ed25519 Agent Keypairs",
      "x402 Payment Receipts",
      "Anchor PDA Commitments",
      "Deterministic Replay Defense",
      "Machine-to-Machine Settlement",
    ],
  },
  {
    id: "cultural-ledger",
    code: "PROGRAM // 02",
    title: "Cultural Ledger & Living-World Substrates",
    status: "RESEARCH",
    category: "Autonomous Worlds & Cultural Provenance",
    summary:
      "Decentralized simulation substrates and on-chain attribution mechanisms for persistent agent societies, living lore, and cultural heritage.",
    thesis:
      "Generative world models and autonomous agents extract folklore, aesthetic traditions, and narrative motifs without attribution or memory. The Cultural Ledger explores whether cultural heritage can be cryptographically registered on Solana, allowing living worlds to simulate persistent agent societies with evolving societal memory while routing autonomous micro-royalties back to origin traditions.",
    subInquiries: [
      "Attribution Trees: Using Solana state compression to register folklore, narrative motifs, and cultural DNA with minimal on-chain rent.",
      "Living-World Runtimes: Simulating non-deterministic agent societies with persistent memory and emergent historical lore.",
      "Verifiable Reputation Trails: Linking creative contributions, world milestones, and cultural lineage to permanent Arweave storage.",
    ],
    primitives: [
      "Solana State Compression",
      "Provenance Trees",
      "Living-World Runtimes",
      "Societal Lore Graphs",
      "Verifiable Reputation Trails",
    ],
  },
];
