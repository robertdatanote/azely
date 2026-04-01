"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "./HeroSection";
import { StatsBar } from "./StatsBar";
import { FeaturesSection } from "./FeaturesSection";
import { RegionsSection } from "./RegionsSection";
import { CtaSection } from "./CtaSection";

export function LandingPage() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <RegionsSection />
        <CtaSection />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
