import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FeaturedWork } from "@/components/FeaturedWork";
import { HowIBuild } from "@/components/HowIBuild";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { LabSection } from "@/components/LabSection";
import { NowSection } from "@/components/NowSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col bg-paper text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CredibilityStrip />
        <FeaturedWork />
        <HowIBuild />
        <AboutSection />
        <SkillsSection />
        <LabSection />
        <NowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
