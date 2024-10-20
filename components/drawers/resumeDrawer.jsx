import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import ResumeIcon from "@/public/icons/ResumeIcon";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export function ResumeDrawer({ label, src, download_url }) {
  const renderResumeContent = () => (
    <>
      <a
        href={download_url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-2 right-0 group flex items-center gap-2 w-fit text-sm text-left font-semibold text-emerald-700 dark:text-emerald-500 transition-all px-4 py-3 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950"
      >
        <div className="flex flex-col">
          <ArrowDownTrayIcon className="w-5 h-0 transition-all duration-500 group-hover:w-5 group-hover:h-5" />
          <ArrowDownIcon className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-neutral-500 dark:stroke-neutral-400" />
        </div>
        Download
      </a>
      <div className="w-full h-full mx-auto sm:rounded-t-xl overflow-hidden">
        <iframe className="w-full h-full rounded-t-3xl" src={src} allow="autoplay" />
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
      contentStyles="bg-neutral-50 dark:bg-[#313131]"
    />
  );
}
