import SeparatorLine from "../../utils/SeparatorLine";
import FaviconImage from "../../utils/FaviconImage";
import Tag from "../../utils/Tag";
import { GlobeIcon, MoveUpRightIcon } from "lucide-react";

export function ProjectCard({ data, craft, index }) {
  return (
    <>
    <div
      key={index}
      className="animate-fade-in-up cursor-pointer group/card w-full rounded-[28px] hover:bg-transparent hover:brightness-90 transition-all duration-200 flex flex-col gap-5 hover:bg-black/5 dark:hover:bg-white/5 p-4 py-6 sm:p-6 sm:py-8 -my-[2px]"
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
          className="w-fit group/link flex items-center h-8 font-light text-sm text-primary-700 dark:text-primary-500 transition-all duration-500 pr-3 p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 hover:bg-primary-100 dark:hover:bg-primary-900"
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
        {data?.crafts?.projects?.show_tags &&
          craft?.tags &&
          craft?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {craft.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </div>
          )}
      </div>
    </div>
    <SeparatorLine className=" !my-0 mx-4 sm:mx-4 !w-[calc(100%-32px)] !sm:w-[calc(100%-48px)] opacity-25" />
  </>
);

}

export default function ProjectsContent({ data }) {
  return (
    <div className="animate-fadeIn grid grid-cols-1 justify-items-center">
      {data?.crafts?.projects?.values?.map((craft, index) => (
        <ProjectCard data={data} craft={craft} index={index} key={index} />
      ))}
    </div>
  );
}
