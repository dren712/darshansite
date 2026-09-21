"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-paper-border shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-paper border-b border-paper-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 text-ink group"
          >
            <span className="font-sans font-bold text-sm tracking-tight text-ink group-hover:text-nordic-red transition-colors">
              DARSHAN GAIKWAD
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-ink-muted">
              / Pune, IN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono text-ink-secondary hover:text-ink transition-colors tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Status & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-nordic-red inline-block"></span>
              <span>Available for Systems / Solana Roles</span>
            </div>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-sm text-xs font-mono bg-ink text-paper hover:bg-ink/90 transition-colors flex items-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-ink-secondary hover:text-ink"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-paper-border bg-paper-surface px-4 py-4 space-y-3 font-mono text-xs">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-ink-secondary hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-paper-border">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 px-3 rounded-sm text-center text-xs font-bold text-paper bg-ink block"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
