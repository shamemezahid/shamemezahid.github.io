import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { ExperiencesSection } from "../sections/experiencesSection";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const renderExperiencesContent = ( data ) => (
  <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent pb-16">
    <ExperiencesSection data={data} />
  </div>
);

export function ExperiencesDrawer({ label, data }) {
  return (
    <CommonDrawer
      triggerIcon={BriefcaseIcon}
      triggerLabel={label || "Experiences"}
      triggerTitle="Click to view experiences"
      renderContent={() => renderExperiencesContent(data)}
      drawerTitle={label || "Experiences"}
    />
  );
}
