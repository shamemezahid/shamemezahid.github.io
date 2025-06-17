import { useState } from "react";
import AnnouncementBanner from "../utils/AnnouncementBanner";
import NavItem from "./crafts/NavItem";
import ProjectsContent from "./crafts/ProjectsContent";
import CaseStudiesContent from "./crafts/CaseStudiesContent";
import WriteUpsContent from "./crafts/WriteUpsContent";
import CoolStuffContent from "./crafts/CoolStuffContent";
import ScrollableNavigation from "./crafts/ScrollableNavigation";

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
        <div className="p-4 pb-8 sm:px-6 sm:py-12 md:py-20 w-full flex flex-col gap-4">
          <h1 className="w-full text-left text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            {data?.crafts?.label}
          </h1>
          <span className="w-full text-left text-sm font-normal text-colors opacity-75">
            {data?.crafts?.description}
          </span>
          <AnnouncementBanner
            message={
              "This page is a work in progress. Some items may be inaccurate, incomplete or broken. Feel free to reach out if any questions, complains or suggestions."
            }
          />
        </div>

        <ScrollableNavigation>
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
        </ScrollableNavigation>

        <div className="w-full">{renderContent()}</div>
      </div>
    </main>
  );
}
