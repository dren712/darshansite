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
                NOW
              </span>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              PUNE, INDIA (IST) · 2026
            </span>
          </div>

          {/* 3 Clean Lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-nordic-red font-semibold uppercase tracking-wider">
                BUILDING
              </div>
              <p className="text-xs sm:text-sm text-ink font-sans leading-relaxed">
                <strong>PROVN</strong> — decentralized provenance protocol and cryptographic verification on Solana &amp; Arweave.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider">
                EXPLORING
              </div>
              <p className="text-xs sm:text-sm text-ink font-sans leading-relaxed">
                Verifiable AI-agent actions, signed execution receipts, and deterministic security gates.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-sm bg-paper border border-paper-border">
              <div className="font-mono text-[11px] text-nordic-red font-semibold uppercase tracking-wider">
                LOOKING FOR
              </div>
              <p className="text-xs sm:text-sm text-ink font-sans leading-relaxed">
                Remote Web3 / AI infrastructure opportunities, technical collaborations, and ambitious systems problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
