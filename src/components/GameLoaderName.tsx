"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, ArrowRight, RotateCcw } from "lucide-react";

export interface ScriptItem {
  id: string;
  name: string;
  family: string;
  region: string;
  glyph: string;
  transliteration: string;
  significance: string;
}

const scripts: ScriptItem[] = [
  {
    id: "latin",
    name: "Latin / Standard",
    family: "Roman Alphabet",
    region: "Global Standard",
    glyph: "DARSHAN",
    transliteration: "Darshan",
    significance: "Identity settled into production standard · One identity across systems",
  },
  {
    id: "runic",
    name: "Elder Futhark",
    family: "Nordic Runes",
    region: "Scandinavia",
    glyph: "ᛞᚨᚱᛋᚺᚨᚾ",
    transliteration: "D · A · R · S · H · A · N",
    significance: "Dagaz (Dawn / Awakening) · Raido (Journey) · Sowilo (Sun)",
  },
  {
    id: "marathi",
    name: "Marathi",
    family: "Devanagari",
    region: "Maharashtra (Pune)",
    glyph: "दर्शन",
    transliteration: "Darshan",
    significance: "Native language of Pune · Root in direct sight & systemic comprehension",
  },
  {
    id: "hindi",
    name: "Hindi",
    family: "Devanagari",
    region: "Northern India",
    glyph: "दर्शन",
    transliteration: "Darshan",
    significance: "Direct perception · Philosophical inquiry into reality",
  },
  {
    id: "bengali",
    name: "Bengali",
    family: "Eastern Indic",
    region: "Eastern India",
    glyph: "দর্শন",
    transliteration: "Dôrshon",
    significance: "Observation · Vision & contemplation",
  },
  {
    id: "tamil",
    name: "Tamil",
    family: "Dravidian",
    region: "Southern India",
    glyph: "தர்ஷன்",
    transliteration: "Tarṣaṉ",
    significance: "Classical literary script of the South",
  },
  {
    id: "telugu",
    name: "Telugu",
    family: "Dravidian",
    region: "Andhra & Telangana",
    glyph: "దర్శన్",
    transliteration: "Darśan",
    significance: "Sight · Sacred perception",
  },
  {
    id: "kannada",
    name: "Kannada",
    family: "Dravidian",
    region: "Karnataka",
    glyph: "ದರ್ಶನ್",
    transliteration: "Darśan",
    significance: "Vision and discerning insight",
  },
  {
    id: "malayalam",
    name: "Malayalam",
    family: "Dravidian",
    region: "Kerala",
    glyph: "ദർശൻ",
    transliteration: "Darśan",
    significance: "Observation · Clarity of seeing",
  },
  {
    id: "gujarati",
    name: "Gujarati",
    family: "Western Indic",
    region: "Western India",
    glyph: "દર્શન",
    transliteration: "Darshan",
    significance: "Insight · Perception",
  },
  {
    id: "punjabi",
    name: "Punjabi",
    family: "Gurmukhi",
    region: "Northern India",
    glyph: "ਦਰਸ਼ਨ",
    transliteration: "Darshan",
    significance: "Direct vision · Contemplative sight",
  },
  {
    id: "greek",
    name: "Classical Greek",
    family: "Hellenic",
    region: "Mediterranean",
    glyph: "ΔΑΡΣΑΝ",
    transliteration: "Darsan",
    significance: "Classical geometry and early systemic inquiry",
  },
  {
    id: "cyrillic",
    name: "Cyrillic",
    family: "Slavic",
    region: "Eastern Europe",
    glyph: "ДАРШАН",
    transliteration: "Darshan",
    significance: "Orthographic precision across Slavic systems",
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
      {/* Ritual Header Strip */}
      <div className="flex items-center justify-between border-b border-paper-line pb-3.5 text-xs">
        <div className="flex items-center gap-2 text-ink-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-nordic-red"></span>
          <span className="font-semibold tracking-wider uppercase text-[11px]">
            ONE IDENTITY // {String(index + 1).padStart(2, "0")} OF {String(scripts.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 text-ink-muted hover:text-ink transition-colors"
            title={isPlaying ? "Pause rotation" : "Resume ritual"}
            aria-label={isPlaying ? "Pause ritual" : "Resume ritual"}
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
          {current.region} · {current.name}
        </div>

        {/* Display Text with quiet vertical displacement & clip dissolve */}
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

        <div className="flex items-center gap-3 mt-3 text-xs text-ink-secondary">
          <span className="font-semibold text-nordic-red font-mono">
            // {current.transliteration}
          </span>
          <span className="text-ink-muted">·</span>
          <span className="text-ink-muted font-sans text-[11px]">
            {current.family}
          </span>
        </div>
      </div>

      {/* Ritual Metadata & Linear Progress Bar */}
      <div className="border-t border-paper-line pt-4 space-y-3">
        <p className="text-xs text-ink-secondary font-sans leading-relaxed">
          {current.significance}
        </p>

        {/* Quiet hairline progress bar */}
        <div className="w-full bg-paper-subtle h-[2px] rounded-none overflow-hidden">
          <div
            className="bg-nordic-red h-full transition-all duration-300 ease-linear"
            style={{ width: `${((index + 1) / scripts.length) * 100}%` }}
          />
        </div>

        {/* Quick script pills */}
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
