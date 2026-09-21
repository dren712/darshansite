"use client";

import React from "react";
import { capabilityIndex } from "@/content/skills";

export const SkillsSection: React.FC = () => {
  return (
    <section id="systems" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              CAPABILITIES INDEX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight">
            Systems, software &amp; primitives.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            A concise index of working technical domains, engineering skills, and architectural tools.
          </p>
        </div>

        {/* 5-Column / Responsive Capability Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilityIndex.map((category) => (
            <div
              key={category.id}
              className="p-5 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-4 hover:border-ink-muted transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2.5">
                  <span className="font-bold text-ink font-sans tracking-wide text-sm">
                    {category.name}
                  </span>
                  <span className="text-nordic-red font-mono text-[10px]">
                    {category.code}
                  </span>
                </div>

                <ul className="space-y-1.5 font-sans text-xs text-ink-secondary">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-nordic-red shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-paper-line font-mono text-[10px] space-y-1">
                <span className="text-ink-muted uppercase">Primitives:</span>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {category.primitives.map((prim, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border"
                    >
                      {prim}
                    </span>
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
