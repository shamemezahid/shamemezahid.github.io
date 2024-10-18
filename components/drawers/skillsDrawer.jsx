import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import SeparatorLine from "../utils/separatorLine";

function SkillsSection({ def, data }) {
  const skillsData = data?.skills || def?.skills;
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl mb-16">
      <div className="w-full flex flex-col gap-3 items-start text-neutral-700 dark:text-neutral-200 text-left">
        {(skillsData?.values || []).map((category, index) => (
          <div key={index} className="w-full">
            <h3 className="font-bold text-base text-neutral-900 dark:text-white mb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 text-xs font-medium bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4] text-neutral-600 dark:text-neutral-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <SeparatorLine className="mt-8" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsDrawer({ label, data, def }) {
  const renderSkillsContent = () => (
    <>
      <div className="w-full h-full overflow-y-auto scrollbar-hide scrollbar-thin scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent">
        <SkillsSection data={data} def={def} />
      </div>
    </>
  );

  return (
    <CommonDrawer
      triggerIcon={WrenchScrewdriverIcon}
      triggerLabel={label}
      triggerTitle="Click to view skills"
      renderContent={renderSkillsContent}
      drawerTitle={label || "Skills"}
    />
  );
}