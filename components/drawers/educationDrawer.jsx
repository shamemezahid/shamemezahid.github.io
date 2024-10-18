import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

function EducationSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl mb-16">
      <div className="w-full flex flex-col gap-4 items-start text-neutral-700 dark:text-neutral-200 text-left">
        {(data?.education.values || []).map((education, index) => (
          <div key={index} className="w-full p-5 rounded-xl bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4]">
            <div className="flex sm:justify-between flex-col sm:flex-row items-start sm:items-center mb-2">
              <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                {education.institute}
              </h3>
              <div className="flex items-center gap-2">
                {education.website && (
                  <a
                    href={education.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
                  >
                    <GlobeAltIcon className="w-4 h-4 mr-1" />
                    {education.website
                      .replace(/^https?:\/\/www\./, "")
                      .replace(/\/.*$/, "")}
                  </a>
                )}
                <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                  {education.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <p className="font-medium text-neutral-700 dark:text-neutral-200">
                {education.degree}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {education.year}
              </p>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-2">
              {education.result}
            </p>
            {education.activities &&
              Array.isArray(education.activities) &&
              education.activities.length > 0 && (
                <>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    Volunteering Activities
                  </p>
                  <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                    {education.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </>
              )}
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
