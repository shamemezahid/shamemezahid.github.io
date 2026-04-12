import FaviconImage from "../../utils/FaviconImage";
import { GlobeIcon, MoveUpRightIcon } from "lucide-react";

function CoolStuffCard({ craft, index }) {
  return (
    <>
      <div
        key={index}
        className="animate-fade-in-up group/card w-full rounded-2xl transition-all duration-200 flex flex-col gap-5 p-4 py-6 sm:p-6 sm:py-8 -my-[2px]"
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
            className="w-fit group/link text-wrap flex items-center h-8 font-light text-sm text-primary-700 dark:text-primary-500 transition-all duration-500 pr-3 p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 hover:bg-primary-100/50 dark:hover:bg-primary-500/25"
          >
            <MoveUpRightIcon
              className="w-0 h-0 group-hover/link:w-4 group-hover/link:h-4 transition-all duration-500"
              strokeWidth={1.5}
            />
            <GlobeIcon
              className="w-4 h-4 group-hover/link:w-0 group-hover/link:h-0 transition-all duration-500"
              strokeWidth={1.5}
            />
            <span className="ml-2 relative overflow-hidden whitespace-nowrap flex align-center">
              <span className="inline-block transition-all duration-300 opacity-100 group-hover/link:opacity-0 group-hover/link:max-w-0 max-w-[60px]">
                Github
              </span>
              <span className="inline-block transition-all duration-300 opacity-0 max-w-0 group-hover/link:opacity-100 group-hover/link:max-w-[300px] overflow-hidden">
                {craft.link}
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default function CoolStuffContent({ data }) {
  const items = data?.crafts?.cool_stuff?.values;

  if (!items || items.length === 0) {
    return (
      <div className="mx-4 sm:mx-6 h-full bg-black/5 dark:bg-white/5 rounded-3xl py-32 animate-fadeIn text-center text-sm text-neutral-600 dark:text-neutral-400">
        {data?.crafts?.cool_stuff?.empty_state}
      </div>
    );
  }

  return (
    <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
      {items.map((craft, index) => (
        <CoolStuffCard craft={craft} index={index} key={index} />
      ))}
    </div>
  );
}
