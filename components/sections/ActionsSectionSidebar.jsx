"use client";

import { useState } from "react";
import {
    FileTextIcon,
    MailCheckIcon,
    BriefcaseBusinessIcon,
    SwordsIcon,
    GraduationCapIcon,
    ChartBarIcon,
    XIcon
} from "lucide-react";
import { ResumeContent } from "./ResumeContent";
import { DownloadFile } from "../utils/DownloadFile";
import { ClickToReveal } from "../utils/ClickToReveal";
import { ContactFormSection } from "./ContactFormSection";
import { ExperiencesSection } from "./ExperiencesSection";
import { SkillsSection } from "./SkillsSection";
import { EducationSection } from "./EducationSection";
import { ResearchSection } from "./ResearchSection";
import SeparatorLine from "../utils/SeparatorLine";

// Sidebar trigger button component
function SidebarTriggerButton({ icon: Icon, label, isActive, onClick, title }) {
    return (
        <button
            onClick={onClick}
            title={title}
            className={`backdrop-blur-sm group flex items-center gap-2 w-full sm:w-fit text-sm text-left font-semibold transition-all p-3 pr-4 rounded-3xl duration-400 ${isActive
                    ? "bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-500"
                    : "text-primary-700 dark:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950"
                }`}
        >
            <Icon className="w-5 h-5 stroke-neutral-500 dark:stroke-neutral-400" strokeWidth={1.5} />
            {label}
        </button>
    );
}

// Content renderers for each section
const renderResumeContent = (data) => (
    <>
        <DownloadFile download_url={data?.actions?.resume?.download} />
        <ResumeContent src={data?.actions?.resume?.url} />
    </>
);

const renderContactContent = (data) => (
    <>
        {data?.actions?.contact?.show && (
            <div className="flex flex-row w-full sm:w-fit whitespace-nowrap gap-3 mb-4">
                <ClickToReveal content={data?.actions?.contact?.address} />
            </div>
        )}
        <div className="w-full h-full flex flex-col text-sm gap-4 overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
            <ContactFormSection />
        </div>
    </>
);

const renderExperiencesContent = (data) => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <ExperiencesSection data={data} />
    </div>
);

const renderSkillsContent = (data) => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <SkillsSection data={data} />
    </div>
);

const renderEducationContent = (data) => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <EducationSection data={data} />
    </div>
);

const renderResearchContent = (data) => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <ResearchSection data={data} />
    </div>
);

export default function ActionsSectionSidebar({ data }) {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            key: "resume",
            icon: FileTextIcon,
            label: data?.actions?.resume?.label,
            title: "Click to view resume",
            show: data?.actions?.resume?.show,
            renderContent: () => renderResumeContent(data),
            contentBg: "bg-neutral-50 dark:bg-[#313131]",
            subtitle: data?.actions?.resume?.subtitle,
        },
        {
            key: "contact",
            icon: MailCheckIcon,
            label: data?.actions?.contact?.label,
            title: "Click to open contact form",
            show: data?.actions?.contact?.show,
            renderContent: () => renderContactContent(data),
            subtitle: data?.actions?.contact?.subtitle,
        },
        {
            key: "experiences",
            icon: BriefcaseBusinessIcon,
            label: "Experiences",
            title: "Click to view experiences",
            show: data?.actions?.experiences?.show,
            renderContent: () => renderExperiencesContent(data),
        },
        {
            key: "skills",
            icon: SwordsIcon,
            label: "Skills",
            title: "Click to view skills",
            show: data?.actions?.skills?.show,
            renderContent: () => renderSkillsContent(data),
        },
        {
            key: "educations",
            icon: GraduationCapIcon,
            label: "Education",
            title: "Click to view education",
            show: data?.actions?.educations?.show,
            renderContent: () => renderEducationContent(data),
        },
        {
            key: "research",
            icon: ChartBarIcon,
            label: "Research",
            title: "Click to view research",
            show: data?.actions?.research?.show,
            renderContent: () => renderResearchContent(data),
        },
    ];

    const handleSectionClick = (sectionKey) => {
        setActiveSection(activeSection === sectionKey ? null : sectionKey);
    };

    const activeSectionData = sections.find((s) => s.key === activeSection);

    if (!data?.actions?.show) return null;

    return (
        <div className="text-sm w-full flex gap-4 p-4 rounded-xl relative">
            {/* Left side: Trigger buttons */}
            <div className={`transition-all duration-500 ${activeSection ? 'w-fit' : 'w-full'}`}>
                <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))] sm:flex sm:flex-wrap gap-1 sm:gap-2 items-start -mx-4">
                    {sections
                        .filter((section) => section.show)
                        .map((section) => (
                            <SidebarTriggerButton
                                key={section.key}
                                icon={section.icon}
                                label={section.label}
                                title={section.title}
                                isActive={activeSection === section.key}
                                onClick={() => handleSectionClick(section.key)}
                            />
                        ))}
                </div>
            </div>

            {/* Right side: Sidebar Panel */}
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSection ? "w-[400px] lg:w-[500px] opacity-100" : "w-0 opacity-0"
                    }`}
            >
                {activeSectionData && (
                    <div
                        className={`w-full h-[600px] rounded-3xl border border-neutral-300 dark:border-neutral-700 ${activeSectionData.contentBg || "bg-neutral-50/95 dark:bg-neutral-800/60"
                            } backdrop-blur flex flex-col p-6 gap-4`}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="dark:text-neutral-50 text-neutral-700 text-xl font-semibold">
                                    {activeSectionData.label}
                                </p>
                                {activeSectionData.subtitle && (
                                    <p className="dark:text-neutral-400 text-neutral-500 text-sm mt-1">
                                        {activeSectionData.subtitle}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={() => setActiveSection(null)}
                                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Close sidebar"
                            >
                                <XIcon className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>

                        <SeparatorLine />

                        {/* Content */}
                        <div className="flex-1 overflow-hidden">
                            {activeSectionData.renderContent()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
