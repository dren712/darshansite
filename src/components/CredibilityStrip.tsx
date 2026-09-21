"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProofPoint {
  id: string;
  metric: string;
  label: string;
  context: string;
  detail: string;
  verification: string;
}

const proofPoints: ProofPoint[] = [
  {
    id: "degree",
    metric: "2026",
    label: "B.E. Electronics & Telecom",
    context: "PCCOER, Pune",
    detail: "Rigorous physical engineering training: embedded systems, digital signal processing, control feedback loops, and hardware constraints.",
    verification: "SPPU Batch of 2026",
  },
  {
    id: "copyrights",
    metric: "2×",
    label: "Govt. of India Copyrights",
    context: "Statutory IP Registrations",
    detail: "Registered IP for HPURN (AI video dehazing neural network) and Automated Food Dehydrator embedded control system.",
    verification: "Copyright Office, Govt. of India",
  },
  {
    id: "amazon",
    metric: "Amazon",
    label: "ML Summer School Scholar",
    context: "Pan-India Selection",
    detail: "Trained on deep neural architectures, representations, optimization, and scalable inference by Amazon ML scientists.",
    verification: "Amazon ML Scientist Mentorship",
  },
  {
    id: "solana",
    metric: "Solana",
    label: "Solana School (Fall 2026)",
    context: "Developer Cohort",
    detail: "Hands-on instruction in Anchor framework, Rust smart contracts, Program Derived Addresses (PDAs), and on-chain account security.",
    verification: "Fall 2026 Cohort",
  },
  {
    id: "tests",
    metric: "304+",
    label: "Verified Protocol Tests",
    context: "PROVN & FORGE CI",
    detail: "294 air-gapped cryptographic tests for Ed25519 signatures, challenge expirations, sliding window replay guards, and live devnet pipelines.",
    verification: "Deterministic CI Test Suites",
  },
];

export const CredibilityStrip: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="border-b border-paper-border bg-paper-surface py-7 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-[11px] text-ink">
              VERIFIED RECORD
            </span>
          </div>
          <span className="text-[11px] hidden sm:inline-block">
            Empirical credentials &amp; registrations
          </span>
        </div>

        {/* 5-Column Proof Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {proofPoints.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(isOpen ? null : item.id)}
                className={`p-4 rounded-sm border transition-all cursor-pointer ${
                  isOpen
                    ? "bg-paper border-ink"
                    : "bg-paper-surface border-paper-border hover:border-ink-muted"
                }`}
              >
                <div className="text-2xl font-bold font-sans text-ink tracking-tight mb-1">
                  {item.metric}
                </div>
                <div className="text-xs font-semibold text-ink font-sans leading-snug">
                  {item.label}
                </div>
                <div className="text-[11px] text-ink-muted mt-0.5">
                  {item.context}
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-ink-muted pt-2 border-t border-paper-line">
                  <span>{isOpen ? "Close" : "Inspect"}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180 text-ink" : ""}`}
                  />
                </div>

                {isOpen && (
                  <div className="mt-2.5 pt-2 text-xs text-ink-secondary space-y-1.5 font-sans">
                    <p className="leading-relaxed text-[11px]">{item.detail}</p>
                    <div className="text-[10px] font-mono text-nordic-red font-medium">
                      // {item.verification}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
