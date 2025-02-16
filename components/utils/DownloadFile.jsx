import { ArrowDownTrayIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export function DownloadFile({ download_url }) {
  return (
    <a
      href={download_url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:shadow-primary-700/10 dark:hover:shadow-primary-400/10 hover:shadow-2xl absolute -top-2 right-0 group flex items-center gap-2 w-fit text-sm text-left font-semibold text-primary-700 dark:text-primary-500 transition-all px-4 py-3 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-950"
    >
      <div className="flex flex-col">
        <ArrowDownTrayIcon className="w-5 h-0 transition-all duration-500 group-hover:w-5 group-hover:h-5" />
        <ArrowDownIcon className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-neutral-500 dark:stroke-neutral-400" />
      </div>
      Download
    </a>
  );
}
