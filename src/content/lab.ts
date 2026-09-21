export interface ExplorationItem {
  id: string;
  code: string;
  title: string;
  category: string;
  status: "BUILDING" | "RESEARCH";
  summary: string;
  thesis?: string;
  flow?: string[];
  modules?: string[];
}

export const explorations: ExplorationItem[] = [
  {
    id: "agent-verification",
    code: "EXPLORATION // 01",
    title: "Agent Verification Layer",
    category: "Verifiable AI Infrastructure",
    status: "BUILDING",
    summary:
      "Extending PROVN toward verifiable AI-agent actions, execution receipts, and x402 payments. When autonomous agents invoke tools, access external APIs, and move capital, auditability cannot rely on centralized logs. Agents must sign canonical execution receipts evaluated against deterministic security boundaries and anchored on Solana.",
    flow: ["AGENT", "ACTION", "SIGNED RECEIPT", "POLICY CHECK", "ANCHOR", "AUDIT"],
  },
  {
    id: "civilization-engine",
    code: "EXPLORATION // 02",
    title: "Civilization Engine & Cultural Ledger",
    category: "Autonomous Worlds & Cultural Memory",
    status: "RESEARCH",
    thesis: "What happens when generated worlds can remember?",
    summary:
      "Virtual environments will shift from static game loops to persistent, evolving civilizations. Decoupling world generation, narrative intelligence, character agent loops, and historical memory creates living worlds that remember player interactions and evolve autonomously over time.",
    modules: [
      "World Generation",
      "Narrative Intelligence",
      "Character Systems",
      "Civilization Memory",
      "Cultural Ledger",
    ],
  },
];
