"use client";

import React, { useState } from "react";
import { careerPhases, humanNarrative } from "@/content/about";
import { ChevronRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0); // default to Phase 1: Hardware

  return (
    <section id="about" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              THE STORY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight">
            Curiosity, documentation &amp; leverage.
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-ink-secondary leading-relaxed">
            &ldquo;{humanNarrative.hook}&rdquo;
          </p>
        </div>

        {/* The Authentic Human Narrative Box */}
        <div className="p-6 sm:p-8 rounded-sm border border-paper-border bg-paper-surface grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3 font-sans text-sm sm:text-base text-ink leading-relaxed">
            {humanNarrative.story.map((paragraph, idx) => (
              <p key={idx} className={idx === humanNarrative.story.length - 1 ? "font-semibold text-nordic-red pt-1" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-4 p-5 bg-paper rounded-sm border border-paper-border space-y-3 font-mono text-xs">
            <div className="text-[10px] text-ink-muted uppercase tracking-wider font-bold">
              CORE OPERATING AXIOM
            </div>
            <div className="text-ink font-semibold">
              {humanNarrative.axiom}
            </div>
            <div className="text-[11px] text-ink-secondary leading-relaxed pt-2 border-t border-paper-line font-serif italic">
              &ldquo;I don&apos;t need to know everything before I start building. I need to know how to figure things out.&rdquo;
            </div>
          </div>
        </div>

        {/* The 6-Phase Career Arc Explorer */}
        <div className="space-y-6">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-semibold text-[11px]">
              THE 6-PHASE CAREER ARC: HARDWARE → ML → INFRASTRUCTURE → WEB3 → AI-NATIVE → AUTONOMOUS SYSTEMS
            </span>
            <span className="text-ink-muted text-[11px] hidden sm:inline">
              Click any phase to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Phase Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-2 font-mono">
              {careerPhases.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                  <div
                    key={phase.actNumber}
                    onClick={() => setActivePhase(idx)}
                    className={`p-3.5 rounded-sm border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-paper-surface border-ink shadow-sm ring-1 ring-ink/5"
                        : "bg-paper border-paper-border hover:border-ink-muted hover:bg-paper-surface"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold ${isActive ? "text-nordic-red" : "text-ink-muted"}`}>
                          {phase.phase}
                        </span>
                        <span className="text-xs font-bold text-ink font-sans">{phase.title}</span>
                      </div>
                      <div className="text-[10px] text-ink-muted line-clamp-1">{phase.subtitle}</div>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 text-ink-muted ${isActive ? "text-ink" : ""}`} />
                  </div>
                );
              })}
            </div>

            {/* Detailed Phase Canvas (7 cols) */}
            <div className="lg:col-span-7">
              {careerPhases[activePhase] && (
                <div className="p-6 sm:p-7 rounded-sm border border-paper-border bg-paper-surface space-y-4 font-sans">
                  <div className="flex flex-wrap items-center justify-between border-b border-paper-line pb-3 text-xs font-mono gap-2">
                    <span className="text-nordic-red font-bold">
                      {careerPhases[activePhase].phase} // {careerPhases[activePhase].title}
                    </span>
                    <span className="text-ink-muted text-[11px]">
                      {careerPhases[activePhase].focus}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-medium text-ink">
                    {careerPhases[activePhase].subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {careerPhases[activePhase].summary}
                  </p>

                  <div className="pt-3 border-t border-paper-line space-y-1.5 font-mono">
                    <div className="text-[10px] text-ink-muted uppercase tracking-wider">
                      Primitives &amp; Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {careerPhases[activePhase].technologies.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-sm bg-paper border border-paper-border text-[10px] text-ink-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Education & Fellowships Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-paper-line">
          <div className="p-5 rounded-sm border border-paper-border bg-paper-surface space-y-2">
            <div className="font-mono text-xs text-ink-muted uppercase tracking-wider">
              FORMAL ENGINEERING DEGREE
            </div>
            <h4 className="text-sm sm:text-base font-bold text-ink font-sans">
              B.E. Electronics &amp; Telecommunication Engineering
            </h4>
            <p className="text-xs text-ink-muted font-mono">
              PCCOER, Pune · Savitribai Phule Pune University · 2026
            </p>
            <p className="text-xs text-ink-secondary leading-relaxed font-sans pt-1">
              Rigorous grounding in signal processing, electromagnetic fundamentals, embedded architectures, control systems, and computational algorithms.
            </p>
          </div>

          <div className="p-5 rounded-sm border border-paper-border bg-paper-surface space-y-3 font-mono">
            <div className="text-xs text-ink-muted uppercase tracking-wider">
              COMPETITIVE FELLOWSHIPS
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-sm bg-paper border border-paper-border flex items-center justify-between">
                <div>
                  <div className="font-bold text-ink font-sans">Amazon ML Summer School</div>
                  <div className="text-[10px] text-ink-muted font-mono">Deep learning &amp; applied representations</div>
                </div>
                <span className="text-[10px] font-semibold text-nordic-red bg-nordic-redFaint px-2 py-0.5 border border-nordic-redBorder rounded-sm">
                  SCHOLAR
                </span>
              </div>

              <div className="p-2.5 rounded-sm bg-paper border border-paper-border flex items-center justify-between">
                <div>
                  <div className="font-bold text-ink font-sans">Solana School (Fall 2026)</div>
                  <div className="text-[10px] text-ink-muted font-mono">Anchor, Rust, PDAs, &amp; Solana runtime</div>
                </div>
                <span className="text-[10px] font-semibold text-ink bg-paper-subtle px-2 py-0.5 border border-paper-border rounded-sm">
                  COHORT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
