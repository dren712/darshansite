"use client";

import React from "react";
import { buildLoop } from "@/content/about";
import { ArrowRight } from "lucide-react";

export const HowIBuild: React.FC = () => {
  return (
    <section id="how-i-work" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              HOW I WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight">
            How I Work.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            A repeatable engineering loop moving from first principles to running software.
          </p>
        </div>

        {/* The Core Distinction Callout */}
        <div className="mb-12 p-6 sm:p-7 rounded-sm border border-paper-border bg-paper-surface">
          <div className="max-w-3xl space-y-2 font-sans">
            <div className="font-mono text-xs text-nordic-red font-semibold uppercase tracking-wider">
              THE CORE DISTINCTION
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
              AI accelerates implementation. It does not replace understanding.
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              AI writes code fast, but code is just the final artifact. The leverage comes from identifying the right problem, researching documentation, defining system boundaries, and catching errors before they compound.
            </p>
          </div>
        </div>

        {/* 6-Stage Feedback Loop */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-semibold text-[11px]">
              THE 6-STAGE LOOP
            </span>
            <span className="text-ink-muted text-[11px] hidden sm:inline">
              Question → Research → Design → Orchestrate → Verify → Ship
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildLoop.map((item, idx) => (
              <div
                key={item.step}
                className="p-5 sm:p-6 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-4 hover:border-ink-muted transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-xs font-semibold text-nordic-red">
                      STAGE {item.step}
                    </span>
                    {idx < buildLoop.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-ink-muted hidden lg:block" />
                    )}
                  </div>

                  <h4 className="text-base font-bold text-ink font-sans">
                    {item.name}
                  </h4>

                  <div className="text-xs font-mono text-ink-muted font-medium">
                    &ldquo;{item.question}&rdquo;
                  </div>

                  <p className="text-xs text-ink-secondary leading-relaxed font-sans pt-1">
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
