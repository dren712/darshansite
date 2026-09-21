export interface SkillPillar {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  items: Array<{
    name: string;
    detail: string;
    status?: string;
  }>;
}

export const learningModeNote = {
  headline: "Current Learning Mode",
  flow: "Docs → Experiments → Broken Things → Understanding → Working System",
  annotation: "I don't need to know everything before I start building. I need to know how to figure things out.",
};

export const skillPillars: SkillPillar[] = [
  {
    id: "think",
    code: "PILLAR // 01",
    name: "THINK",
    tagline: "Decomposing problems before writing code",
    description:
      "Understanding the true nature of a problem, mapping out state machines, identifying threat surfaces, and finding minimal architectural primitives.",
    items: [
      { name: "Systems Design", detail: "Component boundaries, trust models, data lifecycles" },
      { name: "Architecture", detail: "Decoupled layers, composable contracts, event pipelines" },
      { name: "Research & Synthesis", detail: "Deep reading of academic papers and technical specs" },
      { name: "Problem Decomposition", detail: "Breaking vague, ambitious ideas into testable pieces" },
      { name: "Technical Exploration", detail: "Evaluating trade-offs between speed, cost, and invariants" },
    ],
  },
  {
    id: "build",
    code: "PILLAR // 02",
    name: "BUILD",
    tagline: "High-leverage implementation & verification",
    description:
      "Combining AI coding tools with deliberate review to create working software. Actively building and learning across the modern stack.",
    items: [
      { name: "AI-Assisted Development", detail: "Directing Claude, Antigravity, and Gemini to generate clean implementations" },
      { name: "TypeScript & Next.js", detail: "Modern full-stack web applications, React server components, Edge APIs" },
      { name: "Solana & Anchor", detail: "Actively building on-chain PDAs, account validation, and state machines" },
      { name: "Rust & Pinocchio", detail: "Actively building and learning safe systems programming and contracts" },
      { name: "Python & FastAPI", detail: "Async services, data pipelines, agent harnesses, empirical benchmarks" },
      { name: "Docker & Linux", detail: "Containerization, microservices, local cloud setups (Raspberry Pi)" },
      { name: "PostgreSQL & Supabase", detail: "Row-Level Security (RLS), atomic RPC functions, relational modeling" },
    ],
  },
  {
    id: "connect",
    code: "PILLAR // 03",
    name: "CONNECT",
    tagline: "Wiring primitives into cohesive pipelines",
    description:
      "Software rarely lives in isolation. Connecting disparate systems across local hardware, cloud APIs, decentralized networks, and autonomous agents.",
    items: [
      { name: "REST & RPC APIs", detail: "Integrating external services, managing rate limits, structured JSON contracts" },
      { name: "Microservice Architecture", detail: "Docker container networking, tunneling (ngrok), inter-service communication" },
      { name: "Cloud & Self-Hosted Networking", detail: "Private cloud routing, port forwarding, local storage management" },
      { name: "On-Chain & Storage Networks", detail: "Connecting Solana programs to Arweave / Irys permanent data availability" },
      { name: "Autonomous AI Agents", detail: "Tool-calling protocols, agent memory loops, receipt generation" },
    ],
  },
  {
    id: "learn",
    code: "PILLAR // 04",
    name: "LEARN",
    tagline: "The meta-skill: figuring out unfamiliar territory",
    description:
      "Learning is not a prerequisite to be finished before starting; it is the core discipline of an AI-native engineer.",
    items: [
      { name: "Technical Documentation", detail: "Reading official API docs, protocol specs, and architectural whitepapers" },
      { name: "Open-Source Repositories", detail: "Studying production implementations, test suites, and issue trackers" },
      { name: "Protocol Specifications", detail: "Dissecting standards like Ed25519, Solana PDAs, and Arweave tagging" },
      { name: "Deliberate Experiments", detail: "Building small sacrificial prototypes to test specific technical assumptions" },
      { name: "Finding Where Code Fails", detail: "Validating agent outputs, finding subtle bugs, and iterating rapidly" },
    ],
  },
];
