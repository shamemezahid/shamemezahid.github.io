import ThemeToggle from "@/components/togglers/themeToggler";
import TextSizeToggle from "@/components/togglers/textsizeToggler";
import AnimationToggle from "@/components/togglers/animationToggler";
import HighContrastToggle from "@/components/togglers/highContrastToggler";
import { useAccessibility } from "../context/AccessibilityContext";
import { useEffect, useRef, useState } from "react";
import { ArrowPathIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function AccessibilityAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);
  const { resetPreferences, hasPreferencesSet } = useAccessibility();
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={accordionRef}
      className="w-fit flex flex-col items-end absolute z-[2] top-8 right-8"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-400 ${isOpen ? "w-full" : "w-11"}`}
      >
        <span
          className={`text-sm text-left overflow-hidden whitespace-nowrap ${isOpen ? "w-32 opacity-100 mx-2" : "w-0 opacity-0 mx-0"} transition-all duration-400`}
        >
          Accessibility Menu
        </span>
        <Cog6ToothIcon
          className={`w-5 h-5 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`w-full grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="w-60 p-2 mt-1 bg-white/95 dark:bg-neutral-900/95 rounded-3xl flex flex-col gap-2">
            <ThemeToggle />
            <TextSizeToggle />
            <AnimationToggle />
            <HighContrastToggle />
          </div>
            <div className={`w-full grid transition-all duration-300 ${hasPreferencesSet() ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="w-full overflow-hidden">
                <button
                  onClick={() => {
                    setIsResetting(true);
                    sessionStorage.clear();
                    resetPreferences();
                    setTimeout(() => setIsResetting(false), 1000);
                  }}
                  className="w-[calc(100%-1rem)] p-2 mx-2 my-1 bg-neutral-100 dark:bg-neutral-800 text-sm text-cyan-700 dark:text-cyan-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer rounded-full"
                >
                  <div className="w-fit flex items-center">
                    <ArrowPathIcon className={`w-6 h-6 ${isResetting ? "animate-spin" : ""}`} />
                    <p className="text-sm mx-2">Reset Preferences</p>
                  </div>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
