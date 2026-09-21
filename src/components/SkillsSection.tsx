"use client";

import React, { useState } from "react";
import { skillPillars, learningModeNote } from "@/content/skills";

export const SkillsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>("think");

  const current = skillPillars.find((p) => p.id === selectedPillar) || skillPillars[0];

  return (
    <section id="systems" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              CAPABILITIES TAXONOMY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight">
            Think, build, connect, and learn.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            No fake 98% proficiency bars. Capabilities categorized by how I decompose problems, leverage modern tooling, connect systems, and research unfamiliar domains.
          </p>
        </div>

        {/* Current Learning Mode Subtle Bar */}
        <div className="p-4 sm:p-5 rounded-sm border border-paper-border bg-paper-surface flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-[10px] text-nordic-red uppercase tracking-wider font-bold">
              {learningModeNote.headline}
            </div>
            <div className="text-ink font-semibold">
              {learningModeNote.flow}
            </div>
          </div>
          <div className="text-[11px] text-ink-secondary italic font-serif">
            &ldquo;{learningModeNote.annotation}&rdquo;
          </div>
        </div>

        {/* The 4 Pillar Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
          {skillPillars.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`p-4 rounded-sm border text-left transition-all ${
                  isSelected
                    ? "bg-paper-surface border-ink shadow-sm ring-1 ring-ink/5"
                    : "bg-paper border-paper-border hover:border-ink-muted hover:bg-paper-surface"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold ${isSelected ? "text-nordic-red" : "text-ink-muted"}`}>
                    {pillar.code}
                  </span>
                </div>
                <div className="font-bold text-ink text-sm font-sans">
                  {pillar.name}
                </div>
                <div className="text-[10px] text-ink-muted line-clamp-1 mt-0.5">
                  {pillar.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Details Card */}
        <div className="p-6 sm:p-8 rounded-sm border border-paper-border bg-paper-surface space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-line pb-4 text-xs font-mono">
            <div>
              <span className="text-nordic-red font-bold">{current.code} // </span>
              <span className="text-ink font-bold font-sans text-base sm:text-lg">{current.name}</span>
            </div>
            <div className="text-ink-secondary">
              {current.tagline}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-ink-secondary font-sans leading-relaxed max-w-3xl">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-sm border border-paper-border bg-paper space-y-1.5 hover:border-ink-muted transition-colors"
              >
                <div className="font-bold text-ink font-sans text-xs sm:text-sm">
                  {item.name}
                </div>
                <div className="text-[11px] text-ink-secondary font-mono leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
