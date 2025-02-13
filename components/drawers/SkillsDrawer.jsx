import React from "react";
import { CommonDrawer } from "@/components/drawers/CommonDrawer";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { SkillsSection } from "../sections/SkillsSection";

const renderSkillsContent = ( data ) => (
  <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent pb-16">
    <SkillsSection data={data} />
  </div>
);

export function SkillsDrawer({ label, data }) {
  return (
    <CommonDrawer
      triggerIcon={WrenchScrewdriverIcon}
      triggerLabel={label}
      triggerTitle="Click to view skills"
      renderContent={() => renderSkillsContent(data)}
      drawerTitle={label || "Skills"}
    />
  );
}
