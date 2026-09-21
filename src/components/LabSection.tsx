"use client";

import React from "react";
import { labNotes } from "@/content/lab";

export const LabSection: React.FC = () => {
  return (
    <section id="lab" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              ACTIVE EXPERIMENTS &amp; DISPATCHES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-ink tracking-tight">
            Ideas &amp; Lab Notes.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            Working research explorations examining what happens as autonomous AI agents evolve into economic participants on decentralized networks.
          </p>
        </div>

        {/* 3-Column Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labNotes.map((note) => (
            <div
              key={note.id}
              className="p-6 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-4 hover:border-ink-muted transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-nordic-red font-semibold">{note.code}</span>
                  <span className="px-2 py-0.5 rounded-sm font-semibold border border-paper-border bg-paper text-ink-secondary">
                    {note.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink font-sans leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                  {note.summary}
                </p>

                <div className="p-3 bg-paper rounded-sm border border-paper-border text-xs text-ink-secondary font-serif italic leading-relaxed">
                  &ldquo;{note.thesis}&rdquo;
                </div>
              </div>

              <div className="pt-3 border-t border-paper-line flex flex-wrap gap-1 font-mono text-[10px]">
                {note.primitives.map((prim, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-sm text-ink-muted bg-paper border border-paper-border"
                  >
                    {prim}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
