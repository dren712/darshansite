"use client";

import React from "react";
import { humanNarrative } from "@/content/about";
import { ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              ABOUT
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
        <div className="p-6 sm:p-8 rounded-sm border border-paper-border bg-paper-surface">
          <div className="max-w-3xl space-y-4 font-sans text-sm sm:text-base text-ink leading-relaxed">
            {humanNarrative.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === humanNarrative.paragraphs.length - 1 ? "font-semibold text-nordic-red pt-1" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Trajectory */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-semibold text-[11px]">
              TRAJECTORY
            </span>
            <span className="text-ink-muted text-[11px] hidden sm:inline">
              Hardware → ML → Infrastructure → Solana → AI-Native → Autonomous Systems
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 font-mono text-xs">
            {humanNarrative.trajectory.map((item, idx) => (
              <div
                key={item.stage}
                className="p-4 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-2 hover:border-ink-muted transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-ink-muted font-bold">
                    <span>{item.stage}</span>
                    {idx < humanNarrative.trajectory.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-ink-muted hidden lg:block" />
                    )}
                  </div>
                  <div className="font-bold text-ink font-sans text-xs sm:text-sm">
                    {item.title}
                  </div>
                </div>
                <div className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Recognition Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-paper-line">
          <div className="p-5 rounded-sm border border-paper-border bg-paper-surface space-y-2">
            <div className="font-mono text-xs text-ink-muted uppercase tracking-wider">
              FORMAL DEGREE
            </div>
            <h4 className="text-sm sm:text-base font-bold text-ink font-sans">
              B.E. Electronics &amp; Telecommunication Engineering
            </h4>
            <p className="text-xs text-ink-muted font-mono">
              PCCOER, Pune · Savitribai Phule Pune University · 2026
            </p>
            <p className="text-xs text-ink-secondary leading-relaxed font-sans pt-1">
              Grounding in signal processing, embedded architectures, control systems, and computational algorithms.
            </p>
          </div>

          <div className="p-5 rounded-sm border border-paper-border bg-paper-surface space-y-3 font-mono">
            <div className="text-xs text-ink-muted uppercase tracking-wider">
              RECOGNITION &amp; COHORTS
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-sm bg-paper border border-paper-border flex items-center justify-between">
                <div>
                  <div className="font-bold text-ink font-sans">2× Govt. of India Copyrights</div>
                  <div className="text-[10px] text-ink-muted font-mono">Neural dehazing &amp; automated dehydrator</div>
                </div>
                <span className="text-[10px] font-semibold text-nordic-red bg-nordic-redFaint px-2 py-0.5 border border-nordic-redBorder rounded-sm">
                  REGISTERED IP
                </span>
              </div>

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
                  <div className="text-[10px] text-ink-muted font-mono">Anchor, Rust, PDAs &amp; runtime security</div>
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
