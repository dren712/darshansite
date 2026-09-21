"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, ArrowRight, RotateCcw } from "lucide-react";

export interface ScriptItem {
  id: string;
  name: string;
  glyph: string;
  transliteration: string;
}

const scripts: ScriptItem[] = [
  {
    id: "latin",
    name: "Latin",
    glyph: "DARSHAN",
    transliteration: "Darshan",
  },
  {
    id: "runic",
    name: "Elder Futhark",
    glyph: "ᛞᚨᚱᛋᚺᚨᚾ",
    transliteration: "D · A · R · S · H · A · N",
  },
  {
    id: "marathi",
    name: "Marathi",
    glyph: "दर्शन",
    transliteration: "Darshan",
  },
  {
    id: "hindi",
    name: "Hindi",
    glyph: "दर्शन",
    transliteration: "Darshan",
  },
  {
    id: "bengali",
    name: "Bengali",
    glyph: "দর্শন",
    transliteration: "Dôrshon",
  },
  {
    id: "tamil",
    name: "Tamil",
    glyph: "தர்ஷன்",
    transliteration: "Tarṣaṉ",
  },
  {
    id: "telugu",
    name: "Telugu",
    glyph: "దర్శన్",
    transliteration: "Darśan",
  },
  {
    id: "kannada",
    name: "Kannada",
    glyph: "ದರ್ಶನ್",
    transliteration: "Darśan",
  },
  {
    id: "malayalam",
    name: "Malayalam",
    glyph: "ദർശൻ",
    transliteration: "Darśan",
  },
  {
    id: "gujarati",
    name: "Gujarati",
    glyph: "દર્શન",
    transliteration: "Darshan",
  },
  {
    id: "punjabi",
    name: "Punjabi",
    glyph: "ਦਰਸ਼ਨ",
    transliteration: "Darshan",
  },
  {
    id: "greek",
    name: "Greek",
    glyph: "ΔΑΡΣΑΝ",
    transliteration: "Darsan",
  },
  {
    id: "cyrillic",
    name: "Cyrillic",
    glyph: "ДАРШАН",
    transliteration: "Darshan",
  },
];

export const GameLoaderName: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % scripts.length);
        setAnimating(false);
      }, 180);
    }, 2400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = scripts[index];

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % scripts.length);
      setAnimating(false);
    }, 120);
  };

  const handleReset = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex(0);
      setAnimating(false);
    }, 120);
  };

  return (
    <div className="border border-paper-border bg-paper-surface p-6 sm:p-7 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full font-mono">
      {/* Header Strip */}
      <div className="flex items-center justify-between border-b border-paper-line pb-3.5 text-xs">
        <div className="flex items-center gap-2 text-ink-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
          <span className="font-semibold tracking-wider uppercase text-[11px] text-ink">
            DARSHAN
          </span>
          <span className="text-ink-muted text-[10px]">
            // {current.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 text-ink-muted hover:text-ink transition-colors"
            title={isPlaying ? "Pause rotation" : "Resume"}
            aria-label={isPlaying ? "Pause rotation" : "Resume"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-nordic-red" />}
          </button>
          <button
            onClick={handleNext}
            className="p-1 text-ink-muted hover:text-ink transition-colors"
            title="Next script"
            aria-label="Next script"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleReset}
            className="p-1 text-ink-muted hover:text-ink transition-colors"
            title="Reset to origin"
            aria-label="Reset to origin"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Typographic Glyph Canvas */}
      <div className="py-8 sm:py-10 flex flex-col justify-center select-none min-h-[160px]">
        <div className="text-[11px] text-ink-muted uppercase tracking-wider mb-2">
          {current.name}
        </div>

        <div className="overflow-hidden py-1">
          <div
            className={`text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-ink transition-all duration-200 ease-out transform ${
              animating
                ? "opacity-0 -translate-y-2 filter blur-[1px]"
                : "opacity-100 translate-y-0 filter blur-0"
            }`}
          >
            {current.glyph}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 text-xs text-ink-secondary">
          <span className="font-semibold text-nordic-red font-mono">
            // {current.transliteration}
          </span>
        </div>
      </div>

      {/* Hairline Progress & Pills */}
      <div className="border-t border-paper-line pt-4 space-y-3">
        <div className="w-full bg-paper-subtle h-[2px] rounded-none overflow-hidden">
          <div
            className="bg-nordic-red h-full transition-all duration-300 ease-linear"
            style={{ width: `${((index + 1) / scripts.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {scripts.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setIndex(idx);
                setAnimating(false);
              }}
              className={`px-2 py-0.5 text-[10px] transition-colors border ${
                index === idx
                  ? "bg-ink text-paper border-ink font-semibold"
                  : "bg-paper text-ink-muted border-paper-border hover:text-ink hover:border-ink-muted"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
