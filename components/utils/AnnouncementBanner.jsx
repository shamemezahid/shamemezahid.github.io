import { InfoIcon } from "lucide-react";

export default function AnnouncementBanner({
  message,
  action_url,
  action_text,
}) {
  return (
    <div className="text-xs flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 w-fit mx-auto pr-6 p-3 bg-primary-100/50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800/50 rounded-xl">
      <div className="flex flex-col gap-2 items-start">
        <p className="hidden flex items-center gap-2 text-primary-800 dark:text-primary-200 text-left sm:text-center font-bold">
        <InfoIcon strokeWidth={1.5} className="text-primary-600 dark:text-primary-400 w-4 h-4" />
          Announcement</p>
        <p className="text-primary-800 dark:text-primary-200 text-left">{message}</p>
      </div>

      {action_url && action_text && (
        <a
          href={action_url}
          className="ml-6 sm:inset-0 text-primary-800 dark:text-primary-300 font-bold hover:text-primary-900 dark:hover:text-primary-200 transition-colors"
        >
          {action_text}
        </a>
      )}
    </div>
  );
}
