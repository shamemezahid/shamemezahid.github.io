import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import ResumeIcon from "@/public/icons/ResumeIcon";

export function ResumeDrawer({ label, src }) {
  const renderResumeContent = () => (
    <>
      <div className="w-full h-full mx-auto sm:rounded-t-xl overflow-hidden">
        <iframe className="w-full h-full" src={src} allow="autoplay"/>
      </div>
    </>
  );

  return (
    <CommonDrawer
      triggerIcon={ResumeIcon}
      triggerLabel={label}
      triggerTitle="Click to open resume"
      renderContent={renderResumeContent}
      drawerTitle={label || "Resume"}
      className="bg-neutral-50 dark:bg-[#313131]"
    />
  );
}
