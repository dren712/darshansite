"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-paper border-t border-paper-border text-xs font-mono text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-paper-line pb-6">
          <div className="space-y-1">
            <div className="text-ink font-sans font-bold text-sm tracking-tight">
              DARSHAN GAIKWAD
            </div>
            <p className="text-[11px] text-ink-secondary font-sans">
              Pune, India · Systems, Cryptography &amp; Solana Infrastructure
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-[11px] text-ink-secondary hidden sm:inline">
              Architecture &gt; Systems &gt; Optimization &gt;&gt; Code
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm border border-paper-border bg-paper-surface hover:border-ink text-ink transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px]">
          <div>&copy; {new Date().getFullYear()} Darshan Gaikwad</div>
          <div className="text-ink-muted">ᛞᚨᚱᛋᚺᚨᚾ · दर्शन · DARSHAN</div>
        </div>
      </div>
    </footer>
  );
};
