import React from "react";
import { CommonDrawer } from "@/components/commonDrawer";
import ResumeIcon from "@/public/icons/ResumeIcon";

export function TestResumeDrawer({ label, src }) {
  const renderResumeContent = () => (
    <>
      <p className="text-xl font-semibold px-2">{label}</p>
      <div className="w-full h-full mx-auto sm:rounded-t-xl overflow-hidden">
        <iframe className="w-full h-full" src={src} allow="autoplay" />
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
    />
  );
}
