import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import ResumeIcon from "@/public/icons/ResumeIcon";
import { ResumeContent } from "../sections/resumeContent";
import { DownloadFile } from "../utils/downloadFile";

export function ResumeDrawer({ label, data }) {  
  const renderResumeContent = () => (
    <>
      <DownloadFile download_url = {data?.actions?.resume?.download} />
      <ResumeContent src = {data?.actions?.resume?.url} />
    </>
  );

  return (
    <CommonDrawer
      triggerIcon={ResumeIcon}
      triggerLabel={label}
      triggerTitle="Click to open resume"
      renderContent={renderResumeContent}
      drawerTitle={label || "Resume"}
      contentStyles="bg-neutral-50 dark:bg-[#313131]"
    />
  );
}
