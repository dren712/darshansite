"use client";

import React, { useState } from "react";
import { currentProjects, foundationalProjects, experimentProjects } from "@/content/projects";
import { Github, ArrowUpRight, ChevronDown, Check } from "lucide-react";

export const FeaturedWork: React.FC = () => {
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const provn = currentProjects[0];
  const sentinel = currentProjects[1];
  const pi = foundationalProjects[0];
  const hpurn = foundationalProjects[1];
  const forge = experimentProjects[0];

  return (
    <section id="work" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
            <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
              SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-ink">
            What I&apos;ve built.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed font-sans">
            A verified chronological progression — from foundational infrastructure and machine learning research to independent cryptographic protocols and autonomous systems.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* GROUP 1: CURRENT WORK                                                     */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-bold text-[11px] tracking-wider">
              CURRENT WORK
            </span>
            <span className="text-ink-muted text-[10px] uppercase tracking-wider">
              01 — 02
            </span>
          </div>

          {/* 01 — PROVN (Largest Treatment) */}
          <article className="border border-paper-border bg-paper-surface p-6 sm:p-9 lg:p-10 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-line pb-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2 py-0.5 bg-ink text-paper font-bold text-[10px] rounded-sm">
                  {provn.number}
                </span>
                <span className="text-ink-muted text-[10px] uppercase tracking-wider font-semibold">
                  {provn.metadata}
                </span>
                <span className="text-ink-muted text-[10px] hidden sm:inline">·</span>
                <span className="text-ink-secondary text-[11px]">
                  {provn.category}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-nordic-red font-medium text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
                  LIVE ON SOLANA DEVNET
                </span>
                {provn.liveUrl && (
                  <a
                    href={provn.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-nordic-red transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>Launch Protocol</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {provn.repoUrl && (
                  <a
                    href={provn.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-secondary hover:text-ink transition-colors flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-ink tracking-tight">
                {provn.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-ink-secondary">
                &ldquo;{provn.tagline}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {provn.coreThemes.map((theme, i) => (
                  <span key={i} className="text-[10px] font-mono text-ink-muted bg-paper px-2 py-0.5 border border-paper-border rounded-sm">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans text-xs sm:text-sm">
              <div className="space-y-1.5">
                <div className="font-mono text-[11px] font-bold text-ink uppercase tracking-wider">
                  The Problem
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  {provn.problem}
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="font-mono text-[11px] font-bold text-nordic-red uppercase tracking-wider">
                  The Approach
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  {provn.approach}
                </p>
              </div>
            </div>

            {/* Pipeline Flow: SIGN ↓ VERIFY ↓ ANCHOR ↓ PROVE */}
            {provn.pipelineSteps && (
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
                  PIPELINE FLOW: SIGN ↓ VERIFY ↓ ANCHOR ↓ PROVE
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                  {provn.pipelineSteps.map((step) => (
                    <div key={step.id} className="p-3 bg-paper rounded-sm border border-paper-border space-y-1">
                      <div className="text-[10px] text-nordic-red font-bold">
                        0{step.stepNumber} // {step.title}
                      </div>
                      <div className="text-[11px] text-ink-secondary font-sans leading-tight">
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progressive Disclosure: Invariants */}
            <div className="pt-2">
              <button
                onClick={() => toggleDetails(provn.id)}
                className="text-xs font-mono text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-colors"
              >
                <span>{expandedDetails[provn.id] ? "Hide technical details" : "Show technical details & test invariants"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedDetails[provn.id] ? "rotate-180" : ""}`} />
              </button>

              {expandedDetails[provn.id] && (
                <div className="mt-3 p-4 bg-paper rounded-sm border border-paper-border space-y-2 text-xs font-sans">
                  <div className="font-mono text-[11px] font-bold text-ink uppercase">System Architecture</div>
                  <p className="text-ink-secondary leading-relaxed">{provn.system}</p>
                  <p className="text-ink-secondary leading-relaxed">{provn.outcome}</p>
                  <div className="pt-2 border-t border-paper-line space-y-1 font-mono text-[11px] text-ink-secondary">
                    {provn.technicalDetails?.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-nordic-red shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-paper-line font-mono text-xs">
              <span className="text-ink-muted text-[10px] mr-1 uppercase">Stack:</span>
              {provn.stack.map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </article>

          {/* 02 — Sentinel Finance (Autonomous Actions) */}
          <article className="border border-paper-border bg-paper-surface p-6 sm:p-9 lg:p-10 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-line pb-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2 py-0.5 bg-paper text-ink border border-paper-border font-bold text-[10px] rounded-sm">
                  {sentinel.number}
                </span>
                <span className="text-ink-muted text-[10px] uppercase tracking-wider font-semibold">
                  {sentinel.metadata}
                </span>
                <span className="text-ink-muted text-[10px] hidden sm:inline">·</span>
                <span className="text-ink-secondary text-[11px]">
                  {sentinel.category}
                </span>
              </div>

              <div className="text-[11px] font-mono text-ink-muted">
                AUTONOMOUS EXECUTION · FINANCIAL GUARDRAILS
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight">
                {sentinel.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-ink-secondary">
                &ldquo;{sentinel.tagline}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {sentinel.coreThemes.map((theme, i) => (
                  <span key={i} className="text-[10px] font-mono text-ink-muted bg-paper px-2 py-0.5 border border-paper-border rounded-sm">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Context Note: Move from verifiable actions to autonomous actions */}
            <div className="p-4 bg-paper rounded-sm border border-paper-border text-xs sm:text-sm font-sans text-ink leading-relaxed">
              Explores the next step in autonomous systems: moving from <strong>verifiable actions</strong> into <strong>autonomous actions</strong> constrained by non-negotiable smart-contract guardrails.
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans text-xs sm:text-sm">
              <div className="space-y-1.5">
                <div className="font-mono text-[11px] font-bold text-ink uppercase tracking-wider">
                  The Problem
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  {sentinel.problem}
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="font-mono text-[11px] font-bold text-nordic-red uppercase tracking-wider">
                  The Approach
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  {sentinel.approach}
                </p>
              </div>
            </div>

            {/* Pipeline: SIGNALS ↓ STRATEGY ↓ GUARDRAIL ↓ EXECUTION */}
            {sentinel.pipelineSteps && (
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
                  AUTONOMOUS GUARDRAIL LOOP: SIGNALS ↓ STRATEGY ↓ GUARDRAIL ↓ EXECUTION
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                  {sentinel.pipelineSteps.map((step) => (
                    <div key={step.id} className="p-3 bg-paper rounded-sm border border-paper-border space-y-1">
                      <div className="text-[10px] text-ink font-bold">
                        0{step.stepNumber} // {step.title}
                      </div>
                      <div className="text-[11px] text-ink-secondary font-sans leading-tight">
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progressive Disclosure */}
            <div className="pt-2">
              <button
                onClick={() => toggleDetails(sentinel.id)}
                className="text-xs font-mono text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-colors"
              >
                <span>{expandedDetails[sentinel.id] ? "Hide architecture details" : "Show architecture & hackathon context"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedDetails[sentinel.id] ? "rotate-180" : ""}`} />
              </button>

              {expandedDetails[sentinel.id] && (
                <div className="mt-3 p-4 bg-paper rounded-sm border border-paper-border space-y-2 text-xs font-sans">
                  <p className="text-ink-secondary leading-relaxed">{sentinel.system}</p>
                  <p className="text-ink-secondary leading-relaxed">{sentinel.outcome}</p>
                  <div className="pt-2 border-t border-paper-line space-y-1 font-mono text-[11px] text-ink-secondary">
                    {sentinel.technicalDetails?.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-nordic-red shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-paper-line font-mono text-xs">
              <span className="text-ink-muted text-[10px] mr-1 uppercase">Stack:</span>
              {sentinel.stack.map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* ========================================================================= */}
        {/* GROUP 2: FOUNDATIONS                                                      */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-bold text-[11px] tracking-wider">
              FOUNDATIONS
            </span>
            <span className="text-ink-muted text-[10px] uppercase tracking-wider">
              03 — 04
            </span>
          </div>

          {/* 03 — RASPBERRY PI NAS (Systems & Infrastructure) */}
          <article className="border border-paper-border bg-paper-surface p-6 sm:p-9 lg:p-10 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-line pb-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2 py-0.5 bg-paper text-ink border border-paper-border font-bold text-[10px] rounded-sm">
                  {pi.number}
                </span>
                <span className="text-ink-muted text-[10px] uppercase tracking-wider font-semibold">
                  {pi.metadata}
                </span>
                <span className="text-ink-muted text-[10px] hidden sm:inline">·</span>
                <span className="text-ink-secondary text-[11px]">
                  {pi.category}
                </span>
              </div>

              <div className="text-[11px] font-mono text-ink-muted">
                PHYSICAL HARDWARE · NETWORKING
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight">
                {pi.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-ink-secondary">
                &ldquo;{pi.tagline}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {pi.coreThemes.map((theme, i) => (
                  <span key={i} className="text-[10px] font-mono text-ink-muted bg-paper px-2 py-0.5 border border-paper-border rounded-sm">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Context Story */}
            <div className="p-5 bg-paper rounded-sm border border-paper-border space-y-2 text-xs sm:text-sm font-sans">
              <p className="text-ink leading-relaxed">
                A Raspberry Pi-based private cloud built with Dockerized services, storage and remote access through ngrok.
                Demonstrates systems thinking before entering Web3 — understanding storage, networking, Linux host administration, and microservice containers directly on bare metal.
              </p>
            </div>

            {/* Infrastructure Topology Flow */}
            {pi.pipelineSteps && (
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
                  TOPOLOGY: INTERNET → NGROK → RASPBERRY PI → DOCKER SERVICES
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                  {pi.pipelineSteps.map((step) => (
                    <div key={step.id} className="p-3 bg-paper rounded-sm border border-paper-border space-y-1">
                      <div className="text-[10px] text-ink font-bold">
                        0{step.stepNumber} // {step.title}
                      </div>
                      <div className="text-[11px] text-ink-secondary font-sans leading-tight">
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progressive Disclosure */}
            <div className="pt-2">
              <button
                onClick={() => toggleDetails(pi.id)}
                className="text-xs font-mono text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-colors"
              >
                <span>{expandedDetails[pi.id] ? "Hide outcome & setup" : "Show outcome & setup notes"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedDetails[pi.id] ? "rotate-180" : ""}`} />
              </button>

              {expandedDetails[pi.id] && (
                <div className="mt-3 p-4 bg-paper rounded-sm border border-paper-border space-y-2 text-xs font-sans">
                  <p className="text-ink-secondary leading-relaxed">{pi.outcome}</p>
                  <div className="pt-2 border-t border-paper-line space-y-1 font-mono text-[11px] text-ink-secondary">
                    {pi.technicalDetails?.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-nordic-red shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-paper-line font-mono text-xs">
              <span className="text-ink-muted text-[10px] mr-1 uppercase">Stack:</span>
              {pi.stack.map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </article>

          {/* 04 — HPURN (ML Research & Complex Pipelines) */}
          <article className="border border-paper-border bg-paper-surface p-6 sm:p-9 lg:p-10 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-line pb-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2 py-0.5 bg-paper text-ink border border-paper-border font-bold text-[10px] rounded-sm">
                  {hpurn.number}
                </span>
                <span className="text-ink-muted text-[10px] uppercase tracking-wider font-semibold">
                  {hpurn.metadata}
                </span>
                <span className="text-ink-muted text-[10px] hidden sm:inline">·</span>
                <span className="text-ink-secondary text-[11px]">
                  {hpurn.category}
                </span>
              </div>

              <div className="text-[11px] font-mono text-nordic-red font-medium">
                {hpurn.proofBadge}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight">
                {hpurn.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-ink-secondary">
                &ldquo;{hpurn.tagline}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {hpurn.coreThemes.map((theme, i) => (
                  <span key={i} className="text-[10px] font-mono text-ink-muted bg-paper px-2 py-0.5 border border-paper-border rounded-sm">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans text-xs sm:text-sm">
              <div className="space-y-1.5">
                <div className="font-mono text-[11px] font-bold text-ink uppercase tracking-wider">
                  The Problem
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  {hpurn.problem}
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="font-mono text-[11px] font-bold text-nordic-red uppercase tracking-wider">
                  The Pipeline
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  {hpurn.approach}
                </p>
              </div>
            </div>

            {/* Pipeline: HAZY VIDEO ↓ DCP + AOD-NET ↓ CONVLSTM ↓ CYCLEGAN */}
            {hpurn.pipelineSteps && (
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
                  SPATIOTEMPORAL PIPELINE: HAZY VIDEO ↓ DCP ↓ AOD-NET ↓ CONVLSTM ↓ CYCLEGAN ↓ RESTORED
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                  {hpurn.pipelineSteps.map((step) => (
                    <div key={step.id} className="p-3 bg-paper rounded-sm border border-paper-border space-y-1">
                      <div className="text-[10px] text-ink font-bold">
                        0{step.stepNumber} // {step.title}
                      </div>
                      <div className="text-[11px] text-ink-secondary font-sans leading-tight">
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progressive Disclosure */}
            <div className="pt-2">
              <button
                onClick={() => toggleDetails(hpurn.id)}
                className="text-xs font-mono text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-colors"
              >
                <span>{expandedDetails[hpurn.id] ? "Hide evaluation outcome" : "Show evaluation on RESIDE-6k & IP"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedDetails[hpurn.id] ? "rotate-180" : ""}`} />
              </button>

              {expandedDetails[hpurn.id] && (
                <div className="mt-3 p-4 bg-paper rounded-sm border border-paper-border space-y-2 text-xs font-sans">
                  <p className="text-ink-secondary leading-relaxed">{hpurn.outcome}</p>
                  <div className="pt-2 border-t border-paper-line space-y-1 font-mono text-[11px] text-ink-secondary">
                    {hpurn.technicalDetails?.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-nordic-red shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-paper-line font-mono text-xs">
              <span className="text-ink-muted text-[10px] mr-1 uppercase">Stack:</span>
              {hpurn.stack.map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* ========================================================================= */}
        {/* GROUP 3: EXPERIMENTS                                                      */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between font-mono text-xs border-b border-paper-line pb-2">
            <span className="text-ink uppercase font-bold text-[11px] tracking-wider">
              EXPERIMENTS
            </span>
            <span className="text-ink-muted text-[10px] uppercase tracking-wider">
              05
            </span>
          </div>

          {/* 05 — FORGE (Hackathon Rapid Experiment) */}
          <article className="border border-paper-border bg-paper-surface p-6 sm:p-8 rounded-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-line pb-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-sm bg-paper text-ink-secondary border border-paper-border text-[10px] font-bold">
                  {forge.number}
                </span>
                <span className="text-ink-muted text-[10px] uppercase tracking-wider font-semibold">
                  {forge.metadata}
                </span>
                <span className="text-ink-muted text-[10px] hidden sm:inline">·</span>
                <span className="text-ink font-semibold">{forge.title}</span>
              </div>

              <div className="flex items-center gap-3">
                {forge.liveUrl && (
                  <a
                    href={forge.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-nordic-red transition-colors flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <span>Interactive Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {forge.repoUrl && (
                  <a
                    href={forge.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-secondary hover:text-ink transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-serif italic text-base text-ink-secondary">
                &ldquo;{forge.tagline}&rdquo;
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans max-w-3xl">
                {forge.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {forge.coreThemes.map((theme, i) => (
                  <span key={i} className="text-[10px] font-mono text-ink-muted bg-paper px-2 py-0.5 border border-paper-border rounded-sm">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-paper-line font-mono text-[10px]">
              <span className="text-ink-muted uppercase mr-1">Stack:</span>
              {forge.stack.map((s, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-paper rounded-sm border border-paper-border text-ink-secondary">
                  {s}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
