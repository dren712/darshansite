"use client";

import React from "react";

export const NowSection: React.FC = () => {
  return (
    <section className="py-16 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-sm border border-paper-border bg-paper-surface">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-line pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nordic-red opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nordic-red"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-ink font-bold">
                CURRENT OCCUPATION // NOW
              </span>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              PUNE, INDIA (IST) · 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-nordic-red font-semibold">
                01 // PROVN
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                Refining verifiable cryptographic infrastructure, anti-replay sliding windows, and on-chain Anchor commitments on Solana Devnet &amp; Arweave.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-ink font-semibold">
                02 // SENTINEL FINANCE
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                Exploring guarded autonomous financial execution, postcondition invariants, and Pyth oracle integrations on Solana.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-ink font-semibold">
                03 // ACTIVE RESEARCH
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                Formulating verifiable execution receipts, x402 payment flows, and authority policies for autonomous AI agents.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-nordic-red font-semibold">
                04 // SOLANA SCHOOL
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                Selected for <strong className="text-ink">Solana School (Fall 2026)</strong> mastering Anchor, Rust contracts, and PDA security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
