import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useAccessibility } from "../context/AccessibilityContext";

export default function ThemeToggle({className}) {
  const { theme, setTheme } = useAccessibility();

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      sessionStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={className+` w-full h-10 p-2 grid bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={theme == "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={theme == "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <div className="flex items-center">
          <MoonIcon className="transition-all duration-700 w-0 h-0" />
          <SunIcon className="transition-all duration-700 w-6 h-6" />
          <p className="text-sm mx-2">Light Mode</p>
          
        </div>
      ) : (
        <div className="flex items-center">
          <MoonIcon className="transition-all duration-700 w-6 h-6" />
          <SunIcon className="transition-all duration-700 w-0 h-0" />
          <p className="text-sm mx-2">Dark Mode</p>
        </div>
      )}
    </button>
  );
}
