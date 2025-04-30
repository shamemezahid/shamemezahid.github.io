"use client"

import { PauseIcon, PlayIcon } from "lucide-react";
import { useAccessibility } from "../context/AccessibilityContext";

export default function AnimationToggle({ className }) {
  const { isAnimated, setIsAnimated } = useAccessibility();

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
    if (isAnimated) {
      document.body.classList.add("reduce-animation");
      sessionStorage.setItem("isAnimated", "false");
    } else {
      document.body.classList.remove("reduce-animation");
      sessionStorage.removeItem("isAnimated");
    }
  };

  return (
    <button
      onClick={toggleAnimation}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200/25 dark:bg-neutral-700/25 hover:bg-neutral-100/25 dark:hover:bg-neutral-600/25 backdrop-blur text-neutral-600 dark:text-neutral-300 rounded-lg transition-all`}
      aria-label={isAnimated ? "Reduce animations" : "Enable animations"}
      title={isAnimated ? "Reduce animations" : "Enable animations"}
    >
      <div className="flex items-center">
        {isAnimated ? (
          <>
            <PauseIcon className="w-6 h-6" strokeWidth={1.5}/>
            <p className="text-sm mx-2">Reduce Motion</p>
          </>
        ) : (
          <>
            <PlayIcon className="w-6 h-6" strokeWidth={1.5}/>
            <p className="text-sm mx-2">Enable Motion</p>
          </>
        )}
      </div>
    </button>
  );
}
