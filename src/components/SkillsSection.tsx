"use client";

import React from "react";
import { techCategories, corePhilosophyNote } from "@/content/skills";

export const SkillsSection: React.FC = () => {
  return (
    <section id="stack" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              STACK &amp; TOOLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight">
            What I work with.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            No arbitrary proficiency percentages. The technologies and tools I reach for to build, connect, and verify systems.
          </p>
        </div>

        {/* Core Thought Callout */}
        <div className="p-5 sm:p-6 rounded-sm border border-paper-border bg-paper-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-serif italic text-base sm:text-lg text-ink">
            &ldquo;{corePhilosophyNote.quote}&rdquo;
          </div>
          <div className="font-mono text-xs text-ink-muted shrink-0">
            {corePhilosophyNote.approach}
          </div>
        </div>

        {/* 5 Stack Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {techCategories.map((cat) => (
            <div
              key={cat.code}
              className="p-5 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-4 hover:border-ink-muted transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-ink font-sans text-lg">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-nordic-red font-semibold">
                    {cat.code}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-paper-line">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-ink-secondary font-mono flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-nordic-red/70"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
