"use client";

import React, { useState } from "react";
import { ArchitectureStep } from "@/content/projects";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  steps: ArchitectureStep[];
  variant?: "solana" | "agent" | "world";
}

export const ArchitectureDiagram: React.FC<Props> = ({ title, steps }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="border border-paper-border bg-paper p-5 sm:p-6 rounded-sm my-6 font-mono">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-paper-line pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
            {title}
          </h4>
        </div>
        <div className="text-[11px] text-ink-muted">
          STAGE {activeStep + 1} OF {steps.length}
        </div>
      </div>

      {/* Pipeline Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isCompleted = idx < activeStep;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-paper-surface border-ink shadow-sm ring-1 ring-ink/5"
                  : "bg-paper border-paper-border hover:border-ink-muted hover:bg-paper-surface"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${
                    isActive
                      ? "bg-ink text-paper"
                      : isCompleted
                      ? "bg-paper-subtle text-ink-secondary"
                      : "bg-paper-subtle text-ink-muted"
                  }`}
                >
                  0{step.stepNumber}
                </span>

                {idx < steps.length - 1 && (
                  <ChevronRight className="hidden lg:inline-block w-3 h-3 text-ink-muted opacity-60" />
                )}
              </div>

              <div className="text-xs font-semibold text-ink mb-1 font-sans">
                {step.title}
              </div>

              {step.subtext && (
                <div className="text-[10px] text-ink-muted line-clamp-1 mt-auto pt-1 font-mono">
                  {step.subtext}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Stage Deep Dive */}
      {steps[activeStep] && (
        <div className="mt-4 p-4 rounded-sm bg-paper-surface border border-paper-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-nordic-red tracking-tight">
              STAGE 0{steps[activeStep].stepNumber} // {steps[activeStep].title}
            </div>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans max-w-2xl">
              {steps[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-2.5 py-1 text-[11px] rounded-sm border border-paper-border bg-paper hover:bg-paper-surface text-ink-secondary hover:text-ink transition-colors"
            >
              Prev
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-2.5 py-1 text-[11px] rounded-sm border border-ink bg-ink text-paper hover:bg-ink/90 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
