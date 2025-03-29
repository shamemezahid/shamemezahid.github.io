import ThemeToggle from "@/components/togglers/ThemeToggler";
import TextSizeToggle from "@/components/togglers/TextsizeToggler";
import AnimationToggle from "@/components/togglers/AnimationToggler";
import HighContrastToggle from "@/components/togglers/HighContrastToggler";
import { useAccessibility } from "../context/AccessibilityContext";
import { useEffect, useRef, useState } from "react";
import SPAToggle from "../togglers/SpaToggler";
import { MenuIcon, RefreshCcwIcon } from "lucide-react";

export default function Navigator() {
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
    <div ref={accordionRef} className="flex flex-col items-end">
      <div
        className={`w-full grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="w-60 p-2 mt-1 bg-white/95 dark:bg-neutral-900/95 rounded-3xl flex flex-col gap-2">
            <ThemeToggle />
            <TextSizeToggle />
            <AnimationToggle />
            <HighContrastToggle />
            <SPAToggle />
          </div>
          <div
            className={`w-full grid transition-all duration-300 ${hasPreferencesSet() ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="w-full overflow-hidden">
              <button
                onClick={() => {
                  setIsResetting(true);
                  sessionStorage.clear();
                  resetPreferences();
                  setTimeout(() => setIsResetting(false), 1000);
                }}
                className="w-[calc(100%-1rem)] p-2 mx-2 my-1 bg-neutral-100 dark:bg-neutral-800 text-sm text-primary-700 dark:text-primary-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer rounded-full"
              >
                <div className="w-fit flex items-center">
                  <RefreshCcwIcon
                    strokeWidth={1.5}
                    className={`w-6 h-6 ${isResetting ? "animate-spin" : ""}`}
                  />
                  <p className="text-sm mx-2">Reset Preferences</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`shadow-primary-400 shadow-xl flex justify-between items-center p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-400 ${isOpen ? "w-full" : "w-11"}`}
      >
        <span
          className={`text-sm text-left overflow-hidden whitespace-nowrap ${isOpen ? "w-32 opacity-100 mx-2" : "w-0 opacity-0 mx-0"} transition-all duration-400`}
        >
          Navigation Menu
        </span>
        <MenuIcon
          strokeWidth={1.5}
          className={`w-5 h-5 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
