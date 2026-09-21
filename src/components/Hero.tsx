"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { GameLoaderName } from "@/components/GameLoaderName";
import { ArrowRight, Github, Mail, Linkedin, Twitter } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88dvh] flex flex-col justify-center pt-24 pb-14 border-b border-paper-border bg-paper paper-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Statement & Core Primitives (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-8">
            <div className="space-y-6">
              {/* Restrained single eyebrow */}
              <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
                <span>PUNE, INDIA</span>
              </div>

              {/* Headline: Clean, bold, direct */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink leading-[1.08]">
                AI-native builder. <br className="hidden sm:inline" />
                Systems thinker.
              </h1>

              {/* Supporting line */}
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans max-w-xl">
                I turn unfamiliar technologies, ambitious ideas and AI-assisted development into working systems.
              </p>

              {/* Philosophy Axiom - Unadorned */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-3 py-2 px-3.5 border border-paper-border bg-paper-surface font-mono text-xs text-ink-secondary">
                  <span className="text-nordic-red font-semibold">AXIOM:</span>
                  <span>Architecture &gt; Systems &gt; Optimization &gt;&gt; Code</span>
                </div>
              </div>
            </div>

            {/* CTAs (1 primary + 1 secondary) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <a
                href="#work"
                className="px-5 py-2.5 rounded-sm bg-ink text-paper hover:bg-ink/90 font-medium transition-colors flex items-center gap-2"
              >
                <span>View selected work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-sm border border-paper-border bg-paper-surface hover:border-ink-muted text-ink transition-colors"
              >
                Get in touch
              </a>

              <div className="flex items-center gap-1.5 pl-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-paper-border bg-paper-surface text-ink-secondary hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-paper-border bg-paper-surface text-ink-secondary hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-paper-border bg-paper-surface text-ink-secondary hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
                  aria-label="X (Twitter) Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="p-2.5 border border-paper-border bg-paper-surface text-ink-secondary hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
                  aria-label="Email Darshan"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Multilingual Ritual Flasher (5 cols) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <GameLoaderName />
          </div>
        </div>
      </div>
    </section>
  );
};
