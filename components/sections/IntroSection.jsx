import { MapPin } from "lucide-react";
import ColorThemeSelect from "../utils/ColorThemeSelect";

export default function IntroSection({ data }) {
  return (
    <div className="w-full relative flex flex-col justify-start md:flex-row md:items-center gap-4 p-4 rounded-tr-[64px] rounded-br-[64px] rounded-tl-[100px] rounded-bl-[100px]">
      <img
        alt="Shamim Bin Zahid"
        src="/images/shameme.webp"
        id="shamemezahid"
        aria-label="Picture of Shamim Bin Zahid"
        height={128}
        width={128}
        className="w-32 aspect-1 rounded-full border-2 border-primary-700 dark:border-primary-500"
        draggable="false"
        preload="true"
        loading="lazy"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          {data?.intro?.greetings}
        </h1>
        <span className="text-base font-normal text-colors">
          {data?.intro?.tagline}
        </span>
        <span className="flex items-center gap-2">
          <MapPin
            className="w-4 text-neutral-500 dark:text-neutral-400"
            strokeWidth={1.5}
          />
          <span className="text-sm font-light text-neutral-500 dark:text-neutral-400">
            {data?.intro?.location}
          </span>
        </span>
      </div>
    </div>
  );
}
