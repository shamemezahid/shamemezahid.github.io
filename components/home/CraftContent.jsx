import { GlobeIcon, MoveUpRightIcon } from "lucide-react";
import { useState } from "react";
import SeparatorLine from "../utils/SeparatorLine";
import FaviconImage from "../utils/FaviconImage";
import AnnouncementBanner from "../utils/AnnouncementBanner";
import Tag from "../utils/Tag";

function NavItem({ label, tag, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap text-sm font-normal transition-all duration-300 px-3 py-2 rounded-md ${
        isActive
          ? "font-normal text-primary-700 dark:text-primary-400/75 [text-shadow:0_0_24px_currentColor]"
          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:[text-shadow:0_0_24px_currentColor] hover:animate-none"
      }`}
    >
      {label}
      {tag && <span className="grayscale ml-2">{tag}</span>}
    </button>
  );
}

function ProjectsContent({ data }) {
  return (
    <div className="animate-fadeIn grid grid-cols-1 gap-2 sm:gap-4">
      {data?.crafts?.projects?.values?.map((craft, index) => (
        <>
          <SeparatorLine className=" !my-0 mx-4 sm:mx-6 !w-[calc(100%-32px)] !sm:w-[calc(100%-48px)] opacity-50" />
          <a
            key={index}
            className="animate-fade-in-up cursor-pointer group/card w-full rounded-2xl hover:bg-transparent hover:brightness-90 transition-all duration-200 flex flex-col gap-5 hover:bg-black/5 dark:hover:bg-white/5 p-4 pb-6 sm:p-6 sm:pb-8 -my-[2px]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaviconImage link={craft.link} />
                  <h3 className="group-hover/card:brightness-150 transition-all duration-200 font-bold text-base text-neutral-900 dark:text-white">
                    {craft.name}
                  </h3>
                </div>
              </div>
              <p className="group-hover/card:brightness-150 transition-all duration-200 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                {craft.summary}
              </p>
              <a
                  href={`https://${craft.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit group/link flex items-center h-8 font-light text-sm text-primary-700 dark:text-primary-500 transition-all duration-500 pr-3 p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-700/75 hover:bg-primary-100 dark:hover:bg-primary-900"
                >
                  <MoveUpRightIcon
                    className="w-0 h-0 group-hover/link:w-4 group-hover/link:h-4 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                  <GlobeIcon
                    className="w-4 h-4 group-hover/link:w-0 group-hover/link:h-0 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                  <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                    {craft.link}
                  </p>
                </a>
              {data?.crafts?.projects?.show_tags && craft?.tags && craft?.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {craft.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </div>
              )}
            </div>
          </a>
        </>
      ))}
    </div>
  );
}

function CaseStudiesContent({ data }) {
  return (
    <div className="w-full h-full bg-black/5 dark:bg-white/5 rounded-3xl py-32 animate-fadeIn text-center text-sm text-neutral-600 dark:text-neutral-400">
      {data?.crafts?.case_studies?.empty_state}
    </div>
  );
}

function WriteUpsContent({ data }) {
  return (
    <div className="w-full h-full bg-black/5 dark:bg-white/5 rounded-3xl py-32 animate-fadeIn text-center text-sm text-neutral-600 dark:text-neutral-400">
      {data?.crafts?.write_ups?.empty_state}
    </div>
  );
}

function CoolStuffContent({ data }) {
  return (
    <div className="w-full h-full bg-black/5 dark:bg-white/5 rounded-3xl py-32 animate-fadeIn text-center text-sm text-neutral-600 dark:text-neutral-400">
      {data?.crafts?.cool_stuff?.empty_state}
    </div>
  );
}

export default function CraftContent({ data }) {
  const [activeTab, setActiveTab] = useState(data?.crafts?.projects?.label);

  const renderContent = () => {
    switch (activeTab) {
      case data?.crafts?.projects?.label:
        return <ProjectsContent data={data} />;
      case data?.crafts?.case_studies?.label:
        return <CaseStudiesContent data={data} />;
      case data?.crafts?.write_ups?.label:
        return <WriteUpsContent data={data} />;
      case data?.crafts?.cool_stuff?.label:
        return <CoolStuffContent data={data} />;
      default:
        return <ProjectsContent data={data} />;
    }
  };

  return (
    <main className="overflow-x-hidden animate-fadeIn flex flex-col items-center w-full h-full mx-auto">
      <div className="flex flex-col items-center w-full max-w-6xl p-2 pt-4 pb-8 sm:p-4 sm:pt-8 sm:pb-12">
        <div className="px-4 sm:px-6 py-8 sm:py-12 md:py-20 w-full flex flex-col items-center gap-4">
          <h1 className="w-full text-left md:text-center max-w-2xl text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            {data?.crafts?.label}
          </h1>
          <span className="w-full text-left md:text-center max-w-2xl text-sm font-normal text-colors opacity-75">
            {data?.crafts?.description}
          </span>
          <AnnouncementBanner
            message={
              "This page is a work in progress. Some items may be inaccurate, incomplete or broken. Feel free to reach out if any questions, complains or suggestions."
            }
          />
        </div>

        <div className="w-full overflow-x-auto py-4 px-1 sm:px-4 flex items-center gap-2 sm:gap-6 md:gap-10 scrollbar-none">
          <NavItem
            label={data?.crafts?.projects?.label}
            tag={data?.crafts?.projects?.values?.length}
            isActive={activeTab === data?.crafts?.projects?.label}
            onClick={() => setActiveTab(data?.crafts?.projects?.label)}
          />
          <NavItem
            label={data?.crafts?.case_studies?.label}
            isActive={activeTab === data?.crafts?.case_studies?.label}
            onClick={() => setActiveTab(data?.crafts?.case_studies?.label)}
          />
          <NavItem
            label={data?.crafts?.write_ups?.label}
            isActive={activeTab === data?.crafts?.write_ups?.label}
            onClick={() => setActiveTab(data?.crafts?.write_ups?.label)}
          />
          <NavItem
            label={data?.crafts?.cool_stuff?.label}
            isActive={activeTab === data?.crafts?.cool_stuff?.label}
            onClick={() => setActiveTab(data?.crafts?.cool_stuff?.label)}
          />
        </div>

        <div className="w-full">{renderContent()}</div>
      </div>
    </main>
  );
}
