import React from "react";
import { CommonDrawer } from "@/components/drawers/CommonDrawer";
import { EducationSection } from "../sections/EducationSection";
import { GraduationCapIcon } from "lucide-react";

const renderEducationContent = ( data ) => (
  <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent pb-16">
    <EducationSection data={data} />
  </div>
);

export function EducationDrawer({ label, data}) {
  return (
    <CommonDrawer
      triggerIcon={GraduationCapIcon}
      triggerLabel={label}
      triggerTitle="Click to view education"
      renderContent={() => renderEducationContent(data)}
      drawerTitle={label || "Education"}
    />
  );
}
