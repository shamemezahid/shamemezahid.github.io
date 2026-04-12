import SeparatorLine from "../../utils/SeparatorLine";
import FaviconImage from "../../utils/FaviconImage";
import Tag from "../../utils/Tag";
import { GlobeIcon, MoveUpRightIcon } from "lucide-react";

export function ProjectCard({ data, craft, index }) {
  return (
    <>
      <div
        key={index}
        title="Details coming soon"
        className="hover:bg-neutral-100 hover:dark:bg-neutral-800 hover:bg-gradient-to-br 
        from-neutral-50/30 via-primary-200/30 to-neutral-100/20 
        dark:from-neutral-900/20 dark:via-primary-800/20 dark:to-neutral-950/20
        hover:outline outline-neutral-100/50 dark:outline-neutral-800/20
        animate-fade-in-up cursor-pointer group/card w-full rounded-3xl transition-all duration-300 flex flex-col gap-3 md:gap-4 hover:bg-black/5 dark:hover:bg-white/5 p-4 sm:p-6 lg:p-7"
      >
        <div className="flex flex-col gap-3">

          <div className="flex flex-wrap items-center gap-4">

            <div className="flex items-center justify-center scale-2 gap-2">
              <FaviconImage link={craft.link} />

              <h3 className="group-hover/card:brightness-150 transition-all duration-200 font-bold text-base text-neutral-900 dark:text-white">
                {craft.name}
              </h3>
            </div>

          </div>

          {/* <img src='/images/item.jpeg' alt={craft.name} className="w-full aspect-[16/9] h-auto rounded-xl" /> */}

          <p className="h-full group-hover/card:brightness-150 transition-all duration-200 text-sm font-normal text-neutral-600 dark:text-neutral-400">
            {craft.summary}
          </p>
          <a
            href={`https://${craft.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit group/link flex items-center h-8 font-light text-sm text-primary-700 dark:text-primary-500 transition-all duration-500 pr-3 p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 hover:bg-primary-100/50 dark:hover:bg-primary-500/25"
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
      {/* <SeparatorLine className=" !my-0 mx-4 sm:mx-4 !w-[calc(100%-32px)] !sm:w-[calc(100%-48px)] opacity-25" /> */}
    </>
  );

}

export default function ProjectsContent({ data }) {
  return (
    <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2">
      {data?.crafts?.projects?.values?.map((craft, index) => (
        <ProjectCard data={data} craft={craft} index={index} key={index} />
      ))}
    </div>
  );
}
