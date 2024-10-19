import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import {
  ChartPieIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

function ResearchSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-4 rounded-xl mb-16">
      {(data?.research?.values || []).map((research, index) => (
        <div
          key={index}
          className="w-full p-5 rounded-3xl bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4]"
        >
          <h3 className="font-bold text-base text-neutral-900 dark:text-white mb-2">
            {research.title}
          </h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-2">
            {research.authors}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {research.conference} ({research.year})
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {research.abstract}
          </p>
          <div className="flex flex-wrap gap-3 mt-4 transition-all duration-200">
            {research.URL && (
              <a
                href={research.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center h-12 font-semibold text-emerald-700 dark:text-emerald-500 transition-all duration-500 px-4 py-3 rounded-full bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-emerald-100 dark:hover:bg-emerald-900"
                title={`Open ${research.URL_label}`}
              >
                <ArrowUpRightIcon className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
                <DocumentTextIcon className="w-6 h-6 group-hover:w-0 group-hover:h-0 transition-all duration-500" />
                <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                  {research.URL_label}
                </p>
              </a>
            )}
            {research.presentation && (
              <a
                href={research.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center h-12 font-semibold text-emerald-700 dark:text-emerald-500 transition-all duration-500 px-4 py-3 rounded-full bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-emerald-100 dark:hover:bg-emerald-900"
                title="Open Presentation"
              >
                <ArrowUpRightIcon className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
                <VideoCameraIcon className="w-6 h-6 group-hover:w-0 group-hover:h-0 transition-all duration-500" />
                <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                  View Presentation
                </p>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResearchDrawer({ label, data }) {
  const renderResearchContent = () => (
    <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-thin scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
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