"use client";

import { ResumeDrawer } from "@/components/drawers/ResumeDrawer";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import IntroSection from "@/components/sections/IntroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import AboutSection from "@/components/sections/AboutSection";
import LinksSection from "@/components/sections/LinksSection";
import AccessibilityAccordion from "@/components/utils/AccessibilitySettings";
import AnnouncementBanner from "@/components/utils/AnnouncementBanner";
import SectionWithTitle from "@/components/utils/SectionTitle";
import { useData } from "@/components/context/DataContext";
import Navigator from "@/components/utils/Navigator";

export default function AltPage() {
  const data = useData();
  return (
    <>
      <div className="pt-16 flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
        <main className="animate-fadeIn flex flex-col gap-12 w-full h-full max-w-6xl p-2 sm:p-6 pt-6 mx-auto relative">
          <div className="flex flex-col">
            <IntroSection data={data} />
            <QuoteSection data={data} />
            <ResumeDrawer label="View Resume" data={data} />
            <AboutSection data={data} />
            <LinksSection data={data} />
          </div>
          <SectionWithTitle
            pagetitle="Experiences"
            content={<ExperiencesSection data={data} />}
          />
          <SectionWithTitle
            pagetitle="Skills"
            content={<SkillsSection data={data} />}
          />
          <SectionWithTitle
            pagetitle="Education"
            content={<EducationSection data={data} />}
          />
          <SectionWithTitle
            pagetitle="Research"
            content={<ResearchSection data={data} />}
          />
          <SectionWithTitle
            pagetitle="Contact"
            content={<ContactFormSection />}
          />

          <AnnouncementBanner
            message={
              "This page is a work in progress. Things may not look as intended."
            }
            action_url={"/"}
            action_text={"Goto default view"}
          />
        </main>
      </div>
      <div className="fixed z-50 bottom-8 right-8 px-4">
        <Navigator />
      </div>
      <div className="fixed z-50 top-8 right-8">
        <AccessibilityAccordion />
      </div>
    </>
  );
}
