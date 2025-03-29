import React from "react";
import { CommonDrawer } from "@/components/drawers/CommonDrawer";
import { ResearchSection } from "../sections/ResearchSection";
import { ChartBarIcon } from "lucide-react";

const renderResearchContent = ( data ) => (
  <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent pb-16">
    <ResearchSection data={data} />
  </div>
);

export function ResearchDrawer({ label, data }) {
  return (
    <CommonDrawer
      triggerIcon={ChartBarIcon}
      triggerLabel={label || "Research"}
      triggerTitle="Click to view research"
      renderContent={() => renderResearchContent(data)}
      drawerTitle={label || "Research"}
    />
  );
}
