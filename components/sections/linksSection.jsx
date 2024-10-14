import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function LinksSection({ def, data }) {
  const links = data?.links?.values || def.links.values;
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
      <h2 className="font-semibold text-gray-500 dark:text-neutral-400">
        {data?.links?.label || def.links.label}
      </h2>
      <div className="w-full flex flex-wrap gap-3 items-start -mx-3 transition-all duration-200">
        {links.map((link, index) => (
          <a
            key={index}
            className="group flex items-center h-12 font-semibold text-teal-700 dark:text-teal-500 transition-all duration-500 p-3 pr-4 rounded-full hover:bg-teal-50 dark:hover:bg-teal-950"
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
            <p className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-0 group-hover:max-w-[200px] overflow-hidden whitespace-nowrap">{link.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
