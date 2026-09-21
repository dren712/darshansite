export interface ArchitectureStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  subtext?: string;
}

export interface FlagshipProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  approach: string;
  system: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  paperNote?: string;
  pipelineSteps: ArchitectureStep[];
  technicalDetails?: string[];
}

export const flagshipProjects: {
  provn: FlagshipProject;
  raspberryPiNas: FlagshipProject;
  hpurn: FlagshipProject;
} = {
  provn: {
    id: "provn",
    title: "PROVN",
    tagline: "What if your work history could be independently verified?",
    category: "Cryptographic Infrastructure · Solana",
    problem:
      "Developer contributions and autonomous agent actions are scattered across platforms, private repos, and unverified resumes. They can be deleted, altered, or fabricated at any time.",
    approach:
      "Instead of trusting third-party platforms, turn human and agent actions into signed evidence envelopes that anyone can cryptographically verify on an open ledger.",
    system:
      "Users sign canonical JSON payloads with their Solana Ed25519 keypair. An API gateway enforces a ±15-minute anti-replay sliding window. Evidence envelopes are permanently archived to Arweave via Irys, and state is anchored on-chain to deterministic Anchor PDAs [b'proof', authority, proof_id].",
    outcome:
      "A live, running protocol on Solana Devnet and Irys, supported by 294 air-gapped cryptographic unit tests, 304 passing CI tests, and an independent 5-link verifier inspector.",
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
  raspberryPiNas: {
    id: "raspberry-pi-nas",
    title: "Raspberry Pi Private Cloud NAS",
    tagline: "I wanted my own cloud.",
    category: "Systems Infrastructure · Linux & Docker",
    problem:
      "Relying entirely on commercial cloud services felt like operating blind. I wanted to understand how storage, networking, permissions, and services actually work under the hood.",
    approach:
      "Turn a physical Raspberry Pi into a miniature self-hosted private cloud using Linux, Dockerized containers, local storage, and secure remote tunneling.",
    system:
      "The Raspberry Pi runs a custom Linux host. Docker containerizes microservices and storage volumes. Encrypted ngrok tunnels provide secure remote access over the public internet without opening raw router ports.",
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
      "Microservice-style container orchestration with Docker Compose",
      "Network address translation traversal via authenticated tunnels",
      "Hands-on resource and file-system management on ARM SBC hardware",
    ],
  },
  hpurn: {
    id: "hpurn",
    title: "HPURN — Video Dehazing",
    tagline: "Video dehazing as a temporal problem, not just an image problem.",
    category: "Machine Learning · Computer Vision",
    problem:
      "Single-frame dehazing algorithms cause severe flickering and artifacting when applied to continuous video because they ignore temporal continuity between frames.",
    approach:
      "Combine physics-based optics with recurrent deep learning to maintain temporal consistency across sequential video frames.",
    system:
      "A pipeline combining Dark Channel Prior (DCP) for atmospheric light estimation, AOD-Net for transmission modeling, ConvLSTM for recurrent temporal smoothness, and CycleGAN for edge detail refinement.",
    outcome:
      "Evaluated on the RESIDE-6k benchmark. Research paper accepted with minor revisions at ICAIMEST; registered under Government of India Copyright.",
    stack: ["Python", "PyTorch", "CycleGAN", "ConvLSTM", "Dark Channel Prior", "RESIDE-6k"],
    paperNote: "Accepted with minor revisions at ICAIMEST · Govt. of India Copyright",
    pipelineSteps: [
      { id: "h1", stepNumber: "01", title: "Hazy Video", description: "Sequential degraded video frames with atmospheric haze.", subtext: "Input stream" },
      { id: "h2", stepNumber: "02", title: "DCP + AOD-Net", description: "Physics-based estimation of atmospheric light and transmission.", subtext: "Optics prior" },
      { id: "h3", stepNumber: "03", title: "ConvLSTM", description: "Maintains recurrent memory across consecutive frames to prevent flicker.", subtext: "Temporal consistency" },
      { id: "h4", stepNumber: "04", title: "CycleGAN", description: "Unpaired adversarial translation refines high-frequency contrast.", subtext: "Restored video" },
    ],
    technicalDetails: [
      "Registered Government of India Copyright for spatiotemporal video dehazing architecture",
      "Academic paper accepted with minor revisions at ICAIMEST",
      "Benchmarked on the standard RESIDE-6k synthetic and real-world dataset",
    ],
  },
};

export const forgeExperiment = {
  id: "forge",
  title: "FORGE",
  subtitle: "Autonomous Agent Evolution",
  tagline: "An autonomous agent engineering experiment built rapidly during a hackathon.",
  description:
    "I wanted to see whether agents could use their own execution failures as signals for improving future tool use. Built with AI-assisted rapid prototyping using Agent Orchestrator (AO) and FastAPI.",
  stack: ["Python", "FastAPI", "Next.js", "Agent Orchestrator"],
  liveUrl: "https://forge-agentd.vercel.app/",
  repoUrl: "https://github.com/dren712/forge",
};
