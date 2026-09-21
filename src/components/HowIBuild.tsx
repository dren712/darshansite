"use client";

import React from "react";
import { buildLoop } from "@/content/about";
import { Check } from "lucide-react";

export const HowIBuild: React.FC = () => {
  return (
    <section id="methodology" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              AI-NATIVE ORCHESTRATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-ink tracking-tight">
            How I actually build.
          </h2>
          <div className="p-5 bg-paper-surface border border-paper-border rounded-sm space-y-2 font-sans">
            <p className="text-sm sm:text-base text-ink leading-relaxed">
              &ldquo;I rarely start with <em className="italic font-medium">how do I code this?</em> I start with <strong className="font-semibold">what is the system?</strong> Then I read. I go through documentation, repositories, specifications, and examples until I understand enough to make architectural decisions. AI handles a large part of the implementation acceleration. I orchestrate it, review it, test it, and keep pulling the system toward the thing I actually wanted to build.&rdquo;
            </p>
          </div>
        </div>

        {/* The Core Distinction Callout */}
        <div className="mb-12 p-6 rounded-sm border border-paper-border bg-paper-surface grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 space-y-2">
            <div className="font-mono text-xs text-nordic-red font-semibold uppercase tracking-wider">
              THE CORE DISTINCTION
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-ink leading-snug">
              AI accelerates implementation. It does not replace understanding.
            </h3>
            <p className="text-xs text-ink-secondary font-sans leading-relaxed">
              AI writes code fast, but code is just the final artifact. The leverage comes from orchestrating the system boundaries and catching errors before they compound.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
            <div className="p-3 bg-paper border border-paper-border rounded-sm space-y-1">
              <div className="font-mono text-[10px] text-nordic-red font-bold flex items-center gap-1.5">
                <Check className="w-3 h-3" />
                SYSTEM BOUNDARIES
              </div>
              <p className="text-ink-secondary">Knowing what to build, why to build it, and how the pieces fit together.</p>
            </div>
            <div className="p-3 bg-paper border border-paper-border rounded-sm space-y-1">
              <div className="font-mono text-[10px] text-nordic-red font-bold flex items-center gap-1.5">
                <Check className="w-3 h-3" />
                VERIFICATION GATES
              </div>
              <p className="text-ink-secondary">Identifying dangerous assumptions and testing what the docs actually state.</p>
            </div>
            <div className="p-3 bg-paper border border-paper-border rounded-sm space-y-1">
              <div className="font-mono text-[10px] text-nordic-red font-bold flex items-center gap-1.5">
                <Check className="w-3 h-3" />
                ERROR DETECTION
              </div>
              <p className="text-ink-secondary">Spotting when an AI-generated implementation is subtly wrong or insecure.</p>
            </div>
            <div className="p-3 bg-paper border border-paper-border rounded-sm space-y-1">
              <div className="font-mono text-[10px] text-nordic-red font-bold flex items-center gap-1.5">
                <Check className="w-3 h-3" />
                DECOMPOSITION
              </div>
              <p className="text-ink-secondary">Decomposing a vague, ambitious idea into structured, executable work units.</p>
            </div>
          </div>
        </div>

        {/* 6-Stage Feedback Loop */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-semibold text-[11px]">
              THE REPEATABLE FEEDBACK LOOP: QUESTION ↓ RESEARCH ↓ ARCHITECTURE ↓ ORCHESTRATE ↓ VERIFY ↓ SHIP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {buildLoop.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-4 hover:border-ink-muted transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-2xl font-bold text-ink font-sans">
                      {item.step}
                    </span>
                    <span className="text-ink-muted text-[10px] uppercase tracking-wider">
                      STAGE {item.step}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-ink font-sans">
                    {item.name}
                  </h4>

                  <div className="text-xs font-mono text-nordic-red font-medium">
                    {item.question}
                  </div>

                  <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
