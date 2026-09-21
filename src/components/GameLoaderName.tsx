"use client";

import React, { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";

interface ScriptEntry {
  glyph: string;
  name: string;
}

const ritualSequence: ScriptEntry[] = [
  { glyph: "DARSHAN", name: "Latin" },
  { glyph: "दर्शन", name: "Devanagari · Marathi & Hindi" },
  { glyph: "দর্শন", name: "Bengali" },
  { glyph: "தர்ஷன்", name: "Tamil" },
  { glyph: "దర్శన్", name: "Telugu" },
  { glyph: "ದರ್ಶನ್", name: "Kannada" },
  { glyph: "ദർശൻ", name: "Malayalam" },
  { glyph: "દર્શન", name: "Gujarati" },
  { glyph: "ਦਰਸ਼ਨ", name: "Gurmukhi · Punjabi" },
  { glyph: "درشن", name: "Urdu" },
  { glyph: "ᛞᚨᚱᛋᚺᚨᚾ", name: "Elder Futhark · Nordic Runes" },
  { glyph: "DARSHAN", name: "Latin · Settle" },
];

export const GameLoaderName: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [hasSettled, setHasSettled] = useState(false);

  useEffect(() => {
    if (hasSettled) return;

    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => {
          if (prev >= ritualSequence.length - 1) {
            setHasSettled(true);
            return prev;
          }
          return prev + 1;
        });
        setAnimating(false);
      }, 150);
    }, 900);

    return () => clearInterval(timer);
  }, [hasSettled]);

  const handleReplay = () => {
    setHasSettled(false);
    setIndex(0);
    setAnimating(false);
  };

  const current = ritualSequence[index];

  return (
    <div className="border border-paper-border bg-paper-surface p-6 sm:p-8 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full font-mono">
      {/* Top Quiet Status Bar */}
      <div className="flex items-center justify-between border-b border-paper-line pb-3 text-xs text-ink-muted">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${hasSettled ? "bg-ink" : "bg-nordic-red animate-pulse"}`}></span>
          <span className="text-[11px] uppercase tracking-wider text-ink-secondary">
            {hasSettled ? "IDENTITY SETTLED" : "LOADING RITUAL"}
          </span>
        </div>

        {hasSettled && (
          <button
            onClick={handleReplay}
            className="flex items-center gap-1 text-[11px] text-ink-muted hover:text-ink transition-colors"
            title="Replay sequence"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Replay</span>
          </button>
        )}
      </div>

      {/* Main Glyph Display Area */}
      <div className="py-8 sm:py-12 flex flex-col justify-center min-h-[140px] select-none">
        <div className="overflow-hidden py-1">
          <div
            className={`text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-ink transition-all duration-150 ease-out transform ${
              animating
                ? "opacity-0 -translate-y-1.5"
                : "opacity-100 translate-y-0"
            }`}
          >
            {current.glyph}
          </div>
        </div>

        <div className="mt-3 text-xs text-ink-muted font-mono">
          // {current.name}
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="border-t border-paper-line pt-3">
        <div className="w-full bg-paper-subtle h-[2px] overflow-hidden">
          <div
            className="bg-nordic-red h-full transition-all duration-200"
            style={{ width: `${((index + 1) / ritualSequence.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
