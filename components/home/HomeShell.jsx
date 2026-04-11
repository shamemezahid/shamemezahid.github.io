"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useData } from "@/components/context/DataContext";

import { ExpandIcon, ShrinkIcon } from "lucide-react";

import ProfileContent from "@/components/home/ProfileContent";
import CraftContent from "@/components/home/CraftContent";
import AccessibilityAccordion from "@/components/utils/AccessibilitySettings";
import DisclaimerAccordion from "@/components/utils/DisclaimerAccordion";

const TABS = {
  PROFILE: "profile",
  CRAFTS: "crafts",
};

const TAB_PATHS = {
  [TABS.PROFILE]: "/",
  [TABS.CRAFTS]: "/crafts",
};

function getTabFromPath(pathname) {
  if (pathname === "/crafts") return TABS.CRAFTS;
  return TABS.PROFILE;
}

function NavItem({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-light transition-all duration-300 px-3 py-2 rounded-md ${isActive
          ? "font-normal text-primary-700 dark:text-primary-400/75 [text-shadow:0_0_32px_currentColor]"
          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:[text-shadow:0_0_32px_currentColor] hover:animate-none"
        }`}
    >
      {label}
    </button>
  );
}

function NavBar({ activeTab, onTabChange, showNav, setShowNav }) {
  return (
    <nav className="w-full xs:w-fit h-full flex items-center justify-end gap-4 sm:gap-6 md:gap-10 px-4 py-2">
      <NavItem
        label="Profile"
        isActive={activeTab === TABS.PROFILE}
        onClick={() => onTabChange(TABS.PROFILE)}
      />
      <NavItem
        label="Crafts"
        isActive={activeTab === TABS.CRAFTS}
        onClick={() => onTabChange(TABS.CRAFTS)}
      />
      <button
        onClick={() => setShowNav(!showNav)}
        aria-label="Hide navigation"
        className="p-2 text-sm font-light transition-all duration-300 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:[text-shadow:0_0_24px_currentColor]"
      >
        <ExpandIcon
          className={`w-4 h-4 transition-transform duration-300 ${showNav ? "rotate-0" : "rotate-180"}`}
          strokeWidth={1.5}
        />
      </button>
    </nav>
  );
}

function ContentWrapper({ activeTab, showNav }) {
  const data = useData();

  return (
    <div
      className={`
        scroll-smooth flex-1 min-h-0 h-full 
        bg-white dark:bg-neutral-900 
        bg-gradient-to-br from-neutral-50/20 via-primary-200/20 to-neutral-100/10 
        dark:from-neutral-900/10 dark:via-primary-800/10 dark:to-neutral-950/10 
        overflow-hidden flex flex-col gap-4 transition-all duration-300 ease-in-out
        scrollbar-none scrollbar-hidden scrollbar-hide no-scrollbar
        ${showNav
          ? "m-2 rounded-[32px] border border-neutral-300 dark:border-neutral-700"
          : "m-0 rounded-none border-0"
        }
      `}
    >
      {activeTab === TABS.PROFILE ? (
        <ProfileContent data={data} />
      ) : (
        <CraftContent data={data} />
      )}
    </div>
  );
}

function ShowNavFloatingActionButton({ showNav, setShowNav }) {
  return (
    <div
      className={`
        fixed bottom-6 sm:top-6 right-6 h-fit
        transition-all duration-500 ease-[cubic-bezier(0.6,-0.4,0.5,1.5)]
        opacity-100 animate-fadeToLow
        hover:opacity-100 hover:animate-none
        ${showNav ? "translate-y-32 sm:-translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <button
        onClick={() => setShowNav(true)}
        aria-label="Show Navigation"
        className="h-12 w-12 p-3 rounded-3xl bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 border dark:border-neutral-600/50 border-neutral-400/50 flex items-center justify-center hover:shadow-700 hover:shadow-2xl"
      >
        <ShrinkIcon strokeWidth={1} className="w-5 h-5" />
      </button>
    </div>
  );
}

export default function HomeShell() {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab = getTabFromPath(pathname);
  const [showNav, setShowNav] = useState(true);

  const handleTabChange = (tab) => {
    router.push(TAB_PATHS[tab], { scroll: false });
  };

  return (
    <>
      <div
        className={`flex flex-col-reverse sm:flex-col bg-neutral-100 dark:bg-neutral-800 h-[100dvh] ${showNav ? "pb-2 sm:py-0 sm:pt-2" : "py-0"}`}
      >
        <div
          className={`flex flex-wrap justify-between transition-all duration-300 ${showNav ? "h-8" : "h-0 overflow-hidden"}`}
        >
          <span
            className="hidden xs:visible xs:flex text-sm sm:text-base h-full items-center justify-end px-4 [text-shadow:0_0_32px_var(--primary-color-500)] text-colors opacity-75 font-black cursor-pointer"
            onClick={() => handleTabChange(TABS.PROFILE)}
          >
            SHAMEME
          </span>
          <NavBar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            showNav={showNav}
            setShowNav={setShowNav}
          />
        </div>

        <ContentWrapper
          activeTab={activeTab}
          showNav={showNav}
        />

        <ShowNavFloatingActionButton
          showNav={showNav}
          setShowNav={setShowNav}
        />


        <div className={`fixed right-6 transition-all duration-500 ease-[cubic-bezier(0.6,-0.4,0.5,1.5)] ${showNav ? "bottom-16 sm:bottom-6" : "-bottom-16"}`}>
          <div className="flex flex-col items-end gap-2">
            <DisclaimerAccordion />
            <AccessibilityAccordion />
          </div>
        </div>

      </div>
    </>
  );
}
