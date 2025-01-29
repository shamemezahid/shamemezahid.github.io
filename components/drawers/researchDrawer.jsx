import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { ResearchSection } from "../sections/researchSection";
import {
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export function ResearchDrawer({ label, data }) {
  const renderResearchContent = () => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
      <ResearchSection data={data} />
    </div>
  );

  return (
    <CommonDrawer
      triggerIcon={ChartPieIcon}
      triggerLabel={label || "Research"}
      triggerTitle="Click to view research"
      renderContent={renderResearchContent}
      drawerTitle={label || "Research"}
    />
  );
}
