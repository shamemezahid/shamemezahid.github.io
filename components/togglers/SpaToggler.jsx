import { useRouter, usePathname } from "next/navigation";
import { CopyIcon, GalleryVerticalEndIcon } from "lucide-react";

export default function SPAToggle({ className }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAltView = pathname === "/alt";

  return (
    <button
      onClick={() => router.push(isAltView ? "/" : "/alt")}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200/50 dark:bg-neutral-700/50 hover:bg-neutral-100/50 dark:hover:bg-neutral-600/50 backdrop-blur text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isAltView ? "Back to Default View" : "Single Page View"}
      title={isAltView ? "Go to default view" : "Single-page view (⚠️Experimental)"}
    >
      {isAltView ? (
        <div className="flex items-center">
          <CopyIcon className="w-6 h-6" strokeWidth={1.5}/>
          <p className="text-sm mx-2">Default View</p>
        </div>
      ) : (
        <div className="flex items-center">
          <GalleryVerticalEndIcon className="w-6 h-6" strokeWidth={1.5}/>
          <p className="text-sm mx-2">Single-Page View</p>
        </div>
      )}
    </button>
  );
}
