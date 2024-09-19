import { useState, useEffect } from "react";
import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";

export default function TextSizeToggle({ className }) {
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    const savedTextSize = localStorage.getItem("largeText");
    if (savedTextSize === "true") {
      setIsLargeText(true);
      document.documentElement.classList.add("large-text");
    }
  }, []);

  const toggleTextSize = () => {
    setIsLargeText(!isLargeText);
    if (!isLargeText) {
      document.documentElement.classList.add("large-text");
      localStorage.setItem("largeText", "true");
    } else {
      document.documentElement.classList.remove("large-text");
      localStorage.setItem("largeText", "false");
    }
  };

  return (
    <button
      onClick={toggleTextSize}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isLargeText ? "Decrease text size" : "Increase text size"}
      title={isLargeText ? "Decrease text size" : "Increase text size"}
    >
      {isLargeText ? (
        <div className="relative flex items-center">
          <MagnifyingGlassPlusIcon className="transition-all duration-700 w-0 h-0" />
          <MagnifyingGlassMinusIcon className="transition-all duration-700 w-6 h-6" />
          <p className="text-sm mx-2">Regular Text</p>
        </div>
      ) : (
        <div className="relative flex items-center">
          <MagnifyingGlassPlusIcon className="transition-all duration-700 w-6 h-6" />
          <MagnifyingGlassMinusIcon className="transition-all duration-700 w-0 h-0" />{" "}
          <p className="text-sm mx-2">Large Text</p>
        </div>
      )}
    </button>
  );
}
