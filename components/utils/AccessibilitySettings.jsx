import ThemeToggle from "@/components/togglers/ThemeToggler";
import TextSizeToggle from "@/components/togglers/TextsizeToggler";
import AnimationToggle from "@/components/togglers/AnimationToggler";
import HighContrastToggle from "@/components/togglers/HighContrastToggler";
import { useAccessibility } from "../context/AccessibilityContext";
import { useEffect, useRef, useState } from "react";
import {
  ChevronsDown,
  ChevronsDownIcon,
  PersonStandingIcon,
  RefreshCcwIcon,
} from "lucide-react";
import SeparatorLine from "./SeparatorLine";

export default function AccessibilityAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);
  const timeoutRef = useRef(null);
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
      className="flex flex-col items-end"
    >
      <div
        className={`mb-2 w-full grid duration-300 transition-all ease-in ${isOpen ? "delay-300 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="w-60 p-2 mt-1 bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-neutral-600/25 dark:border-neutral-400/25 rounded-3xl flex flex-col gap-1">
            <div className="overflow-hidden rounded-2xl flex flex-col transition gap-1">
              <ThemeToggle />
              <TextSizeToggle />
              <AnimationToggle />
              <HighContrastToggle />
              <button
                onClick={() => {
                  setIsResetting(true);
                  sessionStorage.clear();
                  resetPreferences();
                  setTimeout(() => setIsResetting(false), 1000);
                }}
                className={`flex w-full gap-3 items-center p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-primary-700 dark:text-primary-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 ease-in-out overflow-hidden ${hasPreferencesSet() ? `h-9 ` : ` h-0 py-0 -my-[2px] `}`}
              >
                <RefreshCcwIcon
                  strokeWidth={1.5}
                  className={`w-5 h-5 ${isResetting ? "animate-spin" : ""}`}
                />
                <span className="text-sm text-left">Reset Preferences</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center p-3 rounded-3xl bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 shadow-none duration-300 ease-[cubic-bezier(0.6,-0.4,0.5,1.5)] border dark:border-neutral-600/50 border-neutral-400/50 h-[46px] ${isOpen ? "w-full" : "w-[46px] hover:shadow-700 hover:shadow-2xl delay-300"}`}
      >
        <span
          className={`text-sm text-left overflow-hidden whitespace-nowrap ${isOpen ? "w-32 opacity-100 mx-2" : "w-0 opacity-0 mx-0"} duration-500`}
        >
          Accessibility Menu
        </span>
        <PersonStandingIcon
          strokeWidth={1.5}
          className={`w-5 h-5 transition-all duration-300 ${isOpen ? "rotate-180 opacity-0 w-0 h-0" : "rotate-0 opacity-100"}`}
        />
        <ChevronsDownIcon
          strokeWidth={1.5}
          className={`w-5 h-5 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0 w-0 h-0 hidden"}`}
        />
      </button>
    </div>
  );
}
