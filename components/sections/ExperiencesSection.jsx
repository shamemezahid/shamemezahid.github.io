"use client";

import { useState } from "react";
import { Globe, ArrowUpRight } from "lucide-react";
import FaviconImage from "../utils/FaviconImage";
import Tag from "../utils/Tag";

function ExperienceTabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 text-xs font-medium transition-all duration-300 cursor-pointer ${isActive
        ? "text-neutral-900 dark:text-neutral-100"
        : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
        }`}
    >
      {label}
    </button>
  );
}

export function ExperiencesSection({ data }) {
  const experiences = data?.experiences?.values || [];
  const [activeTabs, setActiveTabs] = useState(() =>
    experiences.map((exp) =>
      Array.isArray(exp.contributions) && exp.contributions.length > 0
        ? "contributions"
        : "responsibilities"
    )
  );

  const setTab = (index, tab) => {
    setActiveTabs((prev) => {
      const next = [...prev];
      next[index] = tab;
      return next;
    });
  };

  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl">
      {/* <h2 className="font-semibold text-neutral-500 dark:text-neutral-400">{data?.experiences?.label || data?.experiences?.label}</h2> */}
      <div className="w-full flex flex-col gap-4 items-start text-colors text-left">
        {experiences.map((experience, index) => {
          const hasContributions =
            Array.isArray(experience.contributions) && experience.contributions.length > 0;
          const hasResponsibilities =
            Array.isArray(experience.responsibilities) && experience.responsibilities.length > 0;
          const showTabs = hasContributions && hasResponsibilities;
          const activeTab = activeTabs[index] || "responsibilities";

          const items =
            activeTab === "contributions"
              ? experience.contributions
              : Array.isArray(experience.responsibilities)
                ? experience.responsibilities
                : [experience.responsibilities];

          return (
            <div
              key={index}
              className="w-full p-5 border dark:border-neutral-600/50 border-neutral-400/50 rounded-3xl bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4]"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <FaviconImage link={experience?.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")} />
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                    {experience.workplace}
                  </h3>
                </div>
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center h-8 font-medium text-primary-700 dark:text-primary-500 transition-all duration-500 px-3 py-2 rounded-full bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-primary-100/50 dark:hover:bg-primary-500/25"
                    title={`Open ${experience.workplace} website`}
                  >
                    <ArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" strokeWidth={1.5} />
                    <Globe className="w-4 h-4 group-hover:w-0 group-hover:h-0 transition-all duration-500" strokeWidth={1.5} />
                    <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                      {experience.website
                        .replace(/^https?:\/\/(www\.)?/, "")
                        .replace(/\/.*$/, "")}
                    </p>
                  </a>
                )}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <p className="font-medium text-colors">
                  {experience.designation}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {experience.start} - {experience.end}
                </p>
              </div>
              <div className="flex flex-wrap justify-between gap-2 mb-2 items-center">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag>{experience.shift}</Tag>
                  <Tag>{experience.nature}</Tag>
                  <Tag>{experience.location}</Tag>
                </div>
                {showTabs && (
                  <div className="flex gap-1 items-center">
                    <ExperienceTabButton
                      label="Contributions"
                      isActive={activeTab === "contributions"}
                      onClick={() => setTab(index, "contributions")}
                    />
                    <ExperienceTabButton
                      label="Responsibilities"
                      isActive={activeTab === "responsibilities"}
                      onClick={() => setTab(index, "responsibilities")}
                    />
                  </div>
                )}
              </div>
              <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-300">
                {items.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
