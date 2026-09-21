"use client";

import React from "react";

interface ProofPoint {
  metric: string;
  label: string;
  context: string;
}

const proofPoints: ProofPoint[] = [
  {
    metric: "2026",
    label: "B.E. ENTC",
    context: "PCCOER, Pune",
  },
  {
    metric: "2×",
    label: "Government of India Copyrights",
    context: "HPURN Dehazing & Dehydrator",
  },
  {
    metric: "Amazon",
    label: "ML Summer School",
    context: "Machine Learning Foundations",
  },
  {
    metric: "Solana",
    label: "Solana School",
    context: "Fall 2026 · Anchor & PDAs",
  },
];

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="border-b border-paper-border bg-paper-surface py-6 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {proofPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-sm border border-paper-border bg-paper space-y-1"
            >
              <div className="text-xl sm:text-2xl font-bold font-sans text-ink tracking-tight">
                {item.metric}
              </div>
              <div className="text-xs font-semibold text-ink font-sans">
                {item.label}
              </div>
              <div className="text-[11px] text-ink-muted">
                {item.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
