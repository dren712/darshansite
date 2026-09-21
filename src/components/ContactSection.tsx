"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Copy, Check, Github, Linkedin, Twitter, ArrowRight, Phone, Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(siteConfig.social.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.social.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (7 cols): Editorial Stance & Direct Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
              <span className="font-semibold uppercase tracking-wider text-ink text-[11px]">
                INITIATE DIALOGUE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink tracking-tight leading-tight">
              Have an unconventional idea? <br />
              <span className="text-ink-secondary font-medium">Let&apos;s build the system behind it.</span>
            </h2>

            <p className="text-base text-ink-secondary leading-relaxed font-sans max-w-xl">
              I focus on autonomous AI agent coordination, cryptographic proof systems, Solana runtime primitives, and living-world architectures. Open for high-conviction engineering roles, research fellowships, or co-founder discussions.
            </p>

            {/* Direct Contact Cards (Email & Phone) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl font-mono">
              {/* Email Card */}
              <div className="p-4 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] text-ink-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-nordic-red" />
                    <span>Direct Email</span>
                  </div>
                  <div className="text-xs sm:text-sm text-ink font-semibold select-all mt-1 truncate">
                    {siteConfig.social.email}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-paper-line">
                  <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="px-2.5 py-1 text-[11px] rounded-sm bg-ink text-paper hover:bg-ink/90 transition-colors"
                  >
                    Compose
                  </a>
                  <button
                    onClick={copyEmail}
                    className="px-2.5 py-1 rounded-sm bg-paper border border-paper-border hover:border-ink text-[11px] text-ink transition-colors flex items-center gap-1"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-nordic-red" />
                        <span className="text-nordic-red font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone / Contact Card */}
              <div className="p-4 rounded-sm border border-paper-border bg-paper-surface flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] text-ink-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-nordic-red" />
                    <span>Direct Contact / Call</span>
                  </div>
                  <div className="text-xs sm:text-sm text-ink font-semibold select-all mt-1">
                    {siteConfig.social.phone}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-paper-line">
                  <a
                    href={`tel:${siteConfig.social.phone.replace(/\s+/g, "")}`}
                    className="px-2.5 py-1 text-[11px] rounded-sm bg-ink text-paper hover:bg-ink/90 transition-colors"
                  >
                    Call
                  </a>
                  <button
                    onClick={copyPhone}
                    className="px-2.5 py-1 rounded-sm bg-paper border border-paper-border hover:border-ink text-[11px] text-ink transition-colors flex items-center gap-1"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3 text-nordic-red" />
                        <span className="text-nordic-red font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social / Code Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-sm bg-paper-surface border border-paper-border hover:border-ink text-ink transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/dren712</span>
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-sm bg-paper-surface border border-paper-border hover:border-ink text-ink transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-sm bg-paper-surface border border-paper-border hover:border-ink text-ink transition-colors flex items-center gap-2"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>@DarshanVG712</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Accessible, High-Contrast Form */}
          <div className="lg:col-span-5 w-full">
            <div className="p-6 sm:p-8 rounded-sm border border-paper-border bg-paper-surface space-y-5">
              <div className="text-xs font-mono text-ink font-bold uppercase tracking-wider border-b border-paper-line pb-3">
                Send a Message
              </div>

              {submitted ? (
                <div className="p-6 rounded-sm bg-paper border border-paper-border text-center space-y-2 font-sans">
                  <div className="w-8 h-8 rounded-full bg-nordic-redFaint border border-nordic-redBorder text-nordic-red flex items-center justify-center mx-auto">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-ink text-sm">Message Dispatch Ready</h4>
                  <p className="text-xs text-ink-secondary">
                    Launching default mail client to dispatch your message to {siteConfig.social.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-nordic-red underline pt-2 block mx-auto"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-ink-secondary block font-medium">
                      Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name or team"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-paper border border-paper-border text-ink text-xs font-mono focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-ink-secondary block font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-paper border border-paper-border text-ink text-xs font-mono focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-ink-secondary block font-medium">
                      Project or Architecture Scope
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Brief overview of what you're designing or need verified..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-paper border border-paper-border text-ink text-xs font-mono focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-sm bg-ink hover:bg-ink/90 text-paper font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
