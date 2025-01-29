import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { SkillsSection } from "../sections/skillsSection";

export function SkillsDrawer({ label, data }) {
  const renderSkillsContent = () => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
      <SkillsSection data={data}/>
    </div>
  );

  return (
    <CommonDrawer
      triggerIcon={WrenchScrewdriverIcon}
      triggerLabel={label}
      triggerTitle="Click to view skills"
      renderContent={renderSkillsContent}
      drawerTitle={label || "Skills"}
    />
  );
}