export interface TechCategory {
  name: string;
  code: string;
  items: string[];
  note?: string;
}

export const corePhilosophyNote = {
  quote: "I don't need to know everything before I start building. I need to know how to figure things out.",
  approach: "Docs → Experiments → Systems thinking → Working software",
};

export const techCategories: TechCategory[] = [
  {
    name: "AI",
    code: "01",
    items: ["Machine learning", "AI agents", "AI-assisted development", "Claude / Antigravity / Gemini"],
  },
  {
    name: "Web3",
    code: "02",
    items: ["Solana", "Anchor", "Rust", "Cryptographic primitives (Ed25519, PDAs)"],
  },
  {
    name: "Infrastructure",
    code: "03",
    items: ["Docker", "Linux", "Networking (tunnels, routing)", "Postgres / Supabase"],
  },
  {
    name: "Software",
    code: "04",
    items: ["TypeScript", "Next.js", "Python", "REST & RPC APIs"],
  },
  {
    name: "Hardware",
    code: "05",
    items: ["Raspberry Pi", "ESP8266", "Arduino", "Embedded telemetry"],
  },
];
