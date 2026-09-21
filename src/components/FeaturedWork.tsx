"use client";

import React, { useState } from "react";
import { projectsHierarchy, FlagshipProject } from "@/content/projects";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Github, ArrowUpRight, Check, ChevronDown } from "lucide-react";

export const FeaturedWork: React.FC = () => {
  const [expandedDiagrams, setExpandedDiagrams] = useState<Record<string, boolean>>({
    provn: true,
    "raspberry-pi-nas": true,
    hpurn: true,
    forge: false,
    "agent-verification": false,
    "civilization-engine": false,
  });

  const toggleDiagram = (id: string) => {
    setExpandedDiagrams((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderProjectCard = (project: FlagshipProject) => {
    const isDiagramOpen = !!expandedDiagrams[project.id];

    return (
      <article
        key={project.id}
        className="border border-paper-border bg-paper-surface p-6 sm:p-8 lg:p-10 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] space-y-7"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-line pb-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span
              className={`px-2 py-0.5 rounded-sm font-bold text-[10px] ${
                project.tier === "BUILT"
                  ? "bg-ink text-paper"
                  : project.tier === "EXPERIMENTED"
                  ? "bg-paper text-ink border border-paper-border"
                  : project.tier === "BUILDING"
                  ? "bg-nordic-redFaint text-nordic-red border border-nordic-redBorder"
                  : "bg-paper-subtle text-ink-secondary"
              }`}
            >
              {project.tierLabel}
            </span>
            <span className="text-ink-secondary text-[11px] hidden sm:inline">
              // {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-nordic-red transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary hover:text-ink transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {project.paperNote && (
              <span className="text-[10px] text-nordic-red font-medium">
                {project.paperNote}
              </span>
            )}
          </div>
        </div>

        {/* Title & Narrative Hook */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-nordic-red font-medium">
            {project.number} // {project.subtitle}
          </div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight">
            {project.title}
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-ink-secondary leading-relaxed pt-1">
            &ldquo;{project.tagline}&rdquo;
          </p>
        </div>

        {/* The 4 Narrative Questions: Question / Learn / How it Worked / Shipped */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          {/* Question */}
          <div className="p-4 bg-paper rounded-sm border border-paper-border space-y-1.5">
            <div className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider">
              1. What was the question?
            </div>
            <p className="text-ink-secondary leading-relaxed">
              {project.theQuestion}
            </p>
          </div>

          {/* Learn */}
          <div className="p-4 bg-paper rounded-sm border border-paper-border space-y-1.5">
            <div className="font-mono text-[10px] text-nordic-red font-bold uppercase tracking-wider">
              2. What did I have to learn?
            </div>
            <p className="text-ink-secondary leading-relaxed">
              {project.whatIHadToLearn}
            </p>
          </div>

          {/* How It Worked */}
          <div className="p-4 bg-paper rounded-sm border border-paper-border space-y-1.5">
            <div className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider">
              3. How did the system work?
            </div>
            <p className="text-ink-secondary leading-relaxed">
              {project.howTheSystemWorked}
            </p>
          </div>

          {/* Shipped */}
          <div className="p-4 bg-paper rounded-sm border border-paper-border space-y-1.5">
            <div className="font-mono text-[10px] text-nordic-red font-bold uppercase tracking-wider">
              4. What actually shipped?
            </div>
            <p className="text-ink-secondary leading-relaxed">
              {project.whatActuallyShipped}
            </p>
          </div>
        </div>

        {/* Architecture Diagram Toggle */}
        <div className="pt-1">
          <button
            onClick={() => toggleDiagram(project.id)}
            className="w-full py-2.5 px-4 rounded-sm border border-paper-border bg-paper hover:bg-paper-subtle text-ink font-mono text-xs font-medium flex items-center justify-between transition-colors"
          >
            <span>
              {isDiagramOpen ? "Hide Architecture Flow" : `Inspect ${project.flowTitle}`}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-ink-muted transition-transform ${
                isDiagramOpen ? "rotate-180 text-ink" : ""
              }`}
            />
          </button>

          {isDiagramOpen && (
            <div className="mt-3">
              <ArchitectureDiagram
                title={`${project.title} · ${project.flowTitle}`}
                steps={project.flowSteps}
                variant="solana"
              />
            </div>
          )}
        </div>

        {/* Technical Highlights & Stack */}
        <div className="pt-4 border-t border-paper-line space-y-3 font-mono text-xs">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {project.technicalHighlights.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5 text-ink-secondary">
                <Check className="w-3 h-3 text-nordic-red shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1 pt-1">
            <span className="text-ink-muted text-[10px] uppercase mr-1">Primitives:</span>
            {project.stack.map((item, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="work" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              SYSTEMS CATALOGUE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-ink">
            The evolution of the thinking.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            Hardware → Machine Learning → Self-Hosted Cloud → Web3 &amp; Solana → AI Agents → Future Systems.
            A transparent chronicle of what was built, what was learned, and what shipped.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 1. TIER: BUILT                                                */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-paper-line pb-2 font-mono text-xs">
            <span className="font-bold text-ink uppercase tracking-wider text-sm">
              [ BUILT ]
            </span>
            <span className="text-ink-muted text-[11px]">
              Fully functional, deployed protocols, physical systems, and peer-reviewed research
            </span>
          </div>

          <div className="space-y-8">
            {projectsHierarchy.built.map(renderProjectCard)}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2. TIER: EXPERIMENTED                                         */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-paper-line pb-2 font-mono text-xs">
            <span className="font-bold text-ink uppercase tracking-wider text-sm">
              [ EXPERIMENTED ]
            </span>
            <span className="text-ink-muted text-[11px]">
              Rapid prototyping under hackathon constraints · Speed &amp; tool orchestration
            </span>
          </div>

          <div className="space-y-8">
            {projectsHierarchy.experimented.map(renderProjectCard)}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. TIER: BUILDING / EXPLORING                                 */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-paper-line pb-2 font-mono text-xs">
            <span className="font-bold text-ink uppercase tracking-wider text-sm">
              [ BUILDING / EXPLORING ]
            </span>
            <span className="text-ink-muted text-[11px]">
              Active research specifications, receipt structures, and policy gates
            </span>
          </div>

          <div className="space-y-8">
            {projectsHierarchy.exploring.map(renderProjectCard)}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. TIER: LONG-TERM INTELLECTUAL THESIS                        */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-paper-line pb-2 font-mono text-xs">
            <span className="font-bold text-ink uppercase tracking-wider text-sm">
              [ LONG-TERM RESEARCH THESIS ]
            </span>
            <span className="text-ink-muted text-[11px]">
              Deep intellectual inquiry into autonomous character societies and cultural provenance
            </span>
          </div>

          <div className="space-y-8">
            {projectsHierarchy.longTerm.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  );
};
