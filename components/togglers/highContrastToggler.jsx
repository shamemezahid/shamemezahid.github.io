import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function HighContrastToggle({ className }) {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  return (
    <button
      onClick={toggleHighContrast}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
      title={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
    >
      <div className="flex items-center">
        {isHighContrast ? (
          <>
            <MoonIcon className="w-6 h-6" />
            <p className="text-sm mx-2">Normal Contrast</p>
          </>
        ) : (
          <>
            <SunIcon className="w-6 h-6" />
            <p className="text-sm mx-2">High Contrast</p>
          </>
        )}
      </div>
    </button>
  );
}
