import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function AnnouncementBanner({
  message,
  action_url,
  action_text,
}) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3 fixed top-3 left-3 right-3 w-fit mx-auto z-[9999] pr-6 p-3 bg-opacity-80 rounded-full bg-primary-100 border border-primary-300">
      <InformationCircleIcon className="text-primary-800 w-6 h-6" />
      <p className="text-primary-800 text-center">{message}</p>
      {action_url && action_text && (
        <button
          onClick={() => router.push(action_url)}
          className="text-primary-800 font-bold hover:text-primary-900"
        >
          {action_text}
        </button>
      )}
    </div>
  );
}
