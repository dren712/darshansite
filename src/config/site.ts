export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  philosophy: string;
  narrativeLoop: string[];
  location: string;
  coordinates: string;
  status: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    year: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
    phone: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  credibility: Array<{
    value: string;
    label: string;
    sublabel: string;
    badge?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Darshan Gaikwad",
  title: "Darshan Gaikwad · AI-Native Systems Thinker & Builder",
  headline: "AI-native systems thinker and builder.",
  subheadline:
    "I research unfamiliar technologies, design systems, orchestrate AI-assisted implementation and turn ambitious ideas into working software.",
  philosophy: "Architecture > Systems > Optimization >> Code",
  narrativeLoop: [
    "Idea",
    "Question",
    "Research",
    "Documentation",
    "System Design",
    "Orchestration",
    "AI Implementation",
    "Verify",
    "Ship",
    "Iterate",
  ],
  location: "Pune, India",
  coordinates: "18.5204° N, 73.8567° E",
  status: "Exploring systems engineering, research, and AI-native builder opportunities",
  education: {
    degree: "B.E. (Bachelor of Engineering)",
    field: "Electronics & Telecommunication Engineering",
    institution: "Pimpri Chinchwad College of Engineering and Research (PCCOER)",
    location: "Pune, India",
    year: "2026",
  },
  social: {
    github: "https://github.com/dren712",
    linkedin: "https://www.linkedin.com/in/darshan-gaikwad-605952191/",
    twitter: "https://x.com/DarshanVG712",
    email: "darshangaikwad712@gmail.com",
    phone: "+91 8766895053",
  },
  navigation: [
    { label: "Systems", href: "#systems" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Methodology", href: "#methodology" },
    { label: "Lab", href: "#lab" },
    { label: "Contact", href: "#contact" },
  ],
  credibility: [
    {
      value: "2026",
      label: "B.E. ENTC Graduate",
      sublabel: "PCCOER, Pune · Systems & Hardware foundation",
      badge: "ACADEMIC",
    },
    {
      value: "2×",
      label: "Govt. of India Copyrights",
      sublabel: "HPURN Dehazing & Automated Dehydrator",
      badge: "IP REGISTERED",
    },
    {
      value: "Amazon",
      label: "ML Summer School",
      sublabel: "Deep learning & statistical intelligence",
      badge: "SCHOLAR",
    },
    {
      value: "Solana",
      label: "Solana School",
      sublabel: "Fall 2026 · Anchor, PDAs & on-chain state",
      badge: "COHORT",
    },
    {
      value: "AI + Web3",
      label: "Independent Builder",
      sublabel: "300+ tests passing · Live production protocols",
      badge: "SHIPPED",
    },
  ],
};
