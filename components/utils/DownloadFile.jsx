import { ArrowDownToLineIcon, DownloadIcon } from 'lucide-react';

export function DownloadFile({ download_url }) {
  return (
    <a
      href={download_url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute -top-2 right-0 group flex items-center gap-2 w-fit text-sm text-left font-semibold text-primary-700 dark:text-primary-500 transition-all px-4 py-3 rounded-3xl hover:bg-primary-50 dark:hover:bg-primary-950"
    >
      <div className="flex flex-col text-sm">
        <DownloadIcon strokeWidth={1.5} className="w-5 h-0 transition-all duration-500 group-hover:w-5 group-hover:h-5" />
        <ArrowDownToLineIcon strokeWidth={1.5} className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-neutral-500 dark:stroke-neutral-400" />
      </div>
      Download
    </a>
  );
}
