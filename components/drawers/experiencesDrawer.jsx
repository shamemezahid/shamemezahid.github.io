import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { BriefcaseIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import SeparatorLine from "../utils/separatorLine";

function ExperiencesSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl mb-16">
      {/* <h2 className="font-semibold text-gray-500 dark:text-neutral-400">{data?.experiences?.label || data?.experiences?.label}</h2> */}
      <div className="w-full flex flex-col gap-4 items-start text-gray-700 dark:text-neutral-200 text-left">
        {(data?.experiences.values || []).map((experience, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                {experience.workplace}
              </h3>
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 hover:underline flex items-center"
                  >
                    <GlobeAltIcon className="w-4 h-4 mr-1" />
                    {experience.website
                      .replace(/^https?:\/\/(www\.)?/, "")
                      .replace(/\/.*$/, "")}
                  </a>
                )}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <p className="font-medium text-gray-700 dark:text-neutral-200">
                {experience.designation}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {experience.start} - {experience.end}
              </p>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                {experience.shift}
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                {experience.nature}
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                {experience.location}
              </span>
            </div>
            <ul className="list-disc pl-5 text-gray-600 dark:text-neutral-300">
              {Array.isArray(experience.responsibilities) ? (
                experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm leading-relaxed">
                    {responsibility}
                  </li>
                ))
              ) : (
                <li className="text-sm leading-relaxed">
                  {experience.responsibilities}
                </li>
              )}
            </ul>
            <SeparatorLine className="mt-8" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperiencesDrawer({ label, data }) {
  const renderExperiencesContent = () => (
    <>
      <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-thin scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <ExperiencesSection data={data} />
      </div>
    </>
  );

  return (
    <CommonDrawer
      triggerIcon={BriefcaseIcon}
      triggerLabel={label}
      triggerTitle="Click to view experiences"
      renderContent={renderExperiencesContent}
      drawerTitle={label || "Experiences"}
    />
  );
}
