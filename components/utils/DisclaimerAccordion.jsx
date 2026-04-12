"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronsDownIcon, SparklesIcon } from "lucide-react";

export default function DisclaimerAccordion() {
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
      className="flex flex-col items-end"
    >
      <div
        className={`mb-2 w-full grid duration-300 transition-all ease-in ${isOpen ? "delay-300 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="w-60 p-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-neutral-600/25 dark:border-neutral-400/25 rounded-3xl flex flex-col gap-3">
            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              AI notice ✨
            </p>
            <p className="text-sm !font-normal text-left text-neutral-700 dark:text-neutral-300 leading-relaxed">
              No artificial intelligence was used in the design, nor in the architectural decisions of this website. Only for implementing solutions at scale, exactly what machines are for. 
 <br /> <br />
 AI is not your creative copilot, it&apos;s an efficient throughput tool with probabilistic but massive information retrieval. Use wisely.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center p-3 rounded-3xl 
          bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur 
          text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200/50 
          dark:hover:bg-neutral-700/50 shadow-none duration-300 ease-[cubic-bezier(0.6,-0.4,0.5,1.5)] 
          border dark:border-neutral-600/50 border-neutral-400/50 h-12 
          ${isOpen ? "w-full justify-between" : "w-12 hover:shadow-700 hover:shadow-2xl delay-300 justify-center"}`}
      >
        <span
          className={`text-sm text-left overflow-hidden whitespace-nowrap ${isOpen ? "w-32 opacity-100 mx-2" : "w-0 opacity-0 mx-0"} duration-500`}
        >
          Disclaimer
        </span>
        <SparklesIcon
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
