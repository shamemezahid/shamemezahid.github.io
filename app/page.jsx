"use client";

import { useData } from "@/components/context/DataContext";

import AccessibilityAccordion from "@/components/utils/accessibilitySettings";
import IntroSection from "@/components/sections/introSection";
import QuoteSection from "@/components/sections/quoteSection";
import ActionsSection from "@/components/sections/actionsSection";
import AboutSection from "@/components/sections/aboutSection";
import LinksSection from "@/components/sections/linksSection";
import FooterSection from "@/components/sections/footerSection";

export default function Home() {
  const data = useData();

  return (
    <div className="flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
      <AccessibilityAccordion />
      <main className="animate-fadeIn flex flex-col w-full h-full max-w-6xl p-2 sm:p-6 pt-6 mx-auto relative">
        <IntroSection data={data} />
        <ActionsSection data={data} />
        <QuoteSection data={data} />
        <AboutSection data={data} />
        <LinksSection data={data} />
        <FooterSection data={data} />
      </main>
    </div>
  );
}
