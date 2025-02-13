import React from "react";
import { CommonDrawer } from "@/components/drawers/CommonDrawer";
import ResumeIcon from "@/public/icons/ResumeIcon";
import { ResumeContent } from "../sections/ResumeContent";
import { DownloadFile } from "../utils/DownloadFile";

const renderResumeContent = ( data ) => (
  <>
    <DownloadFile download_url = {data?.actions?.resume?.download} />
    <ResumeContent src = {data?.actions?.resume?.url} />
  </>
);

export function ResumeDrawer({ label, data }) {  
  return (
    <CommonDrawer
      triggerIcon={ResumeIcon}
      triggerLabel={label}
      triggerTitle="Click to open resume"
      renderContent={() => renderResumeContent(data)}
      drawerTitle={label || "Resume"}
      contentStyles="bg-neutral-50 dark:bg-[#313131]"
    />
  );
}
