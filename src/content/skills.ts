export interface CapabilityCategory {
  id: string;
  code: string;
  name: string;
  skills: string[];
  primitives: string[];
}

export const capabilityIndex: CapabilityCategory[] = [
  {
    id: "systems",
    code: "01",
    name: "SYSTEMS",
    skills: [
      "System Architecture",
      "Problem Decomposition",
      "Trust Boundaries",
      "Threat Modeling",
    ],
    primitives: ["State Machines", "Invariant Validation", "Data Flow Isolation"],
  },
  {
    id: "ai",
    code: "02",
    name: "AI & AGENTS",
    skills: [
      "Machine Learning",
      "Autonomous Agents",
      "AI Build Loops",
      "Benchmark Evaluation",
    ],
    primitives: ["PyTorch", "CycleGAN", "ConvLSTM", "Agent Orchestrator"],
  },
  {
    id: "web3",
    code: "03",
    name: "WEB3 & SOLANA",
    skills: [
      "Solana Runtime",
      "Anchor Framework",
      "Rust Smart Contracts",
      "Cryptographic Primitives",
    ],
    primitives: ["PDAs", "Ed25519 Signatures", "Irys / Arweave L1", "Pyth Price Feeds"],
  },
  {
    id: "infrastructure",
    code: "04",
    name: "INFRASTRUCTURE",
    skills: [
      "Docker & Compose",
      "Linux (Debian)",
      "Networking & Tunnels",
      "Postgres (RLS)",
    ],
    primitives: ["Systemd Daemons", "ngrok Reverse Tunnels", "FastAPI", "Next.js / TypeScript"],
  },
  {
    id: "hardware",
    code: "05",
    name: "HARDWARE",
    skills: [
      "Raspberry Pi",
      "Arduino",
      "ESP8266",
      "Embedded C++",
    ],
    primitives: ["Physical Constraints", "Sensor Telemetry", "ARM Single-Board Computers"],
  },
];
