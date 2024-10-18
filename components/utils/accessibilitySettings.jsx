import ThemeToggle from "@/components/togglers/themeToggler";
import TextSizeToggle from "@/components/togglers/textsizeToggler";
import AnimationToggle from "@/components/togglers/animationToggler";

import { useEffect, useRef, useState } from "react";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function AccessibilityAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

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
          <div className="p-2 bg-white/95 dark:bg-neutral-900/95 rounded-3xl flex flex-col gap-2">
            <ThemeToggle />
            <TextSizeToggle />
            <AnimationToggle />
            <p className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-normal">
              Preferences will reset upon{" "}
              <button
                onClick={() => window.location.reload()}
                className="text-emerald-700 dark:text-emerald-500 hover:underline cursor-pointer"
              >
                reload
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
