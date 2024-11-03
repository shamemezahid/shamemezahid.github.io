import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function LinksSection({ def, data }) {
  const links = data?.links?.values || def.links.values;
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
      <h2 className="font-semibold text-neutral-500 dark:text-neutral-400">
        {data?.links?.label || def.links.label}
      </h2>
      <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 items-start -mx-4 transition-all duration-200">
        {links.map((link, index) => (
          <a
            key={index}
            className="group flex items-center h-12 font-semibold text-teal-700 dark:text-teal-500 transition-all duration-500 px-4 py-3 rounded-full hover:bg-teal-50 dark:hover:bg-teal-950"
            target="_blank"
            href={link.url}
            rel="noopener noreferrer"
            title={"Open " + link.label}
          >
            <ArrowUpRightIcon className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
            <Image
              width={20}
              height={20}
              alt="Link Icon"
              src={`/icons/${link.icon}.svg`}
              className="w-6 h-6 group-hover:w-0 group-hover:h-0 transition-all duration-500"
            />
            <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">{link.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
