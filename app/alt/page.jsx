"use client";

import { useData } from "@/components/context/DataContext";

import { ResumeContent } from "@/components/sections/resumeContent";
import { ContactFormSection } from "@/components/sections/contactFormSection";
import { ExperiencesSection } from "@/components/sections/experiencesSection";
import { SkillsSection } from "@/components/sections/skillsSection";
import { EducationSection } from "@/components/sections/educationSection";
import { ResearchSection } from "@/components/sections/researchSection";
import AccessibilityAccordion from "@/components/utils/accessibilitySettings";
import IntroSection from "@/components/sections/introSection";
import QuoteSection from "@/components/sections/quoteSection";
import AboutSection from "@/components/sections/aboutSection";
import LinksSection from "@/components/sections/linksSection";
import AnnouncementBanner from "@/components/utils/announcementBanner";

export default function AltPage() {
  var data = useData();
  return (
    <div className="pt-16 flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
      <AccessibilityAccordion />
      <main className="animate-fadeIn flex flex-col gap-12 w-full h-full max-w-6xl p-2 sm:p-6 pt-6 mx-auto relative">
        <div className="flex flex-col">
          <IntroSection data={data} />
          <QuoteSection data={data} />
          <AboutSection data={data} />
          <LinksSection data={data} />
        </div>
        <ResumeContent src={data?.actions?.resume?.url} />
        <ExperiencesSection data={data} />
        <EducationSection data={data} />
        <SkillsSection data={data} />
        <ResearchSection data={data} />
        <ContactFormSection />
        <AnnouncementBanner
          message={
            "This page is a work in progress. Things may not look as intended."
          }
          action_url={"/"}
          action_text={"Goto default view"}
        />
      </main>
    </div>
  );
}

