import React from "react";
import { CommonDrawer } from "@/components/commonDrawer";
import { AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import SeparatorLine from "./separatorLine";

function EducationSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl mb-16">
      <div className="w-full flex flex-col gap-6 items-start text-gray-700 dark:text-neutral-200 text-left">
        {(data?.education.values || []).map((education, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-wrap justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {education.institute}
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                {education.website && (
                  <a
                    href={education.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 hover:underline flex items-center"
                  >
                    <GlobeAltIcon className="w-4 h-4 mr-1" />
                    {education.website
                      .replace(/^https?:\/\/www\./, "")
                      .replace(/\/.*$/, "")}
                  </a>
                )}
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                  {education.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <p className="font-medium text-gray-700 dark:text-neutral-200">
                {education.degree}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {education.year}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
              {education.result}
            </p>
            {education.activities &&
              Array.isArray(education.activities) &&
              education.activities.length > 0 && (
                <>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">
                    Volunteering Activities
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-neutral-300 mb-2">
                    {education.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </>
              )}
            <SeparatorLine className="mt-8" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function EducationDrawer({ label, data }) {
  const renderEducationContent = () => (
    <>
      <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-thin scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <EducationSection data={data} />
      </div>
    </>
  );

  return (
    <CommonDrawer
      triggerIcon={AcademicCapIcon}
      triggerLabel={label}
      triggerTitle="Click to view education"
      renderContent={renderEducationContent}
      drawerTitle={label || "Education"}
    />
  );
}
