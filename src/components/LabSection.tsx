"use client";

import React from "react";
import { explorations } from "@/content/lab";
import { ArrowRight } from "lucide-react";

export const LabSection: React.FC = () => {
  return (
    <section id="exploring" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              EXPLORING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight">
            Active Explorations.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            Problems at the boundary of autonomous AI agents, cryptographic verification, and persistent worlds.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {explorations.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-6 hover:border-ink-muted transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-nordic-red font-semibold">{item.code}</span>
                  <span className="px-2 py-0.5 rounded-sm font-semibold border border-paper-border bg-paper text-ink-secondary">
                    {item.status}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-mono text-ink-muted mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink font-sans leading-snug">
                    {item.title}
                  </h3>
                </div>

                {item.thesis && (
                  <div className="p-3 bg-paper rounded-sm border border-paper-border font-serif italic text-sm text-ink leading-relaxed">
                    &ldquo;{item.thesis}&rdquo;
                  </div>
                )}

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans">
                  {item.summary}
                </p>
              </div>

              {/* Specific Visual Enhancements for the 2 items */}
              {item.flow && (
                <div className="pt-4 border-t border-paper-line space-y-2">
                  <div className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                    VERIFICATION PIPELINE FLOW:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                    {item.flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2 py-1 rounded-sm bg-paper border border-paper-border text-ink font-medium">
                          {step}
                        </span>
                        {item.flow && idx < item.flow.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-ink-muted shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {item.modules && (
                <div className="pt-4 border-t border-paper-line space-y-2">
                  <div className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                    CORE SYSTEM MODULES:
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {item.modules.map((mod, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-sm bg-paper border border-paper-border text-ink-secondary"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quiet Notebook Closing Note */}
        <div className="text-center font-mono text-xs text-ink-muted italic pt-4">
          Other questions are still in the notebook.
        </div>
      </div>
    </section>
  );
};
